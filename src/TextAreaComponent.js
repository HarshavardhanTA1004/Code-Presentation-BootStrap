import React from 'react';

const TextAreaComponent = props => {
 
  const reviewCommentChangeHandler = e => {
    console.log('Employee Review Comments', e.target.value);
  };

  return (
    <React.Fragment>
      <h2>Bootstrap Text Area Component</h2>
      <hr></hr>
      <div className='form-group'>
      <label>Employee Review Comments</label>
      <textarea
        className='form-control'
        rows='4'
        onChange={reviewCommentChangeHandler}
      ></textarea>
    </div>
    </React.Fragment>
  );
};

export default TextAreaComponent;
