import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import Notification from './components/UI/Notification';
import { useEffect } from 'react'
import { sendCart } from './store/cart-action';
import { getCart } from './store/cart-action'

let initial = true 

function App() {
  const showCart = useSelector(state=>state.UI.showCart)
  const cart = useSelector(state=>state.cart.item)
  const change = useSelector(state=>state.cart.changed)
  const noti = useSelector(state=>state.UI.notification)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCart())
  },[])

  useEffect(()=>{
    if(initial===true){
      initial = false
      return
    }
    if(change === true){
      dispatch(sendCart(cart))
    }
  },[cart,dispatch])
  return (
    <>
      {noti&&<Notification status={noti.status} message={noti.message} title={noti.title}/>}
      <Layout>
        {showCart&&<Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
