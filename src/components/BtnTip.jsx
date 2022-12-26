import { useState } from "react";

const BtnTip = ({ porcentaje, setPorcentaje }) => {
  const setPercentajeApp = (porcentaje) => {
    setPorcentaje(porcentaje);
  };
  return (
    <div className="w-full ">
      <div className="mb-3">
        <label htmlFor="" className="">
          Select Tip %{" "}
        </label>
      </div>
      <div className="grid  grid-cols-3 gap-2 grid-rows-2  max-h-screen ">
        <input
          type="button"
          value="5%"
          id="btnTip"
          className=""
          name="tip"
          onClick={() => setPercentajeApp(5)}
        />

        <input
          type="button"
          value="10%"
          id="btnTip"
          className="   "
          name="tip"
          onClick={() => setPercentajeApp(10)}
        />
        <input
          type="button"
          value="15%"
          id="btnTip"
          className="  "
          name="tip"
          onClick={() => setPercentajeApp(15)}
        />

        <input
          type="button"
          value="25%"
          id="btnTip"
          name="tip"
          className="   px-2 py-2"
          onClick={() => setPercentajeApp(25)}
        />

        <input
          type="button"
          value="50%"
          id="btnTip"
          onClick={() => setPercentajeApp(50)}
          name="tip"
        />
        <input
          type="number"
          value={porcentaje}
          id="btnTip"
          name="tip"
          onChange={(e) => setPercentajeApp(e.target.value)}
        />
      </div>
    </div>
  );
};

export default BtnTip;
