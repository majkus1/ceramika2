"use strict";
exports.id = 678;
exports.ids = [678];
exports.modules = {

/***/ 7306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6358);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7076);
// src/components/Header.js
const linkPaths={// Elewacje: { path: "/elewacje", img: "/icons/house.png" },
// Dach: { path: "/dach", img: "/icons/dach.png" },
// Ogrodzenia: { path: "/ogrodzenia", img: "/icons/fences.png" },
Oferta:{path:"/oferta"},Realizacje:{path:"/realizacje"},Producenci:{path:"/producenci"},Partnerzy:{path:"/partnerzy"},Kontakt:{path:"/kontakt"},SKLEP:{path:"/sklep"}};const Header=({onMenuToggle})=>{const linksMobileRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);const menuBtnRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);const linksRefs=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);const setLinksInitialState=()=>{linksRefs.current.forEach(link=>{gsap__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.set(link,{autoAlpha:0,y:30});});};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const linksMobile=linksMobileRef.current;const menuBtn=menuBtnRef.current;gsap__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.set(linksMobile,{autoAlpha:0,y:-50});setLinksInitialState();menuBtn.addEventListener("click",()=>{const isOpen=gsap__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.getProperty(linksMobile,"autoAlpha")===1;setLinksInitialState();if(isOpen){gsap__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.to(linksMobile,{autoAlpha:0,y:-50,duration:1});}else{gsap__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.to(linksMobile,{autoAlpha:1,y:0,duration:1});linksRefs.current.forEach((link,index)=>{gsap__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.to(link,{autoAlpha:1,y:0,delay:0.1*index,duration:1});});}});},[]);const handleMenuClick=()=>{const isOpen=menuBtnRef.current.classList.contains("open");menuBtnRef.current.classList.toggle("open");onMenuToggle(!isOpen);setLinksInitialState();if(isOpen){gsap__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.to(linksMobileRef.current,{autoAlpha:0,y:0,duration:1.2,display:"none"});}else{gsap__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.to(linksMobileRef.current,{autoAlpha:1,y:0,duration:1.2,display:"block"});// Możesz zmienić 'block' na 'flex' w zależności od układu
linksRefs.current.forEach((link,index)=>{gsap__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.to(link,{autoAlpha:1,y:0,delay:0.5,duration:1});});}};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{class:"home"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header",{className:"header"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"header-logo"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:"/icons/CERAMIKAlogo.png"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",{className:"desktop-links"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{href:""},"Oferta")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{href:""},"Realizacje")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{href:""},"Producenci")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{href:""},"Partnerzy")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{href:""},"Kontakt")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{href:"",style:{fontWeight:"700"}},"SKLEP"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"header-nav"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{class:"header-nav__btns"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{className:"menu-btn",ref:menuBtnRef,onClick:handleMenuClick},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"menu-btn__burger"}))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav",{className:"links-mobile",ref:linksMobileRef},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",null,Object.entries(linkPaths).map(([item,value],index)=>{// Rozpoznaj, czy link zawiera obraz
const hasImage=value.img!==undefined;const path=value.path||value;// Obsługuje zarówno nową strukturę z obrazem, jak i samą ścieżkę
return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{key:index,className:"mob-links"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:path,ref:el=>linksRefs.current[index]=el},hasImage&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:value.img,alt:item,style:{marginRight:"8px"},className:"img-3-nav-mob"}),item));}))));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ 6558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7306);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7076);
const IndexPage=()=>{const{0:isMenuOpen,1:setIsMenuOpen}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const{0:activeIndex,1:setActiveIndex}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);const{0:isModalOpen,1:setIsModalOpen}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const closeModal=()=>{setIsModalOpen(false);};const images=["/icons/1-2.jpg","/icons/2-2.jpg","/icons/3-2.jpg","/icons/4-2.jpg","/icons/5-2.jpg","/icons/6-2.jpg"];const galleryRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);const goLeft=()=>{setActiveIndex(prevIndex=>prevIndex>0?prevIndex-1:images.length-1);};const goRight=()=>{setActiveIndex(prevIndex=>prevIndex<images.length-1?prevIndex+1:0);};const handleImageClick=index=>{setActiveIndex(index);if(index===activeIndex){setIsModalOpen(true);// Otwórz modal, jeśli kliknięto na aktywny obraz
}};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{// Przesunięcie, aby aktywne zdjęcie było na środku
const galleryWidth=galleryRef.current.offsetWidth;const itemWidth=galleryWidth/3;// Ponieważ chcemy, aby 3 zdjęcia były widoczne
const scrollTo=itemWidth*activeIndex-itemWidth;// Przesuwamy, aby aktywne zdjęcie było na środku
galleryRef.current.scrollLeft=scrollTo;},[activeIndex]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const revealSections=document.querySelectorAll(".reveal");const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("isVisible");}else{entry.target.classList.remove("isVisible");}});},{threshold:0.3});revealSections.forEach(section=>{observer.observe(section);});return()=>revealSections.forEach(section=>{observer.unobserve(section);});},[]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"wrapper"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{onMenuToggle:isOpen=>setIsMenuOpen(isOpen)}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",{className:isMenuOpen?"blurred":""},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("picture",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("source",{srcSet:"/icons/mob-IMG_3224.jpg",media:"(max-width: 599px)"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"img-bgc"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{class:"overlay"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"text-effect6 effect"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"overlau"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Klinkier ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"to nasza")," specjalno\u015B\u0107"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Witamy w Hurtowni ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Materia\u0142\xF3w Budowlanych")))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"shopbtnmain"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link,{href:""},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:"/icons/arrow-right.png"}),"Sklep online")))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",{className:`${isMenuOpen?"blurred":""}`,id:"first-page"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"welcome-txt reveal"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",null,"Hurtownia Materia\u0142\xF3w Budowlanych powsta\u0142a w roku 1992"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"skills-quality"},"Do\u015Bwiadczenia zebrane podczas lat pracy pozwoli\u0142y nam na nabycie umiej\u0119tno\u015Bci w doborze odpowiednich materia\u0142\xF3w. R\xF3wnie\u017C jako\u015B\u0107 dostepnych u nas materia\u0142\xF3w zosta\u0142a wielokrotnie sprawdzona przez nas samych i naszych klient\xF3w."," "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"now"},"W chwili obecnej posiadamy w sprzeda\u017Cy wyroby ceramiczne najlepszej jako\u015Bci."," ")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"office-text reveal"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"btn-offer"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link,{href:"",className:"check-offer"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:"/icons/arrow-right.png"}),"Sprawdzam ofert\u0119")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"come-to-us"},"Przyjd\u017A do nas i kup wszystko co jest Ci niezb\u0119dne do wykonania dachu, elewacji, ogrodzenia z wyrob\xF3w ceramicznych!"," "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"goodpq"},"Mamy to wszystko w najlepszej jako\u015Bci i cenie!"," "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"welcome"},"Zapraszamy!!!"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",{className:`${isMenuOpen?"blurred":""} reveal`,id:"office"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"office-gallery-container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"office-gallery",ref:galleryRef},images.map((src,index)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{key:src,className:index===activeIndex?"active":"",onClick:()=>handleImageClick(index)},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:src,alt:`Obraz ${index+1}`}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{className:"left-go",onClick:goLeft},"<"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{className:"right-go",onClick:goRight},">")))),isModalOpen&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"modal-backdrop",onClick:closeModal},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"modal-content",onClick:e=>e.stopPropagation()},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:images[activeIndex],alt:`Powiększenie ${activeIndex+1}`}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{className:"modal-close",onClick:closeModal},"X"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{className:"modal-left",onClick:()=>goLeft()},"<"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{className:"modal-right",onClick:()=>goRight()},">"))));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map