import React from "react";
import BillInput from "./BillInput";
import { Results } from "./Results";

export const Main = ({
  porcentaje,
  setPorcentaje,
  totalCount,
  setTotalCount,
  numberPeople,
  setNumberPeople,
}) => {
  return (
    <div className="grid  gap-20 grid-cols-2 bg-white  w-full max-h-screen  shadow-md rounded-md m-3 px-3 py-10">
      <BillInput
        porcentaje={porcentaje}
        setPorcentaje={setPorcentaje}
        setTotalCount={setTotalCount}
        totalCount={totalCount}
        setNumberPeople={setNumberPeople}
        numberPeople={numberPeople}
      />

<div className="">
  <Results 
    porcentaje={porcentaje}
    setPorcentaje={setPorcentaje}
    totalCount={totalCount}
    
    setNumberPeople={setNumberPeople}
    numberPeople={numberPeople}/>
</div>

    </div>
  );
};
