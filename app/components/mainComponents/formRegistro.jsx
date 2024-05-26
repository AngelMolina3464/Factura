"use client";
import { useState } from "react";

export const FormRegistro = () => {
  const [data, setData] = useState({
    concepto: "",
    numeroContrato: "",
    intervaloContrato: "",
    montoEstimado: 0,
  });

  const handleClick__SendPreview = () => {
    console.log("Informacion Obetenida: ", data);
  };

  const HandleClick__Concept = (event) => {
    setData({ ...data, concepto: event.target.value });
  };
  const HandleClick__NumContrato = (event) => {
    setData({ ...data, numeroContrato: event.target.value });
  };

  return (
    <section className="registro__Container">
      <form action="">
        <div className="registro__SubFlex">
          <label htmlFor="">Concepto de Estimacion: </label>
          <textarea name="" id="" onChange={HandleClick__Concept}></textarea>
        </div>
        <div className="registro__SubFlex">
          <label htmlFor="">Numero de Contrato </label>
          <input type="text" onClick={HandleClick__NumContrato} />
        </div>

        <div className="registro__SubFlex">
          <label htmlFor="">Fecha Inicio de Contrato: </label>
          <input type="date" />
          <label htmlFor="">Fecha Final de Contrato: </label>
          <input type="date" />
        </div>

        <div className="registro__SubFlex">
          <label htmlFor="">Monto Estimado </label>
          <input type="number" />
        </div>
      </form>

      <div className="buttoner__Container">
        <button className="classColorBlue">Limpiar</button>
        <button className="classColorBlue" onClick={handleClick__SendPreview}>
          Generar Vista Previa
        </button>
        <button className="classColorBlue">Guardar Registro</button>
      </div>
    </section>
  );
};
