(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{357:function(e,t,a){e.exports=a.p+"static/media/defaultBcg.6113d505.jpeg"},358:function(e,t,a){e.exports=a.p+"static/media/ocean-room1.20021e3a.jpeg"},359:function(e,t,a){e.exports=a.p+"static/media/view.f30e53c8.jpeg"},362:function(e,t,a){e.exports=a.p+"static/media/details-1.33ab9f1e.jpeg"},363:function(e,t,a){e.exports=a.p+"static/media/details-3.7345b9f6.jpeg"},364:function(e,t,a){e.exports=a.p+"static/media/details-4.7569a316.jpeg"},370:function(e){e.exports=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{inputs:[{internalType:"string",name:"_nameRoom",type:"string"},{internalType:"string[]",name:"_imageRoom",type:"string[]"},{internalType:"string",name:"_description",type:"string"},{internalType:"string",name:"_services",type:"string"},{internalType:"string",name:"_category",type:"string"},{internalType:"uint256",name:"_size",type:"uint256"},{internalType:"uint256",name:"_price",type:"uint256"},{internalType:"uint256",name:"_capacity",type:"uint256"},{internalType:"uint256",name:"_dateAvailable",type:"uint256"}],name:"addRoom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_index",type:"uint256"},{internalType:"uint256",name:"_timestamp",type:"uint256"},{internalType:"string[]",name:"_imageRoom",type:"string[]"},{internalType:"uint256",name:"_price",type:"uint256"}],name:"editAvailableDate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_index",type:"uint256"}],name:"getHistory",outputs:[{internalType:"address payable",name:"",type:"address"},{internalType:"address",name:"",type:"address"},{internalType:"string",name:"",type:"string"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"bool",name:"",type:"bool"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_index",type:"uint256"}],name:"getInformationRoom",outputs:[{internalType:"address payable",name:"",type:"address"},{internalType:"string",name:"",type:"string"},{internalType:"string[]",name:"",type:"string[]"},{internalType:"string",name:"",type:"string"},{internalType:"string",name:"",type:"string"},{internalType:"string",name:"",type:"string"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"bool",name:"",type:"bool"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRoomBookingLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_index",type:"uint256"}],name:"rentRoom",outputs:[],stateMutability:"payable",type:"function"}]},371:function(e){e.exports=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"address",name:"",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}]},379:function(e,t,a){e.exports=a(844)},385:function(e,t,a){},443:function(e,t){},450:function(e,t){},467:function(e,t){},469:function(e,t){},485:function(e,t){},486:function(e,t){},573:function(e,t){},574:function(e,t){},621:function(e,t){},636:function(e,t){},654:function(e,t){},656:function(e,t){},711:function(e,t){},750:function(e,t){},844:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(123),l=a.n(o),i=a(33),c=a.n(i),s=a(59),m=a(32);a(385);function u(e){var t=e.children,a=e.hero;return r.a.createElement("header",{className:a},t)}function p(e){var t=e.children,a=e.title,n=e.subtitle;return r.a.createElement("div",{className:"banner"},r.a.createElement("h1",null,a),r.a.createElement("div",null),r.a.createElement("p",null,n),t)}u.defaultProps={hero:"defaultHero"};var d=a(31),f=a(20),y=a(21),b=a(27),E=a(25),v=a(28);function g(e){var t=e.title;return r.a.createElement("div",{className:"section-title"},r.a.createElement("h4",null,t))}var h=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={services:[{title:"Spa & Retreat",url:"spa",info:" Meet one of our yogis for a complimentary class, indulge in a rejuvenating massage, or take the first steps on a life-changing path at our Ayurvedic Retreat, an enclave of ancient knowledge and infinite well-being set within its own herb garden."},{title:"Dining",url:"dining",info:"This contemporary Italian restaurant serves light Mediterranean fare during the day and offers a fine dining experience in the evening, serving up vibrant dishes with a southern Italian twist by Neapolitan Chef Ciro D'Amico."},{title:"Sunset Fishing",url:"fishing",info:"Cast off and catch your dinner \u2013 our chefs will be ready to cook it to taste. This two-hour dhoni experience provides a picturesque vantage point from which to appreciate our tropical paradise. It\u2019s pretty relaxing too...until the time comes to reel something in!"}]},a}return Object(v.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"services"},r.a.createElement(g,{title:"Treat Yourself",id:"services-title"}),r.a.createElement("div",{className:"services-center"},this.state.services.map(function(e,t){return r.a.createElement("article",{key:t,className:"service"},r.a.createElement("h6",null,e.title),r.a.createElement("p",null,e.info))})))}}]),t}(n.Component);function N(){return window.scrollTo(0,0),r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null,r.a.createElement(p,{title:"Have Fun Your Room"},r.a.createElement(d.b,{to:"/rooms",className:"btn-primary"},"Discover"))),r.a.createElement(h,null))}var j=a(357),x=a.n(j);function O(e){e.key;var t=e.room,a=t.index,n=t.name,o=t.imageURL,l=t.price;return r.a.createElement("div",null,r.a.createElement("div",{className:"room-name-container"},r.a.createElement("div",{className:"room-info"},n," ",r.a.createElement("p",null,"Starting at: $",l/1e18))),r.a.createElement("article",{className:"room"},r.a.createElement(d.b,{to:"/rooms/".concat(a),className:"cta line--link-animation"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:o[0]||x.a,alt:"single project"})),r.a.createElement("div",{className:"explore-btn"},r.a.createElement("span",{className:"room-info-btn"},"Explore")))))}function w(e){var t=e.rooms;return 0==t.length?r.a.createElement("div",{className:"empty-search"},r.a.createElement("h3",null,"Unfortunately no rooms matched your search")):r.a.createElement("section",{className:"roomslist"},r.a.createElement("div",{className:"roomslist-center"},t.map(function(e){if(0==e.isBooking)return r.a.createElement(O,{key:e.id,room:e})})))}var T=function(e){return r.a.createElement("div",null,r.a.createElement(w,{rooms:e.rooms}))},k=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,{hero:"roomsHero"},r.a.createElement(p,{title:"Available Rooms"},r.a.createElement(d.b,{to:"/",className:"btn-primary"},"Return Home"))),r.a.createElement(T,{rooms:e.rooms}))},S=a(372),B=a(358),R=a.n(B),C=a(87),F=a(88),D=a(359),A=a.n(D);function M(){var e=Object(C.a)(["\n  min-height: calc(100vh - 66px);\n  background: linear-gradient(180deg, transparent 0, #202020),\n    url(",") center/cover no-repeat;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return M=function(){return e},e}var _=F.a.header(M(),function(e){return e.img?e.img:A.a}),U=a(362),L=a.n(U),z=a(363),I=a.n(z),H=a(364),P=a.n(H),W=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(b.a)(this,Object(E.a)(t).call(this,e))).state={defaultBcg:R.a},a}return Object(v.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this;window.scrollTo(0,0);var t=this.props.rooms[this.props.match.params.id],a=this.props.match.params.id;if(!t)return r.a.createElement("div",{className:"error"},r.a.createElement("h3",null,"Uh Oh! No such room could be found!"),r.a.createElement(d.b,{to:"/rooms",className:"btn-primary-back"},"Back to rooms"));if(1==!t.isBook)return r.a.createElement("div",{className:"error"},r.a.createElement("h3",null,"Uh Oh! This room is booked!"),r.a.createElement(d.b,{to:"/rooms",className:"btn-primary-back"},"Back to rooms"));var n=t.name,o=t.description,l=t.capacity,i=t.services,c=t.size,s=t.price,m=t.imageURL,u=t.availableDate;console.log(t);var f=Object(S.a)(m),y=f[0];f.slice(1);console.log(u);var b=new Date(1e3*u);return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{img:y||this.state.defaultBcg},r.a.createElement(p,{title:"".concat(n," room")},r.a.createElement(d.b,{to:"/rooms",className:"btn-primary"},"Back to rooms"))),r.a.createElement("section",{className:"single-room"},r.a.createElement("div",{className:"single-room-images"},r.a.createElement("img",{key:"1",src:L.a,alt:"room1"}),r.a.createElement("img",{key:"2",src:I.a,alt:"room3"}),r.a.createElement("img",{key:"3",src:P.a,alt:"room4"})),r.a.createElement("div",{className:"single-room-info"},r.a.createElement("article",{className:"desc"},r.a.createElement("h3",null,"Details"),r.a.createElement("p",null,o)),r.a.createElement("article",{className:"info"},r.a.createElement("h3",null,"Info"),r.a.createElement("h6",null,"Price : $",s/1e18," USD"),r.a.createElement("h6",null,"Size : ",c," sq. ft."),r.a.createElement("h6",null,"max capacity :"," ","".concat(l,l>1?" people":" person")),r.a.createElement("h6",null,"services : ",i," included"),r.a.createElement("h6",null,"date available: ",b.toLocaleDateString("en-US")))),r.a.createElement("div",{className:"single-room-booking"},r.a.createElement(d.b,{to:"",className:"btn-primary",onClick:function(n){n.preventDefault(),e.props.rentRoom(t.price/1e18,a)}},"Booking"))))}}]),t}(n.Component),q=a(147),$=a.n(q);a(219);function Y(){var e=Object(C.a)(["\n  padding: 1rem;\n\n  table {\n    border-spacing: 0;\n    border: 1px solid black;\n\n    tr {\n      :last-child {\n        td {\n          border-bottom: 0;\n        }\n      }\n    }\n\n    th,\n    td {\n      margin: 0;\n      padding: 0.5rem;\n      border-bottom: 1px solid black;\n      border-right: 1px solid black;\n\n      :last-child {\n        border-right: 0;\n      }\n    }\n  }\n"]);return Y=function(){return e},e}var G=F.a.div(Y());function J(e){var t=e.data;return 0==t.length?r.a.createElement("div",{className:"error"},r.a.createElement("h3",null,"Uh Oh! No have history!"),r.a.createElement(d.b,{to:"/rooms",className:"btn-primary-back"},"Back to rooms")):(console.log(t),r.a.createElement("section",{className:"addroom-container"},r.a.createElement("div",{className:"roomlist-center"},r.a.createElement("div",{className:"section-addroom"},r.a.createElement("h4",null,"History")),r.a.createElement("div",null,r.a.createElement("table",{className:""},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Index"),r.a.createElement("th",null,"RoomName"),r.a.createElement("th",null,"Cost"),r.a.createElement("th",null,"Booking"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Renter Address Address"))),r.a.createElement("tbody",null,t.map(function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.index),r.a.createElement("td",null,e.name),r.a.createElement("td",null,"$ ",e.price/1e18),r.a.createElement("td",null,0==e.isBooking?"No":"Yes"),r.a.createElement("td",null,new Date(1e3*e.availableDate).toLocaleDateString("en-US")),r.a.createElement("td",null,e.renter))})))))))}var K=function(e){var t=e.historyRoom;return r.a.createElement(G,null,r.a.createElement(J,{data:t}))},Q=a(152),V=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),o=a[0],l=a[1],i=Object(n.useState)(""),c=Object(m.a)(i,2),s=c[0],u=c[1],p=Object(n.useState)(""),d=Object(m.a)(p,2),f=d[0],y=d[1],b=Object(n.useState)(""),E=Object(m.a)(b,2),v=E[0],g=E[1],h=Object(n.useState)(""),N=Object(m.a)(h,2),j=N[0],x=N[1],O=Object(n.useState)(""),w=Object(m.a)(O,2),T=w[0],k=w[1],S=Object(n.useState)(""),B=Object(m.a)(S,2),R=B[0],C=B[1],F=Object(n.useState)(""),D=Object(m.a)(F,2),A=D[0],M=D[1],_=Object(n.useState)(""),U=Object(m.a)(_,2),L=U[0],z=U[1],I=Object(n.useState)(new Date),H=Object(m.a)(I,2),P=H[0],W=H[1];return r.a.createElement("section",{className:"addroom-container"},r.a.createElement("div",{className:"roomlist-center"},r.a.createElement("div",{className:"section-addroom"},r.a.createElement("h4",null,"Add New Room For Rent")),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.addToRoom(o,s,f,v,j,T,R,A,L,P),l(""),u(""),y(""),g(""),C(""),x(""),k(""),M(""),z(""),W("")}},r.a.createElement("div",{className:"filter-room"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Room Name"),r.a.createElement("input",{name:"name",className:"add-room-input form-control",required:!0,onChange:function(e){return l(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"image"},"Image"),r.a.createElement("input",{name:"image",className:"add-room-input form-control",required:!0,onChange:function(e){return u(e.target.value)}}))),r.a.createElement("div",{className:"filter-room"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"category"},"Services"),r.a.createElement("select",{name:"services",id:"services",className:"add-room-input form-control",onChange:function(e){return g(e.target.value)}},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"Wifi"},"Wifi"),r.a.createElement("option",{value:"Breakfast"},"Breakfast"),r.a.createElement("option",{value:"Smoking"},"Smoking"),r.a.createElement("option",{value:"Smoking"},"Pet"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"category"},"Category"),r.a.createElement("select",{name:"category",id:"category",className:"add-room-input form-control",onChange:function(e){return k(e.target.value)}},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"single"},"single"),r.a.createElement("option",{value:"double"},"double"),r.a.createElement("option",{value:"family"},"family"),r.a.createElement("option",{value:"presidential"},"presidential")))),r.a.createElement("div",{className:"filter-room"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"location"},"Location"),r.a.createElement("input",Object(Q.a)({name:"location",className:"add-room-input form-control",onChange:function(e){return x(e.target.value)},required:!0},"onChange",function(e){return x(e.target.value)})))),r.a.createElement("div",{className:"filter-room"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"capacity"},"Capacity"),r.a.createElement("input",{type:"number",name:"capacity",id:"capacity",onChange:function(e){return C(e.target.value)},className:"add-room-input form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"size"},"Size"),r.a.createElement("input",{type:"number",name:"size",id:"size",onChange:function(e){return M(e.target.value)},className:"add-room-input form-control"}))),r.a.createElement("div",{className:"filter-room"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"dateAvailable"},"Date Available"),r.a.createElement($.a,{selected:P,className:"add-room-input  form-control",onChange:function(e){return W(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"price"},"Price"),r.a.createElement("input",{type:"number",name:"price",id:"price",onChange:function(e){return z(e.target.value)},className:"add-room-input form-control"}))),r.a.createElement("div",{className:"filter-room"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("textarea",{type:"number",name:"description",id:"description",onChange:function(e){return y(e.target.value)},className:"add-room-input form-control"}))),r.a.createElement("div",{className:"filter-room-btn"},r.a.createElement("div",{className:"explore-btn"},r.a.createElement("button",{className:"btn-add-room"},"Submit"))))))},X=a(105);function Z(){var e=Object(C.a)(["\nmargin-right: .8rem;\ntransition: all .5s ease;\n&:hover {\n    transform: scale(2);\n}\n"]);return Z=function(){return e},e}function ee(){var e=Object(C.a)(["\n  // display: none;\n  position: absolute;\n  // background: var(--darkTeal);\n  min-width: 160px;\n  // box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n"]);return ee=function(){return e},e}F.a.div(ee());var te=Object(F.a)(X.c)(Z()),ae=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),o=a[0],l=a[1],i=Object(n.useState)(!0),c=Object(m.a)(i,2),s=(c[0],c[1]),u=Object(n.useState)(!1),p=Object(m.a)(u,2),f=p[0],y=(p[1],function(){window.innerWidth<=1e3?s(!1):s(!0)});return Object(n.useEffect)(function(){y()},[]),window.addEventListener("resize",y),r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"nav-center"},r.a.createElement("ul",{className:f?"nav-links show-nav":"nav-links"},r.a.createElement("li",{className:"contact"},r.a.createElement(d.b,{to:"/"},"+123456789 support@gofunroom.cc")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/rooms"},"Rooms")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/add"},"Add")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/history"},"History"))),r.a.createElement("div",{className:"nav-header"},r.a.createElement(d.b,{to:"/"},r.a.createElement("h1",null,"GoFunRoom"))),r.a.createElement("ul",Object(Q.a)({className:"nav-links show-nav",onClick:o},"onClick",function(){return l(!o)}),void 0==e.address?r.a.createElement("li",{className:"reserve"},r.a.createElement(d.b,{to:""},"Connect Wallet")):r.a.createElement("li",{className:"wallet"},r.a.createElement(d.b,{to:""},r.a.createElement(te,null),"0x...",e.address.substr(-10)),r.a.createElement("div",{className:"drop-down-balance"},r.a.createElement("a",null,"USD Balance: $",e.cUSDBalance,"CUSD"),r.a.createElement("a",null,"Celo Balance: $",e.celoBalance))))))},ne=function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer-container"},r.a.createElement("div",{className:"footer-items"},r.a.createElement("h1",null,"GFR"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.b,{to:"/"},"Services")),r.a.createElement("li",{className:"email"},r.a.createElement(d.b,{to:"malito:contact@gofunroom.cc"},"Contact")),r.a.createElement("li",null,r.a.createElement(X.b,{className:"twitter"})),r.a.createElement("li",null,r.a.createElement(X.a,{className:"instagram"})))))}}]),t}(n.Component),re=a(79),oe=a(212),le=a.n(oe),ie=a(369),ce=a(36),se=a.n(ce),me=a(370),ue=a(371),pe=18,de="0xBEd21357A22AB95c38d22Fc03696FcA02396Af7c",fe="0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1";var ye=function(){var e=Object(n.useState)(0),t=Object(m.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(null),i=Object(m.a)(l,2),u=i[0],p=i[1],f=Object(n.useState)(null),y=Object(m.a)(f,2),b=y[0],E=y[1],v=Object(n.useState)(null),g=Object(m.a)(v,2),h=g[0],j=g[1],x=Object(n.useState)(0),O=Object(m.a)(x,2),w=O[0],T=O[1],S=Object(n.useState)([]),B=Object(m.a)(S,2),R=B[0],C=B[1],F=Object(n.useState)([]),D=Object(m.a)(F,2),A=D[0],M=D[1],_=function(){var e=Object(s.a)(c.a.mark(function e(){var t,a,n,r,o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.celo){e.next=27;break}return e.prev=1,e.next=4,window.celo.enable();case 4:return t=new le.a(window.celo),a=Object(ie.newKitFromWeb3)(t),e.next=8,a.web3.eth.getAccounts();case 8:return n=e.sent,r=n[0],a.defaultAccount=r,e.next=13,E(r);case 13:return console.log(r),e.next=16,j(a);case 16:o={fromBlock:0,address:["0xBEd21357A22AB95c38d22Fc03696FcA02396Af7c"],topics:[]},t.eth.subscribe("logs",o,function(e,t){e||console.log(t)}).on("data",function(e){u&&U()}),e.next=25;break;case 21:e.prev=21,e.t0=e.catch(1),console.log("There is an error"),console.log({error:e.t0});case 25:e.next=28;break;case 27:console.log("please install the extension");case 28:case"end":return e.stop()}},e,null,[[1,21]])}));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(s.a)(c.a.mark(function e(){var t,a,n,r,o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.methods.getRoomBookingLength().call();case 2:for(t=e.sent,a=[],n=function(e){var t=new Promise(function(){var t=Object(s.a)(c.a.mark(function t(a,n){var r;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.methods.getInformationRoom(e).call();case 2:r=t.sent,a({index:e,owner:r[0],name:r[1],imageURL:r[2],description:r[3],services:r[4],category:r[5],availableDate:r[6],capacity:r[7],size:r[8],isBooking:r[9],price:r[10]});case 4:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}());a.push(t)},r=0;r<t;r++)n(r);return e.next=8,Promise.all(a);case 8:o=e.sent,C(o);case 10:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(s.a)(c.a.mark(function e(){var t,a,n,r,o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.methods.getRoomBookingLength().call();case 2:for(t=e.sent,a=[],n=function(e){var t=new Promise(function(){var t=Object(s.a)(c.a.mark(function t(a,n){var r;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.methods.getHistory(e).call();case 2:r=t.sent,a({index:e,owner:r[0],renter:r[1],name:r[2],availableDate:r[3],isBooking:r[4],price:r[5]});case 4:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}());a.push(t)},r=0;r<t;r++)n(r);return e.next=8,Promise.all(a);case 8:o=e.sent,M(o);case 10:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(s.a)(c.a.mark(function e(t,a,n,r,o,l,i,s,m,p){var d,f,y;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(a),d=new se.a(m).shiftedBy(pe).toString(),f=a.split(","),y=parseInt(Date.parse(p)/1e3),console.log(y),console.log(typeof y),e.next=9,u.methods.addRoom(t,f,n,r,l,s,d,i,y).send({from:b});case 9:U(),L(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}},e,null,[[0,13]])}));return function(t,a,n,r,o,l,i,c,s,m){return e.apply(this,arguments)}}(),I=function(){var e=Object(s.a)(c.a.mark(function e(t,a){var n,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=new h.web3.eth.Contract(ue,fe),r=new se.a(t).shiftedBy(pe).toString(),e.next=5,n.methods.approve(de,r).send({from:b});case 5:return e.next=7,u.methods.rentRoom(a).send({from:b});case 7:H(),U(),L(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}},e,null,[[0,12]])}));return function(t,a){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){_()},[]),Object(n.useEffect)(function(){if(h&&b)return H();console.log("no kit or address")},[h,b]),Object(n.useEffect)(function(){u&&(U(),L())},[u]);var H=function(){var e=Object(s.a)(c.a.mark(function e(){var t,a,n,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getTotalBalance(b);case 2:t=e.sent,a=t.CELO.shiftedBy(-pe).toFixed(2),n=t.cUSD.shiftedBy(-pe).toFixed(2),r=new h.web3.eth.Contract(me,de),p(r),o(a),T(n);case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement(d.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,{cUSDBalance:w,celoBalance:a,address:b,connectCeloWallet:_}),r.a.createElement(re.c,null,r.a.createElement(re.a,{exact:!0,path:"/",component:N}),r.a.createElement(re.a,{exact:!0,path:"/rooms/"},r.a.createElement(k,{rooms:R})),r.a.createElement(re.a,{exact:!0,path:"/add/"},r.a.createElement(V,{addToRoom:z})),r.a.createElement(re.a,{exact:!0,path:"/rooms/:id",render:function(e){return r.a.createElement(W,Object.assign({},e,{key:e.match.params.id,rooms:R,rentRoom:I}))}}),r.a.createElement(re.a,{exact:!0,path:"/history",render:function(e){return r.a.createElement(K,Object.assign({},e,{historyRoom:A}))}}),r.a.createElement(re.a,{component:Error})),r.a.createElement(ne,null)))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ye,null)),document.getElementById("root"))}},[[379,1,2]]]);
//# sourceMappingURL=main.f1c65b3c.chunk.js.map