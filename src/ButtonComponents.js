import React from 'react';

const ButtonComponent = props => {
 
  const nameChangeHandler = e => {
    console.log('Employee Name change', e.target.value);
  };

  return (
    <React.Fragment>
      <h2>Bootstrap Buttons Component</h2>
      <hr></hr>
     <button className='btn btn-primary mb-2' type='submit'>
      Submit
    </button>
    <hr></hr>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <hr></hr>   
    <button type="button" class="btn btn-success">Success</button>
    <hr></hr>
    <button type="button" class="btn btn-danger">Danger</button>
 

    </React.Fragment>
  );
};

export default ButtonComponent;
