import React from "react";
import "./Layout.css";
import CardContainer from "../CardContainer/CardContainer";

export default function Layout() {
  const produtos = [
    {
      nome: "Camiseta Tech Mesh Respirável",
      preco: 119.9,
      precoDesconto: 89.9,
      imagemUrl:
        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=600",
      rating: 4.8,
      qntAvaliacoes: 142,
      maxParcelas: 6,
    },
    {
      nome: "Legging Cós Alto Compressão",
      preco: 189.9,
      precoDesconto: 149.9,
      imagemUrl:
        "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&q=80&w=600",
      rating: 3,
      qntAvaliacoes: 320,
      maxParcelas: 10,
    },
    {
      nome: "Top Esportivo Sustentação Alta",
      preco: 99.9,
      precoDesconto: 74.9,
      imagemUrl:
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=600",
      rating: 1,
      qntAvaliacoes: 98,
      maxParcelas: 6,
    },
    {
      nome: "Bermuda Run Dry Fit com Bolso",
      preco: 129.9,
      precoDesconto: 99.9,
      imagemUrl:
        "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=600",
      rating: 2,
      qntAvaliacoes: 85,
      maxParcelas: 8,
    },
    {
      nome: "Jaqueta Vermelha Moderna",
      preco: 79.9,
      precoDesconto: 59.9,
      imagemUrl:
        "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      qntAvaliacoes: 64,
      maxParcelas: 6,
    },
    {
      nome: "Short 2 em 1 com Compressão Interna",
      preco: 149.9,
      precoDesconto: 119.9,
      imagemUrl:
        "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=600",
      rating: 0,
      qntAvaliacoes: 210,
      maxParcelas: 8,
    },
    {
      nome: "Jaqueta Corta-Vento Ciclismo/Corrida",
      preco: 259.9,
      precoDesconto: 199.9,
      imagemUrl:
        "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=600",
      rating: 4.9,
      qntAvaliacoes: 175,
      maxParcelas: 12,
    },
    {
      nome: "Calça Jogger Moletom Leve",
      preco: 169.9,
      precoDesconto: 129.9,
      imagemUrl:
        "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&q=80&w=600",
      rating: 4.4,
      qntAvaliacoes: 53,
      maxParcelas: 10,
    },
    {
      nome: "Camiseta Manga Longa Proteção UV50+",
      preco: 139.9,
      precoDesconto: 109.9,
      imagemUrl:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=600",
      rating: 4.8,
      qntAvaliacoes: 167,
      maxParcelas: 8,
    },
    {
      nome: "Top Cropped Tiras Cruzadas",
      preco: 89.9,
      precoDesconto: 69.9,
      imagemUrl:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600",
      rating: 4.6,
      qntAvaliacoes: 112,
      maxParcelas: 6,
    },
    {
      nome: "Short Saruel Yoga Soft",
      preco: 109.9,
      precoDesconto: 84.9,
      imagemUrl:
        "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&q=80&w=600",
      rating: 4.3,
      qntAvaliacoes: 41,
      maxParcelas: 6,
    },
    {
      nome: "Blusão Casaco Fleece Esportivo",
      preco: 229.9,
      precoDesconto: 179.9,
      imagemUrl:
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=600",
      rating: 4.8,
      qntAvaliacoes: 94,
      maxParcelas: 12,
    },
    {
      nome: "Legging Sculpt Efeito Empina Bumbum",
      preco: 209.9,
      precoDesconto: 169.9,
      imagemUrl:
        "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&q=80&w=600",
      rating: 4.9,
      qntAvaliacoes: 520,
      maxParcelas: 10,
    },
    {
      nome: "Regata Nadador Dry Fit Ultralight",
      preco: 69.9,
      precoDesconto: 49.9,
      imagemUrl:
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=600",
      rating: 4.5,
      qntAvaliacoes: 130,
      maxParcelas: 6,
    },
    {
      nome: "Short Saia Beach Tennis / Funcional",
      preco: 119.9,
      precoDesconto: 89.9,
      imagemUrl:
        "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80&w=600",
      rating: 4.7,
      qntAvaliacoes: 78,
      maxParcelas: 6,
    },
  ];

  const produtosFemininos = [
    {
      nome: "Vestido Midi Canelado com Fenda",
      preco: 159.9,
      precoDesconto: 119.9,
      imagemUrl:
        "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=600",
      rating: 4.8,
      qntAvaliacoes: 184,
      maxParcelas: 8,
    },
    {
      nome: "Blazer Alfaiataria Oversized",
      preco: 289.9,
      precoDesconto: 229.9,
      imagemUrl:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=600",
      rating: 4.9,
      qntAvaliacoes: 210,
      maxParcelas: 12,
    },
    {
      nome: "Calça Wide Leg Jeans Cintura Alta",
      preco: 199.9,
      precoDesconto: 159.9,
      imagemUrl:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=600",
      rating: 4.7,
      qntAvaliacoes: 340,
      maxParcelas: 10,
    },
    {
      nome: "Saia Plissada Midi Acetinada",
      preco: 149.9,
      precoDesconto: 119.9,
      imagemUrl:
        "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&q=80&w=600",
      rating: 4.8,
      qntAvaliacoes: 128,
      maxParcelas: 8,
    },
    {
      nome: "Macacão Pantalona com Cinto",
      preco: 239.9,
      precoDesconto: 189.9,
      imagemUrl:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600",
      rating: 4.9,
      qntAvaliacoes: 156,
      maxParcelas: 12,
    },
    {
      nome: "Cardigan Tricô Alongado Open Front",
      preco: 179.9,
      precoDesconto: 139.9,
      imagemUrl:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=600",
      rating: 4.5,
      qntAvaliacoes: 72,
      maxParcelas: 10,
    },
    {
      nome: "Camisa de Seda Botões Frontais",
      preco: 219.9,
      precoDesconto: 169.9,
      imagemUrl:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=600",
      rating: 4.7,
      qntAvaliacoes: 88,
      maxParcelas: 10,
    },
    {
      nome: "Kimono Estampado Bohemio",
      preco: 129.9,
      precoDesconto: 99.9,
      imagemUrl:
        "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&q=80&w=600",
      rating: 4.4,
      qntAvaliacoes: 61,
      maxParcelas: 6,
    },
  ];

  const produtosMasculinos = [
    {
      nome: "Camisa Polo Piquet Slim Fit",
      preco: 129.9,
      precoDesconto: 99.9,
      imagemUrl:
        "https://images.unsplash.com/photo-1625910513413-c23b8bb81cba?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.8,
      qntAvaliacoes: 156,
      maxParcelas: 6,
    },
    {
      nome: "Jaqueta Jeans Oversized Streetwear",
      preco: 279.9,
      precoDesconto: 219.9,
      imagemUrl:
        "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80&w=600",
      rating: 4.9,
      qntAvaliacoes: 230,
      maxParcelas: 12,
    },
    {
      nome: "Calça Chino Sarja Casual",
      preco: 189.9,
      precoDesconto: 149.9,
      imagemUrl:
        "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=600",
      rating: 4.7,
      qntAvaliacoes: 189,
      maxParcelas: 10,
    },
    {
      nome: "Camiseta Linho Gola Padre",
      preco: 139.9,
      precoDesconto: 109.9,
      imagemUrl:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=600",
      rating: 4.6,
      qntAvaliacoes: 87,
      maxParcelas: 8,
    },
    {
      nome: "Bermuda Cargo Algodão com Bolsos",
      preco: 159.9,
      precoDesconto: 129.9,
      imagemUrl:
        "https://images.unsplash.com/photo-1617953644310-e690da9be982?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.5,
      qntAvaliacoes: 112,
      maxParcelas: 8,
    },
    {
      nome: "Blazer Esporte Fino Slim",
      preco: 349.9,
      precoDesconto: 279.9,
      imagemUrl:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600",
      rating: 4.9,
      qntAvaliacoes: 145,
      maxParcelas: 12,
    },
    {
      nome: "Moletom Canguru Basic com Capuz",
      preco: 199.9,
      precoDesconto: 159.9,
      imagemUrl:
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=600",
      rating: 4.8,
      qntAvaliacoes: 275,
      maxParcelas: 10,
    },
    {
      nome: "Camisa Social Algodão Maquinetado",
      preco: 179.9,
      precoDesconto: 139.9,
      imagemUrl:
        "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&q=80&w=600",
      rating: 4.7,
      qntAvaliacoes: 94,
      maxParcelas: 10,
    },
  ];

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
        <CardContainer
          listaProdutos={produtos}
          tituloSecao={"Roupas em Destaque"}
        ></CardContainer>
        <CardContainer
          listaProdutos={produtosFemininos}
          tituloSecao={"Roupas Femininas"}
          nomeClasse={"feminino"}
        ></CardContainer>
        <CardContainer
          listaProdutos={produtosMasculinos}
          tituloSecao={"Roupas Masculinas"}
          nomeClasse={"masculino"}
        ></CardContainer>
      </main>
      <footer>
        <p>Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
