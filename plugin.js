var feild = document.querySelector('textarea');
var backUp = feild.getAttribute('placeholder');
var btn = document.querySelector('.btn');
var clear = document.getElementById('clear')

feild.onfocus = function(){
    this.setAttribute('placeholder', '');
    this.style.borderColor = '#333';
    btn.style.display = 'block'
}

feild.onblur = function(){
    this.setAttribute('placeholder',backUp);
    this.style.borderColor = '#aaa'
}

clear.onclick = function(){
    btn.style.display = 'none';
    feild.value = '';
}


var elem;
function fullScreen(elem){
		if( elem.requestFullScreen ){
		    elem.requestFullScreen();
		} else if( elem.webkitRequestFullscreen ){
		    elem.webkitRequestFullscreen();
		} else if( elem.mozRequestFullScreen ){
		    elem.mozRequestFullScreen();
		} else if( elem.msRequestFullscreen ){
		    elem.msRequestFullscreen();
		}
}

window.onscroll = function() {myFunction()};

function myFunction() {
    var X=document.getElementById("fariimo");
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        X.style.height = "1000px";
    } 
    else {
       X.style.height = "200px";
        }
    }



function change( el )
{
    if ( el.value === "Approve" ){
        el.value = "Approved";
        el.style.backgroundColor = "green";
        el.style.color = "white";
    }

    if ( el.value === "Hold" ){
        el.value = "On hold";
        el.style.backgroundColor = "red";
        el.style.color = "white";
    }
}



