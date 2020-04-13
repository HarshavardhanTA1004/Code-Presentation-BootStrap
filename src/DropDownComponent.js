import React from 'react';

const DropDownComponent = props => {
 
    const types = ['Software Engineer', 'Software Developer', 'Test Engineer', 'Automation Engineer', 'Software Architect', 'Business Analyst'];
  
    const typeChangeHandler = e => {
    console.log('Employee Type change', e.target.value);
  };

  return (
    <React.Fragment>
      <h2>Bootstrap Input Component</h2>
      <hr></hr>
      <div className='form-group'>
          <label>Employee Type</label>
          <select className='form-control' onChange={typeChangeHandler}>
            {types.map((type, index) => {
              return (
                <option value={type} key={index}>
                  {type}
                </option>
              );
            })}
          </select>
        </div>
    </React.Fragment>
  );
};

export default DropDownComponent;
