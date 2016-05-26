(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{FvYO:function(e,t,a){"use strict";var n=a("Wbzz"),r=a("q1tI"),i=a.n(r),o=a("HWmb"),c=a("+ejy");t.a=function(e){var t=Object(n.useStaticQuery)("3172452987").allMdx.nodes;return i.a.createElement(c.a,Object.assign({},e,{candidateMdxNodes:t,index:o,prefix:"tutorials",menuTitle:!0,pageTitleSuffix:"Armeria tutorial"}))}},HWmb:function(e){e.exports=JSON.parse('{"root":["index"],"Useful links":{"User manual":"/docs","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"REST service":["rest/blog","rest/blog/create-server","rest/blog/prepare-data-object","rest/blog/add-services-to-server","rest/blog/implement-create","rest/blog/implement-read","rest/blog/implement-update","rest/blog/implement-delete"],"gRPC service":{"Coming soon":null},"Thrift service":{"Coming soon":null}}')},rNLk:function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return c})),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return p}));var n,r=a("zLVn"),i=(a("q1tI"),a("7ljp")),o=a("FvYO"),c="Preparing a data object",l={},s=(n="TutorialSteps",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),b={pageTitle:c,_frontmatter:l},d=o.a;function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(d,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"preparing-a-data-object",style:{position:"relative"}},Object(i.b)("a",{parentName:"h1",href:"#preparing-a-data-object","aria-label":"preparing a data object permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Preparing a data object"),Object(i.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#what-you-need"},"What you need")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#1-define-blog-post-data"},"1. Define blog post data")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#2-add-constructors"},"2. Add constructors")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#3-add-getters"},"3. Add getters")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#whats-next"},"What's next?"))),Object(i.b)("p",null,"Before we get into writing a blog service, first prepare a data object to contain blog post information. This object is used also in handling requests and sending responses."),Object(i.b)("p",null,"If you want a quick start, skip this step and copy off the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria-examples/blob/master/tutorials/rest-api-annotated-service/src/main/java/example/armeria/server/blog/BlogPost.java"},"BlogPost.java")," of the sample service code."),Object(i.b)(s,{current:2,mdxType:"TutorialSteps"}),Object(i.b)("h2",{id:"what-you-need",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#what-you-need","aria-label":"what you need permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"What you need"),Object(i.b)("p",null,"No preparation is required for this step."),Object(i.b)("h2",{id:"1-define-blog-post-data",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#1-define-blog-post-data","aria-label":"1 define blog post data permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"1. Define blog post data"),Object(i.b)("p",null,"Our blog service needs a container for blog post information.\nLet's define a ",Object(i.b)("inlineCode",{parentName:"p"},"BlogPost")," class containing the following information."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"package example.armeria.server.blog;\n\npublic final class BlogPost {\n  private final int id;           // The post ID\n  private final String title;     // The post title\n  private final String content;   // The post content\n  private final long createdAt;   // The time post is created at\n  private final long modifiedAt;  // The time post is modified at\n}\n")),Object(i.b)("h2",{id:"2-add-constructors",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#2-add-constructors","aria-label":"2 add constructors permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"2. Add constructors"),Object(i.b)("p",null,"You need to create a blog post instance when you create or update blog posts. Let's add constructors in the ",Object(i.b)("inlineCode",{parentName:"p"},"BlogPost")," class."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java",metastring:"filename=BlogPost.java",filename:"BlogPost.java"},"BlogPost(int id, String title, String content) {\n  this(id, title, content, System.currentTimeMillis());\n}\n\nBlogPost(int id, String title, String content, long createdAt) {\n  this(id, title, content, createdAt, createdAt);\n}\n\nBlogPost(int id, String title, String content, long createdAt, long modifiedAt) {\n  this.id = id;\n  this.title = title;\n  this.content = content;\n  this.createdAt = createdAt;\n  this.modifiedAt = modifiedAt;\n}\n")),Object(i.b)("h2",{id:"3-add-getters",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#3-add-getters","aria-label":"3 add getters permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"3. Add getters"),Object(i.b)("p",null,"Add the following block of code in the blog service."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"public final class BlogPost {\n  ...\n\n  public int getId() { return id; }\n\n  public String getTitle() { return title; }\n\n  public String getContent() { return content; }\n\n  public long getCreatedAt() { return createdAt; }\n\n  public long getModifiedAt() { return modifiedAt; }\n}\n")),Object(i.b)("h2",{id:"whats-next",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#whats-next","aria-label":"whats next permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"What's next?"),Object(i.b)("p",null,"In this step, we've implemented a data object specifying and containing blog post objects."),Object(i.b)("p",null,"Next, at ",Object(i.b)("a",{parentName:"p",href:"/tutorials/rest/blog/add-services-to-server"},"Step 3. Add services to a server"),", we'll write and\nadd an\nempty service to the server we created earlier."),Object(i.b)(s,{current:2,mdxType:"TutorialSteps"}))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-rest-blog-prepare-data-object-mdx-8ac58b7ad6fbeefbb2d6.js.map