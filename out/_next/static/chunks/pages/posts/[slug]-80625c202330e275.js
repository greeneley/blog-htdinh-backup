(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7922],{592:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n(4344)}])},8060:function(e,t,n){"use strict";var r=n(1799),i=n(5893),a=n(5152),o=n.n(a),c=(n(7294),n(3128)),s=o()((function(){return Promise.all([n.e(2159),n.e(1672)]).then(n.bind(n,1672))}),{loadableGenerated:{webpack:function(){return[1672]}}});t.Z=function(e){var t=(0,c.uX)(e);return t?(0,i.jsx)(s,(0,r.Z)({},t)):null}},3128:function(e,t,n){"use strict";n.d(t,{dc:function(){return u},om:function(){return s},uX:function(){return o}});var r=n(1799),i=n(9534),a=n(828),o=function(e){var t=e.children;if(t&&t.props){var n=t.props,a=n.children,o=n.className,c=void 0===o?"":o,s=(0,i.Z)(n,["children","className"]),l=c.match(RegExp("language-(?<lang>.*)"));return(0,r.Z)({className:c,codeString:a.trim(),language:l&&l.groups&&l.groups.lang?l.groups.lang:""},s)}},c=/{([\d,-]+)}/,s=function(e){if(e&&c.test(e)){var t=c.exec(e)[1].split(",").map((function(e){return e.split("-").map((function(e){return parseInt(e,10)}))}));return function(e){var n=e+1;return t.some((function(e){var t=(0,a.Z)(e,2),r=t[0],i=t[1];return i?n>=r&&n<=i:n===r}))}}return function(){return!1}},l=/title=[A-Za-z](.+)/,u=function(e){return e&&l.test(e)?l.exec(e)[0].split("title=")[1]:""}},6506:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r=n(1438),i=n(8029),a=n(1799),o=n(9396),c=n(6567),s=n(5893),l=n(1130),u=n(4929),d=n(5675),h=n.n(d),p=n(7294),m=n(1723),f=(0,l.g)("div",{marginBottom:"2.25rem"}),g=(0,l.g)("h3",{color:"var(--maximeheckel-colors-typeface-tertiary)"}),x=(0,l.g)("div",{color:"var(--maximeheckel-colors-typeface-primary)",gridColumn:"2"}),b=(0,l.g)("div",{borderRadius:"var(--border-radius-2)",width:"100%",height:"375px",overflow:"hidden",margin:"32px auto",position:"relative","@media (max-width: 700px)":{borderRadius:"0px",width:"100vw",height:"250px",left:"50%",right:"50%",margin:"32px -50vw"}}),w=function(e){(0,i.Z)(n,e);var t=(0,c.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return n.prototype.render=function(){var e=this.props,t=e.id,n=e.children,r=e.className;return(0,s.jsx)(x,{"data-testid":"hero",id:t,className:r,children:n})},n}(p.Component);w.Img=function(e){return(0,s.jsx)(b,{children:(0,s.jsx)(h(),{className:e.className,src:e.src,alt:"cover",layout:"fill",objectFit:"cover",loader:m._,priority:!0})})},w.Info=f,w.Subtitle=g,w.Title=function(e){return(0,s.jsx)(u.d,(0,o.Z)((0,a.Z)({},e),{css:{marginBottom:"16px"}}))}},5341:function(e,t,n){"use strict";var r=n(828),i=n(7294);t.Z=function(e,t){var n=(0,r.Z)(i.useState(-1),2),a=n[0],o=n[1],c="-".concat(t&&t.offset||0,"px 0px 0px 0px"),s=a>=0?e.slice(0,a+1):[],l=i.useRef();return i.useEffect((function(){l.current&&l.current.disconnect(),l.current=new IntersectionObserver((function(e){var t=e.findIndex((function(e){return e.intersectionRatio>0}));o(t)}),{root:t&&t.root||null,rootMargin:c});var n=l.current;return e.forEach((function(e){return e?n.observe(e):null})),function(){return n.disconnect()}}),[e,t,c]),[a,s]}},1723:function(e,t,n){"use strict";n.d(t,{_:function(){return r}});var r=function(e){var t=e.src,n=e.width,r=e.quality;return"https://res.cloudinary.com/dg5nsedzw/image/upload/f_auto,w_".concat(n,",q_").concat(r||75,"/").concat(t)}},4344:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return lt},default:function(){return ut}});var r=n(1799),i=n(9396),a=n(5893),o=n(1163),c=n(3659),s=n(828),l=n(1130),u=n(93),d=n(4545),h=n(7253),p=n(4181),m=n(4929),f=n(2498),g=n(1013),x=n(1664),b=n.n(x),w=n(7294),v=n(9205),j=n.n(v),y=n(5043),k=n(6208),S=n(5341),G=n(6240),_=n(9130),Z=(0,l.g)(_.E.div,{height:"calc(88vh - 40px)",maxHeight:"425px",width:"2px",backgroundColor:"hsla(var(--palette-gray-20), 0.3)","@media(max-width: 700px)":{display:"none"}}),P=function(e){var t=e.progress,n=(0,s.Z)(w.useState(!0),2),r=n[0],i=n[1],o=(0,G.J)(),c={hide:{opacity:o?1:0},show:function(e){return{opacity:o?1:e?.7:0}}};return w.useEffect((function(){return i(t>=.07&&t<=.95)}),[t]),(0,a.jsx)(Z,{initial:"hide",variants:c,animate:"show",transition:{type:"spring"},custom:r,children:(0,a.jsx)(_.E.div,{style:{transformOrigin:"top",scaleY:t,width:"2px",backgroundColor:"var(--maximeheckel-colors-typeface-tertiary)",height:"100%"},"data-testid":"progress-bar","data-testprogress":t})})},M=(0,l.g)("div",{position:"fixed",top:"266px",display:"flex",left:"30px",ul:{maxWidth:"200px",flexDirection:"column",display:"flex",margin:"0 0 1.45rem 1.45rem",padding:"0",color:"inherit",listStylePosition:"outside",listStyleImage:"none","@media (max-width: 1250px)":{display:"none"},li:{listStyle:"none",fontSize:"var(--font-size-1)",fontWeight:"var(--font-weight-3)",lineHeight:"1.5",letterSpacing:"0.3px",marginBottom:"22px","&:focus:not(:focus-visible)":{outline:0},"&:focus-visible":{outline:"2px solid var(--maximeheckel-colors-brand)",opacity:"1 !important"}}},"@media (max-width: 1100px)":{left:"10px"},variants:{hidden:{true:{a:{cursor:"none",pointerEvents:"none"}}}}}),A=function(e){var t=e.ids,n=(0,G.J)(),r=(0,k.Z)(),i=r>.07&&r<.95,o={hide:{opacity:n?1:0},show:function(e){return{opacity:n||e?1:0}}},c=(0,s.Z)((0,S.Z)(t.map((function(e){return document.querySelector('section[id="'.concat(e.id,'-section"]'))})),{offset:150}),1)[0];return(0,a.jsxs)(M,{hidden:!i,children:[(0,a.jsx)(P,{progress:r}),t.length>0?(0,a.jsx)("ul",{children:t.map((function(e,t){return(0,a.jsx)(d.a,{as:_.E.li,initial:"hide",css:c===t?{a:{color:"var(--maximeheckel-colors-brand)!important"}}:{},variants:o,animate:"show",transition:{type:"spring"},custom:i,children:(0,a.jsx)(h.a,{discreet:!0,href:"#".concat(e.id),onClick:function(t){return function(e,t){e.preventDefault();var n=document.getElementById(t),r=document.body.getBoundingClientRect().top,i=n.getBoundingClientRect().top-r-100;window.scrollTo({top:i,behavior:"smooth"})}(t,"".concat(e.id,"-section"))},children:e.title})},e.id)}))}):null]})},T=n(6506),B=n(7568),C=n(655),F={count:0,type:{like:0,mention:0,reply:0,repost:0}},R=function(){var e=(0,B.Z)((function(e){return(0,C.__generator)(this,(function(t){return[2,fetch("https://webmention.io/api/count.json?target=".concat(e)).then((function(e){return e.json?e.json():e}))]}))}));return function(t){return e.apply(this,arguments)}}(),z=function(e){var t=e.target,n=(0,s.Z)(w.useState(F),2),r=n[0],i=n[1];return w.useEffect((function(){function e(){return(e=(0,B.Z)((function(){var e;return(0,C.__generator)(this,(function(n){switch(n.label){case 0:return[4,R(t)];case 1:return e=n.sent(),i(e),[2]}}))}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),(0,a.jsxs)(p.a,{children:[void 0===r&&(0,a.jsx)(m.c,{as:"p","data-testid":"failed",children:"Failed to load counts \ud83d\ude1e"}),r&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(m.c,{as:"p",size:"1",weight:"3",variant:"info",css:{marginBottom:0},"data-testid":"likes",children:[r.type.like||0," Likes ","\u2022"]}),(0,a.jsxs)(m.c,{as:"p",size:"1",weight:"3",variant:"info",css:{marginBottom:0},"data-testid":"replies",children:[" ",r.type.reply||0," Replies ","\u2022"]}),(0,a.jsxs)(m.c,{as:"p",size:"1",weight:"3",variant:"info",css:{marginBottom:0},"data-testid":"reposts",children:[" ",(r.type.repost||0)+(r.type.mention||0)," Mentions"]})]})]})},D=n(5152),L=n.n(D),N=n(8046),E=L()((function(){return n.e(8114).then(n.bind(n,8114))}),{loadableGenerated:{webpack:function(){return[8114]}}}),I=function(e){var t=e.title,n=e.url,r=(0,s.Z)((0,N.YD)(),2),i=r[0],o=r[1],c=(0,s.Z)(w.useState(0),1)[0],l=(0,s.Z)(w.useState("fetching"),2),u=l[0],d=l[1],p=(0,s.Z)(w.useState([]),2),f=p[0],g=p[1],x="".concat(t," by @MaximeHeckel ").concat(n),b=w.useCallback((function(){return fetch("https://webmention.io/api/mentions?page=".concat(c,"&per-page=").concat(500,"&target=").concat(n)).then((function(e){return e.json?e.json():e}))}),[c,n]);if(w.useEffect((function(){b().then((function(e){g(e.links),d("done")}))}),[b]),"fetching"===u)return(0,a.jsx)("p",{"data-testid":"fetching",children:"Fetching Replies..."});var v=new Set(f.filter((function(e){return e.data.author})).map((function(e){return e.data.author.url}))),j=Math.ceil(f.length/17);return(0,a.jsxs)("div",{ref:i,children:[(0,a.jsxs)(m.c,{as:"p",weight:"4","data-testid":"main-text",children:[f.length>0?"Already ".concat(v.size>1?"".concat(v.size," awesome people"):"one awesome person"," liked, shared or talked about this article:"):"Be the first one to share this article!",(0,a.jsx)("br",{})]}),o?(0,a.jsx)(E,{replies:f}):(0,a.jsx)("div",{style:{height:77*j,width:"100%"}}),(0,a.jsxs)(m.c,{as:"p","data-testid":"share-text",children:[(0,a.jsx)(h.a,{href:"https://twitter.com/intent/tweet?text=".concat(encodeURI(x)),target:"_blank",rel:"noopener noreferrer",underline:!0,children:"Tweet about this post"})," ","and it will show up here! Or,"," ",(0,a.jsx)(h.a,{href:"https://mobile.twitter.com/search?q=".concat(n),target:"_blank",rel:"noopener noreferrer",underline:!0,children:"click here to leave a comment"})," ","and discuss about it on Twitter."]})]})},H=L()((function(){return Promise.all([n.e(3145),n.e(9874)]).then(n.bind(n,9874))}),{loadableGenerated:{webpack:function(){return[9874]}}}),O=(0,l.g)("div",{background:"var(--maximeheckel-colors-emphasis)",color:"var(--maximeheckel-colors-typeface-primary)",paddingBottom:"50px",paddingTop:"50px",width:"100%",gridColumn:"1 / 4",section:{"@media (max-width: 700px)":{paddingLeft:"20px",paddingRight:"20px"},margin:"0 auto",maxWidth:"700px"}}),q=function(e){var t=e.title,n=e.url;return(0,a.jsx)(O,{"data-testid":"signature",children:(0,a.jsxs)("section",{children:[(0,a.jsx)(I,{title:t,url:n}),(0,a.jsxs)(m.c,{as:"p",children:["Do you have any questions, comments or simply wish to contact me privately? Don\u2019t hesitate to shoot me a DM on"," ",(0,a.jsx)(h.a,{favicon:!0,href:"http://twitter.com/MaximeHeckel",target:"_blank",rel:"noopener noreferrer",children:"Twitter"}),"."]}),(0,a.jsx)("br",{}),(0,a.jsxs)(m.c,{as:"p",children:["Have a wonderful day. ",(0,a.jsx)("br",{}),"Maxime"]}),(0,a.jsx)(H,{})]})})},V=function(e){var t=e.date,n=e.postUrl,r=e.subtitle;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("time",{className:"hidden dt-published",itemProp:"datepublished",dateTime:t,children:new Date(t).toISOString().replace("Z","")+"+01:00"}),(0,a.jsx)("a",{className:"hidden u-url",href:n}),r&&(0,a.jsx)("p",{className:"hidden p-summary e-content",children:r})]})},W=(0,l.c)({padding:"var(--space-5) 0px",gridColumn:"2",color:"var(--maximeheckel-colors-typeface-secondary)",h3:{marginTop:"2em"},section:{marginTop:"5em"}}),U=function(e){var t=e.children,n=e.frontMatter,r=n.date,i=n.updated,o=n.slug,c=n.subtitle,l=n.title,x=n.readingTime,v=n.cover,k="/posts/".concat(o,"/"),S="".concat(j().url).concat(k),G={title:l,offsetHeight:80,showProgressBarOnMobile:!0},_=(0,s.Z)(w.useState([]),2),Z=_[0],P=_[1];return w.useEffect((function(){setTimeout((function(){var e=document.querySelectorAll("h2"),t=Array.prototype.slice.call(e).map((function(e){return{id:e.id,title:e.innerText}}));P(t)}),500)}),[o]),(0,a.jsx)(y.Z,{footer:!0,header:!0,headerProps:G,children:(0,a.jsxs)("article",{className:"h-entry",children:[(0,a.jsxs)(u.a,{columns:"small",gapX:4,children:[(0,a.jsxs)(T.Z,{children:[(0,a.jsx)(d.a,{css:{marginBottom:"24px",fontSize:"var(--font-size-2)"},children:(0,a.jsx)(b(),{href:"/",passHref:!0,children:(0,a.jsx)(h.a,{arrow:"left","data-testid":"home-link",discreet:!0,children:"Home"})})}),(0,a.jsx)(T.Z.Title,{className:"p-name","data-testid":"project-title-".concat(l),children:l}),(0,a.jsxs)(T.Z.Info,{children:[(0,a.jsxs)(p.a,{css:{marginBottom:"var(--space-3)"},wrap:"wrap",children:[(0,a.jsxs)(m.c,{as:"p",size:"1",variant:"tertiary",weight:"3",css:{marginBottom:"0px"},children:[(0,g.Z)(new Date(Date.parse(r)),"MMMM d, yyyy")," /"," ",x.text," /"]}),(0,a.jsx)(z,{target:S})]}),(0,a.jsx)(p.a,{css:{marginLeft:"-var(--space-2)"},children:(0,a.jsxs)(f.e,{variant:"info",children:["Last Updated"," ",(0,g.Z)(new Date(Date.parse(i)),"MMMM d, yyyy")]})})]}),v?(0,a.jsx)(T.Z.Img,{className:"u-photo",src:v}):null]}),(0,a.jsx)(A,{ids:Z}),(0,a.jsx)(d.a,{className:W(),children:t})]}),(0,a.jsx)(q,{title:l,url:S}),(0,a.jsx)(V,{date:r,postUrl:S,subtitle:c})]})})},X=n(7301),J=n(1665),Y=n(9192),K=n(2481),Q=n(1291),$=n(171),ee=n(8060),te=(0,l.g)("div",{marginBottom:"32px",display:"flex",video:{margin:"0 auto",background:"var(--maximeheckel-colors-emphasis)",maxWidth:"100%",height:"auto"}}),ne=n(1723),re=n(5675),ie=n.n(re),ae=(0,l.g)("figure",{marginBottom:"2.25rem",marginLeft:0,marginRight:0}),oe=function(e){return(0,a.jsxs)(ae,{children:[(0,a.jsx)(ie(),(0,i.Z)((0,r.Z)({},e),{loader:ne._,quality:50})),(0,a.jsx)(m.c,{as:"figcaption",css:{lineHeight:"1.5",paddingTop:"10px"},size:"1",variant:"tertiary",weight:"3",children:e.alt})]})},ce=L()((function(){return n.e(4389).then(n.bind(n,4389))}),{loadableGenerated:{webpack:function(){return[4389]}}}),se=L()((function(){return Promise.all([n.e(4317),n.e(2076),n.e(7040),n.e(3145),n.e(6271),n.e(176)]).then(n.bind(n,176))}),{loadableGenerated:{webpack:function(){return[176]}}}),le=L()((function(){return Promise.all([n.e(4317),n.e(2076),n.e(7040),n.e(2204)]).then(n.bind(n,2204))}),{loadableGenerated:{webpack:function(){return[2204]}}}),ue=L()((function(){return n.e(3848).then(n.bind(n,3848))}),{loadableGenerated:{webpack:function(){return[3848]}}}),de=L()((function(){return n.e(5018).then(n.bind(n,5018))}),{loadableGenerated:{webpack:function(){return[5018]}}}),he=L()((function(){return n.e(3861).then(n.bind(n,3861))}),{loadableGenerated:{webpack:function(){return[3861]}}}),pe=L()((function(){return Promise.all([n.e(4317),n.e(638)]).then(n.bind(n,5584))}),{loadableGenerated:{webpack:function(){return[5584]}}}),me=L()((function(){return n.e(738).then(n.bind(n,738))}),{loadableGenerated:{webpack:function(){return[738]}}}),fe=L()((function(){return Promise.all([n.e(2159),n.e(3510)]).then(n.bind(n,3510))}),{loadableGenerated:{webpack:function(){return[3510]}}}),ge=L()((function(){return n.e(859).then(n.bind(n,859))}),{loadableGenerated:{webpack:function(){return[859]}}}),xe=L()((function(){return n.e(5981).then(n.bind(n,5981))}),{loadableGenerated:{webpack:function(){return[5981]}}}),be=L()((function(){return n.e(8160).then(n.bind(n,8160))}),{loadableGenerated:{webpack:function(){return[8160]}}}),we=L()((function(){return n.e(6644).then(n.bind(n,6644))}),{loadableGenerated:{webpack:function(){return[6644]}}}),ve=L()((function(){return n.e(4838).then(n.bind(n,4838))}),{loadableGenerated:{webpack:function(){return[4838]}},ssr:!1,loading:function(){return(0,a.jsx)("div",{style:{width:"100%",height:"705px"}})}}),je=L()((function(){return n.e(8238).then(n.bind(n,8238))}),{loadableGenerated:{webpack:function(){return[8238]}}}),ye=L()((function(){return Promise.all([n.e(4317),n.e(2076),n.e(8982)]).then(n.bind(n,4432))}),{loadableGenerated:{webpack:function(){return[4432]}}}),ke=L()((function(){return Promise.all([n.e(4317),n.e(2076),n.e(9015)]).then(n.bind(n,9015))}),{loadableGenerated:{webpack:function(){return[9015]}}}),Se=L()((function(){return Promise.all([n.e(5762),n.e(7930),n.e(9599)]).then(n.bind(n,3972))}),{loadableGenerated:{webpack:function(){return[3972]}}}),Ge=L()((function(){return n.e(4504).then(n.bind(n,4504))}),{loadableGenerated:{webpack:function(){return[4504]}}}),_e=L()((function(){return Promise.all([n.e(2159),n.e(7015)]).then(n.bind(n,7015))}),{loadableGenerated:{webpack:function(){return[7015]}}}),Ze=L()((function(){return Promise.all([n.e(2159),n.e(8733)]).then(n.bind(n,8733))}),{loadableGenerated:{webpack:function(){return[8733]}}}),Pe=L()((function(){return n.e(7130).then(n.bind(n,7130))}),{loadableGenerated:{webpack:function(){return[7130]}}}),Me=L()((function(){return Promise.all([n.e(2159),n.e(9547)]).then(n.bind(n,9547))}),{loadableGenerated:{webpack:function(){return[9547]}}}),Ae=L()((function(){return n.e(9834).then(n.bind(n,9834))}),{loadableGenerated:{webpack:function(){return[9834]}}}),Te=L()((function(){return Promise.all([n.e(2159),n.e(9872)]).then(n.bind(n,9872))}),{loadableGenerated:{webpack:function(){return[9872]}}}),Be=L()((function(){return Promise.all([n.e(2159),n.e(68)]).then(n.bind(n,68))}),{loadableGenerated:{webpack:function(){return[68]}}}),Ce=L()((function(){return n.e(2688).then(n.bind(n,2688))}),{loadableGenerated:{webpack:function(){return[2688]}}}),Fe=L()((function(){return Promise.all([n.e(5762),n.e(7930),n.e(3944)]).then(n.bind(n,3944))}),{loadableGenerated:{webpack:function(){return[3944]}}}),Re=L()((function(){return Promise.all([n.e(5762),n.e(7930),n.e(4536)]).then(n.bind(n,4536))}),{loadableGenerated:{webpack:function(){return[4536]}}}),ze=L()((function(){return Promise.all([n.e(5762),n.e(7930),n.e(6954)]).then(n.bind(n,6954))}),{loadableGenerated:{webpack:function(){return[6954]}}}),De=L()((function(){return n.e(4098).then(n.bind(n,6980))}),{loadableGenerated:{webpack:function(){return[6980]}}}),Le=L()((function(){return n.e(250).then(n.bind(n,250))}),{loadableGenerated:{webpack:function(){return[250]}}}),Ne=L()((function(){return Promise.all([n.e(2159),n.e(523)]).then(n.bind(n,523))}),{loadableGenerated:{webpack:function(){return[523]}}}),Ee=L()((function(){return Promise.all([n.e(2159),n.e(275)]).then(n.bind(n,275))}),{loadableGenerated:{webpack:function(){return[275]}}}),Ie=L()((function(){return Promise.all([n.e(2159),n.e(3693)]).then(n.bind(n,3693))}),{loadableGenerated:{webpack:function(){return[3693]}}}),He=L()((function(){return Promise.all([n.e(5762),n.e(7930),n.e(6469)]).then(n.bind(n,6469))}),{loadableGenerated:{webpack:function(){return[6469]}}}),Oe=L()((function(){return Promise.all([n.e(5762),n.e(7930),n.e(9447)]).then(n.bind(n,9447))}),{loadableGenerated:{webpack:function(){return[9447]}}}),qe=L()((function(){return Promise.all([n.e(5762),n.e(7930),n.e(3608)]).then(n.bind(n,3608))}),{loadableGenerated:{webpack:function(){return[3608]}}}),Ve=L()((function(){return Promise.all([n.e(5762),n.e(7930),n.e(2068)]).then(n.bind(n,2068))}),{loadableGenerated:{webpack:function(){return[2068]}}}),We=L()((function(){return Promise.all([n.e(5762),n.e(7930),n.e(5193)]).then(n.bind(n,5193))}),{loadableGenerated:{webpack:function(){return[5193]}}}),Ue=L()((function(){return Promise.all([n.e(5762),n.e(7930),n.e(262)]).then(n.bind(n,262))}),{loadableGenerated:{webpack:function(){return[262]}}}),Xe={AnimationTypes:fe,ClipboardAnimationDetails:ce,HSLAShowcase:be,Orchestration:ge,PaletteGenerator:we,ThemePicker:xe,HeartRateWidget:se,Card:X.a,CardBody:X.a.Body,ScrollSpyWidget:ve,SEOStats:le,SpringPhysics:pe,HighlightSection:me,FramerMotionPropagation:ue,FramerMotionAnimatePresence:he,FramerMotionAnimationLayout:de,OpenAIPlayground:je,CubicBezierVisualizer:ye,BezierCurve:ke,VaporwaveThreejsDisclaimer:Ge,FramerMotionLayoutAnimationsBasic:_e,FramerMotionDistortions:Ze,FramerMotionLayoutAnimationsLayoutProp:Pe,FramerMotionLayoutAnimationsLayoutPosition:Me,FramerMotionLayoutAnimationsSharedLayoutAnimationDetails:Ae,FramerMotionLayoutAnimationsTabsLayoutGroup:Be,FramerMotionLayoutAnimationListLayoutGroup:Te,FramerMotionAdvanceReorderExample:Ce,DesignSystemColorTokens:De,DesignSystemMicroInteractionShowcase:Le,DesignSystemTextShowcase:Ne,DesignSystemFlexGridShowcase:Ee,FragmentShaderVisualizer:Ie,CSSCompositionSandpack:Oe,ScrollSpySandpack:Ve,SpringAnimationSandpack:qe,GuideToFramerMotionSandpack:We,AdvancedFramerMotionSandpack:Ue,FramerMotionToastNotificationSandpack:Fe,FramerMotionTabsSandpack:Re,FramerMotionArrowListSandpack:ze,VaporwaveThreejsSandpacks:Se,R3FShaderSandpack:He},Je=(0,r.Z)({a:function(e){return(0,a.jsx)(h.a,(0,r.Z)({underline:!0},e))},Anchor:h.a,Button:J.a,blockquote:Y.a,Callout:K.a,em:m.a,h2:m.e,h3:m.f,Image:oe,code:Q.a,li:$.a.Item,ol:function(e){return(0,a.jsx)($.a,(0,r.Z)({variant:"ordered"},e))},p:function(e){return(0,a.jsx)(m.c,(0,r.Z)({as:"p"},e))},Pill:f.e,pre:ee.Z,strong:m.b,ul:function(e){return(0,a.jsx)($.a,(0,r.Z)({variant:"unordered"},e))},VideoPlayer:function(e){var t=e.autoPlay,n=e.controls,r=e.loop,i=e.muted,o=e.width,c=e.height,l=e.poster,u=e.src,d=(0,f.d)().dark,h=(0,s.Z)(w.useState(void 0),2),p=h[0],m=h[1];return w.useEffect((function(){l&&(l.includes(".png")?m(l):m(function(e,t){return"/static/posters/".concat(e,t?"_dark.png":"_light.png")}(l,d)))}),[d,l]),(0,a.jsx)(te,{children:(0,a.jsx)("video",{autoPlay:t,poster:p,width:o,height:c,controls:n,loop:r||!1,muted:i,children:(0,a.jsx)("source",{src:u,type:"video/mp4"})})})}},Xe),Ye=function(){return(0,a.jsx)("svg",{viewBox:"328 355 335 276",height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570 A 70, 70 0 0 1 370, 523 A 70, 70 0 0 0 401, 521 A 70, 70 0 0 1 344, 455 A 70, 70 0 0 0 372, 460 A 70, 70 0 0 1 354, 370 A 195, 195 0 0 0 495, 442 A 67, 67 0 0 1 611, 380 A 117, 117 0 0 0 654, 363 A 65, 65 0 0 1 623, 401 A 117, 117 0 0 0 662, 390 A 65, 65 0 0 1 630, 425 Z",style:{fill:"#3BA9EE"}})})},Ke=function(){return(0,a.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:(0,a.jsx)("path",{d:"M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.045.286.12.403.143.225.385.347.633.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.368-3.43-7.788-7.8-7.79zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.334-.75-.75-.75h-.395c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"})})},Qe=function(){return(0,a.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:(0,a.jsx)("path",{d:"M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"})})},$e=function(){return(0,a.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:(0,a.jsx)("path",{d:"M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.813-1.148 2.353-2.73 4.644-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.375-7.454 13.11-10.037 13.156H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.035 11.596 8.55 11.658 1.52-.062 8.55-5.917 8.55-11.658 0-2.267-1.822-4.255-3.902-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.015-.03-1.426-2.965-3.955-2.965z"})})},et=(0,l.g)("div",{color:"var(--maximeheckel-colors-typeface-primary)",borderRadius:"var(--border-radius-2)",backgroundColor:"var(--maximeheckel-card-background-color)",padding:"1rem 1.5rem",marginBottom:"2rem",width:"100%",border:"solid 1px var(--maximeheckel-border-color)",boxShadow:l.a[1],"@media (max-width: 700px)":{width:"100vw",position:"relative",left:"50%",right:"50%",marginLeft:"-50vw",marginRight:"-50vw",borderRadius:"0px"}}),tt=(0,l.g)("a",{display:"flex",height:"46px",width:"46px",borderRadius:"50%",overflow:"hidden"}),nt=(0,l.g)("a",{display:"flex",flexDirection:"column",marginLeft:"1rem",color:"var(--maximeheckel-colors-typeface-primary)",textDecoration:"none"}),rt=(0,l.g)("div",{display:"inline-grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",columnGap:"0.5rem",rowGrap:"0.5rem",marginTop:"0.5rem",marginBottom:"0.5rem"}),it=(0,l.g)("div",{marginTop:"0.5rem",marginBottom:"0.5rem"}),at=(0,l.g)("a",{display:"flex",alignItems:"center",marginRight:"1rem",color:"var(--maximeheckel-colors-typeface-tertiary)",textDecoration:"none",svg:{marginRight:"0.25rem"}}),ot=(0,l.c)({borderRadius:"var(--border-radius-2)"}),ct=function(e){var t=e.tweet;if(!t||!t.author)return null;var n=t.author,i=t.media,o=t.created_at,c=t.public_metrics,s=t.id,l=t.text,u=t.referenced_tweets,d="https://twitter.com/".concat(n.username),f="https://twitter.com/intent/like?tweet_id=".concat(s),x="https://twitter.com/intent/retweet?tweet_id=".concat(s),b="https://twitter.com/intent/tweet?in_reply_to=".concat(s),w="https://twitter.com/".concat(n.username,"/status/").concat(s),v=new Date(o),j=u&&u.find((function(e){return"quoted"===e.type}));return(0,a.jsxs)(et,{children:[(0,a.jsxs)(p.a,{alignItems:"center",justifyContent:"space-between",children:[(0,a.jsxs)(p.a,{alignItems:"center",children:[(0,a.jsx)(tt,{href:d,target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)(ie(),{alt:n.username,height:46,width:46,src:n.profile_image_url})}),(0,a.jsxs)(nt,{href:d,className:"author",target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)(m.c,{css:{marginBottom:0,lineHeight:"1.5"},title:n.name,variant:"primary",weight:"4",children:n.name}),(0,a.jsxs)(m.c,{css:{marginBottom:0,lineHeight:"initial"},variant:"tertiary",title:"@".concat(n.username),size:"2",children:["@",n.username]})]})]}),(0,a.jsx)("a",{href:w,target:"_blank",rel:"noopener noreferrer","aria-label":"@".concat(n.username,"'s Twitter profile"),children:(0,a.jsx)(Ye,{})})]}),(0,a.jsx)(m.c,{as:"p",variant:"primary",css:{marginTop:"1rem",marginBottom:"1rem",whiteSpace:"pre-wrap"},children:l}),i&&i.length>1?(0,a.jsx)(rt,{children:i.map((function(e){return(0,a.jsx)("div",{style:{borderRadius:"var(--border-radius-1)",overflow:"hidden"},children:(0,a.jsx)(ie(),{alt:l,layout:"intrinsic",height:e.height,width:e.width,src:e.url})},e.media_key)}))}):null,i&&1===i.length?(0,a.jsx)(it,{children:i.map((function(e){return(0,a.jsx)(ie(),{alt:l,height:e.height,width:e.width,src:e.url,className:ot()},e.media_key)}))}):null,j?(0,a.jsx)(ct,{tweet:(0,r.Z)({},j)}):null,(0,a.jsx)(h.a,{discreet:!0,href:w,target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)("time",{title:"Time Posted: ".concat(v.toUTCString()),dateTime:v.toISOString(),children:(0,g.Z)(v,"h:mm a - MMM d, y")})}),(0,a.jsxs)(p.a,{css:{marginTop:"1rem"},children:[(0,a.jsxs)(at,{href:b,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)(Ke,{}),(0,a.jsx)("span",{children:c.reply_count})]}),(0,a.jsxs)(at,{href:x,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)(Qe,{}),(0,a.jsx)("span",{children:c.retweet_count})]}),(0,a.jsxs)(at,{href:f,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)($e,{}),(0,a.jsx)("span",{children:c.like_count})]})]})]})},st=ct,lt=!0,ut=function(e){var t=e.post,n=e.ogImage,s=e.tweets;if((0,o.useRouter)().isFallback||!t)return(0,a.jsx)("div",{children:"Loading..."});return(0,a.jsx)(U,{frontMatter:t.frontMatter,ogImage:n,children:(0,a.jsx)(c.R,(0,i.Z)((0,r.Z)({},t.mdxSource),{components:(0,i.Z)((0,r.Z)({},Je),{StaticTweet:function(e){var t=e.id;return(0,a.jsx)(st,{tweet:s[t]})}})}))})}}},function(e){e.O(0,[8442,4185,3574,5266,5043,9774,2888,179],(function(){return t=592,e(e.s=t);var t}));var t=e.O();_N_E=t}]);