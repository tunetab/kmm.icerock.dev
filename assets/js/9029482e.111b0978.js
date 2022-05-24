"use strict";(self.webpackChunkkmm_icerock_dev=self.webpackChunkkmm_icerock_dev||[]).push([[5385],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),k=a,f=s["".concat(c,".").concat(k)]||s[k]||m[k]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},31976:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={sidebar_position:20},c="\u041c\u043d\u043e\u0433\u043e\u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c",u={unversionedId:"concurrency",id:"concurrency",title:"\u041c\u043d\u043e\u0433\u043e\u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c",description:"\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b",source:"@site/learning/concurrency.md",sourceDirName:".",slug:"/concurrency",permalink:"/learning/concurrency",draft:!1,editUrl:"https://github.com/icerockdev/kmm.icerock.dev/tree/docusaurus/learning/concurrency.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u043f\u0430\u043c\u044f\u0442\u044c\u044e",permalink:"/learning/memory_management"},next:{title:"Socket",permalink:"/learning/socket"}},p={},m=[{value:"\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b",id:"\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b",level:2},{value:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435",id:"\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435",level:3},{value:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435",id:"\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435",level:3},{value:"\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0435 \u0434\u0435\u0442\u0430\u043b\u0438",id:"\u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0435-\u0434\u0435\u0442\u0430\u043b\u0438",level:2},{value:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"TO DO",id:"to-do",level:2}],s={toc:m};function k(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u043c\u043d\u043e\u0433\u043e\u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c"},"\u041c\u043d\u043e\u0433\u043e\u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c"),(0,o.kt)("h2",{id:"\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b"},"\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b"),(0,o.kt)("h3",{id:"\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435"},"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/coroutines-guide.html"},"kotlinlang docs - Coroutines guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/native-immutability.html"},"kotlinlang docs - Immutability in Kotlin/Native")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/native-concurrency.html"},"kotlinlang docs - Concurrency in Kotlin/Native")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/mobile/concurrent-mutability.html"},"kotlinlang docs - Concurrent mutability")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Kotlin/kotlinx.coroutines/blob/native-mt/kotlin-native-sharing.md"},"Kotlinx.coroutines - Sharing and background threads on Kotlin/Native")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://habr.com/ru/company/yandex/blog/575846/"},"\u041c\u043d\u043e\u0433\u043e\u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u0438 Kotlin \u0432 \u042f\u043d\u0434\u0435\u043a\u0441.\u041a\u0430\u0440\u0442\u0430\u0445: \u043a\u0430\u043a \u043d\u0435 \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043f\u0430\u0434\u0435\u043d\u0438\u044f \u043d\u043e\u0432\u044b\u0445 \u0444\u0438\u0447 \u043d\u0430 iOS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=oxQ6e1VeH4M"},"KotlinConf 2019: Kotlin Native Concurrency Explained by Kevin Galligan"))),(0,o.kt)("h3",{id:"\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435"},"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=nw6YTfEyfO0"},"KotlinConf 2018 - Kotlin/Native Concurrency Model by Nikolay Igotti")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dev.to/touchlab/practical-kotlin-native-concurrency-ac7"},"Touchlab - Practical Kotlin Native Concurrency")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://touchlab.co/kotlin-native-concurrency/"},"Touchlab - Kotlin/Native Concurrency")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=rB5Q3y73FTo"},"\u0420\u043e\u043c\u0430\u043d \u0415\u043b\u0438\u0437\u0430\u0440\u043e\u0432 \u2014 \u041a\u043e\u0440\u0443\u0442\u0438\u043d\u044b \u0432 Kotlin")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.packtpub.com/product/learning-concurrency-in-kotlin/9781788627160"},"Learning Concurrency in Kotlin")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://confluence.icerockdev.com/pages/viewpage.action?pageId=78134108"},"\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b \u0441 \u043a\u043e\u043d\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u0439"))),(0,o.kt)("h2",{id:"\u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0435-\u0434\u0435\u0442\u0430\u043b\u0438"},"\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0435 \u0434\u0435\u0442\u0430\u043b\u0438"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.native.concurrent/-worker-bound-reference/"},"WorkerBoundReference - share without freeze")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/-mutable-shared-flow.html"},"MutableSharedFlow - onBufferOverflow")," - \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u043f\u043e \u043a\u0430\u043a\u043e\u0439 \u043b\u043e\u0433\u0438\u043a\u0435 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c ",(0,o.kt)("inlineCode",{parentName:"li"},"emit")," \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u043f\u0435\u0440\u0435\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0431\u0443\u0444\u0444\u0435\u0440\u0430.")),(0,o.kt)("h2",{id:"\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"},"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://forms.gle/ZCKW34TnLN1tfHQBA"},"Google Forms")),(0,o.kt)("h2",{id:"to-do"},"TO DO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deffered - async, await"),(0,o.kt)("li",{parentName:"ul"},"Dispatchers"),(0,o.kt)("li",{parentName:"ul"},"withContext"),(0,o.kt)("li",{parentName:"ul"},"Atomic"),(0,o.kt)("li",{parentName:"ul"},"Mutex"),(0,o.kt)("li",{parentName:"ul"},"volatile"),(0,o.kt)("li",{parentName:"ul"},"ThreadPool \u0438 \u0435\u0433\u043e \u0441\u0432\u044f\u0437\u044c \u0441 Dispatchers"),(0,o.kt)("li",{parentName:"ul"},"\u043a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 freeze")))}k.isMDXComponent=!0}}]);