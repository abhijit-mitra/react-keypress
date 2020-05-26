import React, { PureComponent, useEffect, useContext, useRef } from 'react';

const KeyPressContext = React.createContext({
  activeEvents:{},
  setActiveEvents:()=>{},
  deleteEvent:()=>{},
  listener : ()=>{},
  id:0
});

class ReactKeypress extends PureComponent{
  constructor(props) {
    super(props);
    this.pushEvent = (value)=>{
      this.setState((state)=>({
        ...state,
        id: state.id+1,
        activeEvents:{
          ...state.activeEvents,
          [state.id+1]: value
        }
      }),()=>{
        const {activeEvents} = this.state;
        props.onAddEventSuccess(activeEvents);
      })
    }
    this.deleteEvent = (id)=>{
      const {activeEvents} = this.state;
      const newActiveEvents = {...activeEvents};
      delete newActiveEvents[id];
      this.setState((state)=>({
        ...state,
        activeEvents:newActiveEvents
      }),()=>{
        const {activeEvents} = this.state;
        props.onDeleteEventSuccess(activeEvents);
      })
    }
    this.listener = new window.keypress.Listener();
    this.state = {
      activeEvents:{},
      pushEvent: this.pushEvent,
      deleteEvent: this.deleteEvent,
      listener: this.listener,
      id:0
    };
  };
  render(){
    const {children} = this.props;
    return(
      <KeyPressContext.Provider value={{...this.state}}>
        {children}
      </KeyPressContext.Provider>
    )
  }
}

export const Item = ({type, combo, onTrigger, getActiveEvents, children})=>{
  const context = useContext(KeyPressContext);
  const ref = useRef(context.id+1);
  const activeEvents = context.activeEvents;
  useEffect(()=>{
    context.pushEvent(`${type}_combo`);
    context.listener[`${type}_combo`](combo, ()=>{
      onTrigger();
    });
    return ()=>{
      context.deleteEvent(ref.current);
    }
  },[]);

  useEffect(()=>{
    getActiveEvents(activeEvents);
  },[activeEvents]);

  return children
};

export default ReactKeypress;
