import e from"react";function r(){return r=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},r.apply(this,arguments)}function a(e,r){if(null==e)return{};var a,t,l=function(e,r){if(null==e)return{};var a,t,l={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||(l[a]=e[a]);return l}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}function t(e){var r,a,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(a=t(e[r]))&&(l&&(l+=" "),l+=a);else for(r in e)e[r]&&(l&&(l+=" "),l+=r);return l}const l=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,n=function(){for(var e,r,a=0,l="";a<arguments.length;)(e=arguments[a++])&&(r=t(e))&&(l&&(l+=" "),l+=r);return l};var s,i,u="style-module_primary__ezTdA",o="style-module_secondary__cOjd-",c="style-module_success__jIdg1",m="style-module_danger__WhmeJ",d="style-module_small__vLQJz",v="style-module_medium__SPsCP",f="style-module_large__TE3Me",y=["value","variant","className","as","href","size"],p=(s=css.base,i={variants:{variant:{primary:u,secondary:o,success:c,danger:m},size:{small:d,medium:v,large:f}},defaultVariants:{variant:"primary",size:"medium"}},e=>{var r;if(null==(null==i?void 0:i.variants))return n(s,null==e?void 0:e.class,null==e?void 0:e.className);const{variants:a,defaultVariants:t}=i,u=Object.keys(a).map((r=>{const n=null==e?void 0:e[r],s=null==t?void 0:t[r];if(null===n)return null;const i=l(n)||l(s);return a[r][i]})),o=e&&Object.entries(e).reduce(((e,r)=>{let[a,t]=r;return void 0===t||(e[a]=t),e}),{}),c=null==i||null===(r=i.compoundVariants)||void 0===r?void 0:r.reduce(((e,r)=>{let{class:a,className:l,...n}=r;return Object.entries(n).every((e=>{let[r,a]=e;return Array.isArray(a)?a.includes({...t,...o}[r]):{...t,...o}[r]===a}))?[...e,a,l]:e}),[]);return n(s,u,c,null==e?void 0:e.class,null==e?void 0:e.className)}),_=function(t){var l=t.value,n=t.variant,s=t.className,i=t.as,u=t.href,o=t.size,c=a(t,y);return o&&("sm"===o&&(o="small"),"lg"===o&&(o="large"),"md"===o&&(o="medium")),"input"===i?e.createElement("input",r({className:p({variant:n,size:o,className:s}),value:l},c)):u?e.createElement("a",r({href:u,role:"button",className:p({variant:n,size:o,className:s})},c),l):e.createElement(e.Fragment,null,e.createElement("button",r({className:p({variant:n,size:o,className:s})},c),l))};export{_ as default};
