(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{"1lec":function(e){e.exports=JSON.parse('{"/release-notes/1.13.1":"v1.13.1","/release-notes/1.13.0":"v1.13.0","/release-notes/1.12.0":"v1.12.0","/release-notes/1.11.0":"v1.11.0","/release-notes/1.10.0":"v1.10.0","/release-notes/1.9.2":"v1.9.2","/release-notes/1.9.1":"v1.9.1","/release-notes/1.9.0":"v1.9.0","/release-notes/1.8.0":"v1.8.0","/release-notes/1.7.2":"v1.7.2","/release-notes/1.7.1":"v1.7.1","/release-notes/1.7.0":"v1.7.0","/release-notes/1.6.0":"v1.6.0","/release-notes/1.5.0":"v1.5.0","/release-notes/1.4.0":"v1.4.0","/release-notes/1.3.0":"v1.3.0"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,a,t){"use strict";t("tU7J");var n=t("wFql"),r=t("q1tI"),i=t.n(r),o=t("2+3N"),s=t("1lec"),l=t("+ejy"),c=t("+9zj"),b=n.a.Title;a.a=function(e){var a={},t={},n={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":a,"Recent releases":t};Object.entries(o).forEach((function(e){var t=e[0],n=e[1];a[n]=t})),Object.entries(s).forEach((function(e){var a=e[0],n=e[1];t[n]=a}));var r=Object(c.a)(e.location),p=e.version||r.substring(r.lastIndexOf("/")+1);return p.match(/^[0-9]/)||(p=void 0),i.a.createElement(l.a,Object.assign({},e,{candidateMdxNodes:[],index:n,prefix:"release-notes",pageTitle:p?p+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),p?i.a.createElement(b,{id:"release-notes",level:1},i.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},i.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},i.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),p," release notes"):"",e.children)}},NpM4:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return s})),t.d(a,"default",(function(){return p}));var n,r=t("zLVn"),i=(t("q1tI"),t("7ljp")),o=t("JkCF"),s={},l=(n="ThankYou",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),c={_frontmatter:s},b=o.a;function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)(b,Object.assign({},c,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",{className:"date"},"6th September 2019"),Object(i.b)("h2",{id:"new-features",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#new-features","aria-label":"new features permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"New features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can specify the maximum number of event loops to handle connections. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1886"},"#1886")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},'ClientFactoryBuilder builder = ...;\nbuilder.maxNumEventLoopsPerEndpoint(5); // Assign 5 event loops for endpoints. 1 is used by default.\nbuilder.maxNumEventLoopsPerHttp1Endpoint(10); // Assign 10 event loops for HTTP/1.1 endpoints. 1 is used by default.\n// You can set a customized function.\nbuilder.maxNumEventLoopsFunction(endpoint -> {\n    if (endpoint.equals(Endpoint.of("foo.com"))) {\n        return 5;\n    }\n    if (endpoint.host().contains("bar.com")) {\n        return Integer.MAX_VALUE; // The value will be clamped at the number of event loops.\n    }\n    return -1; // Should return 0 or a negative value to use the default value.\n});\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now implement your own ",Object(i.b)("inlineCode",{parentName:"p"},"EventLoopScheduler")," which schedules ",Object(i.b)("inlineCode",{parentName:"p"},"EventLoop"),"s those handle connections. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1886"},"#1886"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now see Armeria modules and their versions in DocService. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/685"},"#685")," ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1744"},"#1744"),"\n",Object(i.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/17493311/63525374-9038e900-c538-11e9-8f6e-819497cd5b0c.png",alt:"version"}))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now easily combine ",Object(i.b)("inlineCode",{parentName:"p"},"EndpointGroup"),"s and ",Object(i.b)("inlineCode",{parentName:"p"},"Endpoint"),"s. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1897"},"#1897")," ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1939"},"#1939")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"Endpoint foo = ...;\nEndpoint bar = ...;\nDynamicEndpointGroup group1 = ...;\nDynamicEndpointGroup group2 = ...;\nEndpointGroup composite = EndpointGroup.of(foo, bar, group1, group2);\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can use the ",Object(i.b)("a",{parentName:"p",href:"https://pdfs.semanticscholar.org/e575/e12ef56bcd889ce09516dd702ec1422816b6.pdf"},"Fibonacci backoff"),". ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1968"},"#1968")," ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1979"},"#1979")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"Backoff backoff = Backoff.fibonacci(100 /* initial delay millis */,\n                                    10000 /* max delay millis */);\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now reuse the configuration of existing Armeria client when creating an Armeria Retrofit client and ",Object(i.b)("inlineCode",{parentName:"p"},"HealthCheckedEndpointGroup"),". ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2019"},"#2019")," ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2020"},"#2020")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"HttpClient myClient = ...;\nArmeriaRetrofitBuilder builder = new ArmeriaRetrofitBuilder();\n// Use the same settings and decorators with `myClient` when sending requests.\nbuilder.clientOptions(myClient.options());\n\nHealthCheckedEndpointGroupBuilder builder2 = new HealthCheckedEndpointGroupBuilder();\nbuilder2.clientOptions(myClient.options());\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can unwrap a ",Object(i.b)("inlineCode",{parentName:"p"},"Client")," and bring the decorating client instance via ",Object(i.b)("inlineCode",{parentName:"p"},"Unwrappable.as()")," or ",Object(i.b)("inlineCode",{parentName:"p"},"ClientFactory.unwrap()"),". ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1883"},"#1883")," ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2018"},"#2018")," ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2029"},"#2029")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"HttpClient client = new HttpClientBuilder()\n    .decorator(LoggingClient.newDecorator())\n    .build();\nLoggingClient unwrapped = client.as(LoggingClient.class).get();\nLoggingClient unwrapped2 = clientFactory.unwrap(client, LoggingClient.class).get();\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now easily retrieve the port number of the running server. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1956"},"#1956")," ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1967"},"#1967")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"ServerBuilder sb = new ServerBuilder();\nServer server = sb.http(0) // Use an ephemeral port.\n                  .build();\n...\nint port = server.activeLocalPort();\n")))),Object(i.b)("h2",{id:"improvements",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#improvements","aria-label":"improvements permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Improvements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The delay calculation performance in ",Object(i.b)("inlineCode",{parentName:"li"},"ExponentialBackoff")," is improved. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1983"},"#1983")),Object(i.b)("li",{parentName:"ul"},"You can now run all ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria-examples"},"Armeria examples")," using ",Object(i.b)("inlineCode",{parentName:"li"},"gradle run")," or ",Object(i.b)("inlineCode",{parentName:"li"},"gradle bootRun"),". ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1988"},"#1988"))),Object(i.b)("h2",{id:"bug-fixes",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#bug-fixes","aria-label":"bug fixes permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Bug fixes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You no longer see a warning message when the connection is closed before the current session protocol is detected. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2043"},"#2043")," ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2048"},"#2048")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ByteBufHttpData")," does not leak anymore when an exception is raised by a client-side decorator. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2034"},"#2034")),Object(i.b)("li",{parentName:"ul"},"You no longer see a ",Object(i.b)("inlineCode",{parentName:"li"},"NullPointerException")," when the remote server requires a protocol downgrade. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2010"},"#2010")," ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2021"},"#2021"))),Object(i.b)("h2",{id:"breaking-changes",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#breaking-changes","aria-label":"breaking changes permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Breaking changes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Only one HTTP/2 connection is made per endpoint by default. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1886"},"#1886"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Previously, an Armeria client made as many connections as the number of event loops for each endpoint. Now, it creates only one connection per endpoint so one ",Object(i.b)("inlineCode",{parentName:"li"},"EventLoop")," handles all requests. Because of that, you may see performance degradation. If you want it to work as before, specify ",Object(i.b)("inlineCode",{parentName:"li"},"maxNumEventLoopsPerEndpoint")," with the number of event loops in ",Object(i.b)("inlineCode",{parentName:"li"},"ClientFactoryBuilder"),".")))),Object(i.b)("h2",{id:"dependencies",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#dependencies","aria-label":"dependencies permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Dependencies"),Object(i.b)("p",null,"We now use ",Object(i.b)("a",{parentName:"p",href:"https://www.baeldung.com/spring-maven-bom"},"Maven Boms(Bill of Materials)")," for Jackson, Brave and Netty"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Brave 5.6.10 -> 5.7.0"),Object(i.b)("li",{parentName:"ul"},"Guava 28.0-jre -> 28.1-jre"),Object(i.b)("li",{parentName:"ul"},"Jackson 2.9.9 -> 2.9.9.20190807"),Object(i.b)("li",{parentName:"ul"},"net.shibboleth.utilities 7.3.0 -> 7.5.0"),Object(i.b)("li",{parentName:"ul"},"OpenSAML 3.3.0 -> 3.4.3"),Object(i.b)("li",{parentName:"ul"},"Reactivestreams 1.0.2 -> 1.0.3"),Object(i.b)("li",{parentName:"ul"},"Reactor 3.2.11.RELEASE -> 3.2.12.RELEASE"),Object(i.b)("li",{parentName:"ul"},"RxJava2 2.2.11 -> 2.2.12"),Object(i.b)("li",{parentName:"ul"},"Spring boot 2.1.7.RELEASE -> 2.1.8.RELEASE")),Object(i.b)("h2",{id:"thank-you",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#thank-you","aria-label":"thank you permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Thank you"),Object(i.b)(l,{usernames:["anuraaga","codefromthecrypt","delegacy","hexoul","ho9science","ikhoon","imasahiro","jyblue","KangWooJin","kojilin","mauhiz","minwoox","thinkgruen","trustin","Untaek","zacscoding"],mdxType:"ThankYou"}))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-91-0-mdx-6e72d91d9da522491cb8.js.map