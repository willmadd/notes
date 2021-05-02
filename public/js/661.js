(self.webpackChunk=self.webpackChunk||[]).push([[661],{6596:(t,e,n)=>{"use strict";n.d(e,{kT:()=>a,Kk:()=>i,f_:()=>s,qC:()=>c});var o=n(9669),r=n.n(o),a=function(t){return r().post("/api/create",t)},i=function(){return r().get("/api/notes")},s=function(t){return r().delete("/api/delete/".concat(t))},c=function(t){return r().get("/api/note/".concat(t))}},3661:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>T});var o=n(7703),r=n(7294),a=n(3379),i=n.n(a),s=n(5780),c={insert:"head",singleton:!1};i()(s.Z,c);s.Z.locals;var l=n(6504),u={insert:"head",singleton:!1};i()(l.Z,u);l.Z.locals;var f=n(3727),d=n(5977),p=n(5354),g=n(8724),h=n(5893);const m=function(){var t=(0,d.TH)();return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(f.rU,{className:"note note--addnote",onMouseEnter:function(){return(0,p.A)(g.Z.new)},to:{pathname:g.Z.new,state:{overlay:t}},children:(0,h.jsx)("img",{loading:"lazy",src:"/images/plus.icon.svg",alt:"plus icon",height:"38",width:"38"})})})};var x=n(6078),b=n(6596),y=n(5697),w=n.n(y);function v(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null==n)return;var o,r,a=[],i=!0,s=!1;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(a.push(o.value),!e||a.length!==e);i=!0);}catch(t){s=!0,r=t}finally{try{i||null==n.return||n.return()}finally{if(s)throw r}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return _(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var j=function(t){var e=t.note,n=t.locale,o=t.getNotes,a=(0,d.TH)(),i=(0,d.k6)(),s=v((0,r.useState)(),2),c=s[0],l=s[1],u=v((0,r.useState)(!1),2),g=u[0],m=u[1],y=e.title,w=e.subtitle,_=e.colour,j=e.updated_at,k=e.id,M=new Date(j);return(0,h.jsx)(f.rU,{to:{pathname:g?"#":"/note/".concat(k),state:{overlay:a,colour:_}},onMouseEnter:function(){return(0,p.A)("/note/".concat(k))},className:"note note__card",style:{backgroundColor:_},children:(0,h.jsxs)("div",{className:"note__content",children:[(0,h.jsxs)("div",{className:"note__actions",children:[(0,h.jsx)("button",{className:"btn btn--action",type:"button",onClick:function(t){return function(t){t.stopPropagation(),t.preventDefault();var e=t.target.name;i.push({pathname:"/edit/".concat(e),state:{overlay:a,colour:_}})}(t)},onMouseEnter:function(){return m(!0)},onMouseLeave:function(){return m(!1)},children:(0,h.jsx)("img",{src:"/images/edit.icon.svg",alt:"edit note",height:"19",width:"19",name:k})}),(0,h.jsx)("button",{type:"button",className:"btn btn--action",onClick:function(t){return function(t){t.stopPropagation();var e=t.target.name;b.f_(e).then((function(t){202===t.status?o():l("An error occured")})).catch((function(t){l("Error - ".concat(t.message))}))}(t)},onMouseEnter:function(){return m(!0)},onMouseLeave:function(){return m(!1)},children:(0,h.jsx)("img",{src:"/images/delete.icon.svg",name:k,alt:"edit note",height:"39",width:"39"})})]}),(0,h.jsx)("h2",{className:"note__text--title",children:y}),(0,h.jsx)("h3",{className:"note__text--subtitle",children:w}),(0,h.jsx)("p",{children:M.toLocaleDateString(n,x.vc)}),c&&(0,h.jsx)("p",{children:c})]})})};j.propTypes={note:w().object.isRequired,locale:w().string.isRequired,getNotes:w().func.isRequired};const k=j;var M=n(5);const N=(0,o.$j)((function(t){return{locale:t.localeReducer.locale}}),(function(t){return{getNotes:function(){t((0,M.K)())}}}))(k);var R=n(8784),z=function(t){var e=t.notes,n=t.__,o=t.loading,r=e.length;return(0,h.jsxs)("div",{className:"notes ".concat(r?"hasnotes":"empty"),children:[(0,h.jsx)(m,{}),o?(0,h.jsx)(R.Z,{}):(0,h.jsx)(h.Fragment,{children:e.map((function(t){return(0,h.jsx)(N,{note:t},t.id)}))}),!r&&(0,h.jsx)("p",{className:"notes__warning warning",children:n("You don't have any notes")})]})};z.propTypes={notes:w().array.isRequired,__:w().func.isRequired,loading:w().bool.isRequired};const Z=z;const S=(0,o.$j)((function(t){return{notes:t.notesReducer.notes,loading:t.notesReducer.loading}}))(Z);var q=n(775),A={insert:"head",singleton:!1};i()(q.Z,A);q.Z.locals;var C=function(t){var e=t.__,n=t.getNotes;return(0,r.useEffect)((function(){n()}),[]),(0,h.jsxs)("div",{className:"homepage",children:[(0,h.jsx)("h1",{children:e("Notes")}),(0,h.jsx)(S,{__:e})]})};C.propTypes={__:w().func.isRequired,getNotes:w().func.isRequired};const E=C;const T=(0,o.$j)((function(t){return{locale:t.localeReducer.locale}}),(function(t){return{getNotes:function(){t((0,M.K)())}}}))(E)},5:(t,e,n)=>{"use strict";n.d(e,{K:()=>a});var o=n(2760),r=n(6596),a=function(){return function(t){t({type:o.br}),r.Kk().then((function(e){t({type:o.MR,payload:e.data})})).catch((function(e){return t({type:o.an,payload:e})}))}}},6504:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var o=n(3645),r=n.n(o)()((function(t){return t[1]}));r.push([t.id,'#root,.container,body,html{margin:0;height:100%}button,input,submit{border:none}button:focus,input:focus,submit:focus{outline:none}label{display:flex;flex-direction:column}input{margin-top:5px;width:100%}input,textarea{border:1px solid #000}.btn{min-width:159px;min-height:45px;border-radius:7px;cursor:pointer;background-color:inherit}.btn--primary{background-color:#000;color:#fff}.btn--secondary{background-color:inherit;color:#000;border:1px solid #000}.btn--action{background-color:inherit;padding:0;min-width:auto;min-height:auto}@font-face{font-family:Mont;src:url(/fonts/Mont-Light.woff2) format("woff2"),url(/fonts/Mont-Light.woff) format("woff");font-weight:300;font-style:normal;font-display:swap}@font-face{font-family:Mont;src:url(/fonts/Mont-SemiBold.woff2) format("woff2"),url(/fonts/Mont-SemiBold.woff) format("woff");font-weight:600;font-style:normal;font-display:swap}@font-face{font-family:Mont;src:url(/fonts/Mont-Regular.woff2) format("woff2"),url(/fonts/Mont-Regular.woff) format("woff");font-weight:400;font-style:normal;font-display:swap}button,h1,h2,h3,h4,h5,h6,label,p,textarea{color:#000;font-family:Mont;margin:0}h1{font-size:36px;line-height:41px}h1,h2{font-weight:600}h2{font-size:30px;line-height:38px}h3{font-weight:500;font-size:20px;line-height:26px}.btn,label,p{font-size:20px;font-weight:500;line-height:25px}.warning{size:18px;line-height:23px;color:#fff}input{margin-bottom:18px;padding:15px 16px;border-radius:10px;box-sizing:border-box;font-size:20px;line-height:25px}::-webkit-input-placeholder{font-size:20px;font-weight:500;line-height:25px;color:#adadad}::-moz-placeholder{font-size:20px;font-weight:500;line-height:25px;color:#adadad}',""]);const a=r},775:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var o=n(3645),r=n.n(o)()((function(t){return t[1]}));r.push([t.id,"@-webkit-keyframes rotation{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes rotation{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.homepage{background-color:#1c1c1c;min-height:100%;padding:41px 30px}@media (min-width:768px){.homepage{padding:41px 90px}}.homepage h1{color:#fff}",""]);const a=r},5780:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var o=n(3645),r=n.n(o)()((function(t){return t[1]}));r.push([t.id,'@-webkit-keyframes rotation{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes rotation{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.notes{margin:41px 0;display:grid;grid-template-columns:repeat(1,minmax(236px,700px));grid-gap:20px}@media (min-width:768px){.notes{grid-template-columns:repeat(2,minmax(236px,400px))}}@media (min-width:1024px){.notes{grid-template-columns:repeat(3,minmax(236px,400px))}}@media (min-width:1220px){.notes{grid-template-columns:repeat(4,minmax(236px,400px))}}@media (min-width:1440px){.notes{grid-template-columns:repeat(5,minmax(236px,400px))}}.notes.empty{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);grid-template-columns:236px}.notes__warning{color:#fff;text-align:center;margin-top:13px}.notes .note{width:100%;border-radius:14px;position:relative}.notes .note:after{content:"";display:block;padding-bottom:100%}.notes .note--addnote{display:flex;justify-content:center;align-items:center;background-color:#000;background-image:linear-gradient(90deg,#fff 50%,transparent 0),linear-gradient(90deg,#fff 50%,transparent 0),linear-gradient(180deg,#fff 50%,transparent 0),linear-gradient(180deg,#fff 50%,transparent 0);background-position:0 0,0 100%,0 0,100% 0;background-repeat:repeat-x,repeat-x,repeat-y,repeat-y;background-size:15px 1px,15px 1px,1px 15px,1px 15px}.notes .note__card{padding:23px;box-sizing:border-box}.notes .note__content{position:absolute;width:calc(100% - 46px);height:calc(100% - 46px);display:flex;flex-direction:column}.notes .note__text--title{max-width:calc(100% - 39px)}.notes .note__text--subtitle{max-width:calc(100% - 39px);flex:1}.notes .note__actions{display:flex;flex-direction:column;position:absolute;top:4px;right:0;opacity:0}.notes .note:hover .note__actions{transition:.25s ease-in-out;opacity:1}',""]);const a=r}}]);