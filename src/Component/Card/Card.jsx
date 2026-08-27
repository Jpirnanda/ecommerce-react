import React from "react";
import "./Card.css";
import { FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export default function Card({
  imageUrl,
  cardTitle,
  qntAvaliacoes,
  preco,
  rating,
}) {
  const listaRating = [];

  for (let i = 0; i < rating; i++) {
    listaRating.push("cheio");
  }

  while (listaRating.length < 5) {
    listaRating.push("vazio");
  }

  return (
    <div className="card">
      <img src={imageUrl} alt="" />
      <p className="cardTitle">{cardTitle}</p>
      <div className="cardInfo">
        <div className="rating">
          <p>
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index} className={index < rating ? "cheio" : "vazio"}>
                <FaStar />
              </span>
            ))}
          </p>
          <p>{qntAvaliacoes} avaliações</p>
        </div>
        <div className="buy">
          <p className="precoProduto">R$ {preco}</p>

          <button>
            <FaCartShopping /> CARRINHO
          </button>
        </div>
      </div>
    </div>
  );
}
