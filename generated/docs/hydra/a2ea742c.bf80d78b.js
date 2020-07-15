(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{191:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(9),o=(n(0),n(244)),i=(n(246),{id:"csrf",title:"Common CSRF Pitfalls"}),s={id:"debug/csrf",isDocsHomePage:!1,title:"Common CSRF Pitfalls",description:"We protect the Login and Consent flows using CSRF Cookies. This mitigates",source:"@site/docs/debug/csrf.mdx",permalink:"/hydra/docs/next/debug/csrf",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/debug/csrf.mdx",version:"next",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594381209,sidebar:"docs",previous:{title:"Common Problems",permalink:"/hydra/docs/next/debug"},next:{title:"Wrong Token Endpoint Auth Method",permalink:"/hydra/docs/next/debug/token-endpoint-auth-method"},latestVersionMainDocPermalink:"/hydra/docs"},c=[],u={rightToc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We protect the Login and Consent flows using CSRF Cookies. This mitigates\nseveral attack vectors but can lead cause issues when misconfigured. The most\ncommon causes of CSRF issues are the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You are mixing domains with IP addresses in your request - for example using\n",Object(o.b)("inlineCode",{parentName:"li"},"127.0.0.1")," and ",Object(o.b)("inlineCode",{parentName:"li"},"localhost")," in the same flow."),Object(o.b)("li",{parentName:"ul"},"You are running ORY Hydra via HTTP but are missing the\n",Object(o.b)("inlineCode",{parentName:"li"},"--dangerous-force-http")," CLI flag."),Object(o.b)("li",{parentName:"ul"},'You are running the OAuth2 flow in separate browsers, or in a browser with\nincognito mode. The Brave browser is also known for notoriously discarding\ncookies when used in "No-Tracking" mode.'),Object(o.b)("li",{parentName:"ul"},"You are running ORY Hydra behind a Reverse Proxy (e.g. Load Balancer) that\nstrips the Cookie header. If the reverse proxy supports path rewrites that\nmight also cause issues!"),Object(o.b)("li",{parentName:"ul"},"You are trying to do two OAuth2 flows at the same time in the same Browser."),Object(o.b)("li",{parentName:"ul"},"You have changed the Cookie SameSite behavior. If this is the default value\n(you did not change it), this should not be an issue.")),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You ",Object(o.b)("strong",{parentName:"p"},"cannot")," call ",Object(o.b)("inlineCode",{parentName:"p"},"/oauth2/auth")," using an AJAX request. It is not allowed and\nnot possible with OAuth2. This endpoint can only be accessed using a normal\nbrowser request."))))}l.isMDXComponent=!0},244:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return n?a.a.createElement(m,s(s({ref:t},u),{},{components:n})):a.a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},245:function(e,t,n){"use strict";var r=n(0),a=n(52);t.a=function(){return Object(r.useContext)(a.a)}},246:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(76);var r=n(245),a=n(247);function o(e,t){var n=void 0===t?{}:t,o=n.forcePrependBaseUrl,i=void 0!==o&&o,s=n.absolute,c=void 0!==s&&s,u=Object(r.a)().siteConfig,l=(u=void 0===u?{}:u).baseUrl,d=void 0===l?"/":l,p=u.url;if(!e)return e;if(i)return d+e;if(!Object(a.a)(e))return e;var b=d+e.replace(/^\//,"");return c?p+b:b}},247:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return r}))}}]);