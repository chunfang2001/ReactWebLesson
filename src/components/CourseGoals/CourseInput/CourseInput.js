import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [status, setStatus] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim()!=''){
      setStatus(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim()===''){
      setStatus(false)
    }else{
      props.onAddGoal(enteredValue);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!status?"invalid":''}`}>
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler}/>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
