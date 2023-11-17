import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ProductsProps } from "../home";
import { api } from "../../services/api";
import { BsCartPlus } from "react-icons/bs";
import "./styles.scss";
import { CartContext } from "../../components/contexts";

export function Detail() {
  const { addItemCart } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState<ProductsProps>();

  useEffect(() => {
    async function getProduct() {
      const response = await api.get(`/products/${id}`);

      setProduct(response.data);
    }

    getProduct();
  }, [id]);

  function handleAddItem(item: ProductsProps) {
    addItemCart(item);
  }

  return (
    <div>
      <main className="container">
        {product && (
          <section className="container-items" key={product.id}>
            <div className="items">
              <img src={product.cover} alt="" />

              <div className="container-description">
                <p className="title">{product.title}</p>
                <p className="description">{product.description}</p>
                <strong className="price">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
                <button
                  className="button"
                  onClick={() => handleAddItem(product)}
                >
                  <BsCartPlus />
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
