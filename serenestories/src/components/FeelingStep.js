import React from 'react';

const FeelingStep = ({ onFeelingChange }) => {
  return (
    <>
      <p>How are you feeling?</p>
      {[1, 2, 3, 4, 5].map((value) => (
        <button key={value} onClick={() => onFeelingChange(value)}>
          {value}
        </button>
      ))}
    </>
  );
}

export default FeelingStep;
