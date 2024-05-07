import React from "react";

const Form = () => {
  return (
    <div>
      <div class="flex justify-center items-center h-screen">
        <div class=" main-form w-[600px] shadow-md  bg-white">
          <div class="bg-white pb-5 pt-5 ">
            <div class="header-part bg-white mb-3 px-10 ">
              <a href="#">
                <span class="arrow material-symbols-outlined">arrow_back</span>
              </a>
              <h1 className="rental">Rental</h1>
              <h3 className="trip">Request a Trip</h3>
            </div>

            <hr />

            <div class="car-brand flex justify-between py-6 px-10 ">
              <div class="item-detail ">
                <div>
                  <img className="car" src="../../car.png" alt="" />
                </div>
                <div>
                  <h2 className="sedan">Sedan Car</h2>
                  <p>4 Seats</p>
                </div>
              </div>
              <div>
                <a href="#">
                  <span class="pen material-symbols-outlined">edit</span>
                </a>
              </div>
            </div>

            <div className="devider"></div>

            <div class="destination flex gap-4 items-center px-10  py-3">
              <div class="pick-drop flex flex-col gap-3 items-center">
                <span class="pickup-logo material-symbols-outlined">
                  radio_button_unchecked
                </span>
                <div className="vertile"></div>
                {/*  */}
                <span
                  id="hiddenDiv3"
                  className="hidden pickup-logo2 material-symbols-outlined"
                >
                  radio_button_unchecked
                </span>
                <div id="hiddenDiv4" className="hidden vertile"></div>
                {/*  */}

                <span class="drop-logo material-symbols-outlined">stop</span>
              </div>

              <div className="flex flex-col gap-5 me-20">
                <div>
                  <h2 className="pickup">Pickup Point</h2>
                  <input
                    placeholder="Search pickup location"
                    className="search"
                    type="search"
                  />
                </div>

                <div className="relative" data-v-a0ca3c8a>
                  <hr class="border-dashed mt-[4px] w-[470px]" />
                  <img
                    id="toggleIcon"
                    src="https://rental.jatri.co/_nuxt/add-via-point.68721e6d.svg"
                    className="w-[30px] h-[30px] absolute -right-[10px] -top-[13px] transition-all ease-in-out cursor-pointer "
                    alt
                    data-v-a0ca3c8a
                  /> 


                </div>

                {/*  */}
                <div id="hiddenDiv5" className="hidden">
                  <h2 className="pickup ">Via Point</h2>
                  <input
                    placeholder="Search via location"
                    className="search"
                    type="search"
                  />
                </div>

                <div
                  id="hiddenDiv6"
                  className="hidden relative"
                  data-v-a0ca3c8a
                >
                  <hr class="border-dashed mt-[4px] w-[470px]" />
                </div>
                {/*  */}

                <div>
                  <h2 className="pickup">Drop Off Point</h2>
                  <input
                    placeholder="Search drop off location"
                    className="search"
                    type="search"
                  />
                </div>
              </div>
            </div>

            <div className="devider"></div>

            <div class="date-time flex justify-between items-center px-10  py-6">
              <div class="item-detail ">
                <div className="flex gap-2">
                  <div>
                    <a href="#">
                      <span class="schedule-logo material-symbols-outlined">
                        calendar_month
                      </span>
                    </a>
                  </div>
                  <div>
                    <h1 className="dt">Select Date</h1>
                  </div>
                </div>
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Type here"
                  className="dtt input  w-full max-w-xs "
                />
              </div>
            </div>

            <hr />

            <div class="date-time flex justify-between items-center px-10  py-6">
              <div class="item-detail ">
                <div className="flex gap-2">
                  <div>
                    <a href="#">
                      <span class="schedule-logo material-symbols-outlined">
                        schedule
                      </span>
                    </a>
                  </div>
                  <div>
                    <h1 className="dt">Select Time</h1>
                  </div>
                </div>
              </div>
              <div >
                <input
                  type="time"
                  placeholder="3.44 am"
                  className="dtt dtt2 input  bg-white  w-full max-w-xs "
                />
              </div>
            </div>

            <hr />

            <div class="date-time flex justify-between items-center px-10  py-6">
              <div class="item-detail ">
                <div className="flex gap-2">
                  <div>
                    <a href="#">
                      <span class=" schedule-logo2 material-symbols-outlined">
                        travel
                      </span>
                    </a>
                  </div>
                  <div>
                    <h1 className="dt">Round Trip </h1>
                  </div>
                </div>
              </div>
              <div>
                <label for="toggle" class="flex items-center cursor-pointer">
                  <div class="relative">
                    <input id="toggle" type="checkbox" class="hidden" />

                    <div class="toggle-line w-10 h-5 bg-gray-400 rounded-full shadow-inner"></div>

                    <div class="toggle-dot absolute w-5 h-5 bg-white rounded-full shadow inset-y-0 left-0"></div>
                  </div>
                </label>
              </div>
            </div>

            <hr />

            <div
              id="hiddenDiv1"
              class="flex hidden date-time justify-between items-center px-10  py-6"
            >
              <div class="item-detail ">
                <div className="flex gap-2">
                  <div>
                    <a href="#">
                      <span class="schedule-logo material-symbols-outlined">
                        calendar_month
                      </span>
                    </a>
                  </div>
                  <div>
                    <h1 className="dt"> Select Round Trip Date</h1>
                  </div>
                </div>
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Type here"
                  className="dtt input  w-full max-w-xs "
                />
              </div>
            </div>

            <hr />

            <div
              id="hiddenDiv2"
              class="flex hidden date-time justify-between items-center px-10  py-6"
            >
              <div class="item-detail ">
                <div className="flex gap-2">
                  <div>
                    <a href="#">
                      <span class="schedule-logo material-symbols-outlined">
                        schedule
                      </span>
                    </a>
                  </div>
                  <div>
                    <h1 className="dt">Select Time</h1>
                  </div>
                </div>
              </div>
              <div>
                <input
                  type="time"
                  placeholder="3.44 am"
                  className="dtt dtt2 input  bg-white  w-full max-w-xs "
                />
              </div>
            </div>

            <hr />

            <div class="flex  justify-center py-6">
              <div class="item-detail ">
                <form>
                  <textarea
                    className="messege"
                    type="text"
                    maxlength="100"
                    minlength="10"
                    placeholder="Enter your name"
                  />
                </form>
              </div>
            </div>

            <div className="flex justify-center">
              <button className="form-btn btn btn-secondary px-20">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
