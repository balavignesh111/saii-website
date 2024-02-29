import React from "react";
import { useEffect } from "react";

function Joinform() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    document.head.appendChild(script);

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "45169054",
          formId: "6fee859f-9bbd-4080-aa1f-c0bf4bb2c805",
          target: "#hubspot",
        });
      }
    });
  }, []);
  return (
    <>
      <h2 className="text-[#fff] text-center lg:text-4xl sm:text-2xl text-xl mb-2">
        Need further assistance?
      </h2>
      <div
        className="w-[100%] h-[100%] px-[25%]  pt-8 rounded-lg  outline-double outline-[#fff]"
        id="hubspot"
      ></div>
    </>
  );
}

export default Joinform;
