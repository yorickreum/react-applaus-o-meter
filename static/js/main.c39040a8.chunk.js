(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{201:function(e,t){},204:function(e,t,a){e.exports=a.p+"static/media/castle-gradient.0a33ba1b.svg"},231:function(e,t,a){e.exports=a(454)},443:function(e,t,a){},444:function(e,t,a){},454:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(14),o=a(20),i=a(19),c=a(21),l=a(1),s=a.n(l),m=a(17),u=a.n(m),p=a(185),d=a(60),v=a(38),h=a(23),f=a(56),g=a(43),b={dot:{textShadow:"0 0 8px #404040"}};var y=function(e){var t=e.isActive?"text-danger":"text-info";return s.a.createElement("span",{className:t,style:b.dot},"\u25c9")},E=a(10),w=a(22),O=a(123),C=a(187),k=a.n(C),I=a(116);var N=function(e,t,a){var n=a&&a.blacklist?a.blacklist:null,r=a&&a.whitelist?a.whitelist:null,o=a&&a.keyPrefix?a.keyPrefix:I.KEY_PREFIX,i=t.key;window.addEventListener("storage",function(t){if(t.key&&0===t.key.indexOf(o)){if(t.oldValue===t.newValue)return;var a=JSON.parse(t.newValue),c=Object.keys(a).reduce(function(e,t){return r&&-1===r.indexOf(t)?e:n&&-1!==n.indexOf(t)?e:(e[t]=JSON.parse(a[t]),e)},{});e.dispatch({key:i,payload:c,type:I.REHYDRATE})}},!1)};function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(a,!0).forEach(function(t){Object(h.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var S={control:{showBlank:!1},administration:{title:"Slammen im Schloss V",maxVol:1,duration:1e4},voting:{activeCompetitor:null,competitors:{byId:{},allIds:[]},calibrationCompetitors:{byId:{},allIds:[]},ratings:{}}},T=Object(w.c)({control:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S.control;switch((arguments.length>1?arguments[1]:void 0).type){case"SWITCH_BLANK":return j({},e,{showBlank:!e.showBlank});default:return e}},administration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S.administration,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TITLE":return j({},e,{title:t.title});case"SET_DURATION":return j({},e,{duration:t.duration});case"SET_MAXVOL":return j({},e,{maxVol:t.maxVol});default:return e}},voting:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S.voting,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_COMPETITOR":return j({},t,{activeCompetitor:t.activeCompetitor===a.competitorKey?null:t.activeCompetitor,competitors:{byId:j({},t.competitors.byId,Object(h.a)({},a.competitorKey,{name:a.competitorKey,isVisible:!0,startedRecording:null,stoppedRecording:null,levels:[],timeLefts:[],measureDuration:null,timeLeft:null,interval:null})),allIds:[].concat(Object(g.a)(t.competitors.allIds),[a.competitorKey])}});case"DELETE_COMPETITOR":var n=j({},t.competitors.byId);return n[a.competitorKey]=void 0,Object.keys(n).forEach(function(e){return void 0===n[e]?delete n[e]:""}),(e=j({},t.ratings))[a.competitorKey]=void 0,Object.keys(e).forEach(function(t){return void 0===e[t]?delete e[t]:""}),j({},t,{competitors:j({},t.competitors,{byId:j({},n),allIds:Object(g.a)(t.competitors.allIds.filter(function(e){return e!==a.competitorKey}))}),ratings:e});case"START_RECORDING":return j({},t,{activeCompetitor:a.competitorKey,competitors:j({},t.competitors,{byId:j({},t.competitors.byId,Object(h.a)({},a.competitorKey,j({},t.competitors.byId[a.competitorKey],{interval:a.interval,measureDuration:a.measureDuration,startedRecording:a.startedRecording})))})});case"RESET_COMPETITOR ":return(e=j({},t.ratings))[a.competitorKey]=void 0,Object.keys(e).forEach(function(t){return void 0===e[t]?delete e[t]:""}),j({},t,{activeCompetitor:t.activeCompetitor===a.competitorKey?null:t.activeCompetitor,competitors:j({},t.competitors,{byId:j({},t.competitors.byId,Object(h.a)({},a.competitorKey,j({},t.competitors.byId[a.competitorKey],{isVisible:!0,startedRecording:null,stoppedRecording:null,levels:[],timeLefts:[],measureDuration:null,timeLeft:null,interval:null})))}),ratings:e});case"SHOW_COMPETITOR":return j({},t,{competitors:j({},t.competitors,{byId:j({},t.competitors.byId,Object(h.a)({},a.competitorKey,j({},t.competitors.byId[a.competitorKey],{isVisible:!0})))})});case"HIDE_COMPETITOR":return j({},t,{competitors:j({},t.competitors,{byId:j({},t.competitors.byId,Object(h.a)({},a.competitorKey,j({},t.competitors.byId[a.competitorKey],{isVisible:!1})))})});case"SAVE_VALUE":return j({},t,{competitors:j({},t.competitors,{byId:j({},t.competitors.byId,Object(h.a)({},a.competitorKey,j({},t.competitors.byId[a.competitorKey],{timeLeft:a.timeLeft,levels:[].concat(Object(g.a)(t.competitors.byId[a.competitorKey].levels),[a.value]),timeLefts:[].concat(Object(g.a)(t.competitors.byId[a.competitorKey].timeLefts),[a.timeLeft])})))})});case"STOP_RECORDING":return j({},t,{activeCompetitor:null,competitors:j({},t.competitors,{byId:j({},t.competitors.byId,Object(h.a)({},a.competitorKey,j({},t.competitors.byId[a.competitorKey],{timeLeft:0,stoppedRecording:a.stoppedRecording})))})});case"UPDATE_RATING":return j({},t,{ratings:j({},t.ratings,Object(h.a)({},a.competitorKey,a.rating))});default:return t}}}),A=a(188),D={key:"root",storage:k.a},R=Object(O.a)(D,T),K=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||w.d,L=Object(w.e)(R,K(Object(w.a)(A.a)));N(L,D);var M=Object(O.b)(L);function V(){var e=L.getState().voting.competitors.allIds,t=null;return e[0]&&(t=e[0],e.forEach(function(e){_(e)>=_(t)&&(t=e)})),t&&0!==_(t)?t:null}function _(e){var t=L.getState().voting.competitors.byId[e];return 0===t.levels.length?0:P(t.levels.reduce(function(e,t){return e+t},0)/t.levels.length)}function P(e){var t=L.getState();if(e)return e/t.administration.maxVol}var F=function(){function e(t,a,r){Object(n.a)(this,e);var o=window.AudioContext||window.webkitAudioContext;window.audioContext=new o,window.processor=window.audioContext.createScriptProcessor(512),window.processor.onaudioprocess=this.volumeAudioProcess,window.processor.clipping=!1,window.processor.lastClip=0,window.processor.volume=0,window.processor.clipLevel=t||.98,window.processor.averaging=a||.95,window.processor.clipLag=r||750,window.processor.connect(window.audioContext.destination),window.processor.checkClipping=function(){return!!this.clipping&&(this.lastClip+this.clipLag<window.performance.now()&&(this.clipping=!1),this.clipping)},window.processor.shutdown=function(){this.disconnect(),this.onaudioprocess=null};try{navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia,navigator.getUserMedia({audio:{mandatory:{googEchoCancellation:"false",googAutoGainControl:"false",googNoiseSuppression:"false",googHighpassFilter:"false"},optional:[]}},this.gotStream,this.didntGetStream)}catch(i){console.log("getUserMedia threw exception :"+i)}}return Object(r.a)(e,[{key:"didntGetStream",value:function(){console.log("Stream generation failed.")}},{key:"gotStream",value:function(e){window.audioContext.createMediaStreamSource(e).connect(window.processor)}},{key:"volumeAudioProcess",value:function(e){for(var t,a=e.inputBuffer.getChannelData(0),n=0,r=0;r<a.length;r++)t=a[r],Math.abs(t)>=this.clipLevel&&(this.clipping=!0,this.lastClip=window.performance.now()),n+=t*t;var o=Math.sqrt(n/a.length);this.volume=Math.max(o,this.volume*this.averaging)}},{key:"getVolume",value:function(){return window.processor.volume}}]),e}(),B=function(e){return{type:"SHOW_COMPETITOR",competitorKey:e}},U=function(e){return{type:"HIDE_COMPETITOR",competitorKey:e}},H=function(e,t,a,n,r){return{type:"START_RECORDING",competitorKey:e,interval:t,duration:a,startedRecording:n,isActive:r}},W=new F,G=function(e){return function(t,a){var n=a(),r=n.voting.competitors.byId[e],o=r.interval,i=n.administration.duration-(Math.floor(Date.now())-r.startedRecording);if(i>0){var c=W.getVolume();t(X(e,c,i)),t(z(e,_(e)))}else{clearInterval(o);var l=Math.floor(Date.now());t(Y(e,l))}}},J=function(e){return function(e,t){var a=t();Object.keys(a.voting.ratings).forEach(function(t){e(z(t,_(t)))})}},X=function(e,t,a){return{type:"SAVE_VALUE",competitorKey:e,value:t,timeLeft:a}},z=function(e,t){return{type:"UPDATE_RATING",competitorKey:e,rating:t}},Y=function(e,t){return{type:"STOP_RECORDING",competitorKey:e,stoppedRecording:t}},Z=function(e){return{type:"SET_DURATION",duration:e}},q=function(e){return{type:"SET_MAXVOL",maxVol:e}},Q=a(34),$=a(198),ee=a.n($),te=a(457),ae=a(59),ne=a.n(ae),re=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).handleShow=function(){a.setState({showModal:!a.state.showModal})},a.changeVisibility=function(){var e=a.props.competitor;a.props.competitors.byId[e].isVisible?a.props.dispatch(U(e)):a.props.dispatch(B(e))},a.state={showModal:!1},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props.competitor,a=this.props.competitors.byId[t],n=[];return a.levels.forEach(function(e,t){n=[].concat(Object(g.a)(n),[{timeLeft:a.timeLefts[t],level:e}])}),s.a.createElement(s.a.Fragment,null,s.a.createElement("tr",{key:t,className:this.props.addClass},s.a.createElement("td",null,s.a.createElement(y,{isActive:t===this.props.activeCompetitor})),s.a.createElement("td",null,t),s.a.createElement("td",null,this.props.ratings&&this.props.ratings.hasOwnProperty(t)?this.props.ratings[t].toFixed(4):"\u2013"),s.a.createElement("td",null,a.timeLeft?(a.timeLeft/1e3).toFixed(3):"\u2013"),s.a.createElement("td",null,s.a.createElement(ne.a,null,s.a.createElement(ne.a.Check,{type:"checkbox",checked:a.isVisible,onChange:this.changeVisibility}))),s.a.createElement("td",null,this.props.ratings&&this.props.ratings.hasOwnProperty(t)?s.a.createElement(s.a.Fragment,null,s.a.createElement(ee.a,{variant:"info",onClick:this.handleShow},"Show Data"),s.a.createElement(te.a,{show:this.state.showModal,size:"xl",onHide:this.handleShow,width:900,centered:!0},s.a.createElement(te.a.Header,{closeButton:!0},s.a.createElement(te.a.Title,{style:{color:"black"}},"Data of ",a.name)),s.a.createElement(te.a.Body,null,s.a.createElement(Q.c,{width:"100%",height:400},s.a.createElement(Q.e,null,s.a.createElement(Q.a,{strokeDasharray:"1 1"}),s.a.createElement(Q.g,{dataKey:"timeLeft",name:"timeLeft"}),s.a.createElement(Q.h,{dataKey:"level",name:"level"}),s.a.createElement(Q.f,{cursor:{strokeDasharray:"3 3"}}),s.a.createElement(Q.d,{name:"Levels",data:n,fill:"#8884d8"}),s.a.createElement(Q.b,{y:_(t),stroke:"red"})))))):"\u2013"),s.a.createElement("td",null,s.a.createElement("input",{type:"button",className:"form-control btn btn-primary",value:"Start",onClick:function(){return e.props.dispatch(function(e){return function(t,a){var n=a();console.log(e+" starts measuring!"),console.log("duration: "+n.administration.duration);var r=Math.floor(Date.now()),o=parseInt(r,10),i=setInterval(function(){console.log("going to record value for: "+e),t(G(e))},10);t(H(e,i,n.administration.duration,o,!0))}}(t,e.props.measureDuration))}})),s.a.createElement("td",null,s.a.createElement("input",{type:"button",className:"form-control btn btn-warning",value:"Reset",onClick:function(){return e.props.dispatch(function(e){return clearInterval(L.getState().voting.competitors.byId[e].interval),{type:"RESET_COMPETITOR ",competitorKey:e}}(t))}})),s.a.createElement("td",null,s.a.createElement("input",{type:"button",className:"form-control btn btn-danger",value:"Delete",onClick:function(){return e.props.dispatch(function(e){return clearInterval(L.getState().voting.competitors.byId[e].interval),{type:"DELETE_COMPETITOR",competitorKey:e}}(t))}}))))}}]),t}(l.Component),oe=Object(E.b)(function(e){return{competitors:e.voting.competitors,activeCompetitor:e.voting.activeCompetitor,ratings:e.voting.ratings,measureDuration:e.administration.duration}})(re),ie=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,"Leading competitor is displayed red.",s.a.createElement("table",{className:"table table-dark   table-striped table-hover"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Status"),s.a.createElement("td",null,"Name"),s.a.createElement("td",null,"Rating"),s.a.createElement("td",null,"Time left"),s.a.createElement("td",null,"Visibility"),s.a.createElement("td",null,"Data"),s.a.createElement("td",null,"Start"),s.a.createElement("td",null,"Reset"),s.a.createElement("td",null,"Delete"))),s.a.createElement("tbody",null,this.props.competitors.byId&&Object.keys(this.props.competitors.byId).length>0&&Object.keys(this.props.competitors.byId).map(function(e){return s.a.createElement(s.a.Fragment,{key:e},s.a.createElement(oe,{competitor:e,addClass:e===V()?"text-danger":""}))}))))}}]),t}(l.Component),ce=Object(E.b)(function(e){return{competitors:e.voting.competitors}})(ie),le=a(201),se=a.n(le),me=a(83),ue=a.n(me),pe=new(function(){function e(){return Object(n.a)(this,e),e.instance||(this.reset(),e.instance=this),e.instance}return Object(r.a)(e,[{key:"reset",value:function(){this.competitors=[],this._duration=1e4,this.calibrationCompetitors=[],this.maxVol=1,this.stateCallbacks=[]}},{key:"addCompetitor",value:function(e){this.competitors.push(e)}},{key:"addCalibrationCompetitor",value:function(e){this.calibrationCompetitors.push(e)}},{key:"update",value:function(){this.stateCallbacks.forEach(function(e){e&&e()})}},{key:"isCompetitorNameAlreadyExists",value:function(e){var t=!1;return this.competitors.forEach(function(a){e===a.name&&(t=!0)}),t}},{key:"isCalibrationCompetitorNameAlreadyExists",value:function(e){var t=!1;return this.calibrationCompetitors.forEach(function(a){e===a.name&&(t=!0)}),t}},{key:"removeCompetitor",value:function(e){this.competitors.forEach(function(t,a,n){e===t&&n.splice(a,1)}),this.update()}},{key:"removeCalibrationCompetitor",value:function(e){this.calibrationCompetitors.forEach(function(t,a,n){e===t&&n.splice(a,1)}),this.update()}},{key:"getActiveCompetitor",value:function(){var e=null;return this.competitors.forEach(function(t){t.isActive&&(e=t)}),e}},{key:"getActiveCalibrationCompetitor",value:function(){var e=null;return this.calibrationCompetitors.forEach(function(t){t.isActive&&(e=t)}),e}},{key:"getLeader",value:function(){var e=null;return this.competitors[0]&&(e=this.competitors[0],this.competitors.forEach(function(t,a,n){t.rating>=e.rating&&(e=t)})),e&&0!==e.rating?e:null}},{key:"isCalibrating",value:function(){var e=!1;return this.calibrationCompetitors.forEach(function(t){t.isActive&&(e=!0)}),e}},{key:"dumpToLocalStorage",value:function(){localStorage.setItem("competition",JSON.stringify(this))}},{key:"getJsonDateUri",value:function(){var e=JSON.stringify(this,null,"\t");return"data:application/json;charset=utf-8,"+encodeURIComponent(e)}},{key:"reviveFromFileList",value:function(e){var t=e[0],a=new FileReader;a.onload=function(e){var t=JSON.parse(e.target.result);if(null!=t){var a=this.stateCallbacks;this.revive(t),this.dumpToLocalStorage(),this.stateCallbacks=a,this.update()}}.bind(this),a.readAsText(t)}},{key:"revive",value:function(e){var t=this;this.reset(),this._duration=e._duration,this.maxVol=e.maxVol,e.competitors.forEach(function(e){var a=new se.a;a.revive(e),t.addCompetitor(a)}),e.calibrationCompetitors.forEach(function(e){var a=new ue.a;a.revive(e),t.addCalibrationCompetitor(a)}),this.update()}},{key:"duration",get:function(){return this._duration},set:function(e){this._duration=parseInt(e,10)}}]),e}()),de=a(207),ve=(s.a.Component,function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).setDuration=function(){a.props.dispatch(Z(1e3*a.state.durationInput))},a.setMaxvol=function(){a.props.dispatch(q(parseFloat(a.state.maxVolInput.toString().replace(",",".")))),a.props.dispatch(J())},a.state={addCompetitorInput:"",addCalibrationCompetitorInput:"Calibration 1",durationInput:e.duration?e.duration/1e3:10,maxVolInput:e.maxVol},a.addCompetitor=a.addCompetitor.bind(Object(f.a)(a)),a.addCalibrationCompetitor=a.addCalibrationCompetitor.bind(Object(f.a)(a)),a.handleChange=a.handleChange.bind(Object(f.a)(a)),a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"keyboardFunction",value:function(e){71===e.keyCode&&this.setState({record:"def"})}},{key:"componentDidMount",value:function(){document.title="Admin | Applaus-O-Meter"}},{key:"componentDidUpdate",value:function(e,t){pe.dumpToLocalStorage()}},{key:"addCompetitor",value:function(e){e.preventDefault();var t=this.state.addCompetitorInput;""===t||function(e){var t=!1,a=L.getState().voting.competitors;for(var n in a)a.hasOwnProperty(n)&&e===n&&(t=!0);return t}(t)||this.props.dispatch({type:"ADD_COMPETITOR",competitorKey:t})}},{key:"addCalibrationCompetitor",value:function(e){e.preventDefault();var t=this.state.addCalibrationCompetitorInput;if(!this.state.competition.isCalibrationCompetitorNameAlreadyExists(t)&&""!==t){var a=this.state.competition;a.addCalibrationCompetitor(new ue.a(t)),this.setState({competition:a})}}},{key:"handleChange",value:function(e){this.setState(Object(h.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container-fluid p-5"},s.a.createElement("header",{className:"pb-4"},s.a.createElement("h2",null,"Welcome to Applaus-O-Meter administration"),s.a.createElement("p",null,"To get started, add some competitors."),s.a.createElement(d.b,{to:"/view",className:"btn btn-primary"},"Open view \u21e8")),s.a.createElement("div",{id:"control",className:"mt-4"},s.a.createElement("h3",null,"Control"),s.a.createElement(ne.a,null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-2"},s.a.createElement("label",{htmlFor:"showBlankInput"},"Show blank",s.a.createElement("br",null),"(currently ",this.props.showBlank?"yes":"no",")")),s.a.createElement("div",{className:"col-8"},s.a.createElement(ne.a.Check,{type:"checkbox",checked:this.props.showBlank,onChange:function(){return e.props.dispatch({type:"SWITCH_BLANK"})}}))))),s.a.createElement("div",{id:"competitors",className:"border border-secondary p-2 bg-primary rounded"},s.a.createElement("h3",null,"Competitors"),s.a.createElement("form",{className:"row form-group",onSubmit:function(e){e.preventDefault()}},s.a.createElement("div",{className:"col-10"},s.a.createElement("input",{type:"text",className:"form-control w-100",name:"addCompetitorInput",value:this.state.addCompetitorInput,placeholder:"Competitor name",onChange:this.handleChange})),s.a.createElement("div",{className:"col-2"},s.a.createElement("input",{type:"button",className:"form-control btn btn-success",value:"Add!",onClick:this.addCompetitor}))),s.a.createElement("div",null,s.a.createElement(ce,{competition:this.state.competition}))),s.a.createElement("div",{id:"settings",className:"mt-4"},s.a.createElement("h3",null,"Settings"),s.a.createElement("form",{className:"form-group",onSubmit:function(e){e.preventDefault()}},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-2"},s.a.createElement("label",{htmlFor:"durationInput"},"Duration in seconds",s.a.createElement("br",null),"(currently ",this.props.duration/1e3," s)")),s.a.createElement("div",{className:"col-8"},s.a.createElement("input",{type:"text",className:"form-control w-100",name:"durationInput",value:this.state.durationInput,placeholder:"duration",onChange:this.handleChange})),s.a.createElement("div",{className:"col-2"},s.a.createElement("input",{type:"button",className:"form-control btn btn-success",value:"Set!",onClick:this.setDuration}))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-2"},s.a.createElement("label",{htmlFor:"maxVolInput"},"Max volume for rating, in range [0;1]",s.a.createElement("br",null),"(currently: ",this.props.maxVol,")")),s.a.createElement("div",{className:"col-8"},s.a.createElement("input",{type:"text",className:"form-control w-100",name:"maxVolInput",value:this.state.maxVolInput,onChange:this.handleChange})),s.a.createElement("div",{className:"col-2"},s.a.createElement("input",{type:"button",className:"form-control btn btn-success",value:"Set!",onClick:this.setMaxvol}))))),s.a.createElement("div",null))}}]),t}(l.Component)),he=Object(E.b)(function(e){return{showBlank:e.control.showBlank,duration:e.administration.duration,maxVol:e.administration.maxVol}})(ve),fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ge(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(443);var be=a(203);var ye=Object(E.b)(function(e){return{competitors:e.voting.competitors.byId,ratings:e.voting.ratings,activeCompetitor:e.voting.activeCompetitor,duration:e.administration.duration}})(function(e){console.log("competitor: "+e.competitorKey),console.log("competitors: "),console.log(e.competitors);var t=e.competitors[e.competitorKey],a="text-primary",n="bg-info",r="text-secondary";V()===e.competitorKey&&(n="bg-success",a="text-secondary",r="text-secondary");var o=!1;t.stoppedRecording>Math.floor(Date.now())-1e3&&(o=!0);var i=s.a.createElement("div",{className:"card text-white text-center "+n},s.a.createElement("div",{className:"card-body"},s.a.createElement("div",null,s.a.createElement(y,{isActive:e.competitorKey===e.activeCompetitor})),s.a.createElement("h2",{className:"card-title "+a},t.name),s.a.createElement("div",{className:"card-text"},s.a.createElement("p",null,s.a.createElement("span",{className:"timeLeftText"},"Verbleibende Zeit:"),s.a.createElement("br",null),parseFloat((null!==t.timeLeft?t.timeLeft:e.duration)/1e3).toFixed(1)," Sekunden"),s.a.createElement("p",{className:"btn btn-primary ratingText "+r},"Wertung:\xa0",s.a.createElement("span",{className:"text-white"},e.ratings&&e.ratings.hasOwnProperty(e.competitorKey)?parseFloat(10*e.ratings[e.competitorKey]).toFixed(2):"\u2013")))));return t.isVisible?o?s.a.createElement("div",{className:"col-3",key:e.competitorKey},s.a.createElement(be.Wobble,null,i)):s.a.createElement("div",{className:"col-3",key:e.competitorKey},i):s.a.createElement(s.a.Fragment,null)});var Ee=Object(E.b)(function(e){return{competitorKeys:e.voting.competitors.allIds}})(function(e){return s.a.createElement("div",{id:"competitionCardContainer",className:"container-fluid px-5"},s.a.createElement("div",{className:"row justify-content-center"},e.competitorKeys.map(function(e){return s.a.createElement(ye,{key:e,competitorKey:e})})))}),we=(a(444),a(122)),Oe=a(204),Ce=a.n(Oe),ke=a(206),Ie=a.n(ke),Ne=a(205),xe=a.n(Ne),je=function(e){function t(e,a){var r;return Object(n.a)(this,t),(r=Object(o.a)(this,Object(i.a)(t).call(this,e,a))).checkRating=function(){if(r.props.isActive)r.state.interval&&clearInterval(r.state.interval),null!==r.state.interval&&r.props.rating!==r.state.rating&&r.setState({interval:null,rating:r.props.rating});else if(null===r.state.interval){var e=setInterval(function(){var e=r.volumemeter.getVolume();r.setState({rating:P(e)})},50);r.setState({interval:e})}},r.volumemeter=new F,r.state={interval:null,rating:0},r.checkRating(),r}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){this.checkRating()}},{key:"render",value:function(){var e=this.props.isActive,t=(parseFloat(this.props.rating),this.state.rating>0?786*-this.state.rating:0);return s.a.createElement("div",{className:"d-flex flex-column-reverse p-4"},s.a.createElement(xe.a,{numberOfPieces:e?void 0:5,width:this.props.width,height:this.props.height,gravity:e?this.state.rating:.01,wind:e?.5*this.state.rating:0,recycle:!0,canvasRef:void 0}),s.a.createElement(we.SvgLoader,{path:Ce.a,height:400,width:2e3},s.a.createElement(we.SvgProxy,{selector:"#clip-rect",transform:"translate(0 "+t+")"})))}}]),t}(l.Component);var Se=Object(E.b)(function(e){return{}})(function(e){var t=Ie()(),a=t.width,n=t.height;return s.a.createElement(je,Object.assign({width:a,height:n},e))});var Te=Object(E.b)(function(e){return{title:e.administration.title}})(function(e){return s.a.createElement("footer",{className:"container-fluid py-1 px-5 text-right"},"Applaus-O-Meter | ",e.title," | mail@yorickreum.de")}),Ae=a(84);var De=Object(E.b)(function(e){return{showBlank:e.control.showBlank,activeCompetitor:e.voting.activeCompetitor,ratings:e.voting.ratings}})(function(e){var t=0,a=!1,n=e.activeCompetitor;return n&&(a=!0,t=e.ratings[n]),s.a.createElement(s.a.Fragment,null,s.a.createElement(Ae.Helmet,null,s.a.createElement("title",null,"View | Applaus-O-Meter")),!e.showBlank&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{id:"frontend",className:"container-fluid py-2 rounded-0"},s.a.createElement("div",{id:"graphic",className:"d-flex justify-content-center"},s.a.createElement(Se,{isActive:a,rating:t})),s.a.createElement("div",{id:"information"},s.a.createElement(Ee,null))),s.a.createElement(Te,null)))});var Re=Object(E.b)(function(e){return{title:e.administration.title}})(function(e){return s.a.createElement("div",{className:"container-fluid pt-2"},s.a.createElement("h2",{className:"text-center text-warning"},"Applaus-O-Meter"),s.a.createElement("h1",{id:"mainHeading",className:"text-center text-white py-1"},e.title))}),Ke=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){document.title="Applaus-O-Meter"}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row justify-content-center"},s.a.createElement("div",{className:"col-4"},s.a.createElement("div",{className:"card h-100 text-white text-center bg-warning"},s.a.createElement("div",{className:"card-body py-5"},s.a.createElement("h2",{className:"card-title text-primary pb-3"},"Administration"),s.a.createElement("div",{className:"card-text"},s.a.createElement("ul",{className:"text-left"},s.a.createElement("li",null,"Teilnehmner anlegen und verwalten"),s.a.createElement("li",null,"Abstimmungen starten")),s.a.createElement(d.b,{to:"/admin",className:"btn btn-primary"},"Hier entlang \u21e8"))))),s.a.createElement("div",{className:"col-4"},s.a.createElement("div",{className:"card h-100 text-white text-center bg-warning"},s.a.createElement("div",{className:"card-body py-5"},s.a.createElement("h2",{className:"card-title text-primary pb-3"},"Abstimmung"),s.a.createElement("div",{className:"card-text"},s.a.createElement("p",null,"Zum Beispiel in neuem Fenster \xf6ffnen und auf Beamer zeigen."),s.a.createElement(d.b,{to:"/view",className:"btn btn-primary"},"Hier entlang \u21e8"))))))))}}]),t}(l.Component);u.a.render(s.a.createElement(E.a,{store:L},s.a.createElement(p.a,{loading:null,persistor:M},s.a.createElement(Ae.Helmet,null,s.a.createElement("meta",{charSet:"utf-8"}),s.a.createElement("title",null,"Applaus-O-Meter")),s.a.createElement(Re,null),s.a.createElement(d.a,null,s.a.createElement(v.c,null,s.a.createElement(v.a,{exact:!0,path:"/",component:Ke}),s.a.createElement(v.a,{path:"/admin",component:he}),s.a.createElement(v.a,{path:"/view",component:De}))))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-applaus-o-meter",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/react-applaus-o-meter","/service-worker.js");fe?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ge(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):ge(e)})}}()},83:function(e,t){}},[[231,1,2]]]);
//# sourceMappingURL=main.c39040a8.chunk.js.map