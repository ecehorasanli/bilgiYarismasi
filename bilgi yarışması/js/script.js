  var ul=document.getElementById('ul');
  var btn=document.getElementById('button');
  var skorCard=document.getElementById('skorCard');
  var bilgiBox=document.getElementById('soruBox');
  var op1=document.getElementById('op1');
  var op2=document.getElementById('op2');
  var op3=document.getElementById('op3');
  var op4=document.getElementById('op4');



      var app={
                sorular:[
                          {q:'S�vey� Kanal�ndan ge�mek i�in hangi �lkeye gitmeniz gerekir ?', options:['A)M�s�r','B)Danimarka','C)Rusya','D)Fas'],answer:1},

                          {q:'Alanya ilinin Anadolu Sel�uklu zaman�ndaki ismi nedir ?',options:['A)Korakesium','B)Kalanoros','C)Alaiye','D)Keykubat'],answer:3},

                          {q:'�in seddi nerededir ?',options:['A)G�ney Kore','B)�in','C)Hindistan','D)Japonya'],answer:2},

                          {q:'Hatay T�rkiye Cumhuriyetine hangi y�lda kat�lm��t�r ?',options:['A)1936','B)1937','C)1938','D)1939'],answer:4},

                          {q:'Catch Me �f You Can filminde Frank Abagnale Jr karakterini canland�ran oyuncu kimdir?',options:['A)Leonardo DiCaprio','B)Tom Hanks','C)Cillian Murphy','D)Brad Pitt'],answer:1}

                          ],
                index:0,
                load:function(){
                	   if(this.index<=this.sorular.length-1){
                        bilgiBox.innerHTML=this.index+1+". "+this.sorular[this.index].q;      
                        op1.innerHTML=this.sorular[this.index].options[0];
                        op2.innerHTML=this.sorular[this.index].options[1];
                        op3.innerHTML=this.sorular[this.index].options[2];
                        op4.innerHTML=this.sorular[this.index].options[3];
                           this.skorCard();
                        }
                        else{

                        bilgiBox.innerHTML="Genel K�lt�r Yar��man�z Bitmi�tir."      
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.style.display="none";
			
                        }
                },
                 sonraki:function(){
                    this.index++;
                    this.load();
                 },
                check:function(ele){
                   
                         var id=ele.id.split('');
                         
                         if(id[id.length-1]==this.sorular[this.index].answer){
                         	this.skor++;
                         	ele.className="Do�ru";
                         	ele.innerHTML="Do�ru";
                         	this.skorCard();
                         }
                         else{
                         	ele.className="Yanl��";
                         	ele.innerHTML="Yanl��";
				document.getElementById('op'+this.sorular[this.index].answer).className="Do�ru"
                         }
                },
                notClickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="none";
                       }
                },

                clickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="auto";
                       	    ul.children[i].className=''

                       }
                },
                skor:0,
                skorCard:function(){
                	skorCard.innerHTML=this.sorular.length+"/"+this.skor;
                }
 
           }


           window.onload=app.load();


           function button(ele){
           	     app.check(ele);
           	     app.notClickAble();
           }

         function  sonraki(){
              app.sonraki();
              app.clickAble();
         } 
