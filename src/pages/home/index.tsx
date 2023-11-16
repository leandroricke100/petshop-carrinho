import "./styles.scss";
import { BsCartPlus } from "react-icons/bs";

export function Home() {
  return (
    <div>
      <main className="container-main">
        <h1 className="paragraf-main">Produtos em alta</h1>

        <div className="container-itens">
          <section className="itens">
            <img
              src="https://sujeitoprogramador.com/wp-content/uploads/2023/06/racao1.png"
              alt="foto da ração"
            />
            <p className="title-item">Ração Premier Fórmula para Cães Sênior</p>

            <div className="container-price">
              <strong className="price">R$5000</strong>
              <button className="button-cart">
                <BsCartPlus />
              </button>
            </div>
          </section>

          <section className="itens">
            <img
              src="https://sujeitoprogramador.com/wp-content/uploads/2023/06/racao1.png"
              alt="foto da ração"
            />
            <p className="title-item">Ração Premier Fórmula para Cães Sênior</p>

            <div className="container-price">
              <strong className="price">R$5000</strong>
              <button className="button-cart">
                <BsCartPlus />
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
