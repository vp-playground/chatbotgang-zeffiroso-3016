import{d as t}from"./disableChromaticSnapshotParameter-ChGjLlBP.js";const e=()=>null;try{e.displayName="Hotkey",e.__docgenInfo={description:"",displayName:"Hotkey",props:{orgId:{defaultValue:null,description:"",name:"orgId",required:!0,type:{name:"CantataTypes"}},orgUserId:{defaultValue:null,description:"",name:"orgUserId",required:!0,type:{name:"CantataTypes"}},feature:{defaultValue:null,description:"",name:"feature",required:!0,type:{name:"enum",value:[{value:'"addNote"'},{value:'"editNote"'},{value:'"processingStatus"'}]}},hotkey:{defaultValue:null,description:"",name:"hotkey",required:!0,type:{name:"string"}},path:{defaultValue:null,description:`Hotkey path. Please join the array with \` \`.

\`\`\`ts
onEnabledHotkeyFire(e) {
  ga4Event("hotkey", {
    path: e.detail.path.join(" "),
    // ...other properties
  });
}
\`\`\``,name:"path",required:!0,type:{name:"string"}}}}}catch{}const n={component:e,parameters:t},o={},u=["DefaultStory"];export{o as DefaultStory,u as __namedExportsOrder,n as default};
