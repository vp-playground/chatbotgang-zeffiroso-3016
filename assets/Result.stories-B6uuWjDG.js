import{a as g,j as o}from"./emotion-react-jsx-runtime.browser.esm-B6nDGTOp.js";import{r as v}from"./index-qCb0-TeD.js";import{R as i}from"./index-BsopQtD9.js";import{d as A}from"./index-gEP6Tn1u.js";import{f as M}from"./fakeT-DC2bFs6A.js";import{u as K}from"./useTranslation-XVYQH2mr.js";import"./jsx-runtime-DzlC0hKS.js";import"./assignDisplayName-lT0r0-ot.js";import"./ResultListItem-BhaDeOrm.js";import"./emotion-react.browser.esm-DKbCFQzN.js";import"./index-BA0eH0Wu.js";import"./inspectMessage-DlwZE6zu.js";import"./index-BAiONZ7V.js";import"./define-D3i8B5cg.js";import"./types-Dn-G_zsM.js";import"./traditional-B_ldJKp3.js";import"./index-CrYrvawI.js";import"./index-C5U6HIMD.js";import"./index-DzgdUzM0.js";import"./index-iJUMMFGI.js";import"./index-MOlr3Ojg.js";import"./index-BsfIDxJ3.js";import"./index-CatqC4ig.js";import"./property-DTA7hnOA.js";import"./get-DGJ4vF0c.js";import"./vanilla-DtBHub2h.js";import"./capitalize-CY0R7VOI.js";const j=A({resultList:{name:"fg60y8-emotion-resultList",styles:"margin:12px 16px;label:emotion-resultList;"}}),x=M,L={success:{key:"success",i18nKey:x("page.settings.users.invite.batch.result.success.title"),color:"success",count:0,emails:[]},exist:{key:"exist",i18nKey:x("page.settings.users.invite.batch.result.existing.title"),color:"warning",count:0,emails:[]},error:{key:"error",i18nKey:x("page.settings.users.invite.batch.result.failed.title"),color:"error",count:0,emails:[]},pending:{key:"pending",i18nKey:"",color:"info",count:0,emails:[]}},p=({tasks:s})=>{const{t}=K(),d=v.useMemo(()=>s.reduce((r,a)=>{const n=r[a.state];return r[a.state]={...n,count:n.count+1,emails:[...n.emails,a.email]},r},{...L}),[s]);return g("div",{children:[o("div",{children:t("page.settings.users.invite.batch.result.content")}),o(i,{css:j.resultList,children:Object.values(d).map(e=>{if(e.count===0||e.key==="pending")return null;const a=e.color==="success";return g(i.Item,{color:e.color,children:[o(i.Item.Header,{children:t(e.i18nKey,{count:e.count})}),a?null:o(i.Item.Description,{children:e.emails.join(", ")})]},e.color)})})]})};try{p.displayName="Result",p.__docgenInfo={description:"",displayName:"Result",props:{tasks:{defaultValue:null,description:"",name:"tasks",required:!0,type:{name:"Task[]"}}}}}catch{}const{useMemo:O}=__STORYBOOK_MODULE_PREVIEW_API__,N=[{email:"bulbasaur@mail.com",state:"success"},{email:"charmander@mail.com",state:"success"},{email:"squirtle@mail.com",state:"exist"},{email:"caterpie@mail.com",state:"exist"},{email:"weedle@mail.com",state:"error"},{email:"pidgey@mail.com",state:"error"}],me={component:p,args:{tasks:N},argTypes:{tasks:{description:"Array of tasks to be displayed",control:"object"}},parameters:{docs:{description:{component:"Displays results for batch processing tasks."}}}},c={args:{successCount:2,existCount:2,errorCount:2,tasks:N},argTypes:{tasks:{table:{disable:!0}},successCount:{description:"Number of successful tasks",control:{type:"range",min:0,max:5}},existCount:{description:"Number of existing tasks",control:{type:"range",min:0,max:5}},errorCount:{description:"Number of failed tasks",control:{type:"range",min:0,max:5}}},render:s=>{const t=v.useCallback((e,r)=>Array(e).fill(null).map((a,n)=>({email:`${r}${n+1}@example.com`,state:r})),[]),d=O(()=>[...t(s.successCount,"success"),...t(s.existCount,"exist"),...t(s.errorCount,"error")],[s.successCount,s.existCount,s.errorCount,t]);return o(p,{tasks:d})}},m={args:{tasks:[{email:"user1@example.com",state:"success"},{email:"user2@example.com",state:"success"},{email:"user3@example.com",state:"success"}]}},l={args:{tasks:[{email:"user1@example.com",state:"success"},{email:"user2@example.com",state:"exist"},{email:"user3@example.com",state:"error"},{email:"user4@example.com",state:"pending"}]}},u={args:{tasks:[{email:"user1@example.com",state:"success"},{email:"user2@example.com",state:"exist"},{email:"user4@example.com",state:"pending"}]}};var y,k,f;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    successCount: 2,
    existCount: 2,
    errorCount: 2,
    tasks: fakeTasks
  },
  argTypes: {
    tasks: {
      table: {
        disable: true
      }
    },
    successCount: {
      description: "Number of successful tasks",
      control: {
        type: "range",
        min: 0,
        max: 5
      }
    },
    existCount: {
      description: "Number of existing tasks",
      control: {
        type: "range",
        min: 0,
        max: 5
      }
    },
    errorCount: {
      description: "Number of failed tasks",
      control: {
        type: "range",
        min: 0,
        max: 5
      }
    }
  },
  render: args => {
    const createTasks = useCallback((count: number, state: TaskState): Task[] => Array(count).fill(null).map((_, index) => ({
      email: \`\${state}\${index + 1}@example.com\`,
      state
    })), []);
    const displayedTasks = useMemo<ResultProps["tasks"]>(() => [...createTasks(args.successCount, "success"), ...createTasks(args.existCount, "exist"), ...createTasks(args.errorCount, "error")], [args.successCount, args.existCount, args.errorCount, createTasks]);
    return <Result tasks={displayedTasks} />;
  }
}`,...(f=(k=c.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var S,C,b;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    tasks: [{
      email: "user1@example.com",
      state: "success"
    }, {
      email: "user2@example.com",
      state: "success"
    }, {
      email: "user3@example.com",
      state: "success"
    }]
  }
}`,...(b=(C=m.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var T,_,h;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    tasks: [{
      email: "user1@example.com",
      state: "success"
    }, {
      email: "user2@example.com",
      state: "exist"
    }, {
      email: "user3@example.com",
      state: "error"
    }, {
      email: "user4@example.com",
      state: "pending"
    }]
  }
}`,...(h=(_=l.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var E,I,R;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    tasks: [{
      email: "user1@example.com",
      state: "success"
    }, {
      email: "user2@example.com",
      state: "exist"
    }, {
      email: "user4@example.com",
      state: "pending"
    }]
  }
}`,...(R=(I=u.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};const le=["InteractiveStory","AllSuccessStory","MixedStatesWithErrorStory","MixedStatesWithExistStory"];export{m as AllSuccessStory,c as InteractiveStory,l as MixedStatesWithErrorStory,u as MixedStatesWithExistStory,le as __namedExportsOrder,me as default};
