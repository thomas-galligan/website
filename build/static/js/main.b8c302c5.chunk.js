(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{38:function(e,t,a){e.exports=a(57)},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(11),i=a.n(o),r=(a(43),a(33)),c=(a(44),a(45),a(46),function(e){return l.a.createElement("div",{className:"BlogTitle"},l.a.createElement("p",{className:"title"},e.post.title),l.a.createElement("p",{className:"date"},e.post.date))}),s=(a(47),a(73)),u=a(32),m=a.n(u),p=function(e){return l.a.createElement("div",{className:"BlogContent"},l.a.createElement("p",null,e.post.text),l.a.createElement("div",{className:"taglist"},e.post.tags.map((function(e){return l.a.createElement(s.a,{icon:l.a.createElement(m.a,null),label:e,key:e,size:"small",className:"Chip"})}))))},d=(a(53),function(e){return l.a.createElement("div",{className:"BlogPost"},l.a.createElement(c,{post:e.post}),l.a.createElement(p,{post:e.post}))}),g=[{title:"A Title",date:"02/12/1996",text:"Here is a blog post! lorem ipsum ...",tags:["test tag"]},{title:"Another title",date:"05/05/2018",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",tags:["test tag","another test tag"]}],E=function(e){return l.a.createElement("div",{className:"Blog"},g.map((function(e){return l.a.createElement(d,{post:e,key:e.title})})))},f=(a(54),function(e){return l.a.createElement("div",{className:"About"},l.a.createElement("header",null,l.a.createElement("h1",null,"This is going to be the about section.")))}),h=function(e){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("h1",null,"Tom Galligan"),l.a.createElement("p",null,"Hello! This will be my website/blog. Check back soon for updates.")))},b=(a(55),a(72)),v=a(71),N=function(e){return l.a.createElement(b.a,{className:"Header",value:e.pageSetting.page,onChange:function(t,a){e.pageSetting.setPage(a)},indicatorColor:"primary",textColor:"primary",centered:!0},l.a.createElement(v.a,{value:"Home",label:"Home"}),l.a.createElement(v.a,{value:"Blog",label:"Blog"}),l.a.createElement(v.a,{value:"About",label:"About"}))},w=(a(56),function(){return l.a.createElement("div",{className:"Footer"},l.a.createElement("p",null,"Copyright Tom Galligan 2020"))});var B={Home:h,Blog:E,About:f},k=function(){var e=Object(n.useState)("Home"),t=Object(r.a)(e,2),a=t[0],o=t[1],i=B[a];return l.a.createElement("div",null,l.a.createElement(N,{pageSetting:{page:a,setPage:o}}),l.a.createElement(i,{pageSetting:{page:a,setPage:o}}),l.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.b8c302c5.chunk.js.map