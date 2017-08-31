!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){var t=document.getElementById("inline-comment"),n=document.getElementById("inline-comment-mask");t?(t.remove(),n.remove()):c(e)}function c(e){var t=e.getSelection();if(!(e.getText(t.index,t.length).length<1)){var n=e.getBounds(t.index),o=document.createElement("div");o.id="inline-comment-mask",o.style.width="100%",o.style.height="100%",o.style.top="0px",o.style.position="fixed",o.style.display="block";var r=document.createElement("div");r.id="inline-comment",r.classList.add("inline-comment"),e.container.appendChild(r),e.container.appendChild(o),r.style.position="absolute",r.innerHTML='<textarea class="commentText" placeholder="Type your comment"></textarea><div class="inline-comment-bottom"><span class="inline-cancel">Cancel</span> <span class="inline-send">Send</span> </div>',r.style.left=n.left+"px",r.style.top=10+n.top+n.height+"px",r.style.zIndex=80,document.querySelector(".commentText").focus();var i=document.querySelector(".inline-cancel"),l=document.querySelector(".inline-comment");i.addEventListener("click",function(){l.style.display="none",o.style.display="none"}),document.querySelector(".inline-send").addEventListener("click",function(){var t={},n=document.querySelector(".commentText").value;t.comment=n,"undefined"!=typeof commentId&&(t.id=commentId),"undefined"!=typeof commentStatus&&(t.resolved=commentStatus),l.remove(),o.remove(),e.format("comment",t)})}}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var l=r.get;if(void 0!==l)return l.call(o)},s=Quill.import("blots/inline"),m=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"format",value:function(e,n){u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"format",this).call(this,e,n)}}],[{key:"create",value:function(e){var n=u(t.__proto__||Object.getPrototypeOf(t),"create",this).call(this);return n.dataset.comment=e.comment,e.id&&(n.dataset.id=e.id),e.resolved&&(n.dataset.resolved=e.resolved),n}},{key:"formats",value:function(e){return e.dataset}}]),t}(s);m.blotName="comment",m.tagName="SPAN",m.className="annotation",Quill.register({"formats/comment":m});var d=function(){function e(t){o(this,e),this.quill=t,this.toolbar=t.getModule("toolbar"),void 0!==this.toolbar&&this.toolbar.addHandler("comment",this.commentEventHanlder);var n=document.getElementsByClassName("ql-comment");n&&[].slice.call(n).forEach(function(e){e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16"><g fill="none" fill-rule="evenodd"><path fill="#444" fill-rule="nonzero" d="M9.92 11H13c1.66 0 3-1.36 3-3V5c0-1.66-1.34-3-3-3H5C3.34 2 2 3.34 2 5v3c0 1.64 1.34 3 3 3h1.44l.63 1.88 2.85-1.9zM5 0h8c2.76 0 5 2.24 5 5v3c0 2.75-2.24 5-5 5h-2.47L7.1 15.26c-.47.3-1.1.2-1.4-.27-.05-.1-.08-.18-.1-.26L5 13c-2.76 0-5-2.25-5-5V5c0-2.76 2.24-5 5-5z"/><path stroke="#444" stroke-width="2" d="M5.37 5H13M5.37 8H10" stroke-linecap="round" stroke-linejoin="round"/></g></svg>'})}return a(e,[{key:"commentEventHanlder",value:function(){l(this.quill)}}]),e}();Quill.register("modules/inline_comment",d)},function(e,t){},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(1),i=(o(r),n(0));o(i)}]);