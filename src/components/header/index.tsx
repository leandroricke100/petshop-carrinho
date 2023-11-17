import { useContext } from "react";
import { CartContext } from "../contexts";
import "./styles.scss";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

export function Header() {
  const { cartAmount } = useContext(CartContext);

  return (
    <header>
      <nav className="header-nav">
        <Link className="text-header" to="/">
          PetShop
        </Link>
        <Link className="icon-cart" to="/cart">
          <BsCartPlus />
          {cartAmount > 0 && <span className="quantity-car">{cartAmount}</span>}
        </Link>
      </nav>
    </header>
  );
}
