(this["webpackJsonpstarwars-library"]=this["webpackJsonpstarwars-library"]||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/logo.46b9ea74.png"},33:function(e,t,a){e.exports=a.p+"static/media/preloader.32560bd5.svg"},34:function(e,t,a){e.exports=a.p+"static/media/gender.65d3aac9.svg"},35:function(e,t,a){e.exports=a.p+"static/media/homeword.5102a4cb.svg"},36:function(e,t,a){e.exports=a.p+"static/media/species.772f0da5.svg"},37:function(e,t,a){e.exports=a.p+"static/media/films.33cdf1af.svg"},38:function(e,t,a){e.exports=a.p+"static/media/birth_year.63f0c901.svg"},42:function(e,t,a){e.exports=a(80)},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),s=a.n(c),l=(a(47),a(10)),i=a(11),o=a(15),u=a(14),m=(a(48),a(49),a(31)),p=a.n(m),d=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__logo-wrap"},r.a.createElement("img",{src:p.a,alt:"logo"})))},f=(a(50),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",null,"STAR WARS CHARACTER Encyclopedia, 2020"))}),h=a(13),E=a(2),g=a.n(E),v=a(7),_=a(1),b=a(21),O=b.create({baseURL:"https://swapi.dev/api/"}),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return O.get("people/?page=".concat(e))},y=function(e){var t=e.replace(/http/gi,"https");try{return b.get(t)}catch(a){console.log(a)}},j=function(e){try{return O.get("people/?search=".concat(e))}catch(t){console.log(t)}},w={data:[],maxPages:null,isLoading:!0,isSearching:!1,films:null,modalIsOpen:!1},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PEOPLES_SUCCESS":return Object(_.a)(Object(_.a)({},e),{},{data:e.data.concat(t.payload.peoples.filter((function(t){return!e.data.some((function(e){return t.name===e.name}))}))),maxPages:Math.ceil(t.payload.total/10)});case"IS_LOADING":return Object(_.a)(Object(_.a)({},e),{},{isLoading:!1});case"GET_DATA_FROM_SEARCHING":return Object(_.a)(Object(_.a)({},e),{},{data:t.payload});case"IS_SEARCHING_TOGGLE":return Object(_.a)(Object(_.a)({},e),{},{isSearching:t.payload});default:return e}},L=function(){var e=Object(v.a)(g.a.mark((function e(t,a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length>0)){e.next=4;break}return e.next=3,Promise.all(t.map(function(){var e=Object(v.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(e){return e.map((function(e){return e.data[a]}))}));case 3:return e.abrupt("return",e.sent);case 4:return e.abrupt("return","Unknown");case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),C={data:null,isShow:!1,isLoading:!1},T=function(e){return{type:"SET_MODAL_DATA",payload:e}},I=function(e){return{type:"GET_SPECIES",payload:e}},D=function(e){return{type:"GET_FILMS",payload:e}},k=function(e){return{type:"GET_HOMEWOLRD",payload:e}},x=function(e){return function(){var t=Object(v.a)(g.a.mark((function t(a){var n,r,c,s,l,i;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L(e.species,"name");case 2:return n=t.sent,r=y(e.homeworld),c=L(e.films,"title"),t.next=7,n;case 7:return s=t.sent,t.next=10,r;case 10:return l=t.sent,t.next=13,c;case 13:i=t.sent,a(I(s)),a(k(l.data.name)),a(D(i)),a({type:"IS_LOADING"});case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MODAL_DATA":return Object(_.a)(Object(_.a)({},e),{},{data:t.payload,isShow:!0,isLoading:!1});case"HIDE_MODAL":return Object(_.a)(Object(_.a)({},e),{},{isShow:!1,isLoading:!1});case"GET_SPECIES":return Object(_.a)(Object(_.a)({},e),{},{data:Object(_.a)(Object(_.a)({},e.data),{},{species:t.payload})});case"GET_FILMS":return Object(_.a)(Object(_.a)({},e),{},{data:Object(_.a)(Object(_.a)({},e.data),{},{films:t.payload})});case"GET_HOMEWOLRD":return Object(_.a)(Object(_.a)({},e),{},{data:Object(_.a)(Object(_.a)({},e.data),{},{homeword:t.payload})});case"IS_LOADING":return Object(_.a)(Object(_.a)({},e),{},{isLoading:!0});default:return e}},A=(a(74),a(75),a(8)),P=(a(76),function(e){var t=e.data,a=e.setModalData,c=(e.setSpeciesThunk,Object(n.useState)("unknown")),s=Object(A.a)(c,2),l=s[0],i=s[1];return Object(n.useEffect)((function(){t.species.length>0&&y(t.species[0]).then((function(e){i(e.data.name)}))}),[t]),r.a.createElement("li",{className:"card",onClick:function(){a(t),document.querySelector("body").classList.add("scrolling-stop")}},r.a.createElement("span",{className:"card__avatar"},t.name[0]),r.a.createElement("span",{className:"card__name"},t.name),r.a.createElement("span",{className:"card__species"},l))}),G=a(82),R=a(81),H=function(e){var t=e.data,a=e.isLoading,n=e.setModalData,c=e.setSpeciesThunk;return r.a.createElement(G.a,{className:"transition__wrap"},r.a.createElement("ul",{className:"content__card-list"},a?"Please wait...":t.map((function(e){return r.a.createElement(R.a,{in:!0,key:e.name,timeout:500,classNames:"card"},r.a.createElement(P,{key:e.name,setModalData:n,setSpeciesThunk:c,data:e}))}))))};a(77);var F=function(e){var t=Object(n.useState)(""),a=Object(A.a)(t,2),c=a[0],s=a[1],l=function(e,t){var a=Object(n.useState)(e),r=Object(A.a)(a,2),c=r[0],s=r[1];return Object(n.useEffect)((function(){var a=setTimeout((function(){s(e)}),t);return function(){clearTimeout(a)}}),[e,t]),c}(c,500),i=Object(n.useState)(!1),o=Object(A.a)(i,2),u=o[0],m=o[1];return Object(n.useEffect)((function(){l.length>0&&(console.log(l.length),e.getDataFromSearching(l))}),[l]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"search__wrap"},r.a.createElement("div",{className:"search__container"},r.a.createElement("label",{htmlFor:"search",className:"search__label"+(u?" search__label--active":"")},"Search by name"),r.a.createElement("input",{className:"search",type:"text",id:"search",value:c,onFocus:function(){m(!0),e.isSearching(!0)},onKeyPress:function(e){13===e.keyCode&&s(e.target.value)},onChange:function(e){s(e.target.value)},onBlur:function(){s(""),m(!1),e.getPeoples(),e.isSearching(!1)}})),r.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M16.6667 14.6667H15.6133L15.24 14.3067C16.5467 12.7867 17.3333 10.8133 17.3333 8.66667C17.3333 3.88 13.4533 0 8.66667 0C3.88 0 0 3.88 0 8.66667C0 13.4533 3.88 17.3333 8.66667 17.3333C10.8133 17.3333 12.7867 16.5467 14.3067 15.24L14.6667 15.6133V16.6667L21.3333 23.32L23.32 21.3333L16.6667 14.6667ZM8.66667 14.6667C5.34667 14.6667 2.66667 11.9867 2.66667 8.66667C2.66667 5.34667 5.34667 2.66667 8.66667 2.66667C11.9867 2.66667 14.6667 5.34667 14.6667 8.66667C14.6667 11.9867 11.9867 14.6667 8.66667 14.6667Z",fill:"#808080"}))))},U=a(33),B=a.n(U),z=(a(78),function(e){return r.a.createElement("div",{className:"preloader__wrapper"},r.a.createElement("div",{className:"preloader"},r.a.createElement("div",{className:"starship"},r.a.createElement("img",{src:B.a}),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))))}),W={initialized:!1},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(_.a)(Object(_.a)({},e),{},{initialized:!0});default:return e}},q=function(e){return{page:e.page+1}},J=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={page:1},e.handleScroll=function(t){t.target.body.getBoundingClientRect().bottom<700&&!e.props.isSearching&&(console.log(t.target.body.getBoundingClientRect().bottom),e.handleChangePage())},e.handleChangePage=function(){e.props.maxPages>e.state.page&&(e.setState(q),e.props.getPeoples(e.state.page))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.getPeoples(this.state.page),window.addEventListener("scroll",this.handleScroll),this.timerHandle=setTimeout((function(){e.props.setInitializedSuccess()}),3e3)}},{key:"componentDidUpdate",value:function(){this.props.isSearching||window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll),this.timerHandle&&(clearTimeout(this.timerHandle),this.timerHandle=0)}},{key:"render",value:function(){return r.a.createElement("main",{className:"content"},!this.props.isLoading&&this.props.initialized?r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{getDataFromSearching:this.props.getDataFromSearching,getPeoples:this.props.getPeoples,isSearching:this.props.isSearchingToggle}),r.a.createElement(H,{data:this.props.data,isLoading:this.props.isLoading,setModalData:this.props.setModalData,setSpeciesThunk:this.props.setSpeciesThunk})):r.a.createElement(z,null))}}]),a}(r.a.Component),V=Object(h.b)((function(e){return{initialized:e.app.initialized,data:e.peoples.data,isLoading:e.peoples.isLoading,maxPages:e.peoples.maxPages,isSearching:e.peoples.isSearching}}),{setInitializedSuccess:function(){return{type:"INITIALIZED_SUCCESS"}},getPeoples:function(e){return function(){var t=Object(v.a)(g.a.mark((function t(a){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(e);case 2:n=t.sent,a((r=n.data.results,c=n.data.count,{type:"GET_PEOPLES_SUCCESS",payload:{peoples:r,total:c}})),a({type:"IS_LOADING"});case 5:case"end":return t.stop()}var r,c}),t)})));return function(e){return t.apply(this,arguments)}}()},setModalData:function(e){return function(){var t=Object(v.a)(g.a.mark((function t(a){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a(T(e)),a(x(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setSpeciesThunk:x,getDataFromSearching:function(e){return function(){var t=Object(v.a)(g.a.mark((function t(a){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e);case 2:n=t.sent,a({type:"GET_DATA_FROM_SEARCHING",payload:n.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},isSearchingToggle:function(e){return{type:"IS_SEARCHING_TOGGLE",payload:e}}})(J),X=(a(79),document.getElementById("modal-root")),K=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).el=document.createElement("div"),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){X.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){X.removeChild(this.el)}},{key:"render",value:function(){var e=this.props.children;return s.a.createPortal(e,this.el)}}]),a}(r.a.Component),Q=a(34),Y=a.n(Q),$=a(35),ee=a.n($),te=a(36),ae=a.n(te),ne=a(37),re=a.n(ne),ce=a(38),se=a.n(ce),le=function(e){var t=e.data,a=e.closeModal;return r.a.createElement("div",{className:"modalBody"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("div",{className:"card__avatar"},t.name[0]),r.a.createElement("p",{className:"card__name"},t.name),r.a.createElement("button",{className:"modal_close",onClick:a})),r.a.createElement("ul",{className:"modal-footer"},r.a.createElement("li",{className:"modal__item"},r.a.createElement("div",{className:"modal__item-title"},r.a.createElement("img",{src:se.a,alt:"icon"}),r.a.createElement("span",null,"Birth year ")),r.a.createElement("span",null,t.birth_year)),r.a.createElement("li",{className:"modal__item"},r.a.createElement("div",{className:"modal__item-title"},r.a.createElement("img",{src:ae.a,alt:"icon"}),r.a.createElement("span",null,"species")),r.a.createElement("span",null,t.species?t.species:"loading...")),r.a.createElement("li",{className:"modal__item"},r.a.createElement("div",{className:"modal__item-title"},r.a.createElement("img",{src:Y.a,alt:"icon"}),r.a.createElement("span",null,"Gender ")),r.a.createElement("span",null,t.gender)),r.a.createElement("li",{className:"modal__item"},r.a.createElement("div",{className:"modal__item-title"},r.a.createElement("img",{src:ee.a,alt:"icon"}),r.a.createElement("span",null,"Homeworld ")),r.a.createElement("span",null,t.homeworld?t.homeword:"loading...")),r.a.createElement("li",{className:"modal__item modal__item--films"},r.a.createElement("div",{className:"modal__item-title"},r.a.createElement("div",{className:"wrap"},r.a.createElement("img",{src:re.a,alt:"icon"}),r.a.createElement("span",null,"Films "))),r.a.createElement("span",{className:"modal__films-titles"},t.films?t.films.map((function(e){return r.a.createElement("span",{key:e},e)})):"loading..."))))},ie=function(e){var t=e.data,a=e.isShow,n=e.hideModal,c=e.isLoading,s=function(e){(e.target.classList.contains("modal-wrapper")||e.target.classList.contains("modal_close"))&&(n(),document.querySelector("body").classList.remove("scrolling-stop"))};return a&&r.a.createElement(G.a,null," ",r.a.createElement(K,null,r.a.createElement("div",{className:"modal-wrapper",onClick:s},c?r.a.createElement(R.a,{in:c,timeout:{enter:500,exit:1e3},classNames:"modalBody"},r.a.createElement(le,{data:t,closeModal:s})):r.a.createElement(z,null))))},oe=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"+(this.props.modal.isShow?" blur":"")},r.a.createElement(d,null),r.a.createElement(V,null),r.a.createElement(f,null),this.props.modal.data&&r.a.createElement(ie,Object.assign({},this.props.modal,{hideModal:this.props.hideModal})))}}]),a}(r.a.Component),ue=Object(h.b)((function(e){return{peoples:e.peoples,modal:e.modal}}),{hideModal:function(){return{type:"HIDE_MODAL"}}})(oe),me=a(9),pe=a(39),de=Object(me.c)({app:Z,peoples:N,modal:M}),fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||me.d,he=Object(me.e)(de,fe(Object(me.a)(pe.a))),Ee=document.getElementById("root");s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h.a,{store:he},r.a.createElement(ue,null))),Ee)}},[[42,1,2]]]);
//# sourceMappingURL=main.0ac12647.chunk.js.map