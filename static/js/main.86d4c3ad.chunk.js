(this.webpackJsonpHW=this.webpackJsonpHW||[]).push([[0],{19:function(e,t,a){e.exports={input:"SuperInputText_input__1c0eA",superInput:"SuperInputText_superInput__2T1T5",errorInput:"SuperInputText_errorInput__3vzCi",error:"SuperInputText_error__C1p41"}},20:function(e,t,a){e.exports={header:"Header_header__2pBlx",nav_item:"Header_nav_item__383LE"}},26:function(e,t,a){e.exports={button:"SuperButton_button__28Rn4",default:"SuperButton_default__1m1JW",red:"SuperButton_red__1SO_N"}},27:function(e,t,a){e.exports={inputClass:"Greeting_inputClass__2EPqL",error:"Greeting_error__ogJGk",errorText:"Greeting_errorText__1Hy2B"}},28:function(e,t,a){e.exports={blue:"HW4_blue__3ZfV9",column:"HW4_column__1OzW2",testSpanError:"HW4_testSpanError__3UTwZ"}},30:function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__4j9n1",spanClassName:"SuperCheckbox_spanClassName__1uWle"}},35:function(e,t,a){e.exports={App:"App_App__1MC6S"}},36:function(e,t,a){},39:function(e,t,a){e.exports=a(50)},44:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l),o=(a(44),a(35)),u=a.n(o),i=a(2),s=a(3),m=a(6),E=a(19),d=a.n(E),p=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],v=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(m.a)(e,p),s="".concat(d.a.error," ").concat(u||""),E="".concat(d.a.input," ").concat(c?d.a.errorInput:d.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:E},i)),c&&r.a.createElement("span",{className:s},c))},f=["autoFocus","onBlur","onEnter","spanProps"],h=["children","onDoubleClick","className"],g=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,l=e.spanProps,c=Object(m.a)(e,f),o=Object(n.useState)(!1),u=Object(s.a)(o,2),i=u[0],E=u[1],d=l||{},p=d.children,g=d.onDoubleClick,_=d.className,b=Object(m.a)(d,h),C="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",_);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(v,Object.assign({autoFocus:!0,onBlur:function(e){E(!1),t&&t(e)},onEnter:function(){E(!1),a&&a()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){E(!0),g&&g(e)},className:C},b),p||c.value))},_=a(26),b=a.n(_),C=["red","className"],O=function(e){var t=e.red,a=e.className,n=Object(m.a)(e,C),l="".concat(b.a.button," ").concat(t?b.a.red:b.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:l},n))};function k(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function j(e,t){var a=t,n=localStorage.getItem(e);return null!==n&&(a=JSON.parse(n)),a}k("test",{x:"A",y:1});j("test",{x:"",y:0});var N=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(g,{value:a,onChangeText:l,spanProps:{children:a?void 0:"enter text..."}})),r.a.createElement(O,{onClick:function(){k("editable-span-value",a)}},"save"),r.a.createElement(O,{onClick:function(){l(j("editable-span-value",""))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))},y=a(8),S=a.n(y);var x=function(e){return r.a.createElement("div",{className:S.a.message},r.a.createElement("div",{className:S.a.leftColumn},r.a.createElement("img",{src:e.avatar,alt:"ava"})),r.a.createElement("div",{className:S.a.rightColumn},r.a.createElement("div",{className:S.a.messageArea},r.a.createElement("div",{className:S.a.firstName},e.name),r.a.createElement("div",{className:S.a.messageData},r.a.createElement("div",{className:S.a.messageText},e.message),r.a.createElement("div",{className:S.a.messageTime},e.time)))))},w="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",T="Some Name",A="some text",I="22:00";var J=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement(x,{avatar:w,name:T,message:A,time:I}),r.a.createElement("hr",null),r.a.createElement("hr",null))};var M=function(e){return r.a.createElement("div",null,r.a.createElement("span",null,e.affair.name),r.a.createElement("span",null,e.affair.priority),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))},H=a(36),L=a.n(H);var F=function(e){var t=e.data.map((function(t){return r.a.createElement(M,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:L.a.buttons},t,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},P=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var W=function(){var e=Object(n.useState)(P),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),o=Object(s.a)(c,2),u=o[0],i=o[1],m=function(e,t){return"all"===t?e:"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):e.filter((function(e){return"high"===e.priority}))}(a,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(F,{data:m,setFilter:i,deleteAffairCallback:function(e){return l(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},B=a(5),D=a(27),G=a.n(D),U=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=e.users,u=l?G.a.error:G.a.inputClass;return r.a.createElement("div",null,r.a.createElement("input",{value:t,onChange:a,className:u}),r.a.createElement("span",{className:G.a.errorText},l),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",null,c),r.a.createElement("ul",null,o.map((function(e){return r.a.createElement("li",{key:e._id},e.name)}))))},Z=function(e){var t=e.users,a=e.addUserCallback,l=Object(n.useState)(""),c=Object(s.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)(""),m=Object(s.a)(i,2),E=m[0],d=m[1],p=t.length;return r.a.createElement(U,{name:o,setNameCallback:function(e){d(""),u(e.currentTarget.value)},addUser:function(){if(""!==o.trim()){var e=o.trim();alert("Hello  ".concat(e,"!")),a(e),u(""),d("")}else d("name is require")},error:E,totalUsers:p,users:t})},q=a(52);var z=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(Z,{users:a,addUserCallback:function(e){var t={_id:Object(q.a)(),name:e};l([t].concat(Object(B.a)(a)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},K=a(28),R=a.n(K),V=a(30),X=a.n(V),Q=["type","onChange","onChangeChecked","className","spanClassName","children"],Y=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(m.a)(e,Q),o="".concat(X.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:X.a.spanClassName},l))};var $=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1],c=a?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},u=Object(n.useState)(!1),i=Object(s.a)(u,2),m=i[0],E=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:R.a.column},r.a.createElement(v,{value:a,onChangeText:l,onEnter:o,error:c}),r.a.createElement(v,{className:"".concat(R.a.blue," ").concat(R.a.green)}),r.a.createElement(O,null,"default"),r.a.createElement(O,{red:!0,onClick:o},"delete "),r.a.createElement(O,{disabled:!0},"disabled"),r.a.createElement(Y,{checked:m,onChangeChecked:E},"some text "),r.a.createElement(Y,{checked:m,onChange:function(e){return E(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ee=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"PreJunior"),r.a.createElement(J,null),r.a.createElement(W,null),r.a.createElement(z,null),r.a.createElement($,null),r.a.createElement(N,null))},te=a(17),ae=a(32),ne={isLoading:!1},re=function(e){return{type:"CHANGE_LOADING",isLoading:e}};var le=function(){var e=Object(te.c)((function(e){return e.loading.isLoading})),t=Object(te.b)();return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10",e?r.a.createElement("div",null,"\u043a\u0440\u0443\u0442\u0438\u043b\u043a\u0430..."):r.a.createElement("div",null,r.a.createElement(O,{onClick:function(){t(re(!0)),setTimeout((function(){t(re(!1))}),2e3)}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))},ce=["options","onChange","onChangeOption"],oe=function(e){var t=e.options,a=e.onChange,n=e.onChangeOption,l=Object(m.a)(e,ce),c=t?t.map((function(e,t){return r.a.createElement("option",{key:e+"-"+t,value:e},e)})):[];return r.a.createElement("select",Object.assign({onChange:function(e){a&&a(e),n&&n(e.currentTarget.value)}},l),c)},ue=["type","name","options","value","onChange","onChangeOption"],ie=function(e){e.type;var t=e.name,a=e.options,n=e.value,l=e.onChange,c=e.onChangeOption,o=Object(m.a)(e,ue),u=function(e){l&&l(e),c&&c(e.currentTarget.value)},i=a?a.map((function(e,a){return r.a.createElement("label",{key:t+"-"+a},r.a.createElement("input",Object.assign({type:"radio",name:t,checked:e===n,value:e,onChange:u},o)),e)})):[];return r.a.createElement(r.a.Fragment,null,i)},se=["x","y","z"];var me=function(){var e=Object(n.useState)(se[1]),t=Object(s.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(oe,{options:se,value:a,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(ie,{name:"radio",options:se,value:a,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},Ee=function(e,t){switch(t.type){case"sort":var a=Object(B.a)(e).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));return"up"===t.payload?a:a.reverse();case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},de=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var pe=function(){var e=Object(n.useState)(de),t=Object(s.a)(e,2),a=t[0],l=t[1],c=a.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("span",null,e.name),e.age)}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(O,{onClick:function(){return l(Ee(de,{type:"sort",payload:"up"}))}},"sort up"))),r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(O,{onClick:function(){return l(Ee(de,{type:"sort",payload:"down"}))}},"sort down"))),r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(O,{onClick:function(){return l(Ee(de,{type:"check",payload:18}))}},"check 18"))),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ve=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(),o=Object(s.a)(c,2),u=o[0],i=o[1],m=Object(n.useState)(!1),E=Object(s.a)(m,2),d=E[0],p=E[1],v=function(){clearInterval(a)},f=(null===u||void 0===u?void 0:u.toLocaleTimeString())||r.a.createElement("br",null),h=(null===u||void 0===u?void 0:u.toLocaleDateString())||r.a.createElement("br",null);return r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){p(!0)},onMouseLeave:function(){p(!1)}},f),d?r.a.createElement("div",null,h):r.a.createElement("br",null),r.a.createElement(O,{onClick:function(){v();var e=window.setInterval((function(){i(new Date)}),1e3);l(e)}},"start"),r.a.createElement(O,{onClick:v},"stop"))};var fe=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(ve,null),r.a.createElement("hr",null),r.a.createElement("hr",null))};var he=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Junior"),r.a.createElement(me,null),r.a.createElement(pe,null),r.a.createElement(fe,null),r.a.createElement(le,null))};var ge=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Junior+"))},_e="/pre-junior",be="/junior",Ce="/junior_plus";var Oe=function(){return r.a.createElement("div",null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:_e,element:r.a.createElement(ee,null)}),r.a.createElement(i.a,{path:be,element:r.a.createElement(he,null)}),r.a.createElement(i.a,{path:Ce,element:r.a.createElement(ge,null)})))},ke=a(10),je=a(20),Ne=a.n(je);var ye=function(){return r.a.createElement("div",{className:Ne.a.header},r.a.createElement("div",{className:Ne.a.nav_item},r.a.createElement(ke.b,{to:_e},"Pre-Junior")),r.a.createElement("div",{className:Ne.a.nav_item},r.a.createElement(ke.b,{to:be},"Junior")),r.a.createElement("div",{className:Ne.a.nav_item},r.a.createElement(ke.b,{to:Ce},"Junior-Plus")))};var Se=function(){return r.a.createElement("div",null,r.a.createElement(ke.a,null,r.a.createElement(ye,null),r.a.createElement(Oe,null)))};var xe=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(Se,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var we=a(33),Te=Object(we.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_LOADING":return Object(ae.a)(Object(ae.a)({},e),{},{isLoading:t.isLoading});default:return e}}}),Ae=Object(we.b)(Te),Ie=Ae;window.store=Ae,c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(te.a,{store:Ie},r.a.createElement(xe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports={message:"Message_message__xtZJy",leftColumn:"Message_leftColumn__32tCU",rightColumn:"Message_rightColumn__2Oe0J",messageArea:"Message_messageArea__N2ZQV",firstName:"Message_firstName__3PMfc",messageData:"Message_messageData__1Ibso",messageText:"Message_messageText__1Apa5",messageTime:"Message_messageTime__38I7a"}}},[[39,1,2]]]);
//# sourceMappingURL=main.86d4c3ad.chunk.js.map