(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{"1lec":function(e){e.exports=JSON.parse('{"/release-notes/1.13.1":"v1.13.1","/release-notes/1.13.0":"v1.13.0","/release-notes/1.12.0":"v1.12.0","/release-notes/1.11.0":"v1.11.0","/release-notes/1.10.0":"v1.10.0","/release-notes/1.9.2":"v1.9.2","/release-notes/1.9.1":"v1.9.1","/release-notes/1.9.0":"v1.9.0","/release-notes/1.8.0":"v1.8.0","/release-notes/1.7.2":"v1.7.2","/release-notes/1.7.1":"v1.7.1","/release-notes/1.7.0":"v1.7.0","/release-notes/1.6.0":"v1.6.0","/release-notes/1.5.0":"v1.5.0","/release-notes/1.4.0":"v1.4.0","/release-notes/1.3.0":"v1.3.0"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,t,a){"use strict";a("tU7J");var n=a("wFql"),r=a("q1tI"),s=a.n(r),i=a("2+3N"),l=a("1lec"),o=a("+ejy"),c=a("+9zj"),b=n.a.Title;t.a=function(e){var t={},a={},n={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":t,"Recent releases":a};Object.entries(i).forEach((function(e){var a=e[0],n=e[1];t[n]=a})),Object.entries(l).forEach((function(e){var t=e[0],n=e[1];a[n]=t}));var r=Object(c.a)(e.location),h=e.version||r.substring(r.lastIndexOf("/")+1);return h.match(/^[0-9]/)||(h=void 0),s.a.createElement(o.a,Object.assign({},e,{candidateMdxNodes:[],index:n,prefix:"release-notes",pageTitle:h?h+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),h?s.a.createElement(b,{id:"release-notes",level:1},s.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},s.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},s.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),h," release notes"):"",e.children)}},SBGP:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return h}));var n,r=a("zLVn"),s=(a("q1tI"),a("7ljp")),i=a("JkCF"),l={},o=(n="ThankYou",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",e)}),c={_frontmatter:l},b=i.a;function h(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)(b,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",{className:"date"},"6th March 2020"),Object(s.b)("h2",{id:"️-bug-fixes",style:{position:"relative"}},Object(s.b)("a",{parentName:"h2",href:"#%EF%B8%8F-bug-fixes","aria-label":"️ bug fixes permalink",className:"anchor before"},Object(s.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🛠️ Bug fixes"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"HealthCheckService")," does not leak the event loop tasks it scheduled anymore. ",Object(s.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2557"},"#2557")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"ServiceRequestContext.setRequestTimeout()")," and ",Object(s.b)("inlineCode",{parentName:"li"},"ClientRequestContext.setResponseTimeout()")," now schedules a timeout correctly even if no timeout was scheduled before. ",Object(s.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2537"},"#2537")),Object(s.b)("li",{parentName:"ul"},"Made sure ",Object(s.b)("inlineCode",{parentName:"li"},"Subscriber.onError()")," is invoked rather than ",Object(s.b)("inlineCode",{parentName:"li"},"onComplete()")," when a ",Object(s.b)("inlineCode",{parentName:"li"},"StreamMessage")," has been aborted. ",Object(s.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2539"},"#2539")),Object(s.b)("li",{parentName:"ul"},"Fixed specification violations in our Reactive Streams ",Object(s.b)("inlineCode",{parentName:"li"},"Subscriber")," implementations. ",Object(s.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2533"},"#2533"))),Object(s.b)("h2",{id:"-dependencies",style:{position:"relative"}},Object(s.b)("a",{parentName:"h2",href:"#-dependencies","aria-label":" dependencies permalink",className:"anchor before"},Object(s.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"⛓ Dependencies"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Dropwizard 1.3.19 → 1.3.20"),Object(s.b)("li",{parentName:"ul"},"Dropwizard Metrics 4.1.3 → 4.1.4"),Object(s.b)("li",{parentName:"ul"},"gRPC 1.27.1 → 1.27.2"),Object(s.b)("li",{parentName:"ul"},"Jackson 2.10.2.20200130 → 2.10.3"),Object(s.b)("li",{parentName:"ul"},"Netty 4.1.45 → 4.1.46",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"netty-tcnative-boringssl-static 2.0.28 → 2.0.29"))),Object(s.b)("li",{parentName:"ul"},"Jetty 9.4.26 → 9.4.27"),Object(s.b)("li",{parentName:"ul"},"Project Reactor 3.3.2 → 3.3.3"),Object(s.b)("li",{parentName:"ul"},"Retrofit 2.7.1 → 2.7.2")),Object(s.b)("h2",{id:"-thank-you",style:{position:"relative"}},Object(s.b)("a",{parentName:"h2",href:"#-thank-you","aria-label":" thank you permalink",className:"anchor before"},Object(s.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🙇 Thank you"),Object(s.b)(o,{usernames:["anuraaga","cricket007","ikhoon","joschi","minwoox","trustin"],mdxType:"ThankYou"}))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-98-4-mdx-5de254739676328ad8ea.js.map