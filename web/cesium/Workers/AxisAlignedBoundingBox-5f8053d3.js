/*! For license information please see AxisAlignedBoundingBox-5f8053d3.js.LICENSE.txt */
define(["exports","./Matrix3-edb29a7e","./defaultValue-135942ca","./Transforms-3ea76111"],(function(e,n,t,i){"use strict";function a(e,i,a){this.minimum=n.Cartesian3.clone(t.defaultValue(e,n.Cartesian3.ZERO)),this.maximum=n.Cartesian3.clone(t.defaultValue(i,n.Cartesian3.ZERO)),a=t.defined(a)?n.Cartesian3.clone(a):n.Cartesian3.midpoint(this.minimum,this.maximum,new n.Cartesian3),this.center=a}a.fromCorners=function(e,i,m){return t.defined(m)||(m=new a),m.minimum=n.Cartesian3.clone(e,m.minimum),m.maximum=n.Cartesian3.clone(i,m.maximum),m.center=n.Cartesian3.midpoint(e,i,m.center),m},a.fromPoints=function(e,i){if(t.defined(i)||(i=new a),!t.defined(e)||0===e.length)return i.minimum=n.Cartesian3.clone(n.Cartesian3.ZERO,i.minimum),i.maximum=n.Cartesian3.clone(n.Cartesian3.ZERO,i.maximum),i.center=n.Cartesian3.clone(n.Cartesian3.ZERO,i.center),i;let m=e[0].x,r=e[0].y,s=e[0].z,u=e[0].x,c=e[0].y,o=e[0].z;const l=e.length;for(let n=1;n<l;n++){const t=e[n],i=t.x,a=t.y,l=t.z;m=Math.min(i,m),u=Math.max(i,u),r=Math.min(a,r),c=Math.max(a,c),s=Math.min(l,s),o=Math.max(l,o)}const C=i.minimum;C.x=m,C.y=r,C.z=s;const d=i.maximum;return d.x=u,d.y=c,d.z=o,i.center=n.Cartesian3.midpoint(C,d,i.center),i},a.clone=function(e,i){if(t.defined(e))return t.defined(i)?(i.minimum=n.Cartesian3.clone(e.minimum,i.minimum),i.maximum=n.Cartesian3.clone(e.maximum,i.maximum),i.center=n.Cartesian3.clone(e.center,i.center),i):new a(e.minimum,e.maximum,e.center)},a.equals=function(e,i){return e===i||t.defined(e)&&t.defined(i)&&n.Cartesian3.equals(e.center,i.center)&&n.Cartesian3.equals(e.minimum,i.minimum)&&n.Cartesian3.equals(e.maximum,i.maximum)};let m=new n.Cartesian3;a.intersectPlane=function(e,t){m=n.Cartesian3.subtract(e.maximum,e.minimum,m);const a=n.Cartesian3.multiplyByScalar(m,.5,m),r=t.normal,s=a.x*Math.abs(r.x)+a.y*Math.abs(r.y)+a.z*Math.abs(r.z),u=n.Cartesian3.dot(e.center,r)+t.distance;return u-s>0?i.Intersect.INSIDE:u+s<0?i.Intersect.OUTSIDE:i.Intersect.INTERSECTING},a.prototype.clone=function(e){return a.clone(this,e)},a.prototype.intersectPlane=function(e){return a.intersectPlane(this,e)},a.prototype.equals=function(e){return a.equals(this,e)},e.AxisAlignedBoundingBox=a}));