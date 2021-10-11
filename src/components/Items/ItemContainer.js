import classes from "./ItemContainer.module.css"
import Item from "./Item";
import React from "react";

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

function ItemContainer(){
    const list = DUMMY_MEALS
    return(
        <div className={classes['list-container']}>
            {list.map((item)=><Item 
            key={item.id}
            item={item}
            name={item.name} 
            description={item.description}
            price={item.price}/>)}
        </div>
    )
}

export default React.memo(ItemContainer)