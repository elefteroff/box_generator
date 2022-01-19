import './App.css';
import { useState } from 'react';
import Box from './components/Box';
import New from './components/New';

function App() {

    const [boxes, setBoxes] = useState(
      [
        {color: "red"},
        {color: "green"},
        {color: "blue"},
      ]
      )

    const createBox = (newBoxObj) => {
      
      // Either #1 or #2 will work:
      // 1. 
      // const copyBoxes = [...boxes];
      // copyBoxes.push(newBoxObj);
      // setBoxes(copyBoxes)
      // OR
      // 2.
      setBoxes([...boxes, newBoxObj])
    }

  return (
    <div className="App">
      <h1>boxes</h1>
      {JSON.stringify(boxes)}
      <hr />
      <New createBox={createBox}/>
      {
        boxes.map( (box, idx) => {
          return <Box box={box} key={idx}/>
        })
      }
    </div>
    
  );
}

export default App;
