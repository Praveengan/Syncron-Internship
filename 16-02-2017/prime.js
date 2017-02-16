function prime(){
    var flag=0;
    var numb = document.getElementById("op").value;
	numb = parseInt(numb);
    for(var i = 1;i <= numb; i++){
        for(var k = 2; k < i; k++){
            if(i % k==0){
                flag = 0;
                break;
            }
            flag = 1;
        }
        if(flag == 1){
            document.write(i);
            document.write("<br>");
        }
    }
    return ;
}