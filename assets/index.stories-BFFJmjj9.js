import{j as t,F as m}from"./emotion-react-jsx-runtime.browser.esm-B6nDGTOp.js";import{c as y}from"./emotion-styled-base.browser.esm-DcS0-Etw.js";import{a as E}from"./assignDisplayName-lT0r0-ot.js";import{t as _}from"./index-BA0eH0Wu.js";import{m as w}from"./memo-BZYTsoqr.js";import{e as z}from"./index-BaJN9MlJ.js";import{r as c}from"./index-qCb0-TeD.js";import"./jsx-runtime-DzlC0hKS.js";import"./inspectMessage-DlwZE6zu.js";import"./index-BAiONZ7V.js";import"./define-D3i8B5cg.js";import"./types-Dn-G_zsM.js";import"./traditional-B_ldJKp3.js";import"./index-CrYrvawI.js";import"./index-C5U6HIMD.js";import"./index-DzgdUzM0.js";import"./index-iJUMMFGI.js";import"./index-MOlr3Ojg.js";import"./index-BsfIDxJ3.js";import"./index-CatqC4ig.js";import"./property-DTA7hnOA.js";import"./get-DGJ4vF0c.js";import"./vanilla-DtBHub2h.js";import"./capitalize-CY0R7VOI.js";import"./getDisplayName-Cdt1H-sM.js";const f=y("mark",{target:"eecg64y0",label:"emotion-DefaultEmphasize"})("all:unset;background-color:",_.colors.yellow005,";");function l(e,r="",a=f){if(!r)return t(m,{children:e});const i=e.split(new RegExp(`(${z(r)})`,"gi"));return t(m,{children:i.map((o,p)=>o.toLowerCase()===r.toLowerCase()?t(a,{children:o},p):o)})}const s=Object.assign(w(c.forwardRef(function({input:r,match:a,Emphasize:i,...o},p){const h=c.useMemo(()=>l(r,a,i),[i,r,a]);return t("span",{ref:p,...o,children:h})})),{highlight:l,DefaultEmphasize:f});E(s,"Highlight");try{s.displayName="Highlight",s.__docgenInfo={description:"",displayName:"Highlight",props:{input:{defaultValue:null,description:"",name:"input",required:!0,type:{name:"string"}},match:{defaultValue:null,description:"",name:"match",required:!1,type:{name:"string"}},Emphasize:{defaultValue:null,description:"",name:"Emphasize",required:!1,type:{name:"ComponentType<{ children: ReactNode; }>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSpanElement>"}}}}}catch{}const Q={component:s};var x={name:"1o441ej-emotion-decorators",styles:"white-space:pre;label:emotion-decorators;"};const n={decorators:[e=>t("div",{css:x,children:t(e,{})})],args:{input:"ab  cde  fg",match:" cde ",Emphasize:"default"},argTypes:{Emphasize:{options:["default","strong","em","mark"],control:{type:"select"},mapping:{default:void 0}}}};var d,g,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  decorators: [Story => <div css={css\`
          white-space: pre;
        \`}>
        <Story />
      </div>],
  args: {
    input: "ab  cde  fg",
    match: " cde ",
    // @ts-expect-error -- Override with \`argTypes.Emphasize.options\`.
    Emphasize: "default"
  },
  argTypes: {
    Emphasize: {
      options: ["default", "strong", "em", "mark"],
      control: {
        type: "select"
      },
      mapping: {
        default: undefined
      }
    }
  }
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const U=["Basic"];export{n as Basic,U as __namedExportsOrder,Q as default};
