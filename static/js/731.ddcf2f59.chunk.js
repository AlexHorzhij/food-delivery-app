"use strict";(self.webpackChunkfood_delivery_app=self.webpackChunkfood_delivery_app||[]).push([[731],{6731:function(n,e,t){t.r(e),t.d(e,{default:function(){return Q}});var r=t(9439),i=t(9433),o=t(890),a=t(6151),s=t(493),l=t(4852),d=t(9434),u=t(5129),c=t(9982),p=t(3400),x=t(2791),h=t(9617),f=t(184);function v(n){var e=n.text,t=n.children,i=x.useState(null),a=(0,r.Z)(i,2),s=a[0],l=a[1],d=function(){l(null)},u=Boolean(s);return(0,f.jsxs)("div",{children:[(0,f.jsx)(o.Z,{"aria-owns":u?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:function(n){l(n.currentTarget)},onMouseLeave:d,children:t}),(0,f.jsx)(h.ZP,{id:"mouse-over-popover",sx:{pointerEvents:"none"},open:u,anchorEl:s,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:d,disableRestoreFocus:!0,children:(0,f.jsx)(o.Z,{sx:{p:1},children:e})})]})}var g=t(7247),m=t(7621),Z=t(2169),j=t(4554),b=t(9504),y=t(1962);function w(n){var e=n.data,t=(0,d.I0)();return(0,f.jsxs)(m.Z,{sx:{display:"flex",p:2},children:[(0,f.jsx)(Z.Z,{component:"img",sx:{width:300,height:200},image:e.url,alt:"food image"}),(0,f.jsxs)(j.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,f.jsx)(p.Z,{"aria-label":"delete",sx:{position:"absolute",top:10,right:18,opacity:.5},onClick:function(){return n=e.id,void t((0,c.Ww)(n));var n},children:(0,f.jsx)(v,{text:"delete",children:(0,f.jsx)(g.Z,{})})}),(0,f.jsxs)(b.Z,{sx:{flex:"1 0 auto"},children:[(0,f.jsx)(o.Z,{component:"div",variant:"h5",children:e.name}),(0,f.jsxs)(o.Z,{variant:"subtitle1",color:"text.secondary",component:"div",children:[e.price," UAH"]})]}),(0,f.jsx)(y.Z,{type:"number",style:{marginLeft:"16px"},onChange:function(n){t((0,c.fe)({id:e.id,count:n.target.value}))},defaultValue:1}),(0,f.jsx)(j.Z,{sx:{display:"flex",alignItems:"center",pl:1,pb:1}})]})]})}function C(){var n=(0,d.v9)(u.QN);return(0,f.jsx)(s.Z,{sx:{height:"100%",width:"570px",bgcolor:"background.paper",overflowY:"auto",border:1,borderColor:"rgba(0, 0, 0, 0.2)",borderRadius:3,padding:1},children:n.length>0?n.map((function(n){return(0,f.jsx)(l.ZP,{children:(0,f.jsx)(w,{data:n})},n.id)})):(0,f.jsx)(o.Z,{variant:"h4",sx:{textAlign:"center",mt:10},children:"You don`t have any orders now."})})}var k,S,N,E,A=t(168),P=t(225),D=(0,P.Z)(j.Z)(k||(k=(0,A.Z)(["\n  flex-grow: 1;\n  padding: 50px 50px;\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n  margin-right: 30px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n"])));function I(n){var e=n.setName,t=n.setEmail,r=n.setPhone,i=n.setAddress,o=n.data;return(0,f.jsxs)(D,{component:"form",children:[(0,f.jsx)(y.Z,{id:"name",label:"Name",variant:"outlined",value:o.name,onChange:function(n){return e(n.target.value)}}),(0,f.jsx)(y.Z,{id:"email",label:"Email",variant:"outlined",value:o.email,onChange:function(n){return t(n.target.value)}}),(0,f.jsx)(y.Z,{id:"phone",label:"Phone",variant:"outlined",value:o.phone,onChange:function(n){return r(n.target.value)}}),(0,f.jsx)(y.Z,{id:"address",label:"Address",variant:"outlined",value:o.address,onChange:function(n){return i(n.target.value)}})]})}var W=P.Z.div(S||(S=(0,A.Z)(["\n  display: flex;\n  height: 700px;\n  justify-content: space-between;\n  gap: 40px;\n  margin-bottom: 20px;\n"]))),_=P.Z.div(N||(N=(0,A.Z)(["\n  display: flex;\n  justify-content: flex-end;\n"]))),z=(P.Z.div(E||(E=(0,A.Z)(["\n  overflow-y: auto;\n  padding: 10px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  border: 1px solid black;\n"]))),t(4261)),L=t(5499);function Q(){var n=(0,x.useState)(""),e=(0,r.Z)(n,2),t=e[0],s=e[1],l=(0,x.useState)(""),c=(0,r.Z)(l,2),p=c[0],h=c[1],v=(0,x.useState)(""),g=(0,r.Z)(v,2),m=g[0],Z=g[1],j=(0,x.useState)(""),b=(0,r.Z)(j,2),y=b[0],w=b[1],k=(0,d.I0)(),S=(0,d.v9)(u.QN),N=(0,d.v9)(u.ij),E={id:(0,z.Z)(),shopData:{shopName:null===N||void 0===N?void 0:N.name,shopId:null===N||void 0===N?void 0:N.id},orders:S,userData:{name:t,email:p,phone:m,address:y}};return(0,f.jsx)(i.o,{children:(0,f.jsxs)(i.W,{children:[(0,f.jsxs)(W,{children:[(0,f.jsx)(I,{setName:s,setEmail:h,setPhone:Z,setAddress:w,data:E.userData}),(0,f.jsx)(C,{})]}),(0,f.jsxs)(_,{children:[(0,f.jsxs)(o.Z,{component:"p",variant:"h5",style:{marginRight:"30px"},children:["Total price: ",S.reduce((function(n,e){return n+e.price*e.count}),0)]}),(0,f.jsx)(a.Z,{sx:{fontSize:16},variant:S.length>0?"contained":"disabled",onClick:function(){k((0,L.m)(E)),s(""),h(""),Z(""),w("")},children:"Submit"})]})]})})}},5129:function(n,e,t){t.d(e,{QN:function(){return r},ij:function(){return o},pK:function(){return i}});var r=function(n){return n.shops.orders},i=function(n){return n.shops.shopsList},o=function(n){return n.shops.currentShop}},9433:function(n,e,t){t.d(e,{W:function(){return a.W},o:function(){return o}});var r,i=t(168),o=t(225).Z.main(r||(r=(0,i.Z)(["\n  height: 100%;\n  padding-top: 20px;\n"]))),a=t(5800)}}]);
//# sourceMappingURL=731.ddcf2f59.chunk.js.map