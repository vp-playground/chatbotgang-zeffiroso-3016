import{j as d}from"./emotion-react-jsx-runtime.browser.esm-B6nDGTOp.js";import{c as b}from"./emotion-styled-base.browser.esm-DcS0-Etw.js";import{u as _}from"./useHandler-HI23tEoY.js";import{e as C}from"./safeString-CSiFDyUi.js";import{c as O}from"./emotion-react.browser.esm-DKbCFQzN.js";import{t as n}from"./index-BA0eH0Wu.js";import{m as N}from"./memo-BZYTsoqr.js";import{r as A}from"./TextArea-vizGfyJg.js";import{r as p}from"./index-qCb0-TeD.js";import{C as k}from"./CopyButton-CSca9IhR.js";import{I as h}from"./index-CXnOxbGU.js";import{m as V}from"./merge-BUZDYRsv.js";import{f as q}from"./flow-Caod8tMH.js";function P(r){return t=>!r.includes(t)}const y=r=>r,v=O(`&:not(
      .ant-input-affix-wrapper-disabled,
      .ant-input-affix-wrapper-borderless,
      .ant-input-status-error,
      .ant-input-status-warning
    ){border-color:`,n.colors.neutral003,`;}&.ant-input-affix-wrapper:focus,&.ant-input-affix-wrapper-focused{&:not(
        .ant-input-affix-wrapper-disabled,
        .ant-input-affix-wrapper-borderless,
        .ant-input-status-error,
        .ant-input-status-warning
      ){border-color:`,n.colors.primaryHover,";box-shadow:0 0 0 2px ",n.colors.primaryOutline,`;}}&.ant-input-affix-wrapper:not(
      .ant-input-affix-wrapper-disabled,
      .ant-input-status-error,
      .ant-input-status-warning
    ):hover{border-color:`,n.colors.primaryHover,`;}&.ant-input-affix-wrapper-status-error:not(
      .ant-input-affix-wrapper-disabled,
      .ant-input-affix-wrapper-borderless
    ).ant-input-affix-wrapper,&.ant-input-affix-wrapper-status-error:not(
      .ant-input-affix-wrapper-disabled,
      .ant-input-affix-wrapper-borderless
    ).ant-input-affix-wrapper:hover{border-color:`,n.colors.errorHover,`;}.ant-input-affix-wrapper-status-error:not(
      .ant-input-affix-wrapper-disabled,
      .ant-input-affix-wrapper-borderless
    ).ant-input-affix-wrapper:focus,.ant-input-affix-wrapper-status-error:not(
      .ant-input-affix-wrapper-disabled,
      .ant-input-affix-wrapper-borderless
    ).ant-input-affix-wrapper-focused{border-color:`,n.colors.errorHover,";box-shadow:0 0 0 2px ",n.colors.errorOutline,";}.ant-input-group-addon{background:transparent;}.ant-input-group>.ant-input:first-child,.ant-input-group-addon:first-child{border-bottom-right-radius:0;border-top-right-radius:0;}&.ant-input:hover,&.ant-input:focus,&.ant-input-focused{border-color:",n.colors.primaryHover,";};label:emotion-inputCss;"),H={allowMultipleSpaces:!0,deburr:!1,trim:!0};var $={name:"p677dx-emotion-StyledInput",styles:'input.ant-input[type="number"]::-webkit-outer-spin-button,input.ant-input[type="number"]::-webkit-inner-spin-button{margin:0;appearance:none;}input.ant-input[type="number"]{appearance:textfield;};label:emotion-StyledInput;'};const B=b(h,{shouldForwardProp:P(["$noSpinner"]),target:"e1mntp0t3",label:"emotion-StyledInput"})(v," ",r=>r.$noSpinner&&r.type==="number"&&$,";"),w=b(p.forwardRef(function({safeString:t,preSafeString:a=y,postSafeString:o=y,...e},s){const l=_(i=>{var f;if((f=e.onBlurCapture)==null||f.call(e,i),i.defaultPrevented||!e.onChange||typeof e.value!="string"||t===!1)return;const u=V({},{...H,trim:!1},t),c=e.value,m=q(()=>c,a,g=>C(g,u),o)();m!==c&&A(i.target,i,e.onChange,m)});return d(h.TextArea,{ref:s,...e,onBlurCapture:l})}),{target:"e1mntp0t2",label:"emotion-InputTextArea"})(v,";"),S=b(h.Password,{target:"e1mntp0t1",label:"emotion-InputPassword"})(v,";"),x=Object.assign(p.forwardRef(function({safeString:t,preSafeString:a=y,postSafeString:o=y,...e},s){const l=_(function(u){var g;if((g=e.onBlurCapture)==null||g.call(e,u),u.defaultPrevented||!e.onChange||typeof e.value!="string"||t===!1||e.type==="password"&&t===void 0)return;const c=V({},H,t),m=e.value,f=q(()=>m,a,T=>C(T,c),o)();f!==e.value&&A(u.target,u,e.onChange,f)});return d(B,{...e,onBlurCapture:l,ref:s})}),{TextArea:w,Password:S});N(p.forwardRef(function({accept:t,onChange:a,...o},e){const[s,l]=p.useState("");return d("input",{...o,type:"file",accept:t,value:s,onChange:i=>{a==null||a(i),l("")},ref:e})}));const R=N(p.forwardRef(function(t,a){const o=p.useMemo(()=>t.value===void 0?"":typeof t.value=="string"?t.value:JSON.stringify(t.value),[t.value]);return d(x,{readOnly:!0,...t,suffix:d(k,{text:o,size:14,iconSize:14}),ref:a})})),I=b(R,{target:"e1mntp0t0",label:"emotion-HighlightedCopyInput"})("--input-color:",n.colors.neutral010,";--background-color:",n.colors.neutral001,";&.ant-input-affix-wrapper>input.ant-input{color:var(--input-color);}border-color:transparent;background:var(--background-color);color:var(--input-color);.ant-input{background:var(--background-color);}");try{I.displayName="HighlightedCopyInput",I.__docgenInfo={description:"",displayName:"HighlightedCopyInput",props:{safeString:{defaultValue:null,description:"",name:"safeString",required:!1,type:{name:"false | Partial<SafeStringOptions>"}},preSafeString:{defaultValue:null,description:"",name:"preSafeString",required:!1,type:{name:"(value: string) => string"}},postSafeString:{defaultValue:null,description:"",name:"postSafeString",required:!1,type:{name:"(value: string) => string"}},$noSpinner:{defaultValue:null,description:"",name:"$noSpinner",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<InputRef>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}}}}}catch{}try{x.displayName="Input",x.__docgenInfo={description:`Use this styled component instead of Ant Design Input.

It will automatically format the input value to be safe when blurred.

You can configure the safe string options by passing a partial of
\`SafeStringOptions\` to the 'safeString' prop.`,displayName:"Input",props:{$noSpinner:{defaultValue:null,description:"",name:"$noSpinner",required:!1,type:{name:"boolean"}},safeString:{defaultValue:null,description:"",name:"safeString",required:!1,type:{name:"false | Partial<SafeStringOptions>"}},preSafeString:{defaultValue:null,description:"",name:"preSafeString",required:!1,type:{name:"(value: string) => string"}},postSafeString:{defaultValue:null,description:"",name:"postSafeString",required:!1,type:{name:"(value: string) => string"}}}}}catch{}try{S.displayName="InputPassword",S.__docgenInfo={description:"",displayName:"InputPassword",props:{}}}catch{}try{w.displayName="InputTextArea",w.__docgenInfo={description:`Use this component instead of Ant Design TextArea.

You can also use it with 'Input.TextArea'.`,displayName:"InputTextArea",props:{}}}catch{}export{R as C,x as I,w as a,P as s};
