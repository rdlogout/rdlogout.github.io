(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/0+H":function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=a(n("q1tI")),r=n("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,o=void 0!==a&&a,r=e.hasQuery;return n||o&&(void 0!==r&&r)}t.isInAmpMode=s,t.useAmp=function(){return s(o.default.useContext(r.AmpStateContext))}},"8Kt/":function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=a(n("q1tI")),r=a(n("Xuae")),s=n("lwAK"),i=n("FYa8"),c=n("/0+H");function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=l;var d=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(o){var r=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?r=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?r=!1:t.add(o.type);break;case"meta":for(var i=0,c=d.length;i<c;i++){var l=d[i];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?r=!1:n.add(l);else{var u=o.props[l],f=a[l]||new Set;f.has(u)?r=!1:(f.add(u),a[l]=f)}}}return r}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var p=r.default();function m(e){var t=e.children;return o.default.createElement(s.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(p,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:c.isInAmpMode(e)},t)}))}))}m.rewind=p.rewind,t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},RIqP:function(e,t,n){var a=n("Ijbi"),o=n("EbDI"),r=n("Bnag");e.exports=function(e){return a(e)||o(e)||r()}},RNiq:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n.n(a),r=n("8Kt/"),s=n.n(r),i=n("YFqc"),c=n.n(i),l=o.a.createElement,u=function(){return l("div",{className:"heroTitle typewriter d-flex flex-column justify-content-evenly pb-5 pb-md-3"},l("h1",{className:" text-center"},"Make ",l("div",null,l("svg",null,l("text",{x:"50%",y:"50%",dy:".35em",textAnchor:"middle"},"I T"))),"Services work for you"),l("p",{className:"text-white col-md-6"},"We realize IT Solutions that support you in achieving your ambitions. Think of IT Services that help your primary business process or specific applications within your sector. Please feel free to contact us for a further introduction."))},d=function(){var e=Object(a.useState)([]),t=e[0],n=e[1];return Object(a.useEffect)((function(){n(Array.from(Array(100),(function(e,t){return t})))}),[]),l("div",{className:"container mw-100 overflow-hidden"},l("img",{className:"background",alt:"background",src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/221808/sky.jpg"}),t.map((function(e){return l("div",{className:"circle-container",key:1e3*Math.random()},l("div",{className:"circle"}))})))},f=function(){return l("div",{className:"cards px-3 px-md-0 pt-5",id:"cards"},l("div",{className:"container bg-white mb-5 card"},l("div",{className:"card-body"},l("div",{className:"row py-3 px-3 px-md-5 align-items-center"},l("div",{className:"col-md-5"},l("lottie-player",{src:"https://assets9.lottiefiles.com/packages/lf20_dkamovet.json",background:"transparent",speed:"1",loop:!0,autoplay:!0})),l("div",{className:"col-md-7"},l("div",{className:"bodyContent"},l("h1",null,"Banking ",l("span",null,"&")," Financial Services"),l("p",{className:"font-sm"},"Enewvision offers innovative and custom technology solutions to local and global banks and financial services providers. We impart the competitive edge to each client\u2019s business, to keep them ahead of competition and help them to provide best-in-the-class services to their customers."),l("p",{className:"font-sm"},"With the offer of right technology solutions, we help banks and financial institutions to manage their finances. Each client is provided instant access to accurate and latest financial information that potentially helps in making operational and strategic decisions"),l("p",{className:"font-sm"},"Our portfolio of IT solutions to the banking and financial services is application development, application support, product customization and implementation, migration services, and business process sourcing from onsite, offshore, or a proven onsite/offshore model.")))))),l("div",{className:"container bg-white mb-5 card"},l("div",{className:"card-body"},l("div",{className:"row py-3 px-3 px-md-5 align-items-center flex-row-reverse"},l("div",{className:"col-md-5"},l("lottie-player",{src:"https://assets2.lottiefiles.com/packages/lf20_vPnn3K.json",background:"transparent",speed:"1",loop:!0,autoplay:!0})),l("div",{className:"col-md-7"},l("div",{className:"bodyContent"},l("h1",null,"Healthcare ",l("span",null,"&")," Pharma"),l("p",{className:"font-sm"},"With the exponential growth of the Life Sciences industry the challenges of time-to-market, changing commercial business models, patent expiry, track-and-trace, and regulatory enforcement, needs to be met adequately."),l("p",{className:"font-sm"},"New and innovative technologies have had an impact on different segments of the health and pharma industry that includes patients, healthcare providers, regulators, governments, payers and the society."),l("p",{className:"font-sm"},"We have proven experience in healthcare verticals formulations, bulk drugs, R&D, bio-tech, generics to contract manufacturing, compliant manufacturing, sales and distribution etc. Enewvision has emerged as a reliable IT services provider with SAP expertise in the Life Science vertical.")))))),l("div",{className:"container bg-white mb-5 card"},l("div",{className:"card-body"},l("div",{className:"row py-3 px-3 px-md-5 align-items-center"},l("div",{className:"col-md-5"},l("lottie-player",{src:"https://assets4.lottiefiles.com/packages/lf20_33gisyg9.json",background:"transparent",speed:"1",loop:!0,autoplay:!0})),l("div",{className:"col-md-7"},l("div",{className:"bodyContent"},l("h1",null,"Government"),l("p",{className:"font-sm"},"Enewvision offers affordable, reliable and value-driven solutions and services to the federal, state, and local governments."),l("p",{className:"font-sm"},"As understood, governments increasingly face problems of reduced IT budgets, growing demand for improved citizen services, and the need to improve information access. Added, there is also the demand to increase the operational efficiency, and reduce costs."),l("p",{className:"font-sm"},"Our experience in process automation, Enterprise Resource Planning (ERP), E-Business, and regulatory compliance has helped us to develop and maintain secure, reliable and cost-effective solutions")))))),l("div",{className:"container bg-white mb-5 card"},l("div",{className:"card-body"},l("div",{className:"row py-3 px-3 px-md-5 align-items-center flex-row-reverse"},l("div",{className:"col-md-5"},l("lottie-player",{src:"https://assets5.lottiefiles.com/packages/lf20_kpDkDy/data.json",background:"transparent",speed:"1",loop:!0,autoplay:!0})),l("div",{className:"col-md-7"},l("div",{className:"bodyContent"},l("h1",{className:""},"Retail"),l("p",{className:"font-sm"},"The global retail industry has moved from the predominance of brick-and-mortar establishment to completely database driven online presence. First, the ecommerce and later mcommerce have redefined the movement and direction of the retail sector, across the globe."),l("p",{className:"font-sm"},"Enewvision\u2019s contribution is in helping the retail industry to explore newer channels, marketing formats and geographies need agile processes with an offer of right-fit and reliable retail solutions. We catapult business on to a multi-channel, digital marketing and shopper-centric merchandizing."),l("p",{className:"font-sm"},"We design and develop custom solutions to different retail segments like Food and Grocery, Specialty Retailing, Non-Store Retailing, Fashion and Apparel, General Merchandise Retailing and Pharma Retailing.")))))),l("div",{className:"container bg-white mb-5 card"},l("div",{className:"card-body"},l("div",{className:"row py-3 px-3 px-md-5 align-items-center"},l("div",{className:"col-md-5"},l("lottie-player",{src:"https://assets2.lottiefiles.com/private_files/lf30_4avuVV.json",background:"transparent",speed:"1",loop:!0,autoplay:!0})),l("div",{className:"col-md-7"},l("div",{className:"bodyContent"},l("h1",null,"Insurance"),l("p",{className:"font-md"},"The global insurance industry faces the challenges of increased competition, moderate growth, and rising costs. The focus of the industry is on improving productivity and sustains customer satisfaction."),l("p",{className:"font-md"},"The contribution of technology solutions will be to help the insurance industry to confront the challenges, with scope for higher productivity and consistent bottom-lines."),l("p",{className:"font-md"},"Enewvision offers technology solutions that help the insurance industry to,")))))))};t.default=function(){return Object(a.useEffect)((function(){var e=document.getElementById("navButton");window.addEventListener("scroll",(function(){window.pageYOffset<window.innerHeight-150?e.style.opacity=1-window.pageYOffset/window.innerHeight:e.style.opacity=0}))}),[]),l(o.a.Fragment,null,l(s.a,null,l("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",crossOrigin:"anonymous"})),l(d,null),l("div",{id:"navButton"},l("a",{className:"shadow-lg btn d-flex align-items-centers",role:"btn",href:"#cards"},l("img",{src:"/down.svg",className:"m-auto",alt:"more"}))),l("div",{className:"hero"},l("section",null,l("div",{className:"container"},l("header",null,l("nav",{className:"row align-items-center py-4 px-md-0 px-2 justify-content-between py-md-5"},l(c.a,{href:"/"},l("a",{className:"logo col-md-3 col-12"},l("img",{src:"/logo.png",alt:"ENewVission"}))),l("ul",{className:"d-md-flex d-none col-md-6 justify-content-between col-12"},l("li",null,l(c.a,{href:"/"},l("a",{className:"active"},"Home"))),l("li",null,l(c.a,{href:"/"},l("a",null,"Technologies"))),l("li",null,l(c.a,{href:"/"},l("a",null,"About"))),l("li",null,l(c.a,{href:"/"},l("a",null,"Contact"))),l("li",null,l(c.a,{href:"/"},l("a",null,"Login")))))),l("div",{className:"col-12 px-3"},l(u,null))))),l(f,null),l("script",{async:!0,src:"https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"}))}},Xuae:function(e,t,n){"use strict";var a=n("lwsE"),o=n("PJYZ"),r=n("W8MJ"),s=n("a1gu"),i=n("Nsbk"),c=n("7W2i"),l=n("RIqP");function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var d=n("q1tI"),f=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(l){c(m,l);var d,p=(d=m,function(){var e,t=i(d);if(u()){var n=i(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function m(e){var r;return a(this,m),r=p.call(this,e),f&&(t.add(o(r)),n(o(r))),r}return r(m,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),r(m,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),m}(d.Component)}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("lwsE"),o=n("W8MJ"),r=n("a1gu"),s=n("Nsbk"),i=n("7W2i");function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var l=n("TqRt"),u=n("284h");t.__esModule=!0,t.default=void 0;var d,f=u(n("q1tI")),p=n("QmWs"),m=n("g/15"),h=l(n("nOHt"));function v(e){return e&&"object"===typeof e?(0,m.formatWithValidation)(e):e}var y=new Map,g=window.IntersectionObserver,b={};function w(){return d||(g?d=new g((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var N=function(e){i(l,e);var t,n=(t=l,function(){var e,n=s(t);if(c()){var a=s(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return r(this,e)});function l(e){var t;return a(this,l),(t=n.call(this,e)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var t=null,n=null,a=null;return function(o,r){if(a&&o===t&&r===n)return a;var s=e(o,r);return t=o,n=r,a=s,s}}((function(e,t){return{href:v(e),as:t?v(t):t}})),t.linkClicked=function(e){var n=e.currentTarget,a=n.nodeName,o=n.target;if("A"!==a||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var r=t.formatUrls(t.props.href,t.props.as),s=r.href,i=r.as;if(function(e){var t=(0,p.parse)(e,!1,!0),n=(0,p.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(s)){var c=window.location.pathname;s=(0,p.resolve)(c,s),i=i?(0,p.resolve)(c,i):s,e.preventDefault();var l=t.props.scroll;null==l&&(l=i.indexOf("#")<0),h.default[t.props.replace?"replace":"push"](s,i,{shallow:t.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return o(l,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,a=t.as,o=(0,p.resolve)(e,n);return[o,a?(0,p.resolve)(e,a):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),b[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();h.default.prefetch(t[0],t[1],e).catch((function(e){0})),b[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),a=n.href,o=n.as;"string"===typeof t&&(t=f.default.createElement("a",null,t));var r=f.Children.only(t),s={ref:function(t){e.handleRef(t),r&&"object"===typeof r&&r.ref&&("function"===typeof r.ref?r.ref(t):"object"===typeof r.ref&&(r.ref.current=t))},onMouseEnter:function(t){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==r.type||"href"in r.props)||(s.href=o||a),f.default.cloneElement(r,s)}}]),l}(f.Component);t.default=N},lwAK:function(e,t,n){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=a(n("q1tI"));t.AmpStateContext=o.createContext({})},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",1,2,0]]]);