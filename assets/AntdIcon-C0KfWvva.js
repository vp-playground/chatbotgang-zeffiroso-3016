import{g as D,I as _,u as L,w as U,d as b,_ as l,f as N,a as S,h,b as W,i as q}from"./presets-fZzeZ6Sn.js";import{r as s,R as x}from"./index-qCb0-TeD.js";import{c as F}from"./index-DbGQkxQ5.js";import{g as G}from"./shadow-smhd3i8u.js";function H(n){return n.replace(/-(.)/g,function(e,o){return o.toUpperCase()})}function J(n,e){U(n,"[@ant-design/icons] ".concat(e))}function k(n){return b(n)==="object"&&typeof n.name=="string"&&typeof n.theme=="string"&&(b(n.icon)==="object"||typeof n.icon=="function")}function I(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(n).reduce(function(e,o){var r=n[o];switch(o){case"class":e.className=r,delete e.class;break;default:delete e[o],e[H(o)]=r}return e},{})}function v(n,e,o){return o?x.createElement(n.tag,l(l({key:e},I(n.attrs)),o),(n.children||[]).map(function(r,a){return v(r,"".concat(e,"-").concat(n.tag,"-").concat(a))})):x.createElement(n.tag,l({key:e},I(n.attrs)),(n.children||[]).map(function(r,a){return v(r,"".concat(e,"-").concat(n.tag,"-").concat(a))}))}function R(n){return D(n)[0]}function E(n){return n?Array.isArray(n)?n:[n]:[]}var an={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},K=`
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,M=function(e){var o=s.useContext(_),r=o.csp,a=o.prefixCls,c=o.layer,t=K;a&&(t=t.replace(/anticon/g,a)),c&&(t="@layer ".concat(c,` {
`).concat(t,`
}`)),s.useEffect(function(){var m=e.current,u=G(m);L(t,"@ant-design-icons",{prepend:!c,csp:r,attachTo:u})},[])},Q=["icon","className","onClick","style","primaryColor","secondaryColor"],C={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function V(n){var e=n.primaryColor,o=n.secondaryColor;C.primaryColor=e,C.secondaryColor=o||R(e),C.calculated=!!o}function X(){return l({},C)}var d=function(e){var o=e.icon,r=e.className,a=e.onClick,c=e.style,t=e.primaryColor,m=e.secondaryColor,u=N(e,Q),y=s.useRef(),f=C;if(t&&(f={primaryColor:t,secondaryColor:m||R(t)}),M(y),J(k(o),"icon should be icon definiton, but got ".concat(o)),!k(o))return null;var i=o;return i&&typeof i.icon=="function"&&(i=l(l({},i),{},{icon:i.icon(f.primaryColor,f.secondaryColor)})),v(i.icon,"svg-".concat(i.name),l(l({className:r,onClick:a,style:c,"data-icon":i.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},u),{},{ref:y}))};d.displayName="IconReact";d.getTwoToneColors=X;d.setTwoToneColors=V;function z(n){var e=E(n),o=S(e,2),r=o[0],a=o[1];return d.setTwoToneColors({primaryColor:r,secondaryColor:a})}function Y(){var n=d.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor}var Z=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];z(q.primary);var T=s.forwardRef(function(n,e){var o=n.className,r=n.icon,a=n.spin,c=n.rotate,t=n.tabIndex,m=n.onClick,u=n.twoToneColor,y=N(n,Z),f=s.useContext(_),i=f.prefixCls,g=i===void 0?"anticon":i,j=f.rootClassName,A=F(j,g,h(h({},"".concat(g,"-").concat(r.name),!!r.name),"".concat(g,"-spin"),!!a||r.name==="loading"),o),p=t;p===void 0&&m&&(p=-1);var P=c?{msTransform:"rotate(".concat(c,"deg)"),transform:"rotate(".concat(c,"deg)")}:void 0,$=E(u),w=S($,2),B=w[0],O=w[1];return s.createElement("span",W({role:"img","aria-label":r.name},y,{ref:e,tabIndex:p,onClick:m,className:A}),s.createElement(d,{icon:r,primaryColor:B,secondaryColor:O,style:P}))});T.displayName="AntdIcon";T.getTwoToneColor=Y;T.setTwoToneColor=z;export{T as I,an as s,M as u,J as w};
