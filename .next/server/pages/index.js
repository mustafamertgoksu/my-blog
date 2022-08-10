(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9133:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "home_main__6Pj0X",
	"aboutSection": "home_aboutSection__EKYU3",
	"aboutCard": "home_aboutCard__FHLuo",
	"lightAboutCard": "home_lightAboutCard__kcUxm",
	"project": "home_project__bUIBi",
	"lightProject": "home_lightProject__IrZ3O",
	"siteTitle": "home_siteTitle__cjSoX",
	"lightSiteTitle": "home_lightSiteTitle__bhGtU",
	"posts": "home_posts__0e2mt",
	"postsTitle": "home_postsTitle__bBKEq",
	"lightPostsTitle": "home_lightPostsTitle__k_Bji",
	"postCard": "home_postCard__QmhA3",
	"lightPostCard": "home_lightPostCard__oruEk"
};


/***/ }),

/***/ 7815:
/***/ ((module) => {

// Exports
module.exports = {
	"techsContainer": "techs_techsContainer__zK3cj",
	"techCard": "techs_techCard__Bg5_g",
	"lightTechCard": "techs_lightTechCard__fekEr",
	"techName": "techs_techName__63ZWG",
	"lightTechName": "techs_lightTechName__UFFug"
};


/***/ }),

/***/ 1033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/hooks/useTitle.ts
var useTitle = __webpack_require__(4353);
// EXTERNAL MODULE: ./src/styles/home.module.css
var home_module = __webpack_require__(9133);
var home_module_default = /*#__PURE__*/__webpack_require__.n(home_module);
// EXTERNAL MODULE: ./src/hooks/useToggleTheme.ts
var useToggleTheme = __webpack_require__(6682);
// EXTERNAL MODULE: ./src/datas/index.ts
var datas = __webpack_require__(2885);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
;// CONCATENATED MODULE: external "react-content-loader"
const external_react_content_loader_namespaceObject = require("react-content-loader");
var external_react_content_loader_default = /*#__PURE__*/__webpack_require__.n(external_react_content_loader_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: external "typewriter-effect"
const external_typewriter_effect_namespaceObject = require("typewriter-effect");
var external_typewriter_effect_default = /*#__PURE__*/__webpack_require__.n(external_typewriter_effect_namespaceObject);
// EXTERNAL MODULE: ./src/styles/techs.module.css
var techs_module = __webpack_require__(7815);
var techs_module_default = /*#__PURE__*/__webpack_require__.n(techs_module);
;// CONCATENATED MODULE: ./src/components/techs.tsx





const Techs = ()=>{
    const { theme , toggleTheme  } = (0,useToggleTheme/* useToggleTheme */.I)();
    const isLightMode = theme === "light";
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (techs_module_default()).techsContainer,
        children: datas/* TechsIcons.map */.Ub.map((tech, index)=>{
            if (tech.dark === true) {
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: !isLightMode ? (techs_module_default()).techCard : (techs_module_default()).lightTechCard,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: isLightMode ? "/images/nextdotjs.svg" : "/images/nextdotjslight.svg",
                            alt: tech.name,
                            width: "30",
                            height: "30"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: !isLightMode ? (techs_module_default()).techName : (techs_module_default()).lightTechName,
                            children: tech.name
                        })
                    ]
                }, index);
            }
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: !isLightMode ? (techs_module_default()).techCard : (techs_module_default()).lightTechCard,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: tech.image,
                        width: "30",
                        height: "30"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: !isLightMode ? (techs_module_default()).techName : (techs_module_default()).lightTechName,
                        children: tech.name
                    })
                ]
            }, index);
        })
    });
};
/* harmony default export */ const techs = (Techs);

;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: external "gray-matter"
const external_gray_matter_namespaceObject = require("gray-matter");
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_namespaceObject);
;// CONCATENATED MODULE: ./src/lib/posts.ts



const root = external_path_default().join(process.cwd(), "src", "pages", "content");
const getPostMeta = (slug)=>{
    const realSlug = slug.replace(/\.mdx$/, "");
    const filePath = external_path_default().join(root, `${realSlug}.mdx`);
    const fileContent = external_fs_default().readFileSync(filePath, {
        encoding: "utf8"
    });
    const { data  } = external_gray_matter_default()(fileContent);
    const meta = {
        ...data,
        slug: realSlug
    };
    return meta;
};
const getAllPosts = ()=>{
    const slugs = external_fs_default().readdirSync(root);
    const posts = slugs.map((slug)=>getPostMeta(slug));
    return posts;
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/pages/index.tsx

















const Home = ({ posts  })=>{
    const { setTitle  } = (0,useTitle/* useTitle */.Z)();
    const { theme  } = (0,useToggleTheme/* useToggleTheme */.I)();
    const isLightMode = theme === "light";
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    const { 0: repos , 1: setRepos  } = (0,external_react_.useState)([]);
    const searchRepos = async ()=>{
        setLoading(true);
        const res = await external_axios_default().get(datas/* githubRepositoriesURL */.a7);
        setLoading(false);
        setRepos(res.data);
    };
    (0,external_react_.useEffect)(()=>{
        setTitle("Home");
        searchRepos();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
            className: (home_module_default()).main,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: (home_module_default()).aboutSection,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                            className: !isLightMode ? (home_module_default()).siteTitle : (home_module_default()).lightSiteTitle,
                            children: [
                                "\uD83D\uDC4B Hey, ",
                                "I'm  ",
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mx-2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_typewriter_effect_default()), {
                                        onInit: (typeWriter)=>typeWriter.typeString(datas/* datas.siteTitle */.GC.siteTitle).start()
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: !isLightMode ? "my-5 text-2xl text-green-600" : "my-5 text-2xl text-green-900",
                            children: "Who Am I?"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: !isLightMode ? (home_module_default()).aboutCard : (home_module_default()).lightAboutCard,
                            children: datas/* datas.aboutParagraph */.GC.aboutParagraph
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: isLightMode ? "text-center text-black text-2xl" : "text-center text-white text-2xl",
                    children: "Top Projects"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("section", {
                    className: "flex flex-col items-center my-5",
                    children: loading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_content_loader_default()), {
                                speed: 2,
                                width: 400,
                                height: 160,
                                viewBox: "0 0 400 160",
                                backgroundColor: "#000010",
                                foregroundColor: "#111",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                        x: "48",
                                        y: "8",
                                        rx: "3",
                                        ry: "3",
                                        width: "88",
                                        height: "6"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                        x: "48",
                                        y: "26",
                                        rx: "3",
                                        ry: "3",
                                        width: "52",
                                        height: "6"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                        x: "0",
                                        y: "56",
                                        rx: "3",
                                        ry: "3",
                                        width: "410",
                                        height: "6"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                        x: "0",
                                        y: "72",
                                        rx: "3",
                                        ry: "3",
                                        width: "380",
                                        height: "6"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                        x: "0",
                                        y: "88",
                                        rx: "3",
                                        ry: "3",
                                        width: "178",
                                        height: "6"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                        cx: "20",
                                        cy: "20",
                                        r: "20"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_content_loader_default()), {
                                speed: 2,
                                width: 400,
                                height: 160,
                                viewBox: "0 0 400 160",
                                backgroundColor: "#000010",
                                foregroundColor: "#111",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                        x: "48",
                                        y: "8",
                                        rx: "3",
                                        ry: "3",
                                        width: "88",
                                        height: "6"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                        x: "48",
                                        y: "26",
                                        rx: "3",
                                        ry: "3",
                                        width: "52",
                                        height: "6"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                        x: "0",
                                        y: "56",
                                        rx: "3",
                                        ry: "3",
                                        width: "410",
                                        height: "6"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                        x: "0",
                                        y: "72",
                                        rx: "3",
                                        ry: "3",
                                        width: "380",
                                        height: "6"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                        x: "0",
                                        y: "88",
                                        rx: "3",
                                        ry: "3",
                                        width: "178",
                                        height: "6"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                        cx: "20",
                                        cy: "20",
                                        r: "20"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_content_loader_default()), {
                                speed: 2,
                                width: 400,
                                height: 160,
                                viewBox: "0 0 400 160",
                                backgroundColor: "#000010",
                                foregroundColor: "#111",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                        x: "48",
                                        y: "8",
                                        rx: "3",
                                        ry: "3",
                                        width: "88",
                                        height: "6"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                        x: "48",
                                        y: "26",
                                        rx: "3",
                                        ry: "3",
                                        width: "52",
                                        height: "6"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                        x: "0",
                                        y: "56",
                                        rx: "3",
                                        ry: "3",
                                        width: "410",
                                        height: "6"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                        x: "0",
                                        y: "72",
                                        rx: "3",
                                        ry: "3",
                                        width: "380",
                                        height: "6"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                        x: "0",
                                        y: "88",
                                        rx: "3",
                                        ry: "3",
                                        width: "178",
                                        height: "6"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                        cx: "20",
                                        cy: "20",
                                        r: "20"
                                    })
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "",
                        children: datas/* topProjects.map */.d7.map((repo)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: repo.html_url,
                                target: "blank",
                                rel: "noreferrer",
                                className: isLightMode ? (home_module_default()).lightProject : (home_module_default()).project,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: isLightMode ? "bg-zinc-900 my-4 rounded flex flex-col justify-center h-48" : "bg-black opacity-60 my-4 rounded flex flex-col justify-center h-48 border-2 border-slate-500 hover:border-white",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                                            className: "flex justify-between px-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: isLightMode ? "text-xl text-green-600" : "text-xl text-green-700",
                                                    children: repo.name
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsGithub, {
                                                    className: "text-2xl text-white"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("main", {
                                            className: isLightMode ? "px-6 py-4 text-blue-500" : "px-6 py-4 text-blue-500",
                                            children: repo.description
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
                                            className: "flex items-center justify-between px-4",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "text-gray-50 flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: repo.image,
                                                            width: "23",
                                                            height: "20",
                                                            alt: ""
                                                        }),
                                                        repo.language
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "text-white flex items-center gap-2",
                                                    children: [
                                                        repo.stargazers_count,
                                                        /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiFillStar, {
                                                            className: "text-amber-500"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, repo.name))
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: !isLightMode ? "text-gray-50 opacity-50 text-center text-3xl my-4" : "text-neutral-900 text-center text-3xl my-4",
                            children: "Technologies i use"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(techs, {})
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: (home_module_default()).posts,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: !isLightMode ? (home_module_default()).postsTitle : (home_module_default()).lightPostsTitle,
                            children: "Recent Posts"
                        }),
                        posts.map((post, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/content/${post.slug}`,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: !isLightMode ? (home_module_default()).postCard : (home_module_default()).lightPostCard,
                                        onClick: ()=>setTitle(post.title),
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: post.image,
                                                        alt: post.title,
                                                        width: "30",
                                                        height: "30"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "text-white mx-3",
                                                        children: post.title
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex justify-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "text-center text-white",
                                                        children: "Date: \xa0"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        className: "text-center text-green-600",
                                                        children: post.date
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }, index))
                    ]
                })
            ]
        })
    });
};
async function getServerSideProps() {
    const posts = getAllPosts();
    return {
        props: {
            posts
        }
    };
}
/* harmony default export */ const pages = (Home);


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

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [952,664,675,247], () => (__webpack_exec__(1033)));
module.exports = __webpack_exports__;

})();