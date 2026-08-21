
  const form =  document.querySelector('form')
  

  form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
       console.log(height);

       const weight = parseInt(document.querySelector('#weight').value)
       console.log(weight);

       
    const finalResult = document.querySelector('#result')
    const bmiStatus = document.querySelector('#range')
   if (isNaN(height) || height<=0) {
        finalResult.innerHTML = 'Please Enter valid Height' 
    
   } else if(isNaN(weight) || weight<=0) {
        finalResult.innerHTML ='Please Enter valid weight' 
    
   }
   
   else{
      const bmi = (weight / ((height*height) / 10000)).toFixed(2);
      finalResult.innerHTML = `${bmi}`
      if (bmi <= 18.6) {
        bmiStatus.innerHTML = 'under weight less than = 18.6'

        
      } else if(bmi >=  18.6 || bmi <=  14.9){
        bmiStatus.innerHTML = 'Normal Range =  16.6 and 24.9'
        
      }
      else{
        bmiStatus = 'over weight =  less than 16.6'
      }

   }


    
    
  })
       