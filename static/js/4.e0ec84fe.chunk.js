(this["webpackJsonptest-blog"]=this["webpackJsonptest-blog"]||[]).push([[4],{374:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n(0),o=n.n(r),c=n(20),i=n(19),l=n(72),u=n(21),s=n(7),m=n(8),p=n.n(m),d=n(59),f=(n(16),n(403)),h=n(3),b=(n(64),n(102));n(58);function _(){var e=Object(a.a)(["\n    &.default,\n    .dropzone__container {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: ",";\n      height: ",";\n    }\n    &.default {\n      padding: 20px;\n      background-color: #fff;\n      border: 1px solid #333;\n    }\n    .dropzone__container {\n      outline: none;\n    }\n    .dropzoneView {\n      border: 1px solid #333;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      height: 100%;\n    }\n    .dropzoneView__picture_box {\n      text-align: center;\n      .dropzoneView__picture_img {\n      }\n      .dropzoneView__picture_text {\n        margin-top: 15px;\n      }\n    }\n  "]);return _=function(){return e},e}var g={Dropzone:h.c.div(_(),(function(e){var t=e.width;return t?"".concat(t,"px"):"100%"}),(function(e){var t=e.height;return t?"".concat(t,"px"):"100%"}))},E=function(e){var t=e.width,n=e.height,a=e.styles,c=e.onSetVisible,i=e.apiRequest,l=Object(r.useState)([]),m=Object(u.a)(l,2),h=m[0],_=m[1],E=Object(r.useState)(!1),v=Object(u.a)(E,2),x=v[0],w=v[1],z=Object(r.useCallback)(function(){var e=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.forEach((function(e){var t=new FileReader;t.onabort=function(){return console.log("file reading was aborted")},t.onerror=function(){return console.log("file reading has failed")},t.onload=function(e){}})),_(h.concat(t)),w(!0);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),j=Object(f.a)({onDrop:z}),O=j.getRootProps,D=j.getInputProps,N=(j.isDragActive,Object(s.a)(Object(s.a)({},O()),{},{maxsize:100,onDragLeave:function(){return c(!1)}})),T=Object(s.a)({},D());return Object(r.useEffect)((function(){console.log(x,"isRequest"),x&&(i(),c(!1))}),[x]),o.a.createElement(g.Dropzone,{"data-component-name":"Dropzone",style:a,width:t,height:n,className:!a&&"default"},o.a.createElement("div",{className:"dropzoneView"},o.a.createElement("div",{className:"dropzoneView__picture_box"},o.a.createElement("div",{className:"dropzoneView__picture_img"},o.a.createElement("img",{src:b.b,alt:"picture"})),o.a.createElement("div",{className:"dropzoneView__picture_text"},"Drag&Drop File here"))),o.a.createElement("div",Object.assign({},N,{className:"dropzone__container"}),o.a.createElement("input",T)))};function v(){var e=Object(a.a)(["\n    width: 100%;\n    height: 100%;\n    border: 1px solid #bbb;\n    padding: 50px;\n  "]);return v=function(){return e},e}function x(){var e=Object(a.a)(["\n    margin-top: 100px;\n    position: relative;\n    width: ",";\n    height: ",";\n  "]);return x=function(){return e},e}function w(){return o.a.createElement(O.DropzoneChildren,{className:"content__container"},"Test content UI")}var z=function(){return new Promise((function(e,t){setTimeout((function(){console.log("apiRequest"),e(5)}),5e3)}))};function j(e){var t=e.className,n=e.children,a=e.width,c=e.height,i=(e.apiRequest,Object(r.useState)(!1)),l=Object(u.a)(i,2),s=l[0],m=l[1],p=function(e){m(e)};return Object(r.useEffect)((function(){console.log(n,"children")}),[]),o.a.createElement(O.DropzoneWrapper,{"data-component-name":"DropzoneWrapper",onDragEnter:function(){return p(!0)},className:t,width:!t&&a,height:!t&&c},n,s&&o.a.createElement(E,{onSetVisible:p,apiRequest:z}))}var O={DropzoneWrapper:h.c.div(x(),(function(e){var t=e.width;return t?"".concat(t,"px"):"100%"}),(function(e){var t=e.height;return t?"".concat(t,"px"):"100%"})),DropzoneChildren:h.c.div(v())},D=function(){return o.a.createElement(j,{width:800,height:300},o.a.createElement(w,null))},N=(n(73),n(45));n(42);function T(){var e=Object(a.a)(["\n    padding: 10px;\n    .test__menu_list {\n      margin-bottom: 10px;\n      .test__menu_item {\n        display: inline-flex;\n        &:not(:first-child) {\n          margin-left: 10px;\n        }\n      }\n    }\n  "]);return T=function(){return e},e}var V={Test:h.c.div(T())};t.default=function(e){var t=e.match;return console.log(t.url,"match.url"),o.a.createElement(N.a,{title:"Test"},o.a.createElement(V.Test,{"data-component-name":"Test"},o.a.createElement("ul",{className:"test__menu_list"},o.a.createElement("li",{className:"test__menu_item"},o.a.createElement(c.b,{to:"".concat(t.url)},"TestList")),o.a.createElement("li",{className:"test__menu_item"},o.a.createElement(c.b,{to:"".concat(t.url,"/counter")},"Counter")),o.a.createElement("li",{className:"test__menu_item"},o.a.createElement(c.b,{to:"".concat(t.url,"/todo")},"Todo")),o.a.createElement("li",{className:"test__menu_item"},o.a.createElement(c.b,{to:"".concat(t.url,"/delayedToggle")},"DelayedToggle")),o.a.createElement("li",{className:"test__menu_item"},o.a.createElement(c.b,{to:"".concat(t.url,"/userProfile")},"UserProfile")),o.a.createElement("li",{className:"test__menu_item"},o.a.createElement(c.b,{to:"".concat(t.url,"/dropzone")},"Dropzone"))),o.a.createElement(i.d,null,o.a.createElement(i.b,{exact:!0,path:"".concat(t.url),component:l.i}),o.a.createElement(i.b,{exact:!0,path:"".concat(t.url,"/@:id"),component:l.h}),o.a.createElement(i.b,{exact:!0,path:"".concat(t.url,"/counter"),component:l.c}),o.a.createElement(i.b,{exact:!0,path:"".concat(t.url,"/todo"),component:l.j}),o.a.createElement(i.b,{exact:!0,path:"".concat(t.url,"/delayedToggle"),component:l.d}),o.a.createElement(i.b,{exact:!0,path:"".concat(t.url,"/userProfile"),component:l.l}),o.a.createElement(i.b,{exact:!0,path:"".concat(t.url,"/dropzone"),component:D}),o.a.createElement(i.b,{component:function(){return o.a.createElement(i.a,{to:"/error/404"})}}))))}}}]);
//# sourceMappingURL=4.e0ec84fe.chunk.js.map