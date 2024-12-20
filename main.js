import '/styles/style.scss';

import '/styles/utilities.scss';
import '/styles/typography.scss';
import '/styles/navbar.scss';
import '/styles/header.scss';
import '/styles/footer.scss';
import '/styles/menu.scss';

import '/styles/sections/properties.scss';
import '/styles/sections/agency.scss';
import '/styles/sections/benefits.scss';
import '/styles/sections/testimonial.scss';
import '/styles/sections/conversion.scss';
import '/styles/sections/gallery.scss';

let openMenuBarBtn = document.getElementById('js-open-menu-btn');

openMenuBarBtn.addEventListener('click', openMenuBar);

function openMenuBar() {
    if (document.getElementById('js-menu')) return;

    let menuBar = document.createElement('div');

    menuBar.className = 'menu';
    menuBar.id = 'js-menu';

    menuBar.innerHTML = `
                    
                      <div class="menu__top" id="js-menu__top">
            
                        <button class="close-menu-btn" id="js-close-menu-btn" aria-label="close menu" type="button">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                        </button>
            
                      </div>
            
                      <div class="menu-bottom">
                        
                        <ul class="menu__list">
    
                          <li class="menu__item"><a class="menu__link" href="https://fintech-website-six.vercel.app/">Home</a></li>
    
                          <li class="menu__item"><a class="menu__link" href="#">Pricing</a>
    
                            <span class="menu__item-arrow">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"   class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                              </svg>
                            </span>
                            
                            <ul class="menu__dropdown">
                              <li class="menu__dropdown-item"><a class="menu__dropdown-link" href="#pricing">Personal</a></li>
                              <li class="menu__dropdown-item"><a class="menu__dropdown-link" href="#pricing">Pro</a></li>
                              <li class="menu__dropdown-item"><a class="menu__dropdown-link" href="#pricing">Business</a></li>
                              <li class="menu__dropdown-item"><a class="menu__dropdown-link" href="#pricing">Enterprise</a></li>
                            </ul>
                            
                          </li>
    
                          <li class="menu__item"><a class="menu__link" href="#conversion">Contact Us</a>
    
                            <span class="menu__item-arrow">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"   class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                              </svg>
                            </span>
    
                            <ul class="menu__dropdown">
                                <li class="menu__dropdown-item"><a class="menu__dropdown-link" href="#">Support</a></li>
                                <li class="menu__dropdown-item"><a class="menu__dropdown-link" href="#">Sales</a></li>
                            </ul>
                          </li>
    
                          <li class="menu__item"><a class="menu__link" href="#benefits">About Us</a></li>
    
                        </ul>
            
                      </div>
                    `;

    document.body.style.overflow = 'hidden';

    document.body.appendChild(menuBar);

    let closeMenuBarBtn = document.getElementById('js-close-menu-btn');

    closeMenuBarBtn.addEventListener('click', closeMenuBar);

    let links = menuBar.querySelectorAll('ul li a');
    links.forEach(link => {
        link.addEventListener('click', closeMenuBar);
    });

    createOverlay();
    activateDropdown();
}

function activateDropdown() {
    let arrows = document.querySelectorAll('.menu__item-arrow');

    arrows.forEach(arrow => {
        let dropdown = arrow.nextElementSibling;

        if (dropdown) {
            arrow.addEventListener('click', function () {
                if (dropdown.style.display === 'block') {
                    dropdown.style.display = 'none';
                } else {
                    dropdown.style.display = 'block';
                }
            });
        }
    });

    rotateArrow();
}

function rotateArrow() {
    let arrows = document.querySelectorAll('.menu__item-arrow');

    arrows.forEach(arrow => {
        arrow.addEventListener('click', function () {
            this.classList.toggle('rotate');
        });
    });
}

function closeMenuBar() {
    let menuBar = document.getElementById('js-menu');
    let overlay = document.querySelector('.menu__overlay');

    document.body.style.overflow = 'auto';

    if (menuBar) {
        menuBar.remove();
    }

    removeOverlay();
}

function createOverlay() {
    let overlay = document.createElement('div');

    overlay.className = 'menu__overlay';

    overlay.addEventListener("click", closeMenuBar);

    document.body.appendChild(overlay);
}

function removeOverlay() {
    let overlay = document.querySelector('.menu__overlay');

    if (overlay) {
        overlay.remove();
    }
}