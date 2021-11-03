import React from "react";
import Link from "next/link";
export default function Login() {
  return (
    <>
      <div
        className="card"
        style={{ width: "60rem", display: "block", margin: "0 auto" }}
      >
        <div className="card-body">
          <h3 className="card-title text-center">LOGIN</h3>
          <form>
            <h1 className="h3 mb-3 fw-normal">Informe credenciais</h1>

            <div className="form-floating">
              <input
                type="email"
                className="form-control mb-3"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control mb-3"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Senha</label>
            </div>

            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Lembrar
                credenciais
              </label>
            </div>
            <div className='titleCadastro mb-3'>
              <Link href="/cadastro">
                <a>Não tem cadastro?</a>
              </Link>
            </div>
            <button className="w-100 btn btn-lg btn-secondary" type="submit">
              Sign in
            </button>
            <p className="mt-5 mb-3 text-muted">
              &copy; {new Date().getFullYear()} - Iva Vidal
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
