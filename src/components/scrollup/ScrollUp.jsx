import React from 'react';
import './scrollup.css';

const ScrollUp = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup");
        if (this.scrollY >= 560) scrollUp.classlist.add("show-scroll");
        else scrollUp.classList.add("show-scroll");
    })
  return (
    <a href="#" className='scrollup'>
        <i className='uil uil-arrow-up scrollup__icon'></i>
    </a>
  )
}

export default ScrollUp