(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{47:function(e,c,n){},60:function(e,c,n){},61:function(e,c,n){"use strict";n.r(c);var t,s=n(1),a=n.n(s),r=n(33),l=n.n(r),i=(n(47),n(42)),j=n(6),u=n(16),h=n(5),o=n(18),b=n(19),m=n(25),d=n(24),O=n(20),x=n(15),p=n(63),g=n(21),f=n.n(g),_=n(34),N=n.n(_),y=n(3);function v(e){var c=e.launch,n=c.flight_number,t=c.mission_name,s=c.launch_date_local,a=c.launch_success;return Object(y.jsx)("div",{className:"card card-body mb-3",children:Object(y.jsxs)("div",{className:"row",children:[Object(y.jsxs)("div",{className:"col-md-9",children:[Object(y.jsxs)("h4",{children:["Mission: ",Object(y.jsx)("span",{className:f()({"text-success":a,"text-danger":!a}),children:t})]}),Object(y.jsxs)("p",{children:["Date: ",Object(y.jsx)(N.a,{format:"YYYY-MM-DD HH:mm",children:s})]})]}),Object(y.jsx)("div",{className:"col-md-3",children:Object(y.jsx)(u.b,{to:"/launch/".concat(n),className:"btn btn-secondary",href:"#",role:"button",children:"Launch Details"})})]})})}function k(){return Object(y.jsxs)("div",{className:"my-3",children:[Object(y.jsxs)("p",{children:[Object(y.jsx)("span",{className:"px-3 mr-2 bg-success"})," = Success"]}),Object(y.jsxs)("p",{children:[Object(y.jsx)("span",{className:"px-3 mr-2 bg-danger"})," = Fail"]})]})}var L,F=Object(x.a)(t||(t=Object(O.a)(["\n    query launchesQuery {\n        launches {\n            flight_number\n            mission_name\n            launch_date_local\n            launch_success\n        }\n    }\n"]))),D=function(e){Object(m.a)(n,e);var c=Object(d.a)(n);function n(){return Object(o.a)(this,n),c.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(y.jsxs)(s.Fragment,{children:[Object(y.jsx)("h1",{className:"display-4 my-3",children:"Launches"}),Object(y.jsx)(k,{}),Object(y.jsx)(p.a,{query:F,children:function(e){var c=e.loading,n=e.error,t=e.data;return c?Object(y.jsx)("h4",{children:"Loading..."}):n?console.log(n):(console.log(t),Object(y.jsx)(s.Fragment,{children:t.launches.map((function(e){return Object(y.jsx)(v,{launch:e},e.flight_number)}))}))}})]})}}]),n}(s.Component),Y=D,q=Object(x.a)(L||(L=Object(O.a)(["\nquery LaunchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n        flight_number\n        mission_name\n        launch_year\n        launch_success\n        launch_date_local,\n        rocket {\n            rocket_id\n            rocket_name\n            rocket_type\n        }\n    }\n}\n"]))),w=function(e){Object(m.a)(n,e);var c=Object(d.a)(n);function n(){return Object(o.a)(this,n),c.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props.match.params.flight_number;return e=parseInt(e),Object(y.jsx)(s.Fragment,{children:Object(y.jsx)(p.a,{query:q,variables:{flight_number:e},children:function(e){var c=e.loading,n=e.error,t=e.data;if(c)return Object(y.jsx)("h4",{children:"Loading..."});n&&console.log(n);var s=t.launch,a=s.mission_name,r=s.flight_number,l=s.launch_year,i=s.launch_success,j=s.rocket,h=j.rocket_id,o=j.rocket_name,b=j.rocket_type;return Object(y.jsxs)("div",{children:[Object(y.jsxs)("h1",{className:"display-4 my-3",children:[Object(y.jsx)("span",{className:"text-dark",children:"Mission"})," ",a]}),Object(y.jsx)("h4",{className:"mb-3",children:"Launch Details"}),Object(y.jsxs)("ul",{className:"list-group",children:[Object(y.jsxs)("li",{className:"list-group-item",children:["Flight Number: ",r]}),Object(y.jsxs)("li",{className:"list-group-item",children:["Launch Year: ",l]}),Object(y.jsxs)("li",{className:"list-group-item",children:["Launch Successful: ",Object(y.jsx)("span",{className:f()({"text-success":i,"text-danger":!i}),children:i?"Yes":"No"})]})]}),Object(y.jsx)("h4",{className:"my-3",children:"Rocket Details"}),Object(y.jsxs)("ul",{className:"list-group",children:[Object(y.jsxs)("li",{className:"list-group-item",children:["Rocket ID: ",h]}),Object(y.jsxs)("li",{className:"list-group-item",children:["Rocket Name: ",o]}),Object(y.jsxs)("li",{className:"list-group-item",children:["Rocket Type: ",b]})]}),Object(y.jsx)("hr",{}),Object(y.jsx)(u.b,{to:"/",className:"btn btn-secondary",children:"Back"})]})}})})}}]),n}(s.Component),C=w,I=(n(60),n.p+"static/media/logo.91169fa6.png"),M=new i.a({uri:"/graphql"});var S=function(){return Object(y.jsx)(j.a,{client:M,children:Object(y.jsxs)(u.a,{children:[Object(y.jsx)("div",{className:"App container",children:Object(y.jsx)("img",{src:I,alt:"SpaceX",style:{width:300,display:"block",margin:"auto"}})}),Object(y.jsx)(h.a,{exact:!0,path:"/",component:Y}),Object(y.jsx)(h.a,{exact:!0,path:"/launch/:flight_number",component:C})]})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(c){var n=c.getCLS,t=c.getFID,s=c.getFCP,a=c.getLCP,r=c.getTTFB;n(e),t(e),s(e),a(e),r(e)}))};l.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(S,{})}),document.getElementById("root")),R()}},[[61,1,2]]]);
//# sourceMappingURL=main.87f6af14.chunk.js.map