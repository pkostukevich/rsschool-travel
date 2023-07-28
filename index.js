const photos = document.getElementsByClassName('destination_photo');
const wrapper = document.getElementsByClassName('destination_photo-wrapper')[0]; 
const points = document.getElementsByClassName('point');
const arrows =  document.getElementsByClassName('destination_arrow');
const menu = document.getElementsByClassName('logo_menu')[0];

const sign_in =  document.getElementsByClassName('sign-in')[0];
const sign_up =  document.getElementsByClassName('sign-up')[0];

let transform = 860;

if(window.innerWidth < window.innerHeight){
    transform = 380;
}

let isRight = false;
let isLeft = false;

function showLogin(){
    document.getElementsByClassName('popup-wrapper')[0].classList.remove('hidden');
    document.body.style.overflowY = 'hidden';
}

function changePopup(){
    sign_up.classList.toggle('hidden');
    sign_in.classList.toggle('hidden');
}

function closePopup(){
    document.getElementsByClassName('popup-wrapper')[0].classList.add('hidden');
    document.body.style.overflowY = 'scroll';
    if(sign_up.classList.contains('hidden')){
        changePopup();
    }
}

const slideRight = () => {
    points[1].classList.remove('active');
    points[0].classList.add('active');
    if(!isRight){
        isRight = true;
        wrapper.style.transform = "translateX(" + transform + "px)";
        points[0].style
    }    
}

const slideLeft = () => {
    points[1].classList.remove('active');
    points[2].classList.add('active');
    if(!isLeft){
        isLeft = true;
        wrapper.style.transform = "translateX(-"+ transform + "px)";
    }
}

const slide = () => {
    if(isRight){
        isRight = false;
        points[0].classList.remove('active');
    }
    if(isLeft){
        isLeft = false;
        points[2].classList.remove('active');
    }
    wrapper.style.transform = "translateX(0)";
    points[1].classList.add('active');
}

function toggleMenu(){
    document.getElementsByClassName("nav_mobile")[0].classList.toggle('hidden');
}

photos[0].addEventListener("mousedown", slideRight);
photos[1].addEventListener("mousedown", slide);
photos[2].addEventListener("mousedown", slideLeft);

points[0].addEventListener("click", slideRight);
points[1].addEventListener("click", slide);
points[2].addEventListener("click", slideLeft);

menu.addEventListener("click", toggleMenu);
document.getElementsByClassName("close_btn")[0].addEventListener("click", toggleMenu);

document.getElementsByClassName('popup_bcg')[0].addEventListener("click", closePopup);

for(let li of document.getElementById("ul_mobile").children){
    li.addEventListener("click", toggleMenu);
};

for(let b of document.getElementsByClassName("login_close_btn")){
    b.addEventListener("click", closePopup);
}
