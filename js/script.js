const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
console.log(days[5]);

let data = document.getElementById("form")
form.addEventListener('submit',function calculate(event) {
    event.preventDefault();

    let DD = parseInt(document.getElementById('date').value);
    if (DD < 0 || DD > 31){
        alert("You have entered an invalid date")
    }
    
    let MM = parseInt(document.getElementById('month').value);
    if(MM < 0 || MM > 12){
        alert("You have entered an invalid month")
    }

    if(MM = 2 && DD > 29){
       
            alert("You have entered an invalid date")
        
        document.getElementById("weekday").value = "N/A"
        document.getElementById("akan").value = "N/A"
    }

    let year = parseInt(document.getElementById('year').value);
    let CC = parseInt(document.getElementById('year').value.slice(0,2));
    console.log(CC)
    let YY = parseInt(document.getElementById('year').value.slice(2,4));
    console.log(YY);

    let gender = document.getElementById('gender').value;
    console.log(gender) 

    let dayOfTheWeek = Math.trunc((((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7)   
    console.log(dayOfTheWeek)

    if(dayOfTheWeek ===0){
        document.getElementById("weekday").value = "Sunday";
        // document.getElementById("weekday").value = '(days[0])'
    }
    else if(dayOfTheWeek ===1){
        document.getElementById("weekday").value = "Monday";
        // document.getElementById("weekday").value = '(days[1])'

    }
    else if(dayOfTheWeek ===2){
        document.getElementById("weekday").value = "Tuesday";
        // document.getElementById("weekday").value = '(days[2])'

    }
    else if(dayOfTheWeek ===3){
        document.getElementById("weekday").value = "Wednesday";
        // document.getElementById("weekday").value =' (days[3])'

    }
    else if(dayOfTheWeek ===4){
        document.getElementById("weekday").value = "Thursday";
        // document.getElementById("weekday").value = '(days[4])'

    }
    else if(dayOfTheWeek ===5){
        document.getElementById("weekday").value = "Friday";
        // document.getElementById("weekday").value = '(days[5])'

    }
    else if(dayOfTheWeek ===6){
        document.getElementById("weekday").value = "Saturday";
        // document.getElementById("weekday").value =' (days[6])'

    }
    


    if(gender === "male"){
        if(dayOfTheWeek === 0){
            document.getElementById('akan').value = "Kwasi";
        //    alert("Kwasi")
        }
        else if(dayOfTheWeek === 1){
            document.getElementById('akan').value = "Kwadwo";
            // alert("Kwadwo")
        }
        else if(dayOfTheWeek === 2){
            document.getElementById('akan').value = "Kwabena";
            // alert("Kwabena")
        }
        else if(dayOfTheWeek === 3){
            document.getElementById('akan').value = "Kwaku";
            // alert("Kwaku")
        } 
        else if(dayOfTheWeek === 4){
            document.getElementById('akan').value = "Yaw";
        // alert("Yaw")
        }

        else if(dayOfTheWeek === 5){
            document.getElementById('akan').value = "Kofi";
        //   alert("Kofi")
        }
        else if(dayOfTheWeek === 6){
            document.getElementById('akan').value = "Kwame";
        //    alert("Kwame")
        }

}else if(gender === "female"){
    if(dayOfTheWeek === 0){
        document.getElementById('akan').value = "Akosua";
    }
    else if(dayOfTheWeek === 1){
        document.getElementById('akan').value = "Adwoa";
    }
    else if(dayOfTheWeek === 2){
        document.getElementById('akan').value = "Abenaa";
    }
    else if(dayOfTheWeek === 3){
        document.getElementById('akan').value = "Akua";
    }
    else if(dayOfTheWeek === 4){
        document.getElementById('akan').value = "Yaa";
    }
    else if(dayOfTheWeek === 5){
        document.getElementById('akan').value = "Afua";
    }
    else{
        document.getElementById('akan').value = "Ama";
    }

}
    

});


