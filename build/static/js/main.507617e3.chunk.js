(this["webpackJsonptheme-switcher"]=this["webpackJsonptheme-switcher"]||[]).push([[0],{13:function(e,n,t){e.exports=t(21)},21:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),c=t(8),a=t.n(c),i=t(4),l=t(1),u=function(e,n){var t=Object(r.useState)((function(){var t=localStorage.getItem(e);return t?JSON.parse(t):n})),o=Object(i.a)(t,2),c=o[0],a=o[1];return Object(r.useEffect)((function(){localStorage.setItem(e,JSON.stringify(c))}),[e,c]),[c,a]},s=t(2);function d(){var e=Object(s.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  body{\n    background: ",";\n    color: ",";\n    font-size: 14px;\n    font-family: sans-serif;\n  }\n"]);return d=function(){return e},e}var m=Object(l.c)(d(),(function(e){return e.theme.colors.backgound}),(function(e){return e.theme.colors.text})),f=t(12),h=t.n(f);function g(){var e=Object(s.a)(["\n  background: ",";\n  color: ",";\n\n  border: 1px solid ",";\n\n  width: 850px;\n  height: 80px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  border-radius: 5px;\n  margin-bottom: 20px;\n\n  span {\n    font-size: 30px;\n  }\n"]);return g=function(){return e},e}function b(){var e=Object(s.a)(["\n  width: 100vw;\n  height: 100vh;\n\n  padding: 32px;\n  color: #FFF;\n\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n"]);return b=function(){return e},e}var p=l.d.div(b()),x=l.d.div(g(),(function(e){return e.theme.colors.backgound}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),v=function(e){var n=e.toggleTheme,t=Object(r.useContext)(l.a),c=t.colors,a=t.title;return o.a.createElement(p,null,o.a.createElement(x,null,o.a.createElement("span",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit")),o.a.createElement(h.a,{onChange:n,checked:"dark"===a,checkedIcon:!1,uncheckedIcon:!1,width:70,height:30,handleDiameter:20,offColor:c.secondary,onColor:c.secondary}))},y={title:"light",colors:{primary:"#7353ba",secondary:"#2F195F",backgound:"#f5f5f5",text:"#000"}},k={title:"dark",colors:{primary:"#2F195F",secondary:"#7353ba",backgound:"#0f1020",text:"#FFF"}};var E=function(){var e=u("theme",y),n=Object(i.a)(e,2),t=n[0],r=n[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.b,{theme:t},o.a.createElement(m,null),o.a.createElement(v,{toggleTheme:function(){r("light"===t.title?k:y)}})))};a.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.507617e3.chunk.js.map