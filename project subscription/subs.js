const firstButton = document.querySelector('button')
console.log(firstButton);


if (firstButton) {
        firstButton.addEventListener('click', () => {
          firstButton.textContent = "Tebrikler !"
          console.log('Yukleniyor');
        });
      }

     
      const newButton = document.querySelector('nav')
      console.log(newButton);

      if(newButton){
        newButton.addEventListener('click',() =>{
          console.log('Redirecting..');
        });
      }


   
      document.getElementById("email").checked = true;

      


      

    const buttonCheck = document.getElementById('Submit-button');

    function check () {

      buttonCheck.textContent = "Tebrikler";
      console.log('Yonlendiriliyor...');

    }

    buttonCheck.addEventListener('click', check)

    
    
    
    const mySavedData = document.querySelector('#Submit-button').value
    

    


    