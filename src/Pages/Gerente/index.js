import React, { useState, useEffect } from 'react';
// import { MdAddShoppingCart } from 'react-icons/md';

import api from '../../Service/api';

import "./styles.css"
function Gerente() {

  const [gerentes, setGerentes] = useState([]);
  const [nome, setNome] = useState('');

  async function getGerentes() {
    const data = await api.get('gerente');
    console.log("###### gerentes #####")
    console.log(data.data)
    setGerentes(data.data);
  }
  useEffect(() => {
    getGerentes();
}, []);


async function addGerente(event) {
  event.preventDefault();

  const data = {
      nome
  }

  try {
      await api.post(`gerente`, data);
      getGerentes();
  } catch(erro) {
      alert("Erro ao gravar aluno " + erro);
  }
  // history.push('/alunos');
}

  return (
    <div className='container'>
      {gerentes.map(gerente => (
         <div key={gerente.id} className="gerente">
          <h1 className="nome-gerente">{gerente.nome}</h1>

          <button type='button' className='btn red'>
            <span>Excluir</span>
          </button>
        </ div> 
       ))}; 
       {/* <div className="acoes">
          <h1 className="">Adicione</h1>

          <button type='button' className='btn blue'>
            <span>Adicionar Gerente</span>
          </button>
        </ div>  */}

        <div className='novo-gerente-container'>
            <div className='content'>
                <form onSubmit={addGerente}>
                    <input placeholder='Nome' value={nome} onChange={e => setNome(e.target.value)} />

                    <button className='btn blue' type='submit'>
                       Incluir
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}
  export default Gerente;