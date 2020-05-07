(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{122:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n(5),o=n.n(r),c=n(125);const l=({type:e,children:t,onClick:n,disabled:r})=>Object(a.h)(c.b,{type:e,onClick:n,disabled:r},Object(a.h)(c.a,null,t));l.propTypes={type:o.a.string,disabled:o.a.bool,onClick:o.a.func.isRequired,children:o.a.any.isRequired},l.defaultProps={type:"button",disabled:!1}},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(7),r=n(50),o=n(51),c=n(49),l=n(26);const i=Object(r.b)("database"),s=async(e,t,a)=>{const{setupClient:s}=await Promise.all([n.e(0),n.e(2)]).then(n.bind(null,196)),{encrypt:d,decrypt:b}=await Promise.all([n.e(1),n.e(3)]).then(n.bind(null,197));try{const e=a===Object(c.a)()?b(a,t):a,n=await s({secret:e}),r=d(e,t);return localStorage.setItem(o.a,r),i({client:n})}catch(e){return Object(r.a)(l.a.hideGlobalLoader),Object(r.a)(l.a.showSnackbar,"snackbar.couldNotConnectToDB","error"),i({})}};var d=n(48);const b=Object(r.b)("passwordList"),u={switchOptionPanelVariant:(e,t)=>b({currentOptionPanelVariantName:t}),resetSelectedAndDecryptedEntity:()=>b({selectedAndDecryptedEntity:{}}),setSelectedAndDecryptedEntity:(e,t)=>b({selectedAndDecryptedEntity:t}),fetchPasswords:async(e,t,o,i=!1)=>{Object(r.a)(l.a.showGlobalLoader);const{fetchAllPasswordEntities:p}=await Promise.all([n.e(0),n.e(2)]).then(n.bind(null,196));Object(c.c)(e)&&!i||await Object(r.a)(s,t,o);const h=Object(c.b)(a.a.getState());try{const e=await p(h);return Object(r.a)(l.a.hideGlobalLoader),Object(r.a)(l.a.showSnackbar,"snackbar.passwordsFetchedSuccessfully","success"),Object(r.a)(u.switchOptionPanelVariant,d.a.entityFormCollapsed),b({passwords:e})}catch(e){return Object(r.a)(l.a.hideGlobalLoader),Object(r.a)(l.a.showSnackbar,"snackbar.couldNotFetchPasswords","error"),b({})}},addNewPassword:async(e,t,o)=>{Object(r.a)(l.a.showGlobalLoader);const{createPasswordEntity:i}=await Promise.all([n.e(0),n.e(2)]).then(n.bind(null,196)),{encrypt:s}=await Promise.all([n.e(1),n.e(3)]).then(n.bind(null,197)),p=Object(c.b)(a.a.getState());try{const e=s({login:t.login,password:t.password},o,!0);await i(p,{label:t.label,value:e}),Object(r.a)(l.a.hideGlobalLoader),Object(r.a)(u.switchOptionPanelVariant,d.a.entityFormCollapsed)}catch(e){Object(r.a)(l.a.hideGlobalLoader),Object(r.a)(l.a.showSnackbar,"snackbar.couldNotCreateNewPassword","error")}finally{return b({})}},editPassword:async(e,t,o)=>{Object(r.a)(l.a.showGlobalLoader);const{updatePasswordEntity:i}=await Promise.all([n.e(0),n.e(2)]).then(n.bind(null,196)),{encrypt:s}=await Promise.all([n.e(1),n.e(3)]).then(n.bind(null,197)),p=Object(c.b)(a.a.getState());try{const e=s({login:t.login,password:t.password},o,!0);await i(p,t.refId,{label:t.label,value:e}),Object(r.a)(l.a.hideGlobalLoader),Object(r.a)(u.resetSelectedAndDecryptedEntity),Object(r.a)(u.switchOptionPanelVariant,d.a.entityFormCollapsed)}catch(e){Object(r.a)(l.a.hideGlobalLoader),Object(r.a)(l.a.showSnackbar,"snackbar.couldNotEditPassword","error")}finally{return b({})}},removePassword:async(e,t)=>{Object(r.a)(l.a.showGlobalLoader);const{deletePasswordEntity:o}=await Promise.all([n.e(0),n.e(2)]).then(n.bind(null,196)),i=Object(c.b)(a.a.getState());try{await o(i,t),Object(r.a)(l.a.hideGlobalLoader)}catch(e){Object(r.a)(l.a.hideGlobalLoader),Object(r.a)(l.a.showSnackbar,"snackbar.couldNotRemovePassword","error")}finally{return b({})}}}},125:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return l}));var a=n(0),r=n(2),o=n(1);Object(r.b)(a.h);const c=Object(r.c)("button")`
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
`},126:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"f",(function(){return l})),n.d(t,"a",(function(){return i}));const a=e=>e&&e.length>=8||"optionsPanel.masterKeyTooShort",r=e=>e&&e.length>=8||"optionsPanel.encryptionKeyTooShort",o=e=>e&&e.length>=3||"optionsPanel.labelTooShort",c=e=>e&&e.length>=3||"optionsPanel.loginTooShort",l=e=>e&&e.length>=3||"optionsPanel.passwordTooShort",i=e=>e&&e.length>=20||"settings.adminKeyTooShort"},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(0),r=n(5),o=n.n(r),c=n(2),l=n(1);Object(c.b)(a.h);const i=Object(c.c)("section")`
    display: grid;
`,s=Object(c.c)("div")`
    ${l.e.text18}
    font-family: ${l.d.fontFamilies.bold};
    color: ${l.d.colors.darkBlue};
    margin-bottom: ${l.d.spacing.xs6};
`,d=Object(c.c)("div")`
    margin-bottom: ${l.d.spacing.xs6};
`,b=Object(c.c)("div")`
    ${l.e.text18}
    color: ${l.d.colors.red};
`,u=({hasError:e,renderLabel:t,renderInput:n,renderError:r})=>Object(a.h)(i,null,Object(a.h)(s,null,t()),Object(a.h)(d,null,n()),e&&Object(a.h)(b,null,r()));u.propTypes={hasError:o.a.oneOfType([o.a.string,o.a.bool]).isRequired,renderLabel:o.a.func.isRequired,renderInput:o.a.func.isRequired,renderError:o.a.func.isRequired}},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(0),r=n(5),o=n.n(r),c=n(2),l=n(1);Object(c.b)(a.h);const i=l.c.css`
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
`,b=({value:e,onInput:t,placeholder:n,hasError:r,name:o,type:c})=>Object(a.h)(d,{type:c,value:e,onInput:t,placeholder:n,hasError:r,name:o});b.propTypes={onInput:o.a.func.isRequired,value:o.a.string,placeholder:o.a.string,hasError:o.a.bool,name:o.a.string,type:o.a.string},b.defaultProps={value:"",placeholder:"",hasError:!1,name:"",type:"text"}},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(4);function r(e){for(var t,n,a,r=0,o={},c=/(radio|checkbox)/i,l=/(file|reset|submit|button)/i;a=e.elements[r++];)if(a.name&&!a.disabled&&!l.test(a.type))if(n=a.name,"select-multiple"===a.type)for(o[n]=[],t=0;t<a.options.length;t++)a.options[t].selected&&o[n].push(a.options[t].value);else c.test(a.type)?a.checked&&(t=o[n],a="on"===a.value||a.value,o[n]=null==t&&0!==t?a:[].concat(t,a)):(a.value||0===a.value)&&(t=o[n],o[n]=null==t&&0!==t?a.value:[].concat(t,a.value));return o}function o(e,t,n){t=t||{};var a,o,c,l,i,s=!0,d={},b=r(e);for(c in n&&n.trim&&((a={})[n]=t[n],t=a),t)for(l=(t[c].test||t[c]).call(t[c],b[c],b),i=(o=(a=e.elements[c]).length?a:[a]).length;i--;)o[i].isValid=!0===l||(d[c]=l,s=!1);return e.isValid=s,d}const c=(e,t,n,a,r)=>c=>{var l;const i=o(t.current,n),s=c.target.value;a(null!=s?s:""),r(null!==(l=i[e])&&void 0!==l?l:"")},l=(e,t,n,r="")=>{const[o,l]=Object(a.h)(r),[i,s]=Object(a.h)("");return[{value:o,setValue:l,errors:i,setErrors:s},{name:n,value:o,hasError:Boolean(i),onInput:c(n,e,t,l,s)}]}},198:function(e,t,n){"use strict";n.r(t),n.d(t,"useFirstTimeRedirection",(function(){return xe})),n.d(t,"PasswordList",(function(){return $e}));var a=n(0),r=n(7),o=n(2),c=n(1);Object(o.b)(a.h);const l=Object(o.c)("li")`
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
`;var f=n(5),v=n.n(f);Object(o.b)(a.h);const x=Object(o.c)("section")``;var $=n(122),P=n(3);const k=({switchCurrentVariantName:e})=>Object(a.h)(x,null,Object(a.h)(m,null,Object(a.h)($.a,{onClick:()=>{Object(h.route)("/settings")}},Object(a.h)(P.a,null,"optionsPanel.settings")),Object(a.h)($.a,{onClick:()=>e(j.a.connectExpanded)},Object(a.h)(P.a,null,"optionsPanel.connect"))));k.propTypes={switchCurrentVariantName:v.a.func.isRequired},Object(o.b)(a.h);const E=Object(o.c)("section")``;var C=n(129),S=n(130),L=n(123),V=n(126),I=n(131);function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const T={masterKey:V.e},R=({switchCurrentVariantName:e})=>{var t;const n=Object(r.c)(p.a),o=Object(r.b)(L.a.fetchPasswords),c=Object(O.g)(void 0),[l,i]=Object(I.a)(c,T,"masterKey"),s=async e=>{var t;e.preventDefault(),(null===(t=c.current)||void 0===t?void 0:t.isValid)&&o(l.value,n)};return Object(a.h)(E,null,Object(a.h)(y,null,Object(a.h)(w,null,Object(a.h)("form",{ref:c,onSubmit:s},Object(a.h)(C.a,{hasError:i.hasError,renderLabel:()=>Object(a.h)(P.a,null,"optionsPanel.enterMasterKey"),renderInput:()=>Object(a.h)(S.a,N({type:"password",placeholder:"e.g. MyStrongPassword1234"},i)),renderError:()=>Object(a.h)(P.a,null,l.errors)})))),Object(a.h)(m,null,Object(a.h)($.a,{onClick:()=>e(j.a.connectCollapsed)},Object(a.h)(P.a,null,"optionsPanel.cancel")),Object(a.h)($.a,{onClick:s,disabled:!(null===(t=c.current)||void 0===t?void 0:t.isValid)},Object(a.h)(P.a,null,"optionsPanel.confirm"))))};R.propTypes={switchCurrentVariantName:v.a.func.isRequired},Object(o.b)(a.h);const F=Object(o.c)("section")``;var G=n(16),q=n(12);const B=e=>e.passwordList,D=Object(q.a)(B,e=>e.passwords),K=Object(q.a)(B,e=>e.currentOptionPanelVariantName),A=Object(q.a)(B,e=>e.selectedAndDecryptedEntity),M=Object(q.a)(A,e=>0!==Object.keys(e).length),z=({switchCurrentVariantName:e})=>{const t=Object(G.c)(M),n=t?"optionsPanel.edit":"optionsPanel.addNew";return Object(a.h)(F,null,Object(a.h)(m,{isInEditMode:t},Object(a.h)($.a,{onClick:()=>{Object(h.route)("/settings")}},Object(a.h)(P.a,null,"optionsPanel.settings")),Object(a.h)($.a,{onClick:()=>e(j.a.entityFormExpanded)},Object(a.h)(P.a,null,n))))};z.propTypes={switchCurrentVariantName:v.a.func.isRequired},Object(o.b)(a.h);const J=Object(o.c)("section")``,X=Object(o.c)("div")`
    padding-bottom: ${c.d.spacing.m18};
`,W=Object(o.c)("div")`
    color: ${c.d.colors.darkBlue};
    font-style: italic;
    padding-top: ${c.d.spacing.xs6};
`;var H=n(15);function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const U={label:V.c,login:V.d,password:V.f,encryptionKey:V.b},Y=({switchCurrentVariantName:e})=>{var t;const n=Object(r.c)(p.a),o=Object(O.g)(void 0),c=Object(r.b)(L.a.addNewPassword),l=Object(r.b)(L.a.editPassword),i=Object(r.b)(L.a.fetchPasswords),s=Object(r.c)(A),d=Object(r.c)(M),b=d?"optionsPanel.edit":"optionsPanel.add",u=(e,t)=>Object(I.a)(o,U,e,t),[h,g]=u("label",s.label),[f,v]=u("login",s.login),[x,k]=u("password",s.password),[E,V]=u("encryptionKey"),N=async e=>{var t;e.preventDefault(),(null===(t=o.current)||void 0===t?void 0:t.isValid)&&(d?await l({label:h.value,login:f.value,password:x.value,refId:s.refId},E.value):await c({label:h.value,login:f.value,password:x.value},E.value),i(E.value,n))},T=e=>()=>Object(a.h)(P.a,null,e),R=(e,t)=>()=>Object(a.h)(a.Fragment,null,Object(a.h)(P.a,null,e),Object(H.a)(()=>Object(a.h)(W,null,Object(a.h)(P.a,null,"settings.noteLabel")," ",Object(a.h)(P.a,null,t)))(Boolean(t)));return Object(a.h)(J,null,Object(a.h)(y,null,Object(a.h)(w,null,Object(a.h)("form",{ref:o,onSubmit:N},Object(a.h)(X,null,Object(a.h)(C.a,{hasError:g.hasError,renderLabel:R("optionsPanel.labelInputLabel"),renderInput:()=>Object(a.h)(S.a,Q({placeholder:"e.g. My Bank Account"},g)),renderError:T(h.errors)})),Object(a.h)(X,null,Object(a.h)(C.a,{hasError:v.hasError,renderLabel:R("optionsPanel.loginInputLabel"),renderInput:()=>Object(a.h)(S.a,Q({placeholder:"e.g. yourmail@yourmail.com"},v)),renderError:T(f.errors)})),Object(a.h)(X,null,Object(a.h)(C.a,{hasError:k.hasError,renderLabel:R("optionsPanel.passwordInputLabel"),renderInput:()=>Object(a.h)(S.a,Q({type:"password",placeholder:"e.g. myPassWord1234"},k)),renderError:T(x.errors)})),Object(a.h)(X,null,Object(a.h)(C.a,{hasError:V.hasError,renderLabel:R("optionsPanel.encryptionKey","optionsPanel.noteEncryptionKey"),renderInput:()=>Object(a.h)(S.a,Q({type:"password",placeholder:"e.g. MyStrongPassword1234"},V)),renderError:T(E.errors)})),Object(a.h)("input",{type:"submit",hidden:!0})))),Object(a.h)(m,null,Object(a.h)($.a,{onClick:()=>e(j.a.entityFormCollapsed)},Object(a.h)(P.a,null,"optionsPanel.cancel")),Object(a.h)($.a,{onClick:N,disabled:!(null===(t=o.current)||void 0===t?void 0:t.isValid)},Object(a.h)(P.a,null,b))))};Y.propTypes={switchCurrentVariantName:v.a.func.isRequired};const Z=()=>{const e=Object(r.c)(K),t=Object(r.b)(L.a.switchOptionPanelVariant),n={connectCollapsed:k,connectExpanded:R,entityFormCollapsed:z,entityFormExpanded:Y}[e];return Object(a.h)(g,{currentVariantName:e},Object(a.h)(n,{switchCurrentVariantName:t}))};Z.propTypes={},Object(o.b)(a.h);const _=Object(o.c)("div")`
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
`;var ie=n(125);Object(o.b)(a.h);const se=Object(o.c)(ie.b)`
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
`,Oe=({renderContent:e,renderControls:t})=>Object(a.h)(ue,{onClick:e=>e.stopPropagation()},Object(a.h)(pe,null,e()),Object(a.h)(he,null,t()));function je(){return(je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}Oe.propTypes={renderContent:v.a.func.isRequired,renderControls:v.a.func.isRequired};const ge={encryptionKey:V.b},ye="",we="removal",me="decryption",fe=({data:e,isSelected:t,onClick:o})=>{var c,l;const i=Object(O.g)(void 0),[s,d]=Object(O.h)(ye),b=Object(r.c)(p.a),u=Object(r.c)((h=e.ref.id,Object(q.a)(A,e=>e.refId===h?e:{})));var h;const g=0!==Object.keys(u).length,[y,w]=Object(I.a)(i,ge,"encryptionKey"),m=Object(r.b)(L.a.removePassword),f=Object(r.b)(L.a.fetchPasswords),v=Object(r.b)(L.a.setSelectedAndDecryptedEntity),x=Object(r.b)(L.a.resetSelectedAndDecryptedEntity),k=()=>{d(ye),y.setValue(""),y.setErrors("")},E=t=>{var a;t.preventDefault(),(null===(a=i.current)||void 0===a?void 0:a.isValid)&&(s===me?(async()=>{const{decrypt:t}=await Promise.all([n.e(1),n.e(3)]).then(n.bind(null,197)),{login:a,password:r}=t(e.data.value,y.value,!0);v({refId:e.ref.id,label:e.data.label,login:a,password:r})})():(async()=>{const{decrypt:t}=await Promise.all([n.e(1),n.e(3)]).then(n.bind(null,197));t(e.data.value,y.value,!0),await m(e.ref.id),f(y.value,b)})(),k())},V=e=>t=>{t.stopPropagation(),s||d(e)},N=e=>{e.stopPropagation(),x()},T=Object(H.a)(()=>{const e=s===me?"prompt.decrypt":"prompt.remove";return Object(a.h)(Oe,{renderContent:()=>Object(a.h)("form",{ref:i,onSubmit:E},Object(a.h)(le,null,Object(a.h)(C.a,{hasError:w.hasError,renderLabel:()=>Object(a.h)(P.a,null,"optionsPanel.enterEncryptionKey"),renderError:()=>Object(a.h)(P.a,null,y.errors),renderInput:()=>Object(a.h)(S.a,je({type:"password",placeholder:"e.g. MyStrongPassword1234"},w))}))),renderControls:()=>{var t;return Object(a.h)(a.Fragment,null,Object(a.h)($.a,{onClick:k},Object(a.h)(P.a,null,"optionsPanel.cancel")),Object(a.h)($.a,{onClick:E,disabled:!(null===(t=i.current)||void 0===t?void 0:t.isValid)},Object(a.h)(P.a,null,e)))}})}),R=Object(H.a)(()=>Object(a.h)(a.Fragment,null,Object(a.h)(be,{iconName:"bin",onClick:V(we)}),g?Object(a.h)(be,{iconName:"eyeFilled",onClick:N}):Object(a.h)(be,{iconName:"eye",onClick:V(me)})));return Object(a.h)(te,{onClick:n=>{0!==n.detail&&(o(t?null:e),x(),k())},isSelected:t},Object(a.h)(ne,null,Object(a.h)(oe,null,Object(a.h)(_,null,Object(a.h)(ae,null,Object(a.h)(P.a,null,"passwordEntity.label"))," ","- ",Object(a.h)(re,null,e.data.label)),Object(a.h)(_,null,Object(a.h)(ae,null,Object(a.h)(P.a,null,"passwordEntity.login"))," ","-"," ",Object(a.h)(re,null,null!==(c=u.login)&&void 0!==c?c:j.b)),Object(a.h)(_,null,Object(a.h)(ae,null,Object(a.h)(P.a,null,"passwordEntity.password"))," ","-"," ",Object(a.h)(re,null,null!==(l=u.password)&&void 0!==l?l:j.b))),Object(a.h)(ce,null,R(t))),T(Boolean(s)&&t))};fe.propTypes={isSelected:v.a.bool.isRequired,data:v.a.any.isRequired,onClick:v.a.func.isRequired};var ve=n(25);const xe=()=>{Object(O.c)(()=>{Object(r.c)(p.d)&&!window.prerendering&&setTimeout(()=>{Object(h.route)("/settings")})},[])},$e=()=>{xe();const e=Object(r.c)(D),t=Object(r.c)(p.c),n=Object(r.c)(ve.a),o=!t||t&&!n&&!Boolean(e.length),c=Object(r.b)(L.a.switchOptionPanelVariant),[h,g]=Object(O.h)(null);Object(O.c)(()=>{t&&c(j.a.entityFormCollapsed)},[]);const y=Object(H.a)(()=>{const e=t?"database":"padlock",n=t?"passwordList.noDataPlaceholder":"passwordList.connectionPlaceholder";return Object(a.h)(d,null,Object(a.h)(u,null,Object(a.h)(de.a,{name:e})),Object(a.h)(b,null,Object(a.h)(P.a,null,n)))});return Object(a.h)(i,null,Object(a.h)(s,null,Object(a.h)(Z,null)),Object(a.h)("ul",null,e.map(e=>Object(a.h)(l,{key:e.ref.id},Object(a.h)(fe,{data:e,isSelected:h===e,onClick:g})))),y(o))}}}]);
//# sourceMappingURL=5.bundle.js.map