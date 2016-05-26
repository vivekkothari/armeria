(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"Useful links":{"Tutorials":"/tutorials","Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration"],"Client":["client-http","client-thrift","client-grpc","client-factory","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-streaming-backpressure","advanced-structured-logging-kafka","advanced-metrics","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration","advanced-scala","advanced-scalapb","advanced-client-interoperability"]}')},X9Xj:function(e,a,t){"use strict";t.r(a),t.d(a,"pageTitle",(function(){return c})),t.d(a,"_frontmatter",(function(){return s})),t.d(a,"default",(function(){return b}));var n=t("zLVn"),r=(t("q1tI"),t("7ljp")),i=t("xCMr"),c="Client interoperability",s={},o={pageTitle:c,_frontmatter:s},l=i.a;function b(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(r.b)(l,Object.assign({},o,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"client-interoperability",style:{position:"relative"}},Object(r.b)("a",{parentName:"h1",href:"#client-interoperability","aria-label":"client interoperability permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Client interoperability"),Object(r.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"#annotated-services"},"Annotated services")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#axios"},"Axios"))))),Object(r.b)("p",null,"This page describes methods to achieve interoperability with some well-known clients."),Object(r.b)("h2",{id:"annotated-services",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#annotated-services","aria-label":"annotated services permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Annotated services"),Object(r.b)("h3",{id:"axios",style:{position:"relative"}},Object(r.b)("a",{parentName:"h3",href:"#axios","aria-label":"axios permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Axios"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/axios/axios"},"Axios")," works with Armeria annotated services without issues, except\nwhen serializing arrays as query parameters. By default, arrays are serialized as ",Object(r.b)("inlineCode",{parentName:"p"},"?foo[]=1&foo[]=2"),",\nwhile Armeria expects ",Object(r.b)("inlineCode",{parentName:"p"},"?foo=1&foo=2"),"."),Object(r.b)("p",null,"This behavior can be modified by specifying a custom ",Object(r.b)("inlineCode",{parentName:"p"},"paramsSerializer")," function when creating a new\nAxios instance. For example, you can use the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/ljharb/qs"},"qs")," library:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const axios = require('axios');\nconst qs = require('qs');\n\nfunction paramsSerializer(params) {\n  return qs.stringify(params, { arrayFormat: 'repeat' });\n}\n\nconst client = axios.create({ paramsSerializer });\n")),Object(r.b)("p",null,"If you prefer not to add an extra dependency, you can use the following function instead:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"function paramsSerializer(params) {\n  const parts = [];\n\n  for (const [key, values] of Object.entries(params)) {\n    if (values === null || typeof values === 'undefined') {\n      continue;\n    }\n\n    for (const value of [values].flat()) {\n      parts.push(`${key}=${encodeURIComponent(value)}`);\n    }\n  }\n\n  return parts.join('&');\n}\n")),Object(r.b)("p",null,"The implementation is based on ",Object(r.b)("a",{parentName:"p",href:"https://github.com/axios/axios/blob/d99d5faac29899eba68ce671e6b3cbc9832e9ad8/lib/helpers/buildURL.js#L34-L54"},"the default serializer in Axios"),"."))}b.isMDXComponent=!0},xCMr:function(e,a,t){"use strict";var n=t("Wbzz"),r=t("q1tI"),i=t.n(r),c=t("/94A"),s=t("+ejy");a.a=function(e){var a=Object(n.useStaticQuery)("1217743243").allMdx.nodes;return i.a.createElement(s.a,Object.assign({},e,{candidateMdxNodes:a,index:c,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-advanced-client-interoperability-mdx-29ded61167399cedcf0f.js.map