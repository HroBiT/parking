import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {handleCreatParking} from "./Miejsca"
import './App.css'

function App() {
  const[howMuchPlace, setHowMuchPlace] = useState(10);
  const[ParkingArray, setParkingArray] = useState(handleCreatParking(howMuchPlace));

  let setRandomParkingSpot = () =>{
    let HowMuch = parseInt(Math.random()*3)+1;
      let newArray = Parking.map(row => [...row]);
    console.log(HowMuch)
    console.log(newArray);
    while(HowMuch != 0){
      console.log(HowMuch)
      let randomY = parseInt(Math.random()*2);
      let randomX = parseInt(Math.random()*5);
      newArray[randomY][randomX] = 1;
      HowMuch = HowMuch-1;
    }

    setParkingArray(newArray);
  }

  let handleClick = (row, col) => {
    let newTable = ParkingArray.map(r => [...r]);
  
    newTable[row][col] = newTable[row][col] === 1 ? 0 : 1;
  
    setParkingArray(newTable);
  };

  useEffect(() => {
    setParkingArray(handleCreatParking(howMuchPlace));
  }, [howMuchPlace]);

  return (
    <>
      <h1 className='my-5'>Symulator parkowania</h1>
      <form>
        <input type="number" value={howMuchPlace} onChange={(e)=>(setHowMuchPlace(e.target.value))} max={20} min={1}/>
      </form>
      <button onClick={()=>setRandomParkingSpot()}>Wygeneruj ilosc aut</button>
      <h2 className='my-5'>Parking:</h2>
      <ul className='d-flex justify-content-between'>
      {ParkingArray.map((item,index)=>(
          <li key={index}>{item.map((miejsce, inde)=>{
            return miejsce===0?(<p key={inde} onClick={()=>handleClick(index,inde)}>{miejsce}</p>):(<p key={inde} onClick={()=>handleClick(index,inde)} className='bg-dark'>{miejsce}</p>)
          })}</li>
      ))}
      </ul>
    </>
  )
}

export default App
