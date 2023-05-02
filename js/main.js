//collapsing behaviour of containers
//default bootstrap breakpoint: >576px

const followUs = document.querySelector('#follow-us');
const collapseOnSmallScreens = document.querySelectorAll('.collapseOnSmall');
const collapseOnVerySmallScreens = document.querySelectorAll('.collapseOnVerySmall');
const expandOnSmallScreens = document.querySelectorAll('.expandOnSmall');
const break900 = window.matchMedia("(max-width: 900px)");
const break768 = window.matchMedia("(max-width: 768px)");
const break455 = window.matchMedia("(max-width: 455px)");


function collapseItems900(break900) {
    //breakpoint 900px
    if (break900.matches) {
        followUs.classList.add('collapse');  
    } else {
        followUs.classList.remove('collapse');
    }
};

function collapseItems768(break768) {
    if (break768.matches) {
        collapseOnSmallScreens.forEach((element) => {
        element.classList.add('collapse');})
    } else {
        collapseOnSmallScreens.forEach((element) => {
            element.classList.remove('collapse');})  
    } 
};

function collapseItems455(break455) {
    if (break455.matches) {
        collapseOnVerySmallScreens.forEach((element) => {
        element.classList.add('collapse');})
    } else {
        collapseOnVerySmallScreens.forEach((element) => {
            element.classList.remove('collapse');})  
    } 
};

function expandItems768(break768) {
    if (break768.matches) {
        expandOnSmallScreens.forEach((element) => {
        element.classList.remove('collapse');})
    } else {
        expandOnSmallScreens.forEach((element) => {
            element.classList.add('collapse');})  
    } 
};

const contentElements = document.getElementsByClassName("content-element");

function toggle(item) {
    for (var i = 0; i < contentElements.length; i++) {
        console.log(item);
        console.log(contentElements[i].id);
        if (contentElements[i].id != item) {
            contentElements[i].classList.add("hidden");
        }else{
            contentElements[i].classList.remove("hidden");
        }
    }
}


collapseItems900(break900); 
collapseItems768(break768);
collapseItems455(break455);
expandItems768(break768); 
break900.addListener(collapseItems900);
break768.addListener(collapseItems768);
break455.addListener(collapseItems455);
break768.addListener(expandItems768);
