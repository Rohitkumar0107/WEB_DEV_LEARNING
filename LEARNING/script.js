// function JS_AND_ASYNC_JS(){
// // // high order function
// // // jo parameter ya return kare function ko
// // function abcd(){

// // }

// // abcd(function(){})

// // // foreach

// // a=[1,2,3,4]
// // a.forEach(function(){})

// // // constructor function // "this" ka use ho
// // // like class in cpp
// // function saancha(){
// //     this.width =12;
// //     this.height =22;
// //     this.color="brown";
// //     this.taste="sugary"
// // }
// // // new banega

// // var b1 = new saancha();
// // var b2 = new saancha();
// // var b3 = new saancha();

// // function circularButton(color){
// //     this.radius = 2;
// //     this.color = color;
// //     this.icon = false;
// // }

// // var redbtn = new circularButton("red");
// // var greenbtn = new circularButton("green");

// // // first class function
// //  var abcd = function(){

// //  }
// //  // pass as argument

// //  setInterval(function(){});

// // //  new keyword

// // function NEEEEW(){
// //     this.age = 12;
// // }

// // new NEEEEW()

// // {
// //     age:12;
// // }

// // // iife

// // var ans = (function(){
// //     var a = 12;

// //     return {
// //         getter: function(){
// //             console.log(a);
// //         },
// //         setter:function(val){
// //             a = val;
// //         }
// //     }
// // })()

// // var human ={
// //     canfly:false,
// //     cantalk:true,
// //     canwalk:true
// // }

// // var sheryiansStudent = {
// //     canMakeAmazingWebsite:true,
// //     canMakeAwsomeWebsite:true
// // }

// // sheryiansStudent._proto_ = human;

// // // this in denpth

// // var obj = {
// //     baatkaro : function(){
// //         console.log(this);
// //     }
// // }

// // obj.baatkaro();

//             /// call
// // function abcd(){
// //     console.log(this);
// //     console.log(this.age);
// // }

// // var obj = {
// //     age:24
// // }

// // abcd.call(obj)

// //          apply
// // function abcd(val1,val2,val3){
// //     console.log(this);
// //     console.log(this.age,val1,val2,val3);
// // }

// // var obj = {
// //     age:24
// // }

// // abcd.call(obj,1,2,3)

// // //          apply
// // function abcd(val1,val2,val3){
// //     console.log(this);
// //     console.log(this.age,val1,val2,val3);
// // }

// // var obj = {
// //     age:24
// // }

// // abcd.apply(obj,[1,2,3])

// //          bind
// // function abcd(){
// //     console.log(this);
// //     // console.log(this.age,val1,val2,val3);
// // }

// // var obj = {
// //     age:24
// // }

// // var bindedfnc = abcd.bind(obj);

// // bindedfnc();

// ////////////////// ASYNC  //////////////////

// // sync
// // console.log("hey1");
// // console.log("hey2");
// // console.log("hey3");
// // console.log("hey4");

// // ASYNC

// // console.log("hey1");

// // for(var i=0;i<=10000;i++){
// //     console.log("hey2");
// // }
// // setTimeout(function(){
// //     console.log("hello");
// // },1000)

// // var ans = fetch(`https://www.facebook.com`)
// // console.log(ans);

// ////////////////promise////////////////

// // var ans = new Promise((res,rej)=>{
// //     if(false){
// //         return res();
// //     }
// //     else{
// //         return rej();
// //     }
// // })

// // ans.then(function(){
// //     console.log("res hogya tha")
// // })
// // .catch(function (){
// //     console.log("rej ho gya tha");
// // })

// // var ans = new Promise((res,rej)=>{
// //     var n = Math.floor(Math.random()*10);

// //     if(n<5){
// //         return res();
// //     }
// //     else{
// //         return rej();
// //     }
// // })

// // ans.then(function(){
// //     console.log("below");
// // })
// // .catch(function (){
// //     console.log("above");
// // })

// // var ans = new Promise(function(res,rej){
// //     return res("sabse phale ghar pe aao")
// // })

// // var p2 = ans.then(function(data){
// //     console.log(data);
// //     return new Promise(function (res, rej) {
// //         return res("gate khole our gate lago")
// //     })
// // })

// // var p3 = p2.then(function(data){
// //     console.log(data);
// //     return new Promise (function(res,rej){
// //         return res("khana pako ans khao")
// //     })
// // })

// // var p4 = p3.then(function(data){
// //     console.log(data);
// //     return new Promise (function(res,rej){
// //         return res("ignito mode kholo")
// //     })
// // })

// // var p5 = p4.then(function(data){
// //     console.log(data);
// //     return new Promise (function(res,rej){
// //         return res("sojao")
// //     })
// // })

// // p5.then(function(data){
// //     console.log(data);
// // })

// ////////////////async await //////////////

// // function abcd(){
// //     fetch(`https://randomuser.me/api/`)
// //     .then(function(raw){
// //         return raw.json();
// //     })
// //     .then(function(data){
// //         console.log(data);
// //     });
// // }

// // abcd()

// //////////////// AWAIT ///////////

// // async function abcd(){
// //     let raw = await fetch(`https://randomuser.me/api/`);

// //     let data = await raw.json();

// //     console.log(data);

// // }

// // abcd()

// }

/////////// DOM  ////////////////

// 1. selecting element

// var a = document.querySelector("h1")

// /// 2.  html change

// // a.innerHTML="changed"

// //////// 3. css change

// //  a.style.color = "red"
// //  a.style.backgroundColor="black"

// ///// 4. event listner

// a.addEventListener("click",function(){
//     a.style.color = "green"
// })

var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")
var flag = 0
btn.addEventListener("click",function(){
    if(flag == 0){
        bulb.style.backgroundColor = "yellow"
        console.log("Cliocked")
        flag = 1
    }
    else{
        bulb.style.backgroundColor = "#000"
        console.log("Cliocked")
        flag = 0
    }
})