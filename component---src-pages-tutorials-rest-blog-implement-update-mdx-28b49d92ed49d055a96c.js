(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{FvYO:function(e,t,a){"use strict";var n=a("Wbzz"),o=a("q1tI"),r=a.n(o),i=a("HWmb"),c=a("+ejy");t.a=function(e){var t=Object(n.useStaticQuery)("3172452987").allMdx.nodes;return r.a.createElement(c.a,Object.assign({},e,{candidateMdxNodes:t,index:i,prefix:"tutorials",menuTitle:!0,pageTitleSuffix:"Armeria tutorial"}))}},HWmb:function(e){e.exports=JSON.parse('{"root":["index"],"Useful links":{"User manual":"/docs","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"REST service":["rest/blog","rest/blog/create-server","rest/blog/prepare-data-object","rest/blog/add-services-to-server","rest/blog/implement-create","rest/blog/implement-read","rest/blog/implement-update","rest/blog/implement-delete"],"gRPC service":{"Coming soon":null},"Thrift service":{"Coming soon":null}}')},"hik+":function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return i})),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a("zLVn"),o=(a("q1tI"),a("7ljp")),r=a("FvYO"),i="Implementing UPDATE operation",c={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},s=l("TutorialSteps"),p=l("Warning"),b={pageTitle:i,_frontmatter:c},m=r.a;function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)(m,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"implementing-update-operation",style:{position:"relative"}},Object(o.b)("a",{parentName:"h1",href:"#implementing-update-operation","aria-label":"implementing update operation permalink",className:"anchor before"},Object(o.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Implementing UPDATE operation"),Object(o.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"#what-you-need"},"What you need"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"#1-map-http-method"},"1. Map HTTP method"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"#2-handle-parameters"},"2. Handle parameters"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"#3-implement-service-code"},"3. Implement service code"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"#4-return-response"},"4. Return response")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#return-error"},"Return error")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#return-success"},"Return success")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"#5-test-updating-a-blog-post"},"5. Test updating a blog post"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"#next-step"},"Next step")))),Object(o.b)("p",null,"In this step, you'll write a method for updating a blog post. By completing this step, you'll learn to map your service with the HTTP PUT (",Object(o.b)("a",{parentName:"p",href:"type://@Put:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/Put.html"},"type://@Put"),") method, use parameter injection, and convert request body into a Java object using a request object (",Object(o.b)("a",{parentName:"p",href:"type://@RequestObject:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/RequestObject.html"},"type://@RequestObject"),")."),Object(o.b)(s,{current:6,mdxType:"TutorialSteps"}),Object(o.b)("h2",{id:"what-you-need",style:{position:"relative"}},Object(o.b)("a",{parentName:"h2",href:"#what-you-need","aria-label":"what you need permalink",className:"anchor before"},Object(o.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"What you need"),Object(o.b)("p",null,"You must have the following files ready for updating a blog post. You can always ",Object(o.b)("a",{parentName:"p",href:"https://github.com/line/armeria-examples/blob/master/tutorials/rest-api-annotated-service/src/main/java/example/armeria/server/blog/"},"download")," the full version, instead of creating one yourself."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Main.java from ",Object(o.b)("a",{parentName:"li",href:"/tutorials/rest/blog/create-server"},"Step 1. Create a server")),Object(o.b)("li",{parentName:"ul"},"BlogPost.java from ",Object(o.b)("a",{parentName:"li",href:"/tutorials/rest/blog/prepare-data-object"},"Step 2. Prepare a data object")),Object(o.b)("li",{parentName:"ul"},"BlogService.java from ",Object(o.b)("a",{parentName:"li",href:"/tutorials/rest/blog/add-services-to-server"},"Step 3. Add services to a server"))),Object(o.b)(p,{mdxType:"Warning"},Object(o.b)("p",null,"To test updating a blog post, you need to have blog posts created, which requires you to have the creation method implemented in the BlogService.java. See ",Object(o.b)("a",{parentName:"p",href:"/tutorials/rest/blog/implement-create"},"Step 4. Implement CREATE")," for instructions.")),Object(o.b)("h2",{id:"1-map-http-method",style:{position:"relative"}},Object(o.b)("a",{parentName:"h2",href:"#1-map-http-method","aria-label":"1 map http method permalink",className:"anchor before"},Object(o.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"1. Map HTTP method"),Object(o.b)("p",null,"Let's start ",Object(o.b)("a",{parentName:"p",href:"/docs/server-annotated-service#mapping-http-service-methods"},"mapping the HTTP PUT method")," with our service method:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Declare a service method, ",Object(o.b)("inlineCode",{parentName:"li"},"updateBlogPost()"),", in the class ",Object(o.b)("inlineCode",{parentName:"li"},"BlogService"),"."),Object(o.b)("li",{parentName:"ol"},"Map this service method with the HTTP PUT method by adding the ",Object(o.b)("a",{parentName:"li",href:"type://@Put:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/Put.html"},"type://@Put")," annotation."),Object(o.b)("li",{parentName:"ol"},"Bind the endpoint ",Object(o.b)("inlineCode",{parentName:"li"},"/blogs")," to the method.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java",metastring:"filename=BlogService.java highlight=6",filename:"BlogService.java",highlight:"6"},'import com.linecorp.armeria.server.annotation.Put;\n\npublic final class BlogService {\n  ...\n\n  @Put("/blogs")\n  public void updateBlogPost(int id, BlogPost blogPost) {\n    // Update a blog post\n  }\n}\n')),Object(o.b)("h2",{id:"2-handle-parameters",style:{position:"relative"}},Object(o.b)("a",{parentName:"h2",href:"#2-handle-parameters","aria-label":"2 handle parameters permalink",className:"anchor before"},Object(o.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"2. Handle parameters"),Object(o.b)("p",null,"For updating a blog post, let's take a blog post ID (",Object(o.b)("inlineCode",{parentName:"p"},"id"),") and new blog post information to update with. For ",Object(o.b)("a",{parentName:"p",href:"/tutorials/rest/blog/implement-create"},"creating a blog post"),", we've used Armeria's ",Object(o.b)("a",{parentName:"p",href:"type://RequestConverter:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/RequestConverter.html"},"type://RequestConverter")," to convert a request body into a Java object. For a change, let's try using ",Object(o.b)("a",{parentName:"p",href:"type://@RequestObject:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/RequestObject.html"},"type://@RequestObject")," to convert a request body."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Take in the ID value as a path parameter by adding ",Object(o.b)("inlineCode",{parentName:"p"},"/blogs/:id")," to the ",Object(o.b)("a",{parentName:"p",href:"type://@Put:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/Put.html"},"type://@Put")," annotation.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/docs/server-annotated-service#parameter-injection"},"Inject the path parameter")," to the service method by annotating the parameter with ",Object(o.b)("a",{parentName:"p",href:"type://@Param:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/Param.html"},"type://@Param"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"/docs/server-annotated-service#converting-an-http-request-to-a-java-object"},"Convert request body")," into a Java object by annotating the ",Object(o.b)("inlineCode",{parentName:"p"},"BlogPost")," parameter with ",Object(o.b)("a",{parentName:"p",href:"type://@RequestObject:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/RequestObject.html"},"type://@RequestObject"),"."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-java",metastring:"filename=BlogService.java",filename:"BlogService.java"},'import com.linecorp.armeria.server.annotation.Param;\nimport com.linecorp.armeria.server.annotation.RequestObject;\n\npublic final class BlogService {\n  ...\n\n  // Instructions 1 to 3\n  @Put("/blogs/:id")\n  public void updateBlogPost(@Param int id, @RequestObject BlogPost blogPost) {\n    // Update a blog post\n  }\n}\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"For conversion, annotate blog post constructor to map JSON object keys to blog post object members. You can find more information on ",Object(o.b)("inlineCode",{parentName:"p"},"@JsonCreator")," ",Object(o.b)("a",{parentName:"p",href:"https://www.baeldung.com/jackson-annotations#1-jsoncreator"},"here"),"."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-java",metastring:"filename=BlogPost.java highlight=7-9",filename:"BlogPost.java",highlight:"7-9"},'import com.fasterxml.jackson.annotation.JsonCreator;\nimport com.fasterxml.jackson.annotation.JsonProperty;\n\npublic final class BlogPost {\n  ...\n\n  @JsonCreator\n  BlogPost(@JsonProperty("id") int id, @JsonProperty("title") String title,\n           @JsonProperty("content") String content) {\n    ...\n  }\n}\n')))),Object(o.b)("h2",{id:"3-implement-service-code",style:{position:"relative"}},Object(o.b)("a",{parentName:"h2",href:"#3-implement-service-code","aria-label":"3 implement service code permalink",className:"anchor before"},Object(o.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"3. Implement service code"),Object(o.b)("p",null,"In this step, write the code required for service itself. You need to update the information contained in the ",Object(o.b)("inlineCode",{parentName:"p"},"blogPosts")," map. In real services, you'll be retrieving and updating the blog post information from and to a database."),Object(o.b)("p",null,"To update a blog post, copy the following code inside the ",Object(o.b)("inlineCode",{parentName:"p"},"updateBlogPost()")," method."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java",metastring:"filename=BlogService.java",filename:"BlogService.java"},'  @Put("/blogs/:id")\n  public void updateBlogPost(@Param int id, @RequestObject BlogPost blogPost) {\n    BlogPost oldBlogPost = blogPosts.get(id);\n    // Check if the given blog post exists\n    if (oldBlogPost == null) {\n      // Return a Not Found error. See the next section for instructions\n    }\n    BlogPost newBlogPost = new BlogPost(id, blogPost.getTitle(),\n                                        blogPost.getContent(),\n                                        oldBlogPost.getCreatedAt(),\n                                        blogPost.getCreatedAt());\n    blogPosts.put(id, newBlogPost); // Update the info in the map\n    ...\n  }\n')),Object(o.b)("h2",{id:"4-return-response",style:{position:"relative"}},Object(o.b)("a",{parentName:"h2",href:"#4-return-response","aria-label":"4 return response permalink",className:"anchor before"},Object(o.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"4. Return response"),Object(o.b)("p",null,"Two possibilities are available for the response. If the blog post to update exists, we respond to the client that the update has been successful. The other response informs the client that the blog post doesn't exist."),Object(o.b)("h3",{id:"return-error",style:{position:"relative"}},Object(o.b)("a",{parentName:"h3",href:"#return-error","aria-label":"return error permalink",className:"anchor before"},Object(o.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Return error"),Object(o.b)("p",null,"Let's return an error for the request to update a blog post that doesn't exist."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Replace the return type of the ",Object(o.b)("inlineCode",{parentName:"li"},"updateBlogPost()")," method from ",Object(o.b)("inlineCode",{parentName:"li"},"void")," to ",Object(o.b)("a",{parentName:"li",href:"type://HttpResponse:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/HttpResponse.html"},"type://HttpResponse"),"."),Object(o.b)("li",{parentName:"ol"},"Return a response using Armeria's ",Object(o.b)("a",{parentName:"li",href:"type://HttpResponse:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/HttpResponse.html"},"type://HttpResponse")," containing ",Object(o.b)("a",{parentName:"li",href:"type://HttpStatus#NOT_FOUND:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/HttpStatus.html#NOT_FOUND"},"type://HttpStatus#NOT_FOUND"),".")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java",metastring:"filename=BlogService.java highlight=8,11",filename:"BlogService.java",highlight:"8,11"},'import com.linecorp.armeria.common.HttpResponse;\nimport com.linecorp.armeria.common.HttpStatus;\n\npublic final class BlogService {\n  ...\n\n  @Put("/blogs/:id")\n  public HttpResponse updateBlogPost(@Param int id, @RequestObject BlogPost blogPost) {\n    ...\n    if (oldBlogPost == null) {\n      return HttpResponse.of(HttpStatus.NOT_FOUND);\n    }\n    ...\n  }\n}\n')),Object(o.b)("h3",{id:"return-success",style:{position:"relative"}},Object(o.b)("a",{parentName:"h3",href:"#return-success","aria-label":"return success permalink",className:"anchor before"},Object(o.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Return success"),Object(o.b)("p",null,"Let's return the information updated when the target blog post exists:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Replace the return type of the ",Object(o.b)("inlineCode",{parentName:"li"},"updateBlogPost()")," method from ",Object(o.b)("inlineCode",{parentName:"li"},"void")," to ",Object(o.b)("a",{parentName:"li",href:"type://HttpResponse:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/HttpResponse.html"},"type://HttpResponse"),"."),Object(o.b)("li",{parentName:"ol"},"Return a response using Armeria's ",Object(o.b)("a",{parentName:"li",href:"type://HttpResponse:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/HttpResponse.html"},"type://HttpResponse")," containing the updated information of the post.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java",metastring:"filename=BlogService.java highlight=7,9",filename:"BlogService.java",highlight:"7,9"},'import com.linecorp.armeria.common.HttpResponse;\n\npublic final class BlogService {\n  ...\n\n  @Put("/blogs/:id")\n  public HttpResponse updateBlogPost(@Param int id, @RequestObject BlogPost blogPost) {\n    ...\n    return HttpResponse.ofJson(newBlogPost);\n  }\n}\n')),Object(o.b)("h2",{id:"5-test-updating-a-blog-post",style:{position:"relative"}},Object(o.b)("a",{parentName:"h2",href:"#5-test-updating-a-blog-post","aria-label":"5 test updating a blog post permalink",className:"anchor before"},Object(o.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"5. Test updating a blog post"),Object(o.b)("p",null,"Let's test updating a blog post."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Run the server like we did in ",Object(o.b)("a",{parentName:"p",href:"/tutorials/rest/blog/create-server"},"Step 1. Create a server")," by running the ",Object(o.b)("inlineCode",{parentName:"p"},"main()"),' method or using Gradle. When you see the message, "Server has been started", you can try testing service methods.')),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a couple of blog posts to test updating a blog post and get the ID value returned. Enter the cURL commands below."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},'$ curl --request POST \'localhost:8080/blogs\' \\\n-H \'Content-Type: application/json\' \\\n-d \'{"title":"First post for testing", "content":"Test updating."}\'\n')),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},'$ curl --request POST \'localhost:8080/blogs\' \\\n-H \'Content-Type: application/json\' \\\n-d \'{"title":"Second post for testing", "content":"Test updating a post."}\'\n')),Object(o.b)("p",{parentName:"li"},"For each command, you'll get a response similar to the following."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},'{"id":0,"title":"First post for testing","content":"Test updating.","createdAt":...,"modifiedAt":...}\n\n{"id":1,"title":"Second post for testing","content":"Test updating a post.","createdAt":...,"modifiedAt":...}\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Let's update the second blog with the ID, ",Object(o.b)("inlineCode",{parentName:"p"},"1"),". Change the value for the ",Object(o.b)("inlineCode",{parentName:"p"},'"title"')," and ",Object(o.b)("inlineCode",{parentName:"p"},'"content"')," properties."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},'$ curl --request PUT \'localhost:8080/blogs/1\' \\\n-H \'Content-Type: application/json\' \\\n-d \'{\n    "title": "Update title to this title",\n    "content": "Update blog content with this content."\n}\'\n')),Object(o.b)("p",{parentName:"li"},"You'll get a response similar to this. Not only the title and content are changed, but the last updated time (",Object(o.b)("inlineCode",{parentName:"p"},"modifiedAt"),") is changed, too."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},'{"id":1,"title":"Update title to this title","content":"Update blog content with this content.","createdAt":...,\n"modifiedAt":...}\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Let's retrieve the same blog post to see if the change has been applied successfully."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ curl --request GET 'localhost:8080/blogs/1'\n")),Object(o.b)("p",{parentName:"li"},"The response we get confirms that the change is applied."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},'{\n  "id": 1,\n  "title": "Update title to this title",\n  "content": "Update blog content with this content.",\n  "createdAt": ...,\n  "modifiedAt": ...\n}\n')))),Object(o.b)("p",null,"You can test this also with Armeria's ",Object(o.b)("a",{parentName:"p",href:"/docs/server-docservice"},"Documentation service"),". See ",Object(o.b)("a",{parentName:"p",href:"/tutorials/rest/blog/add-services-to-server#using-docservice-after-adding-service-methods"},"Using DocService after adding service methods")," for instructions."),Object(o.b)("h2",{id:"next-step",style:{position:"relative"}},Object(o.b)("a",{parentName:"h2",href:"#next-step","aria-label":"next step permalink",className:"anchor before"},Object(o.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Next step"),Object(o.b)("p",null,"In this step, we've implemented a method for an UPDATE operation and used Armeria's annotations; ",Object(o.b)("a",{parentName:"p",href:"type://@Put:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/Put.html"},"type://@Put"),", ",Object(o.b)("a",{parentName:"p",href:"type://@Param:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/Param.html"},"type://@Param"),", and ",Object(o.b)("a",{parentName:"p",href:"type://@RequestObject:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/RequestObject.html"},"type://@RequestObject"),"."),Object(o.b)("p",null,"Next, at ",Object(o.b)("a",{parentName:"p",href:"/tutorials/rest/blog/implement-delete"},"Step 7. Implement DELETE"),", we'll implement a DELETE operation to delete\nblog posts."),Object(o.b)(s,{current:6,mdxType:"TutorialSteps"}))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-rest-blog-implement-update-mdx-28b49d92ed49d055a96c.js.map