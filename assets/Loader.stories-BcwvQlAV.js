import{a as o,j as a}from"./emotion-react-jsx-runtime.browser.esm-B6nDGTOp.js";import{c as n}from"./emotion-react.browser.esm-DKbCFQzN.js";import{t as k}from"./index-BA0eH0Wu.js";import{r as w}from"./index-qCb0-TeD.js";import{a as z}from"./index-C0ZrYZUP.js";import{d as R,c as V}from"./index-gEP6Tn1u.js";import{u as B}from"./useTranslation-XVYQH2mr.js";import"./jsx-runtime-DzlC0hKS.js";import"./inspectMessage-DlwZE6zu.js";import"./index-BAiONZ7V.js";import"./define-D3i8B5cg.js";import"./types-Dn-G_zsM.js";import"./traditional-B_ldJKp3.js";import"./index-CrYrvawI.js";import"./index-C5U6HIMD.js";import"./index-DzgdUzM0.js";import"./index-iJUMMFGI.js";import"./index-MOlr3Ojg.js";import"./index-BsfIDxJ3.js";import"./index-CatqC4ig.js";import"./property-DTA7hnOA.js";import"./get-DGJ4vF0c.js";import"./vanilla-DtBHub2h.js";import"./capitalize-CY0R7VOI.js";const t=R({root:{name:"v79s01-emotion-root",styles:"display:flex;flex-direction:column;align-items:stretch;gap:8px;label:emotion-root;"},progress:{name:"o1kw3k-emotion-progress",styles:"display:flex;flex-direction:row;gap:8px;align-items:center;label:emotion-progress;"},count:n([V,{fontSize:"0.75rem",overflow:"visible"}],";label:emotion-count;"),success:n({color:k.colors.success},";label:emotion-success;"),warning:n({color:k.colors.warning},";label:emotion-warning;"),error:n({color:k.colors.error},";label:emotion-error;"),reports:{name:"r2qf13-emotion-reports",styles:"display:flex;flex-direction:column;gap:8px;label:emotion-reports;"},reportItem:{name:"139v98d-emotion-reportItem",styles:"font-size:0.875rem;display:flex;flex-direction:column;gap:4px;label:emotion-reportItem;"},reportItemDescription:{name:"urp3jt-emotion-reportItemDescription",styles:"font-size:0.75rem;label:emotion-reportItemDescription;"}}),h=({tasks:s})=>{const{t:l}=B(),c=w.useMemo(()=>s.some(e=>e.state==="pending"),[s]),r=w.useMemo(()=>s.some(e=>e.state==="error")?"error":s.some(e=>e.state==="exist")?"warning":s.some(e=>e.state==="success")?"someSuccessSomeLoading":s.every(e=>e.state==="success")?"allSuccess":void 0,[s]),x=s.length,S=s.filter(e=>e.state!=="pending").length,b=s.filter(e=>e.state==="success"),y=s.filter(e=>e.state==="error"),f=s.filter(e=>e.state==="exist"),q=s.filter(e=>e.state==="pending");return o("div",{css:t.root,children:[o("div",{css:t.progress,children:[a(z,{total:x,value:S,state:r==="allSuccess"?"success":r==="someSuccessSomeLoading"?"regular":r,loading:c}),o("div",{css:n([t.count,r==="allSuccess"||r==="someSuccessSomeLoading"?t.success:r==="warning"?t.warning:r==="error"?t.error:void 0],";label:emotion-Loader;"),children:[S," / ",x]})]}),q.length!==x&&o("div",{css:t.reports,children:[b.length===0?null:a("div",{css:n([t.reportItem,t.success],";label:emotion-Loader;"),children:a("div",{children:l("page.settings.users.invite.batch.result.success.title",{count:b.length})})}),f.length===0?null:o("div",{css:n([t.reportItem,t.warning],";label:emotion-Loader;"),children:[a("div",{children:l("page.settings.users.invite.batch.result.existing.title",{count:f.length})}),a("div",{css:t.reportItemDescription,children:f.map(e=>e.email).join(", ")})]}),y.length===0?null:o("div",{css:n([t.reportItem,t.error],";label:emotion-Loader;"),children:[a("div",{children:l("page.settings.users.invite.batch.result.failed.title",{count:y.length})}),a("div",{css:t.reportItemDescription,children:y.map(e=>e.email).join(", ")})]})]})]})};try{h.displayName="Loader",h.__docgenInfo={description:"",displayName:"Loader",props:{tasks:{defaultValue:null,description:"",name:"tasks",required:!0,type:{name:"Task[]"}}}}}catch{}const{useMemo:K}=__STORYBOOK_MODULE_PREVIEW_API__,i=[{email:"bulbasaur@mail.com",state:"success"},{email:"charmander@mail.com",state:"success"},{email:"squirtle@mail.com",state:"exist"},{email:"caterpie@mail.com",state:"exist"},{email:"weedle@mail.com",state:"error"},{email:"pidgey@mail.com",state:"error"}],ge={component:h,args:{tasks:i},argTypes:{tasks:{description:"Array of tasks to be displayed"}},parameters:{docs:{description:{component:"Displays progress for batch processing tasks."}}}},m={parameters:{docs:{description:{story:"Interactive demo that allows you to control the number of tasks and their states using sliders."}}},args:{count:0,total:i.length,tasks:i},argTypes:{tasks:{table:{disable:!0}},count:{description:"Demo Control: Number of processed tasks",control:{type:"range",min:0,max:i.length}},total:{description:"Demo Control: Total tasks to display",control:{type:"range",min:1,max:i.length}}},render:s=>{const l=K(()=>i.slice(0,s.total).map((c,r)=>({...c,state:r>=s.count?"pending":c.state})),[s.count,s.total]);return a(h,{tasks:l})}},p={parameters:{docs:{description:{story:"Shows the loader in a state where all tasks are pending, representing the initial state of a batch process."}}},args:{tasks:[{email:"user1@example.com",state:"pending"},{email:"user2@example.com",state:"pending"},{email:"user3@example.com",state:"pending"}]}},d={parameters:{docs:{description:{story:"Shows how the loader handles multiple different states simultaneously, including success and pending tasks."}}},args:{tasks:[{email:"user1@example.com",state:"success"},{email:"user2@example.com",state:"success"},{email:"user3@example.com",state:"pending"}]}},u={parameters:{docs:{description:{story:"Shows how the loader handles multiple different states simultaneously, including success, error, existing, and pending tasks."}}},args:{tasks:[{email:"user1@example.com",state:"success"},{email:"user2@example.com",state:"exist"},{email:"user3@example.com",state:"error"},{email:"user4@example.com",state:"pending"}]}},g={parameters:{docs:{description:{story:"Shows how the loader handles multiple different states simultaneously, including success, existing, and pending tasks."}}},args:{tasks:[{email:"user1@example.com",state:"success"},{email:"user2@example.com",state:"exist"},{email:"user4@example.com",state:"pending"}]}};var v,T,I;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Interactive demo that allows you to control the number of tasks and their states using sliders."
      }
    }
  },
  args: {
    count: 0,
    total: fakeTasks.length,
    tasks: fakeTasks
  },
  argTypes: {
    tasks: {
      table: {
        disable: true
      }
    },
    count: {
      description: "Demo Control: Number of processed tasks",
      control: {
        type: "range",
        min: 0,
        max: fakeTasks.length
      }
    },
    total: {
      description: "Demo Control: Total tasks to display",
      control: {
        type: "range",
        min: 1,
        max: fakeTasks.length
      }
    }
  },
  render: args => {
    const displayedTasks = useMemo<LoaderProps["tasks"]>(() => fakeTasks.slice(0, args.total).map<Task>((task, index) => ({
      ...task,
      state: index >= args.count ? "pending" : task.state
    })), [args.count, args.total]);
    return <Loader tasks={displayedTasks} />;
  }
}`,...(I=(T=m.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var _,L,D;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Shows the loader in a state where all tasks are pending, representing the initial state of a batch process."
      }
    }
  },
  args: {
    tasks: [{
      email: "user1@example.com",
      state: "pending"
    }, {
      email: "user2@example.com",
      state: "pending"
    }, {
      email: "user3@example.com",
      state: "pending"
    }]
  }
}`,...(D=(L=p.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var M,E,W;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Shows how the loader handles multiple different states simultaneously, including success and pending tasks."
      }
    }
  },
  args: {
    tasks: [{
      email: "user1@example.com",
      state: "success"
    }, {
      email: "user2@example.com",
      state: "success"
    }, {
      email: "user3@example.com",
      state: "pending"
    }]
  }
}`,...(W=(E=d.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var j,O,P;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Shows how the loader handles multiple different states simultaneously, including success, error, existing, and pending tasks."
      }
    }
  },
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
}`,...(P=(O=u.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var A,C,N;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Shows how the loader handles multiple different states simultaneously, including success, existing, and pending tasks."
      }
    }
  },
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
}`,...(N=(C=g.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};const he=["InteractiveStory","AllPendingStory","MixedStatesWithSuccessStory","MixedStatesWithErrorStory","MixedStatesWithExistStory"];export{p as AllPendingStory,m as InteractiveStory,u as MixedStatesWithErrorStory,g as MixedStatesWithExistStory,d as MixedStatesWithSuccessStory,he as __namedExportsOrder,ge as default};
