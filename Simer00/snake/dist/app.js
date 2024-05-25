!function(e){var t={};function i(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(s,r,function(t){return e[t]}.bind(null,r));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);class s{constructor(e,t,i){this.x=e,this.y=t,this.dir=i}collides(e){return this.xx==e.xx&&this.yy==e.yy}get xx(){return Math.round(this.x/scl)}get yy(){return Math.round(this.y/scl)}}class r{constructor(e,t,i,r){this.x=e,this.y=t,this.color=r,this.body=[],this.dir={x:0,y:0},this.newDir={x:0,y:0},this.greenFace=new Image,this.greenFace.src="images/head.png",this.redFace=new Image,this.redFace.src="images/redHead.png",this.face=this.greenFace;for(var n=0;n<i;n++)this.body.push(new s((this.x-n)*scl,this.y*scl,{x:1,y:0}))}update(){if(!this.isDead&&((keys.a||keys.arrowleft)&&0==this.dir.x&&(this.newDir.x=-1,this.newDir.y=0),(keys.d||keys.arrowright)&&0==this.dir.x&&(this.newDir.x=1,this.newDir.y=0),(keys.s||keys.arrowdown)&&0==this.dir.y&&(this.newDir.y=1,this.newDir.x=0),(keys.w||keys.arrowup)&&0==this.dir.y&&(this.newDir.y=-1,this.newDir.x=0),0!=this.dir.x||0!=this.dir.y||0!=this.newDir.x||0!=this.newDir.y)){if(0==(this.head.x/scl).toFixed(1).substr(-1)&&0==(this.head.y/scl).toFixed(1).substr(-1)){if(this.checkDeath()&&!this.isDead)return this.die();this.body[1].xx==this.head.xx+this.newDir.x&&this.body[1].yy==this.head.yy+this.newDir.y||(this.dir.x=this.newDir.x,this.dir.y=this.newDir.y,this.head.dir.x=this.dir.x,this.head.dir.y=this.dir.y);for(let e=this.length-1;e>0;e--)this.body[e].dir.x=(this.body[e-1].x-this.body[e].x)/scl,this.body[e].dir.y=(this.body[e-1].y-this.body[e].y)/scl}this.body.forEach(e=>{e.x+=e.dir.x*speed,e.y+=e.dir.y*speed})}}draw(e){this.body.forEach(t=>{e.fillStyle=this.color,e.fillRect(t.x,t.y,scl,scl),keys.shift&&(e.strokeStyle="red",e.strokeRect(t.xx*scl,t.yy*scl,scl,scl))}),e.drawImage(this.face,this.head.x,this.head.y,scl,scl)}appendNew(){let e=this.tail;this.body.push(new s(e.x,e.y,{x:0,y:0}))}checkDeath(){if(this.head.xx>=tileCount||this.head.yy>=tileCount||this.head.xx<0||this.head.yy<0)return!0;for(let e=1;e<this.length;e++)if(this.head.collides(this.body[e]))return!0;return!1}die(){this.isDead=!0;let e=this.color;this.color="red",this.face=this.redFace,setTimeout(()=>{this.color=e,this.face=this.greenFace,setTimeout(()=>{this.color="red",this.face=this.redFace},200)},200)}get length(){return this.body.length}get head(){return this.body[0]}get tail(){return this.body[this.body.length-1]}get xx(){return this.head.xx}get yy(){return this.head.yy}}class n{constructor(){return new Proxy(this,this)}get(e,t){try{return JSON.parse(localStorage.getItem(t))}catch(e){return console.warn("Unable to load value from localstorage"),null}}set(e,t,i){try{return localStorage.setItem(t,JSON.stringify(i)),!0}catch(e){return console.warn("Unable to store value to localstorage"),!1}}}class o{constructor(e,t,i){this.xx=e,this.yy=t,this.padding=i,this.p=i,this.color="red"}generateNew(){this.xx=Math.round(Math.random()*(tileCount-1)),this.yy=Math.round(Math.random()*(tileCount-1));let e=!1;snake.body.forEach(t=>{t.xx==this.xx&&this.yy==t.yy&&(e=!0)}),e?this.generateNew():this.p=scl/2}draw(e){e.fillStyle=this.color,e.fillRect(this.x+this.p,this.y+this.p,scl-2*this.p,scl-2*this.p),this.p>this.padding&&this.p--}get x(){return this.xx*scl}get y(){return this.yy*scl}}let h,a,d,l,c=0;window.tileCount=11,window.speed=7;function y(){l.fillStyle="black",l.fillRect(0,0,canvas.width,canvas.height),h.draw(l),snake.update(),snake.draw(l),l.font=1.5*scl+"px Arial",l.fillStyle="#fff",l.fillText(c,canvas.width/2-l.measureText(c).width/2,2.5*scl),l.font=.5*scl+"px Arial",l.fillStyle="#fff",l.fillText("High score: "+d,canvas.width/2-l.measureText("High score: "+d).width/2,3.5*scl),snake.head.collides(h)&&(h.generateNew(),snake.appendNew(),c++),c>d&&(d=c,a._hscore=d)}window.onload=function(){let e=document.querySelector("#canvas");l=e.getContext("2d"),a=new n,window.scl=e.width/tileCount,h=new o(6,Math.floor(tileCount/2),5),window.snake=new r(4,Math.floor(tileCount/2),3,"rgb(50, 255, 50)"),d=a._hscore||0,setInterval(y,1e3/90)},window.keys={},window.mouse={x:0,y:0,isDown:!1};document.addEventListener("keydown",e=>{snake.isDead&&window.location.reload(),keys[e.key.toLowerCase()]=!0}),document.addEventListener("keyup",e=>keys[e.key.toLowerCase()]=!1),document.addEventListener("mousedown",e=>mouse.isDown=!0),document.addEventListener("mouseup",e=>mouse.isDown=!1),document.addEventListener("mousemove",e=>{let t=canvas.getBoundingClientRect();[mouse.x,mouse.y]=[e.clientX-t.left,e.clientY-t.top]})}]);