const days=[];
days[0] = "Sunday"
days[1] = "Monday"
days[2] = "Tuesday"
days[3] = "Wednesday"
days[4] = "Thursday"
days[5] = "Friday"
days[6] = "Saturday"
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

    let year = parseInt(document.getElementById('year').value);
    let CC = parseInt(document.getElementById('year').value.slice(0,2));
    console.log(CC)
    let YY = parseInt(document.getElementById('year').value.slice(2,4));
    console.log(YY);

    let gender = document.getElementById('gender').value;
    console.log(gender) 

    let dayOfTheWeek = Math.trunc((((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7)   
    console.log(dayOfTheWeek)

    document.getElementById('weekday').value = 'days[dayOfTheWeek]';

    if(gender === male){
        if(dayOfTheWeek === 0){
           alert("Kwasi")
        }
        else if(dayOfTheWeek === 1){
            alert("Kwadwo")
        }
        else if(dayOfTheWeek === 2){
            alert("Kwabena")
        }
        else if(dayOfTheWeek === 3){
            alert("Kwaku")
        } 
        else if(dayOfTheWeek === 4){
        alert("Yaw")
        }

        else if(dayOfTheWeek === 5){
          alert("Kofi")
        }
        else if(dayOfTheWeek === 6){
           alert("Kwame")
        }

}else if(gender === female){
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


