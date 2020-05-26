import React from 'react';

const Card = ({title, isDark, onClick})=>{
  return <div className={`${isDark?'dark':'light'} _card d-flex border align-items-center justify-content-center pointer`} onClick={onClick}><h1>{title}</h1></div>
}

export default Card;
