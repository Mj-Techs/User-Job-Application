(this["webpackJsonpuser-job-application"]=this["webpackJsonpuser-job-application"]||[]).push([[0],{158:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),i=c(22),s=c.n(i),r=(c(54),c(14)),l=c.n(r),o=c(7),j=c(10),b=c.n(j),d=c(23),h=c.n(d),u=c(161),p=c(159),O=c(48),x=c(162),m=function(e){var t=e.formSubmission,c=e.isSaved,i=e.toggleIsSaved,s=Object(a.useState)(""),r=Object(o.a)(s,2),l=r[0],j=r[1],b=Object(a.useState)(""),d=Object(o.a)(b,2),m=d[0],f=d[1],v=Object(a.useState)(""),g=Object(o.a)(v,2),S=g[0],k=g[1],y=Object(a.useState)(""),C=Object(o.a)(y,2),N=C[0],E=C[1],D=Object(a.useState)(""),A=Object(o.a)(D,2),L=A[0],T=A[1],F=Object(a.useState)(""),w=Object(o.a)(F,2),I=w[0],J=w[1],M=Object(a.useState)({}),R=Object(o.a)(M,2),U=R[0],_=R[1],V={};Object(a.useEffect)((function(){c&&(j(""),f(""),k(""),E(""),T(""),J(""),i())}),[i,c]);return Object(n.jsx)("div",{style:{backgroundColor:"white",fontFamily:"sans-serif",height:"500px",width:"900px"},children:Object(n.jsx)(u.a,{onSubmit:function(e){(e.preventDefault(),0===l.trim().length&&(V.name="name cannot be blank "),0===m.trim().length?V.email="email cannot be blank":h.a.isEmail(m)||(V.email="Invalid email formate"),0===S.trim().length?V.phoneNumber="phone Number cannot be blank":h.a.isAlpha(S,"en-US")?V.phoneNumber="Contact Number cannot contain character ":(S.length<10||S.length>13)&&(V.phoneNumber="Invalid Number"),0===L.trim().length&&(V.experience="Experience field cannot be blank"),0===I.trim().length&&(V.technicalSkill="Technical Skill field cannot be blank"),0===N.trim().length&&(V.selctedOption="Job field cannot be blank"),0===Object.keys(V).length)?(_({}),t({name:l,email:m,phone:S,jobTitle:N,experience:L,skills:I})):_(V)},children:Object(n.jsxs)(u.a.Group,{as:p.a,children:[Object(n.jsx)(u.a.Label,{column:!0,sm:"2",children:"Fullname"}),Object(n.jsxs)(O.a,{sm:"10",children:[Object(n.jsx)("input",{type:"text",value:l,onChange:function(e){j(e.target.value)},className:"form-control",id:"inputdefault"}),U.name&&Object(n.jsx)("span",{children:U.name})," ",Object(n.jsx)("hr",{})]}),Object(n.jsx)("br",{}),Object(n.jsx)(u.a.Label,{column:!0,sm:"2",children:"Email address"}),Object(n.jsxs)(O.a,{sm:"10",children:[Object(n.jsx)("input",{type:"text",placeholder:"example@gmail.com",value:m,onChange:function(e){f(e.target.value)},className:"form-control",id:"inputdefault"}),U.email&&Object(n.jsx)("span",{children:U.email}),Object(n.jsx)("hr",{})]}),Object(n.jsx)("br",{}),Object(n.jsx)(u.a.Label,{column:!0,sm:"2",children:"Contact Number"}),Object(n.jsxs)(O.a,{sm:"10",children:[Object(n.jsx)("input",{type:"text",placeholder:"+91 9988554344",value:S,onChange:function(e){k(e.target.value)},className:"form-control",id:"inputdefault"}),U.phoneNumber&&Object(n.jsx)("span",{children:U.phoneNumber}),Object(n.jsx)("hr",{})]}),Object(n.jsx)("br",{}),Object(n.jsx)(u.a.Label,{column:!0,sm:"2",children:"Applying for job"}),Object(n.jsxs)(O.a,{sm:"10",children:[Object(n.jsxs)("select",{value:N,onChange:function(e){E(e.target.value)},className:"form-control",id:"inputdefault",children:[Object(n.jsx)("option",{value:"",children:"----Select----"}),["Front-End Developer","Node.js Developer","MEAN Stack Developer","FULL Stack Developer"].map((function(e,t){return Object(n.jsx)("option",{value:e,children:e},t)}))]}),U.selctedOption&&Object(n.jsx)("span",{children:U.selctedOption}),Object(n.jsx)("hr",{})]}),Object(n.jsx)("br",{}),Object(n.jsx)(u.a.Label,{column:!0,sm:"2",children:"Experience"}),Object(n.jsxs)(O.a,{sm:"10",children:[Object(n.jsx)("input",{type:"text",placeholder:"Experience(2 years 3 months)",value:L,onChange:function(e){T(e.target.value)},className:"form-control",id:"inputdefault"}),U.experience&&Object(n.jsx)("span",{children:U.experience}),Object(n.jsx)("hr",{})]}),Object(n.jsx)("br",{}),Object(n.jsx)(u.a.Label,{column:!0,sm:"2",children:"Technical Skills"}),Object(n.jsxs)(O.a,{sm:"10",children:[Object(n.jsx)(u.a.Control,{as:"textarea",rows:2,placeholder:"Technical Skills",value:I,onChange:function(e){J(e.target.value)}}),U.technicalSkill&&Object(n.jsx)("span",{children:U.technicalSkill}),Object(n.jsx)("hr",{})]}),Object(n.jsx)("br",{}),Object(n.jsx)(O.a,{sm:"10",children:Object(n.jsx)(x.a,{type:"submit",children:"Send Application"})})]})})})},f=function(e){var t=Object(a.useState)(!1),c=Object(o.a)(t,2),i=c[0],s=c[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Apply for Job"}),Object(n.jsx)(m,{formSubmission:function(e){b.a.post("http://dct-application-form.herokuapp.com/users/application-form",e).then((function(e){var t=e.data;console.log(t),s(!0)})).catch((function(e){alert(e.message)}))},isSaved:i,toggleIsSaved:function(){s(!1)}})]})},v=c(160),g={overlay:{backgroundColor:"rgba(0,0,0,0.7)"},content:{top:"40%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",minHeight:"40%",minWidth:"40%"}},S={position:"absolute",right:"0",bottom:"0",color:"grey",backgroundColor:"light"},k={position:"absolute",right:"0",top:"0",color:"grey",border:"none",outline:"none"},y=function(e){var t=e.id,c=e.modalIsOpen,i=e.ToggleModal,s=Object(a.useState)({}),r=Object(o.a)(s,2),j=r[0],d=r[1];return Object(a.useEffect)((function(){t&&b.a.get("http://dct-application-form.herokuapp.com/users/application-form/".concat(t)).then((function(e){var t=e.data;d(t)})).catch((function(e){alert(e.message)}))}),[t]),Object(n.jsx)("div",{children:Object(n.jsxs)(l.a,{isOpen:c,onRequestClose:i,style:g,children:[Object(n.jsxs)("h2",{children:[j.name," Profile"]}),Object(n.jsx)("hr",{}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("h5",{children:["Contact number - ",j.phone]}),Object(n.jsxs)("h5",{children:["Email - ",j.email]}),Object(n.jsxs)("h5",{children:["Skills - ",j.skills]}),Object(n.jsxs)("h5",{children:["Experience - ",j.experience]}),Object(n.jsx)("hr",{})]}),Object(n.jsx)("button",{onClick:i,style:k,children:"X"}),Object(n.jsx)("button",{onClick:i,style:S,children:"Close"})]})})},C=function(e){var t=e.developer,c=e.Jobheader,i=Object(a.useState)(""),s=Object(o.a)(i,2),r=s[0],l=s[1],j=Object(a.useState)(!1),d=Object(o.a)(j,2),h=d[0],u=d[1];return Object(n.jsxs)("div",{style:{fontFamily:"sans-serif"},children:[Object(n.jsx)("br",{}),Object(n.jsxs)("h1",{children:[c,"s"]}),Object(n.jsxs)("p",{children:["List of candidates applied for ",c," job"]}),Object(n.jsxs)(v.a,{className:"table  table-striped",responsive:"xl",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Technical Skills"}),Object(n.jsx)("th",{children:"Experience"}),Object(n.jsx)("th",{children:"Applied Date"}),Object(n.jsx)("th",{children:"View Details"}),Object(n.jsx)("th",{children:"Update Application Status"})]})}),Object(n.jsx)("tbody",{children:t.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.name}),Object(n.jsx)("td",{children:e.skills}),Object(n.jsx)("td",{children:e.experience}),Object(n.jsx)("td",{children:e.createdAt.slice(0,e.createdAt.indexOf("T")).split("-").join("/")}),Object(n.jsx)("td",{children:Object(n.jsx)(x.a,{variant:"info",size:"sm",onClick:function(){!function(e){l(e),u(!0)}(e._id)},children:"View Details"})}),Object(n.jsx)("td",{children:"applied"===e.status?Object(n.jsxs)("div",{children:[Object(n.jsx)(x.a,{variant:"success",onClick:function(){!function(e){b.a.put("http://dct-application-form.herokuapp.com/users/application-form/update/".concat(e),{status:"shortlisted"}).catch((function(e){alert(e.message)}))}(e._id)},children:"Shortlist"}),Object(n.jsx)(x.a,{variant:"danger",onClick:function(){!function(e){b.a.put("http://dct-application-form.herokuapp.com/users/application-form/update/".concat(e),{status:"rejected"}).catch((function(e){alert(e.message)}))}(e._id)},children:"Reject"})]}):"shortlisted"===e.status?Object(n.jsx)(x.a,{variant:"success",children:"Shortlisted"}):"rejected"===e.status&&Object(n.jsx)(x.a,{variant:"danger",children:"Rejected"})})]},e._id)}))})]}),r&&Object(n.jsx)(y,{id:r,modalIsOpen:h,ToggleModal:function(){u(!h)}})]})},N=function(e){var t=["Front-End Developer","Node.js Developer","MEAN Stack Developer","FULL Stack Developer"],c=e.data,i=Object(a.useState)([]),s=Object(o.a)(i,2),r=s[0],l=s[1],j=Object(a.useState)(t[0]),b=Object(o.a)(j,2),d=b[0],h=b[1];Object(a.useEffect)((function(){var e=c.filter((function(e){return"Front-End Developer"===e.jobTitle}));l(e)}),[c]);return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Admin Dashboard"}),t.map((function(e,a){return Object(n.jsx)(x.a,{onClick:function(){return function(e){h(t[e]);var n=c.filter((function(c){return c.jobTitle===t[e]}));l(n)}(a)},variant:"outline-primary",children:e},a)})),r&&Object(n.jsx)(C,{developer:r,Jobheader:d})]})},E=function(e){var t=Object(a.useState)([]),c=Object(o.a)(t,2),i=c[0],s=c[1];return Object(a.useEffect)((function(){b.a.get("http://dct-application-form.herokuapp.com/users/application-forms").then((function(e){var t=e.data;s(t)})).catch((function(e){alert(e.message)}))}),[]),Object(n.jsxs)("div",{style:{paddingLeft:"12rem"},children:[Object(n.jsx)(f,{})," ",Object(n.jsx)("br",{}),Object(n.jsx)(N,{data:i})]})};l.a.setAppElement("#root");var D=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(E,{})})};s.a.render(Object(n.jsx)(D,{}),document.getElementById("root"))}},[[158,1,2]]]);
//# sourceMappingURL=main.d52868d5.chunk.js.map