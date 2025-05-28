import {createContext, ReactNode, useContext, useEffect, useRef, useState} from 'react';
import { Client, IMessage, StompSubscription } from '@stomp/stompjs';
import SockJS from "sockjs-client";

interface StompContextType {
    client: Client | null;
    connected: boolean;
    subscribe: (topic: string, callback: (data: any) => void) => () => void; // returns unsubscribe fn
}

const StompContext = createContext<StompContextType | undefined>(undefined);

export const StompProvider = ({ children }: { children: ReactNode }) => {
    const [connected, setConnected] = useState(false);
    const clientRef = useRef<Client | null>(null);
    const subscriptionsRef = useRef<Map<string, StompSubscription>>(new Map());

    useEffect(() => {
        const socket = new SockJS('http://localhost:8080/ws');
        const client = new Client({
            webSocketFactory: () => socket,
            reconnectDelay: 5000,
            onConnect: () => {
                setConnected(true);
                console.log('Connected to STOMP');

                const playerId = localStorage.getItem("playerId");
                const gameCode = localStorage.getItem("gameCode");

                if (clientRef.current && playerId && gameCode) {
                    console.log('Resume Game ID: ', gameCode);
                    clientRef.current.publish({
                        destination: "/app/reconnect",
                        body: JSON.stringify({ playerId: Number(playerId), gameCode }),
                    });
                }
            },
            onDisconnect: () => {
                setConnected(false);
                console.log('Disconnected from STOMP');
            },
            onStompError: (frame) => {
                console.error('Broker error:', frame);
            },
        });

        clientRef.current = client;
        client.activate();

        return () => {
            subscriptionsRef.current.forEach((sub) => sub.unsubscribe());
            subscriptionsRef.current.clear();
            client.deactivate();
        };
    }, []);

    // subscribe function: returns unsubscribe
    const subscribe = (topic: string, callback: (data: any) => void) => {
        if (!clientRef.current || !connected) {
            console.warn('STOMP client not connected yet');
            return () => {};
        }

        // Prevent duplicate subscriptions on same topic + callback? (optional)
        const subscription = clientRef.current.subscribe(topic, (message: IMessage) => {
            const data = JSON.parse(message.body);
            callback(data);
        });

        subscriptionsRef.current.set(topic, subscription);

        // unsubscribe function
        return () => {
            subscription.unsubscribe();
            subscriptionsRef.current.delete(topic);
        };
    };

    return (
        <StompContext.Provider
            value={{
                client: clientRef.current,
                connected,
                subscribe
            }}
        >
            {children}
        </StompContext.Provider>
    );
};

export function useStomp() {
    const context = useContext(StompContext);
    if (!context) {
        throw new Error('useStomp must be used within a StompProvider');
    }
    return context;
}
