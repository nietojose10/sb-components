import{j as S}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const C=({label:f,size:g="normal",allCaps:x=!1,color:v,fontColor:h})=>S.jsx("span",{className:`${g} ${v} label`,style:{textTransform:x?"uppercase":"none",color:h},children:f});C.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:"'normal' | 'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"Label size",defaultValue:{value:"'normal'",computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"Capitalize all letters",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'text-primary' | 'text-secondary' | 'text-tertiary'",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-tertiary'"}]},description:"Label color"},fontColor:{required:!1,tsType:{name:"string"},description:"font color"}}};const L={title:"UI/labels/MyLabel",component:C,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"}}},e={args:{label:"Basic label"}},a={args:{label:"All Caps label",allCaps:!0}},r={args:{label:"Secondary label",color:"text-secondary"}},l={args:{label:"Custom Color label",fontColor:"#5517ac"}};var s,o,t;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Basic label'
  }
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var n,c,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'All Caps label',
    allCaps: true
  }
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Secondary label',
    color: 'text-secondary'
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,b,y;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Custom Color label',
    fontColor: '#5517ac'
  }
}`,...(y=(b=l.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const z=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,z as __namedExportsOrder,L as default};
