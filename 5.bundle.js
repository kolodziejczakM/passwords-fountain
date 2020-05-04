(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{121:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),r=a(5),o=a.n(r),c=a(124);const l=({children:e,onClick:t,disabled:a})=>Object(n.h)(c.b,{type:"button",onClick:t,disabled:a},Object(n.h)(c.a,null,e));l.propTypes={disabled:o.a.bool,onClick:o.a.func.isRequired,children:o.a.any.isRequired},l.defaultProps={disabled:!1}},122:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(7),r=a(49),o=a(50),c=a(48),l=a(25);const s=Object(r.b)("database"),i=async(e,t,n)=>{const{setupClient:i}=await Promise.all([a.e(0),a.e(2)]).then(a.bind(null,195)),{encrypt:d,decrypt:b}=await Promise.all([a.e(1),a.e(3)]).then(a.bind(null,196));try{const e=n===Object(c.a)()?b(n,t):n,a=await i({secret:e}),r=d(e,t);return localStorage.setItem(o.a,r),s({client:a})}catch(e){return Object(r.a)(l.a.hideGlobalLoader),Object(r.a)(l.a.showSnackbar,"snackbar.couldNotConnectToDB","error"),s({})}};var d=a(47);const b=Object(r.b)("passwordList"),u={switchOptionPanelVariant:(e,t)=>b({currentOptionPanelVariantName:t}),resetSelectedAndDecryptedEntity:()=>b({selectedAndDecryptedEntity:{}}),setSelectedAndDecryptedEntity:(e,t)=>b({selectedAndDecryptedEntity:t}),fetchPasswords:async(e,t,o)=>{Object(r.a)(l.a.showGlobalLoader);const{fetchAllPasswordEntities:s}=await Promise.all([a.e(0),a.e(2)]).then(a.bind(null,195));Object(c.c)(e)||await Object(r.a)(i,t,o);const p=Object(c.b)(n.a.getState());try{const e=await s(p);return Object(r.a)(l.a.hideGlobalLoader),Object(r.a)(l.a.showSnackbar,"snackbar.passwordsFetchedSuccessfully","success"),Object(r.a)(u.switchOptionPanelVariant,d.a.entityFormCollapsed),b({passwords:e})}catch(e){return Object(r.a)(l.a.hideGlobalLoader),Object(r.a)(l.a.showSnackbar,"snackbar.couldNotFetchPasswords","error"),b({})}},addNewPassword:async(e,t,o)=>{Object(r.a)(l.a.showGlobalLoader);const{createPasswordEntity:s}=await Promise.all([a.e(0),a.e(2)]).then(a.bind(null,195)),{encrypt:i}=await Promise.all([a.e(1),a.e(3)]).then(a.bind(null,196)),p=Object(c.b)(n.a.getState());try{const e=i({login:t.login,password:t.password},o,!0);await s(p,{label:t.label,value:e}),Object(r.a)(l.a.hideGlobalLoader),Object(r.a)(u.switchOptionPanelVariant,d.a.entityFormCollapsed)}catch(e){Object(r.a)(l.a.hideGlobalLoader),Object(r.a)(l.a.showSnackbar,"snackbar.couldNotCreateNewPassword","error")}finally{return b({})}},editPassword:async(e,t,o)=>{Object(r.a)(l.a.showGlobalLoader);const{updatePasswordEntity:s}=await Promise.all([a.e(0),a.e(2)]).then(a.bind(null,195)),{encrypt:i}=await Promise.all([a.e(1),a.e(3)]).then(a.bind(null,196)),p=Object(c.b)(n.a.getState());try{const e=i({login:t.login,password:t.password},o,!0);await s(p,t.refId,{label:t.label,value:e}),Object(r.a)(l.a.hideGlobalLoader),Object(r.a)(u.resetSelectedAndDecryptedEntity),Object(r.a)(u.switchOptionPanelVariant,d.a.entityFormCollapsed)}catch(e){Object(r.a)(l.a.hideGlobalLoader),Object(r.a)(l.a.showSnackbar,"snackbar.couldNotEditPassword","error")}finally{return b({})}},removePassword:async(e,t)=>{Object(r.a)(l.a.showGlobalLoader);const{deletePasswordEntity:o}=await Promise.all([a.e(0),a.e(2)]).then(a.bind(null,195)),s=Object(c.b)(n.a.getState());try{await o(s,t),Object(r.a)(l.a.hideGlobalLoader)}catch(e){Object(r.a)(l.a.hideGlobalLoader),Object(r.a)(l.a.showSnackbar,"snackbar.couldNotRemovePassword","error")}finally{return b({})}}}},124:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return l}));var n=a(0),r=a(2),o=a(1);Object(r.b)(n.h);const c=Object(r.c)("button")`
    ${o.e.text14}
    padding: ${o.d.spacing.s12};
    min-width: 100px;
    max-width: 360px;
    text-transform: uppercase;
    background: ${o.d.colors.primaryBlue};
    box-shadow: ${o.d.shadows.clickableItem};

    &:focus {
        border: none;
        outline: none;
    }

    &:active {
        box-shadow: none;
    }

    &:disabled {
        box-shadow: none;
        background: ${o.d.colors.gray};
    }

    &:hover:enabled {
        cursor: pointer;

        * {
            text-decoration: underline;
        }
    }

    ${o.a.gte(o.d.breakpoints.s375)(o.c.css`
        ${o.e.text16}
        padding: ${o.d.spacing.s12} ${o.d.spacing.m18};
    `)}

    ${o.a.gte(o.d.breakpoints.s480)(o.c.css`
        ${o.e.text18}
        padding: ${o.d.spacing.s12} ${o.d.spacing.xl30};
    `)}
`,l=Object(r.c)("span")`
    display: grid;
    place-items: center;
    color: ${o.d.colors.white};
    white-space: nowrap;
`},125:function(e,t,a){"use strict";a.d(t,"d",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return o})),a.d(t,"e",(function(){return c})),a.d(t,"a",(function(){return l}));const n=e=>e&&e.length>=8||"optionsPanel.masterKeyTooShort",r=e=>e&&e.length>=3||"optionsPanel.labelTooShort",o=e=>e&&e.length>=3||"optionsPanel.loginTooShort",c=e=>e&&e.length>=3||"optionsPanel.passwordTooShort",l=e=>e&&e.length>=40||"settings.adminKeyTooShort"},128:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a(5),o=a.n(r),c=a(2),l=a(1);Object(c.b)(n.h);const s=Object(c.c)("section")`
    display: grid;
`,i=Object(c.c)("div")`
    ${l.e.text18}
    font-family: ${l.d.fontFamilies.bold};
    color: ${l.d.colors.darkBlue};
    margin-bottom: ${l.d.spacing.xs6};
`,d=Object(c.c)("div")`
    margin-bottom: ${l.d.spacing.xs6};
`,b=Object(c.c)("div")`
    ${l.e.text18}
    color: ${l.d.colors.red};
`,u=({hasError:e,renderLabel:t,renderInput:a,renderError:r})=>Object(n.h)(s,null,Object(n.h)(i,null,t()),Object(n.h)(d,null,a()),e&&Object(n.h)(b,null,r()));u.propTypes={hasError:o.a.oneOfType([o.a.string,o.a.bool]).isRequired,renderLabel:o.a.func.isRequired,renderInput:o.a.func.isRequired,renderError:o.a.func.isRequired}},129:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),r=a(5),o=a.n(r),c=a(2),l=a(1);Object(c.b)(n.h);const s=l.c.css`
    border: 1px solid ${l.d.colors.primaryBlue};

    &:focus {
        box-shadow: 0 0 0 2px ${l.d.colors.primaryBlue} inset;
    }
`,i=l.c.css`
    border: 1px solid ${l.d.colors.red};
    color: ${l.d.colors.red};

    &:focus {
        box-shadow: 0 0 0 2px ${l.d.colors.red} inset;
    }
`,d=Object(c.c)("input")`
    ${l.e.text18}
    padding: ${l.d.spacing.s12};
    width: 100%;
    min-width: 240px;
    color: ${l.d.colors.darkBlue};
    box-shadow: ${l.d.shadows.clickableItem};
    outline: none;

    &:hover {
        text-decoration: underline;
    }

    ${({hasError:e})=>e?i:s}
`,b=({value:e,onInput:t,placeholder:a,hasError:r,name:o,type:c})=>Object(n.h)(d,{type:c,value:e,onInput:t,placeholder:a,hasError:r,name:o});b.propTypes={onInput:o.a.func.isRequired,value:o.a.string,placeholder:o.a.string,hasError:o.a.bool,name:o.a.string,type:o.a.string},b.defaultProps={value:"",placeholder:"",hasError:!1,name:"",type:"text"}},130:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(4);function r(e){for(var t,a,n,r=0,o={},c=/(radio|checkbox)/i,l=/(file|reset|submit|button)/i;n=e.elements[r++];)if(n.name&&!n.disabled&&!l.test(n.type))if(a=n.name,"select-multiple"===n.type)for(o[a]=[],t=0;t<n.options.length;t++)n.options[t].selected&&o[a].push(n.options[t].value);else c.test(n.type)?n.checked&&(t=o[a],n="on"===n.value||n.value,o[a]=null==t&&0!==t?n:[].concat(t,n)):(n.value||0===n.value)&&(t=o[a],o[a]=null==t&&0!==t?n.value:[].concat(t,n.value));return o}function o(e,t,a){t=t||{};var n,o,c,l,s,i=!0,d={},b=r(e);for(c in a&&a.trim&&((n={})[a]=t[a],t=n),t)for(l=(t[c].test||t[c]).call(t[c],b[c],b),s=(o=(n=e.elements[c]).length?n:[n]).length;s--;)o[s].isValid=!0===l||(d[c]=l,i=!1);return e.isValid=i,d}const c=(e,t,a,n,r)=>c=>{var l;const s=o(t.current,a),i=c.target.value;n(null!=i?i:""),r(null!==(l=s[e])&&void 0!==l?l:"")},l=(e,t,a,r="")=>{const[o,l]=Object(n.h)(r),[s,i]=Object(n.h)("");return[{value:o,setValue:l,errors:s,setErrors:i},{name:a,value:o,hasError:Boolean(s),onInput:c(a,e,t,l,i)}]}},197:function(e,t,a){"use strict";a.r(t),a.d(t,"useFirstTimeRedirection",(function(){return fe})),a.d(t,"PasswordList",(function(){return ve}));var n=a(0),r=a(7),o=a(2),c=a(1);Object(o.b)(n.h);const l=Object(o.c)("div")`
    margin-bottom: ${c.d.spacing.s12};
`,s=Object(o.c)("section")`
    padding-top: 100px;

    ${l}:last-of-type {
        margin-bottom: 0;
    }
`,i=Object(o.c)("div")`
    display: grid;
    justify-items: center;
    margin-bottom: ${c.d.spacing.s12};
`,d=Object(o.c)("div")`
    display: grid;
    place-items: center;
    padding: 140px 0 0 0;

    ${c.a.gte(c.d.breakpoints.s480)(c.c.css`
        padding: 170px 0 0 0;
    `)}
`,b=Object(o.c)("div")`
    ${c.e.text20}
    text-align: center;
    color: ${c.d.colors.darkBlue};
    padding: ${c.d.spacing.l24} 0;

    ${c.a.gte(c.d.breakpoints.s480)(c.c.css`
        ${c.e.text24}
    `)}
`,u=Object(o.c)("div")`
    margin: 0 auto;

    img {
        width: 100px;
        height: 100px;
    }

    ${c.a.gte(c.d.breakpoints.s480)(c.c.css`
        img {
            width: 200px;
            height: 200px;
        }
    `)}
`;var p=a(48),h=a(34),O=a(4),j=a(47);Object(o.b)(n.h);const g=Object(o.c)("section")`
    ${({currentVariantName:e})=>{switch(e){case j.a.connectCollapsed:case j.a.entityFormCollapsed:return`border: 2px solid ${c.d.colors.pastelGreen};`;case j.a.connectExpanded:case j.a.entityFormExpanded:return`border: 2px solid ${c.d.colors.significantGreen};`}return`border: 2px solid ${c.d.colors.pastelGreen};`}}
    z-index: ${c.d.zIndexes.xs};
    position: absolute;
    top: 76px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 36px);
    max-width: ${c.d.breakpoints.s480};
    background: ${c.d.colors.white};
    padding: ${c.d.spacing.m18};
`,w=Object(o.c)("div")``,m=Object(o.c)("div")`
    padding-bottom: ${c.d.spacing.m18};
`,y=Object(o.c)("div")`
    display: grid;
    grid-auto-flow: column;
    grid-gap: ${c.d.spacing.xl30};
`;var f=a(5),v=a.n(f);Object(o.b)(n.h);const x=Object(o.c)("section")``;var $=a(121),P=a(3);const k=({switchCurrentVariantName:e})=>Object(n.h)(x,null,Object(n.h)(y,null,Object(n.h)($.a,{onClick:()=>{Object(h.route)("/settings")}},Object(n.h)(P.a,null,"optionsPanel.settings")),Object(n.h)($.a,{onClick:()=>e(j.a.connectExpanded)},Object(n.h)(P.a,null,"optionsPanel.connect"))));k.propTypes={switchCurrentVariantName:v.a.func.isRequired},Object(o.b)(n.h);const C=Object(o.c)("section")``;var E=a(128),S=a(129),L=a(122),N=a(125),I=a(130);function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const R={masterKey:N.d},T=({switchCurrentVariantName:e})=>{var t;const a=Object(r.c)(p.a),o=Object(r.b)(L.a.fetchPasswords),c=Object(O.g)(void 0),[l,s]=Object(I.a)(c,R,"masterKey");return Object(n.h)(C,null,Object(n.h)(w,null,Object(n.h)(m,null,Object(n.h)("form",{ref:c},Object(n.h)(E.a,{hasError:s.hasError,renderLabel:()=>Object(n.h)(P.a,null,"optionsPanel.enterMasterKey"),renderInput:()=>Object(n.h)(S.a,V({type:"password",placeholder:"e.g. MyStrongPassword1234"},s)),renderError:()=>Object(n.h)(P.a,null,l.errors)})))),Object(n.h)(y,null,Object(n.h)($.a,{onClick:()=>e(j.a.connectCollapsed)},Object(n.h)(P.a,null,"optionsPanel.cancel")),Object(n.h)($.a,{onClick:async()=>{o(l.value,a)},disabled:!(null===(t=c.current)||void 0===t?void 0:t.isValid)},Object(n.h)(P.a,null,"optionsPanel.confirm"))))};T.propTypes={switchCurrentVariantName:v.a.func.isRequired},Object(o.b)(n.h);const q=Object(o.c)("section")``;var F=a(13),G=a(12);const B=e=>e.passwordList,D=(Date.now(),Date.now(),Date.now(),Date.now(),Object(G.a)(B,e=>e.passwords)),K=Object(G.a)(B,e=>e.currentOptionPanelVariantName),A=Object(G.a)(B,e=>e.selectedAndDecryptedEntity),M=Object(G.a)(A,e=>0!==Object.keys(e).length),z=({switchCurrentVariantName:e})=>{const t=Object(F.c)(M)?"optionsPanel.edit":"optionsPanel.addNew";return Object(n.h)(q,null,Object(n.h)(y,null,Object(n.h)($.a,{onClick:()=>{Object(h.route)("/settings")}},Object(n.h)(P.a,null,"optionsPanel.settings")),Object(n.h)($.a,{onClick:()=>e(j.a.entityFormExpanded)},Object(n.h)(P.a,null,t))))};z.propTypes={switchCurrentVariantName:v.a.func.isRequired},Object(o.b)(n.h);const J=Object(o.c)("section")``,X=Object(o.c)("div")`
    padding-bottom: ${c.d.spacing.m18};
`;function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const H={label:N.b,login:N.c,password:N.e,masterKey:N.d},Q=({switchCurrentVariantName:e})=>{var t;const a=Object(r.c)(p.a),o=Object(O.g)(void 0),c=Object(r.b)(L.a.addNewPassword),l=Object(r.b)(L.a.editPassword),s=Object(r.b)(L.a.fetchPasswords),i=Object(r.c)(A),d=Object(r.c)(M),b=d?"optionsPanel.edit":"optionsPanel.add",u=(e,t)=>Object(I.a)(o,H,e,t),[h,g]=u("label",i.label),[f,v]=u("login",i.login),[x,k]=u("password",i.password),[C,N]=u("masterKey"),V=e=>()=>Object(n.h)(P.a,null,e),R=e=>()=>Object(n.h)(P.a,null,e);return Object(n.h)(J,null,Object(n.h)(w,null,Object(n.h)(m,null,Object(n.h)("form",{ref:o},Object(n.h)(X,null,Object(n.h)(E.a,{hasError:g.hasError,renderLabel:V("optionsPanel.labelInputLabel"),renderInput:()=>Object(n.h)(S.a,W({placeholder:"e.g. My Bank Account"},g)),renderError:R(h.errors)})),Object(n.h)(X,null,Object(n.h)(E.a,{hasError:v.hasError,renderLabel:V("optionsPanel.loginInputLabel"),renderInput:()=>Object(n.h)(S.a,W({placeholder:"e.g. yourmail@yourmail.com"},v)),renderError:R(f.errors)})),Object(n.h)(X,null,Object(n.h)(E.a,{hasError:k.hasError,renderLabel:V("optionsPanel.passwordInputLabel"),renderInput:()=>Object(n.h)(S.a,W({type:"password",placeholder:"e.g. myPassWord1234"},k)),renderError:R(x.errors)})),Object(n.h)(X,null,Object(n.h)(E.a,{hasError:N.hasError,renderLabel:V("optionsPanel.masterKey"),renderInput:()=>Object(n.h)(S.a,W({type:"password",placeholder:"e.g. MyStrongPassword1234"},N)),renderError:R(C.errors)}))))),Object(n.h)(y,null,Object(n.h)($.a,{onClick:()=>e(j.a.entityFormCollapsed)},Object(n.h)(P.a,null,"optionsPanel.cancel")),Object(n.h)($.a,{onClick:async()=>{d?await l({label:h.value,login:f.value,password:x.value,refId:i.refId},C.value):await c({label:h.value,login:f.value,password:x.value},C.value),s(C.value,a)},disabled:!(null===(t=o.current)||void 0===t?void 0:t.isValid)},Object(n.h)(P.a,null,b))))};Q.propTypes={switchCurrentVariantName:v.a.func.isRequired};const U=()=>{const e=Object(r.c)(K),t=Object(r.b)(L.a.switchOptionPanelVariant),a={connectCollapsed:k,connectExpanded:T,entityFormCollapsed:z,entityFormExpanded:Q}[e];return Object(n.h)(g,{currentVariantName:e},Object(n.h)(a,{switchCurrentVariantName:t}))};U.propTypes={},Object(o.b)(n.h);const Y=Object(o.c)("div")`
    margin-bottom: ${c.d.spacing.m18};
`,Z=c.c.css`
    outline: ${c.d.spacing.xxs2} solid ${c.d.colors.significantGreen};
`,_=Object(o.c)("button")`
    width: 100%;
    box-shadow: ${c.d.shadows.clickableItem};
    background: ${c.d.colors.pastelGreen};
    padding: ${c.d.spacing.m18};
    ${({isSelected:e})=>e?Z:"outline: none;"}

    ${Y}:last-of-type {
        margin-bottom: 0;
    }

    &:hover {
        cursor: pointer;

        & > span {
            text-decoration: underline;
        }
    }
`,ee=Object(o.c)("span")`
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
`,te=Object(o.c)("span")`
    font-family: ${c.d.fontFamilies.bold};
    color: ${c.d.colors.darkBlue};
    ${c.e.text18}
`,ae=Object(o.c)("strong")`
    color: ${c.d.colors.darkBlue};
    word-break: break-all;
    ${c.e.text18}
`,ne=Object(o.c)("div")`
    display: grid;
    text-align: left;
`,re=Object(o.c)("div")`
    display: grid;
    align-content: space-between;
`,oe=Object(o.c)("div")`
    text-align: left;
`;var ce=a(124);Object(o.b)(n.h);const le=Object(o.c)(ce.b)`
    padding: ${c.d.spacing.xs6};
    min-width: initial;
`;var se=a(6);const ie=({iconName:e,width:t,height:a,onClick:r})=>Object(n.h)(le,{onClick:r},Object(n.h)(ce.a,null,Object(n.h)(se.a,{name:e,width:t,height:a})));ie.propTypes={iconName:v.a.any.isRequired,onClick:v.a.func.isRequired,width:v.a.number,height:v.a.number},ie.defaultProps={width:30,height:30};var de=a(16);Object(o.b)(n.h);const be=Object(o.c)("section")`
    position: fixed;
    z-index: ${c.d.zIndexes.m};
    top: 76px;
    left: 50%;
    transform: translateX(-50%);
    display: grid;
    width: 100%;
    min-width: 320px;
    max-width: 640px;
    justify-items: center;
    grid-auto-flow: row;
    padding: ${c.d.spacing.xl30} ${c.d.spacing.m18};
    border: 1px solid ${c.d.colors.primaryBlue};
    border-top: 4px solid ${c.d.colors.primaryBlue};
    background: ${c.d.colors.white};
`,ue=Object(o.c)("div")`
    ${c.e.text18}
    display: grid;
    max-width: 480px;
    width: 100%;
    padding: 0 ${c.d.spacing.xs6} ${c.d.spacing.xs6};
    margin-bottom: ${c.d.spacing.m18};
    text-align: center;
`,pe=Object(o.c)("div")`
    display: grid;
    grid-gap: ${c.d.spacing.xl30};
    grid-auto-flow: column;
`,he=({renderContent:e,renderControls:t})=>Object(n.h)(be,{onClick:e=>e.stopPropagation()},Object(n.h)(ue,null,e()),Object(n.h)(pe,null,t()));function Oe(){return(Oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}he.propTypes={renderContent:v.a.func.isRequired,renderControls:v.a.func.isRequired};const je={masterKey:N.d},ge="",we="removal",me="decryption",ye=({data:e,isSelected:t,onClick:o})=>{var c,l;const s=Object(O.g)(void 0),[i,d]=Object(O.h)(ge),b=Object(r.c)(p.a),u=Object(r.c)((h=e.ref.id,Object(G.a)(A,e=>e.refId===h?e:{})));var h;const g=0!==Object.keys(u).length,[w,m]=Object(I.a)(s,je,"masterKey"),y=Object(r.b)(L.a.removePassword),f=Object(r.b)(L.a.fetchPasswords),v=Object(r.b)(L.a.setSelectedAndDecryptedEntity),x=Object(r.b)(L.a.resetSelectedAndDecryptedEntity),k=()=>{d(ge),w.setValue(""),w.setErrors("")},C=()=>{i===me?(async()=>{const{decrypt:t}=await Promise.all([a.e(1),a.e(3)]).then(a.bind(null,196)),{login:n,password:r}=t(e.data.value,w.value,!0);v({refId:e.ref.id,label:e.data.label,login:n,password:r})})():(async()=>{const{decrypt:t}=await Promise.all([a.e(1),a.e(3)]).then(a.bind(null,196));t(e.data.value,w.value,!0),await y(e.ref.id),f(w.value,b)})(),k()},N=e=>t=>{t.stopPropagation(),i||d(e)},V=e=>{e.stopPropagation(),x()},R=Object(de.a)(()=>{const e=i===me?"prompt.decrypt":"prompt.remove";return Object(n.h)(he,{renderContent:()=>Object(n.h)("form",{ref:s},Object(n.h)(oe,null,Object(n.h)(E.a,{hasError:m.hasError,renderLabel:()=>Object(n.h)(P.a,null,"optionsPanel.enterMasterKey"),renderError:()=>Object(n.h)(P.a,null,w.errors),renderInput:()=>Object(n.h)(S.a,Oe({type:"password",placeholder:"e.g. MyStrongPassword1234"},m))}))),renderControls:()=>{var t;return Object(n.h)(n.Fragment,null,Object(n.h)($.a,{onClick:k},Object(n.h)(P.a,null,"optionsPanel.cancel")),Object(n.h)($.a,{onClick:C,disabled:!(null===(t=s.current)||void 0===t?void 0:t.isValid)},Object(n.h)(P.a,null,e)))}})}),T=Object(de.a)(()=>Object(n.h)(n.Fragment,null,Object(n.h)(ie,{iconName:"bin",onClick:N(we)}),g?Object(n.h)(ie,{iconName:"eyeFilled",onClick:V}):Object(n.h)(ie,{iconName:"eye",onClick:N(me)})));return Object(n.h)(_,{onClick:()=>{o(t?null:e),x(),k()},isSelected:t},Object(n.h)(ee,null,Object(n.h)(ne,null,Object(n.h)(Y,null,Object(n.h)(te,null,Object(n.h)(P.a,null,"passwordEntity.label"))," ","- ",Object(n.h)(ae,null,e.data.label)),Object(n.h)(Y,null,Object(n.h)(te,null,Object(n.h)(P.a,null,"passwordEntity.login"))," ","-"," ",Object(n.h)(ae,null,null!==(c=u.login)&&void 0!==c?c:j.b)),Object(n.h)(Y,null,Object(n.h)(te,null,Object(n.h)(P.a,null,"passwordEntity.password"))," ","-"," ",Object(n.h)(ae,null,null!==(l=u.password)&&void 0!==l?l:j.b))),Object(n.h)(re,null,T(t))),R(Boolean(i)&&t))};ye.propTypes={isSelected:v.a.bool.isRequired,data:v.a.any.isRequired,onClick:v.a.func.isRequired};const fe=()=>{Object(O.c)(()=>{Object(r.c)(p.d)&&!window.prerendering&&setTimeout(()=>{Object(h.route)("/settings")})},[])},ve=()=>{fe();const e=Object(r.c)(D),t=Object(r.c)(p.c),a=!t||t&&!Boolean(e.length),o=Object(F.b)(L.a.switchOptionPanelVariant),[c,h]=Object(O.h)(null);Object(O.c)(()=>{t&&o(j.a.entityFormCollapsed)},[]);const g=Object(de.a)(()=>{const e=t?"database":"padlock",a=t?"passwordList.noDataPlaceholder":"passwordList.connectionPlaceholder";return Object(n.h)(d,null,Object(n.h)(u,null,Object(n.h)(se.a,{name:e})),Object(n.h)(b,null,Object(n.h)(P.a,null,a)))});return Object(n.h)(s,null,Object(n.h)(i,null,Object(n.h)(U,null)),e.map(e=>Object(n.h)(l,{key:e.ref.id},Object(n.h)(ye,{data:e,isSelected:c===e,onClick:h}))),g(a))}}}]);
//# sourceMappingURL=5.bundle.js.map