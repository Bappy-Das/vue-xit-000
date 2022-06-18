<template>
  <div id="main-wrapper">
    <div class="container-fluid px-0">
      <div class="row g-0 min-vh-100">
        <div class="col-md-5">
          <div class="hero-wrap h-100">
            <div class="hero-logo min-vh-100">
              <div
                class="logo min-vh-100 d-flex justify-content-center align-items-center"
              >
                <img
                  class="img-fluid"
                  src="../../assets/Frame.svg"
                  alt=""
                  srcset=""
                />

                <p class="copyright">
                  &copy; XIT {{ new Date().getFullYear() }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Login Form
      ========================= -->
        <div class="col-md-7 d-flex flex-column">
          <div class="container my-auto py-5">
            <div class="row g-0">
              <div class="col-11 col-md-10 col-lg-9 col-xl-8 mx-auto">
                <h3 class="fw-600 mb-4">Login</h3>

                <form id="loginForm" method="post">
                  <div class="mb-3">
                    <label for="username" class="form-label fw-500"
                      >User Name <span class="text-danger">*</span></label
                    >
                    <input
                      type="text"
                      class="form-control bg-light border-light"
                      id="username"
                      required
                      placeholder="Enter User Name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="loginPassword" class="form-label fw-500"
                      >Password</label
                    >
                    <!-- <a class="float-end text-2" href="forgot-password-10.html"
                      >Forgot Password ?</a
                    > -->
                    <input
                      type="password"
                      class="form-control bg-light border-light"
                      id="loginPassword"
                      required
                      placeholder="Enter Password"
                    />
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                      </label>
                    </div>
                    <h6>Forgot Password ?</h6>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center mt-4"
                  >
                    <h6>Don’t have an account ? Register here</h6>
                    <button class="shadow-none mt-2" type="submit">
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.hero-wrap {
  //   position: absolute;

  background: linear-gradient(
    179.52deg,
    #f0ba1b -0.42%,
    rgba(240, 186, 27, 0.4) 28.75%,
    rgba(240, 186, 27, 0.2) 47.5%,
    rgba(240, 186, 27, 0.47) 68.33%,
    #f0ba1b 99.58%
  );

  .copyright {
    position: absolute;
    left: 35.08%;
    right: 57.85%;
    top: 95.05%;
    bottom: 2.89%;
  }
}
button {
  width: 100px;
  height: 40px;
  background: #f0ba1b;
  border-radius: 8px;
}
</style>
