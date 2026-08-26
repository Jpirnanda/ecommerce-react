import React from "react";
import "./Layout.css";
import CardContainer from "../CardContainer/CardContainer";

export default function Layout() {
  return (
    <div>
      <header>
        <div>
          <h1>Logo</h1>
        </div>
        <div>
          <a href="">Home</a>
          <a href="">Produtos</a>
          <a href="">Fale Conosco</a>
        </div>
      </header>
      <main>
        <img
          className="banner"
          src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        <CardContainer></CardContainer>
      </main>
      <footer>
        <p>Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
