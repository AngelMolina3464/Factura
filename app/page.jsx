import Image from "next/image";
import UpdateHistorico from "./components/subComponents/updateHistorico";

export default function Home() {
  return (
    <main>
      <div className="principal__Container">
        <Image src={"/tibu.png"} alt="logo" width={250} height={250}></Image>
        <h2> Control para Estimaciones y Hojas de Registro</h2>
      </div>
      <UpdateHistorico />
    </main>
  );
}
