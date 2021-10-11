import  { useState } from 'react'

const useInput = (Check)=>{
    const [valueTouched, setValueTouched] = useState(false)
    const [value, setValue] = useState('')

    function checkValueTouched(){
        setValueTouched(true)
    }

    const changeValue = (e) => {
       setValue(e.target.value)
    }

    const resetValue = ()=>{
        setValueTouched(false)
        setValue('')
    }
    const valueIsValid = Check(value)

    const hasError = !valueIsValid && valueTouched

    return({
        value,
        valueIsValid,
        checkValueTouched,
        changeValue,
        hasError,
        resetValue
    })
}

export default useInput