import React, {useState} from 'react';
import ReactKeypress from './components/ReactKeypress';
import {Help} from './components/atoms/';
import {A,B,C,D} from './components/pages/';

import './App.css';

const App = (props) => {
  const [unmountD, setUnmountD] = useState(false);
  const [activeEvents, setActiveEvents] = useState({});
  const handleToggleD = ()=>{
    setUnmountD((state)=>(!state));
  }
  const handleAddEventSuccess=(activeEvents)=>{
    setActiveEvents(activeEvents)
  }
  const handleDeleteEventSuccess=(activeEvents)=>{
    setActiveEvents(activeEvents)
  }
  return (
  <ReactKeypress onAddEventSuccess={handleAddEventSuccess} onDeleteEventSuccess={handleDeleteEventSuccess}>
    <div className="d-flex flex-wrap">
      <A/>
      <B/>
      <C/>
      {!unmountD && <D/>}
    </div>
    <div className="row">
      <div className="col-md-6 p-5">
        <button type="button" className="btn btn-primary" onClick={handleToggleD}>Toggle D</button>
      </div>
      <div className="col-md-6 p-3">
        <Help activeEvents={activeEvents}/>
      </div>
    </div>
  </ReactKeypress>
)};

export default App;
