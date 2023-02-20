// JavaScript is similar to Java...but also very different.

let toggle = 0;

function mainClick(){
    mainContent = document.getElementsByClassName('main-content')[0];
    mainContent.style.order = '1';
    mainContent.classList.remove('hidden');
    document.getElementById('main-button').classList.add('active');

    flavors = document.getElementsByClassName('flavors')[0];
    flavors.style.order = '2';
    flavors.classList.add('hidden');
    document.getElementById('flavor-button').classList.remove('active');
}


function flavorClick(){
    mainContent = document.getElementsByClassName('main-content')[0];
    mainContent.style.order = '2';
    mainContent.classList.add('hidden');
    document.getElementById('main-button').classList.remove('active');

    flavors = document.getElementsByClassName('flavors')[0];
    flavors.style.order = '1';
    flavors.classList.remove('hidden');
    document.getElementById('flavor-button').classList.add('active');
}