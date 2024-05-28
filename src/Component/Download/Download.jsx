import React from "react";
import appStore from "../../assets/Download section img/app_store.png";
import playStore from "../../assets/Download section img/play_store.png";
import dummyPhone from "../../assets/Download section img/phone.png";

const Download = () => {
  return (
    <>
      <div className="py-[60px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="max-w-[640px]">
              <h3 className="pb-8 font-workSans text-[44px] font-light uppercase text-primaryFontColor">
                Download Cordelia Experience App
              </h3>

              <p className="font-poppins text-base font-normal text-extraFontColor opacity-[75%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              </p>
              <div className="mt-8 flex items-center justify-center gap-x-5">
                <img
                  src={appStore}
                  alt={appStore}
                  className="w-[250px] cursor-pointer"
                />
                <img
                  src={playStore}
                  alt={playStore}
                  className="w-[250px] cursor-pointer"
                />
              </div>
            </div>
            <div>
              <img src={dummyPhone} alt={dummyPhone} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;