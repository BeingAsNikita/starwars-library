(this["webpackJsonpstarwars-library"]=this["webpackJsonpstarwars-library"]||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/logo.46b9ea74.png"},28:function(e,t,a){e.exports=a.p+"static/media/preloader.32560bd5.svg"},29:function(e,t,a){e.exports=a.p+"static/media/gender.65d3aac9.svg"},30:function(e,t,a){e.exports=a.p+"static/media/homeword.5102a4cb.svg"},31:function(e,t,a){e.exports=a.p+"static/media/species.772f0da5.svg"},32:function(e,t,a){e.exports=a.p+"static/media/films.33cdf1af.svg"},33:function(e,t,a){e.exports=a.p+"static/media/birth_year.63f0c901.svg"},35:function(e,t,a){e.exports=a(73)},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),s=a.n(c),i=(a(40),a(7)),l=a(8),o=a(12),u=a(10),p=(a(41),a(42),a(26)),m=a.n(p),d=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__logo-wrap"},r.a.createElement("img",{src:m.a,alt:"logo"})))},f=(a(43),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",null,"STAR WARS CHARACTER Encyclopedia, 2020"))}),h=a(9),E=a(2),g=a.n(E),b=a(4),v=a(1),O=a(16),_=O.create({baseURL:"https://swapi.dev/api/"}),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return _.get("people/?page=".concat(e))},y=function(e){var t=e.replace(/http/gi,"https");try{return O.get(t)}catch(a){console.log(a)}},j=function(e){try{return _.get("people/?search=".concat(e))}catch(t){console.log(t)}},w={data:[],maxPages:null,isLoading:!0,isSearching:!1,films:null,modalIsOpen:!1},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PEOPLES_SUCCESS":return Object(v.a)(Object(v.a)({},e),{},{data:e.data.concat(t.payload.peoples.filter((function(t){return!e.data.some((function(e){return t.name===e.name}))}))),maxPages:Math.ceil(t.payload.total/10),films:t.payload.films});case"IS_LOADING":return Object(v.a)(Object(v.a)({},e),{},{isLoading:!1});case"GET_DATA_FROM_SEARCHING":return Object(v.a)(Object(v.a)({},e),{},{data:t.payload});case"IS_SEARCHING_TOGGLE":return Object(v.a)(Object(v.a)({},e),{},{isSearching:!e.isSearching});default:return e}},L=function(){var e=Object(b.a)(g.a.mark((function e(t,a){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((n=t.map((function(e){return e.replace(/http/gi,"https")}))).length>0)){e.next=5;break}return e.next=4,Promise.all(n.map(function(){var e=Object(b.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(e){return e.map((function(e){return e.data[a]}))}));case 4:return e.abrupt("return",e.sent);case 5:return e.abrupt("return","Unknown");case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),I={data:null,isShow:!1,isLoading:!1},T=function(e){return{type:"SET_MODAL_DATA",payload:e}},k=function(e){return{type:"GET_SPECIES",payload:e}},D=function(e){return{type:"GET_FILMS",payload:e}},C=function(e){return{type:"GET_HOMEWOLRD",payload:e}},x=function(e){return function(){var t=Object(b.a)(g.a.mark((function t(a){var n,r,c,s,i,l;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L(e.species,"name");case 2:return n=t.sent,r=y(e.homeworld),c=L(e.films,"title"),t.next=7,n;case 7:return s=t.sent,t.next=10,r;case 10:return i=t.sent,t.next=13,c;case 13:l=t.sent,a(k(s)),a(C(i.data.name)),a(D(l)),a({type:"IS_LOADING"});case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MODAL_DATA":return Object(v.a)(Object(v.a)({},e),{},{data:t.payload,isShow:!0});case"HIDE_MODAL":return Object(v.a)(Object(v.a)({},e),{},{isShow:!1,isLoading:!1});case"GET_SPECIES":return Object(v.a)(Object(v.a)({},e),{},{data:Object(v.a)(Object(v.a)({},e.data),{},{species:t.payload})});case"GET_FILMS":return Object(v.a)(Object(v.a)({},e),{},{data:Object(v.a)(Object(v.a)({},e.data),{},{films:t.payload})});case"GET_HOMEWOLRD":return Object(v.a)(Object(v.a)({},e),{},{data:Object(v.a)(Object(v.a)({},e.data),{},{homeword:t.payload})});case"IS_LOADING":return Object(v.a)(Object(v.a)({},e),{},{isLoading:!0});default:return e}},M=(a(68),a(11)),G=(a(69),function(e){var t=e.data,a=e.setModalData,c=(e.setSpeciesThunk,Object(n.useState)("unknown")),s=Object(M.a)(c,2),i=s[0],l=s[1];return Object(n.useEffect)((function(){t.species.length>0&&y(t.species[0]).then((function(e){l(e.data.name)}))}),[t]),r.a.createElement("li",{className:"card",onClick:function(){a(t),document.querySelector("body").classList.add("scrolling-stop")}},r.a.createElement("span",{className:"card__avatar"},t.name[0]),r.a.createElement("span",{className:"card__name"},t.name),r.a.createElement("span",{className:"card__species"},i))}),P=function(e){var t=e.data,a=e.isLoading,n=e.setModalData,c=e.setSpeciesThunk;return r.a.createElement("ul",{className:"content__card-list"},a?"Please wait...":t.map((function(e){return r.a.createElement(G,{key:e.name,setModalData:n,setSpeciesThunk:c,data:e})})))};a(70);var R=function(e){var t=Object(n.useState)(""),a=Object(M.a)(t,2),c=a[0],s=a[1],i=function(e,t){var a=Object(n.useState)(e),r=Object(M.a)(a,2),c=r[0],s=r[1];return Object(n.useEffect)((function(){var a=setTimeout((function(){s(e)}),t);return function(){clearTimeout(a)}}),[e,t]),c}(c,500);return Object(n.useEffect)((function(){i.length>0&&(console.log(i.length),e.getDataFromSearching(i))}),[i]),r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{className:"search",type:"text",placeholder:"Search by name",onFocus:function(){e.isSearching()},onKeyPress:function(e){13===e.keyCode&&s(e.target.value)},onChange:function(e){s(e.target.value)},onBlur:function(){e.getPeoples(),e.isSearching()}}))},H=a(28),F=a.n(H),U=(a(71),function(e){return r.a.createElement("div",{className:"preloader__wrapper"},r.a.createElement("div",{className:"preloader"},r.a.createElement("div",{className:"starship"},r.a.createElement("img",{src:F.a}),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))))}),z={initialized:!1},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(v.a)(Object(v.a)({},e),{},{initialized:!0});default:return e}},W=function(e){return{page:e.page+1}},q=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={page:1},e.handleScroll=function(t){t.target.body.getBoundingClientRect().bottom<700&&(console.log(t.target.body.getBoundingClientRect().bottom),e.handleChangePage())},e.handleChangePage=function(){e.props.maxPages>e.state.page&&(e.setState(W),e.props.getPeoples(e.state.page))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.isSearching||(window.addEventListener("scroll",this.handleScroll),this.props.getPeoples(this.state.page)),this.timerHandle=setTimeout((function(){e.props.setInitializedSuccess()}),3e3)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll),this.timerHandle&&(clearTimeout(this.timerHandle),this.timerHandle=0)}},{key:"render",value:function(){return r.a.createElement("main",{className:"content"},!this.props.isLoading&&this.props.initialized?r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{getDataFromSearching:this.props.getDataFromSearching,getPeoples:this.props.getPeoples,isSearching:this.props.isSearchingToggle}),r.a.createElement(P,{data:this.props.data,isLoading:this.props.isLoading,setModalData:this.props.setModalData,setSpeciesThunk:this.props.setSpeciesThunk})):r.a.createElement(U,null))}}]),a}(r.a.Component),J=Object(h.b)((function(e){return{initialized:e.app.initialized,data:e.peoples.data,isLoading:e.peoples.isLoading,maxPages:e.peoples.maxPages,isSearching:e.peoples.isSearching}}),{setInitializedSuccess:function(){return{type:"INITIALIZED_SUCCESS"}},getPeoples:function(e){return function(){var t=Object(b.a)(g.a.mark((function t(a){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(e);case 2:n=t.sent,a((r=n.data.results,c=n.data.count,{type:"GET_PEOPLES_SUCCESS",payload:{peoples:r,total:c}})),a({type:"IS_LOADING"});case 5:case"end":return t.stop()}var r,c}),t)})));return function(e){return t.apply(this,arguments)}}()},setModalData:function(e){return function(){var t=Object(b.a)(g.a.mark((function t(a){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a(T(e)),a(x(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setSpeciesThunk:x,getDataFromSearching:function(e){return function(){var t=Object(b.a)(g.a.mark((function t(a){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e);case 2:n=t.sent,a({type:"GET_DATA_FROM_SEARCHING",payload:n.data.results}),a({type:"IS_LOADING"});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},isSearchingToggle:function(){return{type:"IS_SEARCHING_TOGGLE"}}})(q),X=(a(72),document.getElementById("modal-root")),Z=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).el=document.createElement("div"),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){X.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){X.removeChild(this.el)}},{key:"render",value:function(){var e=this.props.children;return s.a.createPortal(e,this.el)}}]),a}(r.a.Component),K=a(29),V=a.n(K),Q=a(30),Y=a.n(Q),$=a(31),ee=a.n($),te=a(32),ae=a.n(te),ne=a(33),re=a.n(ne),ce=function(e){var t=e.data,a=e.closeModal;return r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("div",{className:"card__avatar"},t.name[0]),r.a.createElement("p",{className:"card__name"},t.name),r.a.createElement("button",{className:"modal_close",onClick:a},r.a.createElement("svg",{width:"14",height:"14",viewBox:"0 0 14 14"},r.a.createElement("path",{d:"M1 13L13 1M13 13L1 1",stroke:"white",strokeWidth:"2",strokeLinecap:"round"})))),r.a.createElement("ul",{className:"modal-footer"},r.a.createElement("li",{className:"modal__item"},r.a.createElement("div",{className:"modal__item-title"},r.a.createElement("img",{src:re.a,alt:"icon"}),r.a.createElement("span",null,"Birth year ")),r.a.createElement("span",null,t.birth_year)),r.a.createElement("li",{className:"modal__item"},r.a.createElement("div",{className:"modal__item-title"},r.a.createElement("img",{src:ee.a,alt:"icon"}),r.a.createElement("span",null,"species")),r.a.createElement("span",null,t.species?t.species:"loading...")),r.a.createElement("li",{className:"modal__item"},r.a.createElement("div",{className:"modal__item-title"},r.a.createElement("img",{src:V.a,alt:"icon"}),r.a.createElement("span",null,"Gender ")),r.a.createElement("span",null,t.gender)),r.a.createElement("li",{className:"modal__item"},r.a.createElement("div",{className:"modal__item-title"},r.a.createElement("img",{src:Y.a,alt:"icon"}),r.a.createElement("span",null,"Homeworld ")),r.a.createElement("span",null,t.homeworld?t.homeword:"loading...")),r.a.createElement("li",{className:"modal__item"},r.a.createElement("div",{className:"modal__item-title"},r.a.createElement("img",{src:ae.a,alt:"icon"}),r.a.createElement("span",null,"Films ")),r.a.createElement("span",null,t.films?t.films.map((function(e){return r.a.createElement("span",{key:e},e)})):"loading..."))))},se=function(e){var t=e.data,a=e.isShow,n=e.hideModal,c=e.isLoading,s=function(e){(e.target.classList.contains("modal-wrapper")||e.target.classList.contains("modal_close"))&&(n(),document.querySelector("body").classList.remove("scrolling-stop"))};return a&&r.a.createElement(Z,null,r.a.createElement("div",{className:"modal-wrapper",onClick:s},c?r.a.createElement(ce,{data:t,closeModal:s}):r.a.createElement(U,null)))},ie=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"+(this.props.modal.isShow?" blur":"")},r.a.createElement(d,null),r.a.createElement(J,null),r.a.createElement(f,null),this.props.modal.data&&r.a.createElement(se,Object.assign({},this.props.modal,{hideModal:this.props.hideModal})))}}]),a}(r.a.Component),le=Object(h.b)((function(e){return{peoples:e.peoples,modal:e.modal}}),{hideModal:function(){return{type:"HIDE_MODAL"}}})(ie),oe=a(5),ue=a(34),pe=Object(oe.c)({app:B,peoples:N,modal:A}),me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||oe.d,de=Object(oe.e)(pe,me(Object(oe.a)(ue.a))),fe=document.getElementById("root");s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h.a,{store:de},r.a.createElement(le,null))),fe)}},[[35,1,2]]]);
//# sourceMappingURL=main.64d9318a.chunk.js.map