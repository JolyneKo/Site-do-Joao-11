import { useState } from 'react';
import Item from './Item';

function Main() {
  const [produtos, setProduto] = useState(() => ['Cenoura', 'Bolo', 'Batata']);
  const [novoProduto, setNovoProduto] = useState('');
  const [isEmpty, setEmpty] = useState(false);

  const handleAdd = () => {
    const inclui = produtos.filter(nome => nome.toLowerCase() === novoProduto.toLowerCase())


    if (novoProduto.length > 0 && inclui.length === 0 && novoProduto.match(/\S/gi) != null ) {
      setProduto(prevValue => [...prevValue, novoProduto]);

      if (produtos.length === 1) {
        setEmpty(false);
        setProduto([novoProduto]);
      }
    }
  }

  const handleNovoProduto = (e) => {
    setNovoProduto(e.target.value)
  }

  return (
    <main className="main">
      <div className="main_header">
       <h1>Lista de Compras</h1>
      </div>

      <div className="main_container">
        <h2 className="header">Items</h2>

        {(!isEmpty) ? <ul className="items">
          {produtos.map((produto, index) => <Item produtos={produtos} produto={produto} key={index + 1} setProduto={setProduto} setEmpty={setEmpty}/>)}
        </ul> : <p className="whenEmptyText">Lista Vazia</p>}

        <button className="btn_add" onClick={handleAdd}>Add</button>
      
        <div className="inputsNovoProduto">
          <label htmlFor="novoProduto">Adicionar Produto</label>
          <input type="text" className="input_add" placeholder="nome do produto" onChange={handleNovoProduto} id="novoProduto"/>
        </div>
      </div>
    </main>
  )
}

export default Main;