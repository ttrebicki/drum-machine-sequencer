(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{17:function(e,r,t){},24:function(e,r,t){},26:function(e,r,t){"use strict";t.r(r);var a=t(1),d=t(0),c=t.n(d),i=t(5),n=t.n(i),s=(t(17),t(4)),m=t(6),u=t.p+"static/media/kick.d0344def.wav",o=t.p+"static/media/hihat.ccd24c4d.wav",l=t.p+"static/media/hihat_o.6966be37.wav",j=t.p+"static/media/ride.e0b327a3.wav",b=t.p+"static/media/crash.ca0ea007.wav",p=t.p+"static/media/tom_1.9d94aac4.wav",y=t.p+"static/media/tom_2.c46e6ffc.wav",_=t.p+"static/media/snare_1.a2a1ab05.wav",h=t.p+"static/media/snare_2.7b098e83.wav",O=Object(m.b)({name:"drums",initialState:{value:0,drumHits:{Z:u,X:_,C:h,A:o,S:p,D:y,Q:l,W:b,E:j},currentKey:":: PRESS A KEY TO PLAY ::"},reducers:{playKey:function(e,r){var t=r.payload,a=document.getElementById(t),d=document.getElementById("drum-pad-"+t);r.payload&&a?(e.currentKey="Z"===t?"KICK":"X"===t?"SNARE_1":"C"===t?"SNARE_2":"A"===t?"HIHAT_CLOSED":"S"===t?"TOM_1":"D"===t?"TOM_2":"Q"===t?"HIHAT_OPEN":"W"===t?"CRASH":"E"===t?"RIDE":"KEY NOT ASSIGNED"+t,a.pause(),a.currentTime=0,a.play(),d.style.background="#f55",d.style.transform="rotate3d(1,1,1,180deg)",setTimeout((function(){d.style.background="",d.style.transform="rotate3d(1,1,1,360deg)"}),100)):console.log("key not assigned: "+t)}}}),w=O.actions.playKey,v=function(e){return function(r){return e.drums.drumHits[r]}},x=function(e){return e.drums.currentKey},K=O.reducer,f=t(3),H=t.n(f),E=function(e){var r=Object(s.b)();return Object(a.jsxs)("div",{id:"drum-pad-"+e.drumKey,className:"col-4 drum-pad "+H.a.drum_pad,onClick:function(t){r(w(e.drumKey,e.drumHit))},children:[e.drumKey,Object(a.jsx)("audio",{className:"clip "+H.a.clip,id:e.drumKey,src:e.drumHit})]})},N=function(){var e=Object(s.c)(x),r=Object(s.c)(v);return Object(a.jsxs)("div",{id:"drum-machine",className:H.a.drum_machine,children:[Object(a.jsx)("div",{className:"row "+H.a.drum_row,children:Object(a.jsx)("div",{id:"display",className:"col-12 "+H.a.display,children:e})}),Object(a.jsxs)("div",{className:"row "+H.a.drum_row,children:[Object(a.jsx)(E,{drumKey:"Q",drumHit:r("Q")}),Object(a.jsx)(E,{drumKey:"W",drumHit:r("W")}),Object(a.jsx)(E,{drumKey:"E",drumHit:r("E")})]}),Object(a.jsxs)("div",{className:"row "+H.a.drum_row,children:[Object(a.jsx)(E,{drumKey:"A",drumHit:r("A")}),Object(a.jsx)(E,{drumKey:"S",drumHit:r("S")}),Object(a.jsx)(E,{drumKey:"D",drumHit:r("D")})]}),Object(a.jsxs)("div",{className:"row "+H.a.drum_row,children:[Object(a.jsx)(E,{drumKey:"Z",drumHit:r("Z")}),Object(a.jsx)(E,{drumKey:"X",drumHit:r("X")}),Object(a.jsx)(E,{drumKey:"C",drumHit:r("C")})]})]})},S=(t(24),function(){var e=Object(s.b)();return Object(a.jsx)("div",{className:"App",onKeyDown:function(r){e(w(r.key.toUpperCase()))},tabIndex:"0",children:Object(a.jsx)(N,{})})}),A=Object(m.a)({reducer:{drums:K}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(25);n.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(s.a,{store:A,children:Object(a.jsx)(S,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},3:function(e,r,t){e.exports={display:"drumMachine_display__2E5YC",drum_machine:"drumMachine_drum_machine__73dWY",drum_row:"drumMachine_drum_row__1mC-r",drum_pad:"drumMachine_drum_pad__34C6h",clip:"drumMachine_clip__2HLrn"}}},[[26,1,2]]]);
//# sourceMappingURL=main.3731b81a.chunk.js.map