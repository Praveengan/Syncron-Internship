function reverse(){
    var opd1,temp,rem,rev=0;
    opd1 = document.getElementById("op1").value;
    opd1 = parseInt(opd1);
    temp = opd1; 
    while(opd1>=1){
        rem = opd1 % 10;
        rev = (rev * 10) + rem;
        opd1 = parseInt(opd1/10);
    }
    if(temp==rev){
        document.getElementById("sum").innerHTML = "<h1>the reverse is "+ rev +" and it is palindrome</h1><br>";
    }
    else
    {
        document.getElementById("sum").innerHTML = "<h1>the reverse is "+ rev +" and it is not palindrome</h1><br>";
    }
}