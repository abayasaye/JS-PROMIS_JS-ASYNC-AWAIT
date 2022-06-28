// PROMIS

// function returnFunc () {
//     return newPromise = new Promise ((resolve , reject)=>{
//         let myDate = new Date("12/12/00 15:00:00").getHours()
//         if (myDate < 11) {
//             resolve("goood morning :" + myDate);
//         }
//         else{
//             reject("good afternon :" + myDate);
//         }
//     })
   
// }
// function printToScreen(){
    
//     returnFunc()
//     .then((data)=>{text_h1.innerText = data;})
//      .catch((err)=>{text_h1.innerText = err;})
// }



//  function promiseNumFunc (num1 , num2 ) {
//      return newPromise = new Promise ((resolve , reject)=>{
//         if(num2 % num1 ==0){
//             resolve("YES")
//         }
//         else{
//             reject("NO")
//         }
//     })
//  }

//  function printModuleFunc() {
//      promiseNumFunc (20 , 8 )
//     .then((data)=>{text_h2.innerText = data})
//     .catch((err)=>{text_h2.innerText = err})
    
//  }

// function myArrayFunc  (num,myArrayNum) {
//     return  thisPromise = new Promise ((resolve , reject)=>{
//         if (myArrayNum.includes(num)) {
//             resolve("YES") 
//         }
//         else{
//             reject("NO")
//        }
//     })
// }

// function printArrayFunc() { 
//     myArrayFunc(6 , [23,45,6,11,5])

//     .then((data)=>{text_h22.innerHTML = data})
//     .catch((err)=>{text_h22.innerHTML = err})
// }



async function myAsyncFunc (){
    load_div.innerHTML = "<img style=width:10vw; src='loading-gif'/>"
    start_btn.disabled = true;
    try{
        await fetch("https://moviesmern.herokuapp.com/movies/all")
        .then((data)=>console.log(data));
    }
    catch(err){}
    
    finally{
        start_btn.disabled = false;
        load_div.innerHTML = " "
    }
}
 
async function myFetchFunc () {
    try{
        await fetch("https://cat-fact.herokuapp.com/facts")
        then((data)=>{})
    }
    catch(err){
        
    }
    finally{

    }
}