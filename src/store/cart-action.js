import { cartAction, UIAction } from "./store"

export const sendCart = (cart) => { 
    return async (dispatch)=>{
        dispatch(UIAction.noti({
            title:"pending",
            message:"Sending data to server",
            status:"pending"
        }))
        const sendRequest = async () =>{
            const response = await fetch("https://learning-project-9e8c8-default-rtdb.firebaseio.com/item.json",{
                method:"PUT",
                body:JSON.stringify(cart)
            })
            if(!response.ok){
                throw new Error("hello")
            }
        
            dispatch(UIAction.noti({
                title:"success",
                message:"Data successly sent to server",
                status:"success"
            }))  
        }
        try{
            await sendRequest()
        }catch(error){
            dispatch(UIAction.noti({
                title:"error",
                message:error.message,
                status:"error"
            }))
        }
    }
}

export const getCart =()=>{
    return async (dispatch)=>{
        const sendRequest = async ()=>{
            const response = await fetch("https://learning-project-9e8c8-default-rtdb.firebaseio.com/item.json")
            
            if(!response.ok){
                throw new Error("got Error")
            }
            const res = await response.json()
            const itemlist = {
                item: res || []
            }
            dispatch(cartAction.replacedItem(itemlist))
        }
        try{
            await sendRequest()
        }catch(error){
            dispatch(UIAction.noti({
                title:"error",
                message:error.message,
                status:"error"
            }))
        }
        
    }
}