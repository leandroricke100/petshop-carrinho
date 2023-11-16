import "./styles.scss";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav className="header-nav">
        <Link className="text-header" to="/">
          PetShop
        </Link>
        <Link className="icon-cart" to="/cart">
          <BsCartPlus />
          <span className="quantity-car">5</span>
        </Link>
      </nav>
    </header>
  );
}
