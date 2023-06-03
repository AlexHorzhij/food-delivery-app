"use strict";(self.webpackChunkfood_delivery_app=self.webpackChunkfood_delivery_app||[]).push([[697],{5697:function(e,n,t){t.r(n),t.d(n,{default:function(){return $}});var a=t(3433),r=t(9439),i=t(6148),o=t(890),s=t(6151),l=t(493),u=t(4852),d=t(9434),c=t(5129),p=t(9982),v=t(3400),f=t(2791),x=t(9617),h=t(184);function m(e){var n=e.text,t=e.children,a=f.useState(null),i=(0,r.Z)(a,2),s=i[0],l=i[1],u=function(){l(null)},d=Boolean(s);return(0,h.jsxs)("div",{children:[(0,h.jsx)(o.Z,{"aria-owns":d?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:function(e){l(e.currentTarget)},onMouseLeave:u,children:t}),(0,h.jsx)(x.ZP,{id:"mouse-over-popover",sx:{pointerEvents:"none"},open:d,anchorEl:s,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:u,disableRestoreFocus:!0,children:(0,h.jsx)(o.Z,{sx:{p:1},children:n})})]})}var g=t(7247),Z=t(7621),j=t(2169),b=t(4554),y=t(9504),C=t(1229);function S(e){var n=e.data,t=(0,d.I0)();return(0,h.jsxs)(Z.Z,{sx:{display:"flex",p:2},children:[(0,h.jsx)(j.Z,{component:"img",sx:{width:300,height:200},image:n.url,alt:"food image"}),(0,h.jsxs)(b.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,h.jsx)(v.Z,{"aria-label":"delete",sx:{position:"absolute",top:10,right:18,opacity:.5},onClick:function(){return e=n.id,void t((0,p.Ww)(e));var e},children:(0,h.jsx)(m,{text:"delete",children:(0,h.jsx)(g.Z,{})})}),(0,h.jsxs)(y.Z,{sx:{flex:"1 0 auto"},children:[(0,h.jsx)(o.Z,{component:"div",variant:"h5",children:n.name}),(0,h.jsxs)(o.Z,{variant:"subtitle1",color:"text.secondary",component:"div",children:[n.price," UAH"]})]}),(0,h.jsx)(C.Z,{type:"number",style:{marginLeft:"16px"},onChange:function(e){t((0,p.fe)({id:n.id,count:e.target.value}))},defaultValue:1}),(0,h.jsx)(b.Z,{sx:{display:"flex",alignItems:"center",pl:1,pb:1}})]})]})}function I(){var e=(0,d.v9)(c.QN);return(0,h.jsx)(l.Z,{sx:{height:"100%",width:"570px",bgcolor:"background.paper",overflowY:"auto",border:1,borderColor:"rgba(0, 0, 0, 0.2)",borderRadius:3,padding:1},children:e.length>0?e.map((function(e){return(0,h.jsx)(u.ZP,{children:(0,h.jsx)(S,{data:e})},e.id)})):(0,h.jsx)(o.Z,{variant:"h4",sx:{textAlign:"center",mt:10},children:"You don`t have any orders now."})})}var w,A=t(168),T=t(225),k=(0,T.Z)(b.Z)(w||(w=(0,A.Z)(["\n  flex-grow: 1;\n  padding: 20px 50px;\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n  margin-right: 30px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n"]))),z=t(7993),R={width:"100%",height:"400px"},E={lat:40.74,lng:-74.18},N=["places"];var L,P,W,_=function(e){var n=e.selected,t=void 0===n?E:n;return(0,z.Db)({googleMapsApiKey:"AIzaSyAAqiA_zWIhiPjiS-NZSm9zBLtjq-Feei8",libraries:N}).isLoaded?(0,h.jsx)(z.b6,{mapContainerClassName:"map-container",mapContainerStyle:R,center:t,zoom:15,options:{disableDefaultUI:!0,zoomControl:!0},children:(0,h.jsx)(z.jC,{position:t,clickable:!0})}):(0,h.jsx)("div",{children:"Loading..."})},D=function(e){return{message:"Field can't be empty",result:!!e}},B=function(e){return{message:"Wrong email",result:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(e)}},M=t(1413),X=t(4165),F=t(5861),K=t(4363),O=t(4627);function Q(e){var n=e.addToInput,t=(0,f.useState)(!1),a=(0,r.Z)(t,2),i=a[0],o=a[1],s=(0,f.useState)(""),l=(0,r.Z)(s,2),u=l[0],d=l[1],c=(0,f.useRef)();c.name=e.label;var p=function(){return e.validationRules.every((function(n){var t=n(e.value),a=t.result,r=t.message;return o(!a),d(r),a}))};c.validate=p,(0,f.useEffect)((function(){n(null),n&&n(c)}),[]);var v=(0,O.ZP)(),x=v.ready,m=v.value,g=v.setValue,Z=v.suggestions,j=Z.status,y=Z.data,S=v.clearSuggestions,I=function(){var n=(0,F.Z)((0,X.Z)().mark((function n(t){var a,r,i,o;return(0,X.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=2;break}return n.abrupt("return");case 2:return g(t,!1),S(),n.next=6,(0,O.LM)({address:t});case 6:return a=n.sent,n.next=9,(0,O.WV)(a[0]);case 9:r=n.sent,i=r.lat,o=r.lng,e.setSelected({lat:i,lng:o});case 13:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),w=function(n){var t=n.target.value;e.onChange(t),g(e.value)};return(0,f.useEffect)((function(){e.onChange(m)}),[m]),(0,h.jsx)(b.Z,{children:(0,h.jsx)(K.Z,{onChange:function(e,n){return I(n)},id:e.id,freeSolo:!0,value:e.value,options:"OK"===j?y.map((function(e){return e.description})):[],renderInput:function(n){return(0,h.jsx)(C.Z,(0,M.Z)((0,M.Z)({},n),{},{ref:c,error:i,helperText:i&&u,id:e.id,label:e.label,variant:e.variant,value:e.value,onChange:w,disabled:!x,onBlur:p}))}})})}function V(e){var n=e.setName,t=e.setEmail,a=e.setPhone,o=e.setAddress,s=e.data,l=e.addToInput,u=(0,f.useState)(void 0),d=(0,r.Z)(u,2),c=d[0],p=d[1];return(0,h.jsxs)(k,{component:"form",children:[(0,h.jsx)(_,{selected:c,setSelected:p}),(0,h.jsx)(i.X,{error:!0,validationRules:[D],id:"name",label:"Name",variant:"outlined",value:s.name,onChange:n,addToInput:l}),(0,h.jsx)(i.X,{error:!0,validationRules:[D,B],id:"email",label:"Email",variant:"outlined",value:s.email,onChange:t,addToInput:l}),(0,h.jsx)(i.X,{error:!0,validationRules:[D],id:"phone",label:"Phone",variant:"outlined",value:s.phone,onChange:a,addToInput:l}),(0,h.jsx)(Q,{setSelected:p,error:!0,validationRules:[D],id:"address",label:"Address",variant:"outlined",value:s.address,onChange:o,addToInput:l})]})}var q=T.Z.div(L||(L=(0,A.Z)(["\n  display: flex;\n  height: 700px;\n  justify-content: space-between;\n  gap: 40px;\n  margin-bottom: 20px;\n"]))),U=T.Z.div(P||(P=(0,A.Z)(["\n  display: flex;\n  justify-content: flex-end;\n"]))),Y=(T.Z.div(W||(W=(0,A.Z)(["\n  overflow-y: auto;\n  padding: 10px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  border: 1px solid black;\n"]))),t(4261)),H=t(9921);function $(){var e=(0,f.useState)(""),n=(0,r.Z)(e,2),t=n[0],l=n[1],u=(0,f.useState)(""),p=(0,r.Z)(u,2),v=p[0],x=p[1],m=(0,f.useState)(""),g=(0,r.Z)(m,2),Z=g[0],j=g[1],b=(0,f.useState)(""),y=(0,r.Z)(b,2),C=y[0],S=y[1],w=(0,f.useState)([]),A=(0,r.Z)(w,2),T=A[0],k=A[1],z=(0,d.I0)(),R=(0,d.v9)(c.QN),E=(0,d.v9)(c.ij),N={id:(0,Y.Z)(),shopData:{shopName:null===E||void 0===E?void 0:E.name,shopId:null===E||void 0===E?void 0:E.id},orders:R,userData:{name:t,email:v,phone:Z,address:C}};return(0,h.jsx)(i.or,{children:(0,h.jsxs)(i.W2,{children:[(0,h.jsxs)(q,{children:[(0,h.jsx)(V,{setName:l,setEmail:x,setPhone:j,setAddress:S,data:{name:t,email:v,phone:Z,address:C},addToInput:function(e){e&&k((function(n){return-1!==(null===n||void 0===n?void 0:n.findIndex((function(n){return n.name===e.name})))?n:[].concat((0,a.Z)(n),[e])}))}}),(0,h.jsx)(I,{})]}),(0,h.jsxs)(U,{children:[(0,h.jsxs)(o.Z,{component:"p",variant:"h5",style:{marginRight:"30px"},children:["Total price: ",R.reduce((function(e,n){return e+n.price*n.count}),0)]}),(0,h.jsx)(s.Z,{type:"submit",sx:{fontSize:16},variant:R.length>0?"contained":"disabled",onClick:function(){T.reduce((function(e,n){return n.validate()}),!0)&&(z((0,H.m)(N)),l(""),x(""),j(""),S(""))},children:"Submit"})]})]})})}},5129:function(e,n,t){t.d(n,{QN:function(){return a},ij:function(){return i},pK:function(){return r}});var a=function(e){return e.shops.orders},r=function(e){return e.shops.shopsList},i=function(e){return e.shops.currentShop}},6148:function(e,n,t){t.d(n,{W2:function(){return o.W},X:function(){return p},or:function(){return i}});var a,r=t(168),i=t(225).Z.main(a||(a=(0,r.Z)(["\n  height: 100%;\n  padding-top: 20px;\n"]))),o=t(5800),s=t(1413),l=t(9439),u=t(1229),d=t(2791),c=t(184);function p(e){var n=e.addToInput,t=e.onChange,a=(0,d.useState)(!1),r=(0,l.Z)(a,2),i=r[0],o=r[1],p=(0,d.useState)(""),v=(0,l.Z)(p,2),f=v[0],x=v[1],h=(0,d.useRef)();h.name=e.label;var m=function(){return e.validationRules.every((function(n){var t=n(e.value),a=t.result,r=t.message;return o(!a),x(r),a}))};h.validate=m,(0,d.useEffect)((function(){n(null),n&&n(h)}),[]);return(0,c.jsx)(u.Z,(0,s.Z)((0,s.Z)({},e.params),{},{ref:h,error:i,helperText:i&&f,id:e.id,label:e.label,variant:e.variant,value:e.value,onChange:function(n){e.onChange(n.target.value),t(n.target.value)},onBlur:m}))}}}]);
//# sourceMappingURL=697.2d39e5a7.chunk.js.map