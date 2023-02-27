import React from "react";
import Layout from "../Layout";
import about from "../img/about.jpg";
import menu from "../img/menu/menu.jpg";
import bg1 from "../img/bg1.jpg";
export default function Home() {
  return (
    <Layout>
      <section id="home">
        <div className="container mt-5">
          <div className="row pt-5">
            <div className="col-sm-6">
              <h1>
                Yuk Minum <span>Kopi</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Magnam, reiciendis qui repellat expedita aperiam iusto explicabo
                laborum numquam fugit eligendi doloribus, maxime saepe tenetur
                totam deserunt ea veritatis consequuntur libero?
              </p>
              <button
                type="button"
                className="btn btn-bgn rounded-5 text-white"
              >
                Beli Sekarang
              </button>
            </div>
            <div className="col-md-6 d-none d-sm-flex pt-3">
              <img src={bg1} className="rounded-5 hero" alt="hero-section" />
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container about">
          <h2 className="text-center">
            Tentang <span>Kami</span>
          </h2>
          <div className="row mt-5">
            <div className="col-md-6">
              <img src={about} className="rounded-5" alt="" />
            </div>
            <div className="col-md-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias harum eveniet repellat distinctio dolores temporibus
                consectetur doloremque tempora quas? Accusantium error fugit
                accusamus suscipit vero voluptates quos odit dolores! Iusto.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="menu">
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <h2>
                Best <span>Coffe</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src={menu} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text text-center fw-semibold fs-3">
                    Expresso
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={menu} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text text-center fw-semibold fs-3">
                    Expresso
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={menu} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text text-center fw-semibold fs-3">
                    Expresso
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container mt-5">
          <div className="row text-center">
            <div className="col">
              <h2>
                Contact <span>Me</span>
              </h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-8">
              <form>
                <div className="mb-3">
                  <label for="name" className="form-label">
                    Name Lengkap
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="name"
                  />
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="email"
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Example textarea
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
