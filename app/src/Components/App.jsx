import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Menu from './Menu';
import '../CSS/Styles.css';

function App() {
  const [isMenuOpen, setMenu] = useState(false); 

  const handleClick = () => {
    setMenu(prevValue => !prevValue);
  }

  return (
    <>
      <Header onOpen={handleClick}/>
      {isMenuOpen && <Menu/>}
      <Main/>
    </>
  )
}

export default App;