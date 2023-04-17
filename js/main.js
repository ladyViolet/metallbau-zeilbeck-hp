//collapsing behaviour of containers
//default bootstrap breakpoint: >576px

const followUs = document.querySelector('#follow-us');
const collapseOnSmallScreens = document.querySelectorAll('.collapseOnSmall');
const break900 = window.matchMedia("(max-width: 900px)");
const break768 = window.matchMedia("(max-width: 768px)");


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

collapseItems900(break900); 
collapseItems768(break768); 
break900.addListener(collapseItems900);
break768.addListener(collapseItems768);