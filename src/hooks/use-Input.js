import { useState } from "react"


const useInput = (validation)=>{
    const [input,setInput] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const changeValue = (e)=>{
        setInput(e.target.value)
    }

    const blurValue = ()=>{
        setIsTouched(true)
    }

    const resetValue = ()=>{
        setInput('')
        setIsTouched(false)
    }

    
    const error = isTouched && !validation(input)
    return {
        input,
        error,
        Valid:validation(input),
        changeValue,
        blurValue,
        resetValue
    }

}

export default useInput