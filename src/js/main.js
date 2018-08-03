var activLanguage = document.querySelector(".change__language i");

activLanguage.addEventListener('click' , addClass);

function addClass () { 
    this.addClass = 'active__language';
 }