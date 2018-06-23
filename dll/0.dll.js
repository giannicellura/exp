(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([[0],{

/***/ "./src/app/features/lazy/index.ts":
/*!****************************************!*\
  !*** ./src/app/features/lazy/index.ts ***!
  \****************************************/
/*! exports provided: LazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LazyModule\", function() { return LazyModule; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\n/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ \"./node_modules/@angular/common/fesm5/common.js\");\n/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ \"./node_modules/@angular/router/fesm5/router.js\");\n/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ \"./node_modules/@ngrx/store/fesm5/store.js\");\n/* harmony import */ var _lazy_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lazy.routing */ \"./src/app/features/lazy/lazy.routing.ts\");\n/* harmony import */ var _lazy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lazy.component */ \"./src/app/features/lazy/lazy.component.ts\");\n/* harmony import */ var _lazy_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lazy.reducer */ \"./src/app/features/lazy/lazy.reducer.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar LazyModule = /** @class */ (function () {\r\n    function LazyModule() {\r\n    }\r\n    LazyModule = tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\r\n        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__[\"NgModule\"])({\r\n            imports: [\r\n                _angular_common__WEBPACK_IMPORTED_MODULE_2__[\"CommonModule\"],\r\n                _angular_router__WEBPACK_IMPORTED_MODULE_3__[\"RouterModule\"].forChild(_lazy_routing__WEBPACK_IMPORTED_MODULE_5__[\"routes\"]),\r\n                _ngrx_store__WEBPACK_IMPORTED_MODULE_4__[\"StoreModule\"].forFeature('lazyModule', {\r\n                    lazy: _lazy_reducer__WEBPACK_IMPORTED_MODULE_7__[\"lazyReducer\"]\r\n                })\r\n            ],\r\n            declarations: [\r\n                _lazy_component__WEBPACK_IMPORTED_MODULE_6__[\"LazyComponent\"]\r\n            ],\r\n            providers: []\r\n        })\r\n    ], LazyModule);\r\n    return LazyModule;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/app/features/lazy/index.ts?");

/***/ }),

/***/ "./src/app/features/lazy/lazy.actions.ts":
/*!***********************************************!*\
  !*** ./src/app/features/lazy/lazy.actions.ts ***!
  \***********************************************/
/*! exports provided: LazyActionTypes, Decrement, Increment, Reset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LazyActionTypes\", function() { return LazyActionTypes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Decrement\", function() { return Decrement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Increment\", function() { return Increment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Reset\", function() { return Reset; });\nvar LazyActionTypes;\r\n(function (LazyActionTypes) {\r\n    LazyActionTypes[\"Decrement\"] = \"[Lazy] Decrement\";\r\n    LazyActionTypes[\"Increment\"] = \"[Lazy] Increment\";\r\n    LazyActionTypes[\"Reset\"] = \"[Lazy] Reset\";\r\n})(LazyActionTypes || (LazyActionTypes = {}));\r\nvar Decrement = /** @class */ (function () {\r\n    function Decrement() {\r\n        this.type = LazyActionTypes.Decrement;\r\n    }\r\n    return Decrement;\r\n}());\r\n\r\nvar Increment = /** @class */ (function () {\r\n    function Increment() {\r\n        this.type = LazyActionTypes.Increment;\r\n    }\r\n    return Increment;\r\n}());\r\n\r\nvar Reset = /** @class */ (function () {\r\n    function Reset() {\r\n        this.type = LazyActionTypes.Reset;\r\n    }\r\n    return Reset;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/app/features/lazy/lazy.actions.ts?");

/***/ }),

/***/ "./src/app/features/lazy/lazy.component.html":
/*!***************************************************!*\
  !*** ./src/app/features/lazy/lazy.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<header>\\n  <h5>\\n    This module is being loaded lazily.\\n\\n\\t\\t<div>Current Count: {{ counter | async }}</div>\\n    <button (click)=\\\"increment()\\\">Increment</button>\\n\\t\\t<button (click)=\\\"decrement()\\\">Decrement</button>\\n\\t\\t<button (click)=\\\"reset()\\\">Reset Counter</button>\\n  </h5>\\n</header>\"\n\n//# sourceURL=webpack://%5Bname%5D/./src/app/features/lazy/lazy.component.html?");

/***/ }),

/***/ "./src/app/features/lazy/lazy.component.ts":
/*!*************************************************!*\
  !*** ./src/app/features/lazy/lazy.component.ts ***!
  \*************************************************/
/*! exports provided: LazyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LazyComponent\", function() { return LazyComponent; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\n/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ \"./node_modules/@ngrx/store/fesm5/store.js\");\n/* harmony import */ var _lazy_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lazy.actions */ \"./src/app/features/lazy/lazy.actions.ts\");\n\r\n\r\n\r\n\r\nvar LazyComponent = /** @class */ (function () {\r\n    function LazyComponent(store) {\r\n        this.store = store;\r\n        this.counter = store.select(function (s) { return s.lazyModule.lazy.counter; });\r\n    }\r\n    LazyComponent.prototype.decrement = function () {\r\n        this.store.dispatch(new _lazy_actions__WEBPACK_IMPORTED_MODULE_3__[\"Decrement\"]());\r\n    };\r\n    LazyComponent.prototype.increment = function () {\r\n        this.store.dispatch(new _lazy_actions__WEBPACK_IMPORTED_MODULE_3__[\"Increment\"]());\r\n    };\r\n    LazyComponent.prototype.reset = function () {\r\n        this.store.dispatch(new _lazy_actions__WEBPACK_IMPORTED_MODULE_3__[\"Reset\"]());\r\n    };\r\n    LazyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\r\n        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__[\"Component\"])({\r\n            selector: 'my-lazy',\r\n            template: __webpack_require__(/*! ./lazy.component.html */ \"./src/app/features/lazy/lazy.component.html\")\r\n        }),\r\n        tslib__WEBPACK_IMPORTED_MODULE_0__[\"__metadata\"](\"design:paramtypes\", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__[\"Store\"]])\r\n    ], LazyComponent);\r\n    return LazyComponent;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/app/features/lazy/lazy.component.ts?");

/***/ }),

/***/ "./src/app/features/lazy/lazy.reducer.ts":
/*!***********************************************!*\
  !*** ./src/app/features/lazy/lazy.reducer.ts ***!
  \***********************************************/
/*! exports provided: lazyReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lazyReducer\", function() { return lazyReducer; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _lazy_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lazy.actions */ \"./src/app/features/lazy/lazy.actions.ts\");\n\r\n\r\nvar initialState = {\r\n    counter: 0\r\n};\r\nfunction lazyReducer(state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case _lazy_actions__WEBPACK_IMPORTED_MODULE_1__[\"LazyActionTypes\"].Decrement:\r\n            return tslib__WEBPACK_IMPORTED_MODULE_0__[\"__assign\"]({}, state, { counter: state.counter - 1 });\r\n        case _lazy_actions__WEBPACK_IMPORTED_MODULE_1__[\"LazyActionTypes\"].Increment:\r\n            return tslib__WEBPACK_IMPORTED_MODULE_0__[\"__assign\"]({}, state, { counter: state.counter + 1 });\r\n        case _lazy_actions__WEBPACK_IMPORTED_MODULE_1__[\"LazyActionTypes\"].Reset:\r\n            return tslib__WEBPACK_IMPORTED_MODULE_0__[\"__assign\"]({}, state, { counter: 0 });\r\n        default:\r\n            return state;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/app/features/lazy/lazy.reducer.ts?");

/***/ }),

/***/ "./src/app/features/lazy/lazy.routing.ts":
/*!***********************************************!*\
  !*** ./src/app/features/lazy/lazy.routing.ts ***!
  \***********************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"routes\", function() { return routes; });\n/* harmony import */ var _lazy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazy.component */ \"./src/app/features/lazy/lazy.component.ts\");\n\r\nvar routes = [\r\n    {\r\n        path: '',\r\n        component: _lazy_component__WEBPACK_IMPORTED_MODULE_0__[\"LazyComponent\"]\r\n    }\r\n];\r\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/app/features/lazy/lazy.routing.ts?");

/***/ })

}]);