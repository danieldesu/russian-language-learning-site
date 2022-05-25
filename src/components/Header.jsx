import { Link } from "react-router-dom";
import logo from "../assets/logo-easyrussian.png";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="logo" />
        <h1>EASYRUSSIAN.NET</h1>
      </Link>
    </div>
  );
}
