import{c as h,s as Q,m as C}from"./traditional-B_ldJKp3.js";import{s as g}from"./index-FhjP52Um.js";import{j as l}from"./emotion-react-jsx-runtime.browser.esm-B6nDGTOp.js";import{S as v}from"./models-D08OMJcb.js";import{c as x}from"./createContext-Co4ks8zE.js";import{W as b}from"./WeekdayNumberSchema-CgxigkyA.js";import{r as _}from"./index-qCb0-TeD.js";import{a as w,b as E,c as B,d as M,e as S,u as q,f as N}from"./whatsAppAttachment-Dl_LDQ-f.js";function H(e){return Number.isNaN(e.getTime())}const m=h()(()=>({now:new Date}),Q),P=5,k=g(1)/P;function y(){m.setState({now:new Date}),setTimeout(y,k)}y();function d(){return m(e=>e.now)}try{d.displayName="useNow",d.__docgenInfo={description:`Retrieves the current time.

Use this hook with caution, as it can lead to the component re-rendering
with every frame.`,displayName:"useNow",props:{}}}catch{}function i(){const e=x({name:"LoaderContext"}),r=({queries:t,children:n})=>Object.values(t).some(a=>!a.isSuccess)?null:l(e.Provider,{value:t,children:n});function o(){return e.useContext()}function u(){const t=o();return C(t,n=>n.data)}return{Provider:r,useQueries:o,useData:u}}try{i.displayName="createQueriesContext",i.__docgenInfo={description:`Create a context to wrap multiple queries and provide the data from the
queries.

\`\`\`tsx
// 1. Declare the queries
function useMyQueries() {
  const foo = useQuery(["b"], () => "str", {
    // 2. enable suspense and error boundary
    suspense: true,
    useErrorBoundary: true,
  });
  const bar = useQuery(["b"], () => 123, {
    suspense: true,
    useErrorBoundary: true,
  });
  const result = useMemo(() => ({ foo, bar }), [foo, bar]);
  return result;
}

// 3. Create the context
const MyQueriesContext = createQueriesContext<ReturnType<typeof useMyQueries>>();

function Wrapped() {
  const queries = useMyQueries();
  return (
    // 4. Wrap the provider with ErrorBoundary and Suspense
    <ErrorBoundary>
      <Suspense>
        <MyQueriesContext.Provider queries={queries}>
          <Content />
        </MyQueriesContext.Provider>
      </Suspense>
    </ErrorBoundary>
  );
}

function Children() {
  // 5. Use the data from the context without error handling and suspense
  const data = MyQueriesContext.useData(); // { foo: "str", bar: 123 }
}
\`\`\``,displayName:"createQueriesContext",props:{}}}catch{}const D=M.hooks,I=S.hooks,p=w.hooks,A=B.hooks,O=E.hooks;function W(){const e=q(),r=N(s=>s.value),o=p.useGetById({params:{orgId:r}},{select:s=>({...s,startWeekday:b.Monday,salesBindingProvider:v.parse("91")}),suspense:!0,useErrorBoundary:!0,enabled:e}),u=O.useGetMe({params:{orgId:r}},{suspense:!0,useErrorBoundary:!0,enabled:e}),t=A.useListRoles({params:{orgId:r}},{suspense:!0,useErrorBoundary:!0,enabled:e,select:s=>s.roles}),n=D.useEnabledAiCopilot({params:{orgId:r}},{suspense:!0,useErrorBoundary:!0,select:s=>s.enabled}),a=I.useList({params:{orgId:r}},{suspense:!0,useErrorBoundary:!0}),c=p.useGetUtmSetting({params:{orgId:r}},{useErrorBoundary:!0,suspense:!0});return _.useMemo(()=>({org:o,me:u,roles:t,enableAiCopilot:n,featureControl:a,utmSetting:c}),[n,a,u,o,t,c])}const f=i(),L=({children:e})=>{const r=W();return l(f.Provider,{queries:r,children:e})},J={Provider:L,useData:f.useData};export{H as i,J as o,d as u};
