import React from "react";
import "./style.css";
import image2 from "../../assets/images/banner-image/image2.png";

import Socail from "../../components/Main/social";
import Category from "../../components/Main/category";
import cat1 from "../../assets/images/news/category/category1.png";
import cat2 from "../../assets/images/news/category/category2.png";
import cat3 from "../../assets/images/news/category/category3.png";

const Contacts = () => {
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
                  <a href="#">Home</a>
                </li>

                <li>
                  <i className="fa fa-angle-right" />
                  Contact
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
              <h3>Contacte-nos</h3>
              <p>
                Lumbersexual meh sustainable Thundercats meditation kogi. Tilde
                Pitchfork vegan, gentrify minim elit semiotics non messenger bag
                Austin which roasted Lumbersexual meh sustainable Thundercats
                meditation kogi. Tilde Pitchfork vegan, gentrify minim elit
                semiotics non messenger bag Austin which roasted
              </p>
              <div className="widget contact-info">
                <div className="contact-info-box">
                  <div className="contact-info-box-content">
                    <h4>Email</h4>
                    <p>suporte@linuxfossangola.ao</p>
                  </div>
                </div>
              </div>
              {/* Widget end */}
              <h3>Formulário de Contacto</h3>
              <form
                id="contact-form"
                action="http://demo.themewinter.com/html/digiqole/contact-form.php"
                method="post"
              >
                <div className="error-container" />
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        className="form-control form-control-name"
                        name="name"
                        id="name"
                        type="text"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        className="form-control form-control-email"
                        name="email"
                        id="email"
                        type="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Subject</label>
                      <input
                        className="form-control form-control-subject"
                        name="subject"
                        id="subject"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    className="form-control form-control-message"
                    name="message"
                    id="message"
                    rows={10}
                    required
                    defaultValue={""}
                  />
                </div>
                <div>
                  <button className="btn btn-submit" type="submit">
                    Send Message
                  </button>
                </div>
              </form>
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

export default Contacts;
