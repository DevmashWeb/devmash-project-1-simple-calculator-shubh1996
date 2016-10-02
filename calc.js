    //  alert("Only to square two numbers :p");
//var getNumber = getElementbyClass("acce");
var myVar = document.getElementsByClassName("display");

myVar[0].onclick = function() { myVar[0].innerHTML= "Answer is " + 1;
};

var i=0 , none= 0 , oper = "plus", ntwo = 0 , myAns = none + ntwo ;
var myBtn = document.getElementsByTagName("button");

myBtn[0].onclick = function(){
    none=0; 
    ntwo=0;
    oper="plus";
    myAns=none+ntwo;
};//ac
myBtn[1].onclick = function(){
    none=0; 
    ntwo=0;
    oper="plus";
    myAns=none+ntwo;
    
};//ce
myBtn[2].onclick = function(){
    oper="mod";
};//mod
myBtn[3].onclick = function(){
    oper="divide";
};//divide
myBtn[4].onclick = function(){
    if(oper == -1)
        none=none*10 + 9;
    else 
            ntwo=ntwo*10 + 9;
};//nine
myBtn[5].onclick = function(){
    if(oper == -1)
        none=none*10 + 8;
    else 
            ntwo=ntwo*10 + 8;
};//eight
myBtn[6].onclick = function(){
    if(oper == -1)
        none=none*10 + 7;
    else 
            ntwo=ntwo*10 + 7;
};//seven
myBtn[7].onclick = function(){
    if(oper == -1)
        none=none*10 + 6;
    else 
            ntwo=ntwo*10 + 6;
};//six
myBtn[8].onclick = function(){
    if(oper == -1)
        none=none*10 + 5;
    else 
            ntwo=ntwo*10 + 5;
};//five
myBtn[9].onclick = function(){
    if(oper == -1)
        none=none*10 + 4;
    else 
            ntwo=ntwo*10 + 4;
};//four
myBtn[10].onclick = function(){
    if(oper == -1)
        none=none*10 + 3;
    else 
            ntwo=ntwo*10 + 3;
};//three
myBtn[11].onclick = function(){
    if(oper == -1)
        none=none*10 + 2;
    else 
            ntwo=ntwo*10 + 2;
};//two
myBtn[12].onclick = function(){
    if(oper == -1)
        none=none*10 + 1;
    else 
            ntwo=ntwo*10 + 1;
};//one
myBtn[13].onclick = function(){
    if(oper == -1)
        none=none*10 + 0;
    else 
            ntwo=ntwo*10 + 0;
};//zero
myBtn[14].onclick = function(){};//point
myBtn[15].onclick = function(){
    oper="multiply";
};//multiply
myBtn[16].onclick = function(){
    oper="plus";
};//plus
myBtn[17].onclick = function(){
    oper="minus";
};//minus
myBtn[18].onclick = function(){
       if(oper == "plus")
       myAns=none + ntwo;
       else if(oper == "minus")
       myAns=none - ntwo;
       else if(oper == "divide")
       myAns=none/ntwo;
       else if(oper == "multiply")
       myAns=none*ntwo;
       else if(oper == "mod")
       myAns=none-(none/ntwo);
       else{}
    myVar[0].innerHTML= myAns;
    none=0;
    ntwo=0;
    oper="plus";
    
};//equal
//myVar[0].innerHTML= myAns;
