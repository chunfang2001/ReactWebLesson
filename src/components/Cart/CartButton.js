import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { UIAction } from '../../store/store';

const CartButton = (props) => {
  const items = useSelector(state=>state.cart.item)
  const counter = items.reduce((current,item)=>item.quantity+current,0)
  const dispatch = useDispatch()

  const showCartHandler = ()=>{
    dispatch(UIAction.changeShowCart())
  }

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{counter}</span>
    </button>
  );
};

export default CartButton;
