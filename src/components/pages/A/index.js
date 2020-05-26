import React, {useState} from 'react';

import {Item} from '../../ReactKeypress';
import {Card} from '../../atoms/';

const A = (props) => {
  const [isDark, setIsDark] = useState(true)
  const handleTrigger = (activeEvents)=>{
    toggleBg();
  }
  const handleActiveEvents = (activeEvents)=>{
    console.log(activeEvents);
  }
  const toggleBg = ()=>{
    setIsDark((state)=>(!state));
  }
  return(
  <Item onTrigger={handleTrigger} type={'simple'} combo={'shift s'} getActiveEvents={handleActiveEvents}>
    <Card title={'A'} isDark={isDark} onClick={toggleBg} {...props}/>
  </Item>
)};

export default A;
