"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8733],{9618:function(e,t,n){n.d(t,{a:function(){return a}});var o=n(7294),r=n(4929),a=e=>{let{children:t,...n}=e;return(0,o.createElement)(r.c,{...n,as:"label",css:{display:"inline-block",cursor:"pointer",userSelect:"none",marginRight:"8px",marginBottom:"0px",letterSpacing:"0px",verticalAlign:"top"},variant:"secondary",size:"1",weight:"3"},t)}},3261:function(e,t,n){n.d(t,{a:function(){return c}});var o=n(7294),r=n(9618),a=n(4181),i=(0,n(1130).g)("input",{WebkitAppearance:"none",MozAppearance:"none",flexShrink:0,height:"24px",width:"44px",outline:"none",display:"inline-block",position:"relative",margin:0,cursor:"pointer",borderRadius:"11px",border:"1px solid var(--border-color, var(--maximeheckel-form-input-border))",background:"var(--background, var(--maximeheckel-form-input-background))",boxShadow:"var(--shadow, none)",transition:"background 0.3s, border-color 0.3s, box-shadow 0.2s","--shadow-hover-primary":"0 2px 20px 3px var(--maximeheckel-form-input-focus)","&:after":{content:"",display:"block",position:"absolute",left:"2px",top:"2px",borderRadius:"50%",width:"18px",height:"18px",background:"var(--ab, var(--maximeheckel-form-input-border))",transition:"transform var(--d-t, 0.3s) var(--d-t-e, ease), opacity var(--d-o, 0.2s), box-shadow 0.2s",transform:"translateX(var(--x, 0))"},"&:checked":{"--background":"var(--maximeheckel-form-input-active)","--border-color":"var(--maximeheckel-form-input-active)","--d-o":"0.3s","--d-t":"0.6s","--d-t-e":"cubic-bezier(0.2, 0.85, 0.32, 1.2)","--ab":"#ffffff","--x":"20px"},"&:disabled":{"--background":"var(--maximeheckel-form-input-disabled)",cursor:"not-allowed",opacity:"0.65","&:checked":{"--border-color":"var(--maximeheckel-form-input-border)"},"& + label":{cursor:"not-allowed"},"&:not(:checked)":{"&:after":{opacity:"0.6"}}},"&:hover":{"&:not(:disabled)":{"&:not(:checked)":{"--border-color":"var(--maximeheckel-form-input-active)"},"--shadow":"var(--shadow-hover-primary)"}},"&:focus-visible":{"--border-color":"var(--maximeheckel-form-input-active)","--shadow":"var(--shadow-hover-primary)"}}),c=e=>{let{toggled:t,id:n,label:c,...d}=e;return(0,o.createElement)(a.a,{gap:2},(0,o.createElement)(i,{className:"switch",id:n,type:"checkbox",checked:t,"aria-checked":t,role:"switch",...d}),c?(0,o.createElement)(r.a,{htmlFor:n},c):null)}},1672:function(e,t,n){n.r(t),n.d(t,{HighlightedCodeText:function(){return b},default:function(){return v}});var o=n(1799),r=n(9396),a=n(5893),i=n(7301),c=n(1130),d=n(7410),s=n(3746),l=n(828),p=n(4960),u=n(4827),h=n(9130),m=n(7294),x=(0,c.g)("button",{background:"transparent",border:"none",svg:{marginTop:"4px"},"&:focus:not(:focus-visible)":{outline:"0"},"&:focus-visible":{outline:"2px solid var(--maximeheckel-colors-brand)"},variants:{checked:{true:{cursor:"default"},false:{cursor:"pointer"}}}}),k=function(e){var t=.4,n={checked:{opacity:0},unchecked:{opacity:1}},o=(0,l.Z)(m.useState(!1),2),r=o[0],i=o[1],c=(0,p.c)(0),d=(0,u.H)(c,[.05,.15],[0,1]);return m.useEffect((function(){r&&setTimeout((function(){return i(!1)}),3e3)}),[r]),(0,a.jsx)(x,{checked:r,"aria-label":"Copy to clipboard",disabled:r,onClick:function(){!function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}(e.text),i(!0)},children:(0,a.jsxs)(h.E.svg,{initial:"idle",whileHover:"hover",whileTap:"pressed",transition:{duration:t},variants:{hover:function(e){return{scale:e?1:1.05}},pressed:function(e){return{scale:e?1:.95}},idle:{scale:1}},custom:r,width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)(h.E.path,{d:"M20.8511 9.46338H11.8511C10.7465 9.46338 9.85107 10.3588 9.85107 11.4634V20.4634C9.85107 21.5679 10.7465 22.4634 11.8511 22.4634H20.8511C21.9556 22.4634 22.8511 21.5679 22.8511 20.4634V11.4634C22.8511 10.3588 21.9556 9.46338 20.8511 9.46338Z",stroke:"var(--maximeheckel-colors-typeface-tertiary)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:r?"checked":"unchecked",variants:n,custom:r,transition:{duration:t}}),(0,a.jsx)(h.E.path,{d:"M5.85107 15.4634H4.85107C4.32064 15.4634 3.81193 15.2527 3.43686 14.8776C3.06179 14.5025 2.85107 13.9938 2.85107 13.4634V4.46338C2.85107 3.93295 3.06179 3.42424 3.43686 3.04917C3.81193 2.67409 4.32064 2.46338 4.85107 2.46338H13.8511C14.3815 2.46338 14.8902 2.67409 15.2653 3.04917C15.6404 3.42424 15.8511 3.93295 15.8511 4.46338V5.46338",stroke:"var(--maximeheckel-colors-typeface-tertiary)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:r?"checked":"unchecked",variants:n,custom:r,transition:{duration:t}}),(0,a.jsx)(h.E.path,{d:"M20 6L9 17L4 12",stroke:"var(--maximeheckel-colors-typeface-tertiary)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:r?"checked":"unchecked",variants:{pressed:function(e){return{pathLength:e?.85:.05}},checked:{pathLength:1},unchecked:{pathLength:0}},style:{pathLength:c,opacity:d},custom:r,transition:{duration:t}})]})})},g=n(3128);("undefined"!==typeof n.g?n.g:window).Prism=d.Z,n(874),n(9812);var b=function(e){var t=e.codeString,n=e.language,i=e.highlightLine;return(0,a.jsx)(s.ZP,(0,r.Z)((0,o.Z)({},s.lG),{theme:{plain:{},styles:[]},code:t,language:n,children:function(e){var t=e.className,n=e.style,r=e.tokens,c=e.getLineProps,d=e.getTokenProps;return(0,a.jsx)(f,{className:t,style:n,children:r.map((function(e,t){var n=c({className:i&&i(t)?"highlight-line":"",key:t,line:e}).className;return(0,a.jsxs)(y,{"data-testid":i&&i(t)?"highlight-line":"line",className:n,children:[(0,a.jsx)(w,{"data-testid":"number-line",children:t+1}),(0,a.jsx)(j,{children:e.map((function(e,t){return(0,a.jsx)("span",(0,o.Z)({"data-testid":"content-line"},d({key:t,token:e})),t)}))})]},t)}))})}}))},v=function(e){var t=e.codeString,n=e.language,o=e.metastring,r=(0,g.om)(o),c=(0,g.dc)(o);return(0,a.jsxs)(i.a,{css:{marginBottom:"32px",background:"unset","@media(max-width: 750px)":{width:"100vw",position:"relative",left:"50%",right:"50%",marginLeft:"-50vw",marginRight:"-50vw",borderRadius:"0px"}},children:[c?(0,a.jsxs)(i.a.Header,{css:{padding:"0px 16px",backgroundColor:"var(--code-snippet-background)"},children:[(0,a.jsx)(C,{"data-testid":"codesnippet-title",children:c}),(0,a.jsx)(k,{title:c,text:t})]}):null,(0,a.jsx)(b,{codeString:t,language:n,highlightLine:r})]})},f=(0,c.g)("pre",{marginTop:"0",marginBottom:"0",textAlign:"left",padding:"8px 0px",overflow:"auto",borderBottomLeftRadius:"var(--border-radius-2)",borderBottomRightRadius:"var(--border-radius-2)",backgroundColor:"var(--code-snippet-background)",fontFamily:"var(--font-mono)",fontSize:"var(--font-size-1)",lineHeight:"26px",".token.parameter,.token.imports,.token.plain,.token.comment,.token.prolog,.token.doctype,.token.cdata":{color:"var(--token-comment)"},".token.punctuation":{color:"var(--token-punctuation)"},".token.property,.token.tag,.token.boolean,.token.number,.token.constant,.token.symbol,.token.deleted":{color:"var(--token-symbol)"},".token.selector,.token.attr-name,.token.char,.token.builtin,.token.number,.token.string,.token.inserted":{color:"var(--token-selector)"},".token.operator,.token.entity,.token.url,.language-css .style":{color:"var(--token-operator)"},".token.atrule,.token.attr-value,.token.keyword":{color:"var(--token-keyword)"},".token.function,.token.maybe-class-name,.token.class-name":{color:"var(--token-function)"},".token.regex,.token.important,.token.variable":{color:"var(--token-operator)"}}),y=(0,c.g)("div",{display:"table",borderCollapse:"collapse",padding:"0px 14px",borderLeft:"3px solid transparent","&.highlight-line":{background:"var(--maximeheckel-colors-emphasis)",borderColor:"var(--maximeheckel-colors-brand)"},"&:hover":{backgroundColor:"var(--maximeheckel-colors-emphasis)"}}),w=(0,c.g)("div",{width:"45px",padding:"0 12px",userSelect:"none",opacity:"1",color:"var(--maximeheckel-colors-typeface-tertiary)"}),j=(0,c.g)("span",{display:"table-cell",width:"100%"}),C=(0,c.g)("p",{marginBlockStart:"0px",fontSize:"var(--font-size-1)",marginBottom:"0px",color:"var(--maximeheckel-colors-typeface-primary)",fontWeight:"500"})},8733:function(e,t,n){n.r(t);var o=n(828),r=n(5893),a=n(7301),i=n(4545),c=n(4181),d=n(3261),s=n(1672),l=n(9130),p=n(7294);t.default=function(){var e=(0,o.Z)(p.useState(!1),2),t=e[0],n=e[1],u=(0,o.Z)(p.useState(!1),2),h=u[0],m=u[1],x="// expanded: ".concat(t,h?'\n\n// CSS\n.box {\n  width: 20px;\n  height: 20px;\n}\n\n.box[data-expanded="true"] {\n  width: 150px;\n  height: 150px;\n}\n  \n// JS\n<motion.div\n  layout\n  className="box"\n  data-expanded={expanded}\n  style={{\n    borderRadius: \'20px\'\n  }}\n/>':'\n\n// CSS\n.box {\n  width: 20px;\n  height: 20px;\n  border-radius: 20px;\n}\n\n.box[data-expanded="true"] {\n  width: 150px;\n  height: 150px;\n}\n  \n// JS\n<motion.div\n  layout\n  className="box"\n  data-expanded={expanded}\n/>\n\n');return(0,r.jsxs)(a.a,{css:{marginBottom:"2.25rem"},children:[(0,r.jsxs)(a.a.Body,{dotMatrix:!0,css:{height:"300px",display:"grid"},children:[(0,r.jsx)(i.a,{as:l.E.div,layout:!0,transition:{layout:{duration:1.5}},css:{justifySelf:"center",alignSelf:"center",background:"linear-gradient(-60deg,#2E83FF -10%,#EB7D9F 50%, #FFCBBE 100%)",width:t?"150px":"20px",height:t?"150px":"20px",borderRadius:"16px"},style:h?{borderRadius:"16px"}:{}},h),(0,r.jsx)(i.a,{css:{position:"absolute",bottom:"0",width:"100%",padding:"var(--space-4)"},children:(0,r.jsxs)(c.a,{alignItems:"center",justifyContent:"center",children:[(0,r.jsx)(d.a,{"aria-label":"Expand card",id:"expand-card-distort",label:"Expand card",onChange:function(){return n((function(e){return!e}))}}),(0,r.jsx)(d.a,{"aria-label":"Set distorted properties inline",id:"distort",label:"Set distorted properties inline",onChange:function(){return m((function(e){return!e}))}})]})})]}),(0,r.jsx)(s.HighlightedCodeText,{language:"jsx",codeString:x})]})}}}]);