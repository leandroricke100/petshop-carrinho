import "./styles.scss";
import { useContext } from "react";
import { CartContext } from "../../components/contexts";
import { Link } from "react-router-dom";

export function Cart() {
  const { cart, total, removeItemCart, addItemCart } = useContext(CartContext);

  return (
    <div className="container">
      <h1 className="paragraph">Meu Carrinho</h1>

      {cart.length === 0 && (
        <div className="cart-void">
          <p className="cart-void-p">Ops seu carrinho esta vazio</p>
          <Link className="link-cart-void" to="/">
            Acessar produtos
          </Link>
        </div>
      )}

      {cart.map((item) => (
        <section key={item.id} className="container-items">
          <img src={item.cover} alt={item.title} />
          <strong>
            {item.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>

          <div className="buttons-quantity">
            <button onClick={() => removeItemCart(item)}>-</button>
            {item.amount}
            <button onClick={() => addItemCart(item)}>+</button>
          </div>

          <strong className="subtotal-items">
            SubTotal:{" "}
            <p>
              {item.total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </strong>
        </section>
      ))}

      {cart.length !== 0 && <p className="total">Total: {total}</p>}
    </div>
  );
}
