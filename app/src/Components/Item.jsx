import { useState } from 'react';

function Item({ produtos, produto, setProduto, setEmpty }) {
  const [quantidade, setQuantidade] = useState(1);

  const handleIncrement = () =>{
    setQuantidade(prevValue => ++prevValue)
  }

  const handleDecrement = () => {
    setQuantidade(prevValue => (prevValue > 0) ? --prevValue : 0)
  }
  
  const handleDelete = () => {
    if (produtos.length > 1) {
      setProduto(prevValue => {
        const resultado = prevValue.filter(value => value !== produto);
        return [...resultado];
      })
    } else {
      setEmpty(prevValue => !prevValue);
    }
  }

  return (
    <li className="item">
      <div className="info_produto" onDoubleClick={handleDelete}>
        <span className="quantidade">{quantidade}</span> 
        <span className="nome">{produto}</span>
      </div>


      <div className="buttons">
        <button className="btn_increment" onClick={handleIncrement}>+</button>
        <button className="btn_decrement" onClick={handleDecrement}>-</button>
      </div>
    </li>
  )
}

export default Item;