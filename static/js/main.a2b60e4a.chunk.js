(this.webpackJsonpHW=this.webpackJsonpHW||[]).push([[0],[,,,,function(e,a,t){e.exports={message:"Message_message__xtZJy",leftColumn:"Message_leftColumn__32tCU",rightColumn:"Message_rightColumn__2Oe0J",messageArea:"Message_messageArea__N2ZQV",firstName:"Message_firstName__3PMfc",messageData:"Message_messageData__1Ibso",messageText:"Message_messageText__1Apa5",messageTime:"Message_messageTime__38I7a"}},,,,function(e,a,t){e.exports={input:"SuperInputText_input__1c0eA",superInput:"SuperInputText_superInput__2T1T5",errorInput:"SuperInputText_errorInput__3vzCi",error:"SuperInputText_error__C1p41"}},function(e,a,t){e.exports={inputClass:"Greeting_inputClass__2EPqL",error:"Greeting_error__ogJGk",errorText:"Greeting_errorText__1Hy2B"}},function(e,a,t){e.exports={blue:"HW4_blue__3ZfV9",column:"HW4_column__1OzW2",testSpanError:"HW4_testSpanError__3UTwZ"}},function(e,a,t){e.exports={button:"SuperButton_button__28Rn4",default:"SuperButton_default__1m1JW",red:"SuperButton_red__1SO_N"}},,function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__4j9n1",spanClassName:"SuperCheckbox_spanClassName__1uWle"}},,,function(e,a,t){e.exports={App:"App_App__1MC6S"}},function(e,a,t){},,function(e,a,t){e.exports=t(25)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),c=t.n(l),u=(t(24),t(16)),s=t.n(u),o=t(4),m=t.n(o);var i=function(e){return r.a.createElement("div",{className:m.a.message},r.a.createElement("div",{className:m.a.leftColumn},r.a.createElement("img",{src:e.avatar,alt:"ava"})),r.a.createElement("div",{className:m.a.rightColumn},r.a.createElement("div",{className:m.a.messageArea},r.a.createElement("div",{className:m.a.firstName},e.name),r.a.createElement("div",{className:m.a.messageData},r.a.createElement("div",{className:m.a.messageText},e.message),r.a.createElement("div",{className:m.a.messageTime},e.time)))))},E="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",d="Some Name",p="some text",f="22:00";var _=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement(i,{avatar:E,name:d,message:p,time:f}),r.a.createElement("hr",null),r.a.createElement("hr",null))},h=t(2);var g=function(e){return r.a.createElement("div",null,r.a.createElement("span",null,e.affair.name),r.a.createElement("span",null,e.affair.priority),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))},v=t(17),b=t.n(v);var C=function(e){var a=e.data.map((function(a){return r.a.createElement(g,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:b.a.buttons},a,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},k=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var N=function(){var e=Object(n.useState)(k),a=Object(h.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),u=Object(h.a)(c,2),s=u[0],o=u[1],m=function(e,a){return"all"===a?e:"low"===a?e.filter((function(e){return"low"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):e.filter((function(e){return"high"===e.priority}))}(t,s);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(C,{data:m,setFilter:o,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},x=t(18),j=t(9),O=t.n(j),S=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,u=e.users,s=l?O.a.error:O.a.inputClass;return r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,className:s}),r.a.createElement("span",{className:O.a.errorText},l),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",null,c),r.a.createElement("ul",null,u.map((function(e){return r.a.createElement("li",{key:e._id},e.name)}))))},y=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(h.a)(l,2),u=c[0],s=c[1],o=Object(n.useState)(""),m=Object(h.a)(o,2),i=m[0],E=m[1],d=a.length;return r.a.createElement(S,{name:u,setNameCallback:function(e){E(""),s(e.currentTarget.value)},addUser:function(){if(""!==u.trim()){var e=u.trim();alert("Hello  ".concat(e,"!")),t(e),s(""),E("")}else E("name is require")},error:i,totalUsers:d,users:a})},T=t(27);var w=function(){var e=Object(n.useState)([]),a=Object(h.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(y,{users:t,addUserCallback:function(e){var a={_id:Object(T.a)(),name:e};l([a].concat(Object(x.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},A=t(6),I=t(8),M=t.n(I),W=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],J=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,u=e.className,s=e.spanClassName,o=Object(A.a)(e,W),m="".concat(M.a.error," ").concat(s||""),i="".concat(M.a.input," ").concat(c?M.a.errorInput:M.a.superInput," ").concat(u);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:i},o)),c&&r.a.createElement("span",{className:m},c))},H=t(10),U=t.n(H),B=t(11),F=t.n(B),P=["red","className"],G=function(e){var a=e.red,t=e.className,n=Object(A.a)(e,P),l="".concat(F.a.button," ").concat(a?F.a.red:F.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},Z=t(13),q=t.n(Z),D=["type","onChange","onChangeChecked","className","spanClassName","children"],K=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(A.a)(e,D),u="".concat(q.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:u},c)),l&&r.a.createElement("span",{className:q.a.spanClassName},l))};var L=function(){var e=Object(n.useState)(""),a=Object(h.a)(e,2),t=a[0],l=a[1],c=t?"":"error",u=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},s=Object(n.useState)(!1),o=Object(h.a)(s,2),m=o[0],i=o[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:U.a.column},r.a.createElement(J,{value:t,onChangeText:l,onEnter:u,error:c}),r.a.createElement(J,{className:"".concat(U.a.blue," ").concat(U.a.green)}),r.a.createElement(G,null,"default"),r.a.createElement(G,{red:!0,onClick:u},"delete "),r.a.createElement(G,{disabled:!0},"disabled"),r.a.createElement(K,{checked:m,onChangeChecked:i},"some text "),r.a.createElement(K,{checked:m,onChange:function(e){return i(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var z=function(){return r.a.createElement("div",null,"// add NavLinks")},R=t(1);var V=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"PreJunior"),r.a.createElement(_,null),r.a.createElement(N,null),r.a.createElement(w,null),r.a.createElement(L,null))};var X=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Junior"),r.a.createElement(_,null),r.a.createElement(N,null),r.a.createElement(w,null),r.a.createElement(L,null))};var Q=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Junior+"),r.a.createElement(_,null),r.a.createElement(N,null),r.a.createElement(w,null),r.a.createElement(L,null))},Y="/pre-junior",$="/junior",ee="/junior_plus";var ae=function(){return r.a.createElement("div",null,r.a.createElement(R.c,null,r.a.createElement(R.a,{path:Y,element:r.a.createElement(V,null)}),r.a.createElement(R.a,{path:$,element:r.a.createElement(X,null)}),r.a.createElement(R.a,{path:ee,element:r.a.createElement(Q,null)})))},te=t(12);var ne=function(){return r.a.createElement("div",null,r.a.createElement(te.a,null,r.a.createElement(z,null),r.a.createElement(ae,null)))};var re=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(_,null),r.a.createElement(N,null),r.a.createElement(w,null),r.a.createElement(L,null),r.a.createElement(ne,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[19,1,2]]]);
//# sourceMappingURL=main.a2b60e4a.chunk.js.map