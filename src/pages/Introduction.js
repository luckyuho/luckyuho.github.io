import React from "react";

const Introduction = () => {
  return (
    <div className="section-padding pb-0 bg-1" id="about">
      <div className="container mb-5" data-aos="fade-up">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-5 text-center text-white">Know Me More</h2>
          </div>
          <div className="col-12 pb-3">
            <img
              src="images/icons/navlogo.png"
              alt="logo"
              style={{ height: 45 }}
            />
          </div>

          <div className="col-sm-7 col-12 mt-3">
            <h5 className="me-4 paragraph text-white">
              I'm <strong className="theme-color">YUHO</strong>, a Backend Engineer
            </h5>
            <p className="me-4 text-justify text-color">
              我是一個後端工程師，除了常見的後端開發技能外，還有開發line與整合chatgpt的經驗，完成專屬公司的line客服機器人，同時導入登入系統與核銷系統，有效拉近公司與客戶間的距離。
            </p>
            <p className="me-4 text-justify text-color">
              下面的
              <a
                  rel="noreferrer"
                  href="#projects"
                  className="text-success"
                >
                  Portfolio
                </a>
              是我曾經做過的一些作品，除了後端以外的技術，也有一些基本前端與區塊鏈的概念，其中這個個人網站也是我的作品之一
              ，如果有興趣，覺得我可以幫上一些忙， 歡迎與我聯絡 。
            </p>
          </div>

          <div className="col-sm-5 col-12">
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-1 border-bottom border-secondary">
                <p className="text-white">
                  <strong>Name</strong>: 曾于和 / YUHO
                </p>
              </li>
              <li className="list-group-item bg-1 border-bottom border-secondary">
                <p className="text-white">
                  <strong>Email</strong>:{" "}
                  <a
                    href="mailto:gsn915315@gmail.com?subject=YUHO%20個人網站&body="
                    className="theme-color"
                  >
                    gsn915315@gmail.com
                  </a>
                </p>
              </li>
              {/* <li className="list-group-item bg-1 border-bottom border-secondary">
                <p className="text-white">
                  <strong>Age</strong>: 30
                </p>
              </li> */}
              <li className="list-group-item bg-1">
                <p className="text-white">
                  <strong>From</strong>: Tainan, Taiwan
                </p>
              </li>
            </ul>
            <div className="button-center pt-3">
              {/* <a href="/cv/YUHO-resume.pdf" download="YUHO Resume"> */}
                {/* <button
                  type="button"
                  className="btn rounded-pill btn-success px-5 py-2"
                >
                  Download Resume
                </button> */}
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-3" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-3 col-12 p-0">
            <img
              src="images/introduction/developer.jpeg"
              className="img-fluid about-image"
              alt=""
            />
          </div>

          <div className="col-lg-3 col-12 bg-black">
            <div className="d-flex flex-column flex-wrap justify-content-center h-100 py-5 px-4 pt-lg-4 pb-lg-0">
              <h3 className="text-white mb-3">
                研究、挑戰、學習，目的只有一個，就是讓這個世界變得更有趣。
              </h3>

              <div style={{ textAlign: "right" }}>
                <p className="text-secondary-white-color float-right">- YUHO</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12 p-0">
            <section
              id="myCarousel"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="images/introduction/presentation.jpeg"
                    className="img-fluid team-image"
                    alt=""
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
