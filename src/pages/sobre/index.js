import React from "react";
import "./style.css";

import Socail from "../../components/Main/social";
import Category from "../../components/Main/category";

import cat1 from "../../assets/images/news/category/category1.png";
import cat2 from "../../assets/images/news/category/category2.png";
import cat3 from "../../assets/images/news/category/category3.png";

const About = () => {
  const category = [
    { id: 1, title: "Health", articles: 10, img: cat1 },
    { id: 2, title: "Tech", articles: 10, img: cat2 },
    { id: 3, title: "Code .", articles: 10, img: cat3 },
  ];
  return (
    <div>
      {/* breadcrumb */}
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
                  Sobre
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
              <h3>Sobre Linux Foss Angola</h3>
              <p align="justify">
                <b>linuxfossangola.ao</b> é um blog iniciado em 31 de Julho de
                2020.{" "}
              </p>{" "}
              <p align="justify">
                Criado com o objectivo de criar artigos práticos e úteis prontos
                para solução de problemas Linux e tecnologias de código aberto.
                Nosso foco é escrever artigos que o ensinem ou o ajudem a
                resolver um problema para uso de aspirantes como você e eu.{" "}
              </p>
              <p align="justify">
                {" "}
                Associado a este blog teremos o <b>plus.linuxfossangola.ao</b>,
                criado com intuito de manter uma comunidade angolana virada a
                Free Open Source Software, teremos discussões de divesos
                assuntos, resoluções de problemas e etc.{" "}
              </p>
              <p />
            </div>
            {/* col-lg-8 */}
            <div className="col-lg-4">
              <div className="sidebar">
                <Socail />
                <Category category={category} />
              </div>
            </div>
            {/* sidebar col end */}
          </div>
          {/* row end */}
        </div>
        {/* container end */}
      </section>
      {/* category-layout end */}
    </div>
  );
};

export default About;
