import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

function App() {


  const handleCreatParking = (howMuch) => {
    if(howMuch%2 == 0 ){
      

      let firstArray = new Array(howMuch/2);
      let SecondArray = new Array(howMuch/2);

      for(let i = 0 ; i < howMuch/2; i++){
        firstArray[i] = 0;
      } 
      for(let i = 0 ; i < howMuch/2; i++){
        SecondArray[i] = 0;
      }


      let ArrayParking = [firstArray,SecondArray];
      console.log(ArrayParking);
    }


    // return ArrayParking
  }

  const Parking = [[0,0,0,0,0],[0,0,0,0,0]]

  const[ParkingArray, setParkingArray] = useState(Parking);

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



  return (
    <>
      <h1 className='my-5'>Symulator parkowania</h1>
      <form>
        
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
