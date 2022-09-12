<template>
  <div id="main-wrapper" class="oxyy-login-register">
    <div class="container-fluid px-0">
      <div class="row g-0 min-vh-100">
        <div class="col-md-5">
          <div class="hero-wrap h-100">
            <div class="hero-mask opacity-3 bg-primary"></div>
            <div class="hero-content w-100">
              <div class="container d-flex flex-column min-vh-100">
                <div class="row g-0">
                  <div class="col-11 col-md-10 col-lg-9 mx-auto">
                    <div class="logo mt-5 mb-5 mb-md-0">
                      <a class="d-flex" href="#" title="xit logo">
                        <img
                          class="img-fluid"
                          src="../../assets/Frame.svg"
                          alt=""
                          srcset=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="row g-0 my-auto ms-4">
                  <div class="col-11 col-md-10 col-lg-9 mx-auto">
                    <ul class="timeline">
                      <li>
                        <p>Business Details</p>
                      </li>
                      <li>
                        <p>Business Owner Details</p>
                      </li>
                      <li>
                        <p>Business Owner Documents</p>
                      </li>
                      <li>
                        <p>Contact Person Details</p>
                      </li>
                      <li>
                        <p>Payment Details</p>
                      </li>
                    </ul>
                  </div>
                </div>
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
                <h3 class="fw-600 mb-4">Merchant Registration</h3>

                <form id="loginForm" method="post">
                  <!-- Business Details start -->
                  <div class="step">
                    <div>
                      <h6>Business Details</h6>
                      <hr />
                    </div>
                    <div class="mb-3">
                      <label for="username" class="form-label fw-500"
                        >Name of your business
                        <span class="text-danger">*</span></label
                      >
                      <input
                        type="text"
                        class="form-control bg-light border-light"
                        id="businessName"
                        required
                        placeholder="Enter business name"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="username" class="form-label fw-500"
                        >Media link <span class="text-danger">*</span></label
                      >
                      <input
                        type="text"
                        class="form-control bg-light border-light"
                        id="mediaLink"
                        required
                        placeholder="Enter Media link"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="username" class="form-label fw-500"
                        >Address <span class="text-danger">*</span></label
                      >
                      <input
                        type="text"
                        class="form-control bg-light border-light"
                        id="address"
                        required
                        placeholder="Enter Address"
                      />
                    </div>
                  </div>
                  <!-- Business Details end -->
                  <!-- Business Owner Details start -->
                  <div class="step">
                    <div>
                      <h6>Business Owner Details</h6>
                      <hr />
                    </div>
                    <div class="row mb-3">
                      <div class="col">
                        <label for="username" class="form-label fw-500"
                          >First Name <span class="text-danger">*</span></label
                        >
                        <input
                          type="text"
                          class="form-control bg-light border-light"
                          id="firstname"
                          required
                          placeholder="Enter First Name"
                        />
                      </div>
                      <div class="col">
                        <label for="username" class="form-label fw-500"
                          >Last Name<span class="text-danger">*</span></label
                        >
                        <input
                          type="text"
                          class="form-control bg-light border-light"
                          id="lastname"
                          required
                          placeholder="Enter Last Name"
                        />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col">
                        <label for="username" class="form-label fw-500"
                          >Mobile Number
                          <span class="text-danger">*</span></label
                        >
                        <input
                          type="text"
                          class="form-control bg-light border-light"
                          id="mobile"
                          required
                          placeholder="Enter Mobile Number"
                        />
                      </div>
                      <div class="col">
                        <label for="username" class="form-label fw-500"
                          >Email<span class="text-danger">*</span></label
                        >
                        <input
                          type="email"
                          class="form-control bg-light border-light"
                          id="email"
                          required
                          placeholder="Enter Email"
                        />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col">
                        <label for="username" class="form-label fw-500"
                          >Password <span class="text-danger">*</span></label
                        >
                        <input
                          type="password"
                          class="form-control bg-light border-light"
                          id="Password"
                          required
                          placeholder="Enter Password"
                        />
                      </div>
                      <div class="col">
                        <label for="username" class="form-label fw-500"
                          >Confirm Password<span class="text-danger"
                            >*</span
                          ></label
                        >
                        <input
                          type="password"
                          class="form-control bg-light border-light"
                          id="confirmpassword"
                          required
                          placeholder="Enter Confirm Password"
                        />
                      </div>
                    </div>
                  </div>
                  <!-- Business Owner Details end -->

                  <!-- Business Owner Documents start -->
                  <div class="step">
                    <div>
                      <h6>Business Owner Documents</h6>
                      <hr />
                    </div>
                    <div class="row mb-3">
                      <div class="col">
                        <label for="username" class="form-label fw-500"
                          >Select hub <span class="text-danger">*</span></label
                        >
                        <select class="form-select">
                          <option selected>Select Hub</option>
                          <option value="1">...</option>
                        </select>
                      </div>
                      <div class="col">
                        <label for="formFile" class="form-label"
                          >Upload your Image</label
                        >
                        <input class="form-control" type="file" id="formFile" />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label for="username" class="form-label fw-500"
                        >ID Type <span class="text-danger">*</span></label
                      >

                      <div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="nid"
                            value="nid"
                          />
                          <label class="form-check-label" for="inlineRadio1"
                            >NID</label
                          >
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="passsport"
                            value="passport"
                          />
                          <label class="form-check-label" for="inlineRadio2"
                            >Passport</label
                          >
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="birth-certificate"
                            value="birth-certificate"
                          />
                          <label class="form-check-label" for="inlineRadio1"
                            >Birth Certificate</label
                          >
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="driving-licence"
                            value="driving-licence"
                          />
                          <label class="form-check-label" for="inlineRadio2"
                            >Driving Licence</label
                          >
                        </div>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col">
                        <label for="username" class="form-label fw-500"
                          >NID number <span class="text-danger">*</span></label
                        >
                        <input
                          type="text"
                          class="form-control bg-light border-light"
                          id="nid-number"
                          required
                          placeholder="Enter NID Number"
                        />
                      </div>
                      <div class="col">
                        <label for="formFile" class="form-label"
                          >Upload your Image</label
                        >
                        <input class="form-control" type="file" id="formFile" />
                      </div>
                    </div>
                  </div>
                  <!-- Business Owner Documents End -->
                  <!-- Contact Person Details Start -->
                  <div class="step">
                    <div>
                      <h6>Contact Person Details</h6>
                      <hr />
                    </div>
                    <div class="mb-3">
                      <label for="username" class="form-label fw-500"
                        >Contact person name
                        <span class="text-danger">*</span></label
                      >
                      <input
                        type="text"
                        class="form-control bg-light border-light"
                        id="businessName"
                        required
                        placeholder="Enter contact person  name"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="username" class="form-label fw-500"
                        >Contact person mobile number
                        <span class="text-danger">*</span></label
                      >
                      <input
                        type="text"
                        class="form-control bg-light border-light"
                        id="mediaLink"
                        required
                        placeholder="Enter contact person mobile number"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="username" class="form-label fw-500"
                        >Contac person email
                        <span class="text-danger">*</span></label
                      >
                      <input
                        type="text"
                        class="form-control bg-light border-light"
                        id="address"
                        required
                        placeholder="Enter contact person email"
                      />
                    </div>
                  </div>
                  <!-- Contact Person Details End -->
                  <!-- Payment Details Start -->
                  <div class="step">
                    <div>
                      <h6>Payment Details</h6>
                      <hr />
                    </div>

                    <div class="row mb-3">
                      <label for="username" class="form-label fw-500"
                        >Payment Type <span class="text-danger">*</span></label
                      >

                      <div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="mobile"
                            value="mobile"
                          />
                          <label class="form-check-label" for="inlineRadio1"
                            >Mobile</label
                          >
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="bank"
                            value="bank"
                          />
                          <label class="form-check-label" for="inlineRadio2"
                            >Bank</label
                          >
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="both"
                            value="both"
                          />
                          <label class="form-check-label" for="inlineRadio1"
                            >Both</label
                          >
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="cash"
                            value="cash"
                          />
                          <label class="form-check-label" for="inlineRadio2"
                            >Cash</label
                          >
                        </div>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col">
                        <label for="username" class="form-label fw-500"
                          >Mobile wallet provider
                          <span class="text-danger">*</span></label
                        >
                        <select class="form-select">
                          <option selected>Select</option>
                          <option value="1">...</option>
                        </select>
                      </div>
                      <div class="col">
                        <label for="username" class="form-label fw-500"
                          >Billing day <span class="text-danger">*</span></label
                        >
                        <select class="form-select">
                          <option selected>Select billing day</option>
                          <option value="1">...</option>
                        </select>
                      </div>
                    </div>

                    <div class="mb-3">
                      <label for="username" class="form-label fw-500"
                        >Mobile account name
                        <span class="text-danger">*</span></label
                      >
                      <input
                        type="text"
                        class="form-control bg-light border-light"
                        id="mobile-accoutn-name"
                        required
                        placeholder="Enter mobile account name"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="username" class="form-label fw-500"
                        >Mobile accont number
                        <span class="text-danger">*</span></label
                      >
                      <input
                        type="text"
                        class="form-control bg-light border-light"
                        id="mobile-account-number"
                        required
                        placeholder="Enter mobile account number "
                      />
                    </div>
                  </div>
                  <!-- Payment Details End -->
                </form>

                <div
                  class="d-flex justify-content-between align-items-center mt-5"
                >
                  <h6>
                    Already registerd?

                    <router-link to="/"> Log in here</router-link>
                  </h6>
                  <div class="d-flex justify-content-around align-items-center">
                    <div class="arrow-btn text-center">
                      <img
                        class="arrow-img mx-auto"
                        src="../../assets/left-arrow.svg"
                        alt=""
                        srcset=""
                      />
                    </div>
                    <div class="arrow-btn text-center ms-4">
                      <img
                        class="arrow-img mx-auto"
                        src="../../assets/right-arrow.svg"
                        alt=""
                        srcset=""
                      />
                    </div>
                  </div>
                </div>
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
  // position: absolute;
  left: 0%;
  right: 55.56%;
  top: 0%;
  bottom: 0%;

  background: linear-gradient(
    179.52deg,
    #f0ba1b -0.42%,
    rgba(240, 186, 27, 0.4) 6.35%,
    rgba(240, 186, 27, 0.2) 14.25%,
    rgba(240, 186, 27, 0.47) 26.18%,
    #f0ba1b 99.58%
  );
}
img {
  width: 153.95px;
  height: 60px;
}
ul.timeline {
  list-style-type: none;
  position: relative;
}
ul.timeline:before {
  content: " ";
  background: #d4d9df;
  display: inline-block;
  position: absolute;
  left: 29px;
  width: 2px;
  height: 100%;
  z-index: 400;
}
ul.timeline > li {
  margin: 50px 0;
  padding-left: 20px;
}
ul.timeline > li:before {
  content: " ";
  background: white;
  display: inline-block;
  position: absolute;
  border-radius: 50%;
  border: 3px solid #f0ba1b;
  left: 20px;
  width: 20px;
  height: 20px;
  z-index: 400;
}
.arrow-btn {
  width: 40px;
  height: 40px;
  background: #fff9e8;
  border-radius: 50%;
  cursor: pointer;
  .arrow-img {
    width: 17px;
    height: 17px;
    margin-top: 10px;
  }
}
</style>
