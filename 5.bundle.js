(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{122:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n(5),o=n.n(r),c=n(127);const l=({type:e,children:t,onClick:n,disabled:r})=>Object(a.h)(c.b,{type:e,onClick:n,disabled:r},Object(a.h)(c.a,null,t));l.propTypes={type:o.a.string,disabled:o.a.bool,onClick:o.a.func.isRequired,children:o.a.any.isRequired},l.defaultProps={type:"button",disabled:!1}},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(7),r=n(50),o=n(51),c=n(49),l=n(26);const i=Object(r.b)("database"),s=async(e,t,a)=>{const{setupClient:s}=await Promise.all([n.e(0),n.e(2)]).then(n.bind(null,197)),{encrypt:d,decrypt:b}=await Promise.all([n.e(1),n.e(3)]).then(n.bind(null,198));try{const e=a===Object(c.a)()?b(a,t):a,n=await s({secret:e}),r=d(e,t);return localStorage.setItem(o.a,r),i({client:n})}catch(e){return Object(r.a)(l.a.hideGlobalLoader),Object(r.a)(l.a.showSnackbar,"snackbar.couldNotConnectToDB","error"),i({})}};var d=n(48);const b=Object(r.b)("passwordList"),u={switchOptionPanelVariant:(e,t)=>b({currentOptionPanelVariantName:t}),resetSelectedAndDecryptedEntity:()=>b({selectedAndDecryptedEntity:{}}),setSelectedAndDecryptedEntity:(e,t)=>b({selectedAndDecryptedEntity:t}),fetchPasswords:async(e,t,o,i=!1)=>{Object(r.a)(l.a.showGlobalLoader);const{fetchAllPasswordEntities:p}=await Promise.all([n.e(0),n.e(2)]).then(n.bind(null,197));Object(c.c)(e)&&!i||await Object(r.a)(s,t,o);const h=Object(c.b)(a.a.getState());try{const e=await p(h);return Object(r.a)(l.a.hideGlobalLoader),Object(r.a)(l.a.showSnackbar,"snackbar.passwordsFetchedSuccessfully","success"),Object(r.a)(u.switchOptionPanelVariant,d.a.entityFormCollapsed),b({passwords:e})}catch(e){return Object(r.a)(l.a.hideGlobalLoader),Object(r.a)(l.a.showSnackbar,"snackbar.couldNotFetchPasswords","error"),b({})}},addNewPassword:async(e,t,o)=>{Object(r.a)(l.a.showGlobalLoader);const{createPasswordEntity:i}=await Promise.all([n.e(0),n.e(2)]).then(n.bind(null,197)),{encrypt:s}=await Promise.all([n.e(1),n.e(3)]).then(n.bind(null,198)),p=Object(c.b)(a.a.getState());try{const e=s({login:t.login,password:t.password},o,!0);await i(p,{label:t.label,value:e}),Object(r.a)(l.a.hideGlobalLoader),Object(r.a)(u.switchOptionPanelVariant,d.a.entityFormCollapsed)}catch(e){Object(r.a)(l.a.hideGlobalLoader),Object(r.a)(l.a.showSnackbar,"snackbar.couldNotCreateNewPassword","error")}finally{return b({})}},editPassword:async(e,t,o)=>{Object(r.a)(l.a.showGlobalLoader);const{updatePasswordEntity:i}=await Promise.all([n.e(0),n.e(2)]).then(n.bind(null,197)),{encrypt:s}=await Promise.all([n.e(1),n.e(3)]).then(n.bind(null,198)),p=Object(c.b)(a.a.getState());try{const e=s({login:t.login,password:t.password},o,!0);await i(p,t.refId,{label:t.label,value:e}),Object(r.a)(l.a.hideGlobalLoader),Object(r.a)(u.resetSelectedAndDecryptedEntity),Object(r.a)(u.switchOptionPanelVariant,d.a.entityFormCollapsed)}catch(e){Object(r.a)(l.a.hideGlobalLoader),Object(r.a)(l.a.showSnackbar,"snackbar.couldNotEditPassword","error")}finally{return b({})}},removePassword:async(e,t)=>{Object(r.a)(l.a.showGlobalLoader);const{deletePasswordEntity:o}=await Promise.all([n.e(0),n.e(2)]).then(n.bind(null,197)),i=Object(c.b)(a.a.getState());try{await o(i,t),Object(r.a)(l.a.hideGlobalLoader)}catch(e){Object(r.a)(l.a.hideGlobalLoader),Object(r.a)(l.a.showSnackbar,"snackbar.couldNotRemovePassword","error")}finally{return b({})}}}},124:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return p}));var a=n(0),r=n(5),o=n.n(r),c=n(2),l=n(1);Object(c.b)(a.h);const i=Object(c.c)("section")`
    display: grid;
`,s=Object(c.c)("label")`
    ${l.e.text18}
    font-family: ${l.d.fontFamilies.bold};
    color: ${l.d.colors.darkBlue};
    margin-bottom: ${l.d.spacing.xs6};
`,d=Object(c.c)("div")`
    margin-bottom: ${l.d.spacing.xs6};
`,b=Object(c.c)("div")`
    ${l.e.text18}
    color: ${l.d.colors.red};
`,u="error-message",p=({id:e,hasError:t,renderLabel:n,renderInput:r,renderError:o})=>Object(a.h)(i,null,Object(a.h)(s,{htmlFor:e},n(e)),Object(a.h)(d,null,r(e)),t&&Object(a.h)(b,{id:`${e}-${u}`,"aria-role":"alert"},o(e)));p.propTypes={id:o.a.string.isRequired,hasError:o.a.oneOfType([o.a.string,o.a.bool]).isRequired,renderLabel:o.a.func.isRequired,renderInput:o.a.func.isRequired,renderError:o.a.func.isRequired}},126:function(e,t,n){"use strict";var a=n(124);n.d(t,"a",(function(){return a.a}))},127:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return l}));var a=n(0),r=n(2),o=n(1);Object(r.b)(a.h);const c=Object(r.c)("button")`
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
`},128:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"f",(function(){return l})),n.d(t,"a",(function(){return i}));const a=e=>e&&e.length>=8||"optionsPanel.masterKeyTooShort",r=e=>e&&e.length>=8||"optionsPanel.encryptionKeyTooShort",o=e=>e&&e.length>=3||"optionsPanel.labelTooShort",c=e=>e&&e.length>=3||"optionsPanel.loginTooShort",l=e=>e&&e.length>=3||"optionsPanel.passwordTooShort",i=e=>e&&e.length>=20||"settings.adminKeyTooShort"},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(0),r=n(5),o=n.n(r),c=n(2),l=n(1);Object(c.b)(a.h);const i=l.c.css`
    border: 1px solid ${l.d.colors.primaryBlue};

    &:focus {
        box-shadow: 0 0 0 2px ${l.d.colors.primaryBlue} inset;
    }
`,s=l.c.css`
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

    ${({hasError:e})=>e?s:i}
`;var b=n(124);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const p=({value:e,onInput:t,placeholder:n,hasError:r,name:o,type:c,id:l,ref:i,autofocus:s})=>{const p={"aria-invalid":r,...void 0!==l&&{"aria-describedby":`${l}-${b.b}`}};return Object(a.h)(d,u({ref:i,id:l,name:o,type:c,value:e,placeholder:n,onInput:t,hasError:r,autofocus:s},p))};p.propTypes={onInput:o.a.func.isRequired,hasError:o.a.bool},p.defaultProps={type:"text",hasError:!1}},132:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(4);function r(e){for(var t,n,a,r=0,o={},c=/(radio|checkbox)/i,l=/(file|reset|submit|button)/i;a=e.elements[r++];)if(a.name&&!a.disabled&&!l.test(a.type))if(n=a.name,"select-multiple"===a.type)for(o[n]=[],t=0;t<a.options.length;t++)a.options[t].selected&&o[n].push(a.options[t].value);else c.test(a.type)?a.checked&&(t=o[n],a="on"===a.value||a.value,o[n]=null==t&&0!==t?a:[].concat(t,a)):(a.value||0===a.value)&&(t=o[n],o[n]=null==t&&0!==t?a.value:[].concat(t,a.value));return o}function o(e,t,n){t=t||{};var a,o,c,l,i,s=!0,d={},b=r(e);for(c in n&&n.trim&&((a={})[n]=t[n],t=a),t)for(l=(t[c].test||t[c]).call(t[c],b[c],b),i=(o=(a=e.elements[c]).length?a:[a]).length;i--;)o[i].isValid=!0===l||(d[c]=l,s=!1);return e.isValid=s,d}const c=(e,t,n,a,r)=>c=>{var l;const i=o(t.current,n),s=c.target.value;a(null!=s?s:""),r(null!==(l=i[e])&&void 0!==l?l:"")},l=(e,t,n,r="")=>{const[o,l]=Object(a.h)(r),[i,s]=Object(a.h)("");return[{value:o,setValue:l,errors:i,setErrors:s},{name:n,value:o,hasError:Boolean(i),onInput:c(n,e,t,l,s)}]}},199:function(e,t,n){"use strict";n.r(t),n.d(t,"useFirstTimeRedirection",(function(){return $e})),n.d(t,"PasswordList",(function(){return xe}));var a=n(0),r=n(7),o=n(2),c=n(1);Object(o.b)(a.h);const l=Object(o.c)("li")`
    margin-bottom: ${c.d.spacing.s12};
`,i=Object(o.c)("section")`
    padding-top: 100px;

    ${l}:last-of-type {
        margin-bottom: 0;
    }
`,s=Object(o.c)("div")`
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
`;var p=n(49),h=n(35),O=n(4),j=n(48);Object(o.b)(a.h);const g=Object(o.c)("section")`
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
`,y=Object(o.c)("div")``,w=Object(o.c)("div")`
    padding-bottom: ${c.d.spacing.m18};
`,m=Object(o.c)("div")`
    display: flex;
    justify-content: center;

    button {
        width: 100%;
    }

    button:first-of-type {
        margin-right: ${c.d.spacing.xl30};
    }

    ${({isInEditMode:e})=>{if(e)return c.c.css`
        &::after {
            content: '•';
            font-size: ${c.d.fontSizes.xl32};
            color: ${c.d.colors.significantGreen};
            display: inline-block;
            position: relative;
            top: -20px;
            left: 8px;
        }`}}
`;var f=n(5),v=n.n(f);Object(o.b)(a.h);const $=Object(o.c)("section")``;var x=n(122),P=n(3);const k=({switchCurrentVariantName:e})=>Object(a.h)($,null,Object(a.h)(m,null,Object(a.h)(x.a,{onClick:()=>{Object(h.route)("/settings")}},Object(a.h)(P.a,null,"optionsPanel.settings")),Object(a.h)(x.a,{onClick:()=>e(j.a.connectExpanded)},Object(a.h)(P.a,null,"optionsPanel.connect"))));k.propTypes={switchCurrentVariantName:v.a.func.isRequired},Object(o.b)(a.h);const E=Object(o.c)("section")``;var C=n(126),S=n(131),L=n(123),V=n(128),I=n(132);function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const R={masterKey:V.e},T=({switchCurrentVariantName:e})=>{var t;const n=Object(r.c)(p.a),o=Object(r.b)(L.a.fetchPasswords),c=Object(O.g)(void 0),[l,i]=Object(I.a)(c,R,"masterKey"),s=async e=>{var t;e.preventDefault(),(null===(t=c.current)||void 0===t?void 0:t.isValid)&&o(l.value,n)};return Object(a.h)(E,null,Object(a.h)(y,null,Object(a.h)(w,null,Object(a.h)("form",{ref:c,onSubmit:s},Object(a.h)(C.a,{id:i.name,hasError:i.hasError,renderLabel:()=>Object(a.h)(P.a,null,"optionsPanel.enterMasterKey"),renderInput:e=>Object(a.h)(S.a,N({autofocus:!0,id:e,type:"password",placeholder:"e.g. MyStrongPassword1234"},i)),renderError:()=>Object(a.h)(P.a,null,l.errors)})))),Object(a.h)(m,null,Object(a.h)(x.a,{onClick:()=>e(j.a.connectCollapsed)},Object(a.h)(P.a,null,"optionsPanel.cancel")),Object(a.h)(x.a,{onClick:s,disabled:!(null===(t=c.current)||void 0===t?void 0:t.isValid)},Object(a.h)(P.a,null,"optionsPanel.confirm"))))};T.propTypes={switchCurrentVariantName:v.a.func.isRequired},Object(o.b)(a.h);const F=Object(o.c)("section")``;var q=n(16),G=n(12);const B=e=>e.passwordList,D=Object(G.a)(B,e=>e.passwords),K=Object(G.a)(B,e=>e.currentOptionPanelVariantName),A=Object(G.a)(B,e=>e.selectedAndDecryptedEntity),M=Object(G.a)(A,e=>0!==Object.keys(e).length),z=({switchCurrentVariantName:e})=>{const t=Object(q.c)(M),n=t?"optionsPanel.edit":"optionsPanel.addNew";return Object(a.h)(F,null,Object(a.h)(m,{isInEditMode:t},Object(a.h)(x.a,{onClick:()=>{Object(h.route)("/settings")}},Object(a.h)(P.a,null,"optionsPanel.settings")),Object(a.h)(x.a,{onClick:()=>e(j.a.entityFormExpanded)},Object(a.h)(P.a,null,n))))};z.propTypes={switchCurrentVariantName:v.a.func.isRequired},Object(o.b)(a.h);const J=Object(o.c)("section")``,X=Object(o.c)("div")`
    padding-bottom: ${c.d.spacing.m18};
`,W=Object(o.c)("div")`
    color: ${c.d.colors.darkBlue};
    font-style: italic;
    padding-top: ${c.d.spacing.xs6};
`;var H=n(15);function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const U={label:V.c,login:V.d,password:V.f,encryptionKey:V.b},Y=({switchCurrentVariantName:e})=>{var t;const n=Object(r.c)(p.a),o=Object(O.g)(void 0),c=Object(O.g)(void 0),l=Object(r.b)(L.a.addNewPassword),i=Object(r.b)(L.a.editPassword),s=Object(r.b)(L.a.fetchPasswords),d=Object(r.c)(A),b=Object(r.c)(M),u=b?"optionsPanel.edit":"optionsPanel.add";Object(O.c)(()=>{c.current.base.focus()},[c]);const h=(e,t)=>Object(I.a)(o,U,e,t),[g,f]=h("label",d.label),[v,$]=h("login",d.login),[k,E]=h("password",d.password),[V,N]=h("encryptionKey"),R=async e=>{var t;e.preventDefault(),(null===(t=o.current)||void 0===t?void 0:t.isValid)&&(b?await i({label:g.value,login:v.value,password:k.value,refId:d.refId},V.value):await l({label:g.value,login:v.value,password:k.value},V.value),s(V.value,n))},T=e=>()=>Object(a.h)(P.a,null,e),F=(e,t)=>()=>Object(a.h)(a.Fragment,null,Object(a.h)(P.a,null,e),Object(H.a)(()=>Object(a.h)(W,null,Object(a.h)(P.a,null,"settings.noteLabel")," ",Object(a.h)(P.a,null,t)))(Boolean(t)));return Object(a.h)(J,null,Object(a.h)(y,null,Object(a.h)(w,null,Object(a.h)("form",{ref:o,onSubmit:R},Object(a.h)(X,null,Object(a.h)(C.a,{id:f.name,hasError:f.hasError,renderLabel:F("optionsPanel.labelInputLabel"),renderInput:e=>Object(a.h)(S.a,Q({ref:c,id:e,placeholder:"e.g. My Bank Account"},f)),renderError:T(g.errors)})),Object(a.h)(X,null,Object(a.h)(C.a,{id:$.name,hasError:$.hasError,renderLabel:F("optionsPanel.loginInputLabel"),renderInput:e=>Object(a.h)(S.a,Q({id:e,placeholder:"e.g. yourmail@yourmail.com"},$)),renderError:T(v.errors)})),Object(a.h)(X,null,Object(a.h)(C.a,{id:E.name,hasError:E.hasError,renderLabel:F("optionsPanel.passwordInputLabel"),renderInput:e=>Object(a.h)(S.a,Q({id:e,type:"password",placeholder:"e.g. myPassWord1234"},E)),renderError:T(k.errors)})),Object(a.h)(X,null,Object(a.h)(C.a,{id:N.name,hasError:N.hasError,renderLabel:F("optionsPanel.encryptionKey","optionsPanel.noteEncryptionKey"),renderInput:e=>Object(a.h)(S.a,Q({id:e,type:"password",placeholder:"e.g. MyStrongPassword1234"},N)),renderError:T(V.errors)})),Object(a.h)("input",{type:"submit",hidden:!0})))),Object(a.h)(m,null,Object(a.h)(x.a,{onClick:()=>e(j.a.entityFormCollapsed)},Object(a.h)(P.a,null,"optionsPanel.cancel")),Object(a.h)(x.a,{onClick:R,disabled:!(null===(t=o.current)||void 0===t?void 0:t.isValid)},Object(a.h)(P.a,null,u))))};Y.propTypes={switchCurrentVariantName:v.a.func.isRequired};const Z=()=>{const e=Object(r.c)(K),t=Object(r.b)(L.a.switchOptionPanelVariant),n={connectCollapsed:k,connectExpanded:T,entityFormCollapsed:z,entityFormExpanded:Y}[e];return Object(a.h)(g,{currentVariantName:e},Object(a.h)(n,{switchCurrentVariantName:t}))};Z.propTypes={},Object(o.b)(a.h);const _=Object(o.c)("div")`
    margin-bottom: ${c.d.spacing.m18};
`,ee=c.c.css`
    outline: ${c.d.spacing.xxs2} solid ${c.d.colors.significantGreen};
`,te=Object(o.c)("button")`
    width: 100%;
    box-shadow: ${c.d.shadows.clickableItem};
    background: ${c.d.colors.pastelGreen};
    padding: ${c.d.spacing.m18};
    ${({isSelected:e})=>e?ee:"outline: none;"}

    ${_}:last-of-type {
        margin-bottom: 0;
    }

    &:hover {
        cursor: pointer;

        & > span {
            text-decoration: underline;
        }
    }
`,ne=Object(o.c)("span")`
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
`,ae=Object(o.c)("span")`
    font-family: ${c.d.fontFamilies.bold};
    color: ${c.d.colors.darkBlue};
    ${c.e.text18}
`,re=Object(o.c)("strong")`
    color: ${c.d.colors.darkBlue};
    word-break: break-all;
    ${c.e.text18}
`,oe=Object(o.c)("div")`
    display: grid;
    text-align: left;
`,ce=Object(o.c)("div")`
    display: grid;
    align-content: space-between;
`,le=Object(o.c)("div")`
    text-align: left;
`;var ie=n(127);Object(o.b)(a.h);const se=Object(o.c)(ie.b)`
    padding: ${c.d.spacing.xs6};
    min-width: initial;
`;var de=n(6);const be=({iconName:e,width:t,height:n,onClick:r})=>Object(a.h)(se,{onClick:r},Object(a.h)(ie.a,null,Object(a.h)(de.a,{name:e,width:t,height:n})));be.propTypes={iconName:v.a.any.isRequired,onClick:v.a.func.isRequired,width:v.a.number,height:v.a.number},be.defaultProps={width:30,height:30},Object(o.b)(a.h);const ue=Object(o.c)("section")`
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
`,pe=Object(o.c)("div")`
    ${c.e.text18}
    display: grid;
    max-width: 480px;
    width: 100%;
    padding: 0 ${c.d.spacing.xs6} ${c.d.spacing.xs6};
    margin-bottom: ${c.d.spacing.m18};
    text-align: center;
`,he=Object(o.c)("div")`
    display: grid;
    grid-gap: ${c.d.spacing.xl30};
    grid-auto-flow: column;
`,Oe=({renderContent:e,renderControls:t})=>Object(a.h)(ue,{onClick:e=>e.stopPropagation()},Object(a.h)(pe,null,e()),Object(a.h)(he,null,t()));function je(){return(je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}Oe.propTypes={renderContent:v.a.func.isRequired,renderControls:v.a.func.isRequired};const ge={encryptionKey:V.b},ye="",we="removal",me="decryption",fe=({data:e,isSelected:t,onClick:o})=>{var c,l;const i=Object(O.g)(void 0),s=Object(O.g)(void 0),[d,b]=Object(O.h)(ye),u=Object(r.c)(p.a),h=Object(r.c)((g=e.ref.id,Object(G.a)(A,e=>e.refId===g?e:{})));var g;const y=0!==Object.keys(h).length,[w,m]=Object(I.a)(i,ge,"encryptionKey"),f=Object(r.b)(L.a.removePassword),v=Object(r.b)(L.a.fetchPasswords),$=Object(r.b)(L.a.setSelectedAndDecryptedEntity),k=Object(r.b)(L.a.resetSelectedAndDecryptedEntity);Object(O.c)(()=>{var e,t;null===(e=s.current)||void 0===e||null===(t=e.base)||void 0===t||t.focus()},[s,d]);const E=()=>{b(ye),w.setValue(""),w.setErrors("")},V=t=>{var a;t.preventDefault(),(null===(a=i.current)||void 0===a?void 0:a.isValid)&&(d===me?(async()=>{const{decrypt:t}=await Promise.all([n.e(1),n.e(3)]).then(n.bind(null,198)),{login:a,password:r}=t(e.data.value,w.value,!0);$({refId:e.ref.id,label:e.data.label,login:a,password:r})})():(async()=>{const{decrypt:t}=await Promise.all([n.e(1),n.e(3)]).then(n.bind(null,198));t(e.data.value,w.value,!0),await f(e.ref.id),v(w.value,u)})(),E())},N=e=>t=>{t.stopPropagation(),d||b(e)},R=e=>{e.stopPropagation(),k()},T=Object(H.a)(()=>{const e=d===me?"prompt.decrypt":"prompt.remove";return Object(a.h)(Oe,{renderContent:()=>Object(a.h)("form",{ref:i,onSubmit:V},Object(a.h)(le,null,Object(a.h)(C.a,{id:m.name,hasError:m.hasError,renderLabel:()=>Object(a.h)(P.a,null,"optionsPanel.enterEncryptionKey"),renderError:()=>Object(a.h)(P.a,null,w.errors),renderInput:e=>Object(a.h)(S.a,je({ref:s,id:e,type:"password",placeholder:"e.g. MyStrongPassword1234"},m))}))),renderControls:()=>{var t;return Object(a.h)(a.Fragment,null,Object(a.h)(x.a,{onClick:E},Object(a.h)(P.a,null,"optionsPanel.cancel")),Object(a.h)(x.a,{onClick:V,disabled:!(null===(t=i.current)||void 0===t?void 0:t.isValid)},Object(a.h)(P.a,null,e)))}})}),F=Object(H.a)(()=>Object(a.h)(a.Fragment,null,Object(a.h)(be,{iconName:"bin",onClick:N(we)}),y?Object(a.h)(be,{iconName:"eyeFilled",onClick:R}):Object(a.h)(be,{iconName:"eye",onClick:N(me)})));return Object(a.h)(te,{onClick:n=>{0!==n.detail&&(o(t?null:e),k(),E())},isSelected:t},Object(a.h)(ne,null,Object(a.h)(oe,null,Object(a.h)(_,null,Object(a.h)(ae,null,Object(a.h)(P.a,null,"passwordEntity.label"))," ","- ",Object(a.h)(re,null,e.data.label)),Object(a.h)(_,null,Object(a.h)(ae,null,Object(a.h)(P.a,null,"passwordEntity.login"))," ","-"," ",Object(a.h)(re,null,null!==(c=h.login)&&void 0!==c?c:j.b)),Object(a.h)(_,null,Object(a.h)(ae,null,Object(a.h)(P.a,null,"passwordEntity.password"))," ","-"," ",Object(a.h)(re,null,null!==(l=h.password)&&void 0!==l?l:j.b))),Object(a.h)(ce,null,F(t))),T(Boolean(d)&&t))};fe.propTypes={isSelected:v.a.bool.isRequired,data:v.a.any.isRequired,onClick:v.a.func.isRequired};var ve=n(25);const $e=()=>{Object(O.c)(()=>{Object(r.c)(p.d)&&!window.prerendering&&setTimeout(()=>{Object(h.route)("/settings")})},[])},xe=()=>{$e();const e=Object(r.c)(D),t=Object(r.c)(p.c),n=Object(r.c)(ve.a),o=!t||t&&!n&&!Boolean(e.length),c=Object(r.b)(L.a.switchOptionPanelVariant),[h,g]=Object(O.h)(null);Object(O.c)(()=>{t&&c(j.a.entityFormCollapsed)},[]);const y=Object(H.a)(()=>{const e=t?"database":"padlock",n=t?"passwordList.noDataPlaceholder":"passwordList.connectionPlaceholder";return Object(a.h)(d,null,Object(a.h)(u,null,Object(a.h)(de.a,{name:e})),Object(a.h)(b,null,Object(a.h)(P.a,null,n)))});return Object(a.h)(i,null,Object(a.h)(s,null,Object(a.h)(Z,null)),Object(a.h)("ul",null,e.map(e=>Object(a.h)(l,{key:e.ref.id},Object(a.h)(fe,{data:e,isSelected:h===e,onClick:g})))),y(o))}}}]);
//# sourceMappingURL=5.bundle.js.map