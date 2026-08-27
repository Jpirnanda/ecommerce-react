import React from "react";
import "./CardContainer.css";
import Card from "../Card/Card";

export default function CardContainer({
  listaProdutos,
  tituloSecao,
  nomeClasse,
}) {
  return (
    <>
      <h1>{tituloSecao}</h1>
      <div className={"cardContainer" + " " + nomeClasse}>
        {listaProdutos.map((produto, index) => (
          <div className="col" key={index}>
            <Card
              imageUrl={produto.imagemUrl}
              cardTitle={produto.nome}
              qntAvaliacoes={produto.qntAvaliacoes}
              preco={produto.preco}
              rating={produto.rating}
            ></Card>
          </div>
        ))}
      </div>
    </>
  );
}
