(this["webpackJsonplaunch-date-app"]=this["webpackJsonplaunch-date-app"]||[]).push([[0],{131:function(e,t,a){e.exports={left:"UserImg_left__22y0_",defaultImg:"UserImg_defaultImg__2PgJb",upLoadButton:"UserImg_upLoadButton__2HMBw",saveButton:"UserImg_saveButton__3oY28"}},283:function(e,t,a){e.exports={info:"UserInfo_info__3Mrbu"}},297:function(e,t,a){e.exports=a(467)},467:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(56),r=a.n(c),o=a(35),i=a(16),m=a(121),u=a(122),s=a(129),p=a(127),d=a(481),h=a(480),g=(a(89),function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={activeItem:"home"},e.handleItemClick=function(t,a){var n=a.name;return e.setState({activeItem:n})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.activeItem;return l.a.createElement(d.a,{inverted:!0,style:{borderRadius:"0"}},l.a.createElement(h.a,{inverted:!0,pointing:!0,secondary:!0},l.a.createElement(o.b,{to:"/Launch-Date-App"},l.a.createElement("object",null,l.a.createElement(h.a.Item,{name:"home",active:"home"===e,onClick:this.handleItemClick}))),l.a.createElement(h.a.Item,{name:"messages",active:"messages"===e,onClick:this.handleItemClick}),l.a.createElement(h.a.Item,{name:"myPage",active:"myPage"===e,onClick:this.handleItemClick}),l.a.createElement(o.b,{to:"/Settings"},l.a.createElement("object",null,l.a.createElement(h.a.Item,{name:"setting",active:"setting"===e,onClick:this.handleItemClick})))))}}]),a}(n.Component)),E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(g,null))},v=a(24),f=a(180);a(408);f.initializeApp({apiKey:"AIzaSyBCDuxxxTkNwAfHvKgX5UH43hHg7dAYdE4",authDomain:"launch-date-app.firebaseapp.com",databaseURL:"https://launch-date-app.firebaseio.com",projectId:"launch-date-app",storageBucket:"launch-date-app.appspot.com",messagingSenderId:"699094569734",appId:"1:699094569734:web:3e7681f0dc44b4435bc487",measurementId:"G-K5W3BP2N7V"});var b=f,I=l.a.createContext(),S=function(e){var t=e.children,a=Object(n.useState)(null),c=Object(v.a)(a,2),r=c[0],o=c[1];return Object(n.useEffect)((function(){b.auth().onAuthStateChanged((function(e){o(e)}))}),[]),l.a.createElement(I.Provider,{value:r},t)},C=a(482),y=a(477),_=a(479),j=a(476),O=a(72),x=a.n(O),k=function(e){var t=e.history,a=Object(n.useState)(""),c=Object(v.a)(a,2),r=c[0],m=c[1],u=Object(n.useState)(""),s=Object(v.a)(u,2),p=s[0],h=s[1];return Object(n.useContext)(I)?l.a.createElement(i.a,{to:"/Launch-Date-App"}):l.a.createElement("div",{className:x.a.allWrap},l.a.createElement(d.a,{placeholder:!0},l.a.createElement(C.a,{columns:2,relaxed:"very",stackable:!0},l.a.createElement(C.a.Column,null,l.a.createElement("div",{className:x.a.signInForm},l.a.createElement("h2",{className:x.a.logo},"Sign In"),l.a.createElement(y.a,{onSubmit:function(e){e.preventDefault(),b.auth().signInWithEmailAndPassword(r,p).then((function(){t.push("/Launch-Date-App")})).catch((function(){alert("\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u304b\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u9593\u9055\u3063\u3066\u3044\u307e\u3059\u3002")}))}},l.a.createElement(y.a.Input,{icon:"envelope",iconPosition:"left",label:"E-mail",placeholder:"E-mail",type:"email",onChange:function(e){m(e.target.value)},value:r}),l.a.createElement(y.a.Input,{icon:"lock",iconPosition:"left",label:"Password",type:"password",placeholder:"Password",onChange:function(e){h(e.target.value)},value:p}),l.a.createElement(_.a,{content:"Sign In",primary:!0})))),l.a.createElement(C.a.Column,{verticalAlign:"middle"},l.a.createElement("div",{className:x.a.buttonWrapper},l.a.createElement(o.b,{to:"/SignUp"},l.a.createElement(_.a,{content:"Sign up",icon:"signup",size:"big"}))))),l.a.createElement(j.a,{vertical:!0,className:x.a.solid},"Or")))},N=a(87),U=a.n(N),A=function(){var e=Object(n.useState)(""),t=Object(v.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),i=Object(v.a)(r,2),m=i[0],u=i[1],s=Object(n.useState)(""),p=Object(v.a)(s,2),h=p[0],g=p[1];return l.a.createElement("div",{className:U.a.allWrap},l.a.createElement(d.a,{placeholder:!0},l.a.createElement(C.a,{columns:2,relaxed:"very",stackable:!0},l.a.createElement(C.a.Column,null,l.a.createElement(y.a,{onSubmit:function(e){e.preventDefault(),b.auth().createUserWithEmailAndPassword(a,m).then((function(){b.auth().currentUser.updateProfile({displayName:h})})).catch((function(e){console.log(e)}))}},l.a.createElement("h2",{className:U.a.logo},"Sign Up"),l.a.createElement(y.a.Input,{icon:"user",iconPosition:"left",label:"User Name",type:"name",placeholder:"User Name",onChange:function(e){g(e.target.value)},value:h}),l.a.createElement(y.a.Input,{icon:"envelope",iconPosition:"left",label:"E-mail",type:"email",placeholder:"E-mail",onChange:function(e){c(e.target.value)},value:a}),l.a.createElement(y.a.Input,{icon:"lock",iconPosition:"left",label:"Password",type:"password",placeholder:"Password",onChange:function(e){u(e.target.value)},value:m}),l.a.createElement(_.a,{content:"Sign Up",primary:!0}))),l.a.createElement(C.a.Column,{verticalAlign:"middle"},l.a.createElement("div",{className:U.a.buttonWrapper},l.a.createElement(o.b,{to:"/SignIn"},l.a.createElement(_.a,{content:"Sign In",icon:"signup",size:"big"}))))),l.a.createElement(j.a,{vertical:!0,className:U.a.solid},"Or")))},w=a(286),P=function(e){var t=e.component,a=Object(w.a)(e,["component"]),c=Object(n.useContext)(I);return l.a.createElement(i.b,Object.assign({},a,{render:function(e){return c?l.a.createElement(t,e):l.a.createElement(i.a,{to:"/SignIn"})}}))},W=a(284),B=a(131),D=a.n(B),F=function(){var e=Object(n.useState)(""),t=Object(v.a)(e,2),a=t[0],c=t[1];return b.auth().onAuthStateChanged((function(e){e?c(e.displayName):console.log("error")})),l.a.createElement("div",{className:D.a.left},l.a.createElement("div",{className:D.a.defaultImg,id:"imgContainer"},l.a.createElement(W.a,{name:a,size:"200",className:D.a.defaultImg}),l.a.createElement("div",{labelText:null,imageStyle:{width:"200px",height:"200px",borderRadius:"100px",objectFit:"cover",margin:"0 auto"},accept:"image/*"})))},L=function(){var e=Object(n.useState)(""),t=Object(v.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),o=Object(v.a)(r,2),i=o[0],m=o[1];b.auth().onAuthStateChanged((function(e){e?c(e.displayName):console.log("error")}));return l.a.createElement("div",{style:{marginBottom:"20px"}},l.a.createElement("p",{style:{marginBottom:"10px"}},"User Name"),l.a.createElement("input",{type:"text",style:{marginBottom:"10px"},placeholder:a,onChange:function(e){m(e.target.value)},value:i}),l.a.createElement("br",null),l.a.createElement(_.a,{positive:!0,onClick:function(){""!==i?b.auth().currentUser.updateProfile({displayName:i}).catch((function(e){console.log(e)})):alert("\u6587\u5b57\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044")}},"Save"))},z=function(){var e=Object(n.useState)(""),t=Object(v.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),o=Object(v.a)(r,2),i=o[0],m=o[1];b.auth().onAuthStateChanged((function(e){e?c(e.email):console.log("error")}));return l.a.createElement("div",{style:{marginBottom:"20px"}},l.a.createElement("p",{style:{marginBottom:"10px"}},"User Email"),l.a.createElement("input",{type:"email",style:{marginBottom:"10px"},placeholder:a,onChange:function(e){m(e.target.value)},value:i}),l.a.createElement("br",null),l.a.createElement(_.a,{positive:!0,onClick:function(){""!==i?b.auth().currentUser.updateEmail("".concat(i)).catch((function(e){console.log(e)})):alert("\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044")}},"Save"))},J=function(){return l.a.createElement("div",{style:{marginBottom:"40px"}},l.a.createElement("label",null,"User Password"))},H=function(){return Object(n.useContext)(I)?l.a.createElement("div",null,l.a.createElement(_.a,{negative:!0,onClick:function(){b.auth().signOut().then((function(){console.log("\u30b5\u30a4\u30f3\u30a2\u30a6\u30c8\u3057\u307e\u3057\u305f")})).catch((function(e){console.log("\u30b5\u30a4\u30f3\u30a2\u30a6\u30c8\u6642\u306b\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f (".concat(e,")"))}))}},"Sign Out")):l.a.createElement(i.a,{to:"/SignIn"})},R=a(283),K=a.n(R),M=function(){return l.a.createElement("div",{className:K.a.info},l.a.createElement(L,null),l.a.createElement(z,null),l.a.createElement(J,null),l.a.createElement(H,null))},T=function(){return l.a.createElement("div",{style:{display:"flex"}},l.a.createElement(F,null),l.a.createElement(M,null))},Y=function(){return l.a.createElement(l.a.Fragment,null)},q=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={activeItem:"Account"},e.handleItemClick=function(t,a){var n=a.name;return e.setState({activeItem:n})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.activeItem;return l.a.createElement(l.a.Fragment,null,l.a.createElement(g,null),l.a.createElement(C.a,null,l.a.createElement(C.a.Column,{width:4},l.a.createElement(h.a,{fluid:!0,vertical:!0,tabular:!0,style:{height:"473px",minWidth:"120px"}},l.a.createElement(h.a.Item,{name:"Account",active:"Account"===e,onClick:this.handleItemClick}),l.a.createElement(h.a.Item,{name:"Notice",active:"Notice"===e,onClick:this.handleItemClick}),l.a.createElement(h.a.Item,{name:"companies",active:"companies"===e,onClick:this.handleItemClick}),l.a.createElement(h.a.Item,{name:"links",active:"links"===e,onClick:this.handleItemClick}))),l.a.createElement(C.a.Column,{stretched:!0,width:12,style:{height:"500px"}},l.a.createElement(d.a,{style:{width:"95%",minWidth:"675px"}},"Account"===e?l.a.createElement(T,null):"Notice"===e?l.a.createElement(Y,null):void 0))))}}]),a}(n.Component),G=document.createElement("link");G.rel="stylesheet",G.href="https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css",document.head.appendChild(G);var V=function(){return l.a.createElement(S,null,l.a.createElement(o.a,null,l.a.createElement(P,{exact:!0,path:"/Launch-Date-App",component:E}),l.a.createElement(i.b,{exact:!0,path:"/SignIn",component:k}),l.a.createElement(i.b,{exact:!0,path:"/SignUp",component:A}),l.a.createElement(i.b,{exact:!0,path:"/Settings",component:q})))};r.a.render(l.a.createElement(V,null),document.querySelector("#root"))},72:function(e,t,a){e.exports={allWrap:"SignIn_allWrap__8PcJZ",signInForm:"SignIn_signInForm__1Oz6m",logo:"SignIn_logo__3-1Wn",buttonWrapper:"SignIn_buttonWrapper__1Rf_r",solid:"SignIn_solid__2SWtc"}},87:function(e,t,a){e.exports={allWrap:"SignUp_allWrap__3ms4n",logo:"SignUp_logo__2IAJ3",buttonWrapper:"SignUp_buttonWrapper__12fvj",solid:"SignUp_solid__1UI-w"}}},[[297,1,2]]]);
//# sourceMappingURL=main.eeb613a5.chunk.js.map