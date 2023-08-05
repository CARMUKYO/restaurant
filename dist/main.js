/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactPage: () => (/* binding */ contactPage)\n/* harmony export */ });\nfunction createContact() {\n  const main = document.querySelector(\"#main\");\n\n  if (!document.getElementById(\"contactFeed\")) {\n    const contactContainer = document.createElement(\"div\");\n    contactContainer.id = \"contactFeed\";\n\n    const contactInfoContainer = document.createElement(\"div\");\n    contactInfoContainer.classList.add(\"contactInfoContainer\");\n    contactContainer.appendChild(contactInfoContainer);\n\n    contactInfoContainer.appendChild(\n      createContactSection(\n        \"OWNER MAN\",\n        \"DOWNDOWN, DOWNTOWN, USA\",\n        \"+123456789\"\n      )\n    );\n    contactInfoContainer.appendChild(\n      createContactSection(\n        \"Monday-Thursday: 6am - 11pm\",\n        \"Friday-Saturday: 7am - 11pm\",\n        \"Sunday: 9am - 10am\"\n      )\n    );\n\n    const contactMap = document.createElement(\"img\");\n    contactMap.src = \"./img/map.png\";\n    contactMap.alt = \"map\";\n\n    contactContainer.appendChild(contactMap);\n\n    return contactContainer;\n  }\n}\n\nfunction createContactSection() {\n  const contactSection = document.createElement(\"div\");\n\n  for (let i = 0; i < 3; i++) {\n    const contactSectionRow = document.createElement(\"p\");\n    contactSectionRow.textContent = arguments[i];\n    contactSection.appendChild(contactSectionRow);\n  }\n  return contactSection;\n}\n\nfunction contactPage() {\n  const main = document.getElementById(\"main\");\n  main.textContent = \"\";\n  main.appendChild(createContact());\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/contactPage.js?");

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homePage: () => (/* binding */ homePage)\n/* harmony export */ });\nfunction createHome() {\n  const main = document.querySelector(\"#main\");\n\n  if (!document.getElementById(\"homeFeed\")) {\n    const homeFeed = document.createElement(\"h1\");\n    homeFeed.id = \"homeFeed\";\n    main.appendChild(homeFeed);\n    homeFeed.appendChild(\n      addText(\n        \"Welcome to Our Exquisite Restaurant\"\n      )\n    );\n\n    const restaurantPicture = document.createElement(\"img\");\n    restaurantPicture.src = \"./img/front.jpg\";\n    restaurantPicture.alt = \"home page image\";\n    homeFeed.appendChild(restaurantPicture);\n\n    homeFeed.appendChild(addText(\"Indulge in a culinary journey like no other.\"));\n    homeFeed.appendChild(\n      addText(\" Experience the finest ingredients, masterful techniques, and an ambiance that's simply enchanting.\")\n    );\n    homeFeed.appendChild(\n      addText(\"MAKE YOUR RESERVATION NOW!!!!!\")\n    );\n\n    return homeFeed;\n  }\n}\n\nfunction addText(text) {\n  const textToAdd = document.createElement(\"p\");\n  textToAdd.textContent = text;\n  return textToAdd;\n}\n\nfunction homePage() {\n  const main = document.getElementById(\"main\");\n  main.textContent = \"\";\n  main.appendChild(createHome());\n}\n\n\n//# sourceURL=webpack://restaurant/./src/homePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ \"./src/homePage.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage */ \"./src/menuPage.js\");\n/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage */ \"./src/contactPage.js\");\n\n\n\n\nconst container = document.querySelector(\"#content\");\ncontainer.appendChild(createHeader());\ncontainer.appendChild(createMain());\n\n(0,_homePage__WEBPACK_IMPORTED_MODULE_0__.homePage)();\n\nfunction createHeader() {\n  const header = document.createElement(\"header\");\n  header.classList.add(\"header\");\n  header.id = \"header\";\n\n  const restaurantName = document.createElement(\"h1\");\n  restaurantName.id = \"restaurantName\";\n  restaurantName.textContent = \"Restaurant\";\n\n  header.appendChild(restaurantName);\n\n  const pageContainer = document.createElement(\"div\");\n  pageContainer.id = \"pageContainer\";\n  header.appendChild(pageContainer);\n\n  const homeBtn = document.createElement(\"button\");\n  homeBtn.textContent = \"Home\";\n  homeBtn.classList.add(\"page\");\n  homeBtn.classList.add(\"active\");\n  homeBtn.addEventListener(\"click\", (e) => {\n    setActivePage(homeBtn);\n    (0,_homePage__WEBPACK_IMPORTED_MODULE_0__.homePage)();\n  });\n  pageContainer.appendChild(homeBtn);\n\n  const menuBtn = document.createElement(\"button\");\n  menuBtn.textContent = \"Menu\";\n  menuBtn.classList.add(\"page\");\n  menuBtn.addEventListener(\"click\", (e) => {\n    setActivePage(menuBtn);\n    (0,_menuPage__WEBPACK_IMPORTED_MODULE_1__.menuPage)();\n  });\n  pageContainer.appendChild(menuBtn);\n\n  const contactBtn = document.createElement(\"button\");\n  contactBtn.textContent = \"Contact\";\n  contactBtn.classList.add(\"page\");\n  contactBtn.addEventListener(\"click\", (e) => {\n    setActivePage(contactBtn);\n    (0,_contactPage__WEBPACK_IMPORTED_MODULE_2__.contactPage)();\n  });\n  pageContainer.appendChild(contactBtn);\n\n  return header;\n}\n\nfunction createMain() {\n  const main = document.createElement(\"main\");\n  main.classList.add(\"main\");\n  main.id = \"main\";\n  return main;\n}\n\n\n\nfunction setActivePage(page) {\n  document.querySelector(\".active\").classList.remove(\"active\");\n  page.classList.add(\"active\"); \n}\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuPage: () => (/* binding */ menuPage)\n/* harmony export */ });\nfunction createMenu() {\n    const main = document.querySelector(\"#main\");\n  \n    if (!document.getElementById(\"menuFeed\")) {\n      const menuContainer = document.createElement(\"div\");\n      menuContainer.id = \"menuFeed\";\n  \n      main.appendChild(menuContainer);\n  \n      const breakfast = document.createElement(\"h2\");\n      breakfast.textContent = \"Breakfast\";\n      menuContainer.appendChild(breakfast);\n  \n      const breakfastContainer = document.createElement(\"div\");\n      breakfastContainer.classList.add(\"menuSection\");\n      menuContainer.appendChild(breakfastContainer);\n  \n      breakfastContainer.appendChild(\n        createMenuItem(\"breakfast1\", \"English Breakfast\")\n      );\n      breakfastContainer.appendChild(\n        createMenuItem(\"breakfast2\", \"Some Greens\")\n      );\n  \n      const mainCourses = document.createElement(\"h2\");\n      mainCourses.textContent = \"Main Courses\";\n      menuContainer.appendChild(mainCourses);\n  \n      const mainCoursesContainer = document.createElement(\"div\");\n      mainCoursesContainer.classList.add(\"menuSection\");\n      menuContainer.appendChild(mainCoursesContainer);\n  \n      mainCoursesContainer.appendChild(\n        createMenuItem(\"main1\", \"Beff Wellington\")\n      );\n      mainCoursesContainer.appendChild(\n        createMenuItem(\"main2\", \"Adobong Manok\")\n      );\n  \n\n      const desserts = document.createElement(\"h2\");\n      desserts.textContent = \"Desserts\";\n      menuContainer.appendChild(desserts);\n  \n      const dessertsContainer = document.createElement(\"div\");\n      dessertsContainer.classList.add(\"menuSection\");\n      menuContainer.appendChild(dessertsContainer);\n  \n      dessertsContainer.appendChild(createMenuItem(\"cake\", \"CAKE\"));\n      dessertsContainer.appendChild(\n        createMenuItem(\"halo\", \"Halo Halo\")\n      );\n  \n      return menuContainer;\n    }\n  \n    function createMenuItem(title, description) {\n      const menuItem = document.createElement(\"div\");\n  \n      const menuItemImage = document.createElement(\"img\");\n      menuItemImage.src = `./img/${title.toLowerCase()}.jpg`;\n      menuItemImage.alt = `${title}`;\n  \n      const menuItemDescription = document.createElement(\"p\");\n      menuItemDescription.textContent = description;\n  \n      menuItem.appendChild(menuItemImage);\n      menuItem.appendChild(menuItemDescription);\n  \n      return menuItem;\n    }\n  }\n  \n  function menuPage() {\n    const main = document.getElementById(\"main\");\n    main.textContent = \"\";\n    main.appendChild(createMenu());\n  }\n  \n  \n\n//# sourceURL=webpack://restaurant/./src/menuPage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;