(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{208:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return d})),r.d(t,"default",(function(){return u}));var a=r(2),n=r(9),o=(r(0),r(330)),s=r(343),c={id:"password-reset",title:"Password Reset"},i={id:"self-service/flows/account-recovery/password-reset",isDocsHomePage:!1,title:"Password Reset",description:"<Mermaid",source:"@site/docs/self-service/flows/account-recovery/password-reset.mdx",permalink:"/kratos/docs/next/self-service/flows/account-recovery/password-reset",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/self-service/flows/account-recovery/password-reset.mdx",version:"next",lastUpdatedBy:"hackerman",lastUpdatedAt:1593616768,latestVersionMainDocPermalink:"/kratos/docs"},d=[],l={rightToc:d};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)(s.a,{chart:"\nstateDiagram-v2\n\t[*] --\x3e choose_method\n\trecovered --\x3e [*]\n\tchoose_method --\x3e sent_email\n\tsent_email --\x3e sent_email\n\tsent_email --\x3e passed_challenge\n\tpassed_challenge --\x3e recovered\n",mdxType:"Mermaid"}))}u.isMDXComponent=!0},343:function(e,t,r){"use strict";r(351),r(20);var a=r(0),n=r.n(a),o=r(358),s=r.n(o),c=r(131),i=r.n(c),d=r(337),l=r.n(d);s.a.initialize({startOnLoad:!0,logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,theme:"neutral",flowchart:{useMaxWidth:!0,htmlLabels:!0,rankSpacing:65,nodeSpacing:30,curve:"basis"},sequence:{useMaxWidth:!0},gantt:{useMaxWidth:!0}});t.a=function(e){var t,r=e.chart,o=Object(a.useState)(!1),c=o[0],d=o[1],u=Object(a.useState)(void 0),m=u[0],p=u[1],f=Object(a.useState)("mermaid-"+Math.random().toString(36).substr(2,-1))[0],v=function(){return d(!c)};return Object(a.useEffect)((function(){s.a.render(f,r,(function(e){p(e)}))}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{onClick:v,className:l()(i.a.graph,i.a.pointer),dangerouslySetInnerHTML:{__html:m}}),n.a.createElement("div",{onClick:v,className:l()(i.a.overlay,i.a.pointer,i.a.graph,(t={},t[i.a.visible]=c,t))},n.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:l()(i.a.backdrop,i.a.graph),dangerouslySetInnerHTML:{__html:m}})))}},367:function(e,t,r){var a={"./locale":341,"./locale.js":341};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=o,e.exports=n,n.id=367}}]);