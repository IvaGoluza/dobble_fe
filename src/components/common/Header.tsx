import { Link } from 'react-router-dom';

const Header = () => (
  <header
    className="py-4"
    style={{ backgroundImage: "url('/assets/background.png')" }}
  >
    <div className=" px-8 mx-auto flex justify-between items-center">
      <Link to="/">
        <img src="/public/assets/logo.png" alt="Dobble" className="h-16" />
      </Link>
    </div>
  </header>
);

export default Header;
