import { useState } from "react";

export default ({ setMessage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnsubmit = (evento) => {
    evento.preventDefault();
    if (email === "rolando@admin.com" && password === "admin123") {
      setMessage({
        mensaje: "Inicio de sesión exitoso",
        status: "success"
      });
    } else {
      setMessage({
        mensaje: "Los datos son incorrecto",
        status: "danger"
      });
    }

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <h2 className="text-center">Login</h2>
      <form action="" onSubmit={handleOnsubmit} className="w-50 mx-auto">
        <div className="mb-3">
          <label htmlFor="email">Su correo electrónico</label>
          <input
            id="email"
            type="email"
            className="form-control"
            placeholder="ejemplo@email.com"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Su contraseña</label>
          <br />
          <input
            id="password"
            type="password"
            className="form-control"
            placeholder="contreseña"
            value={password}
            onChange={(evento) => setPassword(evento.target.value)}
          />
        </div>
        <div className="mb-3">
          <button
            type="submit"
            className="btn btn-dark"
            disabled={
              email.trim() === "" || password.trim() === "" ? true : false
            }
          >
            Iniciar sesión
          </button>
        </div>
        {/* { 
            // condición
            email === "" || password === "" 
            // esto en caso de cumplirse la condición
              ? <></>
            // esto en caso contrario que la condición no se cumpla
              : <button>Iniciar sesión</button>
          } */}
      </form>
    </>
  );
};
