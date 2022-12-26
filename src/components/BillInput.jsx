import { MdOutlineAttachMoney } from "react-icons/all";

import { useState, useEffect } from "react";
import BtnTip from "./BtnTip";

const BillInput = ({
  porcentaje,
  setPorcentaje,
  totalCount,
  setTotalCount,
  numberPeople,
  setNumberPeople,
}) => {
  const [validate, setValidate] = useState(false);
  const [validateNumber, setValidateNumber] = useState(false);

  useEffect(() => {
    if (totalCount <= -1) {
      setValidate(true);
      return;
    }
    setValidate(false);
  }, [totalCount]);

  useEffect(() => {
    if (numberPeople <= -1) {
      setValidateNumber(true);
      return;
    }
    setValidateNumber(false);
  }, [numberPeople]);

  return (
    <form>
      <div className="">
        <label htmlFor="bill">Bill</label>

        <input
          type="number"
          className={` ${
            validate
              ? "border-red-500 border error billI block  p-3 text-xl  outline-none  shadow-md"
              : "billI block  p-3 text-xl  outline-none  shadow-md"
          }`}
          name="cuenta"
          id=""
          placeholder="$  "
          value={totalCount}
          onChange={(e) => setTotalCount(Number.parseFloat(e.target.value))}
        />
      </div>

      <div className="mt-2">
        <BtnTip setPorcentaje={setPorcentaje} porcentaje={porcentaje} />

        <div className="mt-4">
          <label htmlFor="bill">
            {validateNumber ? "LLene  los campos" : "Number of People"}
          </label>
          <input
            type="number"
            name="totalPeople"
            id=""
            placeholder="0"
            value={numberPeople}
            className={` ${
              validateNumber
                ? "border-red-500 border error billI block  p-3 text-xl  outline-none  shadow-md"
                : "billI block  p-3 text-xl  outline-none  shadow-md"
            }`}
            onChange={(e) => setNumberPeople(Number(e.target.value))}
          />
        </div>
      </div>
    </form>
  );
};

export default BillInput;
