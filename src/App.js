import { useCallback, useState } from "react";
import Header from "./components/Header/Header";
import ItemContainer from "./components/Items/ItemContainer";
import Modal from "./components/Modal/Modal";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  const [showCart,setShowCart] = useState(false)

  const show = ()=>{
    showCart===true?setShowCart(false):setShowCart(true)
  }

  return (
    <Wrapper>
      {showCart&&<Modal onShow={show}/>}
      <Header onShow={show}/>
      <ItemContainer/>
    </Wrapper>
  );
}

export default App;
