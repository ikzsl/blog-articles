(this["webpackJsonpblog-articles"]=this["webpackJsonpblog-articles"]||[]).push([[0],{296:function(e,t,a){e.exports=a(539)},320:function(e,t,a){},326:function(e,t,a){},347:function(e,t,a){},427:function(e,t,a){},538:function(e,t,a){},539:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),i=a(25),o=a(259),u=a(78),s=a(260),m=a(261),d=a(67),f=a(545),p=a(30),E=a.n(p),b=a(59),v=a(68),g=a.n(v),h=a(547);g.a.defaults.baseURL="https://conduit.productionready.io/api/";var O,j,x=function(){return"users"},w=function(){return"users/login"},N=function(){return"user"},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return"articles?limit=".concat(e,"&offset=").concat(t)},y=function(e){return"articles/".concat(e,"/favorite")},I=function(){return"articles"},C=Object(h.a)("CHANGE_FETCH_STATUS"),S=Object(h.a)("CHANGE_LOADING_STATUS"),z=Object(h.a)("LOGIN_USER"),A=Object(h.a)("LOGOUT_USER"),q=Object(h.a)("LOAD_ARTICLES_LIST"),T=(Object(h.a)("LOAD_CURRENT_ARTICLE"),Object(h.a)("FAVORITE_ARTICLE")),L=Object(h.a)("SET_CURRENT_PAGE"),F=function(){var e=Object(b.a)(E.a.mark((function e(t,a,n){var r,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post(n,{user:t});case 2:r=e.sent,c=r.data,localStorage.setItem("token",c.user.token),a(C(null)),a(z(c.user));case 7:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),U=function(e,t){return function(){var a=Object(b.a)(E.a.mark((function a(n){var r,c,l;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(S(!0)),a.prev=1,r=I(),a.next=5,g.a.post(r,{article:e});case 5:n(S(!1)),a.next=17;break;case 8:a.prev=8,a.t0=a.catch(1),c=a.t0.response,l=c.data.errors,n(C(l)),n(S(!1)),t("title",l.title),t("description",l.description),t("body",l.body);case 17:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}()},R=function(e,t){return function(){var a=Object(b.a)(E.a.mark((function a(n){var r;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(S(!0)),a.prev=1,r=y(e,t),a.next=5,t?g.a.delete(r):g.a.post(r);case 5:n(T({slug:e,favorited:t})),n(S(!1)),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),n(S(!1));case 12:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e){return a.apply(this,arguments)}}()},_=function(e,t){return function(){var a=Object(b.a)(E.a.mark((function a(n){var r,c,l;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(S(!0)),a.prev=1,r=k(e,t),a.next=5,g.a.get(r);case 5:c=a.sent,l=c.data,n(q(l)),n(S(!1)),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(1),n(S(!1));case 14:case"end":return a.stop()}}),a,null,[[1,11]])})));return function(e){return a.apply(this,arguments)}}()},D=function(e,t){return function(){var a=Object(b.a)(E.a.mark((function a(n){var r,c;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(S(!0)),a.prev=1,a.next=4,F(e,n,w());case 4:n(S(!1)),a.next=14;break;case 7:a.prev=7,a.t0=a.catch(1),r=a.t0.response,c=r.data.errors,n(C(c)),n(S(!1)),t("password","email or password ".concat(c["email or password"]));case 14:case"end":return a.stop()}}),a,null,[[1,7]])})));return function(e){return a.apply(this,arguments)}}()},B=Object(f.a)((O={},Object(d.a)(O,A,(function(){})),Object(d.a)(O,z,(function(e,t){return t.payload})),O),{}),G=Object(f.a)(Object(d.a)({},C,(function(e,t){return t.payload})),{}),P=Object(f.a)(Object(d.a)({},S,(function(e,t){return t.payload})),!1),V=Object(f.a)((j={},Object(d.a)(j,q,(function(e,t){return t.payload})),Object(d.a)(j,T,(function(e,t){var a=t.payload,n=e.articles.find((function(e){return e.slug===a.slug}));return n.favorited=!a.favorited,n.favoritesCount=a.favorited?n.favoritesCount-1:n.favoritesCount+1,Object(m.a)({},e)})),j),{}),H=Object(f.a)(Object(d.a)({},L,(function(e,t){return t.payload})),1),W=Object(u.combineReducers)({currentUser:B,errors:G,loading:P,articlesData:V,currentPage:H}),J=(a(223),a(320),a(35)),Z=a(28),K=a(262),M=a.n(K),Y=a(62),$=a(549),Q=(a(326),function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.currentUser})),a=!!t.id,n=r.a.createElement("nav",null,r.a.createElement("ul",{className:"nav"},r.a.createElement("li",null,r.a.createElement(J.c,{to:"/login",className:"link"},"Sign In")),r.a.createElement("li",null,r.a.createElement(J.c,{to:"/signup",className:"link"},"Sign Up")))),c=r.a.createElement("nav",null,r.a.createElement("ul",{className:"nav"},r.a.createElement("li",null,r.a.createElement(J.c,{to:"/add",size:"large"},"Create Article")),r.a.createElement("li",{className:"link"},t.username),r.a.createElement("li",{className:"link"},r.a.createElement(Y.a,{disabled:!1,size:"large",icon:r.a.createElement($.a,null),onClick:function(t){t.preventDefault(),localStorage.removeItem("token"),e(A())}},"\u0412\u044b\u0439\u0442\u0438"))));return r.a.createElement("header",{className:"header"},r.a.createElement(J.c,{to:"/",className:"headline"},"\u0413\u043e\u043f-\u0431\u043b\u043e\u0433"),a?c:n)}),X=a(27),ee=a(42),te=a(544),ae=a(546),ne=a(541),re=a(550),ce=a(551),le=a(552),ie=(a(347),ee.b().shape({username:ee.c().max(50,"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u043e - \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 50 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u0418\u043c\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),password:ee.c().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{6,40}$/,"\u043e\u0442 6 \u0434\u043e 40 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432, \u043a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u043e\u0434\u043d\u0430 \u0446\u0438\u0444\u0440\u0430 \u0438 \u043e\u0434\u043d\u0430 \u0437\u0430\u0433\u043b\u0430\u0432\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430").required("\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0443\u0436\u0435\u043d"),email:ee.c().email("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430").required("\u041f\u043e\u0447\u0442\u0443, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430")})),oe={username:"",password:"",email:""},ue=function(){var e=Object(i.b)();return r.a.createElement("div",{className:"formContainer"},r.a.createElement(X.d,{initialValues:oe,validationSchema:ie,onSubmit:function(t,a){var n=a.setFieldError;e(function(e,t){return function(){var a=Object(b.a)(E.a.mark((function a(n){var r,c;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(S(!0)),a.prev=1,a.next=4,F(e,n,x());case 4:n(S(!1)),a.next=16;break;case 7:a.prev=7,a.t0=a.catch(1),r=a.t0.response,c=r.data.errors,n(C(c)),n(S(!1)),t("email",c.email),t("username",c.username),t("password",c.password);case 16:case"end":return a.stop()}}),a,null,[[1,7]])})));return function(e){return a.apply(this,arguments)}}()}(t,n))}},r.a.createElement(te.a,{className:"form"},r.a.createElement("h1",null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"),r.a.createElement("div",{className:"formItem"},r.a.createElement("label",{htmlFor:"username"},"\u0418\u043c\u044f",r.a.createElement("span",{className:"required-star"}," *")),r.a.createElement(te.a.Item,{name:"username"},r.a.createElement(ae.a,{id:"username",name:"username",placeholder:"\u0418\u0432\u0430\u043d",size:"large",suffix:r.a.createElement(re.a,null)}))),r.a.createElement("div",{className:"formItem"},r.a.createElement("label",{htmlFor:"email"},"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043f\u043e\u0447\u0442\u0430",r.a.createElement("span",{className:"required-star"}," *")),r.a.createElement(te.a.Item,{name:"email"},r.a.createElement(ae.a,{id:"email",name:"email",placeholder:"ivan@mail.ru",size:"large",suffix:r.a.createElement(ce.a,null)}))),r.a.createElement("div",{className:"formItem"},r.a.createElement("label",{htmlFor:"pwd"},"\u041f\u0430\u0440\u043e\u043b\u044c",r.a.createElement("span",{className:"required-star"}," *")),r.a.createElement(te.a.Item,{name:"password"},r.a.createElement(ae.a.Password,{id:"pwd",name:"password",placeholder:"bu7UYvjl2nkj9WNshd",size:"large",autoComplete:"off"}))),r.a.createElement("div",{className:"formButtonsContainer"},r.a.createElement(ne.a,{loading:!1,disabled:!1,size:"large",shape:"round",icon:r.a.createElement(le.a,null),className:"button"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")))),r.a.createElement("div",{className:"link-container"},r.a.createElement("span",null,"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c? "),r.a.createElement(J.b,{to:"/login"},"\u0412\u043e\u0439\u0442\u0438")))},se=a(553),me=(a(427),{password:"",email:""}),de=ee.b().shape({password:ee.c().required("\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0443\u0436\u0435\u043d"),email:ee.c().email("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430").required("\u041f\u043e\u0447\u0442\u0443, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430")}),fe=function(){var e=Object(i.b)(),t=function(){var t=Object(b.a)(E.a.mark((function t(a,n){var r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=n.setFieldError,e(D(a,r));case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"formContainer"},r.a.createElement(X.d,{initialValues:me,validationSchema:de,onSubmit:t},r.a.createElement(te.a,null,r.a.createElement("h1",null,"\u0412\u0445\u043e\u0434"),r.a.createElement("div",{className:"formItem"},r.a.createElement("label",{htmlFor:"email"},"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043f\u043e\u0447\u0442\u0430",r.a.createElement("span",{className:"required-star"}," *")),r.a.createElement(te.a.Item,{name:"email"},r.a.createElement(ae.a,{id:"email",name:"email",placeholder:"ivan@mail.ru",size:"large",suffix:r.a.createElement(ce.a,null)}))),r.a.createElement("div",{className:"formItem"},r.a.createElement("label",{htmlFor:"pwd"},"\u041f\u0430\u0440\u043e\u043b\u044c",r.a.createElement("span",{className:"required-star"}," *")),r.a.createElement(te.a.Item,{name:"password"},r.a.createElement(ae.a.Password,{id:"pwd",name:"password",size:"large",autoComplete:"off"}))),r.a.createElement("div",{className:"formButtonsContainer"},r.a.createElement(ne.a,{loading:!1,disabled:!1,size:"large",shape:"round",icon:r.a.createElement(se.a,null),className:"button"},"\u0412\u043e\u0439\u0442\u0438")))),r.a.createElement("div",{className:"link-container"},r.a.createElement(J.b,{to:"/signup"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")))},pe=a(289),Ee=a(554),be=a(555),ve=a(543),ge=a(33),he=a(34);function Oe(){var e=Object(ge.a)(["\n  font-size: 22px;\n  color: black;\n"]);return Oe=function(){return e},e}function je(){var e=Object(ge.a)(["\n  border-radius: 50%;\n"]);return je=function(){return e},e}function xe(){var e=Object(ge.a)(["\n  margin-right: 10px;\n  text-align: right;\n"]);return xe=function(){return e},e}function we(){var e=Object(ge.a)(["\n  display: flex;\n"]);return we=function(){return e},e}function Ne(){var e=Object(ge.a)(["\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  :focus {\n    outline: none;\n    /* outline-color: blue; */\n  }\n"]);return Ne=function(){return e},e}function ke(){var e=Object(ge.a)(["\n  text-align: center;\n  padding: 5px;\n"]);return ke=function(){return e},e}function ye(){var e=Object(ge.a)(["\n  padding: 0 10px;\n  margin-right: 10px;\n  border: 1px solid gray;\n  border-radius: 5px;\n"]);return ye=function(){return e},e}function Ie(){var e=Object(ge.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n"]);return Ie=function(){return e},e}function Ce(){var e=Object(ge.a)(["\n  margin-right: 10px;\n  display: inline-block;\n  color: #1890ff;\n  text-align: left;\n"]);return Ce=function(){return e},e}function Se(){var e=Object(ge.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin: 20px 0;\n  padding: 20px;\n  text-decoration: none;\n  list-style: none;\n  background-color: white;\n  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);\n  border-radius: 5px;\n  min-height: 140px;\n"]);return Se=function(){return e},e}function ze(){var e=Object(ge.a)(["\n  padding: 0;\n  margin: 0 auto;\n  max-width: 900px;\n"]);return ze=function(){return e},e}var Ae=he.a.ul(ze()),qe=he.a.li(Se()),Te=he.a.h2(Ce()),Le=he.a.div(Ie()),Fe=he.a.span(ye()),Ue=he.a.div(ke()),Re=he.a.button(Ne()),_e=he.a.div(we()),De=he.a.div(xe()),Be=he.a.img(je()),Ge=he.a.div(Oe()),Pe=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.articlesData})),a=t.articles,c=t.articlesCount,l=void 0===c?1:c,o=Object(i.c)((function(e){return e.currentUser})).id,u=Object(i.c)((function(e){return e.currentPage})),s=!!o;Object(n.useEffect)((function(){e(_(10,10*u-10))}),[]);var m=r.a.createElement(Ae,{className:"articlesList"},a?a.map((function(t){var a=t.slug,n=t.title,c=t.tagList,l=t.author,i=t.createdAt,o=t.favoritesCount,u=t.favorited;return r.a.createElement(qe,{key:a,className:"article"},r.a.createElement("div",{className:"articleInfo"},r.a.createElement(J.c,{to:"/articles/".concat(a)},r.a.createElement(Te,null,n)),s?r.a.createElement(Re,{type:"button",onClick:function(){return function(t,a){e(R(t,a))}(a,u)}},u?r.a.createElement(Ee.a,null):r.a.createElement(be.a,null)):r.a.createElement(be.a,null)," ",o,r.a.createElement(Le,null,c.map((function(e){return r.a.createElement(Fe,{key:e,className:"tag"},e)})))),r.a.createElement(_e,{className:"articleAuthor"},r.a.createElement(De,null,r.a.createElement(Ge,null,l.username),Object(ve.a)(new Date(i),Date.now(),{includeSeconds:!0})),r.a.createElement(Be,{src:l.image,alt:"",width:"46",height:"46"})))})):null);return r.a.createElement(r.a.Fragment,null,m,r.a.createElement(Ue,null,r.a.createElement(pe.a,{total:l,onChange:function(t,a){e(_(a,t*a-a)),e(L(t))},showSizeChanger:!1,defaultCurrent:1,current:u})))};function Ve(){var e=Object(ge.a)(["\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  :focus {\n    outline: none;\n    /* outline-color: blue; */\n  }\n"]);return Ve=function(){return e},e}function He(){var e=Object(ge.a)(["\n  padding: 5px;\n  border: 1px solid green;\n"]);return He=function(){return e},e}function We(){var e=Object(ge.a)(["\n  font-size: 24px;\n  color: black;\n"]);return We=function(){return e},e}function Je(){var e=Object(ge.a)(["\n  opacity: 0.7;\n"]);return Je=function(){return e},e}function Ze(){var e=Object(ge.a)(["\n  font-size: 40px;\n  color: #1890ff;\n"]);return Ze=function(){return e},e}function Ke(){var e=Object(ge.a)(["\n  padding: 0;\n  margin: 0 auto;\n  width: 80%;\n"]);return Ke=function(){return e},e}var Me=he.a.div(Ke()),Ye=he.a.div(Ze()),$e=he.a.div(Je()),Qe=he.a.div(We()),Xe=he.a.span(He()),et=he.a.button(Ve()),tt=function(){var e=Object(i.b)(),t=Object(Z.h)().slug,a=!!Object(i.c)((function(e){return e.currentUser})).id,n=Object(i.c)((function(e){return e.articlesData.articles})).find((function(e){return e.slug===t})),c=n.title,l=n.body,o=n.createdAt,u=n.updatedAt,s=n.tagList,m=n.description,d=n.author,f=n.favorited,p=n.favoritesCount;return r.a.createElement(Me,null,r.a.createElement(Ye,null,c),r.a.createElement($e,null,m),r.a.createElement(Xe,null,s),r.a.createElement(Qe,null,l),r.a.createElement("br",null),o,r.a.createElement("br",null),u,r.a.createElement("br",null),d?d.username:null,r.a.createElement("br",null),a?r.a.createElement(et,{type:"button",onClick:function(){return function(t,a){e(R(t,a))}(t,f)}},f?r.a.createElement(Ee.a,null):r.a.createElement(be.a,null)):r.a.createElement(be.a,null),p)},at=a(542),nt=a(548),rt=a(556),ct=a(557),lt=ee.b().shape({title:ee.c().required("required"),description:ee.c().required("required"),body:ee.c().required("required"),tagList:ee.a()}),it={title:"",description:"",body:"",tagList:[""]},ot=function(){var e=Object(i.b)(),t=Object(Z.g)(),a=function(){var a=Object(b.a)(E.a.mark((function a(n,r){var c;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:c=r.setFieldError,e(U(n,c)),e(L(1)),t.push("/");case 4:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}(),n=function(e){e.preventDefault(),document.getElementById("addTagButton").click()};return r.a.createElement("div",{className:"formContainer"},r.a.createElement(X.d,{initialValues:it,validationSchema:lt,onSubmit:a},r.a.createElement(te.a,{className:"form"},r.a.createElement("h1",null,"Create Article"),r.a.createElement("div",{className:"formItem"},r.a.createElement("label",{htmlFor:"title"},"title",r.a.createElement("span",{className:"required-star"}," *")),r.a.createElement(te.a.Item,{name:"title"},r.a.createElement(ae.a,{id:"title",name:"title",placeholder:"title",size:"large"}))),r.a.createElement("div",{className:"formItem"},r.a.createElement("label",{htmlFor:"description"},"description",r.a.createElement("span",{className:"required-star"}," *")),r.a.createElement(te.a.Item,{name:"description"},r.a.createElement(ae.a,{id:"description",name:"description",placeholder:"description",size:"large"}))),r.a.createElement("div",{className:"formItem"},r.a.createElement("label",{htmlFor:"body"},"body",r.a.createElement("span",{className:"required-star"}," *")),r.a.createElement(te.a.Item,{name:"body"},r.a.createElement(ae.a.TextArea,{id:"body",name:"body",placeholder:"your text",size:"large"}))),r.a.createElement("div",{className:"formItem"},r.a.createElement(at.a,{name:"tagList",rowKey:function(e){return"".concat(e.id)},size:"small",pagination:!1,columns:[{title:"Tags",key:"tag",render:function(e,t,a){return r.a.createElement(ae.a,{name:"tagList[".concat(a,"]"),placeholder:"\u0422\u0435\u043b\u0435\u043f\u0430\u0442\u0438\u044f",size:"large",suffix:r.a.createElement(rt.a,null),onPressEnter:n,autoFocus:!0})}}]}),r.a.createElement(nt.a,{name:"tagList",createNewRow:function(e){return e||""},size:"large",type:"primary",className:"skillsButton",id:"addTagButton"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0443\u043f\u0435\u0440\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c")),r.a.createElement("div",{className:"formButtonsContainer"},r.a.createElement(ne.a,{loading:!1,disabled:!1,size:"large",shape:"round",icon:r.a.createElement(ct.a,null),className:"button"},"Add article")))),r.a.createElement("div",{className:"link-container"},r.a.createElement("span",null,"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c? "),r.a.createElement(J.b,{to:"/login"},"\u0412\u043e\u0439\u0442\u0438")))},ut=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"404"),r.a.createElement("h2",null,"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"))},st=a(176),mt=function(e){var t=e.component,a=Object(st.a)(e,["component"]);return r.a.createElement(Z.b,Object.assign({},a,{render:function(){return localStorage.getItem("token")?r.a.createElement(t,null):r.a.createElement(Z.a,{to:"/login"})}}))},dt=function(e){var t=e.component,a=Object(st.a)(e,["component"]);return r.a.createElement(Z.b,Object.assign({},a,{render:function(){return localStorage.getItem("token")?r.a.createElement(Z.a,{to:"/"}):r.a.createElement(t,null)}}))},ft=(a(538),function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.currentUser})),a=Object(i.c)((function(e){return e.loading}));return Object(n.useEffect)((function(){e(function(){var e=Object(b.a)(E.a.mark((function e(t){var a,n,r,c,l;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=localStorage,n=a.token){e.next=3;break}return e.abrupt("return");case 3:return t(S(!0)),e.prev=4,e.next=7,g.a.interceptors.request.use((function(e){return e.headers.Authorization="Token ".concat(n),e}));case 7:return r=N(),e.next=10,g.a.get(r);case 10:c=e.sent,l=c.data,t(z(l.user)),t(S(!1)),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(4),401===e.t0.response.status&&localStorage.removeItem("token"),t(S(!1));case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(t){return e.apply(this,arguments)}}())}),[t.id]),Object(n.useEffect)((function(){e(_())}),[]),r.a.createElement(J.a,null,r.a.createElement(Q,null),r.a.createElement(M.a,{loaded:!a,className:"loader"}),r.a.createElement(Z.d,null,r.a.createElement(Z.b,{exact:!0,path:"/",component:Pe}),r.a.createElement(Z.b,{exact:!0,path:"/articles/:slug",component:tt}),r.a.createElement(mt,{exact:!0,path:"/articles/:slug/edit",component:function(){return r.a.createElement("h1",null,"edit")}}),r.a.createElement(mt,{exact:!0,path:"/add",component:ot}),r.a.createElement(dt,{exact:!0,path:"/login",component:fe}),r.a.createElement(dt,{exact:!0,path:"/signup",component:ue}),r.a.createElement(Z.b,{path:"*",component:ut})))}),pt=Object(u.createStore)(W,Object(s.composeWithDevTools)(Object(u.applyMiddleware)(o.a)));l.a.render(r.a.createElement(i.a,{store:pt},r.a.createElement(ft,null)),document.getElementById("root"))}},[[296,1,2]]]);
//# sourceMappingURL=main.5262c303.chunk.js.map