
function myArray(name,course,unit,image,batch){
this.name = name;
this.course = course;
this.unit = unit;
this.image = image;
this.batch = batch;
}

let data =JSON.parse(localStorage.getItem("students")) || [];


function storeData(event){

event.preventDefault();

let form = document.getElementById("students_data")


let name = form.name.value;
let course = form.course.value;
let unit =  form.unit.value;
let image = form.image.value;
let batch = form.batch.value;

document.getElementById("name").value = null
document.getElementById("course").value = null
document.getElementById("unit").value = null
document.getElementById("image").value = null
document.getElementById("batch").value = null

let S1 = new myArray(name,course,unit,image,batch)

data.push((S1))

localStorage.setItem("students",JSON.stringify(data))



var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;

data.forEach(function(el){
    if(el.batch == 1){
        count1++;   
    } 
})

document.getElementById("batch1").innerText= count1


data.forEach(function(el){
    if(el.batch == 2){
        count2++;   
    } 
})
document.getElementById("batch2").innerText= count2

data.forEach(function(el){
    if(el.batch == 3){
        count3++;   
    } 
})

document.getElementById("batch3").innerText= count3
data.forEach(function(el){
    if(el.batch ==4){
        count4++;   
    } 
})
document.getElementById("batch4").innerText= count4



localStorage.setItem("count1",JSON.stringify(count1))
localStorage.setItem("count2",JSON.stringify(count2))
localStorage.setItem("count3",JSON.stringify(count3))
localStorage.setItem("count4",JSON.stringify(count4))



}

function calcuate(){

    
var data = JSON.parse(localStorage.getItem("students"))

var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;

data.forEach(function(el){
    if(el.batch == 1){
        count1++;   
    } 
})

document.getElementById("batch1").innerText= count1


data.forEach(function(el){
    if(el.batch == 2){
        count2++;   
    } 
})
document.getElementById("batch2").innerText= count2

data.forEach(function(el){
    if(el.batch == 3){
        count3++;   
    } 
})

document.getElementById("batch3").innerText= count3
data.forEach(function(el){
    if(el.batch ==4){
        count4++;   
    } 
})
document.getElementById("batch4").innerText= count4



localStorage.setItem("count1",JSON.stringify(count1))
localStorage.setItem("count2",JSON.stringify(count2))
localStorage.setItem("count3",JSON.stringify(count3))
localStorage.setItem("count4",JSON.stringify(count4))

}
calcuate()
