(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"Useful links":{"Tutorials":"/tutorials","Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration"],"Client":["client-http","client-thrift","client-grpc","client-factory","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-streaming-backpressure","advanced-structured-logging-kafka","advanced-metrics","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration","advanced-scala","advanced-scalapb","advanced-client-interoperability"]}')},N6fu:function(e,t,r){"use strict";r.r(t),r.d(t,"pageTitle",(function(){return c})),r.d(t,"_frontmatter",(function(){return s})),r.d(t,"default",(function(){return m}));var a,i=r("zLVn"),n=(r("q1tI"),r("7ljp")),o=r("xCMr"),c="Retrofit integration",s={},l=(a="RequiredDependencies",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),d={pageTitle:c,_frontmatter:s},p=o.a;function m(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(n.b)(p,Object.assign({},d,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"retrofit-integration",style:{position:"relative"}},Object(n.b)("a",{parentName:"h1",href:"#retrofit-integration","aria-label":"retrofit integration permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Retrofit integration"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://square.github.io/retrofit/"},"Retrofit")," is a library that simplifies the access to RESTful services\nby turning an HTTP API into a Java interface."),Object(n.b)("p",null,"Armeria provides a builder class called ",Object(n.b)("a",{parentName:"p",href:"type://ArmeriaRetrofit:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/retrofit2/ArmeriaRetrofit.html"},"type://ArmeriaRetrofit")," that builds an alternative\n",Object(n.b)("inlineCode",{parentName:"p"},"Retrofit")," implementation that replaces the networking engine of from ",Object(n.b)("a",{parentName:"p",href:"https://square.github.io/okhttp/"},"OkHttp"),"\nto Armeria. By doing so, you get the following benefits:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Better performance, thanks to ",Object(n.b)("a",{parentName:"li",href:"https://netty.io/"},"Netty")," and its JNI-based I/O and TLS implementation"),Object(n.b)("li",{parentName:"ul"},"Leverage other advanced features of Armeria, such as client-side load-balancing and service discovery"),Object(n.b)("li",{parentName:"ul"},"Cleartext HTTP/2 support, as known as ",Object(n.b)("inlineCode",{parentName:"li"},"h2c"))),Object(n.b)("p",null,"First, you need ",Object(n.b)("inlineCode",{parentName:"p"},"armeria-retrofit2")," dependency:"),Object(n.b)(l,{boms:[{groupId:"com.linecorp.armeria",artifactId:"armeria-bom"}],dependencies:[{groupId:"com.linecorp.armeria",artifactId:"armeria-retrofit2"}],mdxType:"RequiredDependencies"}),Object(n.b)("p",null,"Now, you can build ",Object(n.b)("inlineCode",{parentName:"p"},"Retrofit")," using ",Object(n.b)("a",{parentName:"p",href:"type://ArmeriaRetrofit#builder(String):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/retrofit2/ArmeriaRetrofit.html#builder(java.lang.String)"},"type://ArmeriaRetrofit#builder(String)"),":"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.client.retrofit2.ArmeriaRetrofit;\n\nimport retrofit2.Retrofit;\nimport retrofit2.converter.jackson.JacksonConverterFactory;\nimport retrofit2.http.GET;\nimport retrofit2.http.Path;\n\nclass UserInfo { ... }\n\ninterface MyService {\n    @GET("/userInfo/{id}")\n    CompletableFuture<UserInfo> getUserInfo(@Path("id") String id);\n}\n\nRetrofit retrofit = ArmeriaRetrofit.builder("http://localhost:8080/")\n                                   .addConverterFactory(JacksonConverterFactory.create())\n                                   .build();\n\nMyService service = retrofit.create(MyService.class);\nUserInfo userInfo = service.getUserInfo("foo").get();\n')),Object(n.b)("p",null,"For more information, please refer to the API documentation of the\n",Object(n.b)("a",{parentName:"p",href:"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/retrofit2/package-summary.html"},"com.linecorp.armeria.client.retrofit2")," package."))}m.isMDXComponent=!0},xCMr:function(e,t,r){"use strict";var a=r("Wbzz"),i=r("q1tI"),n=r.n(i),o=r("/94A"),c=r("+ejy");t.a=function(e){var t=Object(a.useStaticQuery)("1217743243").allMdx.nodes;return n.a.createElement(c.a,Object.assign({},e,{candidateMdxNodes:t,index:o,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-client-retrofit-mdx-4d30e543929c0f9c5d4c.js.map