import { useState, useEffect } from "react";

export const Results = ({
  porcentaje,
  totalCount,
  numberPeople,
  setPorcentaje,
  setTotalCount,
  setNumberPeople,
}) => {
  const [propinaTotal, setPropinaTotal] = useState(0);

  const [propinaTotalPersona, setPropinaTotalPersona] = useState(0);

  useEffect(() => {
    const totalPropina = () => {
      if (porcentaje > 0 && totalCount > 0 && numberPeople > 0) {
        let propina = (porcentaje / 100) * totalCount;

        return propina / numberPeople;
      } else {
        return 0;
      }
    };
    setPropinaTotal(totalPropina().toFixed(2));
  }, [totalCount, porcentaje, numberPeople]);

  useEffect(() => {
    //console.log(142.55 / 5 + totalPersona);
    const totalPropinaPerson = () => {
      let totalPersona = ((porcentaje / 100) * totalCount) / numberPeople;
      let totalPersonaPersona = totalCount / numberPeople + totalPersona;
      if (porcentaje > 0 && totalCount > 0 && numberPeople > 0) {
        return totalPersonaPersona;
      } else {
        return 0;
      }
    };
    setPropinaTotalPersona(totalPropinaPerson().toFixed(2));
  }, [totalCount, porcentaje, numberPeople]);

  const clean = () => {
    setPropinaTotalPersona(0);
    setPropinaTotal(0);
    setPorcentaje(0);
    setTotalCount(0);
    setNumberPeople(0);
  };
  return (
    <div className="cardResultado  w-2/2 m-2 h-full shadow-full rounded-2xl">
      <div>
        <div className="p-2 text-white  grid grid-cols-2 ">
          <h2 className="mt-5 mx-3">
            Tip Amout <span className="block opacity-10 ">/person</span>
          </h2>
          <h3 className="m-6">${propinaTotal}</h3>
        </div>

        <div className="p-2 text-white  grid grid-cols-2 mt-3">
          <h2 className="mt-5 mx-3">
            Total <span className="block opacity-10 ">/person</span>
          </h2>
          <h3 className="m-6">$ {propinaTotalPersona}</h3>
        </div>

        <input
          type="button"
          className=" w-1/2  
        rounded-md  mx-20 text-white "
          id="reset"
          value={"Reset "}
          onClick={() => clean()}
        />
      </div>
    </div>
  );
};
