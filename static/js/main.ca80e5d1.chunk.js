(this["webpackJsonpcantor-react"]=this["webpackJsonpcantor-react"]||[]).push([[0],{12:function(n,e,t){n.exports=t(20)},17:function(n,e,t){},20:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(8),c=t.n(o),u=t(1),l=(t(17),t(3)),i=t(2);function f(){var n=Object(i.a)(["\n  font-size: 20px;\n  margin: 50px;\n  text-align: center;\n  align-self: center;\n"]);return f=function(){return n},n}function s(){var n=Object(i.a)(["\n  font-size: 30px;\n  background-color: ",";\n  padding: 5px 15px;\n  border: solid 4px ",";\n  border-radius: 10px;\n"]);return s=function(){return n},n}function m(){var n=Object(i.a)(["\n  border: solid 4px ",";\n  background-color: peachpuff;\n  border-radius: 10px;\n"]);return m=function(){return n},n}function p(){var n=Object(i.a)(["\n  display: inline-block;\n  background-color: ",";\n  text-transform: uppercase;\n  padding: 10px;\n  border: solid 3px ",";\n  border-radius: 10px;\n  margin-top: 20px;\n\n  &:hover {\n    cursor: pointer;\n    filter: brightness(110%);\n  }\n\n  &:active {\n    filter: brightness(120%);\n  }\n"]);return p=function(){return n},n}function d(){var n=Object(i.a)(["\n  padding: 5px;\n  border-radius: 10px;\n  border: solid 3px ",";\n"]);return d=function(){return n},n}function b(){var n=Object(i.a)(["\n  padding: 5px;\n  border-radius: 10px;\n  border: solid 2px ",";\n"]);return b=function(){return n},n}function g(){var n=Object(i.a)(["\n  font-size: 10px;\n  color: ",";\n"]);return g=function(){return n},n}function x(){var n=Object(i.a)(["\n  display: inline-block;\n  text-transform: uppercase;\n  padding: 5px 10px;\n  font-size: 20px;\n"]);return x=function(){return n},n}function v(){var n=Object(i.a)(["\n  font-size: 15px;\n  color: ",";\n"]);return v=function(){return n},n}function h(){var n=Object(i.a)(["\n  margin: 10px;\n  text-align: center;\n  align-self: center;\n  width: 100%;\n"]);return h=function(){return n},n}var E=u.b.form(h()),j=u.b.p(v(),(function(n){return n.theme.color.tundora})),k=u.b.span(x()),y=u.b.span(g(),(function(n){return n.theme.color.tundora})),w=u.b.select(b(),(function(n){return n.theme.color.gray})),O=u.b.input(d(),(function(n){return n.theme.color.gray})),z=u.b.button(p(),(function(n){return n.theme.color.tacha}),(function(n){return n.theme.color.black})),S=u.b.fieldset(m(),(function(n){return n.theme.color.black})),B=u.b.legend(s(),(function(n){return n.theme.color.tacha}),(function(n){return n.theme.color.black})),A=u.b.div(f());function C(){var n=Object(i.a)(["\n  font-size: 30px;\n  margin: 10px;\n"]);return C=function(){return n},n}var F=u.b.p(C()),W=function(n){var e=n.result;return a.a.createElement(F,null,void 0!==e&&a.a.createElement(a.a.Fragment,null,e.sourceAmount.toFixed(2),"\xa0",e.currencyHave,"\xa0= ","",e.targetAmount.toFixed(2),"\xa0",e.currencyWant,"\xa0"))},D=function(){var n=Object(r.useState)({rates:"",date:""}),e=Object(l.a)(n,2),t=e[0],a=e[1];return Object(r.useEffect)((function(){setTimeout((function(){fetch("https://api.exchangeratesapi.io/latest?base=PLN").then((function(n){if(!n.ok)throw new Error(n.statusText);return n})).then((function(n){return n.json()})).then((function(n){var e=n.rates,t=n.date;a({rates:e,date:t})})).catch((function(n){return console.error(n)}))}),1e3)}),[]),t},P=function(n){var e=n.calculateResult,t=n.result,o=D().rates,c=Object.keys(D().rates),u=Object(r.useState)(""),i=Object(l.a)(u,2),f=i[0],s=i[1],m=Object(r.useState)(c[1]),p=Object(l.a)(m,2),d=p[0],b=p[1],g=Object(r.useState)(c[1]),x=Object(l.a)(g,2),v=x[0],h=x[1];return a.a.createElement(E,{onSubmit:function(n){n.preventDefault(),e(d,v,f)}},a.a.createElement(S,null,a.a.createElement(B,null,"Wymiana waluty"),o?a.a.createElement(a.a.Fragment,null,a.a.createElement(j,null,"Pole oznaczone * musi zosta\u0107 wype\u0142nione"),a.a.createElement("p",null,a.a.createElement("label",null,a.a.createElement(k,null,"wymiana z:",a.a.createElement(y,null,"(wybierz walut\u0119)")),a.a.createElement(w,{value:d,onChange:function(n){var e=n.target;return b(e.value)},name:"currencyHave"},c.map((function(n){return a.a.createElement("option",{key:n,value:n},n)}))))),a.a.createElement("p",null,a.a.createElement("label",null,a.a.createElement(k,null,"wymiana na:",a.a.createElement(y,null,"(wybierz walut\u0119)")),a.a.createElement(w,{value:v,onChange:function(n){var e=n.target;return h(e.value)},name:"currencyWant"},c.map((function(n){return a.a.createElement("option",{key:n,value:n},n)}))))),a.a.createElement("p",null,a.a.createElement("label",null,a.a.createElement(k,null,"Podaj kwot\u0119*: "),a.a.createElement(O,{value:f,onChange:function(n){var e=n.target;return s(e.value)},name:"value",type:"number",required:!0,step:"0.01"}))),a.a.createElement(z,null,"przelicz"),a.a.createElement(W,{result:t})):a.a.createElement(A,null,"error"===o?"Przepraszamy wystapi\u0142 b\u0142\u0105d, chyba masz problem z internetem, je\u015bli nie - spr\xf3b\xf3j p\xf3\u017aniej":"Poczekaj chwilk\u0119, \u0142adujemy teraz dane z Europejskiego Banku Centralnego ")))};function H(){var n=Object(i.a)(["\n  margin: 10px;\n  margin-bottom: 80px;\n  padding: 20px 0;\n  font-size: 40px;\n  text-transform: uppercase;\n  text-align: center;\n  letter-spacing: 3px;\n  background-color: ",";\n  border-radius: 10px;\n"]);return H=function(){return n},n}var I=u.b.h1(H(),(function(n){return n.theme.color.luxorGold})),M=function(n){var e=n.title;return a.a.createElement("header",{className:"header"},a.a.createElement(I,null,e))};function G(){var n=Object(i.a)(["\n  font-size: 15px;\n  color: ",";\n"]);return G=function(){return n},n}function J(){var n=Object(i.a)(["\n  text-decoration: none;\n  color: ",";\n\n  &:hover {\n    cursor: pointer;\n    color: ",";\n  }\n  &:active {\n    color: ",";\n  }\n"]);return J=function(){return n},n}function L(){var n=Object(i.a)(["\n  padding: 10px;\n  text-align: center;\n  font-size: 20px;\n  background-color: peachpuff;\n  margin: 10px;\n  border: 3px solid ",";\n  border-radius: 10px;\n"]);return L=function(){return n},n}var N=u.b.p(L(),(function(n){return n.theme.color.black})),R=u.b.a(J(),(function(n){return n.theme.color.black}),(function(n){return n.theme.color.eperor}),(function(n){return n.theme.color.boulder})),T=u.b.span(G(),(function(n){return n.theme.color.gray})),q=function(){return a.a.createElement("section",null,a.a.createElement(N,null,"Kursy walut pochodz\u0105 ze strony :",a.a.createElement(R,{href:"http://exchangeratesapi.io/",target:"_blank",rel:"noreferrer noopener"}," ",'"exchangeratesapi.io"')," ",a.a.createElement(T,null," (otworzy si\u0119 w nowej karcie)")," ; s\u0105 publikowane przez Europejski Bank Centralny z dnia: \xa0",D().date))};function K(){var n=Object(i.a)(["\n  display: flex;\n  align-self: start;\n  flex-direction: column;\n"]);return K=function(){return n},n}var $=u.b.main(K());function _(){var n=Object(i.a)(["\n  font-family: monospace;\n  font-size: 12px;\n  align-self: flex-end;\n  padding: 10px;\n  margin: 10px;\n  display: inline-block;\n  background-color: ",";\n\n  @media (max-width: ","px) {\n    text-align: center;\n  }\n"]);return _=function(){return n},n}var Q=u.b.p(_(),(function(n){return n.theme.color.brighterBlack}),(function(n){return n.theme.breakpoint.mobileMax})),U=function(){var n=function(){var n=Object(r.useState)(new Date),e=Object(l.a)(n,2),t=e[0],a=e[1];return Object(r.useEffect)((function(){var n=setInterval((function(){a(new Date)}),1e3);return function(){clearInterval(n)}}),[]),t}();return a.a.createElement(Q,null,"Aktualna data i godzina: ",function(n){return n.toLocaleString(void 0,{weekday:"long",hour:"2-digit",minute:"2-digit",second:"2-digit",day:"numeric",month:"long"})}(n))},V=function(n){var e=n.children;return a.a.createElement($,null,a.a.createElement(U,null),e)};function X(){var n=Object(i.a)(["\n  max-width: 1000px;\n  margin: 0 auto;\n"]);return X=function(){return n},n}var Y=u.b.div(X()),Z=function(n){var e=n.children;return a.a.createElement(Y,null,e)};var nn=function(){var n=Object(r.useState)(),e=Object(l.a)(n,2),t=e[0],o=e[1],c=D().rates;return a.a.createElement(Z,null,a.a.createElement(M,{title:"kalkulator walutowy"}),a.a.createElement(V,null,a.a.createElement(P,{result:t,calculateResult:function(n,e,t){o({sourceAmount:+t,currencyHave:n,targetAmount:t*c[e]/c[n],currencyWant:e})}}),a.a.createElement(q,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(u.a,{theme:{color:{luxorGold:"#AC8839",brighterBlack:"#dddddd",frangipani:"#FFDAB9",tundora:"#444444",tacha:"#D4B268",black:"#000000",eperor:"#555555",boulder:"#777777",gray:"#888888"},breakpoint:{mobileMax:414}}},a.a.createElement(nn,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.ca80e5d1.chunk.js.map