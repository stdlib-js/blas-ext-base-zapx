"use strict";var p=function(a,i){return function(){return i||a((i={exports:{}}).exports,i),i.exports}};var c=p(function(I,x){
var g=require('@stdlib/strided-base-reinterpret-complex128/dist'),w=require('@stdlib/complex-float64-real/dist'),E=require('@stdlib/complex-float64-imag/dist'),o=5;function M(a,i,n,s,_){var e,t,u,r,q,f,v;if(a<=0||(t=w(i),u=E(i),t===0&&u===0))return n;if(e=g(n,0),r=_*2,q=s*2,s===1){if(f=a%o,f>0)for(v=0;v<f;v++)e[r]+=t,e[r+1]+=u,r+=q;if(a<o)return n;for(v=f;v<a;v+=o)e[r]+=t,e[r+1]+=u,e[r+2]+=t,e[r+3]+=u,e[r+4]+=t,e[r+5]+=u,e[r+6]+=t,e[r+7]+=u,e[r+8]+=t,e[r+9]+=u,r+=o*2;return n}for(v=0;v<a;v++)e[r]+=t,e[r+1]+=u,r+=q;return n}x.exports=M
});var d=p(function(J,y){
var O=require('@stdlib/strided-base-stride2offset/dist'),b=c();function k(a,i,n,s){return b(a,i,n,s,O(a,s))}y.exports=k
});var l=p(function(K,j){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=d(),B=c();A(z,"ndarray",B);j.exports=z
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=l(),m,R=D(C(__dirname,"./native.js"));F(R)?m=G:m=R;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
