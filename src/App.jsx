import logo from './logo.svg';
import './App.css';
import Line from './Line';
import React, { useState } from 'react';
function App() {


  const [won, setWon] = useState(false);

  const [block1, setBlock1] = useState(false);
  const [block2, setBlock2] = useState(false);
  const [block3, setBlock3] = useState(false);
  const [block4, setBlock4] = useState(false);
  const [block5, setBlock5] = useState(false);

  const [cola1, setCola1] = useState("white");
  const [cola2, setCola2] = useState("white");
  const [cola3, setCola3] = useState("white");
  const [cola4, setCola4] = useState("white");
  const [cola5, setCola5] = useState("white");

  const [colb1, setColb1] = useState("white");
  const [colb2, setColb2] = useState("white");
  const [colb3, setColb3] = useState("white");
  const [colb4, setColb4] = useState("white");
  const [colb5, setColb5] = useState("white");

  const [colc1, setColc1] = useState("white");
  const [colc2, setColc2] = useState("white");
  const [colc3, setColc3] = useState("white");
  const [colc4, setColc4] = useState("white");
  const [colc5, setColc5] = useState("white");

  const [cold1, setCold1] = useState("white");
  const [cold2, setCold2] = useState("white");
  const [cold3, setCold3] = useState("white");
  const [cold4, setCold4] = useState("white");
  const [cold5, setCold5] = useState("white");

  const [cole1, setCole1] = useState("white");
  const [cole2, setCole2] = useState("white");
  const [cole3, setCole3] = useState("white");
  const [cole4, setCole4] = useState("white");
  const [cole5, setCole5] = useState("white");



  // ASNWER *********************************************************8
  const word=['l','e','m','o','n'];

  //COLORS ******************************************************** */
  const successcolor = "lightgreen";
  const wrongcolor = "gray";
  const partcolor = "#FFFF8F";

 
  const handleBlock = (i,a,b,c,d,e)=>{
      console.log(i+" is blocked ");
      console.log(a+b+c+d+e);

    
      if(i===1){
        if(a===word[0])setCola1(successcolor);
        else if(a===word[1] || a===word[2] || a===word[3] || a===word[4])setCola1(partcolor)
        else setCola1(wrongcolor);

        if(b===word[1] )setColb1(successcolor);
        else if(b===word[0] || b===word[2] || b===word[3] || b===word[4])setColb1(partcolor)
        else setColb1(wrongcolor);

        if(c===word[2] )setColc1(successcolor);
        else if(c===word[1] || c===word[0] || c===word[3] || c===word[4])setColc1(partcolor)
        else setColc1(wrongcolor);
  
        if(d===word[3] )setCold1(successcolor);
        else if(d===word[1] || d===word[2] || d===word[0] || d===word[4])setCold1(partcolor)
        else setCold1(wrongcolor);
  
        if(e===word[4] )setCole1(successcolor);
        else if(e===word[1] || e===word[2] || e===word[3] || e===word[0])setCole1(partcolor)
        else setCole1(wrongcolor);
      }

      if(i===2)
      {
        if(a===word[0]  )setCola2(successcolor);
        else if(a===word[1] || a===word[2] || a===word[3] || a===word[4])setCola2(partcolor)
        else setCola2(wrongcolor);

        if(b===word[1] )setColb2(successcolor);
        else if(b===word[0] || b===word[2] || b===word[3] || b===word[4])setColb2(partcolor)
        else setColb2(wrongcolor);

        if(c===word[2] )setColc2(successcolor);
        else if(c===word[1] || c===word[0] || c===word[3] || c===word[4])setColc2(partcolor)
        else setColc2(wrongcolor);
  
        if(d===word[3] )setCold2(successcolor);
        else if(d===word[1] || d===word[2] || d===word[0] || d===word[4])setCold2(partcolor)
        else setCold2(wrongcolor);
  
        if(e===word[4] )setCole2(successcolor);
        else if(e===word[1] || e===word[2] || e===word[3] || e===word[0])setCole2(partcolor)
        else setCole2(wrongcolor);
      }
      if(i===3)
      {
        if(a===word[0]  )setCola3(successcolor);
        else if(a===word[1] || a===word[2] || a===word[3] || a===word[4])setCola3(partcolor)
        else setCola3(wrongcolor);

        if(b===word[1] )setColb3(successcolor);
        else if(b===word[0] || b===word[2] || b===word[3] || b===word[4])setColb3(partcolor)
        else setColb3(wrongcolor);

        if(c===word[2] )setColc3(successcolor);
        else if(c===word[1] || c===word[0] || c===word[3] || c===word[4])setColc3(partcolor)
        else setColc3(wrongcolor);
  
        if(d===word[3] )setCold3(successcolor);
        else if(d===word[1] || d===word[2] || d===word[0] || d===word[4])setCold3(partcolor)
        else setCold3(wrongcolor);
  
        if(e===word[4] )setCole3(successcolor);
        else if(e===word[1] || e===word[2] || e===word[3] || e===word[0])setCole3(partcolor)
        else setCole3(wrongcolor);
      }
      if(i===4)
      {
        if(a===word[0]  )setCola4(successcolor);
        else if(a===word[1] || a===word[2] || a===word[3] || a===word[4])setCola4(partcolor)
        else setCola4(wrongcolor);

        if(b===word[1] )setColb4(successcolor);
        else if(b===word[0] || b===word[2] || b===word[3] || b===word[4])setColb4(partcolor)
        else setColb4(wrongcolor);

        if(c===word[2] )setColc4(successcolor);
        else if(c===word[1] || c===word[0] || c===word[3] || c===word[4])setColc4(partcolor)
        else setColc4(wrongcolor);
  
        if(d===word[3] )setCold4(successcolor);
        else if(d===word[1] || d===word[2] || d===word[0] || d===word[4])setCold4(partcolor)
        else setCold4(wrongcolor);
  
        if(e===word[4] )setCole4(successcolor);
        else if(e===word[1] || e===word[2] || e===word[3] || e===word[0])setCole4(partcolor)
        else setCole4(wrongcolor);
      }
      if(i===5)
      {
        if(a===word[0]  )setCola5(successcolor);
        else if(a===word[1] || a===word[2] || a===word[3] || a===word[4])setCola5(partcolor)
        else setCola5(wrongcolor);

        if(b===word[1] )setColb5(successcolor);
        else if(b===word[0] || b===word[2] || b===word[3] || b===word[4])setColb5(partcolor)
        else setColb5(wrongcolor);

        if(c===word[2] )setColc5(successcolor);
        else if(c===word[1] || c===word[0] || c===word[3] || c===word[4])setColc5(partcolor)
        else setColc5(wrongcolor);
  
        if(d===word[3] )setCold5(successcolor);
        else if(d===word[1] || d===word[2] || d===word[0] || d===word[4])setCold5(partcolor)
        else setCold5(wrongcolor);
  
        if(e===word[4] )setCole5(successcolor);
        else if(e===word[1] || e===word[2] || e===word[3] || e===word[0])setCole5(partcolor)
        else setCole5(wrongcolor);
      }



      if((a+b+c+d+e)==="lemon")
      {
        setBlock1(true);
        setBlock2(true);
        setBlock3(true);
        setBlock4(true);
        setBlock5(true);
        win();
        setWon(true);
        
      }


    
      
      if(i===1)
      {
        setBlock1(true);
      }
      if(i===2)
      {
        setBlock2(true);
      }
      if(i===3)
      {
        setBlock3(true);
      }
      if(i===4)
      {
        setBlock4(true);
      }
      if(i===5)
      {
        setBlock5(true);
      }
  }
  const win = ()=>{
 
      alert("You Win!!!!")
    
  };
  return (
    <div className="App">
      <header className="App-header">
       Wordle
       <br/>
       <br/>
       <Line handleBlock={handleBlock} index={1} block={block1} l={1} col1={cola1} col2={colb1} col3={colc1} col4={cold1} col5={cole1}/>
       <Line handleBlock={handleBlock} index={2} block={block2} l={6} col1={cola2} col2={colb2} col3={colc2} col4={cold2} col5={cole2}/>
       <Line handleBlock={handleBlock} index={3} block={block3} l={11} col1={cola3} col2={colb3} col3={colc3} col4={cold3} col5={cole3}/>
       <Line handleBlock={handleBlock} index={4} block={block4} l={16} col1={cola4} col2={colb4} col3={colc4} col4={cold4} col5={cole4}/>
       <Line handleBlock={handleBlock} index={5} block={block5} l={21} col1={cola5} col2={colb5} col3={colc5} col4={cold5} col5={cole5}/>

       
      </header>
    </div>
  );
}

export default App;
