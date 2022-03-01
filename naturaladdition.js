//Exercise 1
const array = [1, 2, 3, 4, 5];

function add(){
    let sum = 0;
    
    
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        
    return sum;
    }
//Exercise 2


//Exercise 3
 function higherordergreet(name="stranger"){
     alert("Hellp " + " , " + name + "!");
 }
 function processuserinput(callback){
     var name =prompt('enter your name.');
     callback(name);
 }
 processuserinput(higherordergreet);

 //Exercise 4
 let text ="";
 var myarr=["one","two","three","four"];
 myarr.foreach(myfunction);
 
 function myfunction(item, index)  {
     text += index + ":" + item + "<br>";
 }

 //Exercise 5
 var mysecondarr = [1, 2, 3, 4];
 mysecondarr.foreach(myfunction)

 function myfunction(item, index, arr){
     arr[index] = item * item;
 }
 //Exercise 6
 