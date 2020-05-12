(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{122:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(0),r=a(5),o=a.n(r),c=a(127);const s=({type:e,children:t,onClick:a,disabled:r})=>Object(n.h)(c.b,{type:e,onClick:a,disabled:r},Object(n.h)(c.a,null,t));s.propTypes={type:o.a.string,disabled:o.a.bool,onClick:o.a.func.isRequired,children:o.a.any.isRequired},s.defaultProps={type:"button",disabled:!1}},123:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(7),r=a(50),o=a(51),c=a(49),s=a(26);const i=Object(r.b)("database"),l=async(e,t,n)=>{const{setupClient:l}=await Promise.all([a.e(0),a.e(2)]).then(a.bind(null,197)),{encrypt:d,decrypt:b}=await Promise.all([a.e(1),a.e(3)]).then(a.bind(null,198));try{const e=n===Object(c.a)()?b(n,t):n,a=await l({secret:e}),r=d(e,t);return localStorage.setItem(o.a,r),i({client:a})}catch(e){return Object(r.a)(s.a.hideGlobalLoader),Object(r.a)(s.a.showSnackbar,"snackbar.couldNotConnectToDB","error"),i({})}};var d=a(48);const b=Object(r.b)("passwordList"),u={switchOptionPanelVariant:(e,t)=>b({currentOptionPanelVariantName:t}),resetSelectedAndDecryptedEntity:()=>b({selectedAndDecryptedEntity:{}}),setSelectedAndDecryptedEntity:(e,t)=>b({selectedAndDecryptedEntity:t}),fetchPasswords:async(e,t,o,i=!1)=>{Object(r.a)(s.a.showGlobalLoader);const{fetchAllPasswordEntities:p}=await Promise.all([a.e(0),a.e(2)]).then(a.bind(null,197));Object(c.c)(e)&&!i||await Object(r.a)(l,t,o);const h=Object(c.b)(n.a.getState());try{const e=await p(h);return Object(r.a)(s.a.hideGlobalLoader),Object(r.a)(s.a.showSnackbar,"snackbar.passwordsFetchedSuccessfully","success"),Object(r.a)(u.switchOptionPanelVariant,d.a.entityFormCollapsed),b({passwords:e})}catch(e){return Object(r.a)(s.a.hideGlobalLoader),Object(r.a)(s.a.showSnackbar,"snackbar.couldNotFetchPasswords","error"),b({})}},addNewPassword:async(e,t,o)=>{Object(r.a)(s.a.showGlobalLoader);const{createPasswordEntity:i}=await Promise.all([a.e(0),a.e(2)]).then(a.bind(null,197)),{encrypt:l}=await Promise.all([a.e(1),a.e(3)]).then(a.bind(null,198)),p=Object(c.b)(n.a.getState());try{const e=l({login:t.login,password:t.password},o,!0);await i(p,{label:t.label,value:e}),Object(r.a)(s.a.hideGlobalLoader),Object(r.a)(u.switchOptionPanelVariant,d.a.entityFormCollapsed)}catch(e){Object(r.a)(s.a.hideGlobalLoader),Object(r.a)(s.a.showSnackbar,"snackbar.couldNotCreateNewPassword","error")}finally{return b({})}},editPassword:async(e,t,o)=>{Object(r.a)(s.a.showGlobalLoader);const{updatePasswordEntity:i}=await Promise.all([a.e(0),a.e(2)]).then(a.bind(null,197)),{encrypt:l}=await Promise.all([a.e(1),a.e(3)]).then(a.bind(null,198)),p=Object(c.b)(n.a.getState());try{const e=l({login:t.login,password:t.password},o,!0);await i(p,t.refId,{label:t.label,value:e}),Object(r.a)(s.a.hideGlobalLoader),Object(r.a)(u.resetSelectedAndDecryptedEntity),Object(r.a)(u.switchOptionPanelVariant,d.a.entityFormCollapsed)}catch(e){Object(r.a)(s.a.hideGlobalLoader),Object(r.a)(s.a.showSnackbar,"snackbar.couldNotEditPassword","error")}finally{return b({})}},removePassword:async(e,t)=>{Object(r.a)(s.a.showGlobalLoader);const{deletePasswordEntity:o}=await Promise.all([a.e(0),a.e(2)]).then(a.bind(null,197)),i=Object(c.b)(n.a.getState());try{await o(i,t),Object(r.a)(s.a.hideGlobalLoader)}catch(e){Object(r.a)(s.a.hideGlobalLoader),Object(r.a)(s.a.showSnackbar,"snackbar.couldNotRemovePassword","error")}finally{return b({})}}}},124:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return p}));var n=a(0),r=a(5),o=a.n(r),c=a(2),s=a(1);Object(c.b)(n.h);const i=Object(c.c)("section")`
    display: grid;
`,l=Object(c.c)("label")`
    ${s.e.text18}
    font-family: ${s.d.fontFamilies.bold};
    color: ${s.d.colors.darkBlue};
    margin-bottom: ${s.d.spacing.xs6};
`,d=Object(c.c)("div")`
    margin-bottom: ${s.d.spacing.xs6};
`,b=Object(c.c)("div")`
    ${s.e.text18}
    color: ${s.d.colors.red};
`,u="error-message",p=({id:e,hasError:t,renderLabel:a,renderInput:r,renderError:o})=>Object(n.h)(i,null,Object(n.h)(l,{htmlFor:e},a(e)),Object(n.h)(d,null,r(e)),t&&Object(n.h)(b,{id:`${e}-${u}`,"aria-role":"alert"},o(e)));p.propTypes={id:o.a.string.isRequired,hasError:o.a.oneOfType([o.a.string,o.a.bool]).isRequired,renderLabel:o.a.func.isRequired,renderInput:o.a.func.isRequired,renderError:o.a.func.isRequired}},126:function(e,t,a){"use strict";var n=a(124);a.d(t,"a",(function(){return n.a}))},127:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return s}));var n=a(0),r=a(2),o=a(1);Object(r.b)(n.h);const c=Object(r.c)("button")`
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
`,s=Object(r.c)("span")`
    display: grid;
    place-items: center;
    color: ${o.d.colors.white};
    white-space: nowrap;
`},128:function(e,t,a){"use strict";a.d(t,"e",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return c})),a.d(t,"f",(function(){return s})),a.d(t,"a",(function(){return i}));const n=e=>e&&e.length>=8||"optionsPanel.masterKeyTooShort",r=e=>e&&e.length>=8||"optionsPanel.encryptionKeyTooShort",o=e=>e&&e.length>=3||"optionsPanel.labelTooShort",c=e=>e&&e.length>=3||"optionsPanel.loginTooShort",s=e=>e&&e.length>=3||"optionsPanel.passwordTooShort",i=e=>e&&e.length>=20||"settings.adminKeyTooShort"},131:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(0),r=a(5),o=a.n(r),c=a(2),s=a(1);Object(c.b)(n.h);const i=s.c.css`
    border: 1px solid ${s.d.colors.primaryBlue};

    &:focus {
        box-shadow: 0 0 0 2px ${s.d.colors.primaryBlue} inset;
    }
`,l=s.c.css`
    border: 1px solid ${s.d.colors.red};
    color: ${s.d.colors.red};

    &:focus {
        box-shadow: 0 0 0 2px ${s.d.colors.red} inset;
    }
`,d=Object(c.c)("input")`
    ${s.e.text18}
    padding: ${s.d.spacing.s12};
    width: 100%;
    min-width: 240px;
    color: ${s.d.colors.darkBlue};
    box-shadow: ${s.d.shadows.clickableItem};
    outline: none;

    &:hover {
        text-decoration: underline;
    }

    ${({hasError:e})=>e?l:i}
`;var b=a(124);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const p=({onInput:e,hasError:t,value:a,placeholder:r,name:o,type:c,id:s,ref:i})=>{const l={"aria-invalid":t,...void 0!==s&&{"aria-describedby":`${s}-${b.b}`}};return Object(n.h)(d,u({ref:i,id:s,name:o,type:c,value:a,placeholder:r,onInput:e,hasError:t},l))};p.propTypes={onInput:o.a.func.isRequired,hasError:o.a.bool},p.defaultProps={hasError:!1,type:"text"}},132:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(4);function r(e){for(var t,a,n,r=0,o={},c=/(radio|checkbox)/i,s=/(file|reset|submit|button)/i;n=e.elements[r++];)if(n.name&&!n.disabled&&!s.test(n.type))if(a=n.name,"select-multiple"===n.type)for(o[a]=[],t=0;t<n.options.length;t++)n.options[t].selected&&o[a].push(n.options[t].value);else c.test(n.type)?n.checked&&(t=o[a],n="on"===n.value||n.value,o[a]=null==t&&0!==t?n:[].concat(t,n)):(n.value||0===n.value)&&(t=o[a],o[a]=null==t&&0!==t?n.value:[].concat(t,n.value));return o}function o(e,t,a){t=t||{};var n,o,c,s,i,l=!0,d={},b=r(e);for(c in a&&a.trim&&((n={})[a]=t[a],t=n),t)for(s=(t[c].test||t[c]).call(t[c],b[c],b),i=(o=(n=e.elements[c]).length?n:[n]).length;i--;)o[i].isValid=!0===s||(d[c]=s,l=!1);return e.isValid=l,d}const c=(e,t,a,n,r)=>c=>{var s;const i=o(t.current,a),l=c.target.value;n(null!=l?l:""),r(null!==(s=i[e])&&void 0!==s?s:"")},s=(e,t,a,r="")=>{const[o,s]=Object(n.h)(r),[i,l]=Object(n.h)("");return[{value:o,setValue:s,errors:i,setErrors:l},{name:a,value:o,hasError:Boolean(i),onInput:c(a,e,t,s,l)}]}},200:function(e,t,a){"use strict";a.r(t),a.d(t,"Settings",(function(){return S}));var n=a(0),r=a(35),o=a(2),c=a(1);Object(o.b)(n.h);const s=Object(o.c)("section")`
    display: grid;
    justify-items: center;
    padding-top: ${c.d.spacing.s12};

    ${c.a.gte(c.d.breakpoints.m880)(c.c.css`
        padding-top: ${c.d.spacing.xl40};
    `)}
`,i=Object(o.c)("header")`
    display: grid;
    justify-items: center;
    margin-bottom: ${c.d.spacing.xl30};

    ${c.a.gte(c.d.breakpoints.m880)(c.c.css`
        margin-bottom: ${c.d.spacing.xl40};
    `)}
`,l=Object(o.c)("h2")`
    text-align: center;
    color: ${c.d.colors.darkBlue};
    ${c.e.text24}
`,d=Object(o.c)("div")`
    max-width: ${c.d.breakpoints.s480};
`,b=Object(o.c)("div")`
    padding-bottom: ${c.d.spacing.xl30};
`,u=Object(o.c)("span")`
    color: ${c.d.colors.darkBlue};
    font-family: ${c.d.fontFamilies.regular};
`,p=Object(o.c)("div")`
    color: ${c.d.colors.darkBlue};
    font-family: ${c.d.fontFamilies.bold};
`,h=Object(o.c)(p)`
    font-family: ${c.d.fontFamilies.regular};
    font-style: italic;
    padding-top: ${c.d.spacing.m18};
`,O=Object(o.c)("div")`
    display: grid;
    grid-auto-flow: column;
    grid-gap: ${c.d.spacing.xl30};
    padding-top: ${c.d.spacing.m18};
`;var j=a(3),g=a(4),y=a(126),f=a(131),m=a(15),w=a(122),v=a(7),$=a(123),k=a(128),x=a(132),P=a(49);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const L={adminKey:k.a,masterKey:k.e},S=()=>{var e;const t=Object(v.c)(P.d),a=Object(v.b)($.a.fetchPasswords),o=Object(g.g)(void 0),[c,k]=Object(x.a)(o,L,"adminKey"),[S,B]=Object(x.a)(o,L,"masterKey"),G=t?"settings.connectToDB":"settings.headingText",I=(e,t,a,r=!1)=>()=>Object(n.h)(n.Fragment,null,Object(n.h)(p,null,Object(n.h)(j.a,null,e)," -"," ",Object(n.h)(u,null,Object(n.h)(j.a,null,t))),((e,t)=>Object(m.a)(()=>Object(n.h)(h,null,Object(n.h)(j.a,null,"settings.noteLabel")," ",Object(n.h)(u,null,Object(n.h)(j.a,null,e))))(t))(a,r)),T=e=>()=>Object(n.h)(j.a,null,e);return Object(n.h)(s,null,Object(n.h)(i,null,Object(n.h)(l,null,Object(n.h)(j.a,null,G))),Object(n.h)(d,null,Object(n.h)("form",{ref:o},Object(n.h)(b,null,Object(n.h)(y.a,{id:k.name,hasError:Boolean(k.hasError),renderLabel:I("settings.adminKeyLabel","settings.adminKeyLabelDescription","settings.noteLabelDescriptionAdminKey"),renderInput:e=>Object(n.h)(f.a,E({id:e,type:"password",placeholder:"92xIJf_ge234kalfnqql4o25ou4334201"},k)),renderError:T(c.errors)})),Object(n.h)(b,null,Object(n.h)(y.a,{id:B.name,hasError:Boolean(B.hasError),renderLabel:I("settings.masterKeyLabel","settings.masterKeyLabelDescription","settings.noteLabelDescription",!0),renderInput:e=>Object(n.h)(f.a,E({id:e,type:"password",placeholder:"myMasterPassword1234"},B)),renderError:T(S.errors)})),Object(n.h)(O,null,Object(n.h)(w.a,{onClick:()=>{history.back()}},Object(n.h)(j.a,null,"settings.back")),Object(n.h)(w.a,{type:"submit",onClick:async e=>{var t;e.preventDefault(),(null===(t=o.current)||void 0===t?void 0:t.isValid)&&(await a(S.value,c.value,!0),Object(r.route)("/app"))},disabled:!(null===(e=o.current)||void 0===e?void 0:e.isValid)},Object(n.h)(j.a,null,"settings.connect"))))))}}}]);
//# sourceMappingURL=6.bundle.js.map