(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"Useful links":{"Tutorials":"/tutorials","Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration"],"Client":["client-http","client-thrift","client-grpc","client-factory","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-streaming-backpressure","advanced-structured-logging-kafka","advanced-metrics","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration","advanced-scala","advanced-scalapb","advanced-client-interoperability"]}')},"R+ck":function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return i})),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return b}));var n,r=a("zLVn"),o=(a("q1tI"),a("7ljp")),l=a("xCMr"),i="Calling a gRPC service",c={},s=(n="Tip",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),p={pageTitle:i,_frontmatter:c},u=l.a;function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(u,Object.assign({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"calling-a-grpc-service",style:{position:"relative"}},Object(o.b)("a",{parentName:"h1",href:"#calling-a-grpc-service","aria-label":"calling a grpc service permalink",className:"anchor before"},Object(o.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Calling a gRPC service"),Object(o.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#exception-propagation"},"Exception propagation")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#see-also"},"See also"))),Object(o.b)(s,{mdxType:"Tip"},Object(o.b)("p",null,"Visit ",Object(o.b)("a",{parentName:"p",href:"https://github.com/line/armeria-examples"},"armeria-examples")," to find a fully working example.")),Object(o.b)("p",null,"Let's assume we have the following ",Object(o.b)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC")," service definition, served at ",Object(o.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:8080/"),", just like\nwhat we used in ",Object(o.b)("a",{parentName:"p",href:"/docs/server-grpc"},"Running a gRPC service"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage grpc.hello;\n\noption java_package = "com.example.grpc.hello";\n\nservice HelloService {\n  rpc Hello (HelloRequest) returns (HelloReply) {}\n}\n\nmessage HelloRequest {\n  string name = 1;\n}\n\nmessage HelloReply {\n  string message = 1;\n}\n')),Object(o.b)("p",null,"Making a call starts from creating a client:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.client.Clients;\n\nHelloServiceBlockingStub helloService = Clients.newClient(\n        "gproto+http://127.0.0.1:8080/",\n        HelloServiceBlockingStub.class); // or HelloServiceFutureStub.class or HelloServiceStub.class\n\nHelloRequest request = HelloRequest.newBuilder().setName("Armerian World").build();\nHelloReply reply = helloService.hello(request);\nassert reply.getMessage().equals("Hello, Armerian World!");\n')),Object(o.b)("p",null,"Note that we added the serialization format of the call using the ",Object(o.b)("inlineCode",{parentName:"p"},"+")," operator in the scheme part of the URI.\nBecause we are calling a ",Object(o.b)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC")," server, we can choose: ",Object(o.b)("inlineCode",{parentName:"p"},"gproto")," or ",Object(o.b)("inlineCode",{parentName:"p"},"gjson"),". If you are using ",Object(o.b)("a",{parentName:"p",href:"https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-WEB.md"},"gRPC-Web"),",\nyou can use ",Object(o.b)("inlineCode",{parentName:"p"},"gproto-web"),", ",Object(o.b)("inlineCode",{parentName:"p"},"gproto-web-text")," or ",Object(o.b)("inlineCode",{parentName:"p"},"gjson-web"),"."),Object(o.b)("p",null,"Since we specified ",Object(o.b)("inlineCode",{parentName:"p"},"HelloServiceBlockingStub.class")," as the client type, ",Object(o.b)("inlineCode",{parentName:"p"},"Clients.newClient()")," will return a\nsynchronous client implementation.  If we specified ",Object(o.b)("inlineCode",{parentName:"p"},"HelloServiceFutureStub"),", the calling code would have\nlooked like the following:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'import com.google.common.util.concurrent.Futures;\nimport com.google.common.util.concurrent.ListenableFuture;\nimport com.google.common.util.concurrent.MoreExecutors;\nimport com.linecorp.armeria.client.Clients;\nimport java.util.concurrent.ForkJoinPool;\n\nHelloServiceFutureStub helloService = Clients.newClient(\n        "gproto+http://127.0.0.1:8080/",\n        HelloServiceFutureStub.class);\n\nHelloRequest request = HelloRequest.newBuilder().setName("Armerian World").build();\nListenableFuture<HelloReply> future = helloService.hello(request);\n\nFutures.addCallback(future, new FutureCallback<HelloReply>() {\n    @Override\n    public void onSuccess(HelloReply result) {\n        assert result.getMessage().equals("Hello, Armerian World!");\n    }\n\n    @Override\n    public void onFailure(Throwable t) {\n        t.printStackTrace();\n    }\n}, MoreExecutors.directExecutor());\n\n// You can also wait until the call is finished.\nHelloReply reply = future.get();\n')),Object(o.b)("p",null,"The asynchronous stub uses Guava's ",Object(o.b)("a",{parentName:"p",href:"https://google.github.io/guava/releases/21.0/api/docs/com/google/common/util/concurrent/ListenableFuture.html"},"ListenableFuture")," and can be operated on using methods on ",Object(o.b)("a",{parentName:"p",href:"https://google.github.io/guava/releases/21.0/api/docs/com/google/common/util/concurrent/Futures.html"},"Futures"),". The\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/spotify/futures-extra"},"futures-extra")," library is very convenient for working with ",Object(o.b)("a",{parentName:"p",href:"https://google.github.io/guava/releases/21.0/api/docs/com/google/common/util/concurrent/ListenableFuture.html"},"ListenableFuture")," in Java 8, including the ability\nto convert it to ",Object(o.b)("a",{parentName:"p",href:"https://docs.oracle.com/javase/10/docs/api/java/util/concurrent/CompletableFuture.html"},"CompletableFuture"),"."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC")," also natively supports streaming RPC. If our service definition included this method:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-protobuf"},"service HelloService {\n  rpc ManyHellos (stream HelloRequest) returns (stream HelloReply) {}\n}\n")),Object(o.b)("p",null,"You can also use the builder pattern for client construction:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.common.HttpRequest;\nimport com.linecorp.armeria.common.HttpResponse;\n\nHelloServiceBlockingStub helloService =\n    Clients.builder("gproto+http://127.0.0.1:8080/")\n           .responseTimeoutMillis(10000)\n           .decorator(LoggingClient.newDecorator())\n           .build(HelloServiceBlockingStub.class); // or HelloServiceFutureStub.class\n                                                   // or HelloServiceStub.class\n\nHelloRequest request = HelloRequest.newBuilder().setName("Armerian World").build();\nHelloReply reply = helloService.hello(request);\nassert reply.getMessage().equals("Hello, Armerian World!");\n')),Object(o.b)("p",null,"As you might have noticed already, we decorated the client using ",Object(o.b)("a",{parentName:"p",href:"type://LoggingClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/logging/LoggingClient.html"},"type://LoggingClient"),", which logs all\nrequests and responses. You might be interested in decorating a client using other decorators, for example\nto gather metrics. Please also refer to ",Object(o.b)("a",{parentName:"p",href:"type://ClientBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientBuilder.html"},"type://ClientBuilder")," for more configuration options."),Object(o.b)("h2",{id:"exception-propagation",style:{position:"relative"}},Object(o.b)("a",{parentName:"h2",href:"#exception-propagation","aria-label":"exception propagation permalink",className:"anchor before"},Object(o.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Exception propagation"),Object(o.b)("p",null,"If you have enabled ",Object(o.b)("inlineCode",{parentName:"p"},"Flags.verboseResponses()")," in the server being accessed by specifying\n",Object(o.b)("inlineCode",{parentName:"p"},"-Dcom.linecorp.armeria.verboseResponses=true")," system property, then any exception during processing\nin the server will be returned to the client as a ",Object(o.b)("a",{parentName:"p",href:"type://StatusCauseException:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/grpc/StatusCauseException.html"},"type://StatusCauseException")," attached to the normal gRPC\n",Object(o.b)("inlineCode",{parentName:"p"},"Status"),". This can be used for programmatic access to the exception that happened in the server. In this\nexample, the server always fails with ",Object(o.b)("inlineCode",{parentName:"p"},'throw new IllegalStateException("Failed!");')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.client.Clients;\nimport com.linecorp.armeria.common.grpc.StatusCauseException;\n\nimport io.grpc.StatusRuntimeException;\n\nHelloServiceBlockingStub helloService = Clients.newClient(\n        "gproto+http://127.0.0.1:8080/",\n        HelloServiceBlockingStub.class); // or HelloServiceFutureStub.class or HelloServiceStub.class\n\nHelloRequest request = HelloRequest.newBuilder().setName("Armerian World").build();\ntry {\n    HelloReply reply = helloService.hello(request);\n} catch (StatusRuntimeException e) {\n    if (e.getCause() instanceof StatusCauseException) {\n        StatusCauseException cause = (StatusCauseException) e.getCause();\n        // The name of the class of the exception and its message in the server can be accessed.\n        assert cause.getOriginalClassName().equals("java.lang.IllegalStateException");\n        assert cause.getOriginalMessage().equals("Failed!");\n\n        // The exception\'s message is a combination of both the class name and original message.\n        assert cause.getMessage().equals("java.lang.IllegalStateException: Failed!");\n\n        // The exception\'s stack trace is that which occurred when the server threw the exception.\n        cause.printStackTrace();\n\n        // Logging frameworks, as used by e.g., LoggingClient, will print the stack trace if configured\n        // to do so.\n\n        // Now you know exactly where to look in the server to figure out what may have gone wrong.\n    }\n}\n')),Object(o.b)("h2",{id:"see-also",style:{position:"relative"}},Object(o.b)("a",{parentName:"h2",href:"#see-also","aria-label":"see also permalink",className:"anchor before"},Object(o.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"See also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/server-grpc"},"Running a gRPC service")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/client-decorator"},"Decorating a client")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/client-custom-http-headers"},"Sending custom HTTP headers"))))}b.isMDXComponent=!0},xCMr:function(e,t,a){"use strict";var n=a("Wbzz"),r=a("q1tI"),o=a.n(r),l=a("/94A"),i=a("+ejy");t.a=function(e){var t=Object(n.useStaticQuery)("1217743243").allMdx.nodes;return o.a.createElement(i.a,Object.assign({},e,{candidateMdxNodes:t,index:l,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-client-grpc-mdx-a58d39a2aaf1f9d2e82e.js.map