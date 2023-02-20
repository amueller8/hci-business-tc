// JavaScript is similar to Java...but also very different.

let toggle = 0;

function mainClick(){
    document.getElementsByClassName('main-content')[0].style.visibility = 'visible';
    document.getElementsByClassName('flavors')[0].style.visibility = 'hidden';
}


function flavorClick(){
    document.getElementsByClassName('main-content')[0].style.visibility = 'hidden';
    document.getElementsByClassName('flavors')[0].style.visibility = 'visible';


}