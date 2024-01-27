import React from 'react';

const TimeStep = ({ onNext }) => {
  const timeValues = ['15 minutes', '30 minutes', '1 hour']; // You can adjust these values

  return (
    <>
      <p>How much time do you have?</p>
      {timeValues.map((value) => (
        <button key={value} onClick={() => onNext(value)}>
          {value}
        </button>
      ))}
    </>
  );
}

export default TimeStep;
