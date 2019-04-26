import React from "react";
import "./App.css";
import MenuItem from "./components/MenuItem";
const menu = [
  {
    title: "Document #1",
    subTitle: "Me. Dustin",
    active: true
  },
  {
    title: "Document #2",
    subTitle: "Me. Dustin",
    active: false
  }
];

function App() {
  return (
    <div className="container">
      <div className="left">
        <div className="drawer-header">
          <span className="drawer-title">FILES</span>
          <span className="upload-txt" onClick={()=>{document.getElementById('getFile').click()}}>
            Upload <i className="fa fa-upload" />
          </span>
          <input type="file" style={{display:"none"}} id="getFile" name="file" /> 
        </div>
        {menu.map((row,index) =><MenuItem key={index} row={row}/>)}
      </div>
      <div className="right">
        <div className="content-header">
          <span className="head-title">Document #1</span>
        </div>
        <div className="content">
          <img src="/images/test.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
