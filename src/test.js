import React from 'react';

const Test = ({hero}) => {
  if(hero==='Hi'){
    throw new Error('Not a hero');
  }
  return (
    <h2>{hero}</h2>
  );
}

export default Test;
