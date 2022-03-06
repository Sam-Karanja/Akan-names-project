const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
console.log(days[3]);

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
    document.getElementById(weekday).value = days[dayOfTheWeek];

    if(gender === male){
        if(dayOfTheWeek === 0){
            document.getElementById('akan').value = "Kwasi"
        }
        else if(dayOfTheWeek === 1){
            document.getElementById('akan').value = "Kwadwo"
        }
        else if(dayOfTheWeek === 2){
            document.getElementById('akan').value = "Kwabena"
        }
        else if(dayOfTheWeek === 3){
            document.getElementById('akan').value = "Kwaku"
        }
        else if(dayOfTheWeek === 4){
            document.getElementById('akan').value = "Yaw"
        }
        else if(dayOfTheWeek === 5){
            document.getElementById('akan').value = "Kofi"
        }
        else if(dayOfTheWeek === 6){
            document.getElementById('akan').value = "Kwame"
        }

}else if(gender === female){
    if(dayOfTheWeek === 0){
        document.getElementById('akan').value = "Akosua"
    }
    else if(dayOfTheWeek === 1){
        document.getElementById('akan').value = "Adwoa"
    }
    else if(dayOfTheWeek === 2){
        document.getElementById('akan').value = "Abenaa"
    }
    else if(dayOfTheWeek === 3){
        document.getElementById('akan').value = "Akua"
    }
    else if(dayOfTheWeek === 4){
        document.getElementById('akan').value = "Yaa"
    }
    else if(dayOfTheWeek === 5){
        document.getElementById('akan').value = "Afua"
    }
    else if(dayOfTheWeek === 6){
        document.getElementById('akan').value = "Ama"
    }

}
    

})