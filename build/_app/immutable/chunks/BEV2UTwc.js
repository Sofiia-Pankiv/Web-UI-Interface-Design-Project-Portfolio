import{B as x,C as M,D as Y,F as L,G as y,P as C,q as _,I as G,J as N,m as U,n as V,K as D,M as $,S as w,O as z,Q as F,R as J,T as K,V as Q}from"./DpOvhtMI.js";let o=!1;function Z(r){var a=o;try{return o=!1,[r(),o]}finally{o=a}}function T(r){var a;return((a=r.ctx)==null?void 0:a.d)??!1}function H(r,a,f,v){var A;var b=(f&K)!==0,d=!F||(f&J)!==0,c=(f&$)!==0,h=(f&Q)!==0,g=!1,t;c?[t,g]=Z(()=>r[a]):t=r[a];var q=w in r||z in r,l=c&&(((A=x(r,a))==null?void 0:A.set)??(q&&a in r&&(e=>r[a]=e)))||void 0,i=v,P=!0,S=!1,E=()=>(S=!0,P&&(P=!1,h?i=D(v):i=v),i);t===void 0&&v!==void 0&&(l&&d&&M(),t=E(),l&&l(t));var u;if(d)u=()=>{var e=r[a];return e===void 0?E():(P=!0,S=!1,e)};else{var O=(b?L:y)(()=>r[a]);O.f|=Y,u=()=>{var e=_(O);return e!==void 0&&(i=void 0),e===void 0?i:e}}if((f&C)===0)return u;if(l){var B=r.$$legacy;return function(e,s){return arguments.length>0?((!d||!s||B||g)&&l(s?u():e),e):u()}}var I=!1,m=V(t),n=L(()=>{var e=u(),s=_(m);return I?(I=!1,s):m.v=e});return c&&_(n),b||(n.equals=G),function(e,s){if(arguments.length>0){const R=s?_(n):d&&c?N(e):e;if(!n.equals(R)){if(I=!0,U(m,R),S&&i!==void 0&&(i=R),T(n))return e;D(()=>_(n))}return e}return T(n)?n.v:_(n)}}export{H as p};
