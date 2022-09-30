"use strict";(self.webpackChunknewdoc=self.webpackChunknewdoc||[]).push([[5964],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5367:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},i="Create an acoustic model",l={unversionedId:"developpers/agent/server/post_install/service-manager/acoustic_model",id:"developpers/agent/server/post_install/service-manager/acoustic_model",title:"Create an acoustic model",description:"Acoustic model",source:"@site/docs/developpers/agent/server/post_install/service-manager/acoustic_model.md",sourceDirName:"developpers/agent/server/post_install/service-manager",slug:"/developpers/agent/server/post_install/service-manager/acoustic_model",permalink:"/docs/developpers/agent/server/post_install/service-manager/acoustic_model",draft:!1,editUrl:"https://github.com/linto-ai/documentation-website/tree/source/docs/developpers/agent/server/post_install/service-manager/acoustic_model.md",tags:[],version:"current",frontMatter:{},sidebar:"devSidebar",previous:{title:"Transcription service(s) management",permalink:"/docs/developpers/agent/server/post_install/service-manager/"},next:{title:"Deploy a command transcription service",permalink:"/docs/developpers/agent/server/post_install/service-manager/command_service"}},c={},s=[{value:"Acoustic model",id:"acoustic-model",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating an acoustic model.",id:"creating-an-acoustic-model",level:2},{value:"Check your model",id:"check-your-model",level:2}],u={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-an-acoustic-model"},"Create an acoustic model"),(0,a.kt)("h2",{id:"acoustic-model"},"Acoustic model"),(0,a.kt)("img",{src:"/docs/use_cases/acoustic.png"}),(0,a.kt)("p",null,"An acoustic model is a trained Neural Network that transform an audio signal input to a sequence or phonemes (or n-phones).\nAn acoustic model is trained on a audio -> phonemes inputs."),(0,a.kt)("p",null,"Those phonemes are then mapped to words and utterances by the language model."),(0,a.kt)("p",null,"Acoustic models cover an entire language and therefore is created once for a given tongue."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You have a deployed stack with LinTO Platform Service Manager running."),(0,a.kt)("li",{parentName:"ul"},"You have access to the LinTO Platform Service Manager Swagger at ",(0,a.kt)("inlineCode",{parentName:"li"},"[LINTO_STACK_DOMAIN]/stt-manager/api-doc/"),"."),(0,a.kt)("li",{parentName:"ul"},"You have a trained acoustic model for your desired language. (We provides downloadable ready-made models at ",(0,a.kt)("a",{parentName:"li",href:"/docs/developpers/apis/ASR/models"},"Download Section"),").")),(0,a.kt)("h2",{id:"creating-an-acoustic-model"},"Creating an acoustic model."),(0,a.kt)("p",null,"On the swagger interface go to the Acoustic Model Section and select the Create Acoustic Model request and click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Try it out"),"."),(0,a.kt)("img",{src:"/docs/use_cases/swagger_acoustic.png"}),(0,a.kt)("p",null,"Request parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"modelId : The name of your model."),(0,a.kt)("li",{parentName:"ul"},"file: Model absolute path if the model already exist in your SHARED_FOLDER."),(0,a.kt)("li",{parentName:"ul"},"link: URL of the model."),(0,a.kt)("li",{parentName:"ul"},"lang: The model lang with ISO format."),(0,a.kt)("li",{parentName:"ul"},"description: The model description.")),(0,a.kt)("p",null,"Note that you must choose between file and link."),(0,a.kt)("p",null,"Once the paremeters are set. Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"execute")," and wait for the response.\nIf the request returns a 200, you successfuly created your acoustic model."),(0,a.kt)("h2",{id:"check-your-model"},"Check your model"),(0,a.kt)("p",null,"On the swagger interface go to the Acoustic Model Section and select the get the acoustic model request and click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Try it out"),"."),(0,a.kt)("img",{src:"/docs/use_cases/acoustic_check.png"}),(0,a.kt)("p",null,"Set your newly created acoustic model ID and ",(0,a.kt)("inlineCode",{parentName:"p"},"Execute"),". Your model should be displayed."))}d.isMDXComponent=!0}}]);