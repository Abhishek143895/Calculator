
var button = document.querySelectorAll("button");
var div1 = document.getElementById("div-1");

for( let i=0; i<button.length; i++){
        button[i].addEventListener("click",function(){

            if(this.innerHTML == "="){ 
               // console.log(div1.textConten);                  //This,innerHTML means it is tragetting button[i].
                div1.innerHTML = eval(div1.textContent);
            }


            else{
                if(this.innerHTML == "÷"){
                    div1.innerHTML += "/";         //This is for converstion of / to ÷
                }
                else if(this.innerHTML == "x"){
                    div1.innerHTML += "*";            //This is for converstion of * to ÷ X
                }
                else if(this.innerHTML == "C"){
                    div1.innerHTML = "";              //This is for clear the screen.
                }
                else{
                    div1.innerHTML += this.innerHTML;       //This is main content for calculation.
                }                                          //(div1.innerHTML = div1.innerHTML + this.innerHTML.)
            }
        
            });
        }