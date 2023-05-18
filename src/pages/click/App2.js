import {useState} from 'react'
import { User } from './udex';
import { Emp } from './data';
import "./sad.css";
export const Example= ()=>{
  const[click2,setStatus,click,status]=useState("Empl")

  const renderuser=()=>{
    switch(status,click,click2){
      case"Empl":
       let arr = Emp.filter((el,id)=>{
        return el.status =="Empl"
      })
      return arr.map((el,id)=>{
       return <User el ={el} />
      })
      default: 
      return ""
    }
  }
  return (
    <div className="App">
    <div className='btns'>

    </div>
      <div className='cont'>
        {renderuser()}
      </div>
   
    </div>
  );
}
