const navbarHoverEffect = () => {
    const dropdownBodies = document.querySelectorAll('.dropdown_body');

    dropdownBodies.forEach((dropdownBody) => {
        const sitterJobHover = dropdownBody.closest('.navitem_left')?.querySelector('.sitter_job_hover');
        
        if (sitterJobHover) {
            dropdownBody.addEventListener('mouseenter', () => {
                sitterJobHover.style.borderBottom = "3px solid var(--main-color)";
            });

            dropdownBody.addEventListener('mouseleave', () => {
                sitterJobHover.style.borderBottom = "";
            });
        }
    });

     const topCities_drop = document.querySelector('.dropdown_body_top_cities');
     const topCities = document.querySelector('.top_cities_hover');
        
     topCities_drop.addEventListener('mouseenter', () => {
            topCities.style.borderBottom = "3px solid var(--main-color)";
        });      
     topCities_drop.addEventListener('mouseleave', () => {
            topCities.style.borderBottom = "";
        });      
};

navbarHoverEffect();


// Screen NavBar

const NavbarFunction = (openEle, closeEle, menu) => {
    const openButton = document.querySelector(openEle);
    const closeButton = document.querySelector(closeEle);
    const menuElement = document.querySelector(menu);

    openButton.addEventListener('click', (e) => {
        e.stopPropagation();

        menuElement.classList.add("open");
        closeButton.classList.add("show");
    });

    closeButton.addEventListener('click', (eve) => {
        eve.stopPropagation();

        menuElement.classList.remove("open");
        closeButton.classList.remove("show");
    });

    document.addEventListener('click',(e) => {
        if(!menuElement.contains(e.target) && !openButton.contains(e.target)){
            menuElement.classList.remove("open");
            closeButton.classList.remove("show");
        }
    });
};

NavbarFunction('.dk_menu-icon', '.menu-icon-close', '.navbar');