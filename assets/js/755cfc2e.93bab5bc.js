(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(124)),o={id:"pagination",title:"Pagination"},l={unversionedId:"pagination",id:"pagination",isDocsHomePage:!1,title:"Pagination",description:"When working with Spotify responses, you will often encounter the Paging type.",source:"@site/docs/pagination.md",slug:"/pagination",permalink:"/SpotifyAPI-NET/docs/pagination",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/pagination.md",version:"current",lastUpdatedBy:"Chris Sienkiewicz",lastUpdatedAt:1618499983,formattedLastUpdatedAt:"4/15/2021",sidebar:"docs",previous:{title:"Proxy",permalink:"/SpotifyAPI-NET/docs/proxy"},next:{title:"Retry Handling",permalink:"/SpotifyAPI-NET/docs/retry_handling"}},c=[{value:"PaginateAll",id:"paginateall",children:[]},{value:"Paginate",id:"paginate",children:[]},{value:"Paginators",id:"paginators",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When working with Spotify responses, you will often encounter the ",Object(i.b)("inlineCode",{parentName:"p"},"Paging<T>")," type."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The offset-based paging object is a container for a set of objects. It contains a key called Items (whose value is an array of the requested objects) along with other keys like Previous, Next and Limit which can be useful in future calls.")),Object(i.b)("p",null,"It allows you to only receive a subset of all available data and dynamically check if more requests are required. The library supports ",Object(i.b)("inlineCode",{parentName:"p"},"Paging<T>")," responses in two ways:"),Object(i.b)("h2",{id:"paginateall"},"PaginateAll"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"PaginateAll")," will query all remaining elements based on a first page and return all of them in an ",Object(i.b)("inlineCode",{parentName:"p"},"IList"),". This method should not be used for huge amounts of pages (e.g ",Object(i.b)("inlineCode",{parentName:"p"},"Search")," Endpoint), since it stores every response in memory."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},"// we need the first page\nvar page = await spotify.Playlists.CurrentUsers();\n\n// allPages will include the first page retrived before\nvar allPages = await spotify.PaginateAll(page);\n")),Object(i.b)("h2",{id:"paginate"},"Paginate"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),".NET Standard >= 2.1 required")),Object(i.b)("div",{parentName:"div",className:"admonition-content"})),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Paginate")," is based on ",Object(i.b)("inlineCode",{parentName:"p"},"IAsyncEnumerable")," and streams pages instead of returning them all in one list. This allows it to break the fetching early and keep only 1 page in memory at a time. This method should always be preferred to ",Object(i.b)("inlineCode",{parentName:"p"},"PaginateAll"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},'// we need the first page\nvar page = await spotify.Playlists.CurrentUsers();\n\nawait foreach(var item in spotify.Paginate(page))\n{\n  Console.WriteLine(item.Name);\n  // you can use "break" here!\n}\n')),Object(i.b)("p",null,"Some endpoints have nested and/or multiple paginations objects. When requesting the next page, it will not return the actual paging object but rather the root level endpoint object. A good example is the ",Object(i.b)("inlineCode",{parentName:"p"},"Search")," endpoint, which contains up to 5 Paging objects. Requesting the next page of the nested ",Object(i.b)("inlineCode",{parentName:"p"},"Artists")," paging object will return another ",Object(i.b)("inlineCode",{parentName:"p"},"Search")," response, instead of just ",Object(i.b)("inlineCode",{parentName:"p"},"Artists"),". You will need to supply a mapper function to the ",Object(i.b)("inlineCode",{parentName:"p"},"Paginate")," call, which returns the correct paging object:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},'var search = await spotify.Search.Item(new SearchRequest(\n  SearchRequest.Types.All, "Jake"\n));\n\nawait foreach(var item in spotify.Paginate(search.Albums, (s) => s.Albums))\n{\n  Console.WriteLine(item.Name);\n  // you can use "break" here!\n}\n')),Object(i.b)("h2",{id:"paginators"},"Paginators"),Object(i.b)("p",null,"Via the interface ",Object(i.b)("a",{parentName:"p",href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Clients/Interfaces/IPaginator.cs"},Object(i.b)("inlineCode",{parentName:"a"},"IPaginator")),", it can be configured how pages are fetched. It can be configured on a global level:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},"var config = SpotifyClientConfig\n  .CreateDefault()\n  .WithPaginator(new YourCustomPaginator());\n")),Object(i.b)("p",null,"or on method level:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},'await foreach(var item in spotify.Paginate(page, new YourCustomPaginator()))\n{\n  Console.WriteLine(item.Name);\n  // you can use "break" here!\n}\n')),Object(i.b)("p",null,"By default, ",Object(i.b)("a",{parentName:"p",href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Clients/SimplePaginator.cs"},Object(i.b)("inlineCode",{parentName:"a"},"SimplePaginator"))," is used. It fetches pages without any delay."))}p.isMDXComponent=!0}}]);