//document.getElementById("count-el").innerText=5

//let count =0

//console.log(count)

//let firstBatch=5
//let secondBatch=7
//let count=firstBatch *secondBatch
// console.log(count)

//let myAge =1
//let humanDogRatio=7
//let myDogAge=myAge * humanDogRatio
//console.log(myDogAge)

//let bonusPoints =50

//bonusPoints=bonusPoints + 100
//console.log(bonusPoints)


//bonusPoints=bonusPoints -25
//console.log(bonusPoints)

//bonusPoints=bonusPoints+70
//console.log(bonusPoints)

function increment() {
    console.log("you clicked")
}

function test() {
    console.log(42)
}
test()


let lap1 = 34
let lap2 = 33
let lap3 = 36

function lapses() {
    let totalTime = lap1 + lap2 + lap3
    console.log(totalTime)
}
lapses()


let lapsCompleted = 0

//function increment(){
//lapsCompleted = lapsCompleted + 1
//}

//increment()
//increment()
//increment()
//console.log(lapsCompleted)
let username = "per"
let message = "you have three new messages"
console.log(message + "," + username + "!")

let messageToUser = console.log(message + "," + username + "!")



//let userName="jenny"
//let greeting="Hi,my name is "
//let myGreeting =console.log( greeting + userName)


//let welcomeEl = document.getElementById("welcome-el")
//let userName = "Pearls"
//let myGreeting = "welcome back "

//welcomeEl.innerText= myGreeting + userName 


//welcomeEl.innerText+= "👋"







//}
//console.log(increment)


//function save() {
    //console.log(count)
//}


//onsole.log(save)

 

let saveEl=document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0
console.log(saveEl)

function increment() {
count +=  1
 countEl.innerText = count
}

function save(){
    let countStr=count + " "+ " - "
    saveEl.textContent += countStr
    countEl.textContent=0
    count=0
}


let firstName="jenny"
let secondName="Pearls"

let fullName= firstName +" " +secondName
console.log(fullName)



let name="Linda!"
let greeting ="Hi there,"

function greetLinda(){

    console.log(greeting + name )
}


greetLinda()


let myPoints=3

 function add3points(){

  myPoints +=  3

}

 function removelPoint(){
 myPoints-=  1
}

add3points()
add3points()
add3points()
removelPoint()
removelPoint()

console.log(myPoints)
