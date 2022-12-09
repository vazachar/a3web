
/*Java script for hamburger menu By: Andy Mo reference code from: https://www.youtube.com/watch?v=flItyHiDm7E*/

const hamburger = document.querySelector(".hamburger"); /*need access to hamburger*/
const navMen = document.querySelector(".nav-elem"); /*get access to nav menu*/

hamburger.addEventListener("click", () => { 
    hamburger.classList.toggle("active"); /*on click it will toggle the hamburger */
    navMen.classList.toggle("active"); /*on click it will toggle my menu to show up once you click the hamburger*/
})


