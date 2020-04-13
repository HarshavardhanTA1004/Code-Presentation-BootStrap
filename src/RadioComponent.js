import React from 'react';

const RadioComponent = props => {
 
    const typeChangeHandler = e => {
    console.log('Employee Type change', e.target.value);
  };

  return (
    <React.Fragment>
      <h2>Bootstrap Radio Component</h2>
      <hr></hr>
      <p>Employee type</p>

        <div className='form-check'>
          <input
            className='form-check-input'
            type='radio'
            name='exercise'
            value='daily'
            onChange={typeChangeHandler}
          />
          <label className='form-check-label'>Production Manager</label>
        </div>
        <div className='form-check'>
          <input
            className='form-check-input'
            type='radio'
            name='exercise'
            value='weekly_3_times'
            onChange={typeChangeHandler}
          />
          <label className='form-check-label'>People Manager</label>
        </div>
        <div className='form-check'>
          <input
            className='form-check-input'
            type='radio'
            name='exercise'
            value='weekly_once'
            onChange={typeChangeHandler}
          />
          <label className='form-check-label'>Technical Lead</label>
        </div>
        <div className='form-check'>
          <input
            className='form-check-input'
            type='radio'
            name='exercise'
            value='no_activity'
            onChange={typeChangeHandler}
          />
          <label className='form-check-label'>Sr. Software Engineer</label>
        </div>

    </React.Fragment>
  );
};

export default RadioComponent;
