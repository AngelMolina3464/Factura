import Link from "next/link";

export default function Navegation() {
  return (
    <nav>
      <Link href={"/"}>Principal </Link>
      <Link href={"/formRegistro"}>Formato de Registro </Link>
      <Link href={"#"}>Lista de Registros</Link>
      <Link href={"#"}>Descargas </Link>
      <Link href={"#"}>Test de Servidor </Link>
    </nav>
  );
}
