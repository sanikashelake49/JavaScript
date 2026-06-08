//map use case
let employees=[{name:"ram",salary:50000},{name:"sham",salary:36000},{name:"rajesh",salary:34300},{name:"shambu",salary:36440}];
console.log(employees);
let update=employees.map((emp) =>{
    return{
        name:emp.name,
        salary:emp.salary+10000
    }
});

console.log(update);


// let n=prompt("enter no");
// let arr=[];
//  for(let i=1;i<=n;i++){
//      arr[i-1]=i;
//  }
//  console.log(arr);

//  let sum=arr.reduce((res,prev) =>{
//     return res+prev;
//  });

//  console.log(sum);

//  let prod=arr.reduce((mul,prev) =>{
//   return mul*prev;
//  })

//  console.log(prod);



//ass
// let std=[87,97,93,78,95,90,76];

// let topper=std.filter((val) => {
//     return val>90;
// });

// console.log(topper);


//filter

// let arr=[1,2,3,4,5]

// let newarr= arr.filter((val)=>{
//     return val%2===0;
// });
// console.log(newarr);

// map
// let num=[1,2,3,4,5];

// let newArr=num.map((val)=>{
//    return val* val;
// });

// console.log(newArr);
//using squre
// let arr=[1,2,3,4,5]

// arr.forEach((val) =>{
//     console.log(val*=val);
// });

// let arr=[1,2,3,4,5]

// arr.forEach (function printlVal(val) { console.log(val);});

// arr.forEach((val)=>{
//     console.log(val);
// }); 


// function abc(){
//     return "Hello";
// }

// function result(abc){
//     return abc+;
// }

// console.log(result(abc()));


//vowel count
// function chkCount(str){
//     let count=0;
//        for(const char of str){
//         //console.log(char);
        
//         if(char=='a' ||char=='e'||char=='i' ||char=='o'||char=='u'){
//              count++;
//         }
//     }
//     console.log(count); 
// }

// function myFunction(){
//     console.log("Hello");

// }

// myFunction();
// //addition of two no
// function sum(x,y){
//   s=x+y;
//   console.log("before return");
//   return s;
// }
// sum();
// const arrowFun= (x,y)=>{console.log(x+y)};
// const add= (a,b) => {return a+b};