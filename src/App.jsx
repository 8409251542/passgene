import './App.css'
import {useState} from 'react'
import usePasswordGenrator from './hooks/use-pass-generator'
function App() {
  const [length,setLength]=useState(4);
  const [checkboxData,setCheckBoxData]=useState([
    {title:"Include Uppercase Latter",state:false},
    {title:"Include Numbers",state:false},
    {title:"Include Lowercase Latter",state:false},
    {title:"Include Symbols",state:false}
  ]);
  const handleCheckboxChange=(i)=>{
    const udateData=[...checkboxData];
    udateData[i].state=!udateData[i].state;
    setCheckBoxData(udateData);
  };
  const {password,errorMsg,generatePassword}=usePasswordGenrator();
  return (
    <>
      <div className="maincontainer">
      <div className="main">
        <div className="header">
          <div className="pw">
            {password}
          </div>
          <button className="copyBtn">Copy</button>
        </div>
        <div className="slider">
          <span>
            <label>Charecter Length</label>
            <label>{length}</label>
          </span>
          <input 
            type="range" 
            min='4'
            max='20'
            value={length}
            onChange={(e)=>setLength(e.target.value)}
          />
        </div>
        <div className="checkBox">
          {
            checkboxData.map((checkbox,index)=>{
              return <div key={index}>
                <input type="checkbox" onChange={()=>handleCheckboxChange(index)} checked={checkbox.state} />
                <label>{checkbox.title}</label>
              </div>
            })
          }
        </div>
          <button onClick={()=>generatePassword(checkboxData,length)} className='passGenBtn'>Generate Password</button>
      </div>
      </div>
    </>
  )
}

export default App
