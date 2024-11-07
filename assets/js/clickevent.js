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
