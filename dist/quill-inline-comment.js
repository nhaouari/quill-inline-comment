!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var c=r.get;if(void 0!==c)return c.call(o)},a=Quill.import("blots/inline"),u=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"format",value:function(e,n){"comment"===e&&n?this.domNode.dataset.label=n:l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"format",this).call(this,e,n)}},{key:"formats",value:function(){var e=l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"formats",this).call(this);return e.comment=t.formats(this.domNode),e}}],[{key:"create",value:function(e){var n=l(t.__proto__||Object.getPrototypeOf(t),"create",this).call(this);return n.dataset.comment=e,n}},{key:"formats",value:function(e){return e.dataset.comment}}]),t}(a);u.blotName="comment",u.tagName="SPAN",u.className="annotation",Quill.register({"formats/comment":u});var s=function(){function e(t,n){o(this,e),this.quill=t,this.toolbar=t.getModule("toolbar"),void 0!==this.toolbar&&this.toolbar.addHandler("comment",this.showCommentBox);var r=document.getElementsByClassName("ql-comment");r&&[].slice.call(r).forEach(function(e){e.innerHTML="Comment"})}return c(e,[{key:"showCommentBox",value:function(){var e=this,t=this.quill,n=this.quill.getSelection(),o=this.quill.getText(n.index,n.length);if(!(o.length<1)){var r=t.getBounds(n.index),i=document.getElementById("inline-comment");i?(this.container=i,this.container.style.display="block",document.querySelector(".commentText").value=""):(this.container=document.createElement("div"),this.container.id="inline-comment",this.container.classList.add("inline-comment"),this.quill.container.appendChild(this.container),this.container.style.position="absolute",this.container.innerHTML='<textarea class="commentText" placeholder="Type your comment"></textarea><div class="inline-comment-bottom"><span class="inline-send">Send</span> <span class="inline-canecl">Cancel</span></div>'),this.container.style.left=r.left+"px",this.container.style.top=10+r.top+r.height+"px",document.querySelector(".commentText").focus();var c=document.querySelector(".inline-canecl"),l=document.querySelector(".inline-comment");c.addEventListener("click",function(){l.style.display="none"});var a=document.querySelector(".inline-send");a.addEventListener("click",function(){return e.addComment}),a.addEventListener("click",function(){var e=document.querySelector(".commentText").value;l.style.display="none",t.deleteText(n.index,o.length,Quill.sources.USER),t.insertText(n.index,o,"comment",e,Quill.sources.USER),t.setSelection(n.index+o.length+1,0,Quill.sources.SILENT)})}}}]),e}();Quill.register("modules/inline_comment",s)},function(e,t){},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(1),i=(o(r),n(0));o(i)}]);