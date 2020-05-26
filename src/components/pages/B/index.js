import React, {useState} from 'react';

import {Item} from '../../ReactKeypress';
import {Card} from '../../atoms/';

const B = (props) => {
  const [isDark, setIsDark] = useState(true)
  const handleTrigger = ()=>{
    toggleBg();
  }
  const toggleBg = ()=>{
    setIsDark((state)=>(!state));
  }
  const handleActiveEvents = (activeEvents)=>{
    console.log(activeEvents);
  }
  return(
  <Item onTrigger={handleTrigger} type={'simple'} combo={'shift s'}  getActiveEvents={handleActiveEvents}>
    <Card title={'B'} isDark={isDark} onClick={toggleBg} {...props}/>
  </Item>
)};

export default B;
