(self.webpackChunkdcom_landing_page=self.webpackChunkdcom_landing_page||[]).push([[697],{6162:function(e,t,a){"use strict";var r=a(4836);t.Z=void 0;var n,i=r(a(6115)),o=r(a(7867)),s=r(a(7071)),d=r(a(434)),l=r(a(7294)),c=r(a(5697)),u=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],f=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},p=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed,r=m(t||a||[]);return r&&r.src},m=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(p);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),b=function(e){var t=f(e),a=g(t);return h[a]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,x=v&&window.IntersectionObserver,w=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),a&&l.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function R(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var z=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+l+o+s+a+r+t+i+n+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},Z=l.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=l.default.createElement(k,(0,d.default)({ref:t,src:a},i,{ariaHidden:o}));return r.length>1?l.default.createElement("picture",null,n(r),s):s})),k=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,c=e.onError,f=e.loading,p=e.draggable,g=e.ariaHidden,m=(0,s.default)(e,u);return l.default.createElement("img",(0,d.default)({"aria-hidden":g,sizes:a,srcSet:r,src:n},m,{onLoad:o,onError:c,ref:t,loading:f,draggable:p,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));k.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var V=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&b(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!y&&x&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(y||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:b(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=z(e,(function(){var e=b(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),(a=g(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,u=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,x=e.itemProp,w=e.loading,E=e.draggable,I=g||h;if(!I)return null;var z=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,d.default)({opacity:z?1:0,transition:V?"opacity "+y+"ms":"none"},s),H="boolean"==typeof b?"lightgray":b,M={transitionDelay:y+"ms"},j=(0,d.default)({opacity:this.state.imgLoaded?0:1},V&&M,s,u),P={title:t,alt:this.state.isVisible?"":a,style:j,className:p,itemProp:x},T=this.state.isHydrated?m(I):I[0];if(g)return l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:T.maxWidth?T.maxWidth+"px":null,maxHeight:T.maxHeight?T.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),H&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:H,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&M)}),T.base64&&l.default.createElement(Z,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:P,imageVariants:I,generateSources:R}),T.tracedSVG&&l.default.createElement(Z,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:P,imageVariants:I,generateSources:L}),this.state.isVisible&&l.default.createElement("picture",null,S(I),l.default.createElement(k,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:w,draggable:E})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,d.default)({alt:a,title:t,loading:w},T,{imageVariants:I}))}}));if(h){var N=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},i);return"inherit"===i.display&&delete N.display,l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},H&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:H,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},V&&M)}),T.base64&&l.default.createElement(Z,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:P,imageVariants:I,generateSources:R}),T.tracedSVG&&l.default.createElement(Z,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:P,imageVariants:I,generateSources:L}),this.state.isVisible&&l.default.createElement("picture",null,S(I),l.default.createElement(k,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:w,draggable:E})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,d.default)({alt:a,title:t,loading:w},T,{imageVariants:I}))}}))}return null},t}(l.default.Component);V.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),H=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function M(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}V.propTypes={resolutions:C,sizes:H,fixed:M(c.default.oneOfType([C,c.default.arrayOf(C)])),fluid:M(c.default.oneOfType([H,c.default.arrayOf(H)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var j=V;t.Z=j},5395:function(e,t,a){"use strict";var r,n,i=a(1880),o=a(7294),s=a(9206),d=a(1883);const l=s.Z.footer(r||(r=(0,i.Z)(["\n  display: grid;\n  place-items: center;\n  margin-top: auto;\n  padding: 50px 0;\n  font-size: 15px;\n  text-align: center;\n  line-height: 1.5;\n  color: white;\n\n  @media (max-width: 768px) {\n    font-size: 13px;\n  }\n"]))),c=(0,s.Z)(d.Link)(n||(n=(0,i.Z)(["\n  text-decoration: underline;\n  display: inline;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));t.Z=function(){return o.createElement(l,null,o.createElement("div",null,o.createElement("br",null),"© 2023 Designed By"," ",o.createElement(c,{to:"https://github.com/FacerAin"},"Yongwoo Song"),", Powered By Gatsby."))}},7733:function(e,t,a){"use strict";a.d(t,{Z:function(){return z}});var r,n,i,o,s,d=a(1880),l=a(7294),c=a(9206),u=a(9495),f=a(917);var p,g,m,h,b,y,v=a(1883);const x=c.Z.div(p||(p=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  z-index: 10;\n  top: 0px;\n  width: 100%;\n  ","\n"])),(w=1,[(0,f.iv)(r||(r=(0,d.Z)(["\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    "]))),(0,f.iv)(n||(n=(0,d.Z)(["\n      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n    "]))),(0,f.iv)(i||(i=(0,d.Z)(["\n      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n    "]))),(0,f.iv)(o||(o=(0,d.Z)(["\n      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),\n        0 10px 10px rgba(0, 0, 0, 0.22);\n    "]))),(0,f.iv)(s||(s=(0,d.Z)(["\n      box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),\n        0 15px 12px rgba(0, 0, 0, 0.22);\n    "])))][w]));var w;const S=c.Z.div(g||(g=(0,d.Z)(["\n  background: black;\n  display: flex;\n  justify-content: center;\n  height: auto;\n"]))),E=c.Z.div(m||(m=(0,d.Z)(["\n  width: 100vw;\n  height: 10vh;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding-right: 1rem;\n  padding-left: 1rem;\n"]))),L=c.Z.div(h||(h=(0,d.Z)(["\n  font-size: 2rem;\n  letter-spacing: 2px;\n  color: ",";\n  font-weight: bold;\n  margin-left: 3rem;\n  &:hover {\n    color: white;\n  }\n\n  @media (max-width: 768px) {\n    font-size: 1rem;\n  }\n"])),u.MA[4]),R=c.Z.div(b||(b=(0,d.Z)(["\n  flex-grow: 1;\n"]))),I=(0,c.Z)(v.Link)(y||(y=(0,d.Z)(["\n  color: ",";\n  font-size: 1rem;\n  &:hover {\n    color: white;\n  }\n  margin: 10px;\n\n  @media (max-width: 768px) {\n    font-size: 0.5rem;\n  }\n"])),u.MA[4]);var z=()=>l.createElement(x,null,l.createElement(S,null,l.createElement(E,null,l.createElement(v.Link,{to:"/"},l.createElement(L,null,"D.COM")),l.createElement(R,null),l.createElement(I,{to:"/posts"},"Posts"),l.createElement(I,{to:"/projects"},"Projects"),l.createElement(I,{to:"/members"},"Members"),l.createElement(I,{to:"/contact"},"Contact"))))},9357:function(e,t,a){"use strict";var r=a(7294),n=a(1883);t.Z=function(e){var t,a;let{description:i,title:o,children:s}=e;const{site:d}=(0,n.useStaticQuery)("63159454"),l=i||d.siteMetadata.description,c=null===(t=d.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,c?o+" | "+c:o),r.createElement("meta",{name:"description",content:l}),r.createElement("meta",{property:"og:title",content:o}),r.createElement("meta",{property:"og:description",content:l}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(a=d.siteMetadata)||void 0===a?void 0:a.author)||""}),r.createElement("meta",{name:"twitter:title",content:o}),r.createElement("meta",{name:"twitter:description",content:l}),s)}},5161:function(e,t,a){"use strict";t.Z=a.p+"static/background-9ab8bad1d9114120c029d8da03728c48.jpg"},7071:function(e){e.exports=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n},e.exports.__esModule=!0,e.exports.default=e.exports},9495:function(e){"use strict";e.exports=JSON.parse('{"MA":{"4":"#ced4da"}}')}}]);
//# sourceMappingURL=bb9ab002142ec414cc9161bc81d3e1f13e13ede1-b4fc6eceb62f7782a395.js.map