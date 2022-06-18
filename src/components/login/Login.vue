<template>
  <div class="row login">
    <div
      class="col-md-5 col-lg-5 logo-side d-flex justify-content-center align-items-center"
    >
      <div class="logo">
        <img src="../../assets/Frame.svg" alt="" />
      </div>
      <div class="truck">
        <img src="../../assets/truck.svg" alt="" />
      </div>
      <div class="bycycle">
        <img src="../../assets/bycycle.svg" alt="" />
      </div>
      <div class="group">
        <img src="../../assets/Group.svg" alt="" />
      </div>
      <div class="plane">
        <img src="../../assets/plane.svg" alt="" />
      </div>
      <div class="bike">
        <img src="../../assets/bike.svg" alt="" />
      </div>
      <div class="copyright">
        <p>&copy; XIT {{ new Date().getFullYear() }}</p>
      </div>
    </div>
    <div class="col-md-7 col-lg-7 input-side">
      <div>
        <h1>Login</h1>
        <p>Log back in below to check dashboard</p>
        <div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >User name <span class="text-danger">*</span></label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter User Name"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >User name <span class="text-danger">*</span></label
            >
            <input
              type="password"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Password"
            />
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Remember me
            </label>
          </div>
          <p class="text-info">Forgot Password ?</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <p class="d-flex align-items-center mt-4">
            Don’t have an account ? Register here
          </p>
          <button type="submit" class="login-btn">Log in</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import logo from "../../assets/Framde";
// export default {};
</script>
<style lang="scss" scoped>
.login {
  .logo-side {
    position: absolute;
    left: 0%;
    right: 55.56%;
    top: -0.1%;
    bottom: 0.1%;
    background: linear-gradient(
      179.52deg,
      #f0ba1b -0.42%,
      rgba(240, 186, 27, 0.4) 28.75%,
      rgba(240, 186, 27, 0.2) 47.5%,
      rgba(240, 186, 27, 0.47) 68.33%,
      #f0ba1b 99.58%
    );
    // .logo {
    //   position: absolute;
    //   left: 12.57%;
    //   right: 68.06%;
    //   top: 44.27%;
    //   bottom: 44.38%;
    // }
    .group {
      position: absolute;
      left: 0%;
      right: 92.78%;
      top: 86.17%;
      bottom: 3.92%;
    }
    .truck {
      position: absolute;
      left: 60.82%;
      right: 51.94%;
      top: 62.23%;
      bottom: 29.46%;
      opacity: 0.7;
    }
    .plane {
      position: absolute;
      left: 60.76%;
      right: 62.07%;
      top: 27.76%;
      // top: 32.62%;
      bottom: 58.53%;

      transform: rotate(-30deg);
    }
    .bike {
      position: absolute;
      left: 5%;
      right: 84.53%;
      top: 27.76%;
      bottom: 60.72%;
      opacity: 0.7;
    }
    .bycycle {
      position: absolute;
      left: 10%;
      // left: 4.93%;
      right: 87.46%;
      top: 61.09%;
      bottom: 29.78%;
    }
    .copyright {
      position: absolute;
      left: 80%;
      top: 95.05%;
      bottom: 2.89%;
      font-weight: 500;
      font-size: 13px;
      line-height: 20px;
    }
  }
  .input-side {
    position: absolute;
    width: 546px;
    height: 438px;
    left: 758px;
    top: 234px;
  }

  .login-btn {
    position: absolute;
    width: 100px;
    height: 40px;
    left: 79.56%;
    right: 11.39%;
    top: 75.15%;
    bottom: 31.48%;
    background: #f0ba1b;
    border-radius: 8px;
  }
}
</style>
