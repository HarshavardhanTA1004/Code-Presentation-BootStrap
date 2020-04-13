import React from 'react';

const CheckboxComponent = props => {
 
  const existingEmployeeChangeHandler = e => {
    console.log('Employee Name change', e.target.value);
  };

  return (
    <React.Fragment>
      <h2>Bootstrap Checkbox Component</h2>
      <hr></hr>
      <div className='form-group form-check'>
          <input
            type='checkbox'
            className='form-check-input'
            onChange={existingEmployeeChangeHandler}
          />
          <label className='form-check-label'>Existing Employee</label>
        </div>
    </React.Fragment>
  );
};

export default CheckboxComponent;
