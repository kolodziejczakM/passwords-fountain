(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{172:function(e,t){},174:function(e,t){},195:function(e,t,a){"use strict";a.r(t),a.d(t,"setupClient",(function(){return s})),a.d(t,"fetchAllPasswordEntities",(function(){return c})),a.d(t,"createPasswordEntity",(function(){return l})),a.d(t,"updatePasswordEntity",(function(){return u})),a.d(t,"deletePasswordEntity",(function(){return d}));var n=a(158),i=a.n(n),r=a(50);const{query:o}=i.a,s=async e=>{const t=new i.a.Client(e),a=await t.query(o.CreateKey({role:"server"})),n=new i.a.Client({secret:a.secret});return await(async e=>{const t=await e.query(o.Paginate(o.Collections()));return Boolean(t.data.length)})(n)||await n.query(o.CreateCollection({name:"entities"})),await(async e=>{const t=await e.query(o.Paginate(o.Indexes()));return Boolean(t.data.length)})(n)||await n.query(o.CreateIndex({name:"allEntities",source:o.Collection("entities")})),(async e=>{const t=localStorage.getItem(r.b);t&&await e.query(o.Delete(o.Ref(o.Keys(),t)))})(t),localStorage.setItem(r.b,a.ref.id),n},c=async e=>(await e.query(o.Map(o.Paginate(o.Match(o.Index("allEntities"))),o.Lambda("placeholderValue",o.Get(o.Var("placeholderValue")))))).data,l=async(e,t)=>{await e.query(o.Create(o.Collection("entities"),{data:t}))},u=async(e,t,a)=>{await e.query(o.Update(o.Ref(o.Collection("entities"),t),{data:a}))},d=async(e,t)=>{await e.query(o.Delete(o.Ref(o.Collection("entities"),t)))}}}]);
//# sourceMappingURL=2.bundle.js.map