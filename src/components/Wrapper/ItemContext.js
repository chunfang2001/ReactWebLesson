import React from 'react'

const ItemContext = React.createContext({
    item:[],
    total:0,
    addItem:()=>{},
    removeItem:()=>{}
})

export default ItemContext