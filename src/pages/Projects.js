import React from "react";

const Projects = () => {
  return (
    <div className="section-padding bg-2" id="projects">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-5 text-center text-white">My Work</h2>
          </div>
          {/* =====  ===== */}
          <section className="col-lg-4 col-12 mb-5 mb-lg-0">
            <div className="news-thumb">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/luckyuho/crawler#readme"
                className="news-image-hover news-image-hover-warning"
              >
                <img
                  src="images/projectSmallPic/crawler.png"
                  className="img-fluid large-news-image news-image border-radius-5"
                  alt="basic web design"
                  title="basic web design"
                />
              </a>

              <div className="news-text-info">
                <h5 className="text-white">網路爬蟲 - 後端</h5>

                <p className="text-justify text-color">
                  這是一個專門爬
                  <a
                    href="https://movies.yahoo.com.tw/movie_intheaters.html?guccounter=1&guce_referrer=aHR0cHM6Ly9naXRodWIuY29tL2x1Y2t5dWhvL2NyYXdsZXI&guce_referrer_sig=AQAAAJppePBgWxBbs0BZpmLGmAmVrF0QrO6Zu5dBXGLJPlQCJ5pebfEsOPraHDgaxVJZtpmRrwjwQhApw4TgJnZr_4JTObw_QSw6_py9E1A9XrlxnCKqyKCTp06L9BGPwTaxMhwKmoVKl7APfygmbHagWu9ETx5shWlizN21DgEU9LKm"
                    target="_blank"
                    rel="noreferrer"
                    className="text-success"
                  >
                    yahoo 電影資訊
                  </a>
                  的工具，抓取電影第一頁的清單內容中所有的電影，然後進入每部電影連結內關於該部電影的詳細資訊，如電影時長與演員等資訊，那透過爬蟲就可以從一個電影清單網址的連結，獲取到該清單中每部電影的詳細資訊，主要是透過golang的channel的方式完成，其架構可從查看更多了解。
                </p>
                <p className="text-color">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/luckyuho/crawler#readme"
                    className="news-image-hover news-image-hover-warning text-primary"
                  >
                    查看更多
                  </a>
                </p>
                <span className="text-muted">
                  <p className="text-color">Feb 15, 2023</p>
                </span>
              </div>
            </div>
            <br />
          </section>

          {/* =====  ===== */}
          <section className="col-lg-4 col-12 mb-5 mb-lg-0">
            <div className="news-thumb">
              <p className="news-image-hover news-image-hover-warning no-margin-bottom">
                <img
                  src="images/projectSmallPic/linebot.png"
                  className="img-fluid large-news-image news-image border-radius-5"
                  alt="basic web design"
                  title="basic web design"
                />
              </p>
              <div className="news-text-info">
                <h5 className="text-white">line客服機器人 - 後端</h5>

                <p className="text-justify text-color">
                  這是公司line的客服機器人專案，主要透過golang搭配line完成屬於公司的line官方帳號，裡頭透過RichMenu可以快速執行登入以及核銷功能還有查看個人等資訊，其中登入方式採取串接第三方登入，此外也搭配並微調chatGPT符合公司的客服內容。
                </p>
                <p className="text-color news-image-hover news-image-hover-warning text-info">
                  暫不提供
                </p>
                <span className="text-muted">
                  <p className="text-color">Feb 14, 2023</p>
                </span>
              </div>
            </div>
            <br />
          </section>

          {/* =====  ===== */}
          <section className="col-lg-4 col-12 mb-5 mb-lg-0">
            <div className="news-thumb">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://ithelp.ithome.com.tw/users/20150797/ironman/5271"
                className="news-image-hover news-image-hover-warning"
              >
                <img
                  src="images/projectSmallPic/ithome30.png"
                  className="img-fluid large-news-image news-image border-radius-5"
                  alt="basic web design"
                  title="basic web design"
                />
              </a>

              <div className="news-text-info">
                <h5 className="text-white">鐵人賽30天golang文章 - 後端</h5>

                <p className="text-justify text-color">
                  這挑戰是為了強迫我自己讀書，快速學習的一個方法，裡面內容主要是關於golang大部分會使用到的功能及概念，除了基礎的程式概念如資料結構與函數或者抽象介面等等以外，後面還有講解一些開發會用到的觀念，如單元測試、錯誤處理還有高併發與golang特有的channel。
                </p>
                <p className="text-color">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://ithelp.ithome.com.tw/users/20150797/ironman/5271"
                    className="news-image-hover news-image-hover-warning text-primary"
                  >
                    查看更多
                  </a>
                </p>
                <span className="text-muted">
                  <p className="text-color">Sep 12, 2022</p>
                </span>
              </div>
            </div>
            <br />
          </section>

          {/* =====  ===== */}
          <section className="col-lg-4 col-12 mb-5 mb-lg-0">
            <div className="news-thumb">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/luckyuho/EthereumProject/tree/main/kickstart#readme"
                className="news-image-hover news-image-hover-warning"
              >
                <img
                  src="images/projectSmallPic/kickstarter.png"
                  className="img-fluid large-news-image news-image border-radius-5"
                  alt="basic web design"
                  title="basic web design"
                />
              </a>

              <div className="news-text-info">
                <h5 className="text-white">募資平台 - 區塊鏈</h5>

                <p className="text-justify text-color">
                  這是發布在Rinkeby測試鏈上的區塊鏈募資平台，使用React作為前端網頁設計。公司可在上面發起募資活動，投資者可決定是否支持該內容，一旦支持的投資者佔總投資者的數量過半，公司可將活動提出的固定募資金額轉給廠商，使募資活動公開透明。
                </p>
                <p className="text-color">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/luckyuho/EthereumProject/tree/main/kickstart#readme"
                    className="news-image-hover news-image-hover-warning text-primary"
                  >
                    查看更多
                  </a>
                </p>
                <span className="text-muted">
                  <p className="text-color">April 27, 2022</p>
                </span>
              </div>
            </div>
            <br />
          </section>

          {/* =====  ===== */}
          <section className="col-lg-4 col-12 mb-5 mb-lg-0">
            <div className="news-thumb">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/luckyuho/EthereumProject/tree/main/lottery-react#readme"
                className="news-image-hover news-image-hover-warning"
              >
                <img
                  src="images/projectSmallPic/lottery.png"
                  className="img-fluid large-news-image news-image border-radius-5"
                  alt="basic web design"
                  title="basic web design"
                />
              </a>

              <div className="news-text-info">
                <h5 className="text-white">獎金池 - 區塊鏈</h5>

                <p className="text-justify text-color">
                  這是發布在Rinkeby測試鏈上的區塊鏈小遊戲，使用React作為前端網頁設計。參與者必須投入固定的參加金，透過看似隨機的亂數產生方法，決定最後誰是贏家，贏家可將大家投入獎金池的獎金全數取回。
                </p>
                <p className="text-color">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/luckyuho/EthereumProject/tree/main/lottery-react#readme"
                    className="news-image-hover news-image-hover-warning text-primary"
                  >
                    查看更多
                  </a>
                </p>
                <span className="text-muted">
                  <p className="text-color">April 20, 2022</p>
                </span>
              </div>
            </div>
            <br />
          </section>

          {/* =====  ===== */}
          <section className="col-lg-4 col-12 mb-5 mb-lg-0">
            <div className="news-thumb">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://hahow.in/creations/622a0586499fda0007fdee42"
                className="news-image-hover news-image-hover-warning"
              >
                <img
                  src="images/projectSmallPic/RPS.png"
                  className="img-fluid large-news-image news-image border-radius-5"
                  alt="basic web design"
                  title="basic web design"
                />
              </a>

              <div className="news-text-info">
                <h5 className="text-white">猜拳遊戲 - 區塊鏈</h5>

                <p className="text-justify text-color">
                  這是發佈在Rinkeby測試鏈上的區塊鏈小遊戲。依照ERC20的協議標準所佈的合約，其中透過Oraclize的API來產生亂數。玩家可在合約透過輸入不同的數字對應出拳，再進行最後的勝負判斷。
                </p>
                <p className="text-color">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://hahow.in/creations/622a0586499fda0007fdee42"
                    className="news-image-hover news-image-hover-warning text-primary"
                  >
                    查看更多
                  </a>
                </p>
                <span className="text-muted">
                  <p className="text-color">March 10, 2022</p>
                </span>
              </div>
            </div>
            <br />
          </section>

          {/* ===== ===== */}
          <section className="col-lg-4 col-12 mb-5 mb-lg-0">
            <div className="news-thumb">
              <a
                href="#home"
                className="news-image-hover news-image-hover-warning"
              >
                <img
                  src="images/projectSmallPic/profile.png"
                  className="img-fluid large-news-image news-image border-radius-5"
                  alt="basic web design"
                  title="basic web design"
                />
              </a>

              <div className="news-text-info">
                <h5 className="text-white">個人網頁設計 - 前端</h5>

                <p className="text-justify text-color">
                  我的個人介紹網站，同時也是在學習前端設計時給自己的作業，透過網路參考一些範例，大架構是
                  <a
                    href="https://themewagon.com/themes/nomad-force-free-bootstrap-5-html5-landing-page-template/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-success"
                  >
                    Nomad Force 2021
                  </a>
                  ，再改成React的語法，並稍做些改變，同時也學習AOS與bootstrap
                  5並善加利用，作為一個檢定，同時也是一個完整的作品。
                </p>
                <p className="text-color">
                  <a
                    href="#home"
                    className="news-image-hover news-image-hover-warning text-success"
                  >
                    看看作品
                  </a>
                </p>
                <span className="text-muted">
                  <p className="text-color">May 05, 2022</p>
                </span>
              </div>
            </div>
            <br />
          </section>

          {/* =====  ===== */}
          <section className="col-lg-4 col-12 mb-5 mb-lg-0">
            <div className="news-thumb">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/luckyuho/UdemyWebCourseProject/tree/main/Project7_MERN#readme"
                className="news-image-hover news-image-hover-warning"
              >
                <img
                  src="images/projectSmallPic/mern.png"
                  className="img-fluid large-news-image news-image border-radius-5"
                  alt="basic web design"
                  title="basic web design"
                />
              </a>

              <div className="news-text-info">
                <h5 className="text-white">MERN - 前端＆後端</h5>

                <p className="text-justify text-color">
                  這是一個類似Udemy或Hahow的教學平台，可註冊老師或學生的身份。利用Mongodb作為資料儲存的伺服器，使用React作為前端網頁設計。老師可在上面開設課程與附註課程內容及金額，學生則可搜尋課程並選擇註冊課程。
                </p>
                <p className="text-color">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/luckyuho/UdemyWebCourseProject/tree/main/Project7_MERN#readme"
                    className="news-image-hover news-image-hover-warning text-primary"
                  >
                    查看更多
                  </a>
                </p>
                <span className="text-muted">
                  <p className="text-color">April 15, 2022</p>
                </span>
              </div>
            </div>
            <br />
          </section>

          {/* ===== ===== */}
          <section className="col-lg-4 col-12 mb-5 mb-lg-0">
            <div className="news-thumb">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://luckyuho.github.io/photo-website"
                className="news-image-hover news-image-hover-warning"
              >
                <img
                  src="images/projectSmallPic/photowebsite.png"
                  className="img-fluid large-news-image news-image border-radius-5"
                  alt="basic web design"
                  title="basic web design"
                />
              </a>

              <div className="news-text-info">
                <h5 className="text-white">圖片庫 - 前端</h5>

                <p className="text-justify text-color">
                  這是一個圖片搜尋網頁。透過Pexels提供的API，可瀏覽pexels的圖片以及搜尋有興趣的主題，每次顯示15個圖片，如果想看更多，可點擊下方的Load
                  more來取得更多圖片。
                </p>
                <p className="text-color">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://luckyuho.github.io/photo-website"
                    className="news-image-hover news-image-hover-warning text-success"
                  >
                    看看作品
                  </a>
                </p>
                <span className="text-muted">
                  <p className="text-color">April 04, 2022</p>
                </span>
              </div>
            </div>
            <br />
          </section>

          {/* ===== ===== */}
          <section className="col-lg-4 col-12 mb-5 mb-lg-0">
            <div className="news-thumb">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://luckyuho.github.io/todo-list"
                className="news-image-hover news-image-hover-warning"
              >
                <img
                  src="images/projectSmallPic/todolist.png"
                  className="img-fluid large-news-image news-image border-radius-5"
                  alt="basic web design"
                  title="basic web design"
                />
              </a>

              <div className="news-text-info">
                <h5 className="text-white">TodoList - 前端</h5>

                <p className="text-justify text-color">
                  這是一個可離線的網頁待辦清單App。透過網頁的local
                  storage儲存清單，除了新增清單以外，也可標記完成與刪除，此外如果需要，可透過Sort
                  By Time的按鈕依照時間排序。
                </p>
                <p className="text-color">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://luckyuho.github.io/todo-list"
                    className="news-image-hover news-image-hover-warning text-success"
                  >
                    看看作品
                  </a>
                </p>
                <span className="text-muted">
                  <p className="text-color">March 22, 2022</p>
                </span>
              </div>
            </div>
            <br />
          </section>

          {/* ===== ===== */}
          <section className="col-lg-4 col-12 mb-5 mb-lg-0">
            <div className="news-thumb">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://luckyuho.github.io/hawaii"
                className="news-image-hover news-image-hover-warning"
              >
                <img
                  src="images/projectSmallPic/webDesign.png"
                  className="img-fluid large-news-image news-image border-radius-5"
                  alt="basic web design"
                  title="basic web design"
                />
              </a>

              <div className="news-text-info">
                <h5 className="text-white">基礎網頁設計 - 前端</h5>

                <p className="text-justify text-color">
                  網頁設計，也是我踏入網頁設計的第一個作品，主要運用了html設計、css排版，以及使用了一點基礎的javascript，根據滑動的位置，導覽列會變成其他的顏色，還有將鼠標移置圖片上會有放大的效果，很有意思。
                </p>
                <p className="text-color">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://luckyuho.github.io/hawaii"
                    className="news-image-hover news-image-hover-warning text-success"
                  >
                    看看作品
                  </a>
                </p>
                <span className="text-muted">
                  <p className="text-color">March 19, 2022</p>
                </span>
              </div>
            </div>
            <br />
          </section>

          {/* =====  ===== */}
          <section id="owl3dproject" className="col-lg-4 col-12 mb-5 mb-lg-0">
            <div className="news-thumb">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/luckyuho/OWL3D#readme"
                className="news-image-hover news-image-hover-warning"
              >
                <img
                  src="images/projectSmallPic/kotlinApp.png"
                  className="img-fluid large-news-image news-image border-radius-5"
                  alt="basic web design"
                  title="basic web design"
                />
              </a>

              <div className="news-text-info">
                <h5 className="text-white">Kotlin App - 前端</h5>

                <p className="text-justify text-color">
                  在MVVM架構下，利用kotlin開發的Android
                  App，透過Retrofit2連接資料庫的API，並利用Paging3將資料顯示於畫面中，此外可透過Room將喜愛的項目存在離線暫存區。
                </p>
                <p className="text-color">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/luckyuho/OWL3D#readme"
                    className="news-image-hover news-image-hover-warning text-primary"
                  >
                    查看更多
                  </a>
                </p>
                <span className="text-muted">
                  <p className="text-color">Oct 07, 2021</p>
                </span>
              </div>
            </div>
            <br />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Projects;
