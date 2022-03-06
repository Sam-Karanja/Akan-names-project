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

  
    

})