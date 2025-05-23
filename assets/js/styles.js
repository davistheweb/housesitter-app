const styles = `@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

:root {
  --main-color: #00bfd5;
  --text-color-white: #fff;
  --text-color-black: #000;
  --light-color-black: #333;
  --background-color-white: #fff;
  --box-shadows: rgba(0, 0, 0, 0.24) 0px 0px 8px;
  /* Fonts(Font weight, family ) */
  --font-most-light: 200;
  --font-lighter: 300;
  --font-light: 400;
  --font-bold: 500;
  --font-bolder: 600;
  --font-boldest: 700;
  --font-family-poppins: "Poppins", "sans-serif";
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

body {
  background-color: var(--background-color-white);
  height: 100vh;
}

main {
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

section {
  width: 100%;
}

/* Header Style */

.header {
  background-color: var(--background-color-white);
  padding: 0.4% 3%;
  width: 100%;
  display: flex;
  box-shadow: var(--box-shadows);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  max-width: 1400px;
}

.logo-img {
  transform: translateX(49px) translateY(4px);
}

.logo-img img {
  width: 110%;
  height: 60px;
}

.navbar {
  width: 100%;
  padding: 0 6%;
  position: relative;
}

.nav-colections {
  display: flex;
  gap: 10rem;
}

.nav-left {
  transform: translateX(20px) translateY(25px);
}

.navlist_left {
  position: relative;
  display: flex;
  gap: 1.5rem;
}

.navlink_left {
  color: var(--text-color-black);
  font-weight: var(--font-lighter);
  font-size: 14px;
  font-family: var(--font-family-poppins);
}

.more-link {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.more-link i {
  font-size: 1rem;
}

.nav-right {
  display: flex;
  gap: 2rem;
  transform: translateX(20px) translateY(25px);
}

.navlist_right {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.navlink_right {
  color: var(--text-color-black);
  font-weight: var(--font-lighter);
  font-size: 14px;
  font-family: var(--font-family-poppins);
}

.left-dropdown {
  position: relative;
}

.sitter_job_hover {
  height: 37px;
}

.sitter_job_hover:hover {
  border-bottom: 3px solid var(--main-color);
}

.dropdown_body:hover .sitter_job_hover {
  border-bottom: 3px solid var(--main-color) !important;
}

.get_housesitterjob_dropdown_menu {
  position: absolute;
  background-color: var(--background-color-white);
  box-shadow: var(--box-shadows);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 10px;
  padding-bottom: 10px;
  row-gap: 1;
  width: fit-content;
  max-height: initial;
  min-width: 190px;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
}

.sitter-job:hover .get_housesitterjob_dropdown_menu {
  visibility: visible;
  opacity: 1;
  pointer-events: initial;
}

.housesitterjob_link {
  padding: 7px 14px;
  color: var(--light-color-black);
  font-family: var(--font-family-poppins);
  font-size: 12px;
  font-weight: var(--font-lighter);
  width: 100%;
}

.find_housesitter_dropdown {
  position: absolute;
  background-color: var(--background-color-white);
  box-shadow: var(--box-shadows);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  row-gap: 1rem;
  min-width: 190px;
  width: fit-content;
  padding-bottom: 8px;
  padding-top: 8px;
  pointer-events: none;
  visibility: hidden;
  opacity: 0;
}

.find_housesitter_dropdown li .find_housesitter_link {
  padding: 12px 16px;
  color: var(--light-color-black);
  font-family: var(--font-family-poppins);
  font-size: 14px;
  font-weight: var(--font-lighter);
  width: 150%;
}

.find_housesitters:hover .find_housesitter_dropdown {
  pointer-events: initial;
  visibility: visible;
  opacity: 1;
}

.tools_dropdown_menu {
  position: absolute;
  background-color: var(--background-color-white);
  box-shadow: var(--box-shadows);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  row-gap: 1rem;
  min-width: 190px;
  width: fit-content;
  padding-bottom: 8px;
  padding-top: 8px;
  pointer-events: none;
  visibility: hidden;
  opacity: 0;
}

.tools_dropdown_links {
  padding: 12px 16px;
  color: var(--light-color-black);
  font-family: var(--font-family-poppins);
  font-size: 12px;
  font-weight: var(--font-lighter);
  width: 150%;
}

.tools-dropdown:hover .tools_dropdown_menu {
  pointer-events: initial;
  visibility: visible;
  opacity: 1;
}

.more-drop-menu {
  position: absolute;
  background-color: var(--background-color-white);
  box-shadow: var(--box-shadows);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  min-width: 130px;
  row-gap: 1;
  width: fit-content;
  padding-top: 6.5px;
  padding-bottom: 6.5px;
  transform: translateY(1px);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  overflow: initial;
  max-height: initial;
}

.more-drop-menu li .more-content-link {
  padding: 7px 14px;
  font-size: 14px;
  font-family: var(--font-family-poppins);
  color: var(--light-color-black);
  display: inline-block;
  box-sizing: border-box;
}

.more-drop:hover .more-drop-menu {
  visibility: visible;
  opacity: 1;
  pointer-events: initial;
}

.top_cities_menu {
  position: relative;
}

.top_cities_dropdown {
  position: absolute;
  left: 10px;
  background-color: var(--background-color-white);
  box-shadow: var(--box-shadows);
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 240px;
  row-gap: 1;
  width: fit-content;
  padding-top: 6.5px;
  padding-bottom: 6.5px;
  padding-left: 10px;
  padding-right: 1px;
  transform: translateY(1px);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  overflow-y: scroll;
  max-height: calc(-200px + 100vh);
}

.top_cities_menu:hover .top_cities_dropdown {
  opacity: 1;
  visibility: visible;
  pointer-events: initial;
}

.usa,
.canada,
.uk {
  font-family: var(--font-family-poppins);
  font-weight: var(--font-bold);
  color: var(--text-color-black);
}

.top_cities-link {
  padding: 12px 16px;
  color: var(--light-color-black);
  font-family: var(--font-family-poppins);
  font-size: 14px;
  font-weight: var(--font-lighter);
  display: inline-block;
  box-sizing: border-box;
}

.navlink_left:hover,
.navlink_right:hover,
.menus_hover:hover {
  color: var(--main-color) !important;
}

.get_started {
  background-color: var(--main-color);
  color: var(--text-color-white);
  font-weight: var(--font-lighter);
  font-size: 14px;
  text-align: center;
  font-family: var(--font-family-poppins);
  padding: 12px 16px;
  border-radius: 05px;
}
.menu-panel {
  display: none;
}

.dk_menu {
  position: relative;
  top: 1.2rem;
  display: none;
  left: 75.2%;
}

.dk_menu-icon {
  font-size: 2.3rem;
  font-weight: var(--font-bold);
  cursor: pointer;
}

/*Header BreakPoints*/

@media screen and (max-width: 1200px) {
  .nav-colections {
    gap: 7rem;
  }
}
@media screen and (max-width: 1170px) {
  .nav-colections {
    gap: 4rem;
  }
  .nav-right {
    display: flex;
    gap: 1rem;
    transform: translateX(35px) translateY(25px);
  }
}

@media screen and (max-width: 1064px) {
  .nav-colections {
    gap: 1rem;
  }

  .logo-img {
    transform: translateX(2px) translateY(4px);
  }

  .nav-left {
    transform: translateX(10px) translateY(25px);
  }
}

@media screen and (max-width: 1023px) {
  .dk_menu {
    display: block;
  }

  .nav_menus {
    position: absolute;
    right: -75.3%;
    display: flex;
    width: max-content;
  }

  .menu-panel {
    display: flex;
    margin-top: 0.5rem;
    position: relative;
  }

  .menu_text {
    font-family: var(--font-family-poppins);
    font-size: 1.5rem;
    font-weight: var(--font-light);
  }

  .menu-icon-close {
    font-size: 2.3rem;
    font-weight: var(--font-bold);
    cursor: pointer;
  }

  .navbar {
    position: absolute;
    display: none;
    background-color: rgb(242, 242, 242);
    height: 100vh;
    width: 40%;
    margin-top: 5rem;
    max-width: 350px;
    padding: 2% 2%;
    top: -118%;
    right: 0%;
    z-index: 100;
  }

  .navbar.open {
    display: block;
  }

  .dk_menu-icon,
  .menu-icon-close {
    position: absolute;
    width: max-content;
    height: max-content;
  }

  .menu-icon-close {
    display: none;
  }

  .menu-icon-close.show {
    display: block;
    z-index: 100;
  }

  .nav-colections {
    flex-direction: column-reverse;
    justify-content: center;
    margin-top: 2rem;
  }

  .navlist_left {
    flex-direction: column;
  }

  .nav-right {
    justify-content: center;
    align-items: center;
    transform: translateX(0) translateY(0);
  }
  .navitemnd_right {
    display: flex;
    gap: 1rem;
  }

  .mobile_login {
    background-color: var(--background-color-white);
    color: var(--text-color-black);
    border: 1px solid var(--text-color-black);
    font-weight: var(--font-lighter);
    font-size: 14px;
    font-family: var(--font-family-poppins);
    padding: 9px 16px;
    border-radius: 05px;
    min-width: 150px;
    text-align: center;
  }

  .get_started {
    min-width: 150px;
    padding: 9px 16px;
  }

  .top_cities_menu,
  .more-drop,
  .rm-login {
    display: none;
  }

  .tools-dropdown:hover .tools_dropdown_menu,
  .sitter-job:hover .get_housesitterjob_dropdown_menu,
  .find_housesitters:hover .find_housesitter_dropdown {
    pointer-events: initial;
    visibility: initial;
    opacity: 0;
  }

  .sitter_job_hover {
    border-bottom: none !important;
  }

  .navlink_left:hover,
  .navlink_right:hover,
  .menus_hover:hover {
    color: var(--text-color-black) !important;
  }
}

@media screen and (max-width: 980px) {
  .dk_menu {
    left: 72%;
  }
}

@media screen and (max-width: 870px) {
  .dk_menu {
    left: 70%;
  }

  .mobile_login,
  .get_started {
    padding: 7px 12px;
    min-width: 120px;
  }
}

@media screen and (max-width: 780px) {
  .dk_menu {
    left: 68%;
  }
}

@media screen and (max-width: 730px) {
  .dk_menu {
    left: 65%;
  }
  .navbar {
    width: 45%;
  }
}

@media screen and (max-width: 680px) {
  .dk_menu {
    left: 50%;
  }
  .navbar {
    width: 50%;
  }
}

@media screen and (max-width: 600px) {
  .dk_menu {
    left: 53%;
  }
  .navbar {
    width: 50%;
  }
}

@media screen and (max-width: 560px) {
  .dk_menu {
    left: 50%;
  }
  .navbar {
    width: 55%;
  }
}

@media screen and (max-width: 512px) {
  .dk_menu {
    left: 47%;
  }
  .navbar {
    width: 60%;
  }
}

@media screen and (max-width: 480px) {
  .dk_menu {
    left: 40%;
  }
  .navbar {
    width: 72%;
  }
}

@media screen and (max-width: 400px) {
  .dk_menu {
    left: 30%;
  }
  .navbar {
    width: 80%;
  }
}

@media screen and (max-width: 370px) {
  .dk_menu {
    left: 27%;
  }
  .navbar {
    width: 85%;
  }
}

@media screen and (min-width: 1024px) {
  .mobile_login {
    display: none;
  }
}

/* Hero Section */
.hero_container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
}

.hero_section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hero_title,
.hero_subtitle,
.hero_links {
  font-family: var(--font-family-poppins);
  text-align: center;
}

.hero_title {
  font-size: 45px;
  font-weight: var(--font-bold);
  word-break: break-word;
}

.hero_subtitle {
  font-size: 18px;
  font-weight: var(--font-lighter);
}

.hero_links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.hero_link1 {
  padding: 14px 18px;
  background-color: var(--main-color);
  border-radius: 5px;
  color: var(--text-color-white);
}

.hero_link1:hover {
  background-color: #03a3a3;
}

.hero_link2 {
  text-decoration: underline;
  color: var(--text-color-black);
  font-weight: var(--font-light);
  font-size: 15px;
}

/* BreakPoints */

@media screen and (max-width: 380px) {
  section {
    padding: 0 0.8%;
  }
  .hero_container {
    margin-top: 6rem;
  }
  .hero_section {
    padding-left: 5px;
    padding-right: 5px;
  }
  .brk_herotitle {
    display: none;
  }
  .hero_title {
    font-size: 30px;
  }
  .hero_subtitle {
    font-size: 16px;
  }

  .hero_link1 {
    width: 95%;
  }
}

@media screen and (min-width: 380px) {
  section {
    padding: 0 0.8%;
  }
  .hero_container {
    margin-top: 6rem;
  }
  .hero_section {
    padding-left: 5px;
    padding-right: 5px;
  }
  .brk_herotitle {
    display: none;
  }
  .hero_title {
    font-size: 35px;
  }
  .hero_subtitle {
    font-size: 20px;
  }

  .hero_link1 {
    width: 95%;
  }
}

@media screen and (min-width: 480px) {
  section {
    padding: 0 0.8%;
  }
  .hero_container {
    margin-top: 6rem;
  }
  .hero_section {
    padding-left: 5px;
    padding-right: 5px;
  }
  .brk_herotitle {
    display: none;
  }
  .hero_title {
    font-size: 35px;
  }
  .hero_subtitle {
    font-size: 20px;
  }

  .hero_link1 {
    width: 95%;
  }
}

@media screen and (min-width: 680px) {
  section {
    padding: 0 1%;
  }
  .hero_container {
    margin-top: 6rem;
  }
  .hero_section {
    padding-left: 5px;
    padding-right: 5px;
  }
  .brk_herotitle {
    display: none;
  }
  .hero_title {
    font-size: 30px;
  }
  .hero_subtitle {
    font-size: 20px;
  }

  .hero_link1 {
    width: 95%;
  }
}
@media screen and (min-width: 768px) {
  section {
    padding: 0 1%;
  }
  .hero_container {
    margin-top: 9rem;
  }
  .hero_section {
    padding: 0;
  }
  .brk_herotitle {
    display: block;
  }
  .hero_title {
    font-size: 45px;
  }
  .hero_subtitle {
    font-size: 18px;
  }

  .hero_link1 {
    width: auto;
  }
}

@media screen and (min-width: 990px) {
  section {
    padding: 0;
  }
}

/* Offer_Style */

.offer {
  margin-top: 4rem;
}
.divider_container {
  display: flex;
  justify-content: center;
}

.divider {
  background-color: var(--main-color);
  height: 4px;
  width: 64px;
}

.offer_container {
  font-family: var(--font-family-poppins);
  margin-top: 3rem;
}
.offer_title {
  text-align: center;
  font-weight: var(--font-light);
}
.offer_content,
.offer_numbering {
  display: flex;
}

.offer_right,
.each_offer {
  display: grid;
}

.offer_number {
  display: flex;
  border: 1px solid var(--text-color-black);
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1px;
  width: 2rem;
  height: 2rem;
  -webkit-box-pack: center;
  -webkit-box-align: center;
}

.offer_no {
  font-weight: var(--font-bolder);
  font-size: 15px;
  text-align: center;
}
.find_sitter_offer {
  display: flex;
  justify-content: center;
}

.find_sitter_offer a {
  padding: 16px 18px;
  background-color: var(--main-color);
  border-radius: 5px;
  color: var(--text-color-white);
}

/* Offer Breakpoints */

@media screen and (max-width: 380px) {
  .offer_title {
    font-size: 1.5rem;
  }

  .offer_info_subtitle {
    font-size: 0.8rem;
    font-weight: var(--font-lighter);
  }
  .offer_content {
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;
    padding: 0 3%;
  }
  .offer_left {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .offer_left img {
    width: 80%;
    height: 200px;
  }

  .offer_right {
    gap: 2rem;
  }
  .offer_right_body {
    display: grid;
    gap: 2rem;
  }
  .each_offer {
    gap: 0.5rem;
  }

  .offer_numbering {
    gap: 0.9rem;
  }

  .offer_info {
    font-size: 1.3rem;
    font-weight: var(--font-light);
  }

  .find_sitter_offer a {
    width: 95%;
    text-align: center;
    font-size: 15px;
  }
}

@media screen and (min-width: 380px) {
  .offer_title {
    font-size: 1.5rem;
  }
  .offer_content {
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;
    padding: 0 3%;
  }
  .offer_left {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .offer_left img {
    width: 90%;
    text-align: center;
  }

  .offer_right {
    gap: 2rem;
  }
  .offer_right_body {
    display: grid;
    gap: 2rem;
  }
  .each_offer {
    gap: 0.5rem;
  }

  .offer_numbering {
    gap: 0.9rem;
  }

  .offer_info {
    font-size: 1.3rem;
    font-weight: var(--font-light);
  }

  .find_sitter_offer a {
    width: 95%;
    text-align: center;
    font-size: 15px;
  }
}

@media screen and (min-width: 480px) {
  .offer_left img {
    width: 70%;
  }

  .offer_info {
    font-size: 1.2rem;
  }
}

@media screen and (min-width: 600px) {
  .offer_left img {
    width: 55%;
  }

  .offer_info {
    font-size: 1.2rem;
  }

  .offer_info_subtitle {
    font-size: 1rem;
    font-weight: var(--font-lighter);
  }
}

@media screen and (min-width: 767px) {
  .offer_title {
    font-size: 1.6rem;
  }
  .offer_content {
    flex-direction: row;
    gap: 2rem;
  }

  .offer_left img {
    width: 100%;
  }

  .find_sitter_offer {
    justify-content: start;
  }

  .find_sitter_offer a {
    width: fit-content;
    height: fit-content;
    font-size: 16px;
  }
}

@media screen and (min-width: 987px) {
  .offer_title {
    font-size: 2rem;
  }
  .offer_left img {
    width: 100%;
  }
}
@media screen and (min-width: 1100px) {
  .offer_left img {
    width: 90%;
  }

  .offer_info_subtitle {
    font-size: 0.9rem;
  }
}

/* hire_professional_section */

.hire_professional_section {
  margin-top: 5rem;
  font-family: var(--font-family-poppins);
}

.hire_pro_title {
  text-align: center;
}

.hire_pro_content {
  display: flex;
}

@media screen and (max-width: 380px) {
  .hire_pro_title {
    font-size: 1.5rem;
    font-weight: var(--font-light);
    line-height: 1;
  }

  .hire_pro_content {
    flex-direction: column-reverse;
    gap: 2rem;
  }

  .hire_pro_right-content {
    display: flex;
    justify-content: center;
    margin-top: 4rem;
  }

  .hire_pro_right {
    padding: auto;
    display: flex;
    justify-content: center;
  }

  .hire_pro_right img {
    width: 90%;
  }

  .hire_pro_left-content {
    padding: 0 2%;
  }

  .hire_pro_left {
    padding: 3% 2%;
    padding-bottom: 2rem;
    border-bottom-width: 0.1px;
    border-bottom: 0.1px solid #cacace;
  }

  .hire_pro_services {
    display: grid;
  }

  .hire_pro_sec {
    display: flex;
    gap: 1rem;
  }

  .heading_service {
    display: grid;
    gap: 0.9rem;
  }

  .hire_pro_content-title {
    font-weight: var(--font-light);
    font-size: 1rem;
  }

  .hire_pro_content-subtitle {
    font-size: 0.85rem;
    font-weight: var(--font-lighter);
  }
}

@media screen and (min-width: 380px) {
  .hire_pro_title {
    font-size: 1.5rem;
    font-weight: var(--font-light);
    line-height: 1;
  }

  .hire_pro_content {
    flex-direction: column-reverse;
    gap: 2rem;
    -webkit-box-align: center;
    align-items: center;
  }

  .hire_pro_right-content {
    display: flex;
    justify-content: center;
    margin-top: 4rem;
  }

  .hire_pro_right {
    padding: auto;
    display: flex;
    justify-content: center;
  }

  .hire_pro_right img {
    width: 90%;
  }

  .hire_pro_left-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    padding: 0px;
  }

  .hire_pro_left {
    position: relative;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    padding: 2% 3%;
    padding-bottom: 2rem;
    border-bottom-width: 0.1px;
    border-bottom: 0.1px solid #cacace;
  }

  .hire_pro_services {
    display: grid;
  }

  .hire_pro_sec {
    display: flex;
    gap: 1rem;
  }

  .heading_service {
    display: grid;
    gap: 0.9rem;
  }

  .hire_pro_content-title {
    font-weight: var(--font-light);
    font-size: 1rem;
  }

  .hire_pro_content-subtitle {
    font-size: 0.85rem;
    font-weight: var(--font-lighter);
  }
}

@media screen and (min-width: 480px) {
  .hire_pro_right img {
    width: 65%;
  }
}
@media screen and (min-width: 600px) {
  .hire_pro_right img {
    width: 50%;
  }

  .hire_pro_left {
    width: 80%;
  }
}
@media screen and (min-width: 767px) {
  .hire_pro_right img {
    width: 45%;
  }
}

@media screen and (min-width: 1023px) {
  .hire_professional_section {
    padding: 0 2%;
  }
  .hire_pro_content {
    flex-direction: row;
    gap: 0;
    padding: 0 3%;
  }

  .hire_pro_right img {
    width: 110%;
  }

  .hire_pro_left-content {
    position: relative;
    margin-top: 2rem;
    justify-content: start;
    align-items: start;
    -webkit-box-pack: start;
    -webkit-box-align: start;
    padding: 0 !important;
  }

  .hire_pro_right {
    justify-content: start;
    transform: translateX(-60px);
    padding: 0;
    margin-top: 0;
  }

  .hire_pro_left {
    width: 80%;
  }

  .hire_pro_content-title {
    font-size: 1.4rem;
    font-weight: var(--font-bold);
  }
  .hire_pro_content-subtitle {
    font-size: 0.9rem;
    font-weight: var(--font-most-light);
  }
}`;

const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap";
document.head.appendChild(fontLink);

const styleEl = document.createElement("style");
styleEl.textContent = `
  ${styles}
`;
document.head.appendChild(styleEl);
