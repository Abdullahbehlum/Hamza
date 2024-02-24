import{R as he,h as Aa}from"./index-0-i6RoMl.js";const uf="/assets/Contactus-bro-SkuD-WdK.svg";var Ut=n=>n.type==="checkbox",ut=n=>n instanceof Date,re=n=>n==null;const wr=n=>typeof n=="object";var z=n=>!re(n)&&!Array.isArray(n)&&wr(n)&&!ut(n),Na=n=>z(n)&&n.target?Ut(n.target)?n.target.checked:n.target.value:n,Da=n=>n.substring(0,n.search(/\.\d+(\.|$)/))||n,Ra=(n,e)=>n.has(Da(e)),ka=n=>{const e=n.constructor&&n.constructor.prototype;return z(e)&&e.hasOwnProperty("isPrototypeOf")},ws=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ue(n){let e;const t=Array.isArray(n);if(n instanceof Date)e=new Date(n);else if(n instanceof Set)e=new Set(n);else if(!(ws&&(n instanceof Blob||n instanceof FileList))&&(t||z(n)))if(e=t?[]:{},!t&&!ka(n))e=n;else for(const s in n)n.hasOwnProperty(s)&&(e[s]=ue(n[s]));else return n;return e}var Bt=n=>Array.isArray(n)?n.filter(Boolean):[],H=n=>n===void 0,C=(n,e,t)=>{if(!e||!z(n))return t;const s=Bt(e.split(/[,[\].]+?/)).reduce((i,r)=>re(i)?i:i[r],n);return H(s)||s===n?H(n[e])?t:n[e]:s},Re=n=>typeof n=="boolean";const _i={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},me={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Ne={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};he.createContext(null);var Oa=(n,e,t,s=!0)=>{const i={defaultValues:e._defaultValues};for(const r in n)Object.defineProperty(i,r,{get:()=>{const o=r;return e._proxyFormState[o]!==me.all&&(e._proxyFormState[o]=!s||me.all),t&&(t[o]=!0),n[o]}});return i},de=n=>z(n)&&!Object.keys(n).length,Fa=(n,e,t,s)=>{t(n);const{name:i,...r}=n;return de(r)||Object.keys(r).length>=Object.keys(e).length||Object.keys(r).find(o=>e[o]===(!s||me.all))},Pn=n=>Array.isArray(n)?n:[n];function Ma(n){const e=he.useRef(n);e.current=n,he.useEffect(()=>{const t=!n.disabled&&e.current.subject&&e.current.subject.subscribe({next:e.current.next});return()=>{t&&t.unsubscribe()}},[n.disabled])}var Se=n=>typeof n=="string",Pa=(n,e,t,s,i)=>Se(n)?(s&&e.watch.add(n),C(t,n,i)):Array.isArray(n)?n.map(r=>(s&&e.watch.add(r),C(t,r))):(s&&(e.watchAll=!0),t),Ss=n=>/^\w*$/.test(n),Sr=n=>Bt(n.replace(/["|']|\]/g,"").split(/\.|\[/)),F=(n,e,t)=>{let s=-1;const i=Ss(e)?[e]:Sr(e),r=i.length,o=r-1;for(;++s<r;){const a=i[s];let l=t;if(s!==o){const c=n[a];l=z(c)||Array.isArray(c)?c:isNaN(+i[s+1])?{}:[]}n[a]=l,n=n[a]}return n},Tr=(n,e,t,s,i)=>e?{...t[n],types:{...t[n]&&t[n].types?t[n].types:{},[s]:i||!0}}:{},mi=n=>({isOnSubmit:!n||n===me.onSubmit,isOnBlur:n===me.onBlur,isOnChange:n===me.onChange,isOnAll:n===me.all,isOnTouch:n===me.onTouched}),gi=(n,e,t)=>!t&&(e.watchAll||e.watch.has(n)||[...e.watch].some(s=>n.startsWith(s)&&/^\.\w+/.test(n.slice(s.length))));const Rt=(n,e,t,s)=>{for(const i of t||Object.keys(n)){const r=C(n,i);if(r){const{_f:o,...a}=r;if(o){if(o.refs&&o.refs[0]&&e(o.refs[0],i)&&!s)break;if(o.ref&&e(o.ref,o.name)&&!s)break;Rt(a,e)}else z(a)&&Rt(a,e)}}};var La=(n,e,t)=>{const s=Bt(C(n,t));return F(s,"root",e[t]),F(n,t,s),n},Ts=n=>n.type==="file",Le=n=>typeof n=="function",tn=n=>{if(!ws)return!1;const e=n?n.ownerDocument:0;return n instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},Jt=n=>Se(n),Is=n=>n.type==="radio",nn=n=>n instanceof RegExp;const yi={value:!1,isValid:!1},vi={value:!0,isValid:!0};var Ir=n=>{if(Array.isArray(n)){if(n.length>1){const e=n.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:e,isValid:!!e.length}}return n[0].checked&&!n[0].disabled?n[0].attributes&&!H(n[0].attributes.value)?H(n[0].value)||n[0].value===""?vi:{value:n[0].value,isValid:!0}:vi:yi}return yi};const bi={isValid:!1,value:null};var xr=n=>Array.isArray(n)?n.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,bi):bi;function Ei(n,e,t="validate"){if(Jt(n)||Array.isArray(n)&&n.every(Jt)||Re(n)&&!n)return{type:t,message:Jt(n)?n:"",ref:e}}var at=n=>z(n)&&!nn(n)?n:{value:n,message:""},Ci=async(n,e,t,s,i)=>{const{ref:r,refs:o,required:a,maxLength:l,minLength:c,min:d,max:h,pattern:f,validate:v,name:E,valueAsNumber:I,mount:L,disabled:Y}=n._f,S=C(e,E);if(!L||Y)return{};const ee=o?o[0]:r,se=D=>{s&&ee.reportValidity&&(ee.setCustomValidity(Re(D)?"":D||""),ee.reportValidity())},W={},xe=Is(r),Ae=Ut(r),Gt=xe||Ae,ie=(I||Ts(r))&&H(r.value)&&H(S)||tn(r)&&r.value===""||S===""||Array.isArray(S)&&!S.length,be=Tr.bind(null,E,t,W),k=(D,T,B,Q=Ne.maxLength,ce=Ne.minLength)=>{const Ee=D?T:B;W[E]={type:D?Q:ce,message:Ee,ref:r,...be(D?Q:ce,Ee)}};if(i?!Array.isArray(S)||!S.length:a&&(!Gt&&(ie||re(S))||Re(S)&&!S||Ae&&!Ir(o).isValid||xe&&!xr(o).isValid)){const{value:D,message:T}=Jt(a)?{value:!!a,message:a}:at(a);if(D&&(W[E]={type:Ne.required,message:T,ref:ee,...be(Ne.required,T)},!t))return se(T),W}if(!ie&&(!re(d)||!re(h))){let D,T;const B=at(h),Q=at(d);if(!re(S)&&!isNaN(S)){const ce=r.valueAsNumber||S&&+S;re(B.value)||(D=ce>B.value),re(Q.value)||(T=ce<Q.value)}else{const ce=r.valueAsDate||new Date(S),Ee=Kt=>new Date(new Date().toDateString()+" "+Kt),He=r.type=="time",Tt=r.type=="week";Se(B.value)&&S&&(D=He?Ee(S)>Ee(B.value):Tt?S>B.value:ce>new Date(B.value)),Se(Q.value)&&S&&(T=He?Ee(S)<Ee(Q.value):Tt?S<Q.value:ce<new Date(Q.value))}if((D||T)&&(k(!!D,B.message,Q.message,Ne.max,Ne.min),!t))return se(W[E].message),W}if((l||c)&&!ie&&(Se(S)||i&&Array.isArray(S))){const D=at(l),T=at(c),B=!re(D.value)&&S.length>+D.value,Q=!re(T.value)&&S.length<+T.value;if((B||Q)&&(k(B,D.message,T.message),!t))return se(W[E].message),W}if(f&&!ie&&Se(S)){const{value:D,message:T}=at(f);if(nn(D)&&!S.match(D)&&(W[E]={type:Ne.pattern,message:T,ref:r,...be(Ne.pattern,T)},!t))return se(T),W}if(v){if(Le(v)){const D=await v(S,e),T=Ei(D,ee);if(T&&(W[E]={...T,...be(Ne.validate,T.message)},!t))return se(T.message),W}else if(z(v)){let D={};for(const T in v){if(!de(D)&&!t)break;const B=Ei(await v[T](S,e),ee,T);B&&(D={...B,...be(T,B.message)},se(B.message),t&&(W[E]=D))}if(!de(D)&&(W[E]={ref:ee,...D},!t))return W}}return se(!0),W};function $a(n,e){const t=e.slice(0,-1).length;let s=0;for(;s<t;)n=H(n)?s++:n[e[s++]];return n}function Va(n){for(const e in n)if(n.hasOwnProperty(e)&&!H(n[e]))return!1;return!0}function X(n,e){const t=Array.isArray(e)?e:Ss(e)?[e]:Sr(e),s=t.length===1?n:$a(n,t),i=t.length-1,r=t[i];return s&&delete s[r],i!==0&&(z(s)&&de(s)||Array.isArray(s)&&Va(s))&&X(n,t.slice(0,-1)),n}var Ln=()=>{let n=[];return{get observers(){return n},next:i=>{for(const r of n)r.next&&r.next(i)},subscribe:i=>(n.push(i),{unsubscribe:()=>{n=n.filter(r=>r!==i)}}),unsubscribe:()=>{n=[]}}},sn=n=>re(n)||!wr(n);function qe(n,e){if(sn(n)||sn(e))return n===e;if(ut(n)&&ut(e))return n.getTime()===e.getTime();const t=Object.keys(n),s=Object.keys(e);if(t.length!==s.length)return!1;for(const i of t){const r=n[i];if(!s.includes(i))return!1;if(i!=="ref"){const o=e[i];if(ut(r)&&ut(o)||z(r)&&z(o)||Array.isArray(r)&&Array.isArray(o)?!qe(r,o):r!==o)return!1}}return!0}var Ar=n=>n.type==="select-multiple",Ua=n=>Is(n)||Ut(n),$n=n=>tn(n)&&n.isConnected,Nr=n=>{for(const e in n)if(Le(n[e]))return!0;return!1};function rn(n,e={}){const t=Array.isArray(n);if(z(n)||t)for(const s in n)Array.isArray(n[s])||z(n[s])&&!Nr(n[s])?(e[s]=Array.isArray(n[s])?[]:{},rn(n[s],e[s])):re(n[s])||(e[s]=!0);return e}function Dr(n,e,t){const s=Array.isArray(n);if(z(n)||s)for(const i in n)Array.isArray(n[i])||z(n[i])&&!Nr(n[i])?H(e)||sn(t[i])?t[i]=Array.isArray(n[i])?rn(n[i],[]):{...rn(n[i])}:Dr(n[i],re(e)?{}:e[i],t[i]):t[i]=!qe(n[i],e[i]);return t}var Yt=(n,e)=>Dr(n,e,rn(e)),Rr=(n,{valueAsNumber:e,valueAsDate:t,setValueAs:s})=>H(n)?n:e?n===""?NaN:n&&+n:t&&Se(n)?new Date(n):s?s(n):n;function Vn(n){const e=n.ref;if(!(n.refs?n.refs.every(t=>t.disabled):e.disabled))return Ts(e)?e.files:Is(e)?xr(n.refs).value:Ar(e)?[...e.selectedOptions].map(({value:t})=>t):Ut(e)?Ir(n.refs).value:Rr(H(e.value)?n.ref.value:e.value,n)}var Ba=(n,e,t,s)=>{const i={};for(const r of n){const o=C(e,r);o&&F(i,r,o._f)}return{criteriaMode:t,names:[...n],fields:i,shouldUseNativeValidation:s}},It=n=>H(n)?n:nn(n)?n.source:z(n)?nn(n.value)?n.value.source:n.value:n,Wa=n=>n.mount&&(n.required||n.min||n.max||n.maxLength||n.minLength||n.pattern||n.validate);function wi(n,e,t){const s=C(n,t);if(s||Ss(t))return{error:s,name:t};const i=t.split(".");for(;i.length;){const r=i.join("."),o=C(e,r),a=C(n,r);if(o&&!Array.isArray(o)&&t!==r)return{name:t};if(a&&a.type)return{name:r,error:a};i.pop()}return{name:t}}var Ha=(n,e,t,s,i)=>i.isOnAll?!1:!t&&i.isOnTouch?!(e||n):(t?s.isOnBlur:i.isOnBlur)?!n:(t?s.isOnChange:i.isOnChange)?n:!0,ja=(n,e)=>!Bt(C(n,e)).length&&X(n,e);const za={mode:me.onSubmit,reValidateMode:me.onChange,shouldFocusError:!0};function qa(n={},e){let t={...za,...n},s={submitCount:0,isDirty:!1,isLoading:Le(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:t.errors||{},disabled:t.disabled||!1},i={},r=z(t.values)||z(t.defaultValues)?ue(t.values||t.defaultValues)||{}:{},o=t.shouldUnregister?{}:ue(r),a={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},c,d=0;const h={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},f={values:Ln(),array:Ln(),state:Ln()},v=mi(t.mode),E=mi(t.reValidateMode),I=t.criteriaMode===me.all,L=u=>p=>{clearTimeout(d),d=setTimeout(u,p)},Y=async u=>{if(h.isValid||u){const p=t.resolver?de((await ie()).errors):await k(i,!0);p!==s.isValid&&f.state.next({isValid:p})}},S=u=>h.isValidating&&f.state.next({isValidating:u}),ee=(u,p=[],_,b,g=!0,m=!0)=>{if(b&&_){if(a.action=!0,m&&Array.isArray(C(i,u))){const w=_(C(i,u),b.argA,b.argB);g&&F(i,u,w)}if(m&&Array.isArray(C(s.errors,u))){const w=_(C(s.errors,u),b.argA,b.argB);g&&F(s.errors,u,w),ja(s.errors,u)}if(h.touchedFields&&m&&Array.isArray(C(s.touchedFields,u))){const w=_(C(s.touchedFields,u),b.argA,b.argB);g&&F(s.touchedFields,u,w)}h.dirtyFields&&(s.dirtyFields=Yt(r,o)),f.state.next({name:u,isDirty:T(u,p),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})}else F(o,u,p)},se=(u,p)=>{F(s.errors,u,p),f.state.next({errors:s.errors})},W=u=>{s.errors=u,f.state.next({errors:s.errors,isValid:!1})},xe=(u,p,_,b)=>{const g=C(i,u);if(g){const m=C(o,u,H(_)?C(r,u):_);H(m)||b&&b.defaultChecked||p?F(o,u,p?m:Vn(g._f)):ce(u,m),a.mount&&Y()}},Ae=(u,p,_,b,g)=>{let m=!1,w=!1;const M={name:u},q=!!(C(i,u)&&C(i,u)._f.disabled);if(!_||b){h.isDirty&&(w=s.isDirty,s.isDirty=M.isDirty=T(),m=w!==M.isDirty);const Ce=q||qe(C(r,u),p);w=!!(!q&&C(s.dirtyFields,u)),Ce||q?X(s.dirtyFields,u):F(s.dirtyFields,u,!0),M.dirtyFields=s.dirtyFields,m=m||h.dirtyFields&&w!==!Ce}if(_){const Ce=C(s.touchedFields,u);Ce||(F(s.touchedFields,u,_),M.touchedFields=s.touchedFields,m=m||h.touchedFields&&Ce!==_)}return m&&g&&f.state.next(M),m?M:{}},Gt=(u,p,_,b)=>{const g=C(s.errors,u),m=h.isValid&&Re(p)&&s.isValid!==p;if(n.delayError&&_?(c=L(()=>se(u,_)),c(n.delayError)):(clearTimeout(d),c=null,_?F(s.errors,u,_):X(s.errors,u)),(_?!qe(g,_):g)||!de(b)||m){const w={...b,...m&&Re(p)?{isValid:p}:{},errors:s.errors,name:u};s={...s,...w},f.state.next(w)}S(!1)},ie=async u=>t.resolver(o,t.context,Ba(u||l.mount,i,t.criteriaMode,t.shouldUseNativeValidation)),be=async u=>{const{errors:p}=await ie(u);if(u)for(const _ of u){const b=C(p,_);b?F(s.errors,_,b):X(s.errors,_)}else s.errors=p;return p},k=async(u,p,_={valid:!0})=>{for(const b in u){const g=u[b];if(g){const{_f:m,...w}=g;if(m){const M=l.array.has(m.name),q=await Ci(g,o,I,t.shouldUseNativeValidation&&!p,M);if(q[m.name]&&(_.valid=!1,p))break;!p&&(C(q,m.name)?M?La(s.errors,q,m.name):F(s.errors,m.name,q[m.name]):X(s.errors,m.name))}w&&await k(w,p,_)}}return _.valid},D=()=>{for(const u of l.unMount){const p=C(i,u);p&&(p._f.refs?p._f.refs.every(_=>!$n(_)):!$n(p._f.ref))&&kn(u)}l.unMount=new Set},T=(u,p)=>(u&&p&&F(o,u,p),!qe(ri(),r)),B=(u,p,_)=>Pa(u,l,{...a.mount?o:H(p)?r:Se(u)?{[u]:p}:p},_,p),Q=u=>Bt(C(a.mount?o:r,u,n.shouldUnregister?C(r,u,[]):[])),ce=(u,p,_={})=>{const b=C(i,u);let g=p;if(b){const m=b._f;m&&(!m.disabled&&F(o,u,Rr(p,m)),g=tn(m.ref)&&re(p)?"":p,Ar(m.ref)?[...m.ref.options].forEach(w=>w.selected=g.includes(w.value)):m.refs?Ut(m.ref)?m.refs.length>1?m.refs.forEach(w=>(!w.defaultChecked||!w.disabled)&&(w.checked=Array.isArray(g)?!!g.find(M=>M===w.value):g===w.value)):m.refs[0]&&(m.refs[0].checked=!!g):m.refs.forEach(w=>w.checked=w.value===g):Ts(m.ref)?m.ref.value="":(m.ref.value=g,m.ref.type||f.values.next({name:u,values:{...o}})))}(_.shouldDirty||_.shouldTouch)&&Ae(u,g,_.shouldTouch,_.shouldDirty,!0),_.shouldValidate&&Rn(u)},Ee=(u,p,_)=>{for(const b in p){const g=p[b],m=`${u}.${b}`,w=C(i,m);(l.array.has(u)||!sn(g)||w&&!w._f)&&!ut(g)?Ee(m,g,_):ce(m,g,_)}},He=(u,p,_={})=>{const b=C(i,u),g=l.array.has(u),m=ue(p);F(o,u,m),g?(f.array.next({name:u,values:{...o}}),(h.isDirty||h.dirtyFields)&&_.shouldDirty&&f.state.next({name:u,dirtyFields:Yt(r,o),isDirty:T(u,m)})):b&&!b._f&&!re(m)?Ee(u,m,_):ce(u,m,_),gi(u,l)&&f.state.next({...s}),f.values.next({name:u,values:{...o}}),!a.mount&&e()},Tt=async u=>{const p=u.target;let _=p.name,b=!0;const g=C(i,_),m=()=>p.type?Vn(g._f):Na(u),w=M=>{b=Number.isNaN(M)||M===C(o,_,M)};if(g){let M,q;const Ce=m(),ot=u.type===_i.BLUR||u.type===_i.FOCUS_OUT,Ta=!Wa(g._f)&&!t.resolver&&!C(s.errors,_)&&!g._f.deps||Ha(ot,C(s.touchedFields,_),s.isSubmitted,E,v),Fn=gi(_,l,ot);F(o,_,Ce),ot?(g._f.onBlur&&g._f.onBlur(u),c&&c(0)):g._f.onChange&&g._f.onChange(u);const Mn=Ae(_,Ce,ot,!1),Ia=!de(Mn)||Fn;if(!ot&&f.values.next({name:_,type:u.type,values:{...o}}),Ta)return h.isValid&&Y(),Ia&&f.state.next({name:_,...Fn?{}:Mn});if(!ot&&Fn&&f.state.next({...s}),S(!0),t.resolver){const{errors:fi}=await ie([_]);if(w(Ce),b){const xa=wi(s.errors,i,_),pi=wi(fi,i,xa.name||_);M=pi.error,_=pi.name,q=de(fi)}}else M=(await Ci(g,o,I,t.shouldUseNativeValidation))[_],w(Ce),b&&(M?q=!1:h.isValid&&(q=await k(i,!0)));b&&(g._f.deps&&Rn(g._f.deps),Gt(_,q,M,Mn))}},Kt=(u,p)=>{if(C(s.errors,p)&&u.focus)return u.focus(),1},Rn=async(u,p={})=>{let _,b;const g=Pn(u);if(S(!0),t.resolver){const m=await be(H(u)?u:g);_=de(m),b=u?!g.some(w=>C(m,w)):_}else u?(b=(await Promise.all(g.map(async m=>{const w=C(i,m);return await k(w&&w._f?{[m]:w}:w)}))).every(Boolean),!(!b&&!s.isValid)&&Y()):b=_=await k(i);return f.state.next({...!Se(u)||h.isValid&&_!==s.isValid?{}:{name:u},...t.resolver||!u?{isValid:_}:{},errors:s.errors,isValidating:!1}),p.shouldFocus&&!b&&Rt(i,Kt,u?g:l.mount),b},ri=u=>{const p={...r,...a.mount?o:{}};return H(u)?p:Se(u)?C(p,u):u.map(_=>C(p,_))},oi=(u,p)=>({invalid:!!C((p||s).errors,u),isDirty:!!C((p||s).dirtyFields,u),isTouched:!!C((p||s).touchedFields,u),error:C((p||s).errors,u)}),Ea=u=>{u&&Pn(u).forEach(p=>X(s.errors,p)),f.state.next({errors:u?s.errors:{}})},ai=(u,p,_)=>{const b=(C(i,u,{_f:{}})._f||{}).ref;F(s.errors,u,{...p,ref:b}),f.state.next({name:u,errors:s.errors,isValid:!1}),_&&_.shouldFocus&&b&&b.focus&&b.focus()},Ca=(u,p)=>Le(u)?f.values.subscribe({next:_=>u(B(void 0,p),_)}):B(u,p,!0),kn=(u,p={})=>{for(const _ of u?Pn(u):l.mount)l.mount.delete(_),l.array.delete(_),p.keepValue||(X(i,_),X(o,_)),!p.keepError&&X(s.errors,_),!p.keepDirty&&X(s.dirtyFields,_),!p.keepTouched&&X(s.touchedFields,_),!t.shouldUnregister&&!p.keepDefaultValue&&X(r,_);f.values.next({values:{...o}}),f.state.next({...s,...p.keepDirty?{isDirty:T()}:{}}),!p.keepIsValid&&Y()},li=({disabled:u,name:p,field:_,fields:b,value:g})=>{if(Re(u)){const m=u?void 0:H(g)?Vn(_?_._f:C(b,p)._f):g;F(o,p,m),Ae(p,m,!1,!1,!0)}},On=(u,p={})=>{let _=C(i,u);const b=Re(p.disabled);return F(i,u,{..._||{},_f:{..._&&_._f?_._f:{ref:{name:u}},name:u,mount:!0,...p}}),l.mount.add(u),_?li({field:_,disabled:p.disabled,name:u,value:p.value}):xe(u,!0,p.value),{...b?{disabled:p.disabled}:{},...t.progressive?{required:!!p.required,min:It(p.min),max:It(p.max),minLength:It(p.minLength),maxLength:It(p.maxLength),pattern:It(p.pattern)}:{},name:u,onChange:Tt,onBlur:Tt,ref:g=>{if(g){On(u,p),_=C(i,u);const m=H(g.value)&&g.querySelectorAll&&g.querySelectorAll("input,select,textarea")[0]||g,w=Ua(m),M=_._f.refs||[];if(w?M.find(q=>q===m):m===_._f.ref)return;F(i,u,{_f:{..._._f,...w?{refs:[...M.filter($n),m,...Array.isArray(C(r,u))?[{}]:[]],ref:{type:m.type,name:u}}:{ref:m}}}),xe(u,!1,void 0,m)}else _=C(i,u,{}),_._f&&(_._f.mount=!1),(t.shouldUnregister||p.shouldUnregister)&&!(Ra(l.array,u)&&a.action)&&l.unMount.add(u)}}},ci=()=>t.shouldFocusError&&Rt(i,Kt,l.mount),wa=u=>{Re(u)&&(f.state.next({disabled:u}),Rt(i,(p,_)=>{let b=u;const g=C(i,_);g&&Re(g._f.disabled)&&(b||(b=g._f.disabled)),p.disabled=b},0,!1))},ui=(u,p)=>async _=>{let b;_&&(_.preventDefault&&_.preventDefault(),_.persist&&_.persist());let g=ue(o);if(f.state.next({isSubmitting:!0}),t.resolver){const{errors:m,values:w}=await ie();s.errors=m,g=w}else await k(i);if(X(s.errors,"root"),de(s.errors)){f.state.next({errors:{}});try{await u(g,_)}catch(m){b=m}}else p&&await p({...s.errors},_),ci(),setTimeout(ci);if(f.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:de(s.errors)&&!b,submitCount:s.submitCount+1,errors:s.errors}),b)throw b},Sa=(u,p={})=>{C(i,u)&&(H(p.defaultValue)?He(u,ue(C(r,u))):(He(u,p.defaultValue),F(r,u,ue(p.defaultValue))),p.keepTouched||X(s.touchedFields,u),p.keepDirty||(X(s.dirtyFields,u),s.isDirty=p.defaultValue?T(u,ue(C(r,u))):T()),p.keepError||(X(s.errors,u),h.isValid&&Y()),f.state.next({...s}))},hi=(u,p={})=>{const _=u?ue(u):r,b=ue(_),g=u&&!de(u)?b:r;if(p.keepDefaultValues||(r=_),!p.keepValues){if(p.keepDirtyValues)for(const m of l.mount)C(s.dirtyFields,m)?F(g,m,C(o,m)):He(m,C(g,m));else{if(ws&&H(u))for(const m of l.mount){const w=C(i,m);if(w&&w._f){const M=Array.isArray(w._f.refs)?w._f.refs[0]:w._f.ref;if(tn(M)){const q=M.closest("form");if(q){q.reset();break}}}}i={}}o=n.shouldUnregister?p.keepDefaultValues?ue(r):{}:ue(g),f.array.next({values:{...g}}),f.values.next({values:{...g}})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!a.mount&&e(),a.mount=!h.isValid||!!p.keepIsValid||!!p.keepDirtyValues,a.watch=!!n.shouldUnregister,f.state.next({submitCount:p.keepSubmitCount?s.submitCount:0,isDirty:p.keepDirty?s.isDirty:!!(p.keepDefaultValues&&!qe(u,r)),isSubmitted:p.keepIsSubmitted?s.isSubmitted:!1,dirtyFields:p.keepDirtyValues?p.keepDefaultValues&&o?Yt(r,o):s.dirtyFields:p.keepDefaultValues&&u?Yt(r,u):{},touchedFields:p.keepTouched?s.touchedFields:{},errors:p.keepErrors?s.errors:{},isSubmitSuccessful:p.keepIsSubmitSuccessful?s.isSubmitSuccessful:!1,isSubmitting:!1})},di=(u,p)=>hi(Le(u)?u(o):u,p);return{control:{register:On,unregister:kn,getFieldState:oi,handleSubmit:ui,setError:ai,_executeSchema:ie,_getWatch:B,_getDirty:T,_updateValid:Y,_removeUnmounted:D,_updateFieldArray:ee,_updateDisabledField:li,_getFieldArray:Q,_reset:hi,_resetDefaultValues:()=>Le(t.defaultValues)&&t.defaultValues().then(u=>{di(u,t.resetOptions),f.state.next({isLoading:!1})}),_updateFormState:u=>{s={...s,...u}},_disableForm:wa,_subjects:f,_proxyFormState:h,_setErrors:W,get _fields(){return i},get _formValues(){return o},get _state(){return a},set _state(u){a=u},get _defaultValues(){return r},get _names(){return l},set _names(u){l=u},get _formState(){return s},set _formState(u){s=u},get _options(){return t},set _options(u){t={...t,...u}}},trigger:Rn,register:On,handleSubmit:ui,watch:Ca,setValue:He,getValues:ri,reset:di,resetField:Sa,clearErrors:Ea,unregister:kn,setError:ai,setFocus:(u,p={})=>{const _=C(i,u),b=_&&_._f;if(b){const g=b.refs?b.refs[0]:b.ref;g.focus&&(g.focus(),p.shouldSelect&&g.select())}},getFieldState:oi}}function hf(n={}){const e=he.useRef(),t=he.useRef(),[s,i]=he.useState({isDirty:!1,isValidating:!1,isLoading:Le(n.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:n.errors||{},disabled:n.disabled||!1,defaultValues:Le(n.defaultValues)?void 0:n.defaultValues});e.current||(e.current={...qa(n,()=>i(o=>({...o}))),formState:s});const r=e.current.control;return r._options=n,Ma({subject:r._subjects.state,next:o=>{Fa(o,r._proxyFormState,r._updateFormState,!0)&&i({...r._formState})}}),he.useEffect(()=>r._disableForm(n.disabled),[r,n.disabled]),he.useEffect(()=>{if(r._proxyFormState.isDirty){const o=r._getDirty();o!==s.isDirty&&r._subjects.state.next({isDirty:o})}},[r,s.isDirty]),he.useEffect(()=>{n.values&&!qe(n.values,t.current)?(r._reset(n.values,r._options.resetOptions),t.current=n.values,i(o=>({...o}))):r._resetDefaultValues()},[n.values,r]),he.useEffect(()=>{n.errors&&r._setErrors(n.errors)},[n.errors,r]),he.useEffect(()=>{r._state.mount||(r._updateValid(),r._state.mount=!0),r._state.watch&&(r._state.watch=!1,r._subjects.state.next({...r._formState})),r._removeUnmounted()}),he.useEffect(()=>{n.shouldUnregister&&r._subjects.values.next({values:r._getWatch()})},[n.shouldUnregister,r]),e.current.formState=Oa(s,r),e.current}var Si=function(n,e,t){if(n&&"reportValidity"in n){var s=C(t,e);n.setCustomValidity(s&&s.message||""),n.reportValidity()}},kr=function(n,e){var t=function(i){var r=e.fields[i];r&&r.ref&&"reportValidity"in r.ref?Si(r.ref,i,n):r.refs&&r.refs.forEach(function(o){return Si(o,i,n)})};for(var s in e.fields)t(s)},Ga=function(n,e){e.shouldUseNativeValidation&&kr(n,e);var t={};for(var s in n){var i=C(e.fields,s),r=Object.assign(n[s]||{},{ref:i&&i.ref});if(Ka(e.names||Object.keys(n),s)){var o=Object.assign({},C(t,s));F(o,"root",r),F(t,s,o)}else F(t,s,r)}return t},Ka=function(n,e){return n.some(function(t){return t.startsWith(e+".")})};function df(n,e,t){return e===void 0&&(e={}),t===void 0&&(t={}),function(s,i,r){try{return Promise.resolve(function(o,a){try{var l=(e.context,Promise.resolve(n[t.mode==="sync"?"validateSync":"validate"](s,Object.assign({abortEarly:!1},e,{context:i}))).then(function(c){return r.shouldUseNativeValidation&&kr({},r),{values:t.raw?s:c,errors:{}}}))}catch(c){return a(c)}return l&&l.then?l.then(void 0,a):l}(0,function(o){if(!o.inner)throw o;return{values:{},errors:Ga((a=o,l=!r.shouldUseNativeValidation&&r.criteriaMode==="all",(a.inner||[]).reduce(function(c,d){if(c[d.path]||(c[d.path]={message:d.message,type:d.type}),l){var h=c[d.path].types,f=h&&h[d.type];c[d.path]=Tr(d.path,l,c,d.type,f?[].concat(f,d.message):d.message)}return c},{})),r)};var a,l}))}catch(o){return Promise.reject(o)}}}function nt(n){this._maxSize=n,this.clear()}nt.prototype.clear=function(){this._size=0,this._values=Object.create(null)};nt.prototype.get=function(n){return this._values[n]};nt.prototype.set=function(n,e){return this._size>=this._maxSize&&this.clear(),n in this._values||this._size++,this._values[n]=e};var Ya=/[^.^\]^[]+|(?=\[\]|\.\.)/g,Or=/^\d+$/,Qa=/^\d/,Xa=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,Za=/^\s*(['"]?)(.*?)(\1)\s*$/,xs=512,Ti=new nt(xs),Ii=new nt(xs),xi=new nt(xs),Qe={Cache:nt,split:Jn,normalizePath:Un,setter:function(n){var e=Un(n);return Ii.get(n)||Ii.set(n,function(s,i){for(var r=0,o=e.length,a=s;r<o-1;){var l=e[r];if(l==="__proto__"||l==="constructor"||l==="prototype")return s;a=a[e[r++]]}a[e[r]]=i})},getter:function(n,e){var t=Un(n);return xi.get(n)||xi.set(n,function(i){for(var r=0,o=t.length;r<o;)if(i!=null||!e)i=i[t[r++]];else return;return i})},join:function(n){return n.reduce(function(e,t){return e+(As(t)||Or.test(t)?"["+t+"]":(e?".":"")+t)},"")},forEach:function(n,e,t){Ja(Array.isArray(n)?n:Jn(n),e,t)}};function Un(n){return Ti.get(n)||Ti.set(n,Jn(n).map(function(e){return e.replace(Za,"$2")}))}function Jn(n){return n.match(Ya)||[""]}function Ja(n,e,t){var s=n.length,i,r,o,a;for(r=0;r<s;r++)i=n[r],i&&(nl(i)&&(i='"'+i+'"'),a=As(i),o=!a&&/^\d+$/.test(i),e.call(t,i,a,o,r,n))}function As(n){return typeof n=="string"&&n&&["'",'"'].indexOf(n.charAt(0))!==-1}function el(n){return n.match(Qa)&&!n.match(Or)}function tl(n){return Xa.test(n)}function nl(n){return!As(n)&&(el(n)||tl(n))}const sl=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,bn=n=>n.match(sl)||[],En=n=>n[0].toUpperCase()+n.slice(1),Ns=(n,e)=>bn(n).join(e).toLowerCase(),Fr=n=>bn(n).reduce((e,t)=>`${e}${e?t[0].toUpperCase()+t.slice(1).toLowerCase():t.toLowerCase()}`,""),il=n=>En(Fr(n)),rl=n=>Ns(n,"_"),ol=n=>Ns(n,"-"),al=n=>En(Ns(n," ")),ll=n=>bn(n).map(En).join(" ");var Bn={words:bn,upperFirst:En,camelCase:Fr,pascalCase:il,snakeCase:rl,kebabCase:ol,sentenceCase:al,titleCase:ll},Ds={exports:{}};Ds.exports=function(n){return Mr(cl(n),n)};Ds.exports.array=Mr;function Mr(n,e){var t=n.length,s=new Array(t),i={},r=t,o=ul(e),a=hl(n);for(e.forEach(function(c){if(!a.has(c[0])||!a.has(c[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});r--;)i[r]||l(n[r],r,new Set);return s;function l(c,d,h){if(h.has(c)){var f;try{f=", node was:"+JSON.stringify(c)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!a.has(c))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(c));if(!i[d]){i[d]=!0;var v=o.get(c)||new Set;if(v=Array.from(v),d=v.length){h.add(c);do{var E=v[--d];l(E,a.get(E),h)}while(d);h.delete(c)}s[--t]=c}}}function cl(n){for(var e=new Set,t=0,s=n.length;t<s;t++){var i=n[t];e.add(i[0]),e.add(i[1])}return Array.from(e)}function ul(n){for(var e=new Map,t=0,s=n.length;t<s;t++){var i=n[t];e.has(i[0])||e.set(i[0],new Set),e.has(i[1])||e.set(i[1],new Set),e.get(i[0]).add(i[1])}return e}function hl(n){for(var e=new Map,t=0,s=n.length;t<s;t++)e.set(n[t],t);return e}var dl=Ds.exports;const fl=Aa(dl),pl=Object.prototype.toString,_l=Error.prototype.toString,ml=RegExp.prototype.toString,gl=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",yl=/^Symbol\((.*)\)(.*)$/;function vl(n){return n!=+n?"NaN":n===0&&1/n<0?"-0":""+n}function Ai(n,e=!1){if(n==null||n===!0||n===!1)return""+n;const t=typeof n;if(t==="number")return vl(n);if(t==="string")return e?`"${n}"`:n;if(t==="function")return"[Function "+(n.name||"anonymous")+"]";if(t==="symbol")return gl.call(n).replace(yl,"Symbol($1)");const s=pl.call(n).slice(8,-1);return s==="Date"?isNaN(n.getTime())?""+n:n.toISOString(n):s==="Error"||n instanceof Error?"["+_l.call(n)+"]":s==="RegExp"?ml.call(n):null}function $e(n,e){let t=Ai(n,e);return t!==null?t:JSON.stringify(n,function(s,i){let r=Ai(this[s],e);return r!==null?r:i},2)}function Pr(n){return n==null?[]:[].concat(n)}let Lr,bl=/\$\{\s*(\w+)\s*\}/g;Lr=Symbol.toStringTag;class oe extends Error{static formatError(e,t){const s=t.label||t.path||"this";return s!==t.path&&(t=Object.assign({},t,{path:s})),typeof e=="string"?e.replace(bl,(i,r)=>$e(t[r])):typeof e=="function"?e(t):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,t,s,i,r){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[Lr]="Error",this.name="ValidationError",this.value=t,this.path=s,this.type=i,this.errors=[],this.inner=[],Pr(e).forEach(o=>{if(oe.isError(o)){this.errors.push(...o.errors);const a=o.inner.length?o.inner:[o];this.inner.push(...a)}else this.errors.push(o)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!r&&Error.captureStackTrace&&Error.captureStackTrace(this,oe)}}let we={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:n,type:e,value:t,originalValue:s})=>{const i=s!=null&&s!==t?` (cast from the value \`${$e(s,!0)}\`).`:".";return e!=="mixed"?`${n} must be a \`${e}\` type, but the final value was: \`${$e(t,!0)}\``+i:`${n} must match the configured type. The validated value was: \`${$e(t,!0)}\``+i}},_e={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},El={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},es={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},Cl={isValue:"${path} field must be ${value}"},ts={noUnknown:"${path} field has unspecified keys: ${unknown}"},wl={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},Sl={notType:n=>{const{path:e,value:t,spec:s}=n,i=s.types.length;if(Array.isArray(t)){if(t.length<i)return`${e} tuple value has too few items, expected a length of ${i} but got ${t.length} for value: \`${$e(t,!0)}\``;if(t.length>i)return`${e} tuple value has too many items, expected a length of ${i} but got ${t.length} for value: \`${$e(t,!0)}\``}return oe.formatError(we.notType,n)}};Object.assign(Object.create(null),{mixed:we,string:_e,number:El,date:es,object:ts,array:wl,boolean:Cl,tuple:Sl});const Rs=n=>n&&n.__isYupSchema__;class on{static fromOptions(e,t){if(!t.then&&!t.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:s,then:i,otherwise:r}=t,o=typeof s=="function"?s:(...a)=>a.every(l=>l===s);return new on(e,(a,l)=>{var c;let d=o(...a)?i:r;return(c=d==null?void 0:d(l))!=null?c:l})}constructor(e,t){this.fn=void 0,this.refs=e,this.refs=e,this.fn=t}resolve(e,t){let s=this.refs.map(r=>r.getValue(t==null?void 0:t.value,t==null?void 0:t.parent,t==null?void 0:t.context)),i=this.fn(s,e,t);if(i===void 0||i===e)return e;if(!Rs(i))throw new TypeError("conditions must return a schema object");return i.resolve(t)}}const Qt={context:"$",value:"."};class st{constructor(e,t={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Qt.context,this.isValue=this.key[0]===Qt.value,this.isSibling=!this.isContext&&!this.isValue;let s=this.isContext?Qt.context:this.isValue?Qt.value:"";this.path=this.key.slice(s.length),this.getter=this.path&&Qe.getter(this.path,!0),this.map=t.map}getValue(e,t,s){let i=this.isContext?s:this.isValue?e:t;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(e,t){return this.getValue(e,t==null?void 0:t.parent,t==null?void 0:t.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}st.prototype.__isYupRef=!0;const Ge=n=>n==null;function lt(n){function e({value:t,path:s="",options:i,originalValue:r,schema:o},a,l){const{name:c,test:d,params:h,message:f,skipAbsent:v}=n;let{parent:E,context:I,abortEarly:L=o.spec.abortEarly,disableStackTrace:Y=o.spec.disableStackTrace}=i;function S(k){return st.isRef(k)?k.getValue(t,E,I):k}function ee(k={}){var D;const T=Object.assign({value:t,originalValue:r,label:o.spec.label,path:k.path||s,spec:o.spec},h,k.params);for(const Q of Object.keys(T))T[Q]=S(T[Q]);const B=new oe(oe.formatError(k.message||f,T),t,T.path,k.type||c,(D=k.disableStackTrace)!=null?D:Y);return B.params=T,B}const se=L?a:l;let W={path:s,parent:E,type:c,from:i.from,createError:ee,resolve:S,options:i,originalValue:r,schema:o};const xe=k=>{oe.isError(k)?se(k):k?l(null):se(ee())},Ae=k=>{oe.isError(k)?se(k):a(k)};if(v&&Ge(t))return xe(!0);let ie;try{var be;if(ie=d.call(W,t,W),typeof((be=ie)==null?void 0:be.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${W.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(ie).then(xe,Ae)}}catch(k){Ae(k);return}xe(ie)}return e.OPTIONS=n,e}function Tl(n,e,t,s=t){let i,r,o;return e?(Qe.forEach(e,(a,l,c)=>{let d=l?a.slice(1,a.length-1):a;n=n.resolve({context:s,parent:i,value:t});let h=n.type==="tuple",f=c?parseInt(d,10):0;if(n.innerType||h){if(h&&!c)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(t&&f>=t.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${e}. because there is no value at that index. `);i=t,t=t&&t[f],n=h?n.spec.types[f]:n.innerType}if(!c){if(!n.fields||!n.fields[d])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${n.type}")`);i=t,t=t&&t[d],n=n.fields[d]}r=d,o=l?"["+a+"]":"."+a}),{schema:n,parent:i,parentPath:r}):{parent:i,parentPath:e,schema:n}}class an extends Set{describe(){const e=[];for(const t of this.values())e.push(st.isRef(t)?t.describe():t);return e}resolveAll(e){let t=[];for(const s of this.values())t.push(e(s));return t}clone(){return new an(this.values())}merge(e,t){const s=this.clone();return e.forEach(i=>s.add(i)),t.forEach(i=>s.delete(i)),s}}function ht(n,e=new Map){if(Rs(n)||!n||typeof n!="object")return n;if(e.has(n))return e.get(n);let t;if(n instanceof Date)t=new Date(n.getTime()),e.set(n,t);else if(n instanceof RegExp)t=new RegExp(n),e.set(n,t);else if(Array.isArray(n)){t=new Array(n.length),e.set(n,t);for(let s=0;s<n.length;s++)t[s]=ht(n[s],e)}else if(n instanceof Map){t=new Map,e.set(n,t);for(const[s,i]of n.entries())t.set(s,ht(i,e))}else if(n instanceof Set){t=new Set,e.set(n,t);for(const s of n)t.add(ht(s,e))}else if(n instanceof Object){t={},e.set(n,t);for(const[s,i]of Object.entries(n))t[s]=ht(i,e)}else throw Error(`Unable to clone ${n}`);return t}class Ie{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new an,this._blacklist=new an,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(we.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(t=>{t.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const t=Object.create(Object.getPrototypeOf(this));return t.type=this.type,t._typeCheck=this._typeCheck,t._whitelist=this._whitelist.clone(),t._blacklist=this._blacklist.clone(),t.internalTests=Object.assign({},this.internalTests),t.exclusiveTests=Object.assign({},this.exclusiveTests),t.deps=[...this.deps],t.conditions=[...this.conditions],t.tests=[...this.tests],t.transforms=[...this.transforms],t.spec=ht(Object.assign({},this.spec,e)),t}label(e){let t=this.clone();return t.spec.label=e,t}meta(...e){if(e.length===0)return this.spec.meta;let t=this.clone();return t.spec.meta=Object.assign(t.spec.meta||{},e[0]),t}withMutation(e){let t=this._mutate;this._mutate=!0;let s=e(this);return this._mutate=t,s}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let t=this,s=e.clone();const i=Object.assign({},t.spec,s.spec);return s.spec=i,s.internalTests=Object.assign({},t.internalTests,s.internalTests),s._whitelist=t._whitelist.merge(e._whitelist,e._blacklist),s._blacklist=t._blacklist.merge(e._blacklist,e._whitelist),s.tests=t.tests,s.exclusiveTests=t.exclusiveTests,s.withMutation(r=>{e.tests.forEach(o=>{r.test(o.OPTIONS)})}),s.transforms=[...t.transforms,...s.transforms],s}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let t=this;if(t.conditions.length){let s=t.conditions;t=t.clone(),t.conditions=[],t=s.reduce((i,r)=>r.resolve(i,e),t),t=t.resolve(e)}return t}resolveOptions(e){var t,s,i,r;return Object.assign({},e,{from:e.from||[],strict:(t=e.strict)!=null?t:this.spec.strict,abortEarly:(s=e.abortEarly)!=null?s:this.spec.abortEarly,recursive:(i=e.recursive)!=null?i:this.spec.recursive,disableStackTrace:(r=e.disableStackTrace)!=null?r:this.spec.disableStackTrace})}cast(e,t={}){let s=this.resolve(Object.assign({value:e},t)),i=t.assert==="ignore-optionality",r=s._cast(e,t);if(t.assert!==!1&&!s.isType(r)){if(i&&Ge(r))return r;let o=$e(e),a=$e(r);throw new TypeError(`The value of ${t.path||"field"} could not be cast to a value that satisfies the schema type: "${s.type}". 

attempted value: ${o} 
`+(a!==o?`result of cast: ${a}`:""))}return r}_cast(e,t){let s=e===void 0?e:this.transforms.reduce((i,r)=>r.call(this,i,e,this),e);return s===void 0&&(s=this.getDefault(t)),s}_validate(e,t={},s,i){let{path:r,originalValue:o=e,strict:a=this.spec.strict}=t,l=e;a||(l=this._cast(l,Object.assign({assert:!1},t)));let c=[];for(let d of Object.values(this.internalTests))d&&c.push(d);this.runTests({path:r,value:l,originalValue:o,options:t,tests:c},s,d=>{if(d.length)return i(d,l);this.runTests({path:r,value:l,originalValue:o,options:t,tests:this.tests},s,i)})}runTests(e,t,s){let i=!1,{tests:r,value:o,originalValue:a,path:l,options:c}=e,d=I=>{i||(i=!0,t(I,o))},h=I=>{i||(i=!0,s(I,o))},f=r.length,v=[];if(!f)return h([]);let E={value:o,originalValue:a,path:l,options:c,schema:this};for(let I=0;I<r.length;I++){const L=r[I];L(E,d,function(S){S&&(Array.isArray(S)?v.push(...S):v.push(S)),--f<=0&&h(v)})}}asNestedTest({key:e,index:t,parent:s,parentPath:i,originalParent:r,options:o}){const a=e??t;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let c=s[a];const d=Object.assign({},o,{strict:!0,parent:s,value:c,originalValue:r[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${i||""}[${c?a:`"${a}"`}]`:(i?`${i}.`:"")+e});return(h,f,v)=>this.resolve(d)._validate(c,d,f,v)}validate(e,t){var s;let i=this.resolve(Object.assign({},t,{value:e})),r=(s=t==null?void 0:t.disableStackTrace)!=null?s:i.spec.disableStackTrace;return new Promise((o,a)=>i._validate(e,t,(l,c)=>{oe.isError(l)&&(l.value=c),a(l)},(l,c)=>{l.length?a(new oe(l,c,void 0,void 0,r)):o(c)}))}validateSync(e,t){var s;let i=this.resolve(Object.assign({},t,{value:e})),r,o=(s=t==null?void 0:t.disableStackTrace)!=null?s:i.spec.disableStackTrace;return i._validate(e,Object.assign({},t,{sync:!0}),(a,l)=>{throw oe.isError(a)&&(a.value=l),a},(a,l)=>{if(a.length)throw new oe(a,e,void 0,void 0,o);r=l}),r}isValid(e,t){return this.validate(e,t).then(()=>!0,s=>{if(oe.isError(s))return!1;throw s})}isValidSync(e,t){try{return this.validateSync(e,t),!0}catch(s){if(oe.isError(s))return!1;throw s}}_getDefault(e){let t=this.spec.default;return t==null?t:typeof t=="function"?t.call(this,e):ht(t)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,t){const s=this.clone({nullable:e});return s.internalTests.nullable=lt({message:t,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),s}optionality(e,t){const s=this.clone({optional:e});return s.internalTests.optionality=lt({message:t,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),s}optional(){return this.optionality(!0)}defined(e=we.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=we.notNull){return this.nullability(!1,e)}required(e=we.required){return this.clone().withMutation(t=>t.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let t=this.clone();return t.transforms.push(e),t}test(...e){let t;if(e.length===1?typeof e[0]=="function"?t={test:e[0]}:t=e[0]:e.length===2?t={name:e[0],test:e[1]}:t={name:e[0],message:e[1],test:e[2]},t.message===void 0&&(t.message=we.default),typeof t.test!="function")throw new TypeError("`test` is a required parameters");let s=this.clone(),i=lt(t),r=t.exclusive||t.name&&s.exclusiveTests[t.name]===!0;if(t.exclusive&&!t.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return t.name&&(s.exclusiveTests[t.name]=!!t.exclusive),s.tests=s.tests.filter(o=>!(o.OPTIONS.name===t.name&&(r||o.OPTIONS.test===i.OPTIONS.test))),s.tests.push(i),s}when(e,t){!Array.isArray(e)&&typeof e!="string"&&(t=e,e=".");let s=this.clone(),i=Pr(e).map(r=>new st(r));return i.forEach(r=>{r.isSibling&&s.deps.push(r.key)}),s.conditions.push(typeof t=="function"?new on(i,t):on.fromOptions(i,t)),s}typeError(e){let t=this.clone();return t.internalTests.typeError=lt({message:e,name:"typeError",skipAbsent:!0,test(s){return this.schema._typeCheck(s)?!0:this.createError({params:{type:this.schema.type}})}}),t}oneOf(e,t=we.oneOf){let s=this.clone();return e.forEach(i=>{s._whitelist.add(i),s._blacklist.delete(i)}),s.internalTests.whiteList=lt({message:t,name:"oneOf",skipAbsent:!0,test(i){let r=this.schema._whitelist,o=r.resolveAll(this.resolve);return o.includes(i)?!0:this.createError({params:{values:Array.from(r).join(", "),resolved:o}})}}),s}notOneOf(e,t=we.notOneOf){let s=this.clone();return e.forEach(i=>{s._blacklist.add(i),s._whitelist.delete(i)}),s.internalTests.blacklist=lt({message:t,name:"notOneOf",test(i){let r=this.schema._blacklist,o=r.resolveAll(this.resolve);return o.includes(i)?this.createError({params:{values:Array.from(r).join(", "),resolved:o}}):!0}}),s}strip(e=!0){let t=this.clone();return t.spec.strip=e,t}describe(e){const t=(e?this.resolve(e):this).clone(),{label:s,meta:i,optional:r,nullable:o}=t.spec;return{meta:i,label:s,optional:r,nullable:o,default:t.getDefault(e),type:t.type,oneOf:t._whitelist.describe(),notOneOf:t._blacklist.describe(),tests:t.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,c,d)=>d.findIndex(h=>h.name===l.name)===c)}}}Ie.prototype.__isYupSchema__=!0;for(const n of["validate","validateSync"])Ie.prototype[`${n}At`]=function(e,t,s={}){const{parent:i,parentPath:r,schema:o}=Tl(this,e,t,s.context);return o[n](i&&i[r],Object.assign({},s,{parent:i,path:e}))};for(const n of["equals","is"])Ie.prototype[n]=Ie.prototype.oneOf;for(const n of["not","nope"])Ie.prototype[n]=Ie.prototype.notOneOf;let Il=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,xl=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,Al=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,Nl=n=>Ge(n)||n===n.trim(),Dl={}.toString();function Rl(){return new $r}class $r extends Ie{constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,t,s)=>{if(!s.spec.coerce||s.isType(e)||Array.isArray(e))return e;const i=e!=null&&e.toString?e.toString():e;return i===Dl?e:i})})}required(e){return super.required(e).withMutation(t=>t.test({message:e||we.required,name:"required",skipAbsent:!0,test:s=>!!s.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(t=>t.OPTIONS.name!=="required"),e))}length(e,t=_e.length){return this.test({message:t,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(s){return s.length===this.resolve(e)}})}min(e,t=_e.min){return this.test({message:t,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(s){return s.length>=this.resolve(e)}})}max(e,t=_e.max){return this.test({name:"max",exclusive:!0,message:t,params:{max:e},skipAbsent:!0,test(s){return s.length<=this.resolve(e)}})}matches(e,t){let s=!1,i,r;return t&&(typeof t=="object"?{excludeEmptyString:s=!1,message:i,name:r}=t:i=t),this.test({name:r||"matches",message:i||_e.matches,params:{regex:e},skipAbsent:!0,test:o=>o===""&&s||o.search(e)!==-1})}email(e=_e.email){return this.matches(Il,{name:"email",message:e,excludeEmptyString:!0})}url(e=_e.url){return this.matches(xl,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=_e.uuid){return this.matches(Al,{name:"uuid",message:e,excludeEmptyString:!1})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=_e.trim){return this.transform(t=>t!=null?t.trim():t).test({message:e,name:"trim",test:Nl})}lowercase(e=_e.lowercase){return this.transform(t=>Ge(t)?t:t.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:t=>Ge(t)||t===t.toLowerCase()})}uppercase(e=_e.uppercase){return this.transform(t=>Ge(t)?t:t.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:t=>Ge(t)||t===t.toUpperCase()})}}Rl.prototype=$r.prototype;const kl=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function De(n,e=0){return Number(n)||e}function Ol(n){const e=kl.exec(n);if(!e)return Date.parse?Date.parse(n):Number.NaN;const t={year:De(e[1]),month:De(e[2],1)-1,day:De(e[3],1),hour:De(e[4]),minute:De(e[5]),second:De(e[6]),millisecond:e[7]?De(e[7].substring(0,3)):0,z:e[8]||void 0,plusMinus:e[9]||void 0,hourOffset:De(e[10]),minuteOffset:De(e[11])};if(t.z===void 0&&t.plusMinus===void 0)return new Date(t.year,t.month,t.day,t.hour,t.minute,t.second,t.millisecond).valueOf();let s=0;return t.z!=="Z"&&t.plusMinus!==void 0&&(s=t.hourOffset*60+t.minuteOffset,t.plusMinus==="+"&&(s=0-s)),Date.UTC(t.year,t.month,t.day,t.hour,t.minute+s,t.second,t.millisecond)}let Fl=new Date(""),Ml=n=>Object.prototype.toString.call(n)==="[object Date]";class Cn extends Ie{constructor(){super({type:"date",check(e){return Ml(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,t,s)=>!s.spec.coerce||s.isType(e)||e===null?e:(e=Ol(e),isNaN(e)?Cn.INVALID_DATE:new Date(e)))})}prepareParam(e,t){let s;if(st.isRef(e))s=e;else{let i=this.cast(e);if(!this._typeCheck(i))throw new TypeError(`\`${t}\` must be a Date or a value that can be \`cast()\` to a Date`);s=i}return s}min(e,t=es.min){let s=this.prepareParam(e,"min");return this.test({message:t,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(i){return i>=this.resolve(s)}})}max(e,t=es.max){let s=this.prepareParam(e,"max");return this.test({message:t,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(i){return i<=this.resolve(s)}})}}Cn.INVALID_DATE=Fl;Cn.prototype;function Pl(n,e=[]){let t=[],s=new Set,i=new Set(e.map(([o,a])=>`${o}-${a}`));function r(o,a){let l=Qe.split(o)[0];s.add(l),i.has(`${a}-${l}`)||t.push([a,l])}for(const o of Object.keys(n)){let a=n[o];s.add(o),st.isRef(a)&&a.isSibling?r(a.path,o):Rs(a)&&"deps"in a&&a.deps.forEach(l=>r(l,o))}return fl.array(Array.from(s),t).reverse()}function Ni(n,e){let t=1/0;return n.some((s,i)=>{var r;if((r=e.path)!=null&&r.includes(s))return t=i,!0}),t}function Vr(n){return(e,t)=>Ni(n,e)-Ni(n,t)}const Ll=(n,e,t)=>{if(typeof n!="string")return n;let s=n;try{s=JSON.parse(n)}catch{}return t.isType(s)?s:n};function en(n){if("fields"in n){const e={};for(const[t,s]of Object.entries(n.fields))e[t]=en(s);return n.setFields(e)}if(n.type==="array"){const e=n.optional();return e.innerType&&(e.innerType=en(e.innerType)),e}return n.type==="tuple"?n.optional().clone({types:n.spec.types.map(en)}):"optional"in n?n.optional():n}const $l=(n,e)=>{const t=[...Qe.normalizePath(e)];if(t.length===1)return t[0]in n;let s=t.pop(),i=Qe.getter(Qe.join(t),!0)(n);return!!(i&&s in i)};let Di=n=>Object.prototype.toString.call(n)==="[object Object]";function Vl(n,e){let t=Object.keys(n.fields);return Object.keys(e).filter(s=>t.indexOf(s)===-1)}const Ul=Vr([]);function Bl(n){return new Ur(n)}class Ur extends Ie{constructor(e){super({type:"object",check(t){return Di(t)||typeof t=="function"}}),this.fields=Object.create(null),this._sortErrors=Ul,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,t={}){var s;let i=super._cast(e,t);if(i===void 0)return this.getDefault(t);if(!this._typeCheck(i))return i;let r=this.fields,o=(s=t.stripUnknown)!=null?s:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(i).filter(h=>!this._nodes.includes(h))),l={},c=Object.assign({},t,{parent:l,__validating:t.__validating||!1}),d=!1;for(const h of a){let f=r[h],v=h in i;if(f){let E,I=i[h];c.path=(t.path?`${t.path}.`:"")+h,f=f.resolve({value:I,context:t.context,parent:l});let L=f instanceof Ie?f.spec:void 0,Y=L==null?void 0:L.strict;if(L!=null&&L.strip){d=d||h in i;continue}E=!t.__validating||!Y?f.cast(i[h],c):i[h],E!==void 0&&(l[h]=E)}else v&&!o&&(l[h]=i[h]);(v!==h in l||l[h]!==i[h])&&(d=!0)}return d?l:i}_validate(e,t={},s,i){let{from:r=[],originalValue:o=e,recursive:a=this.spec.recursive}=t;t.from=[{schema:this,value:o},...r],t.__validating=!0,t.originalValue=o,super._validate(e,t,s,(l,c)=>{if(!a||!Di(c)){i(l,c);return}o=o||c;let d=[];for(let h of this._nodes){let f=this.fields[h];!f||st.isRef(f)||d.push(f.asNestedTest({options:t,key:h,parent:c,parentPath:t.path,originalParent:o}))}this.runTests({tests:d,value:c,originalValue:o,options:t},s,h=>{i(h.sort(this._sortErrors).concat(l),c)})})}clone(e){const t=super.clone(e);return t.fields=Object.assign({},this.fields),t._nodes=this._nodes,t._excludedEdges=this._excludedEdges,t._sortErrors=this._sortErrors,t}concat(e){let t=super.concat(e),s=t.fields;for(let[i,r]of Object.entries(this.fields)){const o=s[i];s[i]=o===void 0?r:o}return t.withMutation(i=>i.setFields(s,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let t={};return this._nodes.forEach(s=>{var i;const r=this.fields[s];let o=e;(i=o)!=null&&i.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[s]})),t[s]=r&&"getDefault"in r?r.getDefault(o):void 0}),t}setFields(e,t){let s=this.clone();return s.fields=e,s._nodes=Pl(e,t),s._sortErrors=Vr(Object.keys(e)),t&&(s._excludedEdges=t),s}shape(e,t=[]){return this.clone().withMutation(s=>{let i=s._excludedEdges;return t.length&&(Array.isArray(t[0])||(t=[t]),i=[...s._excludedEdges,...t]),s.setFields(Object.assign(s.fields,e),i)})}partial(){const e={};for(const[t,s]of Object.entries(this.fields))e[t]="optional"in s&&s.optional instanceof Function?s.optional():s;return this.setFields(e)}deepPartial(){return en(this)}pick(e){const t={};for(const s of e)this.fields[s]&&(t[s]=this.fields[s]);return this.setFields(t,this._excludedEdges.filter(([s,i])=>e.includes(s)&&e.includes(i)))}omit(e){const t=[];for(const s of Object.keys(this.fields))e.includes(s)||t.push(s);return this.pick(t)}from(e,t,s){let i=Qe.getter(e,!0);return this.transform(r=>{if(!r)return r;let o=r;return $l(r,e)&&(o=Object.assign({},r),s||delete o[e],o[t]=i(r)),o})}json(){return this.transform(Ll)}noUnknown(e=!0,t=ts.noUnknown){typeof e!="boolean"&&(t=e,e=!0);let s=this.test({name:"noUnknown",exclusive:!0,message:t,test(i){if(i==null)return!0;const r=Vl(this.schema,i);return!e||r.length===0||this.createError({params:{unknown:r.join(", ")}})}});return s.spec.noUnknown=e,s}unknown(e=!0,t=ts.noUnknown){return this.noUnknown(!e,t)}transformKeys(e){return this.transform(t=>{if(!t)return t;const s={};for(const i of Object.keys(t))s[e(i)]=t[i];return s})}camelCase(){return this.transformKeys(Bn.camelCase)}snakeCase(){return this.transformKeys(Bn.snakeCase)}constantCase(){return this.transformKeys(e=>Bn.snakeCase(e).toUpperCase())}describe(e){const t=(e?this.resolve(e):this).clone(),s=super.describe(e);s.fields={};for(const[r,o]of Object.entries(t.fields)){var i;let a=e;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[r]})),s.fields[r]=o.describe(a)}return s}}Bl.prototype=Ur.prototype;var Ri={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=function(n,e){if(!n)throw bt(e)},bt=function(n){return new Error("Firebase Database ("+Br.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Wl=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ks={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,d=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,v=c&63;l||(v=64,o||(f=64)),s.push(t[d],t[h],t[f],t[v])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Wr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Wl(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new Hl;const f=r<<2|a>>4;if(s.push(f),c!==64){const v=a<<4&240|c>>2;if(s.push(v),h!==64){const E=c<<6&192|h;s.push(E)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Hl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hr=function(n){const e=Wr(n);return ks.encodeByteArray(e,!0)},ln=function(n){return Hr(n).replace(/\./g,"")},ns=function(n){try{return ks.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(n){return jr(void 0,n)}function jr(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!zl(t)||(n[t]=jr(n[t],e[t]));return n}function zl(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=()=>ql().__FIREBASE_DEFAULTS__,Kl=()=>{if(typeof process>"u"||typeof Ri>"u")return;const n=Ri.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Yl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ns(n[1]);return e&&JSON.parse(e)},zr=()=>{try{return Gl()||Kl()||Yl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ql=n=>{var e,t;return(t=(e=zr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Xl=n=>{const e=Ql(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},qr=()=>{var n;return(n=zr())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ln(JSON.stringify(t)),ln(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Jl())}function ec(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Kr(){return Br.NODE_ADMIN===!0}function tc(){try{return typeof indexedDB=="object"}catch{return!1}}function nc(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc="FirebaseError";class Wt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=sc,Object.setPrototypeOf(this,Wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yr.prototype.create)}}class Yr{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ic(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Wt(i,a,s)}}function ic(n,e){return n.replace(rc,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const rc=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(n){return JSON.parse(n)}function J(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Mt(ns(r[0])||""),t=Mt(ns(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},oc=function(n){const e=Qr(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},ac=function(n){const e=Qr(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function gt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function ki(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function cn(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function ss(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Oi(r)&&Oi(o)){if(!ss(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Oi(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)s[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),d=1518500249):(c=r^o^a,d=1859775393):h<60?(c=r&o|a&(r|o),d=2400959708):(c=r^o^a,d=3395469782);const f=(i<<5|i>>>27)+c+l+d+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Os(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,y(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Sn=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(n){return n&&n._delegate?n._delegate:n}class Pt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new wn;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fc(e))try{this.getOrInitializeService({instanceIdentifier:je})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=je){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=je){return this.instances.has(e)}getOptions(e=je){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:dc(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=je){return this.component?this.component.multipleInstances?e:je:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dc(n){return n===je?void 0:n}function fc(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new hc(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(P||(P={}));const _c={debug:P.DEBUG,verbose:P.VERBOSE,info:P.INFO,warn:P.WARN,error:P.ERROR,silent:P.SILENT},mc=P.INFO,gc={[P.DEBUG]:"log",[P.VERBOSE]:"log",[P.INFO]:"info",[P.WARN]:"warn",[P.ERROR]:"error"},yc=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=gc[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xr{constructor(e){this.name=e,this._logLevel=mc,this._logHandler=yc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in P))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_c[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,P.DEBUG,...e),this._logHandler(this,P.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,P.VERBOSE,...e),this._logHandler(this,P.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,P.INFO,...e),this._logHandler(this,P.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,P.WARN,...e),this._logHandler(this,P.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,P.ERROR,...e),this._logHandler(this,P.ERROR,...e)}}const vc=(n,e)=>e.some(t=>n instanceof t);let Fi,Mi;function bc(){return Fi||(Fi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ec(){return Mi||(Mi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zr=new WeakMap,is=new WeakMap,Jr=new WeakMap,Wn=new WeakMap,Fs=new WeakMap;function Cc(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Ve(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Zr.set(t,n)}).catch(()=>{}),Fs.set(e,n),e}function wc(n){if(is.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});is.set(n,e)}let rs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return is.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Jr.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ve(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Sc(n){rs=n(rs)}function Tc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Hn(this),e,...t);return Jr.set(s,e.sort?e.sort():[e]),Ve(s)}:Ec().includes(n)?function(...e){return n.apply(Hn(this),e),Ve(Zr.get(this))}:function(...e){return Ve(n.apply(Hn(this),e))}}function Ic(n){return typeof n=="function"?Tc(n):(n instanceof IDBTransaction&&wc(n),vc(n,bc())?new Proxy(n,rs):n)}function Ve(n){if(n instanceof IDBRequest)return Cc(n);if(Wn.has(n))return Wn.get(n);const e=Ic(n);return e!==n&&(Wn.set(n,e),Fs.set(e,n)),e}const Hn=n=>Fs.get(n);function xc(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=Ve(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Ve(o.result),l.oldVersion,l.newVersion,Ve(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Ac=["get","getKey","getAll","getAllKeys","count"],Nc=["put","add","delete","clear"],jn=new Map;function Pi(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(jn.get(e))return jn.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Nc.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ac.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return jn.set(e,r),r}Sc(n=>({...n,get:(e,t,s)=>Pi(e,t)||n.get(e,t,s),has:(e,t)=>!!Pi(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Rc(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Rc(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const os="@firebase/app",Li="0.9.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=new Xr("@firebase/app"),kc="@firebase/app-compat",Oc="@firebase/analytics-compat",Fc="@firebase/analytics",Mc="@firebase/app-check-compat",Pc="@firebase/app-check",Lc="@firebase/auth",$c="@firebase/auth-compat",Vc="@firebase/database",Uc="@firebase/database-compat",Bc="@firebase/functions",Wc="@firebase/functions-compat",Hc="@firebase/installations",jc="@firebase/installations-compat",zc="@firebase/messaging",qc="@firebase/messaging-compat",Gc="@firebase/performance",Kc="@firebase/performance-compat",Yc="@firebase/remote-config",Qc="@firebase/remote-config-compat",Xc="@firebase/storage",Zc="@firebase/storage-compat",Jc="@firebase/firestore",eu="@firebase/firestore-compat",tu="firebase",nu="10.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="[DEFAULT]",su={[os]:"fire-core",[kc]:"fire-core-compat",[Fc]:"fire-analytics",[Oc]:"fire-analytics-compat",[Pc]:"fire-app-check",[Mc]:"fire-app-check-compat",[Lc]:"fire-auth",[$c]:"fire-auth-compat",[Vc]:"fire-rtdb",[Uc]:"fire-rtdb-compat",[Bc]:"fire-fn",[Wc]:"fire-fn-compat",[Hc]:"fire-iid",[jc]:"fire-iid-compat",[zc]:"fire-fcm",[qc]:"fire-fcm-compat",[Gc]:"fire-perf",[Kc]:"fire-perf-compat",[Yc]:"fire-rc",[Qc]:"fire-rc-compat",[Xc]:"fire-gcs",[Zc]:"fire-gcs-compat",[Jc]:"fire-fst",[eu]:"fire-fst-compat","fire-js":"fire-js",[tu]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new Map,ls=new Map;function iu(n,e){try{n.container.addComponent(e)}catch(t){Ze.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function hn(n){const e=n.name;if(ls.has(e))return Ze.debug(`There were multiple attempts to register component ${e}.`),!1;ls.set(e,n);for(const t of un.values())iu(t,n);return!0}function ru(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ue=new Yr("app","Firebase",ou);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Pt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ue.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=nu;function cu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:as,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ue.create("bad-app-name",{appName:String(i)});if(t||(t=qr()),!t)throw Ue.create("no-options");const r=un.get(i);if(r){if(ss(t,r.options)&&ss(s,r.config))return r;throw Ue.create("duplicate-app",{appName:i})}const o=new pc(i);for(const l of ls.values())o.addComponent(l);const a=new au(t,s,o);return un.set(i,a),a}function uu(n=as){const e=un.get(n);if(!e&&n===as&&qr())return cu();if(!e)throw Ue.create("no-app",{appName:n});return e}function ft(n,e,t){var s;let i=(s=su[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ze.warn(a.join(" "));return}hn(new Pt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu="firebase-heartbeat-database",du=1,Lt="firebase-heartbeat-store";let zn=null;function eo(){return zn||(zn=xc(hu,du,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Lt)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ue.create("idb-open",{originalErrorMessage:n.message})})),zn}async function fu(n){try{const t=(await eo()).transaction(Lt),s=await t.objectStore(Lt).get(to(n));return await t.done,s}catch(e){if(e instanceof Wt)Ze.warn(e.message);else{const t=Ue.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ze.warn(t.message)}}}async function $i(n,e){try{const s=(await eo()).transaction(Lt,"readwrite");await s.objectStore(Lt).put(e,to(n)),await s.done}catch(t){if(t instanceof Wt)Ze.warn(t.message);else{const s=Ue.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ze.warn(s.message)}}}function to(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu=1024,_u=30*24*60*60*1e3;class mu{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new yu(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Vi();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=_u}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Vi(),{heartbeatsToSend:s,unsentEntries:i}=gu(this._heartbeatsCache.heartbeats),r=ln(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Vi(){return new Date().toISOString().substring(0,10)}function gu(n,e=pu){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ui(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ui(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class yu{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tc()?nc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await fu(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return $i(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return $i(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ui(n){return ln(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(n){hn(new Pt("platform-logger",e=>new Dc(e),"PRIVATE")),hn(new Pt("heartbeat",e=>new mu(e),"PRIVATE")),ft(os,Li,n),ft(os,Li,"esm2017"),ft("fire-js","")}vu("");var bu="firebase",Eu="10.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ft(bu,Eu,"app");var Bi={};const Wi="@firebase/database",Hi="1.0.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no="";function Cu(n){no=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),J(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Mt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Pe(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new wu(e)}}catch{}return new Su},Ke=so("localStorage"),cs=so("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=new Xr("@firebase/database"),Tu=function(){let n=1;return function(){return n++}}(),io=function(n){const e=uc(n),t=new cc;t.update(e);const s=t.digest();return ks.encodeByteArray(s)},Ht=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ht.apply(null,s):typeof s=="object"?e+=J(s):e+=s,e+=" "}return e};let Xe=null,ji=!0;const Iu=function(n,e){y(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(pt.logLevel=P.VERBOSE,Xe=pt.log.bind(pt),e&&cs.set("logging_enabled",!0)):typeof n=="function"?Xe=n:(Xe=null,cs.remove("logging_enabled"))},te=function(...n){if(ji===!0&&(ji=!1,Xe===null&&cs.get("logging_enabled")===!0&&Iu(!0)),Xe){const e=Ht.apply(null,n);Xe(e)}},jt=function(n){return function(...e){te(n,...e)}},us=function(...n){const e="FIREBASE INTERNAL ERROR: "+Ht(...n);pt.error(e)},Fe=function(...n){const e=`FIREBASE FATAL ERROR: ${Ht(...n)}`;throw pt.error(e),new Error(e)},le=function(...n){const e="FIREBASE WARNING: "+Ht(...n);pt.warn(e)},xu=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&le("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ro=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Au=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},yt="[MIN_NAME]",Je="[MAX_NAME]",Ct=function(n,e){if(n===e)return 0;if(n===yt||e===Je)return-1;if(e===yt||n===Je)return 1;{const t=zi(n),s=zi(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Nu=function(n,e){return n===e?0:n<e?-1:1},xt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+J(e))},Ms=function(n){if(typeof n!="object"||n===null)return J(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=J(e[s]),t+=":",t+=Ms(n[e[s]]);return t+="}",t},oo=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function pe(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const ao=function(n){y(!ro(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const d=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},Du=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ru=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},ku=new RegExp("^-?(0*)\\d{1,10}$"),Ou=-2147483648,Fu=2147483647,zi=function(n){if(ku.test(n)){const e=Number(n);if(e>=Ou&&e<=Fu)return e}return null},wt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw le("Exception was thrown by user callback.",t),e},Math.floor(0))}},Mu=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},kt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){le(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(te("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',le(e)}}class _t{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}_t.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps="5",lo="v",co="s",uo="r",ho="f",fo=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,po="ls",_o="p",hs="ac",mo="websocket",go="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,t,s,i,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ke.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ke.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function $u(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function vo(n,e,t){y(typeof e=="string","typeof type must == string"),y(typeof t=="object","typeof params must == object");let s;if(e===mo)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===go)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);$u(n)&&(t.ns=n.namespace);const i=[];return pe(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(){this.counters_={}}incrementCounter(e,t=1){Pe(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return jl(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn={},Gn={};function Ls(n){const e=n.toString();return qn[e]||(qn[e]=new Vu),qn[e]}function Uu(n,e){const t=n.toString();return Gn[t]||(Gn[t]=e()),Gn[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&wt(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="start",Wu="close",Hu="pLPCommand",ju="pRTLPCB",bo="id",Eo="pw",Co="ser",zu="cb",qu="seg",Gu="ts",Ku="d",Yu="dframe",wo=1870,So=30,Qu=wo-So,Xu=25e3,Zu=3e4;class dt{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=jt(e),this.stats_=Ls(t),this.urlFn=l=>(this.appCheckToken&&(l[hs]=this.appCheckToken),vo(t,go,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Bu(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Zu)),Au(()=>{if(this.isClosed_)return;this.scriptTagHolder=new $s((...r)=>{const[o,a,l,c,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===qi)this.id=a,this.password=l;else if(o===Wu)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[qi]="t",s[Co]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[zu]=this.scriptTagHolder.uniqueCallbackIdentifier),s[lo]=Ps,this.transportSessionId&&(s[co]=this.transportSessionId),this.lastSessionId&&(s[po]=this.lastSessionId),this.applicationId&&(s[_o]=this.applicationId),this.appCheckToken&&(s[hs]=this.appCheckToken),typeof location<"u"&&location.hostname&&fo.test(location.hostname)&&(s[uo]=ho);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){dt.forceAllow_=!0}static forceDisallow(){dt.forceDisallow_=!0}static isAvailable(){return dt.forceAllow_?!0:!dt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Du()&&!Ru()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=J(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Hr(t),i=oo(s,Qu);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Yu]="t",s[bo]=e,s[Eo]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=J(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class $s{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Tu(),window[Hu+this.uniqueCallbackIdentifier]=e,window[ju+this.uniqueCallbackIdentifier]=t,this.myIFrame=$s.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){te("frame writing exception"),a.stack&&te(a.stack),te(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||te("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[bo]=this.myID,e[Eo]=this.myPW,e[Co]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+So+s.length<=wo;){const o=this.pendingSegs.shift();s=s+"&"+qu+i+"="+o.seg+"&"+Gu+i+"="+o.ts+"&"+Ku+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Xu)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{te("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=16384,eh=45e3;let dn=null;typeof MozWebSocket<"u"?dn=MozWebSocket:typeof WebSocket<"u"&&(dn=WebSocket);class ge{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=jt(this.connId),this.stats_=Ls(t),this.connURL=ge.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[lo]=Ps,typeof location<"u"&&location.hostname&&fo.test(location.hostname)&&(o[uo]=ho),t&&(o[co]=t),s&&(o[po]=s),i&&(o[hs]=i),r&&(o[_o]=r),vo(e,mo,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ke.set("previous_websocket_failure",!0);try{let s;Kr(),this.mySock=new dn(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ge.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&dn!==null&&!ge.forceDisallow_}static previouslyFailed(){return Ke.isInMemoryStorage||Ke.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ke.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Mt(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(y(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=J(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=oo(t,Ju);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(eh))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ge.responsesRequiredToBeHealthy=2;ge.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[dt,ge]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ge&&ge.isAvailable();let s=t&&!ge.previouslyFailed();if(e.webSocketOnly&&(t||le("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ge];else{const i=this.transports_=[];for(const r of $t.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);$t.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}$t.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=6e4,nh=5e3,sh=10*1024,ih=100*1024,Kn="t",Gi="d",rh="s",Ki="r",oh="e",Yi="o",Qi="a",Xi="n",Zi="p",ah="h";class lh{constructor(e,t,s,i,r,o,a,l,c,d){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=jt("c:"+this.id+":"),this.transportManager_=new $t(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=kt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ih?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>sh?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Kn in e){const t=e[Kn];t===Qi?this.upgradeIfSecondaryHealthy_():t===Ki?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Yi&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=xt("t",e),s=xt("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Zi,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Qi,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Xi,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=xt("t",e),s=xt("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=xt(Kn,e);if(Gi in e){const s=e[Gi];if(t===ah){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Xi){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===rh?this.onConnectionShutdown_(s):t===Ki?this.onReset_(s):t===oh?us("Server Error: "+s):t===Yi?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):us("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ps!==s&&le("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),kt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(th))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):kt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(nh))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Zi,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ke.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this.allowedEvents_=e,this.listeners_={},y(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){y(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends Io{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Gr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new fn}getInitialEvent(e){return y(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=32,er=768;class U{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function O(){return new U("")}function x(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function We(n){return n.pieces_.length-n.pieceNum_}function V(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new U(n.pieces_,e)}function xo(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function ch(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Ao(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function No(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new U(e,0)}function j(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof U)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new U(t,0)}function A(n){return n.pieceNum_>=n.pieces_.length}function fe(n,e){const t=x(n),s=x(e);if(t===null)return e;if(t===s)return fe(V(n),V(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Do(n,e){if(We(n)!==We(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function ye(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(We(n)>We(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class uh{constructor(e,t){this.errorPrefix_=t,this.parts_=Ao(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Sn(this.parts_[s]);Ro(this)}}function hh(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Sn(e),Ro(n)}function dh(n){const e=n.parts_.pop();n.byteLength_-=Sn(e),n.parts_.length>0&&(n.byteLength_-=1)}function Ro(n){if(n.byteLength_>er)throw new Error(n.errorPrefix_+"has a key path longer than "+er+" bytes ("+n.byteLength_+").");if(n.parts_.length>Ji)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ji+") or object contains a cycle "+ze(n))}function ze(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs extends Io{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Vs}getInitialEvent(e){return y(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=1e3,fh=60*5*1e3,tr=30*1e3,ph=1.3,_h=3e4,mh="server_kill",nr=3;class Oe extends To{constructor(e,t,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Oe.nextPersistentConnectionId_++,this.log_=jt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=At,this.maxReconnectDelay_=fh,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Kr())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Vs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&fn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(J(r)),y(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new wn,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),y(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Oe.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Pe(e,"w")){const s=gt(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();le(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ac(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=tr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=oc(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+J(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):us("Unrecognized action received from server: "+J(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){y(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=At,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=At,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>_h&&(this.reconnectDelay_=At),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ph)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Oe.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){y(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?te("getToken() completed but was canceled"):(te("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new lh(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,v=>{le(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(mh)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&le(h),l())}}}interrupt(e){te("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){te("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ki(this.interruptReasons_)&&(this.reconnectDelay_=At,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Ms(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new U(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){te("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=nr&&(this.reconnectDelay_=tr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){te("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=nr&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+no.replace(/\./g,"-")]=1,Gr()?e["framework.cordova"]=1:ec()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=fn.getInstance().currentlyOnline();return ki(this.interruptReasons_)&&e}}Oe.nextPersistentConnectionId_=0;Oe.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new N(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new N(yt,e),i=new N(yt,t);return this.compare(s,i)!==0}minPost(){return N.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xt;class ko extends Tn{static get __EMPTY_NODE(){return Xt}static set __EMPTY_NODE(e){Xt=e}compare(e,t){return Ct(e.name,t.name)}isDefinedOn(e){throw bt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return N.MIN}maxPost(){return new N(Je,Xt)}makePost(e,t){return y(typeof e=="string","KeyIndex indexValue must always be a string."),new N(e,Xt)}toString(){return".key"}}const mt=new ko;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class K{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??K.RED,this.left=i??ae.EMPTY_NODE,this.right=r??ae.EMPTY_NODE}copy(e,t,s,i,r){return new K(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ae.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return ae.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,K.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,K.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}K.RED=!0;K.BLACK=!1;class gh{copy(e,t,s,i,r){return this}insert(e,t,s){return new K(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ae{constructor(e,t=ae.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ae(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,K.BLACK,null,null))}remove(e){return new ae(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,K.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Zt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Zt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Zt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Zt(this.root_,null,this.comparator_,!0,e)}}ae.EMPTY_NODE=new gh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(n,e){return Ct(n.name,e.name)}function Us(n,e){return Ct(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ds;function vh(n){ds=n}const Oo=function(n){return typeof n=="number"?"number:"+ao(n):"string:"+n},Fo=function(n){if(n.isLeafNode()){const e=n.val();y(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Pe(e,".sv"),"Priority must be a string or number.")}else y(n===ds||n.isEmpty(),"priority of unexpected type.");y(n===ds||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sr;class G{constructor(e,t=G.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,y(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Fo(this.priorityNode_)}static set __childrenNodeConstructor(e){sr=e}static get __childrenNodeConstructor(){return sr}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new G(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:G.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return A(e)?this:x(e)===".priority"?this.priorityNode_:G.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:G.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=x(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(y(s!==".priority"||We(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,G.__childrenNodeConstructor.EMPTY_NODE.updateChild(V(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Oo(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ao(this.value_):e+=this.value_,this.lazyHash_=io(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===G.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof G.__childrenNodeConstructor?-1:(y(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=G.VALUE_TYPE_ORDER.indexOf(t),r=G.VALUE_TYPE_ORDER.indexOf(s);return y(i>=0,"Unknown leaf type: "+t),y(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}G.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mo,Po;function bh(n){Mo=n}function Eh(n){Po=n}class Ch extends Tn{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Ct(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return N.MIN}maxPost(){return new N(Je,new G("[PRIORITY-POST]",Po))}makePost(e,t){const s=Mo(e);return new N(t,new G("[PRIORITY-POST]",s))}toString(){return".priority"}}const ne=new Ch;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=Math.log(2);class Sh{constructor(e){const t=r=>parseInt(Math.log(r)/wh,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pn=function(n,e,t,s){n.sort(e);const i=function(l,c){const d=c-l;let h,f;if(d===0)return null;if(d===1)return h=n[l],f=t?t(h):h,new K(f,h.node,K.BLACK,null,null);{const v=parseInt(d/2,10)+l,E=i(l,v),I=i(v+1,c);return h=n[v],f=t?t(h):h,new K(f,h.node,K.BLACK,E,I)}},r=function(l){let c=null,d=null,h=n.length;const f=function(E,I){const L=h-E,Y=h;h-=E;const S=i(L+1,Y),ee=n[L],se=t?t(ee):ee;v(new K(se,ee.node,I,null,S))},v=function(E){c?(c.left=E,c=E):(d=E,c=E)};for(let E=0;E<l.count;++E){const I=l.nextBitIsOne(),L=Math.pow(2,l.count-(E+1));I?f(L,K.BLACK):(f(L,K.BLACK),f(L,K.RED))}return d},o=new Sh(n.length),a=r(o);return new ae(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yn;const ct={};class ke{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return y(ct&&ne,"ChildrenNode.ts has not been loaded"),Yn=Yn||new ke({".priority":ct},{".priority":ne}),Yn}get(e){const t=gt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ae?t:null}hasIndex(e){return Pe(this.indexSet_,e.toString())}addIndex(e,t){y(e!==mt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(N.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=pn(s,e.getCompare()):a=ct;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new ke(d,c)}addToIndexes(e,t){const s=cn(this.indexes_,(i,r)=>{const o=gt(this.indexSet_,r);if(y(o,"Missing index implementation for "+r),i===ct)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(N.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),pn(a,o.getCompare())}else return ct;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new N(e.name,a))),l.insert(e,e.node)}});return new ke(s,this.indexSet_)}removeFromIndexes(e,t){const s=cn(this.indexes_,i=>{if(i===ct)return i;{const r=t.get(e.name);return r?i.remove(new N(e.name,r)):i}});return new ke(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nt;class R{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Fo(this.priorityNode_),this.children_.isEmpty()&&y(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Nt||(Nt=new R(new ae(Us),null,ke.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Nt}updatePriority(e){return this.children_.isEmpty()?this:new R(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Nt:t}}getChild(e){const t=x(e);return t===null?this:this.getImmediateChild(t).getChild(V(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(y(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new N(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Nt:this.priorityNode_;return new R(i,o,r)}}updateChild(e,t){const s=x(e);if(s===null)return t;{y(x(e)!==".priority"||We(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(V(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(ne,(o,a)=>{t[o]=a.val(e),s++,r&&R.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Oo(this.getPriority().val())+":"),this.forEachChild(ne,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":io(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new N(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new N(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new N(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,N.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,N.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===zt?-1:0}withIndex(e){if(e===mt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new R(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===mt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(ne),i=t.getIterator(ne);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===mt?null:this.indexMap_.get(e.toString())}}R.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Th extends R{constructor(){super(new ae(Us),R.EMPTY_NODE,ke.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return R.EMPTY_NODE}isEmpty(){return!1}}const zt=new Th;Object.defineProperties(N,{MIN:{value:new N(yt,R.EMPTY_NODE)},MAX:{value:new N(Je,zt)}});ko.__EMPTY_NODE=R.EMPTY_NODE;G.__childrenNodeConstructor=R;vh(zt);Eh(zt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih=!0;function Z(n,e=null){if(n===null)return R.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),y(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new G(t,Z(e))}if(!(n instanceof Array)&&Ih){const t=[];let s=!1;if(pe(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=Z(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new N(o,l)))}}),t.length===0)return R.EMPTY_NODE;const r=pn(t,yh,o=>o.name,Us);if(s){const o=pn(t,ne.getCompare());return new R(r,Z(e),new ke({".priority":o},{".priority":ne}))}else return new R(r,Z(e),ke.Default)}else{let t=R.EMPTY_NODE;return pe(n,(s,i)=>{if(Pe(n,s)&&s.substring(0,1)!=="."){const r=Z(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(Z(e))}}bh(Z);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh extends Tn{constructor(e){super(),this.indexPath_=e,y(!A(e)&&x(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Ct(e.name,t.name):r}makePost(e,t){const s=Z(e),i=R.EMPTY_NODE.updateChild(this.indexPath_,s);return new N(t,i)}maxPost(){const e=R.EMPTY_NODE.updateChild(this.indexPath_,zt);return new N(Je,e)}toString(){return Ao(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah extends Tn{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Ct(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return N.MIN}maxPost(){return N.MAX}makePost(e,t){const s=Z(e);return new N(t,s)}toString(){return".value"}}const Nh=new Ah;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(n){return{type:"value",snapshotNode:n}}function Rh(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function kh(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function ir(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Oh(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ne}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return y(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return y(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:yt}hasEnd(){return this.endSet_}getIndexEndValue(){return y(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return y(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Je}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return y(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ne}copy(){const e=new Bs;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function rr(n){const e={};if(n.isDefault())return e;let t;if(n.index_===ne?t="$priority":n.index_===Nh?t="$value":n.index_===mt?t="$key":(y(n.index_ instanceof xh,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=J(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=J(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+J(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=J(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+J(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function or(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ne&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends To{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=jt("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(y(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=_n.getListenId_(e,s),a={};this.listens_[o]=a;const l=rr(e._queryParams);this.restRequest_(r+".json",l,(c,d)=>{let h=d;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),gt(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,t){const s=_n.getListenId_(e,t);delete this.listens_[s]}get(e){const t=rr(e._queryParams),s=e._path.toString(),i=new wn;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+lc(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Mt(a.responseText)}catch{le("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&le("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(){this.rootNode_=R.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){return{value:null,children:new Map}}function Lo(n,e,t){if(A(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=x(e);n.children.has(s)||n.children.set(s,mn());const i=n.children.get(s);e=V(e),Lo(i,e,t)}}function fs(n,e,t){n.value!==null?t(e,n.value):Mh(n,(s,i)=>{const r=new U(e.toString()+"/"+s);fs(i,r,t)})}function Mh(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&pe(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=10*1e3,Lh=30*1e3,$h=5*60*1e3;class Vh{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Ph(e);const s=ar+(Lh-ar)*Math.random();kt(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;pe(e,(i,r)=>{r>0&&Pe(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),kt(this.reportStats_.bind(this),Math.floor(Math.random()*2*$h))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Te||(Te={}));function $o(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Vo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Uo(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Te.ACK_USER_WRITE,this.source=$o()}operationForChild(e){if(A(this.path)){if(this.affectedTree.value!=null)return y(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new U(e));return new gn(O(),t,this.revert)}}else return y(x(this.path)===e,"operationForChild called for unrelated child."),new gn(V(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Te.OVERWRITE}operationForChild(e){return A(this.path)?new et(this.source,O(),this.snap.getImmediateChild(e)):new et(this.source,V(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Te.MERGE}operationForChild(e){if(A(this.path)){const t=this.children.subtree(new U(e));return t.isEmpty()?null:t.value?new et(this.source,O(),t.value):new Vt(this.source,O(),t)}else return y(x(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Vt(this.source,V(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(A(e))return this.isFullyInitialized()&&!this.filtered_;const t=x(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Uh(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Oh(o.childName,o.snapshotNode))}),Dt(n,i,"child_removed",e,s,t),Dt(n,i,"child_added",e,s,t),Dt(n,i,"child_moved",r,s,t),Dt(n,i,"child_changed",e,s,t),Dt(n,i,"value",e,s,t),i}function Dt(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,l)=>Wh(n,a,l)),o.forEach(a=>{const l=Bh(n,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Bh(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Wh(n,e,t){if(e.childName==null||t.childName==null)throw bt("Should only compare child_ events.");const s=new N(e.childName,e.snapshotNode),i=new N(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(n,e){return{eventCache:n,serverCache:e}}function Ot(n,e,t,s){return Bo(new Ws(e,t,s),n.serverCache)}function Wo(n,e,t,s){return Bo(n.eventCache,new Ws(e,t,s))}function ps(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function tt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qn;const Hh=()=>(Qn||(Qn=new ae(Nu)),Qn);class ${constructor(e,t=Hh()){this.value=e,this.children=t}static fromObject(e){let t=new $(null);return pe(e,(s,i)=>{t=t.set(new U(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:O(),value:this.value};if(A(e))return null;{const s=x(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(V(e),t);return r!=null?{path:j(new U(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(A(e))return this;{const t=x(e),s=this.children.get(t);return s!==null?s.subtree(V(e)):new $(null)}}set(e,t){if(A(e))return new $(t,this.children);{const s=x(e),r=(this.children.get(s)||new $(null)).set(V(e),t),o=this.children.insert(s,r);return new $(this.value,o)}}remove(e){if(A(e))return this.children.isEmpty()?new $(null):new $(null,this.children);{const t=x(e),s=this.children.get(t);if(s){const i=s.remove(V(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new $(null):new $(this.value,r)}else return this}}get(e){if(A(e))return this.value;{const t=x(e),s=this.children.get(t);return s?s.get(V(e)):null}}setTree(e,t){if(A(e))return t;{const s=x(e),r=(this.children.get(s)||new $(null)).setTree(V(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new $(this.value,o)}}fold(e){return this.fold_(O(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(j(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,O(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(A(e))return null;{const r=x(e),o=this.children.get(r);return o?o.findOnPath_(V(e),j(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,O(),t)}foreachOnPath_(e,t,s){if(A(e))return this;{this.value&&s(t,this.value);const i=x(e),r=this.children.get(i);return r?r.foreachOnPath_(V(e),j(t,i),s):new $(null)}}foreach(e){this.foreach_(O(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(j(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.writeTree_=e}static empty(){return new ve(new $(null))}}function Ft(n,e,t){if(A(e))return new ve(new $(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=fe(i,e);return r=r.updateChild(o,t),new ve(n.writeTree_.set(i,r))}else{const i=new $(t),r=n.writeTree_.setTree(e,i);return new ve(r)}}}function lr(n,e,t){let s=n;return pe(t,(i,r)=>{s=Ft(s,j(e,i),r)}),s}function cr(n,e){if(A(e))return ve.empty();{const t=n.writeTree_.setTree(e,new $(null));return new ve(t)}}function _s(n,e){return it(n,e)!=null}function it(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(fe(t.path,e)):null}function ur(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ne,(s,i)=>{e.push(new N(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new N(s,i.value))}),e}function Be(n,e){if(A(e))return n;{const t=it(n,e);return t!=null?new ve(new $(t)):new ve(n.writeTree_.subtree(e))}}function ms(n){return n.writeTree_.isEmpty()}function vt(n,e){return Ho(O(),n.writeTree_,e)}function Ho(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(y(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Ho(j(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(j(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(n,e){return Yo(e,n)}function jh(n,e,t,s,i){y(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Ft(n.visibleWrites,e,t)),n.lastWriteId=s}function zh(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function qh(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);y(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Gh(a,s.path)?i=!1:ye(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Kh(n),!0;if(s.snap)n.visibleWrites=cr(n.visibleWrites,s.path);else{const a=s.children;pe(a,l=>{n.visibleWrites=cr(n.visibleWrites,j(s.path,l))})}return!0}else return!1}function Gh(n,e){if(n.snap)return ye(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ye(j(n.path,t),e))return!0;return!1}function Kh(n){n.visibleWrites=zo(n.allWrites,Yh,O()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Yh(n){return n.visible}function zo(n,e,t){let s=ve.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)ye(t,o)?(a=fe(t,o),s=Ft(s,a,r.snap)):ye(o,t)&&(a=fe(o,t),s=Ft(s,O(),r.snap.getChild(a)));else if(r.children){if(ye(t,o))a=fe(t,o),s=lr(s,a,r.children);else if(ye(o,t))if(a=fe(o,t),A(a))s=lr(s,O(),r.children);else{const l=gt(r.children,x(a));if(l){const c=l.getChild(V(a));s=Ft(s,O(),c)}}}else throw bt("WriteRecord should have .snap or .children")}}return s}function qo(n,e,t,s,i){if(!s&&!i){const r=it(n.visibleWrites,e);if(r!=null)return r;{const o=Be(n.visibleWrites,e);if(ms(o))return t;if(t==null&&!_s(o,O()))return null;{const a=t||R.EMPTY_NODE;return vt(o,a)}}}else{const r=Be(n.visibleWrites,e);if(!i&&ms(r))return t;if(!i&&t==null&&!_s(r,O()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(ye(c.path,e)||ye(e,c.path))},a=zo(n.allWrites,o,e),l=t||R.EMPTY_NODE;return vt(a,l)}}}function Qh(n,e,t){let s=R.EMPTY_NODE;const i=it(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ne,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Be(n.visibleWrites,e);return t.forEachChild(ne,(o,a)=>{const l=vt(Be(r,new U(o)),a);s=s.updateImmediateChild(o,l)}),ur(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Be(n.visibleWrites,e);return ur(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Xh(n,e,t,s,i){y(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=j(e,t);if(_s(n.visibleWrites,r))return null;{const o=Be(n.visibleWrites,r);return ms(o)?i.getChild(t):vt(o,i.getChild(t))}}function Zh(n,e,t,s){const i=j(e,t),r=it(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Be(n.visibleWrites,i);return vt(o,s.getNode().getImmediateChild(t))}else return null}function Jh(n,e){return it(n.visibleWrites,e)}function ed(n,e,t,s,i,r,o){let a;const l=Be(n.visibleWrites,e),c=it(l,O());if(c!=null)a=c;else if(t!=null)a=vt(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let v=f.getNext();for(;v&&d.length<i;)h(v,s)!==0&&d.push(v),v=f.getNext();return d}else return[]}function td(){return{visibleWrites:ve.empty(),allWrites:[],lastWriteId:-1}}function gs(n,e,t,s){return qo(n.writeTree,n.treePath,e,t,s)}function Go(n,e){return Qh(n.writeTree,n.treePath,e)}function hr(n,e,t,s){return Xh(n.writeTree,n.treePath,e,t,s)}function yn(n,e){return Jh(n.writeTree,j(n.treePath,e))}function nd(n,e,t,s,i,r){return ed(n.writeTree,n.treePath,e,t,s,i,r)}function Hs(n,e,t){return Zh(n.writeTree,n.treePath,e,t)}function Ko(n,e){return Yo(j(n.treePath,e),n.writeTree)}function Yo(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;y(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),y(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,ir(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,kh(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Rh(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,ir(s,e.snapshotNode,i.oldSnap));else throw bt("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Qo=new id;class js{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ws(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Hs(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:tt(this.viewCache_),r=nd(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}function rd(n,e){y(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),y(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function od(n,e,t,s,i){const r=new sd;let o,a;if(t.type===Te.OVERWRITE){const c=t;c.source.fromUser?o=ys(n,e,c.path,c.snap,s,i,r):(y(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!A(c.path),o=vn(n,e,c.path,c.snap,s,i,a,r))}else if(t.type===Te.MERGE){const c=t;c.source.fromUser?o=ld(n,e,c.path,c.children,s,i,r):(y(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=vs(n,e,c.path,c.children,s,i,a,r))}else if(t.type===Te.ACK_USER_WRITE){const c=t;c.revert?o=hd(n,e,c.path,s,i,r):o=cd(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===Te.LISTEN_COMPLETE)o=ud(n,e,t.path,s,r);else throw bt("Unknown operation type: "+t.type);const l=r.getChanges();return ad(e,o,l),{viewCache:o,changes:l}}function ad(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ps(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Dh(ps(e)))}}function Xo(n,e,t,s,i,r){const o=e.eventCache;if(yn(s,t)!=null)return e;{let a,l;if(A(t))if(y(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=tt(e),d=c instanceof R?c:R.EMPTY_NODE,h=Go(s,d);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=gs(s,tt(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=x(t);if(c===".priority"){y(We(t)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const h=hr(s,t,d,l);h!=null?a=n.filter.updatePriority(d,h):a=o.getNode()}else{const d=V(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=hr(s,t,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(d,f):h=o.getNode().getImmediateChild(c)}else h=Hs(s,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,d,i,r):a=o.getNode()}}return Ot(e,a,o.isFullyInitialized()||A(t),n.filter.filtersNodes())}}function vn(n,e,t,s,i,r,o,a){const l=e.serverCache;let c;const d=o?n.filter:n.filter.getIndexedFilter();if(A(t))c=d.updateFullNode(l.getNode(),s,null);else if(d.filtersNodes()&&!l.isFiltered()){const v=l.getNode().updateChild(t,s);c=d.updateFullNode(l.getNode(),v,null)}else{const v=x(t);if(!l.isCompleteForPath(t)&&We(t)>1)return e;const E=V(t),L=l.getNode().getImmediateChild(v).updateChild(E,s);v===".priority"?c=d.updatePriority(l.getNode(),L):c=d.updateChild(l.getNode(),v,L,E,Qo,null)}const h=Wo(e,c,l.isFullyInitialized()||A(t),d.filtersNodes()),f=new js(i,h,r);return Xo(n,h,t,i,f,a)}function ys(n,e,t,s,i,r,o){const a=e.eventCache;let l,c;const d=new js(i,e,r);if(A(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Ot(e,c,!0,n.filter.filtersNodes());else{const h=x(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),l=Ot(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=V(t),v=a.getNode().getImmediateChild(h);let E;if(A(f))E=s;else{const I=d.getCompleteChild(h);I!=null?xo(f)===".priority"&&I.getChild(No(f)).isEmpty()?E=I:E=I.updateChild(f,s):E=R.EMPTY_NODE}if(v.equals(E))l=e;else{const I=n.filter.updateChild(a.getNode(),h,E,f,d,o);l=Ot(e,I,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function dr(n,e){return n.eventCache.isCompleteForChild(e)}function ld(n,e,t,s,i,r,o){let a=e;return s.foreach((l,c)=>{const d=j(t,l);dr(e,x(d))&&(a=ys(n,a,d,c,i,r,o))}),s.foreach((l,c)=>{const d=j(t,l);dr(e,x(d))||(a=ys(n,a,d,c,i,r,o))}),a}function fr(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function vs(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;A(t)?c=s:c=new $(null).setTree(t,s);const d=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(d.hasChild(h)){const v=e.serverCache.getNode().getImmediateChild(h),E=fr(n,v,f);l=vn(n,l,new U(h),E,i,r,o,a)}}),c.children.inorderTraversal((h,f)=>{const v=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!d.hasChild(h)&&!v){const E=e.serverCache.getNode().getImmediateChild(h),I=fr(n,E,f);l=vn(n,l,new U(h),I,i,r,o,a)}}),l}function cd(n,e,t,s,i,r,o){if(yn(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(A(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return vn(n,e,t,l.getNode().getChild(t),i,r,a,o);if(A(t)){let c=new $(null);return l.getNode().forEachChild(mt,(d,h)=>{c=c.set(new U(d),h)}),vs(n,e,t,c,i,r,a,o)}else return e}else{let c=new $(null);return s.foreach((d,h)=>{const f=j(t,d);l.isCompleteForPath(f)&&(c=c.set(d,l.getNode().getChild(f)))}),vs(n,e,t,c,i,r,a,o)}}function ud(n,e,t,s,i){const r=e.serverCache,o=Wo(e,r.getNode(),r.isFullyInitialized()||A(t),r.isFiltered());return Xo(n,o,t,s,Qo,i)}function hd(n,e,t,s,i,r){let o;if(yn(s,t)!=null)return e;{const a=new js(s,e,i),l=e.eventCache.getNode();let c;if(A(t)||x(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=gs(s,tt(e));else{const h=e.serverCache.getNode();y(h instanceof R,"serverChildren would be complete if leaf node"),d=Go(s,h)}d=d,c=n.filter.updateFullNode(l,d,r)}else{const d=x(t);let h=Hs(s,d,e.serverCache);h==null&&e.serverCache.isCompleteForChild(d)&&(h=l.getImmediateChild(d)),h!=null?c=n.filter.updateChild(l,d,h,V(t),a,r):e.eventCache.getNode().hasChild(d)?c=n.filter.updateChild(l,d,R.EMPTY_NODE,V(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=gs(s,tt(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||yn(s,O())!=null,Ot(e,c,o,n.filter.filtersNodes())}}function dd(n,e){const t=tt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!A(e)&&!t.getImmediateChild(x(e)).isEmpty())?t.getChild(e):null}function pr(n,e,t,s){e.type===Te.MERGE&&e.source.queryId!==null&&(y(tt(n.viewCache_),"We should always have a full cache before handling merges"),y(ps(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=od(n.processor_,i,e,t,s);return rd(n.processor_,r.viewCache),y(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,fd(n,r.changes,r.viewCache.eventCache.getNode(),null)}function fd(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Uh(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _r;function pd(n){y(!_r,"__referenceConstructor has already been defined"),_r=n}function zs(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return y(r!=null,"SyncTree gave us an op for an invalid query."),pr(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(pr(o,e,t,s));return r}}function qs(n,e){let t=null;for(const s of n.views.values())t=t||dd(s,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mr;function _d(n){y(!mr,"__referenceConstructor has already been defined"),mr=n}class gr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new $(null),this.pendingWriteTree_=td(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Zo(n,e,t,s,i){return jh(n.pendingWriteTree_,e,t,s,i),i?xn(n,new et($o(),e,t)):[]}function Ye(n,e,t=!1){const s=zh(n.pendingWriteTree_,e);if(qh(n.pendingWriteTree_,e)){let r=new $(null);return s.snap!=null?r=r.set(O(),!0):pe(s.children,o=>{r=r.set(new U(o),!0)}),xn(n,new gn(s.path,r,t))}else return[]}function In(n,e,t){return xn(n,new et(Vo(),e,t))}function md(n,e,t){const s=$.fromObject(t);return xn(n,new Vt(Vo(),e,s))}function gd(n,e,t,s){const i=ta(n,s);if(i!=null){const r=na(i),o=r.path,a=r.queryId,l=fe(o,e),c=new et(Uo(a),l,t);return sa(n,o,c)}else return[]}function yd(n,e,t,s){const i=ta(n,s);if(i){const r=na(i),o=r.path,a=r.queryId,l=fe(o,e),c=$.fromObject(t),d=new Vt(Uo(a),l,c);return sa(n,o,d)}else return[]}function Gs(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=fe(o,e),c=qs(a,l);if(c)return c});return qo(i,e,r,t,!0)}function xn(n,e){return Jo(e,n.syncPointTree_,null,jo(n.pendingWriteTree_,O()))}function Jo(n,e,t,s){if(A(n.path))return ea(n,e,t,s);{const i=e.get(O());t==null&&i!=null&&(t=qs(i,O()));let r=[];const o=x(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,d=Ko(s,o);r=r.concat(Jo(a,l,c,d))}return i&&(r=r.concat(zs(i,n,s,t))),r}}function ea(n,e,t,s){const i=e.get(O());t==null&&i!=null&&(t=qs(i,O()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Ko(s,o),d=n.operationForChild(o);d&&(r=r.concat(ea(d,a,l,c)))}),i&&(r=r.concat(zs(i,n,s,t))),r}function ta(n,e){return n.tagToQueryMap.get(e)}function na(n){const e=n.indexOf("$");return y(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new U(n.substr(0,e))}}function sa(n,e,t){const s=n.syncPointTree_.get(e);y(s,"Missing sync point for query tag that we're tracking");const i=jo(n.pendingWriteTree_,e);return zs(s,t,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ks(t)}node(){return this.node_}}class Ys{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=j(this.path_,e);return new Ys(this.syncTree_,t)}node(){return Gs(this.syncTree_,this.path_)}}const vd=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},yr=function(n,e,t){if(!n||typeof n!="object")return n;if(y(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return bd(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Ed(n[".sv"],e);y(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},bd=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:y(!1,"Unexpected server value: "+n)}},Ed=function(n,e,t){n.hasOwnProperty("increment")||y(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&y(!1,"Unexpected increment value: "+s);const i=e.node();if(y(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Cd=function(n,e,t,s){return Qs(e,new Ys(t,n),s)},ia=function(n,e,t){return Qs(n,new Ks(e),t)};function Qs(n,e,t){const s=n.getPriority().val(),i=yr(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=yr(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new G(a,Z(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new G(i))),o.forEachChild(ne,(a,l)=>{const c=Qs(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Zs(n,e){let t=e instanceof U?e:new U(e),s=n,i=x(t);for(;i!==null;){const r=gt(s.node.children,i)||{children:{},childCount:0};s=new Xs(i,s,r),t=V(t),i=x(t)}return s}function St(n){return n.node.value}function ra(n,e){n.node.value=e,bs(n)}function oa(n){return n.node.childCount>0}function wd(n){return St(n)===void 0&&!oa(n)}function An(n,e){pe(n.node.children,(t,s)=>{e(new Xs(t,n,s))})}function aa(n,e,t,s){t&&!s&&e(n),An(n,i=>{aa(i,e,!0,s)}),t&&s&&e(n)}function Sd(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function qt(n){return new U(n.parent===null?n.name:qt(n.parent)+"/"+n.name)}function bs(n){n.parent!==null&&Td(n.parent,n.name,n)}function Td(n,e,t){const s=wd(t),i=Pe(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,bs(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,bs(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=/[\[\].#$\/\u0000-\u001F\u007F]/,xd=/[\[\].#$\u0000-\u001F\u007F]/,Xn=10*1024*1024,la=function(n){return typeof n=="string"&&n.length!==0&&!Id.test(n)},ca=function(n){return typeof n=="string"&&n.length!==0&&!xd.test(n)},Ad=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ca(n)},ua=function(n,e,t,s){s&&e===void 0||Js(Os(n,"value"),e,t)},Js=function(n,e,t){const s=t instanceof U?new uh(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ze(s));if(typeof e=="function")throw new Error(n+"contains a function "+ze(s)+" with contents = "+e.toString());if(ro(e))throw new Error(n+"contains "+e.toString()+" "+ze(s));if(typeof e=="string"&&e.length>Xn/3&&Sn(e)>Xn)throw new Error(n+"contains a string greater than "+Xn+" utf8 bytes "+ze(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(pe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!la(o)))throw new Error(n+" contains an invalid key ("+o+") "+ze(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);hh(s,o),Js(n,a,s),dh(s)}),i&&r)throw new Error(n+' contains ".value" child '+ze(s)+" in addition to actual children.")}},ha=function(n,e,t,s){if(!(s&&t===void 0)&&!ca(t))throw new Error(Os(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Nd=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ha(n,e,t,s)},da=function(n,e){if(x(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Dd=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!la(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Ad(t))throw new Error(Os(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function fa(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Do(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Me(n,e,t){fa(n,t),kd(n,s=>ye(s,e)||ye(e,s))}function kd(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(Od(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Od(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Xe&&te("event: "+t.toString()),wt(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="repo_interrupt",Md=25;class Pd{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Rd,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=mn(),this.transactionQueueTree_=new Xs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ld(n,e,t){if(n.stats_=Ls(n.repoInfo_),n.forceRestClient_||Mu())n.server_=new _n(n.repoInfo_,(s,i,r,o)=>{vr(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>br(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{J(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Oe(n.repoInfo_,e,(s,i,r,o)=>{vr(n,s,i,r,o)},s=>{br(n,s)},s=>{$d(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Uu(n.repoInfo_,()=>new Vh(n.stats_,n.server_)),n.infoData_=new Fh,n.infoSyncTree_=new gr({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=In(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ti(n,"connected",!1),n.serverSyncTree_=new gr({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Me(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function pa(n){const t=n.infoData_.getNode(new U(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function ei(n){return vd({timestamp:pa(n)})}function vr(n,e,t,s,i){n.dataUpdateCount++;const r=new U(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=cn(t,c=>Z(c));o=yd(n.serverSyncTree_,r,l,i)}else{const l=Z(t);o=gd(n.serverSyncTree_,r,l,i)}else if(s){const l=cn(t,c=>Z(c));o=md(n.serverSyncTree_,r,l)}else{const l=Z(t);o=In(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Nn(n,r)),Me(n.eventQueue_,a,o)}function br(n,e){ti(n,"connected",e),e===!1&&Ud(n)}function $d(n,e){pe(e,(t,s)=>{ti(n,t,s)})}function ti(n,e,t){const s=new U("/.info/"+e),i=Z(t);n.infoData_.updateSnapshot(s,i);const r=In(n.infoSyncTree_,s,i);Me(n.eventQueue_,s,r)}function _a(n){return n.nextWriteId_++}function Vd(n,e,t,s,i){ni(n,"set",{path:e.toString(),value:t,priority:s});const r=ei(n),o=Z(t,s),a=Gs(n.serverSyncTree_,e),l=ia(o,a,r),c=_a(n),d=Zo(n.serverSyncTree_,e,l,c,!0);fa(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(f,v)=>{const E=f==="ok";E||le("set at "+e+" failed: "+f);const I=Ye(n.serverSyncTree_,c,!E);Me(n.eventQueue_,e,I),Wd(n,i,f,v)});const h=ba(n,e);Nn(n,h),Me(n.eventQueue_,h,[])}function Ud(n){ni(n,"onDisconnectEvents");const e=ei(n),t=mn();fs(n.onDisconnect_,O(),(i,r)=>{const o=Cd(i,r,n.serverSyncTree_,e);Lo(t,i,o)});let s=[];fs(t,O(),(i,r)=>{s=s.concat(In(n.serverSyncTree_,i,r));const o=ba(n,i);Nn(n,o)}),n.onDisconnect_=mn(),Me(n.eventQueue_,O(),s)}function Bd(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Fd)}function ni(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),te(t,...e)}function Wd(n,e,t,s){e&&wt(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function ma(n,e,t){return Gs(n.serverSyncTree_,e,t)||R.EMPTY_NODE}function si(n,e=n.transactionQueueTree_){if(e||Dn(n,e),St(e)){const t=ya(n,e);y(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Hd(n,qt(e),t)}else oa(e)&&An(e,t=>{si(n,t)})}function Hd(n,e,t){const s=t.map(c=>c.currentWriteId),i=ma(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const d=t[c];y(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const h=fe(e,d.path);r=r.updateChild(h,d.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{ni(n,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const h=[];for(let f=0;f<t.length;f++)t[f].status=2,d=d.concat(Ye(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&h.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();Dn(n,Zs(n.transactionQueueTree_,e)),si(n,n.transactionQueueTree_),Me(n.eventQueue_,e,d);for(let f=0;f<h.length;f++)wt(h[f])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{le("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}Nn(n,e)}},o)}function Nn(n,e){const t=ga(n,e),s=qt(t),i=ya(n,t);return jd(n,i,s),s}function jd(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=fe(t,l.path);let d=!1,h;if(y(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,h=l.abortReason,i=i.concat(Ye(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Md)d=!0,h="maxretry",i=i.concat(Ye(n.serverSyncTree_,l.currentWriteId,!0));else{const f=ma(n,l.path,o);l.currentInputSnapshot=f;const v=e[a].update(f.val());if(v!==void 0){Js("transaction failed: Data returned ",v,l.path);let E=Z(v);typeof v=="object"&&v!=null&&Pe(v,".priority")||(E=E.updatePriority(f.getPriority()));const L=l.currentWriteId,Y=ei(n),S=ia(E,f,Y);l.currentOutputSnapshotRaw=E,l.currentOutputSnapshotResolved=S,l.currentWriteId=_a(n),o.splice(o.indexOf(L),1),i=i.concat(Zo(n.serverSyncTree_,l.path,S,l.currentWriteId,l.applyLocally)),i=i.concat(Ye(n.serverSyncTree_,L,!0))}else d=!0,h="nodata",i=i.concat(Ye(n.serverSyncTree_,l.currentWriteId,!0))}Me(n.eventQueue_,t,i),i=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Dn(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)wt(s[a]);si(n,n.transactionQueueTree_)}function ga(n,e){let t,s=n.transactionQueueTree_;for(t=x(e);t!==null&&St(s)===void 0;)s=Zs(s,t),e=V(e),t=x(e);return s}function ya(n,e){const t=[];return va(n,e,t),t.sort((s,i)=>s.order-i.order),t}function va(n,e,t){const s=St(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);An(e,i=>{va(n,i,t)})}function Dn(n,e){const t=St(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,ra(e,t.length>0?t:void 0)}An(e,s=>{Dn(n,s)})}function ba(n,e){const t=qt(ga(n,e)),s=Zs(n.transactionQueueTree_,e);return Sd(s,i=>{Zn(n,i)}),Zn(n,s),aa(s,i=>{Zn(n,i)}),t}function Zn(n,e){const t=St(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(y(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(y(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Ye(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ra(e,void 0):t.length=r+1,Me(n.eventQueue_,qt(e),i);for(let o=0;o<s.length;o++)wt(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function qd(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):le(`Invalid query segment '${t}' in query '${n}'`)}return e}const Er=function(n,e){const t=Gd(n),s=t.namespace;t.domain==="firebase.com"&&Fe(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Fe("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||xu();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new yo(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new U(t.pathString)}},Gd=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let d=n.indexOf("/");d===-1&&(d=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(d,h)),d<h&&(i=zd(n.substring(d,h)));const f=qd(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const v=e.slice(0,c);if(v.toLowerCase()==="localhost")t="localhost";else if(v.split(".").length<=2)t=v;else{const E=e.indexOf(".");s=e.substring(0,E).toLowerCase(),t=e.substring(E+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Kd=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Cr.charAt(t%64),t=Math.floor(t/64);y(t===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Cr.charAt(e[i]);return y(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return A(this._path)?null:xo(this._path)}get ref(){return new rt(this._repo,this._path)}get _queryIdentifier(){const e=or(this._queryParams),t=Ms(e);return t==="{}"?"default":t}get _queryObject(){return or(this._queryParams)}isEqual(e){if(e=Et(e),!(e instanceof ii))return!1;const t=this._repo===e._repo,s=Do(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ch(this._path)}}class rt extends ii{constructor(e,t){super(e,t,new Bs,!1)}get parent(){const e=No(this._path);return e===null?null:new rt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function ff(n,e){return n=Et(n),n._checkNotDeleted("ref"),e!==void 0?Es(n._root,e):n._root}function Es(n,e){return n=Et(n),x(n._path)===null?Nd("child","path",e,!1):ha("child","path",e,!1),new rt(n._repo,j(n._path,e))}function pf(n,e){n=Et(n),da("push",n._path),ua("push",e,n._path,!0);const t=pa(n._repo),s=Kd(t),i=Es(n,s),r=Es(n,s);let o;return e!=null?o=Yd(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Yd(n,e){n=Et(n),da("set",n._path),ua("set",e,n._path,!1);const t=new wn;return Vd(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}pd(rt);_d(rt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="FIREBASE_DATABASE_EMULATOR_HOST",Cs={};let Xd=!1;function Zd(n,e,t,s){n.repoInfo_=new yo(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function Jd(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Fe("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),te("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Er(r,i),a=o.repoInfo,l,c;typeof process<"u"&&Bi&&(c=Bi[Qd]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Er(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const d=i&&l?new _t(_t.OWNER):new Lu(n.name,n.options,e);Dd("Invalid Firebase Database URL",o),A(o.path)||Fe("Database URL must point to the root of a Firebase Database (not including a child path).");const h=tf(a,n,d,new Pu(n.name,t));return new nf(h,n)}function ef(n,e){const t=Cs[e];(!t||t[n.key]!==n)&&Fe(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Bd(n),delete t[n.key]}function tf(n,e,t,s){let i=Cs[e.name];i||(i={},Cs[e.name]=i);let r=i[n.toURLString()];return r&&Fe("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Pd(n,Xd,t,s),i[n.toURLString()]=r,r}class nf{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ld(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new rt(this._repo,O())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ef(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Fe("Cannot call "+e+" on a deleted database.")}}function _f(n=uu(),e){const t=ru(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Xl("database");s&&sf(t,...s)}return t}function sf(n,e,t,s={}){n=Et(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Fe("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Fe('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new _t(_t.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Zl(s.mockUserToken,n.app.options.projectId);r=new _t(o)}Zd(i,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(n){Cu(lu),hn(new Pt("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Jd(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),ft(Wi,Hi,n),ft(Wi,Hi,"esm2017")}Oe.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Oe.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};rf();export{uf as C,Rl as a,Bl as c,_f as g,cu as i,df as o,pf as p,ff as r,hf as u};
