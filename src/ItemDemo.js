import React from 'react';
import {Item} from 'react-keypress';


const Page1= (props)=>(
  <Item>
    {(props)=(
      <div
        pushEvents={props.pushEvents(['shift s'])}
        addSimpleCombos={{
          'shift s':{

          }
        }}
      }/>
    )}
  </Item>
)
