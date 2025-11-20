import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="flex items-center bg-gray-300 justify-between p-4">
        <div>logo</div>
        <div>
          <ul className="flex space-x-8 text-lg">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to = "/Contact">Contact</Link>
              </li>
            <li>Services</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;







