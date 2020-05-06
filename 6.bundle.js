(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{121:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(0),r=a(5),o=a.n(r),c=a(124);const s=({type:e,children:t,onClick:a,disabled:r})=>Object(n.h)(c.b,{type:e,onClick:a,disabled:r},Object(n.h)(c.a,null,t));s.propTypes={type:o.a.string,disabled:o.a.bool,onClick:o.a.func.isRequired,children:o.a.any.isRequired},s.defaultProps={type:"button",disabled:!1}},122:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(7),r=a(49),o=a(50),c=a(48),s=a(25);const l=Object(r.b)("database"),i=async(e,t,n)=>{const{setupClient:i}=await Promise.all([a.e(0),a.e(2)]).then(a.bind(null,195)),{encrypt:d,decrypt:b}=await Promise.all([a.e(1),a.e(3)]).then(a.bind(null,196));try{const e=n===Object(c.a)()?b(n,t):n,a=await i({secret:e}),r=d(e,t);return localStorage.setItem(o.a,r),l({client:a})}catch(e){return Object(r.a)(s.a.hideGlobalLoader),Object(r.a)(s.a.showSnackbar,"snackbar.couldNotConnectToDB","error"),l({})}};var d=a(47);const b=Object(r.b)("passwordList"),u={switchOptionPanelVariant:(e,t)=>b({currentOptionPanelVariantName:t}),resetSelectedAndDecryptedEntity:()=>b({selectedAndDecryptedEntity:{}}),setSelectedAndDecryptedEntity:(e,t)=>b({selectedAndDecryptedEntity:t}),fetchPasswords:async(e,t,o,l=!1)=>{Object(r.a)(s.a.showGlobalLoader);const{fetchAllPasswordEntities:p}=await Promise.all([a.e(0),a.e(2)]).then(a.bind(null,195));Object(c.c)(e)&&!l||await Object(r.a)(i,t,o);const h=Object(c.b)(n.a.getState());try{const e=await p(h);return Object(r.a)(s.a.hideGlobalLoader),Object(r.a)(s.a.showSnackbar,"snackbar.passwordsFetchedSuccessfully","success"),Object(r.a)(u.switchOptionPanelVariant,d.a.entityFormCollapsed),b({passwords:e})}catch(e){return Object(r.a)(s.a.hideGlobalLoader),Object(r.a)(s.a.showSnackbar,"snackbar.couldNotFetchPasswords","error"),b({})}},addNewPassword:async(e,t,o)=>{Object(r.a)(s.a.showGlobalLoader);const{createPasswordEntity:l}=await Promise.all([a.e(0),a.e(2)]).then(a.bind(null,195)),{encrypt:i}=await Promise.all([a.e(1),a.e(3)]).then(a.bind(null,196)),p=Object(c.b)(n.a.getState());try{const e=i({login:t.login,password:t.password},o,!0);await l(p,{label:t.label,value:e}),Object(r.a)(s.a.hideGlobalLoader),Object(r.a)(u.switchOptionPanelVariant,d.a.entityFormCollapsed)}catch(e){Object(r.a)(s.a.hideGlobalLoader),Object(r.a)(s.a.showSnackbar,"snackbar.couldNotCreateNewPassword","error")}finally{return b({})}},editPassword:async(e,t,o)=>{Object(r.a)(s.a.showGlobalLoader);const{updatePasswordEntity:l}=await Promise.all([a.e(0),a.e(2)]).then(a.bind(null,195)),{encrypt:i}=await Promise.all([a.e(1),a.e(3)]).then(a.bind(null,196)),p=Object(c.b)(n.a.getState());try{const e=i({login:t.login,password:t.password},o,!0);await l(p,t.refId,{label:t.label,value:e}),Object(r.a)(s.a.hideGlobalLoader),Object(r.a)(u.resetSelectedAndDecryptedEntity),Object(r.a)(u.switchOptionPanelVariant,d.a.entityFormCollapsed)}catch(e){Object(r.a)(s.a.hideGlobalLoader),Object(r.a)(s.a.showSnackbar,"snackbar.couldNotEditPassword","error")}finally{return b({})}},removePassword:async(e,t)=>{Object(r.a)(s.a.showGlobalLoader);const{deletePasswordEntity:o}=await Promise.all([a.e(0),a.e(2)]).then(a.bind(null,195)),l=Object(c.b)(n.a.getState());try{await o(l,t),Object(r.a)(s.a.hideGlobalLoader)}catch(e){Object(r.a)(s.a.hideGlobalLoader),Object(r.a)(s.a.showSnackbar,"snackbar.couldNotRemovePassword","error")}finally{return b({})}}}},124:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return s}));var n=a(0),r=a(2),o=a(1);Object(r.b)(n.h);const c=Object(r.c)("button")`
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
`},125:function(e,t,a){"use strict";a.d(t,"e",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return c})),a.d(t,"f",(function(){return s})),a.d(t,"a",(function(){return l}));const n=e=>e&&e.length>=8||"optionsPanel.masterKeyTooShort",r=e=>e&&e.length>=8||"optionsPanel.encryptionKeyTooShort",o=e=>e&&e.length>=3||"optionsPanel.labelTooShort",c=e=>e&&e.length>=3||"optionsPanel.loginTooShort",s=e=>e&&e.length>=3||"optionsPanel.passwordTooShort",l=e=>e&&e.length>=20||"settings.adminKeyTooShort"},128:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a(5),o=a.n(r),c=a(2),s=a(1);Object(c.b)(n.h);const l=Object(c.c)("section")`
    display: grid;
`,i=Object(c.c)("div")`
    ${s.e.text18}
    font-family: ${s.d.fontFamilies.bold};
    color: ${s.d.colors.darkBlue};
    margin-bottom: ${s.d.spacing.xs6};
`,d=Object(c.c)("div")`
    margin-bottom: ${s.d.spacing.xs6};
`,b=Object(c.c)("div")`
    ${s.e.text18}
    color: ${s.d.colors.red};
`,u=({hasError:e,renderLabel:t,renderInput:a,renderError:r})=>Object(n.h)(l,null,Object(n.h)(i,null,t()),Object(n.h)(d,null,a()),e&&Object(n.h)(b,null,r()));u.propTypes={hasError:o.a.oneOfType([o.a.string,o.a.bool]).isRequired,renderLabel:o.a.func.isRequired,renderInput:o.a.func.isRequired,renderError:o.a.func.isRequired}},129:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),r=a(5),o=a.n(r),c=a(2),s=a(1);Object(c.b)(n.h);const l=s.c.css`
    border: 1px solid ${s.d.colors.primaryBlue};

    &:focus {
        box-shadow: 0 0 0 2px ${s.d.colors.primaryBlue} inset;
    }
`,i=s.c.css`
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

    ${({hasError:e})=>e?i:l}
`,b=({value:e,onInput:t,placeholder:a,hasError:r,name:o,type:c})=>Object(n.h)(d,{type:c,value:e,onInput:t,placeholder:a,hasError:r,name:o});b.propTypes={onInput:o.a.func.isRequired,value:o.a.string,placeholder:o.a.string,hasError:o.a.bool,name:o.a.string,type:o.a.string},b.defaultProps={value:"",placeholder:"",hasError:!1,name:"",type:"text"}},130:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(4);function r(e){for(var t,a,n,r=0,o={},c=/(radio|checkbox)/i,s=/(file|reset|submit|button)/i;n=e.elements[r++];)if(n.name&&!n.disabled&&!s.test(n.type))if(a=n.name,"select-multiple"===n.type)for(o[a]=[],t=0;t<n.options.length;t++)n.options[t].selected&&o[a].push(n.options[t].value);else c.test(n.type)?n.checked&&(t=o[a],n="on"===n.value||n.value,o[a]=null==t&&0!==t?n:[].concat(t,n)):(n.value||0===n.value)&&(t=o[a],o[a]=null==t&&0!==t?n.value:[].concat(t,n.value));return o}function o(e,t,a){t=t||{};var n,o,c,s,l,i=!0,d={},b=r(e);for(c in a&&a.trim&&((n={})[a]=t[a],t=n),t)for(s=(t[c].test||t[c]).call(t[c],b[c],b),l=(o=(n=e.elements[c]).length?n:[n]).length;l--;)o[l].isValid=!0===s||(d[c]=s,i=!1);return e.isValid=i,d}const c=(e,t,a,n,r)=>c=>{var s;const l=o(t.current,a),i=c.target.value;n(null!=i?i:""),r(null!==(s=l[e])&&void 0!==s?s:"")},s=(e,t,a,r="")=>{const[o,s]=Object(n.h)(r),[l,i]=Object(n.h)("");return[{value:o,setValue:s,errors:l,setErrors:i},{name:a,value:o,hasError:Boolean(l),onInput:c(a,e,t,s,i)}]}},198:function(e,t,a){"use strict";a.r(t),a.d(t,"Settings",(function(){return S}));var n=a(0),r=a(34),o=a(2),c=a(1);Object(o.b)(n.h);const s=Object(o.c)("section")`
    display: grid;
    justify-items: center;
    padding-top: ${c.d.spacing.s12};

    ${c.a.gte(c.d.breakpoints.m880)(c.c.css`
        padding-top: ${c.d.spacing.xl40};
    `)}
`,l=Object(o.c)("header")`
    display: grid;
    justify-items: center;
    margin-bottom: ${c.d.spacing.xl30};

    ${c.a.gte(c.d.breakpoints.m880)(c.c.css`
        margin-bottom: ${c.d.spacing.xl40};
    `)}
`,i=Object(o.c)("h2")`
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
`;var j=a(3),g=a(4),y=a(128),w=a(129),m=a(16),f=a(121),v=a(7),$=a(122),k=a(125),x=a(130),P=a(48);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const L={adminKey:k.a,masterKey:k.e},S=()=>{var e;const t=Object(v.c)(P.d),a=Object(v.b)($.a.fetchPasswords),o=Object(g.g)(void 0),[c,k]=Object(x.a)(o,L,"adminKey"),[S,B]=Object(x.a)(o,L,"masterKey"),G=t?"settings.connectToDB":"settings.headingText",I=(e,t,a,r=!1)=>()=>Object(n.h)(n.Fragment,null,Object(n.h)(p,null,Object(n.h)(j.a,null,e)," -"," ",Object(n.h)(u,null,Object(n.h)(j.a,null,t))),((e,t)=>Object(m.a)(()=>Object(n.h)(h,null,Object(n.h)(j.a,null,"settings.noteLabel")," ",Object(n.h)(u,null,Object(n.h)(j.a,null,e))))(t))(a,r)),T=e=>()=>Object(n.h)(j.a,null,e);return Object(n.h)(s,null,Object(n.h)(l,null,Object(n.h)(i,null,Object(n.h)(j.a,null,G))),Object(n.h)(d,null,Object(n.h)("form",{ref:o},Object(n.h)(b,null,Object(n.h)(y.a,{hasError:Boolean(k.hasError),renderLabel:I("settings.adminKeyLabel","settings.adminKeyLabelDescription","settings.noteLabelDescriptionAdminKey"),renderInput:()=>Object(n.h)(w.a,E({type:"password",placeholder:"92xIJf_ge234kalfnqql4o25ou4334201"},k)),renderError:T(c.errors)})),Object(n.h)(b,null,Object(n.h)(y.a,{hasError:Boolean(B.hasError),renderLabel:I("settings.masterKeyLabel","settings.masterKeyLabelDescription","settings.noteLabelDescription",!0),renderInput:()=>Object(n.h)(w.a,E({type:"password",placeholder:"myMasterPassword1234"},B)),renderError:T(S.errors)})),Object(n.h)(O,null,Object(n.h)(f.a,{onClick:()=>{history.back()}},Object(n.h)(j.a,null,"settings.back")),Object(n.h)(f.a,{type:"submit",onClick:async e=>{var t;e.preventDefault(),(null===(t=o.current)||void 0===t?void 0:t.isValid)&&(await a(S.value,c.value,!0),Object(r.route)("/app"))},disabled:!(null===(e=o.current)||void 0===e?void 0:e.isValid)},Object(n.h)(j.a,null,"settings.connect"))))))}}}]);
//# sourceMappingURL=6.bundle.js.map