// JavaScript is similar to Java...but also very different.

let toggle = 0;

function mainClick(){
    document.getElementsByClassName('main-content')[0].style.order = '1';
    document.getElementsByClassName('main-content')[0].classList.remove('hidden')

    document.getElementsByClassName('flavors')[0].style.order = '2';
    document.getElementsByClassName('flavors')[0].classList.add('hidden');

}


function flavorClick(){
    document.getElementsByClassName('main-content')[0].style.order = '2';
    document.getElementsByClassName('main-content')[0].classList.add('hidden')

    document.getElementsByClassName('flavors')[0].style.order = '1';
    document.getElementsByClassName('flavors')[0].classList.remove('hidden');
}