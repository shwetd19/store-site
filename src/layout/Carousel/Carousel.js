import "./Carousel.css";

function Carousel() {
  return (
    <>
      <section>
        <div class="slider">
          <div class="slide-track">
            <div class="container d-flex justify-content-center align-items-center">
              <div class="profile m-1">
                <div class="slide">
                  <img src="imgs\1.png" />
                </div>
                <div class="content position-absolute p-2 mt-5">
                  <div class="header d-flex align-items-center">
                    <span class="bi bi-arrow-right-circle-fill fs-1"></span>
                    <p class="title fw-bold fs-5 text-secondary mt-3 px-3">
                      Shwetas-1
                    </p>
                  </div>
                </div>
              </div>

              <div class="profile m-1">
                <div class="slide">
                  <img src="imgs\2.png" />
                </div>
                <div class="content position-absolute p-2 mt-5">
                  <div class="header d-flex align-items-center">
                    <span class="bi bi-arrow-right-circle-fill fs-1"></span>
                    <p class="title fw-bold fs-5 text-secondary mt-3 px-3">
                      Shwetas-2
                    </p>
                  </div>
                </div>
              </div>

              <div class="profile m-1">
                <div class="slide">
                  <img src="imgs\3.png" />
                </div>
                <div class="content position-absolute p-2 mt-5">
                  <div class="header d-flex align-items-center">
                    <span class="bi bi-arrow-right-circle-fill fs-1"></span>
                    <p class="title fw-bold fs-5 text-secondary mt-3 px-3">
                      Shwetas-3
                    </p>
                  </div>
                </div>
              </div>

              <div class="profile m-1">
                <div class="slide">
                  <img src="imgs\4.png" />
                </div>
                <div class="content position-absolute p-2 mt-5">
                  <div class="header d-flex align-items-center">
                    <span class="bi bi-arrow-right-circle-fill fs-1"></span>
                    <p class="title fw-bold fs-5 text-secondary mt-3 px-3">
                      Shwetas-4
                    </p>
                  </div>
                </div>
              </div>

              <div class="profile m-1">
                <div class="slide">
                  <img src="imgs\5.jpeg" />
                </div>
                <div class="content position-absolute p-2 mt-5">
                  <div class="header d-flex align-items-center">
                    <span class="bi bi-arrow-right-circle-fill fs-1"></span>
                    <p class="title fw-bold fs-5 text-secondary mt-3 px-3">
                      Shwetas-5
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Carousel;
