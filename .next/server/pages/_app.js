(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2980:
/***/ ((module) => {

// Exports
module.exports = {
	"footerText": "footer_footerText__ws9Vj",
	"lightFooterText": "footer_lightFooterText__HnWwT",
	"spanFirst": "footer_spanFirst__J3OPd",
	"spanSecond": "footer_spanSecond__OfCB3",
	"lightSpanSecond": "footer_lightSpanSecond__IOQTA",
	"spanThird": "footer_spanThird__Q_lfJ",
	"lightSpanThird": "footer_lightSpanThird__JZGQc"
};


/***/ }),

/***/ 6180:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "layout_wrapper__fBc47",
	"lightWrapper": "layout_lightWrapper__d7ARF"
};


/***/ }),

/***/ 3102:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "navbar_navbar__8tj4O",
	"lightNavbar": "navbar_lightNavbar__fllLj",
	"scrolledNav": "navbar_scrolledNav__2hoyy",
	"scrolledLightNavbar": "navbar_scrolledLightNavbar__8IbkW",
	"navLeft": "navbar_navLeft__It4wk",
	"navleft": "navbar_navleft__Moo2d",
	"navRight": "navbar_navRight__vV2Op",
	"hiddenNavLeft": "navbar_hiddenNavLeft__5TNAK",
	"siteTitle": "navbar_siteTitle__FCTxs",
	"lightSiteTitle": "navbar_lightSiteTitle___Q2hw",
	"navList": "navbar_navList__T1IN7",
	"navLink": "navbar_navLink__68Dk3",
	"lightNavLink": "navbar_lightNavLink__S2XuF",
	"modeToggleBtn": "navbar_modeToggleBtn__E74Za",
	"lightModeToggleBtn": "navbar_lightModeToggleBtn__CThro",
	"navIcon": "navbar_navIcon__ADtO6",
	"lightNavIcon": "navbar_lightNavIcon__isIrO",
	"hiddenNav": "navbar_hiddenNav__JYCK8",
	"showNav": "navbar_showNav__uFpYk"
};


/***/ }),

/***/ 3112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/styles/navbar.module.css
var navbar_module = __webpack_require__(3102);
var navbar_module_default = /*#__PURE__*/__webpack_require__.n(navbar_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
// EXTERNAL MODULE: ./src/hooks/useToggleTheme.ts
var useToggleTheme = __webpack_require__(6682);
;// CONCATENATED MODULE: external "react-icons/hi"
const hi_namespaceObject = require("react-icons/hi");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/context/navbar.context.tsx


const NavbarContext = /*#__PURE__*/ (0,external_react_.createContext)({});
function NavbarProvider(props) {
    const { 0: navScroll , 1: setNavScroll  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx(NavbarContext.Provider, {
        value: {
            navScroll,
            setNavScroll
        },
        ...props
    });
};

;// CONCATENATED MODULE: ./src/components/navbar.tsx








const Navbar = ()=>{
    const { theme , toggleTheme  } = (0,useToggleTheme/* useToggleTheme */.I)();
    const isLightMode = theme === "light";
    const { navScroll , setNavScroll  } = (0,external_react_.useContext)(NavbarContext);
    const { 0: navVisibility , 1: setNavVisibility  } = (0,external_react_.useState)(false);
    const toggleNav = ()=>{
        if (!navVisibility) {
            setNavVisibility(true);
        } else {
            setNavVisibility(false);
        }
    };
    // isLightMode ? styles.lightNavbar : styles.navbar
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: !isLightMode && navScroll ? (navbar_module_default()).scrolledNav : isLightMode && navScroll ? (navbar_module_default()).scrolledLightNavbar : isLightMode && !navScroll ? (navbar_module_default()).lightNavbar : (navbar_module_default()).navbar,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (navbar_module_default()).hiddenNavLeft,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: toggleNav,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(hi_namespaceObject.HiMenuAlt1, {
                            className: isLightMode ? (navbar_module_default()).lightNavIcon : (navbar_module_default()).navIcon
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                        className: navVisibility ? (navbar_module_default()).showNav : (navbar_module_default()).hiddenNav,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                className: (navbar_module_default()).hiddenNavItem,
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                className: (navbar_module_default()).hiddenNavItem,
                                href: "/about",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "About"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                className: (navbar_module_default()).hiddenNavItem,
                                href: "/projects",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Projects"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                className: (navbar_module_default()).hiddenNavItem,
                                href: "/travel",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Travel"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (navbar_module_default()).navleft,
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: (navbar_module_default()).navList,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        className: (navbar_module_default()).navItem,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: isLightMode ? (navbar_module_default()).lightNavLink : (navbar_module_default()).navLink,
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/about",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: isLightMode ? (navbar_module_default()).lightNavLink : (navbar_module_default()).navLink,
                                    children: "About"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/projects",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: isLightMode ? (navbar_module_default()).lightNavLink : (navbar_module_default()).navLink,
                                    children: "Projects"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/travel",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: isLightMode ? (navbar_module_default()).lightNavLink : (navbar_module_default()).navLink,
                                    children: "Travel"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (navbar_module_default()).navRight,
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: toggleTheme,
                    className: isLightMode ? (navbar_module_default()).lightModeToggleBtn : (navbar_module_default()).modeToggleBtn,
                    children: isLightMode ? /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsMoonFill, {}) : /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsSun, {})
                })
            })
        ]
    });
};
/* harmony default export */ const navbar = (Navbar);

// EXTERNAL MODULE: ./src/styles/footer.module.css
var footer_module = __webpack_require__(2980);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
;// CONCATENATED MODULE: ./src/components/footer.tsx



const Footer = ()=>{
    const { theme  } = (0,useToggleTheme/* useToggleTheme */.I)();
    const isLightMode = theme === "light";
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "w-full flex flex-col items-center",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
            className: !isLightMode ? (footer_module_default()).footerText : (footer_module_default()).lightFooterText,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: (footer_module_default()).spanFirst,
                    children: "\xa9"
                }),
                " Made with ❤️ by",
                " ",
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: !isLightMode ? (footer_module_default()).spanSecond : (footer_module_default()).lightSpanSecond,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: "https://github.com/mustafamertgoksu",
                        target: "blank",
                        rel: "noreferrer",
                        children: [
                            "Mustafa Mert Goksu",
                            " "
                        ]
                    })
                }),
                "using",
                " ",
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: !isLightMode ? (footer_module_default()).spanThird : (footer_module_default()).lightSpanThird,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://nextjs.org/",
                        target: "blank",
                        rel: "noreferrer",
                        children: "Next.js"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const footer = (Footer);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/styles/layout.module.css
var layout_module = __webpack_require__(6180);
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);
// EXTERNAL MODULE: ./src/hooks/useTitle.ts
var useTitle = __webpack_require__(4353);
// EXTERNAL MODULE: ./src/datas/index.ts
var datas = __webpack_require__(2885);
;// CONCATENATED MODULE: ./src/components/layout.tsx










const Layout = ({ children  })=>{
    const { title  } = (0,useTitle/* useTitle */.Z)();
    const { theme  } = (0,useToggleTheme/* useToggleTheme */.I)();
    const isLightMode = theme === "light";
    const { setNavScroll  } = (0,external_react_.useContext)(NavbarContext);
    const changeNavBackground = (e)=>{
        if (e.currentTarget.scrollTop >= 80) {
            setNavScroll(true);
        } else {
            setNavScroll(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            datas/* datas.siteTitle */.GC.siteTitle,
                            " | ",
                            title
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: datas/* datas.siteDescription */.GC.siteDescription
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: isLightMode ? (layout_module_default()).lightWrapper : (layout_module_default()).wrapper,
                onScroll: changeNavBackground,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(navbar, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        style: {
                            width: "100%"
                        },
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const layout = (Layout);

// EXTERNAL MODULE: ./src/context/title.context.tsx
var title_context = __webpack_require__(9327);
// EXTERNAL MODULE: ./src/context/toggleTheme.ts
var context_toggleTheme = __webpack_require__(8003);
;// CONCATENATED MODULE: ./src/hooks/useLocalTheme.ts

const useLocalTheme = ()=>{
    const { 0: theme , 1: setTheme  } = (0,external_react_.useState)("dark");
    const toggleTheme = ()=>{
        const changeTheme = theme === "dark" ? "light" : "dark";
        localStorage.setItem("theme", changeTheme);
        setTheme(changeTheme);
    };
    (0,external_react_.useEffect)(()=>{
        const localTheme = localStorage.getItem("theme");
        localTheme && setTheme(localTheme);
    }, []);
    return {
        theme,
        toggleTheme
    };
};

;// CONCATENATED MODULE: ./src/pages/_app.tsx







function MyApp({ Component , pageProps  }) {
    const { theme , toggleTheme  } = useLocalTheme();
    return /*#__PURE__*/ jsx_runtime_.jsx(context_toggleTheme/* ToggleTheme.Provider */.R.Provider, {
        value: {
            theme,
            toggleTheme
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(title_context/* default */.Z, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(NavbarProvider, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(layout, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                })
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 567:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bs");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,247], () => (__webpack_exec__(3112)));
module.exports = __webpack_exports__;

})();