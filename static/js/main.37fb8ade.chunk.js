(this.webpackJsonpreferralapp=this.webpackJsonpreferralapp||[]).push([[0],{32:function(e,a,t){},40:function(e,a,t){e.exports=t(75)},54:function(e,a,t){},55:function(e,a,t){e.exports=t.p+"static/media/assembled.ecf2609b.png"},56:function(e,a,t){e.exports=t.p+"static/media/assembled-small.c951a50c.png"},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){e.exports=t.p+"static/media/instagram.7cea17bc.ico"},64:function(e,a,t){e.exports=t.p+"static/media/facebook.4022e4f6.ico"},65:function(e,a,t){e.exports=t.p+"static/media/twitter.7b1ddd91.svg"},66:function(e,a,t){},67:function(e,a,t){},70:function(e,a,t){e.exports=t.p+"static/media/environmentally-friendly.b4261a06.png"},71:function(e,a,t){e.exports=t.p+"static/media/amazon-fakes.3958eb6f.png"},73:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(14),c=t.n(l),s=t(8),o=t(7),i=t(16),u=n.a.createContext(null),m=function(e){return function(a){return n.a.createElement(u.Consumer,null,(function(t){return n.a.createElement(e,Object.assign({},a,{firebase:t}))}))}},d=u,f=t(33),p=t(25),h=t.n(p),b=(t(48),t(50),{apiKey:"AIzaSyDY3Mu4foJhoilBPwAsIBC3lQxCRaYr63k",authDomain:"referralapp-9c02a.firebaseapp.com",databaseURL:"https://referralapp-9c02a.firebaseio.com",projectId:"referralapp-9c02a",storageBucket:"referralapp-9c02a.appspot.com",messagingSenderId:"120981071250",appId:"1:120981071250:web:0f0cc797c9d2c8fe070d4b",measurementId:"G-2EH3FEJGEZ"}),E=function e(){var a=this;Object(f.a)(this,e),this.user=function(e){return a.db.ref("users/".concat(e))},this.users=function(){return a.db.ref("users")},this.reward=function(e){return a.db.ref("rewards/".concat(e))},this.rewards=function(){return a.db.ref("rewards")},h.a.initializeApp(b),this.db=h.a.database()},v=t(15),g=(t(54),function(e){var a=Object(r.useState)(!1),l=Object(s.a)(a,2),c=l[0],u=l[1];return Object(r.useEffect)((function(){!0===c&&u(!1)}),[c]),n.a.createElement("div",{className:"Header"},n.a.createElement("h1",{className:"Title"},n.a.createElement("img",{alt:"reshoe logo",className:"Logo",src:t(55)})),n.a.createElement("h1",{className:"SmallTitle"},n.a.createElement("img",{alt:"reshoe logo",className:"Logo",src:t(56)})),n.a.createElement(i.b,{className:"HeaderLink",to:"/about"},"About Us"),n.a.createElement(i.b,{className:"HeaderLink",to:"/faq"},"FAQ"),e.signedIn?n.a.createElement(i.b,{className:"HeaderLink",to:"/dashboard"},"Dashboard"):"",e.signedIn?n.a.createElement(v.a,{style:{backgroundColor:"#FFE521"},variant:"warning",onClick:function(){u(!0),e.handleSignOut()}},"Sign Out"):n.a.createElement(v.a,{style:{backgroundColor:"#FFE521"},variant:"warning",onClick:function(){u(!0)}},"Sign In"),c?n.a.createElement(o.a,{to:"/"}):"")}),w=t(20),y=t(39),O=(t(61),function(e){var a=e.numReferrals,t=e.nextAchievement,r=a/t*100,l="info",c="";return r>=80?(l="success",c="Almost there! "):r<=20&&(l="danger"),n.a.createElement("div",null,n.a.createElement("div",{className:"labels"},n.a.createElement("p",{className:"left-label"},"0"),n.a.createElement("p",{className:"center-label"},c),n.a.createElement("p",{className:"right-label"},t)),n.a.createElement(y.a,{style:{height:"30px",width:"250px"},variant:l,now:r,srOnly:!0,label:a}))}),j=function(e){var a=e.code;return n.a.createElement("div",{className:"ReferralDisplay"},n.a.createElement("h1",{className:"Code"},a),n.a.createElement(v.a,{style:{backgroundColor:"#FFE521"},variant:"warning",onClick:function(){navigator.clipboard.writeText(a)}},"Copy Code"))},S=t(38),k=function(e){var a=e.rewards,t=e.userRewards,r=Object.keys(a),l=-1,c=Object.values(a).map((function(e){l++;var a,c=(a=r[l],t.includes(a)?"#18B84E":"#E85A55");return n.a.createElement(S.a,{style:{backgroundColor:c,margin:"8px 0 8px 0"},className:"Card"},n.a.createElement("div",null,"You can get ",e.name),n.a.createElement("div",null,"Complete ",e.numRequired," referrals to receive this reward!"),"#18B84E"===c&&n.a.createElement("div",null,"Reward Received!"))}));return n.a.createElement("div",{className:"Rewards"},n.a.createElement("h2",{className:"PossibleRewards"},"Possible Rewards"),n.a.createElement("div",{className:"rewardList"},c," "))},R=(t(62),function(e){var a=e.handleSocialShare;return n.a.createElement("div",null,n.a.createElement("div",{className:"share-label"},"Click to Share Your Referral!"),n.a.createElement("div",{className:"platform-grid"},n.a.createElement("a",{onClick:a,className:"instagram",target:"_blank",rel:"noopener noreferrer",href:"https://instagram.com"},n.a.createElement("img",{src:t(63),alt:"instagram.com"})),n.a.createElement("a",{onClick:a,className:"facebook",target:"_blank",rel:"noopener noreferrer",href:"https://facebook.com"},n.a.createElement("img",{src:t(64),alt:"facebook.com"})),n.a.createElement("a",{onClick:a,className:"twitter",target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com"},n.a.createElement("img",{src:t(65),alt:"twitter.com"}))))}),N=function(e){var a=e.rewards,t=e.nextAchievement,r=e.numReferrals;if(t){var l=t-r,c="referrals";return 1===l&&(c="referral"),n.a.createElement("div",null,"Just ",l," more ",c," until you get ",function(e,a){var t={name:"You have all the possible rewards"};return e.map((function(e){e.numRequired===a&&(t=e)})),t}(a,t).name)}return n.a.createElement("div",null)},C=(t(66),m((function(e){var a=Object(r.useState)(24),t=Object(s.a)(a,2),l=t[0],c=t[1],o=Object(r.useState)(10),i=Object(s.a)(o,2),u=i[0],m=i[1],d=Object(r.useState)("CODE"),f=Object(s.a)(d,2),p=f[0],h=f[1],b=Object(r.useState)([]),E=Object(s.a)(b,2),v=E[0],g=E[1],y=Object(r.useState)({}),S=Object(s.a)(y,2),C=S[0],x=S[1],I=Object(r.useState)([]),A=Object(s.a)(I,2),H=A[0],q=A[1],F=Object(r.useState)(!1),L=Object(s.a)(F,2),W=L[0],D=L[1];Object(r.useEffect)((function(){var a=e.user;if(e.firebase.rewards().once("value").then((function(e){g(Object.values(e.val()).sort((function(e,a){return e.numRequired<a.numRequired?-1:e.numRequired>a.numRequired?1:0})))})),a){c(a.numReferrals),h(a.referralCode);var t=a.rewards.filter((function(e){return"dummy"!==e}));q(t),D(a.hasShared)}}),[e.user]),Object(r.useEffect)((function(){m(Y())}),[e.user,v]),Object(r.useEffect)((function(){var a=e.user,t=e.firebase;a&&t.rewards().once("value").then((function(e){var r=e.val();x(r);for(var n=Object.values(r),c=Object.keys(r),s=0;s<n.length;s++)if(l===n[s].numRequired&&!a.rewards.includes(c[s])){t.user(a.id).update({rewards:[].concat(Object(w.a)(a.rewards),[c[s]])});break}}))}),[e.user,l]);var Y=function(){var e=0;if(v.length>0)return v.map((function(a){return l>=a.numRequired&&e++,a})),v[e].numRequired};return n.a.createElement("div",{className:"Dashboard"},n.a.createElement(k,{classname:"Rewards",rewards:C,userRewards:H}),n.a.createElement("div",{className:"displayMainPanel"},n.a.createElement(j,{className:"ReferralDisplay",code:p}),n.a.createElement(R,{handleSocialShare:function(){if(!W){var a=e.firebase,t=e.user;a.user(t.id).update({numReferrals:t.numReferrals+1,hasShared:!0})}},referralCode:p,hasShared:W}),n.a.createElement("div",{className:"displayProgress"},n.a.createElement(O,{numReferrals:l,nextAchievement:u}),n.a.createElement(N,{numReferrals:l,nextAchievement:u,rewards:v}))))}))),x=t(37),I=t(36),A=t(12),H=(t(67),function(e){var a=Object(r.useRef)(null);return n.a.createElement("div",{className:"form-page"},n.a.createElement(A.a,{className:"form",onSubmit:function(a){return e.handleSubmit(a)}},n.a.createElement(A.a.Group,{controlId:"formEmail"},n.a.createElement(A.a.Label,null,"Enter your email address!"),n.a.createElement(A.a.Control,{type:"email",placeholder:"Enter email",defaultValue:e.email,className:"email-form"})),n.a.createElement(A.a.Group,{controlId:"formReferral"},n.a.createElement(A.a.Label,null,"Enter a referral code if applicable"),n.a.createElement(A.a.Control,{type:"text",placeholder:"Enter Referral Code",ref:a}),n.a.createElement(x.a,{target:a.current,show:e.show,placement:"top"},(function(e){return n.a.createElement(I.a,Object.assign({id:"overlay-error"},e),"Please put in a correct referral code")}))),n.a.createElement(v.a,{variant:"secondary",type:"submit"},"Submit!")))}),q=function(e){return n.a.createElement("div",{className:"form-page"},n.a.createElement(A.a,{className:"form",onSubmit:function(a){return e.handleSubmit(a)}},n.a.createElement(A.a.Group,{controlId:"formEmail"},n.a.createElement(A.a.Label,null,"Enter your email address!"),n.a.createElement(A.a.Control,{className:"email-form",type:"email",placeholder:"Enter email"})),n.a.createElement(v.a,{variant:"secondary",type:"submit"},"Submit!")))},F=m((function(e){var a=Object(r.useState)(""),t=Object(s.a)(a,2),l=t[0],c=t[1],i=Object(r.useState)(!1),u=Object(s.a)(i,2),m=u[0],d=u[1],f=Object(r.useState)(!1),p=Object(s.a)(f,2),h=p[0],b=p[1],E=function(a){var t=e.firebase;a.preventDefault();var r=a.target.elements.formEmail.value;if(c(r),m){var n=a.target.elements.formReferral.value;g(r,n)}else t.user(1).once("value").then((function(e){var a=e.val().filter((function(e){return e.email===r}));a[0]?v(a[0].id):d(!0)}))},v=function(a){e.setUser(a)},g=function(a,t){var r=e.firebase;""!==t?r.user(1).once("value").then((function(e){var n=e.val().filter((function(e){return e.id.substring(3)===t}));if(n[0]){var l=n[0].id;r.user(l).once("value").then((function(e){var a=e.val();r.user(l).update({numReferrals:a.numReferrals+1})})),b(!1),y(a,!1)}else b(!0)})):(b(!1),y(a,!1))},y=function(a,t){var r=e.firebase;if(!t){var n=r.users().push({email:a}).key,l={email:a,id:n,referralCode:n.substring(3),numReferrals:0,hasShared:!1,rewards:{0:"dummy"}};r.user(n).set(l),r.user(1).once("value").then((function(e){var t=e.val(),l=[];for(var c in t)l.push(t[c]);l=[].concat(Object(w.a)(l),[{email:a,id:n}]),r.user(1).update(l)})),e.setUser(n)}};return n.a.createElement("div",null,e.signedIn?n.a.createElement(o.a,{to:"/dashboard"}):m?n.a.createElement(H,{show:h,email:l,handleSubmit:function(e){return E(e)}}):n.a.createElement(q,{handleSubmit:function(e){return E(e)}}))})),L=(t(32),function(){return n.a.createElement("div",{className:"page"},n.a.createElement("img",{alt:"environmentally friendly",className:"environment-img",src:t(70)}),n.a.createElement("h2",null,"Who is ReSHOE?"),n.a.createElement("h5",null,"We give people superpowers."),n.a.createElement("p",null,'Have you ever thought that it was possible to clean the earth as you walked? To help children in need with each step? To buy a new pair of shoes and tell people, "I take part in saving the planet. My shoes save the planet."'),n.a.createElement("h2",null,"Why ReSHOE?"),n.a.createElement("h5",null,"The environment is larger than our wallets."),n.a.createElement("p",null,"Here at ReSHOE, we care more about our values than our profits. We are willing to take a hit to our profits if it means our policies can further benefit the environment while satisfying our customers."),n.a.createElement("img",{alt:"shoes",className:"shoes",src:t(71),align:"left"}),n.a.createElement("h2",null,"What are the benefits of ReSHOE?"),n.a.createElement("h5",null,"We seek to provide the most comfortable, fitting, and flexible shoes to our consumers while improving the world, one shoe at a time. "),n.a.createElement("p",null,"For every pair of shoes purchased, ReSHOE will donate a pair to children without sneakers. Not only do you buy YOURSELF a brand new pair of shoes, a child in need will be overzeleous when a brand, shiny new pair is delivered to them as well. "),n.a.createElement("p",null,"Every shoe is made of sustainable material. We do not hurt the environment in the production or development of our products."),n.a.createElement("p",null,"If you are satisfied with your product but it needs to be repaired, you can send it right back and we will repair them for you, free of charge. Consumer satisfaction is a top priority."),n.a.createElement("p",null,"When your shoes are worn out, they can be sent back to the company for 10% credit towards buying a new pair. You can happily browse for a new comfortable and sleek look for your feet knowing, rest assured, that your old pair will not end up in a landfill. All shoes sent back to us are recycled and reused, keeping with ReSHOE's values."))}),W=function(){return n.a.createElement("div",{className:"page"},n.a.createElement("h1",null,"FAQ"),n.a.createElement("h4",null,"Q: How do I get points?"),n.a.createElement("p",null,"A: One referral gets you one point, and sharing on social media also gets you one point."),n.a.createElement("h4",null,"Q: What counts as a referral?"),n.a.createElement("p",null,"A: When someone makes an account using your referral code."),n.a.createElement("h4",null,"Q: I shared on social media, why didn't I get a point?"),n.a.createElement("p",null,"A: You can only get a point from sharing from social media once, so once you've already shared you can't get anymore points."))},D=(t(72),t(73),m((function(e){var a=e.firebase,t=Object(r.useState)("3"),l=Object(s.a)(t,2),c=l[0],u=l[1],m=Object(r.useState)(!1),d=Object(s.a)(m,2),f=d[0],p=d[1],h=Object(r.useState)(null),b=Object(s.a)(h,2),E=b[0],v=b[1];Object(r.useEffect)((function(){if("3"!==c){a.users().on("child_changed",(function(e){c===e.val().id&&v(e.val())}));a.user(c).once("value").then((function(e){var a=e.val();v(a),p(!0)}))}}),[c]);var w=function(e){u(e),p(!0)};return n.a.createElement(i.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(g,{signedIn:f,handleSignOut:function(){return u("3"),p(!1),v(null),n.a.createElement(o.a,{to:"/"})}}),n.a.createElement(o.d,null,n.a.createElement(o.b,{path:"/about",component:L,exact:!0}),n.a.createElement(o.b,{path:"/faq",component:W,exact:!0}),f?n.a.createElement(o.b,{path:"/dashboard",exact:!0},n.a.createElement(C,{user:E})):n.a.createElement(o.b,{path:"/"}," ",n.a.createElement(F,{setUser:function(e){return w(e)},signedIn:f})," "),f?n.a.createElement(o.a,{to:"/dashboard"}):n.a.createElement(o.b,{path:"/",exact:!0},n.a.createElement(F,{setUser:function(e){return w(e)},signedIn:f})))))})));t(74);c.a.render(n.a.createElement(d.Provider,{value:new E},n.a.createElement(D,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.37fb8ade.chunk.js.map