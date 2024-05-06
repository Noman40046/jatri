import React from "react";

const Form = () => {
  return (
    <div>
      <div class="flex justify-center items-center h-screen">
        <div class=" main-form w-[600px] shadow-md  bg-white">
          <div class="bg-white pb-5 pt-5 ">
            <div class="bg-white mb-3 px-10 ">
              <a href="#">
                <span class="arrow material-symbols-outlined">arrow_back</span>
              </a>
              <h1 className="rental">Rental</h1>
              <h3 className="trip">Request a Trip</h3>
            </div>

            <hr />

            <div class="flex justify-between py-6 px-10 ">
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

            <div class="flex gap-4 items-center px-10  py-3">
              <div class="pick-drop flex flex-col gap-3 items-center">
                <div className="badge badge-error badge-sm"></div>
                <div className="vertile"></div>
                <div className="badge badge-error badge-sm"></div>
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
                  <hr class="border-dashed mt-[4px] w-[470px]"/>
                  <img src="https://rental.jatri.co/_nuxt/add-via-point.68721e6d.svg" className="w-[30px] h-[30px] absolute -right-[10px] -top-[13px] transition-all ease-in-out cursor-pointer" alt data-v-a0ca3c8a />
                </div>

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

            <div class="flex justify-between items-center px-10  py-6">
              <div class="item-detail ">
                <div className="flex gap-2">
                  <div>
                    <a href="#">
                      <span class="material-symbols-outlined">
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
                  className="input input-bordered bg-white  w-full max-w-xs "
                />
              </div>
            </div>

            <hr />

            <div class="flex justify-between items-center px-10  py-6">
              <div class="item-detail ">
                <div className="flex gap-2">
                  <div>
                    <a href="#">
                      <span class="material-symbols-outlined">schedule</span>
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
                  className="input input-bordered bg-white  w-full max-w-xs "
                />
              </div>
            </div>

            <hr />

            <div class="flex justify-between items-center px-10  py-6">
              <div class="item-detail ">
                <div className="flex gap-2">
                  <div>
                    <a href="#">
                      <span class="material-symbols-outlined">
                        connecting_airports
                      </span>
                    </a>
                  </div>
                  <div>
                    <h1 className="dt">Round Trip </h1>
                  </div>
                </div>
              </div>
              <div>
                <input type="checkbox" className="toggle trip-logo bg-white " />
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
