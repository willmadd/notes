(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_HomePage_index_js"],{

/***/ "./resources/js/api/index.js":
/*!***********************************!*\
  !*** ./resources/js/api/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNote": () => (/* binding */ createNote),
/* harmony export */   "getNotes": () => (/* binding */ getNotes),
/* harmony export */   "deleteNote": () => (/* binding */ deleteNote),
/* harmony export */   "getNote": () => (/* binding */ getNote)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 //api in own file for reusability

var createNote = function createNote(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/create', data);
};
var getNotes = function getNotes() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/notes');
};
var deleteNote = function deleteNote(id) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().delete("/api/delete/".concat(id));
};
var getNote = function getNote(id) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/note/".concat(id));
};

/***/ }),

/***/ "./resources/js/components/AddNote/AddNote.component.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/AddNote/AddNote.component.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _AddNote_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddNote.styles.scss */ "./resources/js/components/AddNote/AddNote.styles.scss");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _routes_lazyLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes/lazyLoad */ "./resources/js/routes/lazyLoad.js");
/* harmony import */ var _routes_routeMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes/routeMap */ "./resources/js/routes/routeMap.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var AddNote = function AddNote() {
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
      className: "note note--addnote",
      onMouseEnter: function onMouseEnter() {
        return (0,_routes_lazyLoad__WEBPACK_IMPORTED_MODULE_2__.preloadRouteComponent)(_routes_routeMap__WEBPACK_IMPORTED_MODULE_3__.default.new);
      },
      to: {
        pathname: _routes_routeMap__WEBPACK_IMPORTED_MODULE_3__.default.new,
        state: {
          overlay: location
        }
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
        src: "/images/plus.icon.svg",
        alt: "plus icon"
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddNote);

/***/ }),

/***/ "./resources/js/components/AddNote/index.js":
/*!**************************************************!*\
  !*** ./resources/js/components/AddNote/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _AddNote_component__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _AddNote_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddNote.component */ "./resources/js/components/AddNote/AddNote.component.js");


/***/ }),

/***/ "./resources/js/components/HomePage/HomePage.component.js":
/*!****************************************************************!*\
  !*** ./resources/js/components/HomePage/HomePage.component.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _NoteArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NoteArea */ "./resources/js/components/NoteArea/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _HomePage_Styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HomePage.Styles.scss */ "./resources/js/components/HomePage/HomePage.Styles.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var HomePage = function HomePage(_ref) {
  var __ = _ref.__,
      getNotes = _ref.getNotes;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getNotes();
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "homepage",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
      children: __("Notes")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_NoteArea__WEBPACK_IMPORTED_MODULE_1__.default, {
      __: __
    })]
  });
};

HomePage.propTypes = {
  __: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  getNotes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ }),

/***/ "./resources/js/components/HomePage/HomePage.container.js":
/*!****************************************************************!*\
  !*** ./resources/js/components/HomePage/HomePage.container.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _HomePage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePage.component */ "./resources/js/components/HomePage/HomePage.component.js");
/* harmony import */ var _store_notes_notes_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/notes/notes.actions */ "./resources/js/store/notes/notes.actions.js");




var mapStateToProps = function mapStateToProps(_state) {
  return {
    locale: "no"
  };
};

var mapDispatchToProps = function mapDispatchToProps(_dispatch) {
  return {
    getNotes: function getNotes() {
      _dispatch((0,_store_notes_notes_actions__WEBPACK_IMPORTED_MODULE_2__.getNotes)());
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_HomePage_component__WEBPACK_IMPORTED_MODULE_1__.default));

/***/ }),

/***/ "./resources/js/components/HomePage/index.js":
/*!***************************************************!*\
  !*** ./resources/js/components/HomePage/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _HomePage_container__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _HomePage_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage.container */ "./resources/js/components/HomePage/HomePage.container.js");


/***/ }),

/***/ "./resources/js/components/NoteArea/NoteArea.component.js":
/*!****************************************************************!*\
  !*** ./resources/js/components/NoteArea/NoteArea.component.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _NoteArea_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NoteArea.styles.scss */ "./resources/js/components/NoteArea/NoteArea.styles.scss");
/* harmony import */ var _AddNote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AddNote */ "./resources/js/components/AddNote/index.js");
/* harmony import */ var _NoteCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../NoteCard */ "./resources/js/components/NoteCard/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SiteLoading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SiteLoading */ "./resources/js/components/SiteLoading/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










var NoteArea = function NoteArea(_ref) {
  var notes = _ref.notes,
      __ = _ref.__,
      loading = _ref.loading;
  var hasNotes = notes.length;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "notes ".concat(hasNotes ? "hasnotes" : "empty"),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_AddNote__WEBPACK_IMPORTED_MODULE_2__.default, {}), loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_SiteLoading__WEBPACK_IMPORTED_MODULE_5__.default, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: notes.map(function (note) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_NoteCard__WEBPACK_IMPORTED_MODULE_3__.default, {
          note: note
        }, note.id);
      })
    }), !hasNotes && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
      className: "notes__warning warning",
      children: __("You don't have any notes")
    })]
  });
};

NoteArea.propTypes = {
  notes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().array.isRequired),
  __: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired),
  loading: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoteArea);

/***/ }),

/***/ "./resources/js/components/NoteArea/NoteArea.container.js":
/*!****************************************************************!*\
  !*** ./resources/js/components/NoteArea/NoteArea.container.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _NoteArea_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NoteArea.component */ "./resources/js/components/NoteArea/NoteArea.component.js");
/* harmony import */ var _store_notes_notes_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/notes/notes.actions */ "./resources/js/store/notes/notes.actions.js");




var mapStateToProps = function mapStateToProps(_state) {
  return {
    notes: _state.notesReducer.notes,
    loading: _state.notesReducer.loading
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps)(_NoteArea_component__WEBPACK_IMPORTED_MODULE_1__.default));

/***/ }),

/***/ "./resources/js/components/NoteArea/index.js":
/*!***************************************************!*\
  !*** ./resources/js/components/NoteArea/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _NoteArea_container__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _NoteArea_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NoteArea.container */ "./resources/js/components/NoteArea/NoteArea.container.js");


/***/ }),

/***/ "./resources/js/components/NoteCard/NoteCard.component.js":
/*!****************************************************************!*\
  !*** ./resources/js/components/NoteCard/NoteCard.component.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../settings */ "./resources/js/settings.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api */ "./resources/js/api/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _routes_lazyLoad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../routes/lazyLoad */ "./resources/js/routes/lazyLoad.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var NoteCard = function NoteCard(_ref) {
  var note = _ref.note,
      locale = _ref.locale,
      getNotes = _ref.getNotes;
  console.log('GGHGHG');
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useLocation)();
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useHistory)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      disableLink = _useState4[0],
      setDisableLink = _useState4[1];

  var title = note.title,
      subtitle = note.subtitle,
      colour = note.colour,
      updated_at = note.updated_at,
      id = note.id;
  var edited = new Date(updated_at);

  var handleEditNote = function handleEditNote(e) {
    e.stopPropagation();
    e.preventDefault();
    var name = e.target.name;
    history.push({
      pathname: "/edit/".concat(name),
      state: {
        overlay: location,
        colour: colour
      }
    });
  };

  var handleDeleteNote = function handleDeleteNote(e) {
    e.stopPropagation();
    var name = e.target.name;
    _api__WEBPACK_IMPORTED_MODULE_2__.deleteNote(name).then(function (res) {
      if (res.status === 202) {
        getNotes();
      } else {
        setError("An error occured");
      }
    })["catch"](function (e) {
      setError("Error - ".concat(e.message));
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
    to: {
      pathname: disableLink ? "#" : "/note/".concat(id),
      state: {
        overlay: location,
        colour: colour
      }
    },
    onMouseEnter: function onMouseEnter() {
      return (0,_routes_lazyLoad__WEBPACK_IMPORTED_MODULE_4__.preloadRouteComponent)("/note/".concat(id));
    },
    className: "note note__card",
    style: {
      backgroundColor: colour
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "note__content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "note__actions",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          className: "btn btn--action",
          type: "button",
          onClick: function onClick(e) {
            return handleEditNote(e);
          },
          onMouseEnter: function onMouseEnter() {
            return setDisableLink(true);
          },
          onMouseLeave: function onMouseLeave() {
            return setDisableLink(false);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            src: "/images/edit.icon.svg",
            alt: "edit note",
            name: id
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          type: "button",
          className: "btn btn--action",
          onClick: function onClick(e) {
            return handleDeleteNote(e);
          },
          onMouseEnter: function onMouseEnter() {
            return setDisableLink(true);
          },
          onMouseLeave: function onMouseLeave() {
            return setDisableLink(false);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            src: "/images/delete.icon.svg",
            name: id,
            alt: "edit note"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
        className: "note__text--title",
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
        className: "note__text--subtitle",
        children: subtitle
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        children: edited.toLocaleDateString(locale, _settings__WEBPACK_IMPORTED_MODULE_1__.dateFormat)
      }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        children: error
      })]
    })
  });
};

NoteCard.propTypes = {
  note: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired),
  locale: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
  getNotes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoteCard);

/***/ }),

/***/ "./resources/js/components/NoteCard/NoteCard.container.js":
/*!****************************************************************!*\
  !*** ./resources/js/components/NoteCard/NoteCard.container.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _NoteCard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NoteCard.component */ "./resources/js/components/NoteCard/NoteCard.component.js");
/* harmony import */ var _store_notes_notes_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/notes/notes.actions */ "./resources/js/store/notes/notes.actions.js");




var mapStateToProps = function mapStateToProps(_state) {
  return {
    locale: _state.localeReducer.locale
  };
};

var mapDispatchToProps = function mapDispatchToProps(_dispatch) {
  return {
    getNotes: function getNotes() {
      _dispatch((0,_store_notes_notes_actions__WEBPACK_IMPORTED_MODULE_2__.getNotes)());
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_NoteCard_component__WEBPACK_IMPORTED_MODULE_1__.default));

/***/ }),

/***/ "./resources/js/components/NoteCard/index.js":
/*!***************************************************!*\
  !*** ./resources/js/components/NoteCard/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _NoteCard_container__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _NoteCard_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NoteCard.container */ "./resources/js/components/NoteCard/NoteCard.container.js");


/***/ }),

/***/ "./resources/js/settings.js":
/*!**********************************!*\
  !*** ./resources/js/settings.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dateFormat": () => (/* binding */ dateFormat),
/* harmony export */   "noteCols": () => (/* binding */ noteCols)
/* harmony export */ });
var dateFormat = {
  day: "numeric",
  year: "numeric",
  month: "short"
};
var noteCols = ['#FFC7F9', '#F7FFC7', '#C7FFF5', '#FFC7C7', '#C7D3FF'];

/***/ }),

/***/ "./resources/js/store/notes/notes.actions.js":
/*!***************************************************!*\
  !*** ./resources/js/store/notes/notes.actions.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNotes": () => (/* binding */ getNotes)
/* harmony export */ });
/* harmony import */ var _notes_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notes.types */ "./resources/js/store/notes/notes.types.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ "./resources/js/api/index.js");


var getNotes = function getNotes() {
  return function (dispatch) {
    dispatch({
      type: _notes_types__WEBPACK_IMPORTED_MODULE_0__.LOADING
    });
    _api__WEBPACK_IMPORTED_MODULE_1__.getNotes().then(function (res) {
      dispatch({
        type: _notes_types__WEBPACK_IMPORTED_MODULE_0__.SUCCESS,
        payload: res.data
      });
    })["catch"](function (err) {
      return dispatch({
        type: _notes_types__WEBPACK_IMPORTED_MODULE_0__.FAILURE,
        payload: err
      });
    });
  };
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/components/AddNote/AddNote.styles.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/components/AddNote/AddNote.styles.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body, html, #root, .container {\n  margin: 0;\n  height: 100%;\n}\n\ninput, button, submit {\n  border: none;\n}\ninput:focus, button:focus, submit:focus {\n  outline: none;\n}\n\nlabel {\n  display: flex;\n  flex-direction: column;\n}\n\ninput {\n  margin-top: 5px;\n  width: 100%;\n  border: 1px solid #000000;\n}\n\ntextarea {\n  border: 1px solid #000000;\n}\n\n.btn {\n  min-width: 159px;\n  min-height: 45px;\n  border-radius: 7px;\n  cursor: pointer;\n}\n.btn--primary {\n  background-color: #000000;\n  color: #ffffff;\n}\n.btn--secondary {\n  background-color: inherit;\n  color: #000000;\n  border: 1px solid #000000;\n}\n.btn--action {\n  background-color: inherit;\n  padding: 0;\n  min-width: auto;\n  min-height: auto;\n}\n\n@font-face {\n  font-family: \"Mont\";\n  src: url(\"/fonts/Mont-Light.woff2\") format(\"woff2\"), url(\"/fonts/Mont-Light.woff\") format(\"woff\");\n  font-weight: 300;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Mont\";\n  src: url(\"/fonts/Mont-SemiBold.woff2\") format(\"woff2\"), url(\"/fonts/Mont-SemiBold.woff\") format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Mont\";\n  src: url(\"/fonts/Mont-Regular.woff2\") format(\"woff2\"), url(\"/fonts/Mont-Regular.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nlabel,\nbutton,\ntextarea {\n  color: #000000;\n  font-family: \"Mont\";\n  margin: 0;\n}\n\nh1 {\n  font-size: 36px;\n  font-weight: 600;\n  line-height: 41px;\n}\n\nh2 {\n  font-weight: 600;\n  font-size: 30px;\n  line-height: 38px;\n}\n\nh3 {\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 26px;\n}\n\nlabel,\n.btn {\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 25px;\n}\n\np {\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 25px;\n}\n\n.warning {\n  size: 18px;\n  line-height: 23px;\n  color: #ffffff;\n}\n\ninput {\n  margin-bottom: 18px;\n  padding: 15px 16px;\n  border-radius: 10px;\n  box-sizing: border-box;\n  font-size: 20px;\n  line-height: 25px;\n}\n\n::-webkit-input-placeholder {\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 25px;\n  color: #ADADAD;\n}\n\n::-moz-placeholder {\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 25px;\n  color: #ADADAD;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/components/HomePage/HomePage.Styles.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/components/HomePage/HomePage.Styles.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@-webkit-keyframes rotation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n@keyframes rotation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n.homepage {\n  background-color: #1C1C1C;\n  height: 100%;\n  padding: 41px 90px;\n}\n.homepage h1 {\n  color: #ffffff;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/components/NoteArea/NoteArea.styles.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/components/NoteArea/NoteArea.styles.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@-webkit-keyframes rotation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n@keyframes rotation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n.notes {\n  margin: 41px 0;\n  display: grid;\n  grid-template-columns: repeat(1, minmax(236px, 700px));\n  grid-gap: 20px;\n}\n@media (min-width: 768px) {\n  .notes {\n    grid-template-columns: repeat(2, minmax(236px, 400px));\n  }\n}\n@media (min-width: 1024px) {\n  .notes {\n    grid-template-columns: repeat(3, minmax(236px, 400px));\n  }\n}\n@media (min-width: 1220px) {\n  .notes {\n    grid-template-columns: repeat(4, minmax(236px, 400px));\n  }\n}\n@media (min-width: 1440px) {\n  .notes {\n    grid-template-columns: repeat(5, minmax(236px, 400px));\n  }\n}\n.notes.empty {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  grid-template-columns: 236px;\n}\n.notes__warning {\n  color: #ffffff;\n  text-align: center;\n  margin-top: 13px;\n}\n.notes .note {\n  width: 100%;\n  border-radius: 14px;\n  position: relative;\n}\n.notes .note:after {\n  content: \"\";\n  display: block;\n  padding-bottom: 100%;\n}\n.notes .note--addnote {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #000000;\n  background-image: linear-gradient(to right, #ffffff 50%, transparent 50%), linear-gradient(to right, #ffffff 50%, transparent 50%), linear-gradient(to bottom, #ffffff 50%, transparent 50%), linear-gradient(to bottom, #ffffff 50%, transparent 50%);\n  background-position: left top, left bottom, left top, right top;\n  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;\n  background-size: 15px 1px, 15px 1px, 1px 15px, 1px 15px;\n}\n.notes .note__card {\n  padding: 23px;\n  box-sizing: border-box;\n}\n.notes .note__content {\n  position: absolute;\n  width: calc(100% - 46px);\n  height: calc(100% - 46px);\n  display: flex;\n  flex-direction: column;\n}\n.notes .note__text--title {\n  max-width: calc(100% - 39px);\n}\n.notes .note__text--subtitle {\n  max-width: calc(100% - 39px);\n  flex: 1;\n}\n.notes .note__actions {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 4px;\n  right: 0;\n  opacity: 0;\n}\n.notes .note:hover .note__actions {\n  transition: 0.25s ease-in-out;\n  opacity: 1;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/components/AddNote/AddNote.styles.scss":
/*!*************************************************************!*\
  !*** ./resources/js/components/AddNote/AddNote.styles.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_AddNote_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./AddNote.styles.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/components/AddNote/AddNote.styles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_AddNote_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_AddNote_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/HomePage/HomePage.Styles.scss":
/*!***************************************************************!*\
  !*** ./resources/js/components/HomePage/HomePage.Styles.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_HomePage_Styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./HomePage.Styles.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/components/HomePage/HomePage.Styles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_HomePage_Styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_HomePage_Styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/NoteArea/NoteArea.styles.scss":
/*!***************************************************************!*\
  !*** ./resources/js/components/NoteArea/NoteArea.styles.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_NoteArea_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./NoteArea.styles.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/components/NoteArea/NoteArea.styles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_NoteArea_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_NoteArea_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);