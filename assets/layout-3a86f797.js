import{bv as q,bw as R,bx as H,bm as I,bp as Nn,by as Xe,bz as Ln,bA as Cn,bB as J,bC as x,bD as D,bE as Ke,bF as kn,bG as In,bH as An,bI as Ze,bJ as On,bK as ze,bq as he,bL as X,bM as le,bN as Sn,bn as Fn,bO as Mn,bP as Pn,bQ as $n,bR as ve,bS as Rn,bT as jn,bU as be,bV as K,bW as Bn,bX as Q,bY as ge,bZ as Dn,b_ as A,bl as Gn,b$ as Vn,c0 as Je,c1 as Yn,c2 as Y,c3 as Un,c4 as Qe,c5 as Wn,c6 as qn,c7 as en,c8 as Hn,c9 as Xn,ca as te,cb as nn,cc as Kn,cd as Zn,ce as zn,aV as Jn,cf as P,cg as Ne,ch as w,ci as fe}from"./app-8967e7f1.js";import{a as Qn}from"./arrayReduce-865b0d3f.js";import{A as Le}from"./mermaid.core-31b9f3d7.js";var er=/\s/;function nr(e){for(var n=e.length;n--&&er.test(e.charAt(n)););return n}var rr=/^\s+/;function tr(e){return e&&e.slice(0,nr(e)+1).replace(rr,"")}var Ce=0/0,ir=/^[-+]0x[0-9a-f]+$/i,ar=/^0b[01]+$/i,or=/^0o[0-7]+$/i,sr=parseInt;function ur(e){if(typeof e=="number")return e;if(q(e))return Ce;if(R(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=R(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=tr(e);var r=ar.test(e);return r||or.test(e)?sr(e.slice(2),r?2:8):ir.test(e)?Ce:+e}var ke=1/0,dr=17976931348623157e292;function U(e){if(!e)return e===0?e:0;if(e=ur(e),e===ke||e===-ke){var n=e<0?-1:1;return n*dr}return e===e?e:0}function fr(e){var n=U(e),r=n%1;return n===n?r?n-r:n:0}function cr(){}function rn(e,n){for(var r=-1,t=e==null?0:e.length;++r<t&&n(e[r],r,e)!==!1;);return e}function tn(e,n,r,t){for(var i=e.length,a=r+(t?1:-1);t?a--:++a<i;)if(n(e[a],a,e))return a;return-1}function hr(e){return e!==e}function lr(e,n,r){for(var t=r-1,i=e.length;++t<i;)if(e[t]===n)return t;return-1}function vr(e,n,r){return n===n?lr(e,n,r):tn(e,hr,r)}function br(e,n){var r=e==null?0:e.length;return!!r&&vr(e,n,0)>-1}var Ie=H?H.isConcatSpreadable:void 0;function gr(e){return I(e)||Nn(e)||!!(Ie&&e&&e[Ie])}function ee(e,n,r,t,i){var a=-1,o=e.length;for(r||(r=gr),i||(i=[]);++a<o;){var s=e[a];n>0&&r(s)?n>1?ee(s,n-1,r,t,i):Xe(i,s):t||(i[i.length]=s)}return i}function F(e){var n=e==null?0:e.length;return n?ee(e,1):[]}function pr(e){return Ln(Cn(e,void 0,F),e+"")}function mr(e,n){return e&&J(n,x(n),e)}function wr(e,n){return e&&J(n,D(n),e)}function _r(e,n){return J(e,Ke(e),n)}var Er=Object.getOwnPropertySymbols,yr=Er?function(e){for(var n=[];e;)Xe(n,Ke(e)),e=In(e);return n}:kn;const an=yr;function xr(e,n){return J(e,an(e),n)}function Tr(e){return An(e,D,an)}var Nr=Object.prototype,Lr=Nr.hasOwnProperty;function Cr(e){var n=e.length,r=new e.constructor(n);return n&&typeof e[0]=="string"&&Lr.call(e,"index")&&(r.index=e.index,r.input=e.input),r}function kr(e,n){var r=n?Ze(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var Ir=/\w*$/;function Ar(e){var n=new e.constructor(e.source,Ir.exec(e));return n.lastIndex=e.lastIndex,n}var Ae=H?H.prototype:void 0,Oe=Ae?Ae.valueOf:void 0;function Or(e){return Oe?Object(Oe.call(e)):{}}var Sr="[object Boolean]",Fr="[object Date]",Mr="[object Map]",Pr="[object Number]",$r="[object RegExp]",Rr="[object Set]",jr="[object String]",Br="[object Symbol]",Dr="[object ArrayBuffer]",Gr="[object DataView]",Vr="[object Float32Array]",Yr="[object Float64Array]",Ur="[object Int8Array]",Wr="[object Int16Array]",qr="[object Int32Array]",Hr="[object Uint8Array]",Xr="[object Uint8ClampedArray]",Kr="[object Uint16Array]",Zr="[object Uint32Array]";function zr(e,n,r){var t=e.constructor;switch(n){case Dr:return Ze(e);case Sr:case Fr:return new t(+e);case Gr:return kr(e,r);case Vr:case Yr:case Ur:case Wr:case qr:case Hr:case Xr:case Kr:case Zr:return On(e,r);case Mr:return new t;case Pr:case jr:return new t(e);case $r:return Ar(e);case Rr:return new t;case Br:return Or(e)}}var Jr="[object Map]";function Qr(e){return ze(e)&&he(e)==Jr}var Se=X&&X.isMap,et=Se?le(Se):Qr;const nt=et;var rt="[object Set]";function tt(e){return ze(e)&&he(e)==rt}var Fe=X&&X.isSet,it=Fe?le(Fe):tt;const at=it;var ot=1,st=2,ut=4,on="[object Arguments]",dt="[object Array]",ft="[object Boolean]",ct="[object Date]",ht="[object Error]",sn="[object Function]",lt="[object GeneratorFunction]",vt="[object Map]",bt="[object Number]",un="[object Object]",gt="[object RegExp]",pt="[object Set]",mt="[object String]",wt="[object Symbol]",_t="[object WeakMap]",Et="[object ArrayBuffer]",yt="[object DataView]",xt="[object Float32Array]",Tt="[object Float64Array]",Nt="[object Int8Array]",Lt="[object Int16Array]",Ct="[object Int32Array]",kt="[object Uint8Array]",It="[object Uint8ClampedArray]",At="[object Uint16Array]",Ot="[object Uint32Array]",p={};p[on]=p[dt]=p[Et]=p[yt]=p[ft]=p[ct]=p[xt]=p[Tt]=p[Nt]=p[Lt]=p[Ct]=p[vt]=p[bt]=p[un]=p[gt]=p[pt]=p[mt]=p[wt]=p[kt]=p[It]=p[At]=p[Ot]=!0;p[ht]=p[sn]=p[_t]=!1;function W(e,n,r,t,i,a){var o,s=n&ot,u=n&st,d=n&ut;if(r&&(o=i?r(e,t,i,a):r(e)),o!==void 0)return o;if(!R(e))return e;var c=I(e);if(c){if(o=Cr(e),!s)return Sn(e,o)}else{var h=he(e),l=h==sn||h==lt;if(Fn(e))return Mn(e,s);if(h==un||h==on||l&&!i){if(o=u||l?{}:Pn(e),!s)return u?xr(e,wr(o,e)):_r(e,mr(o,e))}else{if(!p[h])return i?e:{};o=zr(e,h,s)}}a||(a=new $n);var v=a.get(e);if(v)return v;a.set(e,o),at(e)?e.forEach(function(E){o.add(W(E,n,r,E,e,a))}):nt(e)&&e.forEach(function(E,y){o.set(y,W(E,n,r,y,e,a))});var b=d?u?Tr:Rn:u?D:x,m=c?void 0:b(e);return rn(m||e,function(E,y){m&&(y=E,E=e[y]),ve(o,y,W(E,n,r,y,e,a))}),o}var St=1,Ft=4;function Mt(e){return W(e,St|Ft)}var Pt=function(){return jn.Date.now()};const Me=Pt;var dn=Object.prototype,$t=dn.hasOwnProperty,Rt=be(function(e,n){e=Object(e);var r=-1,t=n.length,i=t>2?n[2]:void 0;for(i&&K(n[0],n[1],i)&&(t=1);++r<t;)for(var a=n[r],o=D(a),s=-1,u=o.length;++s<u;){var d=o[s],c=e[d];(c===void 0||Bn(c,dn[d])&&!$t.call(e,d))&&(e[d]=a[d])}return e});const jt=Rt;function Bt(e,n,r){for(var t=-1,i=e==null?0:e.length;++t<i;)if(r(n,e[t]))return!0;return!1}function Z(e){var n=e==null?0:e.length;return n?e[n-1]:void 0}function pe(e){return typeof e=="function"?e:Q}function f(e,n){var r=I(e)?rn:ge;return r(e,pe(n))}function Dt(e,n){var r=[];return ge(e,function(t,i,a){n(t,i,a)&&r.push(t)}),r}function N(e,n){var r=I(e)?Dn:Dt;return r(e,A(n))}function Gt(e){return function(n,r,t){var i=Object(n);if(!Gn(n)){var a=A(r);n=x(n),r=function(s){return a(i[s],s,i)}}var o=e(n,r,t);return o>-1?i[a?n[o]:o]:void 0}}var Vt=Math.max;function Yt(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var i=r==null?0:fr(r);return i<0&&(i=Vt(t+i,0)),tn(e,A(n),i)}var Ut=Gt(Yt);const me=Ut;function Wt(e,n){return e==null?e:Vn(e,pe(n),D)}function qt(e,n){return e&&Je(e,pe(n))}function Ht(e,n){return e>n}var Xt=Object.prototype,Kt=Xt.hasOwnProperty;function Zt(e,n){return e!=null&&Kt.call(e,n)}function g(e,n){return e!=null&&Yn(e,n,Zt)}function zt(e,n){return Y(n,function(r){return e[r]})}function L(e){return e==null?[]:zt(e,x(e))}function _(e){return e===void 0}function fn(e,n){return e<n}function ne(e,n){var r={};return n=A(n),Je(e,function(t,i,a){Un(r,i,n(t,i,a))}),r}function we(e,n,r){for(var t=-1,i=e.length;++t<i;){var a=e[t],o=n(a);if(o!=null&&(s===void 0?o===o&&!q(o):r(o,s)))var s=o,u=a}return u}function k(e){return e&&e.length?we(e,Q,Ht):void 0}function j(e){return e&&e.length?we(e,Q,fn):void 0}function _e(e,n){return e&&e.length?we(e,A(n),fn):void 0}function Jt(e,n,r,t){if(!R(e))return e;n=Qe(n,e);for(var i=-1,a=n.length,o=a-1,s=e;s!=null&&++i<a;){var u=Wn(n[i]),d=r;if(u==="__proto__"||u==="constructor"||u==="prototype")return e;if(i!=o){var c=s[u];d=t?t(c,u,s):void 0,d===void 0&&(d=R(c)?c:qn(n[i+1])?[]:{})}ve(s,u,d),s=s[u]}return e}function Qt(e,n,r){for(var t=-1,i=n.length,a={};++t<i;){var o=n[t],s=en(e,o);r(s,o)&&Jt(a,Qe(o,e),s)}return a}function ei(e,n){var r=e.length;for(e.sort(n);r--;)e[r]=e[r].value;return e}function ni(e,n){if(e!==n){var r=e!==void 0,t=e===null,i=e===e,a=q(e),o=n!==void 0,s=n===null,u=n===n,d=q(n);if(!s&&!d&&!a&&e>n||a&&o&&u&&!s&&!d||t&&o&&u||!r&&u||!i)return 1;if(!t&&!a&&!d&&e<n||d&&r&&i&&!t&&!a||s&&r&&i||!o&&i||!u)return-1}return 0}function ri(e,n,r){for(var t=-1,i=e.criteria,a=n.criteria,o=i.length,s=r.length;++t<o;){var u=ni(i[t],a[t]);if(u){if(t>=s)return u;var d=r[t];return u*(d=="desc"?-1:1)}}return e.index-n.index}function ti(e,n,r){n.length?n=Y(n,function(a){return I(a)?function(o){return en(o,a.length===1?a[0]:a)}:a}):n=[Q];var t=-1;n=Y(n,le(A));var i=Hn(e,function(a,o,s){var u=Y(n,function(d){return d(a)});return{criteria:u,index:++t,value:a}});return ei(i,function(a,o){return ri(a,o,r)})}function ii(e,n){return Qt(e,n,function(r,t){return Xn(e,t)})}var ai=pr(function(e,n){return e==null?{}:ii(e,n)});const z=ai;var oi=Math.ceil,si=Math.max;function ui(e,n,r,t){for(var i=-1,a=si(oi((n-e)/(r||1)),0),o=Array(a);a--;)o[t?a:++i]=e,e+=r;return o}function di(e){return function(n,r,t){return t&&typeof t!="number"&&K(n,r,t)&&(r=t=void 0),n=U(n),r===void 0?(r=n,n=0):r=U(r),t=t===void 0?n<r?1:-1:U(t),ui(n,r,t,e)}}var fi=di();const S=fi;function ci(e,n,r,t,i){return i(e,function(a,o,s){r=t?(t=!1,a):n(r,a,o,s)}),r}function G(e,n,r){var t=I(e)?Qn:ci,i=arguments.length<3;return t(e,A(n),r,i,ge)}var hi=be(function(e,n){if(e==null)return[];var r=n.length;return r>1&&K(e,n[0],n[1])?n=[]:r>2&&K(n[0],n[1],n[2])&&(n=[n[0]]),ti(e,ee(n,1),[])});const V=hi;var li=1/0,vi=te&&1/nn(new te([,-0]))[1]==li?function(e){return new te(e)}:cr;const bi=vi;var gi=200;function pi(e,n,r){var t=-1,i=br,a=e.length,o=!0,s=[],u=s;if(r)o=!1,i=Bt;else if(a>=gi){var d=n?null:bi(e);if(d)return nn(d);o=!1,i=Zn,u=new Kn}else u=n?[]:s;e:for(;++t<a;){var c=e[t],h=n?n(c):c;if(c=r||c!==0?c:0,o&&h===h){for(var l=u.length;l--;)if(u[l]===h)continue e;n&&u.push(h),s.push(c)}else i(u,h,r)||(u!==s&&u.push(h),s.push(c))}return s}var mi=be(function(e){return pi(ee(e,1,zn,!0))});const wi=mi;var _i=0;function Ee(e){var n=++_i;return Jn(e)+n}function Ei(e,n,r){for(var t=-1,i=e.length,a=n.length,o={};++t<i;){var s=t<a?n[t]:void 0;r(o,e[t],s)}return o}function yi(e,n){return Ei(e||[],n||[],ve)}var xi="\0",C="\0",Pe="";class T{constructor(n={}){this._isDirected=g(n,"directed")?n.directed:!0,this._isMultigraph=g(n,"multigraph")?n.multigraph:!1,this._isCompound=g(n,"compound")?n.compound:!1,this._label=void 0,this._defaultNodeLabelFn=P(void 0),this._defaultEdgeLabelFn=P(void 0),this._nodes={},this._isCompound&&(this._parent={},this._children={},this._children[C]={}),this._in={},this._preds={},this._out={},this._sucs={},this._edgeObjs={},this._edgeLabels={}}isDirected(){return this._isDirected}isMultigraph(){return this._isMultigraph}isCompound(){return this._isCompound}setGraph(n){return this._label=n,this}graph(){return this._label}setDefaultNodeLabel(n){return Ne(n)||(n=P(n)),this._defaultNodeLabelFn=n,this}nodeCount(){return this._nodeCount}nodes(){return x(this._nodes)}sources(){var n=this;return N(this.nodes(),function(r){return Le(n._in[r])})}sinks(){var n=this;return N(this.nodes(),function(r){return Le(n._out[r])})}setNodes(n,r){var t=arguments,i=this;return f(n,function(a){t.length>1?i.setNode(a,r):i.setNode(a)}),this}setNode(n,r){return g(this._nodes,n)?(arguments.length>1&&(this._nodes[n]=r),this):(this._nodes[n]=arguments.length>1?r:this._defaultNodeLabelFn(n),this._isCompound&&(this._parent[n]=C,this._children[n]={},this._children[C][n]=!0),this._in[n]={},this._preds[n]={},this._out[n]={},this._sucs[n]={},++this._nodeCount,this)}node(n){return this._nodes[n]}hasNode(n){return g(this._nodes,n)}removeNode(n){var r=this;if(g(this._nodes,n)){var t=function(i){r.removeEdge(r._edgeObjs[i])};delete this._nodes[n],this._isCompound&&(this._removeFromParentsChildList(n),delete this._parent[n],f(this.children(n),function(i){r.setParent(i)}),delete this._children[n]),f(x(this._in[n]),t),delete this._in[n],delete this._preds[n],f(x(this._out[n]),t),delete this._out[n],delete this._sucs[n],--this._nodeCount}return this}setParent(n,r){if(!this._isCompound)throw new Error("Cannot set parent in a non-compound graph");if(_(r))r=C;else{r+="";for(var t=r;!_(t);t=this.parent(t))if(t===n)throw new Error("Setting "+r+" as parent of "+n+" would create a cycle");this.setNode(r)}return this.setNode(n),this._removeFromParentsChildList(n),this._parent[n]=r,this._children[r][n]=!0,this}_removeFromParentsChildList(n){delete this._children[this._parent[n]][n]}parent(n){if(this._isCompound){var r=this._parent[n];if(r!==C)return r}}children(n){if(_(n)&&(n=C),this._isCompound){var r=this._children[n];if(r)return x(r)}else{if(n===C)return this.nodes();if(this.hasNode(n))return[]}}predecessors(n){var r=this._preds[n];if(r)return x(r)}successors(n){var r=this._sucs[n];if(r)return x(r)}neighbors(n){var r=this.predecessors(n);if(r)return wi(r,this.successors(n))}isLeaf(n){var r;return this.isDirected()?r=this.successors(n):r=this.neighbors(n),r.length===0}filterNodes(n){var r=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});r.setGraph(this.graph());var t=this;f(this._nodes,function(o,s){n(s)&&r.setNode(s,o)}),f(this._edgeObjs,function(o){r.hasNode(o.v)&&r.hasNode(o.w)&&r.setEdge(o,t.edge(o))});var i={};function a(o){var s=t.parent(o);return s===void 0||r.hasNode(s)?(i[o]=s,s):s in i?i[s]:a(s)}return this._isCompound&&f(r.nodes(),function(o){r.setParent(o,a(o))}),r}setDefaultEdgeLabel(n){return Ne(n)||(n=P(n)),this._defaultEdgeLabelFn=n,this}edgeCount(){return this._edgeCount}edges(){return L(this._edgeObjs)}setPath(n,r){var t=this,i=arguments;return G(n,function(a,o){return i.length>1?t.setEdge(a,o,r):t.setEdge(a,o),o}),this}setEdge(){var n,r,t,i,a=!1,o=arguments[0];typeof o=="object"&&o!==null&&"v"in o?(n=o.v,r=o.w,t=o.name,arguments.length===2&&(i=arguments[1],a=!0)):(n=o,r=arguments[1],t=arguments[3],arguments.length>2&&(i=arguments[2],a=!0)),n=""+n,r=""+r,_(t)||(t=""+t);var s=$(this._isDirected,n,r,t);if(g(this._edgeLabels,s))return a&&(this._edgeLabels[s]=i),this;if(!_(t)&&!this._isMultigraph)throw new Error("Cannot set a named edge when isMultigraph = false");this.setNode(n),this.setNode(r),this._edgeLabels[s]=a?i:this._defaultEdgeLabelFn(n,r,t);var u=Ti(this._isDirected,n,r,t);return n=u.v,r=u.w,Object.freeze(u),this._edgeObjs[s]=u,$e(this._preds[r],n),$e(this._sucs[n],r),this._in[r][s]=u,this._out[n][s]=u,this._edgeCount++,this}edge(n,r,t){var i=arguments.length===1?ie(this._isDirected,arguments[0]):$(this._isDirected,n,r,t);return this._edgeLabels[i]}hasEdge(n,r,t){var i=arguments.length===1?ie(this._isDirected,arguments[0]):$(this._isDirected,n,r,t);return g(this._edgeLabels,i)}removeEdge(n,r,t){var i=arguments.length===1?ie(this._isDirected,arguments[0]):$(this._isDirected,n,r,t),a=this._edgeObjs[i];return a&&(n=a.v,r=a.w,delete this._edgeLabels[i],delete this._edgeObjs[i],Re(this._preds[r],n),Re(this._sucs[n],r),delete this._in[r][i],delete this._out[n][i],this._edgeCount--),this}inEdges(n,r){var t=this._in[n];if(t){var i=L(t);return r?N(i,function(a){return a.v===r}):i}}outEdges(n,r){var t=this._out[n];if(t){var i=L(t);return r?N(i,function(a){return a.w===r}):i}}nodeEdges(n,r){var t=this.inEdges(n,r);if(t)return t.concat(this.outEdges(n,r))}}T.prototype._nodeCount=0;T.prototype._edgeCount=0;function $e(e,n){e[n]?e[n]++:e[n]=1}function Re(e,n){--e[n]||delete e[n]}function $(e,n,r,t){var i=""+n,a=""+r;if(!e&&i>a){var o=i;i=a,a=o}return i+Pe+a+Pe+(_(t)?xi:t)}function Ti(e,n,r,t){var i=""+n,a=""+r;if(!e&&i>a){var o=i;i=a,a=o}var s={v:i,w:a};return t&&(s.name=t),s}function ie(e,n){return $(e,n.v,n.w,n.name)}class Ni{constructor(){var n={};n._next=n._prev=n,this._sentinel=n}dequeue(){var n=this._sentinel,r=n._prev;if(r!==n)return je(r),r}enqueue(n){var r=this._sentinel;n._prev&&n._next&&je(n),n._next=r._next,r._next._prev=n,r._next=n,n._prev=r}toString(){for(var n=[],r=this._sentinel,t=r._prev;t!==r;)n.push(JSON.stringify(t,Li)),t=t._prev;return"["+n.join(", ")+"]"}}function je(e){e._prev._next=e._next,e._next._prev=e._prev,delete e._next,delete e._prev}function Li(e,n){if(e!=="_next"&&e!=="_prev")return n}var Ci=P(1);function ki(e,n){if(e.nodeCount()<=1)return[];var r=Ai(e,n||Ci),t=Ii(r.graph,r.buckets,r.zeroIdx);return F(w(t,function(i){return e.outEdges(i.v,i.w)}))}function Ii(e,n,r){for(var t=[],i=n[n.length-1],a=n[0],o;e.nodeCount();){for(;o=a.dequeue();)ae(e,n,r,o);for(;o=i.dequeue();)ae(e,n,r,o);if(e.nodeCount()){for(var s=n.length-2;s>0;--s)if(o=n[s].dequeue(),o){t=t.concat(ae(e,n,r,o,!0));break}}}return t}function ae(e,n,r,t,i){var a=i?[]:void 0;return f(e.inEdges(t.v),function(o){var s=e.edge(o),u=e.node(o.v);i&&a.push({v:o.v,w:o.w}),u.out-=s,ce(n,r,u)}),f(e.outEdges(t.v),function(o){var s=e.edge(o),u=o.w,d=e.node(u);d.in-=s,ce(n,r,d)}),e.removeNode(t.v),a}function Ai(e,n){var r=new T,t=0,i=0;f(e.nodes(),function(s){r.setNode(s,{v:s,in:0,out:0})}),f(e.edges(),function(s){var u=r.edge(s.v,s.w)||0,d=n(s),c=u+d;r.setEdge(s.v,s.w,c),i=Math.max(i,r.node(s.v).out+=d),t=Math.max(t,r.node(s.w).in+=d)});var a=S(i+t+3).map(function(){return new Ni}),o=t+1;return f(r.nodes(),function(s){ce(a,o,r.node(s))}),{graph:r,buckets:a,zeroIdx:o}}function ce(e,n,r){r.out?r.in?e[r.out-r.in+n].enqueue(r):e[e.length-1].enqueue(r):e[0].enqueue(r)}function Oi(e){var n=e.graph().acyclicer==="greedy"?ki(e,r(e)):Si(e);f(n,function(t){var i=e.edge(t);e.removeEdge(t),i.forwardName=t.name,i.reversed=!0,e.setEdge(t.w,t.v,i,Ee("rev"))});function r(t){return function(i){return t.edge(i).weight}}}function Si(e){var n=[],r={},t={};function i(a){g(t,a)||(t[a]=!0,r[a]=!0,f(e.outEdges(a),function(o){g(r,o.w)?n.push(o):i(o.w)}),delete r[a])}return f(e.nodes(),i),n}function Fi(e){f(e.edges(),function(n){var r=e.edge(n);if(r.reversed){e.removeEdge(n);var t=r.forwardName;delete r.reversed,delete r.forwardName,e.setEdge(n.w,n.v,r,t)}})}function M(e,n,r,t){var i;do i=Ee(t);while(e.hasNode(i));return r.dummy=n,e.setNode(i,r),i}function Mi(e){var n=new T().setGraph(e.graph());return f(e.nodes(),function(r){n.setNode(r,e.node(r))}),f(e.edges(),function(r){var t=n.edge(r.v,r.w)||{weight:0,minlen:1},i=e.edge(r);n.setEdge(r.v,r.w,{weight:t.weight+i.weight,minlen:Math.max(t.minlen,i.minlen)})}),n}function cn(e){var n=new T({multigraph:e.isMultigraph()}).setGraph(e.graph());return f(e.nodes(),function(r){e.children(r).length||n.setNode(r,e.node(r))}),f(e.edges(),function(r){n.setEdge(r,e.edge(r))}),n}function Be(e,n){var r=e.x,t=e.y,i=n.x-r,a=n.y-t,o=e.width/2,s=e.height/2;if(!i&&!a)throw new Error("Not possible to find intersection inside of the rectangle");var u,d;return Math.abs(a)*o>Math.abs(i)*s?(a<0&&(s=-s),u=s*i/a,d=s):(i<0&&(o=-o),u=o,d=o*a/i),{x:r+u,y:t+d}}function re(e){var n=w(S(hn(e)+1),function(){return[]});return f(e.nodes(),function(r){var t=e.node(r),i=t.rank;_(i)||(n[i][t.order]=r)}),n}function Pi(e){var n=j(w(e.nodes(),function(r){return e.node(r).rank}));f(e.nodes(),function(r){var t=e.node(r);g(t,"rank")&&(t.rank-=n)})}function $i(e){var n=j(w(e.nodes(),function(a){return e.node(a).rank})),r=[];f(e.nodes(),function(a){var o=e.node(a).rank-n;r[o]||(r[o]=[]),r[o].push(a)});var t=0,i=e.graph().nodeRankFactor;f(r,function(a,o){_(a)&&o%i!==0?--t:t&&f(a,function(s){e.node(s).rank+=t})})}function De(e,n,r,t){var i={width:0,height:0};return arguments.length>=4&&(i.rank=r,i.order=t),M(e,"border",i,n)}function hn(e){return k(w(e.nodes(),function(n){var r=e.node(n).rank;if(!_(r))return r}))}function Ri(e,n){var r={lhs:[],rhs:[]};return f(e,function(t){n(t)?r.lhs.push(t):r.rhs.push(t)}),r}function ji(e,n){var r=Me();try{return n()}finally{console.log(e+" time: "+(Me()-r)+"ms")}}function Bi(e,n){return n()}function Di(e){function n(r){var t=e.children(r),i=e.node(r);if(t.length&&f(t,n),g(i,"minRank")){i.borderLeft=[],i.borderRight=[];for(var a=i.minRank,o=i.maxRank+1;a<o;++a)Ge(e,"borderLeft","_bl",r,i,a),Ge(e,"borderRight","_br",r,i,a)}}f(e.children(),n)}function Ge(e,n,r,t,i,a){var o={width:0,height:0,rank:a,borderType:n},s=i[n][a-1],u=M(e,"border",o,r);i[n][a]=u,e.setParent(u,t),s&&e.setEdge(s,u,{weight:1})}function Gi(e){var n=e.graph().rankdir.toLowerCase();(n==="lr"||n==="rl")&&ln(e)}function Vi(e){var n=e.graph().rankdir.toLowerCase();(n==="bt"||n==="rl")&&Yi(e),(n==="lr"||n==="rl")&&(Ui(e),ln(e))}function ln(e){f(e.nodes(),function(n){Ve(e.node(n))}),f(e.edges(),function(n){Ve(e.edge(n))})}function Ve(e){var n=e.width;e.width=e.height,e.height=n}function Yi(e){f(e.nodes(),function(n){oe(e.node(n))}),f(e.edges(),function(n){var r=e.edge(n);f(r.points,oe),g(r,"y")&&oe(r)})}function oe(e){e.y=-e.y}function Ui(e){f(e.nodes(),function(n){se(e.node(n))}),f(e.edges(),function(n){var r=e.edge(n);f(r.points,se),g(r,"x")&&se(r)})}function se(e){var n=e.x;e.x=e.y,e.y=n}function Wi(e){e.graph().dummyChains=[],f(e.edges(),function(n){qi(e,n)})}function qi(e,n){var r=n.v,t=e.node(r).rank,i=n.w,a=e.node(i).rank,o=n.name,s=e.edge(n),u=s.labelRank;if(a!==t+1){e.removeEdge(n);var d,c,h;for(h=0,++t;t<a;++h,++t)s.points=[],c={width:0,height:0,edgeLabel:s,edgeObj:n,rank:t},d=M(e,"edge",c,"_d"),t===u&&(c.width=s.width,c.height=s.height,c.dummy="edge-label",c.labelpos=s.labelpos),e.setEdge(r,d,{weight:s.weight},o),h===0&&e.graph().dummyChains.push(d),r=d;e.setEdge(r,i,{weight:s.weight},o)}}function Hi(e){f(e.graph().dummyChains,function(n){var r=e.node(n),t=r.edgeLabel,i;for(e.setEdge(r.edgeObj,t);r.dummy;)i=e.successors(n)[0],e.removeNode(n),t.points.push({x:r.x,y:r.y}),r.dummy==="edge-label"&&(t.x=r.x,t.y=r.y,t.width=r.width,t.height=r.height),n=i,r=e.node(n)})}function ye(e){var n={};function r(t){var i=e.node(t);if(g(n,t))return i.rank;n[t]=!0;var a=j(w(e.outEdges(t),function(o){return r(o.w)-e.edge(o).minlen}));return(a===Number.POSITIVE_INFINITY||a===void 0||a===null)&&(a=0),i.rank=a}f(e.sources(),r)}function B(e,n){return e.node(n.w).rank-e.node(n.v).rank-e.edge(n).minlen}function vn(e){var n=new T({directed:!1}),r=e.nodes()[0],t=e.nodeCount();n.setNode(r,{});for(var i,a;Xi(n,e)<t;)i=Ki(n,e),a=n.hasNode(i.v)?B(e,i):-B(e,i),Zi(n,e,a);return n}function Xi(e,n){function r(t){f(n.nodeEdges(t),function(i){var a=i.v,o=t===a?i.w:a;!e.hasNode(o)&&!B(n,i)&&(e.setNode(o,{}),e.setEdge(t,o,{}),r(o))})}return f(e.nodes(),r),e.nodeCount()}function Ki(e,n){return _e(n.edges(),function(r){if(e.hasNode(r.v)!==e.hasNode(r.w))return B(n,r)})}function Zi(e,n,r){f(e.nodes(),function(t){n.node(t).rank+=r})}function zi(){}zi.prototype=new Error;function bn(e,n,r){I(n)||(n=[n]);var t=(e.isDirected()?e.successors:e.neighbors).bind(e),i=[],a={};return f(n,function(o){if(!e.hasNode(o))throw new Error("Graph does not have node: "+o);gn(e,o,r==="post",a,t,i)}),i}function gn(e,n,r,t,i,a){g(t,n)||(t[n]=!0,r||a.push(n),f(i(n),function(o){gn(e,o,r,t,i,a)}),r&&a.push(n))}function Ji(e,n){return bn(e,n,"post")}function Qi(e,n){return bn(e,n,"pre")}O.initLowLimValues=Te;O.initCutValues=xe;O.calcCutValue=pn;O.leaveEdge=wn;O.enterEdge=_n;O.exchangeEdges=En;function O(e){e=Mi(e),ye(e);var n=vn(e);Te(n),xe(n,e);for(var r,t;r=wn(n);)t=_n(n,e,r),En(n,e,r,t)}function xe(e,n){var r=Ji(e,e.nodes());r=r.slice(0,r.length-1),f(r,function(t){ea(e,n,t)})}function ea(e,n,r){var t=e.node(r),i=t.parent;e.edge(r,i).cutvalue=pn(e,n,r)}function pn(e,n,r){var t=e.node(r),i=t.parent,a=!0,o=n.edge(r,i),s=0;return o||(a=!1,o=n.edge(i,r)),s=o.weight,f(n.nodeEdges(r),function(u){var d=u.v===r,c=d?u.w:u.v;if(c!==i){var h=d===a,l=n.edge(u).weight;if(s+=h?l:-l,ra(e,r,c)){var v=e.edge(r,c).cutvalue;s+=h?-v:v}}}),s}function Te(e,n){arguments.length<2&&(n=e.nodes()[0]),mn(e,{},1,n)}function mn(e,n,r,t,i){var a=r,o=e.node(t);return n[t]=!0,f(e.neighbors(t),function(s){g(n,s)||(r=mn(e,n,r,s,t))}),o.low=a,o.lim=r++,i?o.parent=i:delete o.parent,r}function wn(e){return me(e.edges(),function(n){return e.edge(n).cutvalue<0})}function _n(e,n,r){var t=r.v,i=r.w;n.hasEdge(t,i)||(t=r.w,i=r.v);var a=e.node(t),o=e.node(i),s=a,u=!1;a.lim>o.lim&&(s=o,u=!0);var d=N(n.edges(),function(c){return u===Ye(e,e.node(c.v),s)&&u!==Ye(e,e.node(c.w),s)});return _e(d,function(c){return B(n,c)})}function En(e,n,r,t){var i=r.v,a=r.w;e.removeEdge(i,a),e.setEdge(t.v,t.w,{}),Te(e),xe(e,n),na(e,n)}function na(e,n){var r=me(e.nodes(),function(i){return!n.node(i).parent}),t=Qi(e,r);t=t.slice(1),f(t,function(i){var a=e.node(i).parent,o=n.edge(i,a),s=!1;o||(o=n.edge(a,i),s=!0),n.node(i).rank=n.node(a).rank+(s?o.minlen:-o.minlen)})}function ra(e,n,r){return e.hasEdge(n,r)}function Ye(e,n,r){return r.low<=n.lim&&n.lim<=r.lim}function ta(e){switch(e.graph().ranker){case"network-simplex":Ue(e);break;case"tight-tree":aa(e);break;case"longest-path":ia(e);break;default:Ue(e)}}var ia=ye;function aa(e){ye(e),vn(e)}function Ue(e){O(e)}function oa(e){var n=M(e,"root",{},"_root"),r=sa(e),t=k(L(r))-1,i=2*t+1;e.graph().nestingRoot=n,f(e.edges(),function(o){e.edge(o).minlen*=i});var a=ua(e)+1;f(e.children(),function(o){yn(e,n,i,a,t,r,o)}),e.graph().nodeRankFactor=i}function yn(e,n,r,t,i,a,o){var s=e.children(o);if(!s.length){o!==n&&e.setEdge(n,o,{weight:0,minlen:r});return}var u=De(e,"_bt"),d=De(e,"_bb"),c=e.node(o);e.setParent(u,o),c.borderTop=u,e.setParent(d,o),c.borderBottom=d,f(s,function(h){yn(e,n,r,t,i,a,h);var l=e.node(h),v=l.borderTop?l.borderTop:h,b=l.borderBottom?l.borderBottom:h,m=l.borderTop?t:2*t,E=v!==b?1:i-a[o]+1;e.setEdge(u,v,{weight:m,minlen:E,nestingEdge:!0}),e.setEdge(b,d,{weight:m,minlen:E,nestingEdge:!0})}),e.parent(o)||e.setEdge(n,u,{weight:0,minlen:i+a[o]})}function sa(e){var n={};function r(t,i){var a=e.children(t);a&&a.length&&f(a,function(o){r(o,i+1)}),n[t]=i}return f(e.children(),function(t){r(t,1)}),n}function ua(e){return G(e.edges(),function(n,r){return n+e.edge(r).weight},0)}function da(e){var n=e.graph();e.removeNode(n.nestingRoot),delete n.nestingRoot,f(e.edges(),function(r){var t=e.edge(r);t.nestingEdge&&e.removeEdge(r)})}function fa(e,n,r){var t={},i;f(r,function(a){for(var o=e.parent(a),s,u;o;){if(s=e.parent(o),s?(u=t[s],t[s]=o):(u=i,i=o),u&&u!==o){n.setEdge(u,o);return}o=s}})}function ca(e,n,r){var t=ha(e),i=new T({compound:!0}).setGraph({root:t}).setDefaultNodeLabel(function(a){return e.node(a)});return f(e.nodes(),function(a){var o=e.node(a),s=e.parent(a);(o.rank===n||o.minRank<=n&&n<=o.maxRank)&&(i.setNode(a),i.setParent(a,s||t),f(e[r](a),function(u){var d=u.v===a?u.w:u.v,c=i.edge(d,a),h=_(c)?0:c.weight;i.setEdge(d,a,{weight:e.edge(u).weight+h})}),g(o,"minRank")&&i.setNode(a,{borderLeft:o.borderLeft[n],borderRight:o.borderRight[n]}))}),i}function ha(e){for(var n;e.hasNode(n=Ee("_root")););return n}function la(e,n){for(var r=0,t=1;t<n.length;++t)r+=va(e,n[t-1],n[t]);return r}function va(e,n,r){for(var t=yi(r,w(r,function(d,c){return c})),i=F(w(n,function(d){return V(w(e.outEdges(d),function(c){return{pos:t[c.w],weight:e.edge(c).weight}}),"pos")})),a=1;a<r.length;)a<<=1;var o=2*a-1;a-=1;var s=w(new Array(o),function(){return 0}),u=0;return f(i.forEach(function(d){var c=d.pos+a;s[c]+=d.weight;for(var h=0;c>0;)c%2&&(h+=s[c+1]),c=c-1>>1,s[c]+=d.weight;u+=d.weight*h})),u}function ba(e){var n={},r=N(e.nodes(),function(s){return!e.children(s).length}),t=k(w(r,function(s){return e.node(s).rank})),i=w(S(t+1),function(){return[]});function a(s){if(!g(n,s)){n[s]=!0;var u=e.node(s);i[u.rank].push(s),f(e.successors(s),a)}}var o=V(r,function(s){return e.node(s).rank});return f(o,a),i}function ga(e,n){return w(n,function(r){var t=e.inEdges(r);if(t.length){var i=G(t,function(a,o){var s=e.edge(o),u=e.node(o.v);return{sum:a.sum+s.weight*u.order,weight:a.weight+s.weight}},{sum:0,weight:0});return{v:r,barycenter:i.sum/i.weight,weight:i.weight}}else return{v:r}})}function pa(e,n){var r={};f(e,function(i,a){var o=r[i.v]={indegree:0,in:[],out:[],vs:[i.v],i:a};_(i.barycenter)||(o.barycenter=i.barycenter,o.weight=i.weight)}),f(n.edges(),function(i){var a=r[i.v],o=r[i.w];!_(a)&&!_(o)&&(o.indegree++,a.out.push(r[i.w]))});var t=N(r,function(i){return!i.indegree});return ma(t)}function ma(e){var n=[];function r(a){return function(o){o.merged||(_(o.barycenter)||_(a.barycenter)||o.barycenter>=a.barycenter)&&wa(a,o)}}function t(a){return function(o){o.in.push(a),--o.indegree===0&&e.push(o)}}for(;e.length;){var i=e.pop();n.push(i),f(i.in.reverse(),r(i)),f(i.out,t(i))}return w(N(n,function(a){return!a.merged}),function(a){return z(a,["vs","i","barycenter","weight"])})}function wa(e,n){var r=0,t=0;e.weight&&(r+=e.barycenter*e.weight,t+=e.weight),n.weight&&(r+=n.barycenter*n.weight,t+=n.weight),e.vs=n.vs.concat(e.vs),e.barycenter=r/t,e.weight=t,e.i=Math.min(n.i,e.i),n.merged=!0}function _a(e,n){var r=Ri(e,function(c){return g(c,"barycenter")}),t=r.lhs,i=V(r.rhs,function(c){return-c.i}),a=[],o=0,s=0,u=0;t.sort(Ea(!!n)),u=We(a,i,u),f(t,function(c){u+=c.vs.length,a.push(c.vs),o+=c.barycenter*c.weight,s+=c.weight,u=We(a,i,u)});var d={vs:F(a)};return s&&(d.barycenter=o/s,d.weight=s),d}function We(e,n,r){for(var t;n.length&&(t=Z(n)).i<=r;)n.pop(),e.push(t.vs),r++;return r}function Ea(e){return function(n,r){return n.barycenter<r.barycenter?-1:n.barycenter>r.barycenter?1:e?r.i-n.i:n.i-r.i}}function xn(e,n,r,t){var i=e.children(n),a=e.node(n),o=a?a.borderLeft:void 0,s=a?a.borderRight:void 0,u={};o&&(i=N(i,function(b){return b!==o&&b!==s}));var d=ga(e,i);f(d,function(b){if(e.children(b.v).length){var m=xn(e,b.v,r,t);u[b.v]=m,g(m,"barycenter")&&xa(b,m)}});var c=pa(d,r);ya(c,u);var h=_a(c,t);if(o&&(h.vs=F([o,h.vs,s]),e.predecessors(o).length)){var l=e.node(e.predecessors(o)[0]),v=e.node(e.predecessors(s)[0]);g(h,"barycenter")||(h.barycenter=0,h.weight=0),h.barycenter=(h.barycenter*h.weight+l.order+v.order)/(h.weight+2),h.weight+=2}return h}function ya(e,n){f(e,function(r){r.vs=F(r.vs.map(function(t){return n[t]?n[t].vs:t}))})}function xa(e,n){_(e.barycenter)?(e.barycenter=n.barycenter,e.weight=n.weight):(e.barycenter=(e.barycenter*e.weight+n.barycenter*n.weight)/(e.weight+n.weight),e.weight+=n.weight)}function Ta(e){var n=hn(e),r=qe(e,S(1,n+1),"inEdges"),t=qe(e,S(n-1,-1,-1),"outEdges"),i=ba(e);He(e,i);for(var a=Number.POSITIVE_INFINITY,o,s=0,u=0;u<4;++s,++u){Na(s%2?r:t,s%4>=2),i=re(e);var d=la(e,i);d<a&&(u=0,o=Mt(i),a=d)}He(e,o)}function qe(e,n,r){return w(n,function(t){return ca(e,t,r)})}function Na(e,n){var r=new T;f(e,function(t){var i=t.graph().root,a=xn(t,i,r,n);f(a.vs,function(o,s){t.node(o).order=s}),fa(t,r,a.vs)})}function He(e,n){f(n,function(r){f(r,function(t,i){e.node(t).order=i})})}function La(e){var n=ka(e);f(e.graph().dummyChains,function(r){for(var t=e.node(r),i=t.edgeObj,a=Ca(e,n,i.v,i.w),o=a.path,s=a.lca,u=0,d=o[u],c=!0;r!==i.w;){if(t=e.node(r),c){for(;(d=o[u])!==s&&e.node(d).maxRank<t.rank;)u++;d===s&&(c=!1)}if(!c){for(;u<o.length-1&&e.node(d=o[u+1]).minRank<=t.rank;)u++;d=o[u]}e.setParent(r,d),r=e.successors(r)[0]}})}function Ca(e,n,r,t){var i=[],a=[],o=Math.min(n[r].low,n[t].low),s=Math.max(n[r].lim,n[t].lim),u,d;u=r;do u=e.parent(u),i.push(u);while(u&&(n[u].low>o||s>n[u].lim));for(d=u,u=t;(u=e.parent(u))!==d;)a.push(u);return{path:i.concat(a.reverse()),lca:d}}function ka(e){var n={},r=0;function t(i){var a=r;f(e.children(i),t),n[i]={low:a,lim:r++}}return f(e.children(),t),n}function Ia(e,n){var r={};function t(i,a){var o=0,s=0,u=i.length,d=Z(a);return f(a,function(c,h){var l=Oa(e,c),v=l?e.node(l).order:u;(l||c===d)&&(f(a.slice(s,h+1),function(b){f(e.predecessors(b),function(m){var E=e.node(m),y=E.order;(y<o||v<y)&&!(E.dummy&&e.node(b).dummy)&&Tn(r,m,b)})}),s=h+1,o=v)}),a}return G(n,t),r}function Aa(e,n){var r={};function t(a,o,s,u,d){var c;f(S(o,s),function(h){c=a[h],e.node(c).dummy&&f(e.predecessors(c),function(l){var v=e.node(l);v.dummy&&(v.order<u||v.order>d)&&Tn(r,l,c)})})}function i(a,o){var s=-1,u,d=0;return f(o,function(c,h){if(e.node(c).dummy==="border"){var l=e.predecessors(c);l.length&&(u=e.node(l[0]).order,t(o,d,h,s,u),d=h,s=u)}t(o,d,o.length,u,a.length)}),o}return G(n,i),r}function Oa(e,n){if(e.node(n).dummy)return me(e.predecessors(n),function(r){return e.node(r).dummy})}function Tn(e,n,r){if(n>r){var t=n;n=r,r=t}var i=e[n];i||(e[n]=i={}),i[r]=!0}function Sa(e,n,r){if(n>r){var t=n;n=r,r=t}return g(e[n],r)}function Fa(e,n,r,t){var i={},a={},o={};return f(n,function(s){f(s,function(u,d){i[u]=u,a[u]=u,o[u]=d})}),f(n,function(s){var u=-1;f(s,function(d){var c=t(d);if(c.length){c=V(c,function(m){return o[m]});for(var h=(c.length-1)/2,l=Math.floor(h),v=Math.ceil(h);l<=v;++l){var b=c[l];a[d]===d&&u<o[b]&&!Sa(r,d,b)&&(a[b]=d,a[d]=i[d]=i[b],u=o[b])}}})}),{root:i,align:a}}function Ma(e,n,r,t,i){var a={},o=Pa(e,n,r,i),s=i?"borderLeft":"borderRight";function u(h,l){for(var v=o.nodes(),b=v.pop(),m={};b;)m[b]?h(b):(m[b]=!0,v.push(b),v=v.concat(l(b))),b=v.pop()}function d(h){a[h]=o.inEdges(h).reduce(function(l,v){return Math.max(l,a[v.v]+o.edge(v))},0)}function c(h){var l=o.outEdges(h).reduce(function(b,m){return Math.min(b,a[m.w]-o.edge(m))},Number.POSITIVE_INFINITY),v=e.node(h);l!==Number.POSITIVE_INFINITY&&v.borderType!==s&&(a[h]=Math.max(a[h],l))}return u(d,o.predecessors.bind(o)),u(c,o.successors.bind(o)),f(t,function(h){a[h]=a[r[h]]}),a}function Pa(e,n,r,t){var i=new T,a=e.graph(),o=Da(a.nodesep,a.edgesep,t);return f(n,function(s){var u;f(s,function(d){var c=r[d];if(i.setNode(c),u){var h=r[u],l=i.edge(h,c);i.setEdge(h,c,Math.max(o(e,d,u),l||0))}u=d})}),i}function $a(e,n){return _e(L(n),function(r){var t=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY;return Wt(r,function(a,o){var s=Ga(e,o)/2;t=Math.max(a+s,t),i=Math.min(a-s,i)}),t-i})}function Ra(e,n){var r=L(n),t=j(r),i=k(r);f(["u","d"],function(a){f(["l","r"],function(o){var s=a+o,u=e[s],d;if(u!==n){var c=L(u);d=o==="l"?t-j(c):i-k(c),d&&(e[s]=ne(u,function(h){return h+d}))}})})}function ja(e,n){return ne(e.ul,function(r,t){if(n)return e[n.toLowerCase()][t];var i=V(w(e,t));return(i[1]+i[2])/2})}function Ba(e){var n=re(e),r=fe(Ia(e,n),Aa(e,n)),t={},i;f(["u","d"],function(o){i=o==="u"?n:L(n).reverse(),f(["l","r"],function(s){s==="r"&&(i=w(i,function(h){return L(h).reverse()}));var u=(o==="u"?e.predecessors:e.successors).bind(e),d=Fa(e,i,r,u),c=Ma(e,i,d.root,d.align,s==="r");s==="r"&&(c=ne(c,function(h){return-h})),t[o+s]=c})});var a=$a(e,t);return Ra(t,a),ja(t,e.graph().align)}function Da(e,n,r){return function(t,i,a){var o=t.node(i),s=t.node(a),u=0,d;if(u+=o.width/2,g(o,"labelpos"))switch(o.labelpos.toLowerCase()){case"l":d=-o.width/2;break;case"r":d=o.width/2;break}if(d&&(u+=r?d:-d),d=0,u+=(o.dummy?n:e)/2,u+=(s.dummy?n:e)/2,u+=s.width/2,g(s,"labelpos"))switch(s.labelpos.toLowerCase()){case"l":d=s.width/2;break;case"r":d=-s.width/2;break}return d&&(u+=r?d:-d),d=0,u}}function Ga(e,n){return e.node(n).width}function Va(e){e=cn(e),Ya(e),qt(Ba(e),function(n,r){e.node(r).x=n})}function Ya(e){var n=re(e),r=e.graph().ranksep,t=0;f(n,function(i){var a=k(w(i,function(o){return e.node(o).height}));f(i,function(o){e.node(o).y=t+a/2}),t+=a+r})}function po(e,n){var r=n&&n.debugTiming?ji:Bi;r("layout",function(){var t=r("  buildLayoutGraph",function(){return eo(e)});r("  runLayout",function(){Ua(t,r)}),r("  updateInputGraph",function(){Wa(e,t)})})}function Ua(e,n){n("    makeSpaceForEdgeLabels",function(){no(e)}),n("    removeSelfEdges",function(){co(e)}),n("    acyclic",function(){Oi(e)}),n("    nestingGraph.run",function(){oa(e)}),n("    rank",function(){ta(cn(e))}),n("    injectEdgeLabelProxies",function(){ro(e)}),n("    removeEmptyRanks",function(){$i(e)}),n("    nestingGraph.cleanup",function(){da(e)}),n("    normalizeRanks",function(){Pi(e)}),n("    assignRankMinMax",function(){to(e)}),n("    removeEdgeLabelProxies",function(){io(e)}),n("    normalize.run",function(){Wi(e)}),n("    parentDummyChains",function(){La(e)}),n("    addBorderSegments",function(){Di(e)}),n("    order",function(){Ta(e)}),n("    insertSelfEdges",function(){ho(e)}),n("    adjustCoordinateSystem",function(){Gi(e)}),n("    position",function(){Va(e)}),n("    positionSelfEdges",function(){lo(e)}),n("    removeBorderNodes",function(){fo(e)}),n("    normalize.undo",function(){Hi(e)}),n("    fixupEdgeLabelCoords",function(){so(e)}),n("    undoCoordinateSystem",function(){Vi(e)}),n("    translateGraph",function(){ao(e)}),n("    assignNodeIntersects",function(){oo(e)}),n("    reversePoints",function(){uo(e)}),n("    acyclic.undo",function(){Fi(e)})}function Wa(e,n){f(e.nodes(),function(r){var t=e.node(r),i=n.node(r);t&&(t.x=i.x,t.y=i.y,n.children(r).length&&(t.width=i.width,t.height=i.height))}),f(e.edges(),function(r){var t=e.edge(r),i=n.edge(r);t.points=i.points,g(i,"x")&&(t.x=i.x,t.y=i.y)}),e.graph().width=n.graph().width,e.graph().height=n.graph().height}var qa=["nodesep","edgesep","ranksep","marginx","marginy"],Ha={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},Xa=["acyclicer","ranker","rankdir","align"],Ka=["width","height"],Za={width:0,height:0},za=["minlen","weight","width","height","labeloffset"],Ja={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},Qa=["labelpos"];function eo(e){var n=new T({multigraph:!0,compound:!0}),r=de(e.graph());return n.setGraph(fe({},Ha,ue(r,qa),z(r,Xa))),f(e.nodes(),function(t){var i=de(e.node(t));n.setNode(t,jt(ue(i,Ka),Za)),n.setParent(t,e.parent(t))}),f(e.edges(),function(t){var i=de(e.edge(t));n.setEdge(t,fe({},Ja,ue(i,za),z(i,Qa)))}),n}function no(e){var n=e.graph();n.ranksep/=2,f(e.edges(),function(r){var t=e.edge(r);t.minlen*=2,t.labelpos.toLowerCase()!=="c"&&(n.rankdir==="TB"||n.rankdir==="BT"?t.width+=t.labeloffset:t.height+=t.labeloffset)})}function ro(e){f(e.edges(),function(n){var r=e.edge(n);if(r.width&&r.height){var t=e.node(n.v),i=e.node(n.w),a={rank:(i.rank-t.rank)/2+t.rank,e:n};M(e,"edge-proxy",a,"_ep")}})}function to(e){var n=0;f(e.nodes(),function(r){var t=e.node(r);t.borderTop&&(t.minRank=e.node(t.borderTop).rank,t.maxRank=e.node(t.borderBottom).rank,n=k(n,t.maxRank))}),e.graph().maxRank=n}function io(e){f(e.nodes(),function(n){var r=e.node(n);r.dummy==="edge-proxy"&&(e.edge(r.e).labelRank=r.rank,e.removeNode(n))})}function ao(e){var n=Number.POSITIVE_INFINITY,r=0,t=Number.POSITIVE_INFINITY,i=0,a=e.graph(),o=a.marginx||0,s=a.marginy||0;function u(d){var c=d.x,h=d.y,l=d.width,v=d.height;n=Math.min(n,c-l/2),r=Math.max(r,c+l/2),t=Math.min(t,h-v/2),i=Math.max(i,h+v/2)}f(e.nodes(),function(d){u(e.node(d))}),f(e.edges(),function(d){var c=e.edge(d);g(c,"x")&&u(c)}),n-=o,t-=s,f(e.nodes(),function(d){var c=e.node(d);c.x-=n,c.y-=t}),f(e.edges(),function(d){var c=e.edge(d);f(c.points,function(h){h.x-=n,h.y-=t}),g(c,"x")&&(c.x-=n),g(c,"y")&&(c.y-=t)}),a.width=r-n+o,a.height=i-t+s}function oo(e){f(e.edges(),function(n){var r=e.edge(n),t=e.node(n.v),i=e.node(n.w),a,o;r.points?(a=r.points[0],o=r.points[r.points.length-1]):(r.points=[],a=i,o=t),r.points.unshift(Be(t,a)),r.points.push(Be(i,o))})}function so(e){f(e.edges(),function(n){var r=e.edge(n);if(g(r,"x"))switch((r.labelpos==="l"||r.labelpos==="r")&&(r.width-=r.labeloffset),r.labelpos){case"l":r.x-=r.width/2+r.labeloffset;break;case"r":r.x+=r.width/2+r.labeloffset;break}})}function uo(e){f(e.edges(),function(n){var r=e.edge(n);r.reversed&&r.points.reverse()})}function fo(e){f(e.nodes(),function(n){if(e.children(n).length){var r=e.node(n),t=e.node(r.borderTop),i=e.node(r.borderBottom),a=e.node(Z(r.borderLeft)),o=e.node(Z(r.borderRight));r.width=Math.abs(o.x-a.x),r.height=Math.abs(i.y-t.y),r.x=a.x+r.width/2,r.y=t.y+r.height/2}}),f(e.nodes(),function(n){e.node(n).dummy==="border"&&e.removeNode(n)})}function co(e){f(e.edges(),function(n){if(n.v===n.w){var r=e.node(n.v);r.selfEdges||(r.selfEdges=[]),r.selfEdges.push({e:n,label:e.edge(n)}),e.removeEdge(n)}})}function ho(e){var n=re(e);f(n,function(r){var t=0;f(r,function(i,a){var o=e.node(i);o.order=a+t,f(o.selfEdges,function(s){M(e,"selfedge",{width:s.label.width,height:s.label.height,rank:o.rank,order:a+ ++t,e:s.e,label:s.label},"_se")}),delete o.selfEdges})})}function lo(e){f(e.nodes(),function(n){var r=e.node(n);if(r.dummy==="selfedge"){var t=e.node(r.e.v),i=t.x+t.width/2,a=t.y,o=r.x-i,s=t.height/2;e.setEdge(r.e,r.label),e.removeNode(n),r.label.points=[{x:i+2*o/3,y:a-s},{x:i+5*o/6,y:a-s},{x:i+o,y:a},{x:i+5*o/6,y:a+s},{x:i+2*o/3,y:a+s}],r.label.x=r.x,r.label.y=r.y}})}function ue(e,n){return ne(z(e,n),Number)}function de(e){var n={};return f(e,function(r,t){n[t.toLowerCase()]=r}),n}export{T as G,W as b,jt as d,f,g as h,_ as i,po as l,z as p,S as r,Ee as u};
