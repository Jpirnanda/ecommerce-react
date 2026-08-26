import React from "react";
import "./Card.css";

export default function Card({ imageUrl, cardTitle, qntAvaliacoes, preco }) {
  return (
    <div className="card">
      <img src={imageUrl} alt="" />
      <p className="cardTitle">{cardTitle}</p>
      <div className="cardInfo">
        <div className="esquerda">
          <div className="rating">
            <p>*****</p>
            <p>{qntAvaliacoes}</p>
          </div>
          <p className="precoProduto">{preco}</p>
        </div>
        <div className="direita">
          <button>CARRINHO</button>
        </div>
      </div>
    </div>
  );
}
