import NewExpense from './components/NewExpense';
import ItemContainer from './components/ItemContainer';
import React,{ useState } from 'react'

const Initial = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  

  const [expense,setExpense] = useState(Initial)

  const handleExpense = (e)=>{
    setExpense(prev=>{return [e,...prev]})
  }
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense= {handleExpense}/>
      <ItemContainer items= {expense}></ItemContainer>
    </div>
  );
}

export default App;