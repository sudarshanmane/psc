function append(){

    let container = document.getElementById('container')
    let data = JSON.parse(localStorage.getItem("students"))
    container.innerHTML = null

data.forEach(function(el,i){
    let box = document.createElement("div")

    let img = document.createElement("img")
    img.src = el.image;

    let name = document.createElement("p");
    name.innerText=el.name;

    let course = document.createElement("p")
    course.innerText=el.course

    let unit = document.createElement("p")
    unit.innerText=el.unit

    
    let batch = document.createElement("p")
    batch.innerText=el.batch

    let button = document.createElement("button")
    button.innerText="Remove";
    button.addEventListener("click",function(){ 
        remove(el,i);
    })

    


    box.append(img,name,course,unit,batch,button)

    container.append(box)

    
    
});

}
append();

function remove(el,index){
    var data = JSON.parse(localStorage.getItem("students")) || [];

    let newData = data.filter(function(e,i){
    if(i == index){
        
        let trash =  JSON.parse(localStorage.getItem("trash")) || [];
        trash.push(e)
        localStorage.setItem("trash",JSON.stringify(trash))
    }  
    else{
        return i != index ;
    }
    })

    localStorage.setItem("students",JSON.stringify(newData))
    
    
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


 append();
}
