//collapsing behaviour of containers
//default bootstrap breakpoint: >576px

const followUs = document.querySelector('#follow-us');
const collapseOnSmallScreens = document.querySelectorAll('.collapseOnSmall');

window.onresize = function() {
        //breakpoint 900px
    if (window.innerWidth <= 900) followUs.classList.add('collapse');
    else followUs.classList.remove('collapse');
    //breakpoint 768px medium screens
    if (window.innerWidth < 768) collapseOnSmallScreens.forEach((element) => {
    element.classList.add('collapse');})
    else collapseOnSmallScreens.forEach((element) => {
        element.classList.remove('collapse');})
};

