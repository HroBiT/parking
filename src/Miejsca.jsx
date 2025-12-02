export const  handleCreatParking = (howMuch) => {
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
        return ArrayParking
    }else{

        howMuch++;
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
      return ArrayParking
    }


    
  }
