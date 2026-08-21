const showTime = document.getElementById('showTime');
  const clockBox = document.getElementById('clock-box');
  const hideTime = document.getElementById('hideTime');
  const clock = document.getElementById('clock');


   showTime.addEventListener('click', function () {

    clockBox.style.display = 'block';
    showTime.style.display = 'none';
    hideTime.style.display = 'block';
    clock.style.display = 'block'
    
    });
   

   

    hideTime.addEventListener('click', function(){
      clockBox.style.display = 'none'
      showTime.style.display = 'block'
      hideTime.style.display = 'none'
    })

    setInterval(function () {
      let date = new Date();
      clock.innerHTML = date.toLocaleTimeString();
    }, 1000);