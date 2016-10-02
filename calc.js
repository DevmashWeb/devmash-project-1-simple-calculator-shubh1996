    //  alert("Only to square two numbers :p");
//var getNumber = getElementbyClass("acce");
var myVar = document.getElementsByClassName("display");

myVar[0].onclick = function() { myVar[0].innerHTML= "Answer is " + 1;
};

var i=0 , none= 0 , oper = "plus", ntwo = 0 , myAns = none + ntwo ;
var myBtn = document.getElementsByTagName("button");

/*myBtn[i].onclick = function() {
    myAns = myBtn[i].getAttribute("id");
    myVar[0].innerHTML= myAns;
    if(myAns == "equal")
        break;
    if (none == -1 )   { 
            if(myAns == "one ")
                        none=1;
            else if(myAns == "two" )
                        none=2;
            else if(myAns == "three" )
                        none=3;
            else if(myAns == "four" )
                        none=4;
            else if(myAns == "five" )
                        none=5;
            else if(myAns == "six" )
                        none=6;
            else if(myAns == "seven" )
                        none=7;
            else if(myAns == "eight" )
                        none=8;
            else if(myAns == "nine" )
                        none=9;
            if(myAns == "zero" )
                        none=0;
    
    continue;
    } 
    if ( oper == -1 )    {
        if(myAns == "plus" )
                        oper= myAns;
        else if(myAns == "minus" )
                        oper= myAns;
        else if(myAns == "mod" )
                        oper= myAns;
        if(myAns == "divide" )
                        oper= myAns;
    continue;
    }  
      if( ntwo == -1)    {      
            if(myAns == "one ")
                        ntwo=1;
            else if(myAns == "two" )
                        ntwo=2;
            else if(myAns == "three" )
                        ntwo=3;
            else if(myAns == "four" )
                        ntwo=4;
            else if(myAns == "five" )
                        ntwo=5;
            else if(myAns == "six" )
                        ntwo=6;
            else if(myAns == "seven" )
                        ntwo=7;
            else if(myAns == "eight" )
                        ntwo=8;
            else if(myAns == "nine" )
                        ntwo=9;
            if(myAns == "zero" )
                        ntwo=0;
    
    break;
    }  
};
}
myVar[0].innerHTML= myAns;
*/

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
