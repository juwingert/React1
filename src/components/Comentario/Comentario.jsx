import React from "react";

import "./Comentario.css";

import dadosComentarios from "./dadosComentarios";

export default function Comentario(props) {
  function Comentarios() {
    return dadosComentarios.map((comentario) => {
      return (
        <>
          <div className="comentario">
            <h1 className="titulo">{comentario.titulo}</h1>
            <h3 className="subtitulo">{comentario.subtitulo}</h3>
            <p className="post">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              vero.
            </p>
          </div>
        </>
      );
    });
  }

  return <>{Comentarios()}</>;
}
