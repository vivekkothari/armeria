(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{FvYO:function(e,t,a){"use strict";var r=a("Wbzz"),i=a("q1tI"),n=a.n(i),s=a("HWmb"),o=a("+ejy");t.a=function(e){var t=Object(r.useStaticQuery)("3172452987").allMdx.nodes;return n.a.createElement(o.a,Object.assign({},e,{candidateMdxNodes:t,index:s,prefix:"tutorials",menuTitle:!0,pageTitleSuffix:"Armeria tutorial"}))}},HWmb:function(e){e.exports=JSON.parse('{"root":["index"],"Useful links":{"User manual":"/docs","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"REST service":["rest/blog","rest/blog/create-server","rest/blog/prepare-data-object","rest/blog/add-services-to-server","rest/blog/implement-create","rest/blog/implement-read","rest/blog/implement-update","rest/blog/implement-delete"],"gRPC service":{"Coming soon":null},"Thrift service":{"Coming soon":null}}')},dK23:function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return s})),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return b}));var r=a("zLVn"),i=(a("q1tI"),a("7ljp")),n=a("FvYO"),s="Tutorials",o={},c={pageTitle:s,_frontmatter:o},l=n.a;function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(l,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"tutorials",style:{position:"relative"}},Object(i.b)("a",{parentName:"h1",href:"#tutorials","aria-label":"tutorials permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Tutorials"),Object(i.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#try-running-the-service"},"Try running the service")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#get-started"},"Get started"))),Object(i.b)("p",null,"Learn how to write a service with Armeria by walking through this tutorial.\nThe tutorial takes you through steps based on a sample service, a blog service, to offer you practical guidance."),Object(i.b)("h2",{id:"try-running-the-service",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#try-running-the-service","aria-label":"try running the service permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Try running the service"),Object(i.b)("p",null,"Before you dive into coding, try running the sample blog service to get an idea of the service.\nThanks to Armeria's ",Object(i.b)("a",{parentName:"p",href:"/docs/server-docservice"},"Documentation service"),", you can view a list of APIs the service provides and make API calls to see how to use the service."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/tutorials/rest/blog#run-sample-service"},"Run the sample for REST services"))),Object(i.b)("h2",{id:"get-started",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#get-started","aria-label":"get started permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Get started"),Object(i.b)("p",null,"If your service is RESTful, then you're lucky! The first Armeria tutorial available targets REST services.\nGet your hands on the ",Object(i.b)("a",{parentName:"p",href:"/tutorials/rest/blog"},"tutorial for REST services")," now!"))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-index-mdx-8ca5c82153add01c8497.js.map