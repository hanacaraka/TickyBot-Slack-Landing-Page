const btn = document.getElementById('btn');
const featureItem = document.querySelectorAll('.feature-item');

window.onscroll = function() {
    showBtn();
}

function showBtn() {
    let scrollPosition = document.documentElement.scrollTop;
    
    // Show gotopbutton when window scroll more than 350
    // and add fadeIn animate for item in the feature section.
    // if less than 350 hide button  
    if (scrollPosition > 350)  {
        btn.classList.remove('gotopbtn');
        btn.classList.add('showbtn');  

        featureItem.forEach(item => item.classList.add('animate'));
    } else {      
        btn.classList.remove('showbtn');
        btn.classList.add('gotopbtn');
    }
}

// Add event for go top button when clicked it will move to the top of page. 
// Use top: 0 for a position of page.
btn.addEventListener('click', scrollToTop);

function scrollToTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}