const weekday=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
console.log(weekday[3]);

let data = document.getElementById("form")
form.addEventListener('submit',function calculate(event) {
    event.preventDefault();

    let dd = parseInt(document.getElementById('date').value);
    if (dd < 0 || dd > 31){
        alert("You have entered an invalid date")
    }
    
    let mm = parseInt(document.getElementById('month').value);
    if(mm < 0 || mm > 12){
        alert("You have entered an invalid month")
    }

    let year = parseInt(document.getElementById('year').value);
    let cc = parseInt(document.getElementById('year').value.slice(0,2));
    console.log(cc)
    let yy = parseInt(document.getElementById('year').value.slice(2,4));
    console.log(yy);

})