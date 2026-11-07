import"./Bzak7iHL.js";import"./CGmra_7w.js";import{av as w,a as $,b as I}from"./C_wJjJIt.js";import{s as A}from"./BgqKrh7G.js";import{l as z,s as y}from"./DWf-wvKX.js";import{I as M}from"./c3Jta_Dn.js";import{w as g,g as Z}from"./DX8m7mvW.js";import{j as P}from"./DU-wofq6.js";const b=!0,B=b;function C(t,e){const i=z(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.539.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];M(t,y({name:"log-out"},()=>i,{get iconNode(){return r},children:(c,n)=>{var a=w(),s=$(a);A(s,e,"default",{}),I(c,a)},$$slots:{default:!0}}))}function D(t){let e=0;return/[a-z]/.test(t)&&e++,/[A-Z]/.test(t)&&e++,/[0-9]/.test(t)&&e++,/[^a-zA-Z0-9]/.test(t)&&e++,e>=2}function K(t){return/^(?!.*\.\.)(?!\.)(?!.*\.$)[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,})$/.test(t)}const _="cm_maintain_ver",N="https://s3.ap-southeast-1.amazonaws.com/cdn.cloudbatata.com/json/server_maintain.json",f=g({show:!1,type:"",title:"",content:""}),u=g(!1),d=g("");let p=null;function U(){f.set({show:!1,type:"",title:"",content:""})}async function S(){var t,e,i,r;try{const n=await(await fetch(N)).json();if(!n)return;const a=Z(P)||"en",s=Date.now(),l=((t=n.preview)==null?void 0:t.find(o=>o.language===a))||((e=n.preview)==null?void 0:e[0]),m=((i=n.maintain)==null?void 0:i.find(o=>o.language===a))||((r=n.maintain)==null?void 0:r[0]),v=n.start_time>s,h=n.start_time<s&&n.end_time>s;if(!v&&!h){f.set({show:!1,type:"",title:"",content:""}),u.set(!1),d.set("");return}if(v&&l){const o=parseInt(localStorage.getItem(_)||"0",10);n.version!==o&&(f.set({show:!0,type:"preview",title:l.title,content:l.content}),localStorage.setItem(_,String(n.version))),u.set(!0),d.set(l.content);return}h&&m&&(f.set({show:!0,type:"maintain",title:m.title,content:m.content}),u.set(!0),d.set(m.content))}catch(c){console.error("maintain fetch fail",c)}}function W(t=6e4){j(),p=setInterval(S,t)}function j(){p&&(clearInterval(p),p=null)}export{C as L,D as a,B as b,j as c,U as d,u as e,d as f,S as i,f as m,W as s,K as v};
