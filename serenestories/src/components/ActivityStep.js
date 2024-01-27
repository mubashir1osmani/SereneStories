import React from 'react';

const ActivityStep = ({ onActivityChange }) => {
  return (
    <>
      <p>What type of activity do you want?</p>
      {['Physical', 'Recreational', 'Effortless'].map((activityType) => (
        <button key={activityType} onClick={() => onActivityChange(activityType.toLowerCase())}>
          {activityType}
        </button>
      ))}
    </>
  );
}

export default ActivityStep;
