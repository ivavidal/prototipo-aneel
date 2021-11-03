import React from 'react'

export default function Cadastro() {
  return (
    <>
      <div className="card" style={{ padding: "20px" }}>
          <h3 className="text-center">Entre informações</h3>

          <form action="">
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Nome" />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Cidade"
              />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="UF" />
            </div>
            <button className='btn btn-success' style={{display: 'block', margin: '0 auto'}} type="submit">Cadastrar</button>
          </form>
        </div>
    </>
  )
}
