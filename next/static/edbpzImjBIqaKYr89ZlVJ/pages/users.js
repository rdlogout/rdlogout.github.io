(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"1OyB":function(t,n,e){"use strict";function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",(function(){return o}))},Ji7U:function(t,n,e){"use strict";function o(t,n){return(o=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function r(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&o(t,n)}e.d(n,"a",(function(){return r}))},NhoZ:function(t,n,e){"use strict";e.r(n);var o=e("o0o1"),r=e.n(o),u=e("1OyB"),c=e("vuIU"),i=e("md7G"),a=e("foSv"),f=e("Ji7U"),s=e("q1tI"),l=e.n(s),p=e("/MKj"),y=e("ndts"),b=e("5Yp1"),h=e("x91w"),m=l.a.createElement;function d(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var w=function(t){Object(f.a)(o,t);var n,e=(n=o,function(){var t,e=Object(a.a)(n);if(d()){var o=Object(a.a)(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return Object(i.a)(this,t)});function o(t){var n;return Object(u.a)(this,o),(n=e.call(this,t)).state={},n}return Object(c.a)(o,[{key:"componentDidMount",value:function(){return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.awrap(this.props.getUser({token:this.props.authentication.token},"profile"));case 2:case"end":return t.stop()}}),null,this,null,Promise)}},{key:"render",value:function(){return console.log(this.props.authentication.user),this.props.authentication.user?m(b.a,{title:"Profile"},m("h3",null,"You are logged in as ",this.props.authentication.user.firstname)):m(b.a,{title:"users"},m("h3",null,"You are not authenticated."))}}],[{key:"getInitialProps",value:function(t){return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:Object(y.a)(t);case 1:case"end":return n.stop()}}),null,null,null,Promise)}}]),o}(l.a.Component);n.default=Object(p.b)((function(t){return t}),h.a)(w)},URgp:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users",function(){return e("NhoZ")}])},foSv:function(t,n,e){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}e.d(n,"a",(function(){return o}))},md7G:function(t,n,e){"use strict";function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return(r="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return o(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)})(t)}function u(t,n){return!n||"object"!==r(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}e.d(n,"a",(function(){return u}))},vuIU:function(t,n,e){"use strict";function o(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,n,e){return n&&o(t.prototype,n),e&&o(t,e),t}e.d(n,"a",(function(){return r}))}},[["URgp",1,2,0,3,4]]]);