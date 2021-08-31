import "./style.css";

export function PrimeiroComponente() {
  const mensagem = ":D";
  return (
    <>
      <h2>PrimeiroComponente</h2>
      <p className="emoji">{ mensagem }</p>
    </>
  );
}
