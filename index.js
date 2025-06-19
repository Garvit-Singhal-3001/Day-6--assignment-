let marks=prompt("enter marks between 0-100");
marks=Number(marks);

if(marks <= 100 && marks >=0  ){
    if(marks >=90 && marks <=100){
        console.log("grade=A ,","Excellent");
    }
    else if(marks >=75 && marks <=89){
        console.log("grade=B ,","Great job");
    }
    else if(marks >=60 && marks <=74){
        console.log("grade=C ,","Good Effort");
    }
    else if(marks >=40 && marks <=59){
        console.log("grade=D ,","You passed");
    }
    else if(marks >=0 && marks <=39){
        console.log("grade=F ,","Better Luck Next Time");
    }
}
else{
    console.log("wrong entry");
}