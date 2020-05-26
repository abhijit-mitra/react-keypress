import React from 'react';

const Help = ({activeEvents}) => (
  <div className="w-100 border">
    {
      Object.entries(activeEvents).map(([key, value])=>(
        <div className='w-100 mb-2 px-2' key={key}>
          {value}
        </div>
      ))
    }
  </div>
);

export default Help;
