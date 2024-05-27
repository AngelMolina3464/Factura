"use client";
import { useState } from "react";

export const FormRegistro = () => {
  const [isActiveContract, setIsActiveContract] = useState(true);
  const [data, setData] = useState({
    concepto: "",
    numeroContrato: "",
    iniciodeContrato: "",
    finaldeContrato: "",
    montoEstimado: 0,
    iva: 0,
    total: 0,
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

  const HandleClick__ContratoInicio = (event) => {
    setData({ ...data, iniciodeContrato: event.target.value });
  };

  const HandleClick__ContratoFinal = (event) => {
    setData({ ...data, finaldeContrato: event.target.value });
  };

  const HandleClick__MontoBruto = (event) => {
    const montoEstimado = parseFloat(event.target.value);
    const iva = parseFloat((montoEstimado * 0.16).toFixed(2));
    const total = parseFloat((montoEstimado + iva).toFixed(2));
    setData({ ...data, montoEstimado: montoEstimado, iva: iva, total: total });
  };

  const handle__ActiveButton = (event) => {
    event.preventDefault();
    setIsActiveContract("");
  };

  const handle__InactiveButton = (event) => {
    event.preventDefault();
    setIsActiveContract(" ");
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
          <input
            type="text"
            onChange={HandleClick__NumContrato}
            disabled={isActiveContract}
          />
          <div className="miniButtoner">
            <button onClick={handle__ActiveButton}>🖋️</button>
            <button onClick={handle__InactiveButton}>❌</button>
          </div>
        </div>

        <div className="registro__SubFlex">
          <label htmlFor="">Fecha Inicio de Contrato: </label>
          <input type="date" onChange={HandleClick__ContratoInicio} />
          <label htmlFor="">Fecha Final de Contrato: </label>
          <input type="date" onChange={HandleClick__ContratoFinal} />
        </div>

        <div className="registro__SubFlex">
          <label htmlFor="">Monto Estimado Bruto</label>
          <input type="number" onChange={HandleClick__MontoBruto} />
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
