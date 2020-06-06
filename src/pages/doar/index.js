import React from "react";
import Socail from "../../components/Main/social";
import Category from "../../components/Main/category";
import "./style.css";

import cat1 from "../../assets/images/news/category/category1.png";
import cat2 from "../../assets/images/news/category/category2.png";
import cat3 from "../../assets/images/news/category/category3.png";

const Doar = () => {
  const category = [
    { id: 1, title: "Health", articles: 10, img: cat1 },
    { id: 2, title: "Tech", articles: 10, img: cat2 },
    { id: 3, title: "Code .", articles: 10, img: cat3 },
  ];
  return (
    <div>
      <div className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ol className="breadcrumb">
                <li>
                  <i className="fa fa-home" />
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <i className="fa fa-angle-right" />
                  Doar
                </li>
              </ol>
            </div>
          </div>
          {/* row end */}
        </div>
        {/* container end */}
      </div>
      {/* breadcrumb end */}
      <section className="main-content category-layout-1 pt-0">
        <div className="container">
          <div className="row ts-gutter-30">
            <div className="col-lg-8">
              <h3>Doação para Linux Foss Angola</h3>
              <p align="justify">
                {" "}
                O Linux FOSS Angola é um blog sem fins lucrativos que gera
                receitas com publicidades. O dinheiro será usado para pagar
                contas de hospedagem, largura de banda e ajudar em eventos sobre
                Free Open Source Software.{" "}
              </p>
              <p align="justify">
                Em troca, tudo o que precisamos é do seu forte apoio para
                permanecer vivo e continuar fornecendo nossos serviços a todos.
              </p>
              <p align="justify">
                Atrelado o blog criamos também o plus.linuxfossangola.ao, forum
                para criar uma comunidade onde as pessoas possam fazer suas
                consultas relacionadas ao Linux, compartilhar seus erros e obter
                ajuda com outras pessoas em uma interface muito interativa.
              </p>
              <p align="justify">
                Se você gosta do Linux Foss Angola e deseja que continuemos,
                faça uma doação para nós e incentive outras pessoas a fazê-lo.
                Você pode nos doar de um kwanza ou dolar a alguns kwanzas ou
                dólares.{" "}
              </p>
              <p align="justify">
                Se você tem um produto ou site que deseja mostrá-lo aos nossos
                leitores, considere anunciar conosco, os detalhes da publicidade
                podem ser encontrados <a>aqui</a>.{" "}
              </p>
              <p align="justify">Metódos de doação: </p>
              <p align="justify">
                <b>1. Depósito ou Transferência bancária - Em kwanzas: </b>
              </p>
              <p align="justify">
                <b>Conta:</b> 0101121212115{" "}
              </p>
              <p align="justify">
                <b>IBAN:</b> AO06 0040 0000 0101 1212 1211 5{" "}
              </p>
              <p align="justify">
                <b>Nome:</b> Linux FOSS Angola{" "}
              </p>
              <p align="justify">
                <b>2. Via PayPal:</b>
              </p>
            </div>
            {/* col-lg-8 */}
            <div className="col-lg-4">
              <div>
                <div className="sidebar">
                  <Socail />
                  <Category category={category} />
                </div>
              </div>
              {/* Sidebar Col end */}
            </div>
          </div>
          {/* row end */}
        </div>
        {/* container end */}
      </section>
      {/* category-layout end */}
    </div>
  );
};

export default Doar;
