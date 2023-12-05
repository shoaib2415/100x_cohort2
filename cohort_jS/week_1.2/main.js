/* 
1.JS is interpreted lang
2.single threaded
*/

console.log("hello world");
 var a=1;
 a=2;
 console.log(a);

 let b=1;
 b=2;
 console.log(b);

 /* const c=1;
 c=2;
 console.log(c);

 in const variable cant be changed once declared in let and var its possible.
*/

let first_name="shoaib";
let age=21;

console.log("i'm "+ first_name + ","+age+"years old");

/*________*/

if(age<18)
{
    console.log("child");
}
else{
    console.log("adult");
}

let ans=0;
for(let i=0;i<100;i++)
{
    ans=ans+i;
}

console.log(ans);



/*__________________*/

const array=["shoaib","sai kiran","shreyas"];
for(let i=0;i<array.length;i++)
{
    console.log(array[i]);
}

const person={
    f_name:"shoaib",
    l_name:"mohammad"
}

console.log(person.f_name+" "+person.l_name);


const array1=[
    {name:"shoaib",
id:101},
{
    name:"sai",
    id:102
}
];

console.log(array1[1].name);