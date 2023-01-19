import Botao from "./components/Botao/Botao";
import Comentario from "./components/Comentario/Comentario";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Botao />
      <Comentario cachorro="Primeiro Título" subtitle="Meu promeiro post" />
      <Comentario cachorro="Segundo Título" subtitle="Meu segundo post" />
      <Comentario cachorro="Terceiro Título" subtitle="Meu terceiro post" />
    </div>
  );
}
