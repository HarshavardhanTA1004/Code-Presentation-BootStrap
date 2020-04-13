import React from 'react';

const InputComponent = props => {
 
  const nameChangeHandler = e => {
    console.log('Employee Name change', e.target.value);
  };

  return (
    <React.Fragment>
      <h2>Bootstrap Input Component</h2>
      <hr></hr>
      <div className='form-group'>
      <label>Employee Name</label>
      <input
        type='text'
        className='form-control'
        onChange={nameChangeHandler}
      />
    </div>
    </React.Fragment>
  );
};

export default InputComponent;
