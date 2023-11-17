import "./styles.scss";
import { BsCartPlus } from "react-icons/bs";
import { useState, useEffect, useContext } from "react";
import { api } from "../../services/api";
import { CartContext } from "../../components/contexts";

export interface ProductsProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function Home() {
  const { addItemCart } = useContext(CartContext);
  const [products, setProducts] = useState<ProductsProps[]>([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products");

      setProducts(response.data);
    }

    getProducts();
  }, []);

  function handleAddCartItem(product: ProductsProps) {
    addItemCart(product);
  }

  return (
    <div>
      <main className="container-main">
        <h1 className="paragraf-main">Produtos em alta</h1>

        <div className="container-itens">
          {products.map((product) => (
            <section key={product.id} className="itens">
              <img src={product.cover} alt={product.title} />
              <p className="title-item">{product.title}</p>

              <div className="container-price">
                <strong className="price">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
                <button
                  className="button-cart"
                  onClick={() => handleAddCartItem(product)}
                >
                  <BsCartPlus />
                </button>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
