function i(...t){return function(...r){let l=t.length?t[0].apply(this,r):r[0];for(let e=1;e<t.length;e++)l=t[e].call(this,l);return l}}export{i as f};
