(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{239:function(e,t){},242:function(e,t,a){e.exports=a.p+"static/media/castle.0543640b.svg"},269:function(e,t,a){e.exports=a(588)},580:function(e,t,a){},581:function(e,t,a){},588:function(e,t,a){"use strict";a.r(t);var n=a(14),o=a(15),i=a(23),r=a(22),c=a(24),l=a(1),s=a.n(l),m=a(18),u=a.n(m),p=a(223),d=a(61),v=a(38),h=a(19),f=a(58),b=a(47),g={dot:{textShadow:"0 0 8px #404040"}};var E=function(e){var t=e.isActive?"text-danger":"text-info";return s.a.createElement("span",{className:t,style:g.dot},"\u25c9")},y=a(11),O=a(25),w=a(145),C=a(225),j=a.n(C),k=a(136);var x=function(e,t,a){var n=a&&a.blacklist?a.blacklist:null,o=a&&a.whitelist?a.whitelist:null,i=a&&a.keyPrefix?a.keyPrefix:k.KEY_PREFIX,r=t.key;window.addEventListener("storage",function(t){if(t.key&&0===t.key.indexOf(i)){if(t.oldValue===t.newValue)return;var a=JSON.parse(t.newValue),c=Object.keys(a).reduce(function(e,t){return o&&-1===o.indexOf(t)?e:n&&-1!==n.indexOf(t)?e:(e[t]=JSON.parse(a[t]),e)},{});e.dispatch({key:r,payload:c,type:k.REHYDRATE})}},!1)},N=a(6),I=function(){function e(t,a,o){Object(n.a)(this,e);var i=window.AudioContext||window.webkitAudioContext;window.audioContext=new i,window.processor=window.audioContext.createScriptProcessor(512),window.processor.onaudioprocess=this.volumeAudioProcess,window.processor.clipping=!1,window.processor.lastClip=0,window.processor.volume=0,window.processor.clipLevel=t||.98,window.processor.averaging=a||.95,window.processor.clipLag=o||750,window.processor.connect(window.audioContext.destination),window.processor.checkClipping=function(){return!!this.clipping&&(this.lastClip+this.clipLag<window.performance.now()&&(this.clipping=!1),this.clipping)},window.processor.shutdown=function(){this.disconnect(),this.onaudioprocess=null};try{navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia,navigator.getUserMedia({audio:{mandatory:{googEchoCancellation:"false",googAutoGainControl:"false",googNoiseSuppression:"false",googHighpassFilter:"false"},optional:[]}},this.gotStream,this.didntGetStream)}catch(r){console.log("getUserMedia threw exception :"+r)}}return Object(o.a)(e,[{key:"didntGetStream",value:function(){console.log("Stream generation failed.")}},{key:"gotStream",value:function(e){window.audioContext.createMediaStreamSource(e).connect(window.processor)}},{key:"volumeAudioProcess",value:function(e){for(var t,a=e.inputBuffer.getChannelData(0),n=0,o=0;o<a.length;o++)t=a[o],Math.abs(t)>=this.clipLevel&&(this.clipping=!0,this.lastClip=window.performance.now()),n+=t*t;var i=Math.sqrt(n/a.length);this.volume=Math.max(i,this.volume*this.averaging)}},{key:"getVolume",value:function(){return window.processor.volume}}]),e}(),S={administration:{title:"Slammen im Schloss V",maxVol:1,duration:1e4},voting:{volumemeter:null,activeCompetitor:null,competitors:{byId:{},allIds:[]},calibrationCompetitors:{byId:{},allIds:[]},ratings:{}}},T=Object(O.c)({administration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S.administration,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TITLE":return Object(N.a)({},e,{title:t.title});case"SET_DURATION":return Object(N.a)({},e,{duration:t.duration});case"SET_MAXVOL":return Object(N.a)({},e,{maxVol:t.maxVol});default:return e}},voting:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S.voting,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_COMPETITOR":return Object(N.a)({},t,{activeCompetitor:t.activeCompetitor===a.competitorKey?null:t.activeCompetitor,competitors:{byId:Object(N.a)({},t.competitors.byId,Object(h.a)({},a.competitorKey,{name:a.competitorKey,isVisible:!0,startedRecording:null,stoppedRecording:null,levels:[],timeLefts:[],measureDuration:null,timeLeft:null,interval:null})),allIds:[].concat(Object(b.a)(t.competitors.allIds),[a.competitorKey])}});case"DELETE_COMPETITOR":var n=Object(N.a)({},t.competitors.byId);return n[a.competitorKey]=void 0,Object.keys(n).forEach(function(e){return void 0===n[e]?delete n[e]:""}),(e=Object(N.a)({},t.ratings))[a.competitorKey]=void 0,Object.keys(e).forEach(function(t){return void 0===e[t]?delete e[t]:""}),Object(N.a)({},t,{competitors:Object(N.a)({},t.competitors,{byId:Object(N.a)({},n),allIds:Object(b.a)(t.competitors.allIds.filter(function(e){return e!==a.competitorKey}))}),ratings:e});case"START_RECORDING":return Object(N.a)({},t,{volumemeter:new I,activeCompetitor:a.competitorKey,competitors:Object(N.a)({},t.competitors,{byId:Object(N.a)({},t.competitors.byId,Object(h.a)({},a.competitorKey,Object(N.a)({},t.competitors.byId[a.competitorKey],{interval:a.interval,measureDuration:a.measureDuration,startedRecording:a.startedRecording})))})});case"RESET_COMPETITOR ":return(e=Object(N.a)({},t.ratings))[a.competitorKey]=void 0,Object.keys(e).forEach(function(t){return void 0===e[t]?delete e[t]:""}),Object(N.a)({},t,{activeCompetitor:t.activeCompetitor===a.competitorKey?null:t.activeCompetitor,competitors:Object(N.a)({},t.competitors,{byId:Object(N.a)({},t.competitors.byId,Object(h.a)({},a.competitorKey,Object(N.a)({},t.competitors.byId[a.competitorKey],{isVisible:!0,startedRecording:null,stoppedRecording:null,levels:[],timeLefts:[],measureDuration:null,timeLeft:null,interval:null})))}),ratings:e});case"SHOW_COMPETITOR":return Object(N.a)({},t,{competitors:Object(N.a)({},t.competitors,{byId:Object(N.a)({},t.competitors.byId,Object(h.a)({},a.competitorKey,Object(N.a)({},t.competitors.byId[a.competitorKey],{isVisible:!0})))})});case"HIDE_COMPETITOR":return Object(N.a)({},t,{competitors:Object(N.a)({},t.competitors,{byId:Object(N.a)({},t.competitors.byId,Object(h.a)({},a.competitorKey,Object(N.a)({},t.competitors.byId[a.competitorKey],{isVisible:!1})))})});case"SAVE_VALUE":return Object(N.a)({},t,{competitors:Object(N.a)({},t.competitors,{byId:Object(N.a)({},t.competitors.byId,Object(h.a)({},a.competitorKey,Object(N.a)({},t.competitors.byId[a.competitorKey],{timeLeft:a.timeLeft,levels:[].concat(Object(b.a)(t.competitors.byId[a.competitorKey].levels),[a.value]),timeLefts:[].concat(Object(b.a)(t.competitors.byId[a.competitorKey].timeLefts),[a.timeLeft])})))})});case"STOP_RECORDING":return Object(N.a)({},t,{activeCompetitor:null,competitors:Object(N.a)({},t.competitors,{byId:Object(N.a)({},t.competitors.byId,Object(h.a)({},a.competitorKey,Object(N.a)({},t.competitors.byId[a.competitorKey],{timeLeft:0,stoppedRecording:a.stoppedRecording})))})});case"UPDATE_RATING":return Object(N.a)({},t,{ratings:Object(N.a)({},t.ratings,Object(h.a)({},a.competitorKey,a.rating))});default:return t}}}),A=a(226),R={key:"root",storage:j.a},D=Object(w.a)(R,T),K=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||O.d,L=Object(O.e)(D,K(Object(O.a)(A.a)));x(L,R);var M=Object(w.b)(L);function V(){var e=L.getState().voting.competitors.allIds,t=null;return e[0]&&(t=e[0],e.forEach(function(e){_(e)>=_(t)&&(t=e)})),t&&0!==_(t)?t:null}function _(e){var t=L.getState(),a=t.voting.competitors.byId[e];return 0===a.levels.length?0:a.levels.reduce(function(e,t){return e+t},0)/a.levels.length/t.administration.maxVol}var P=function(e){return{type:"SHOW_COMPETITOR",competitorKey:e}},F=function(e){return{type:"HIDE_COMPETITOR",competitorKey:e}},U=function(e,t,a,n,o){return{type:"START_RECORDING",competitorKey:e,interval:t,duration:a,startedRecording:n,isActive:o}},H=function(e){return function(t,a){var n=a(),o=n.voting.competitors.byId[e],i=o.interval,r=n.administration.duration-(Math.floor(Date.now())-o.startedRecording);if(r>0){var c=n.voting.volumemeter.getVolume();t(W(e,c,r)),t(B(e,_(e)))}else{clearInterval(i);var l=Math.floor(Date.now());t(J(e,l))}}},G=function(e){return function(e,t){var a=t();Object.keys(a.voting.ratings).forEach(function(t){e(B(t,_(t)))})}},W=function(e,t,a){return{type:"SAVE_VALUE",competitorKey:e,value:t,timeLeft:a}},B=function(e,t){return{type:"UPDATE_RATING",competitorKey:e,rating:t}},J=function(e,t){return{type:"STOP_RECORDING",competitorKey:e,stoppedRecording:t}},X=function(e){return{type:"SET_DURATION",duration:e}},z=function(e){return{type:"SET_MAXVOL",maxVol:e}},Z=a(34),Y=a(236),q=a.n(Y),Q=a(591),$=a(141),ee=a.n($),te=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).handleShow=function(){a.setState({showModal:!a.state.showModal})},a.changeVisibility=function(){var e=a.props.competitor;a.props.competitors.byId[e].isVisible?a.props.dispatch(F(e)):a.props.dispatch(P(e))},a.state={showModal:!1},a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.competitor,a=this.props.competitors.byId[t],n=[];return a.levels.forEach(function(e,t){n=[].concat(Object(b.a)(n),[{timeLeft:a.timeLefts[t],level:e}])}),s.a.createElement(s.a.Fragment,null,s.a.createElement("tr",{key:t,className:this.props.addClass},s.a.createElement("td",null,s.a.createElement(E,{isActive:t===this.props.activeCompetitor})),s.a.createElement("td",null,t),s.a.createElement("td",null,this.props.ratings&&this.props.ratings.hasOwnProperty(t)?this.props.ratings[t].toFixed(4):"\u2013"),s.a.createElement("td",null,a.timeLeft?(a.timeLeft/1e3).toFixed(3):"\u2013"),s.a.createElement("td",null,s.a.createElement(ee.a,null,s.a.createElement(ee.a.Check,{type:"checkbox",checked:a.isVisible,onClick:this.changeVisibility}))),s.a.createElement("td",null,this.props.ratings&&this.props.ratings.hasOwnProperty(t)?s.a.createElement(s.a.Fragment,null,s.a.createElement(q.a,{variant:"info",onClick:this.handleShow},"Show Data"),s.a.createElement(Q.a,{show:this.state.showModal,size:"xl",onHide:this.handleShow,width:900,centered:!0},s.a.createElement(Q.a.Header,{closeButton:!0},s.a.createElement(Q.a.Title,{style:{color:"black"}},"Data of ",a.name)),s.a.createElement(Q.a.Body,null,s.a.createElement(Z.c,{width:"100%",height:400},s.a.createElement(Z.e,null,s.a.createElement(Z.a,{strokeDasharray:"1 1"}),s.a.createElement(Z.g,{dataKey:"timeLeft",name:"timeLeft"}),s.a.createElement(Z.h,{dataKey:"level",name:"level"}),s.a.createElement(Z.f,{cursor:{strokeDasharray:"3 3"}}),s.a.createElement(Z.d,{name:"Levels",data:n,fill:"#8884d8"}),s.a.createElement(Z.b,{y:_(t),stroke:"red"})))))):"\u2013"),s.a.createElement("td",null,s.a.createElement("input",{type:"button",className:"form-control btn btn-primary",value:"Start",onClick:function(){return e.props.dispatch(function(e){return function(t,a){var n=a();console.log(e+" starts measuring!"),console.log("duration: "+n.administration.duration);var o=Math.floor(Date.now()),i=parseInt(o,10),r=setInterval(function(){console.log("going to record value for: "+e),t(H(e))},100);t(U(e,r,n.administration.duration,i,!0))}}(t,e.props.measureDuration))}})),s.a.createElement("td",null,s.a.createElement("input",{type:"button",className:"form-control btn btn-warning",value:"Reset",onClick:function(){return e.props.dispatch(function(e){return{type:"RESET_COMPETITOR ",competitorKey:e}}(t))}})),s.a.createElement("td",null,s.a.createElement("input",{type:"button",className:"form-control btn btn-danger",value:"Delete",onClick:function(){return e.props.dispatch(function(e){return{type:"DELETE_COMPETITOR",competitorKey:e}}(t))}}))))}}]),t}(l.Component),ae=Object(y.b)(function(e){return{competitors:e.voting.competitors,activeCompetitor:e.voting.activeCompetitor,ratings:e.voting.ratings,measureDuration:e.administration.duration}})(te),ne=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,"Leading competitor is displayed red.",s.a.createElement("table",{className:"table table-dark   table-striped table-hover"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Status"),s.a.createElement("td",null,"Name"),s.a.createElement("td",null,"Rating"),s.a.createElement("td",null,"Time left"),s.a.createElement("td",null,"Visibility"),s.a.createElement("td",null,"Data"),s.a.createElement("td",null,"Start"),s.a.createElement("td",null,"Reset"),s.a.createElement("td",null,"Delete"))),s.a.createElement("tbody",null,this.props.competitors.byId&&Object.keys(this.props.competitors.byId).length>0&&Object.keys(this.props.competitors.byId).map(function(e){return s.a.createElement(s.a.Fragment,{key:e},s.a.createElement(ae,{competitor:e,addClass:e===V()?"text-danger":""}))}))))}}]),t}(l.Component),oe=Object(y.b)(function(e){return{competitors:e.voting.competitors}})(ne),ie=a(239),re=a.n(ie),ce=a(93),le=a.n(ce),se=new(function(){function e(){return Object(n.a)(this,e),e.instance||(this.reset(),e.instance=this),e.instance}return Object(o.a)(e,[{key:"reset",value:function(){this.competitors=[],this._duration=1e4,this.calibrationCompetitors=[],this.maxVol=1,this.stateCallbacks=[]}},{key:"addCompetitor",value:function(e){this.competitors.push(e)}},{key:"addCalibrationCompetitor",value:function(e){this.calibrationCompetitors.push(e)}},{key:"update",value:function(){this.stateCallbacks.forEach(function(e){e&&e()})}},{key:"isCompetitorNameAlreadyExists",value:function(e){var t=!1;return this.competitors.forEach(function(a){e===a.name&&(t=!0)}),t}},{key:"isCalibrationCompetitorNameAlreadyExists",value:function(e){var t=!1;return this.calibrationCompetitors.forEach(function(a){e===a.name&&(t=!0)}),t}},{key:"removeCompetitor",value:function(e){this.competitors.forEach(function(t,a,n){e===t&&n.splice(a,1)}),this.update()}},{key:"removeCalibrationCompetitor",value:function(e){this.calibrationCompetitors.forEach(function(t,a,n){e===t&&n.splice(a,1)}),this.update()}},{key:"getActiveCompetitor",value:function(){var e=null;return this.competitors.forEach(function(t){t.isActive&&(e=t)}),e}},{key:"getActiveCalibrationCompetitor",value:function(){var e=null;return this.calibrationCompetitors.forEach(function(t){t.isActive&&(e=t)}),e}},{key:"getLeader",value:function(){var e=null;return this.competitors[0]&&(e=this.competitors[0],this.competitors.forEach(function(t,a,n){t.rating>=e.rating&&(e=t)})),e&&0!==e.rating?e:null}},{key:"isCalibrating",value:function(){var e=!1;return this.calibrationCompetitors.forEach(function(t){t.isActive&&(e=!0)}),e}},{key:"dumpToLocalStorage",value:function(){localStorage.setItem("competition",JSON.stringify(this))}},{key:"getJsonDateUri",value:function(){var e=JSON.stringify(this,null,"\t");return"data:application/json;charset=utf-8,"+encodeURIComponent(e)}},{key:"reviveFromFileList",value:function(e){var t=e[0],a=new FileReader;a.onload=function(e){var t=JSON.parse(e.target.result);if(null!=t){var a=this.stateCallbacks;this.revive(t),this.dumpToLocalStorage(),this.stateCallbacks=a,this.update()}}.bind(this),a.readAsText(t)}},{key:"revive",value:function(e){var t=this;this.reset(),this._duration=e._duration,this.maxVol=e.maxVol,e.competitors.forEach(function(e){var a=new re.a;a.revive(e),t.addCompetitor(a)}),e.calibrationCompetitors.forEach(function(e){var a=new le.a;a.revive(e),t.addCalibrationCompetitor(a)}),this.update()}},{key:"duration",get:function(){return this._duration},set:function(e){this._duration=parseInt(e,10)}}]),e}()),me=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).setDuration=function(){a.props.dispatch(X(1e3*a.state.durationInput))},a.setMaxvol=function(){a.props.dispatch(z(parseFloat(a.state.maxVolInput.toString().replace(",",".")))),a.props.dispatch(G())},a.state={addCompetitorInput:"",addCalibrationCompetitorInput:"Calibration 1",durationInput:e.duration?e.duration/1e3:10,maxVolInput:e.maxVol},a.addCompetitor=a.addCompetitor.bind(Object(f.a)(a)),a.addCalibrationCompetitor=a.addCalibrationCompetitor.bind(Object(f.a)(a)),a.handleChange=a.handleChange.bind(Object(f.a)(a)),a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"keyboardFunction",value:function(e){71===e.keyCode&&this.setState({record:"def"})}},{key:"componentDidMount",value:function(){document.title="Admin | Applaus-O-Meter"}},{key:"componentDidUpdate",value:function(e,t){se.dumpToLocalStorage()}},{key:"addCompetitor",value:function(e){e.preventDefault();var t=this.state.addCompetitorInput;""===t||function(e){var t=!1,a=L.getState().voting.competitors;for(var n in a)a.hasOwnProperty(n)&&e===n&&(t=!0);return t}(t)||this.props.dispatch({type:"ADD_COMPETITOR",competitorKey:t})}},{key:"addCalibrationCompetitor",value:function(e){e.preventDefault();var t=this.state.addCalibrationCompetitorInput;if(!this.state.competition.isCalibrationCompetitorNameAlreadyExists(t)&&""!==t){var a=this.state.competition;a.addCalibrationCompetitor(new le.a(t)),this.setState({competition:a})}}},{key:"handleChange",value:function(e){this.setState(Object(h.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return s.a.createElement("div",{className:"container-fluid p-5"},s.a.createElement("header",{className:"pb-4"},s.a.createElement("h2",null,"Welcome to Applaus-O-Meter administration"),s.a.createElement("p",null,"To get started, add some competitors."),s.a.createElement(d.b,{to:"/view",className:"btn btn-primary"},"Open view \u21e8")),s.a.createElement("div",{id:"settings"},s.a.createElement("h3",null,"Settings"),s.a.createElement("form",{className:"form-group",onSubmit:function(e){e.preventDefault()}},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-2"},s.a.createElement("label",{htmlFor:"durationInput"},"Duration in seconds",s.a.createElement("br",null),"(currently ",this.props.duration/1e3," s)")),s.a.createElement("div",{className:"col-8"},s.a.createElement("input",{type:"text",className:"form-control w-100",name:"durationInput",value:this.state.durationInput,placeholder:"duration",onChange:this.handleChange})),s.a.createElement("div",{className:"col-2"},s.a.createElement("input",{type:"button",className:"form-control btn btn-success",value:"Set!",onClick:this.setDuration}))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-2"},s.a.createElement("label",{htmlFor:"maxVolInput"},"Max volume for rating, in range [0;1]",s.a.createElement("br",null),"(currently: ",this.props.maxVol,")")),s.a.createElement("div",{className:"col-8"},s.a.createElement("input",{type:"text",className:"form-control w-100",name:"maxVolInput",value:this.state.maxVolInput,onChange:this.handleChange})),s.a.createElement("div",{className:"col-2"},s.a.createElement("input",{type:"button",className:"form-control btn btn-success",value:"Set!",onClick:this.setMaxvol}))))),s.a.createElement("div",{id:"competitors",className:"border border-secondary p-2 bg-primary rounded"},s.a.createElement("h3",null,"Competitors"),s.a.createElement("form",{className:"row form-group",onSubmit:function(e){e.preventDefault()}},s.a.createElement("div",{className:"col-10"},s.a.createElement("input",{type:"text",className:"form-control w-100",name:"addCompetitorInput",value:this.state.addCompetitorInput,placeholder:"Competitor name",onChange:this.handleChange})),s.a.createElement("div",{className:"col-2"},s.a.createElement("input",{type:"button",className:"form-control btn btn-success",value:"Add!",onClick:this.addCompetitor}))),s.a.createElement("div",null,s.a.createElement(oe,{competition:this.state.competition}))),s.a.createElement("div",null))}}]),t}(l.Component),ue=Object(y.b)(function(e){return{duration:e.administration.duration,maxVol:e.administration.maxVol}})(me),pe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function de(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(580);var ve=a(241);var he=Object(y.b)(function(e){return{competitors:e.voting.competitors.byId,ratings:e.voting.ratings,activeCompetitor:e.voting.activeCompetitor,duration:e.administration.duration}})(function(e){console.log("competitor: "+e.competitorKey),console.log("competitors: "),console.log(e.competitors);var t=e.competitors[e.competitorKey],a="text-primary",n="bg-info",o="text-secondary";V()===e.competitorKey&&(n="bg-success",a="text-secondary",o="text-secondary");var i=!1;t.stoppedRecording>Math.floor(Date.now())-1e3&&(i=!0);var r=s.a.createElement("div",{className:"card text-white text-center "+n},s.a.createElement("div",{className:"card-body"},s.a.createElement("div",null,s.a.createElement(E,{isActive:e.competitorKey===e.activeCompetitor})),s.a.createElement("h2",{className:"card-title "+a},t.name),s.a.createElement("div",{className:"card-text"},s.a.createElement("p",null,s.a.createElement("span",{className:"timeLeftText"},"Verbleibende Zeit:"),s.a.createElement("br",null),parseFloat((null!==t.timeLeft?t.timeLeft:e.duration)/1e3).toFixed(1)," Sekunden"),s.a.createElement("p",{className:"btn btn-primary ratingText "+o},"Wertung:\xa0",s.a.createElement("span",{className:"text-white"},e.ratings&&e.ratings.hasOwnProperty(e.competitorKey)?parseFloat(10*e.ratings[e.competitorKey]).toFixed(2):"\u2013")))));return t.isVisible?i?s.a.createElement("div",{className:"col-3",key:e.competitorKey},s.a.createElement(ve.Wobble,null,r)):s.a.createElement("div",{className:"col-3",key:e.competitorKey},r):s.a.createElement(s.a.Fragment,null)});var fe=Object(y.b)(function(e){return{competitorKeys:e.voting.competitors.allIds}})(function(e){return s.a.createElement("div",{id:"competitionCardContainer",className:"container-fluid px-5"},s.a.createElement("div",{className:"row justify-content-center"},e.competitorKeys.map(function(e){return s.a.createElement(he,{key:e,competitorKey:e})})))});function be(e){var t=e.competitor,a="bg-info";return e.competition.getLeader()===t&&(a="bg-success"),s.a.createElement("div",{className:"col-3",key:t.name},s.a.createElement("div",{className:"card text-white text-center "+a},s.a.createElement("div",{className:"card-body"},s.a.createElement("div",null,s.a.createElement(E,{isActive:t.isActive})),s.a.createElement("h2",{className:"card-title text-primary"},t.name),s.a.createElement("div",{className:"card-text"},s.a.createElement("p",{className:"h2"},"Verbleibende Zeit:",s.a.createElement("br",null),parseFloat(t.timeLeft/1e3).toFixed(1)," Sekunden"),s.a.createElement("p",{className:"h2"},"Maximum: ",parseFloat(t.getMax()).toFixed(2))))))}var ge=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{id:"competitionCardContainer",className:"container-fluid"},s.a.createElement("div",{className:"row justify-content-center"},s.a.createElement("h3",{className:"bg-danger text-white text-center w-100 p-2"},"CALIBRATION"),this.props.competition.calibrationCompetitors.map(function(t){return s.a.createElement(be,{competition:e.props.competition,competitor:t})})))}}]),t}(l.Component),Ee=(a(581),a(144)),ye=a(242),Oe=a.n(ye),we=a(244),Ce=a.n(we),je=a(243),ke=a.n(je);var xe=function(e){var t=Ce()(),a=t.width,n=t.height,o=e.isActive,i=90*-parseFloat(e.rating)-45;return s.a.createElement("div",{className:"d-flex flex-column-reverse p-4"},s.a.createElement(ke.a,{numberOfPieces:o?void 0:5,width:a,height:n,gravity:o?e.rating:.01,wind:.5*e.rating,recycle:!0,canvasRef:void 0}),s.a.createElement(Ee.SvgLoader,{path:Oe.a,height:400,width:2e3},s.a.createElement(Ee.SvgProxy,{selector:"#rotmeter",transform:"rotate("+i+" 565.9 124)"})))},Ne=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={isCalibrating:!1,rating:0},a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){document.title="View | Applaus-O-Meter"}},{key:"render",value:function(){var e=0,t=!1,a=this.props.activeCompetitor;return a&&(t=!0,e=this.props.ratings[a]),s.a.createElement("div",{id:"frontend",className:"container-fluid py-2 rounded-0"},s.a.createElement("div",{id:"graphic",className:"d-flex justify-content-center"},s.a.createElement(xe,{isActive:t,rating:e})),s.a.createElement("div",{id:"information"},this.state.isCalibrating?s.a.createElement(ge,null):s.a.createElement(fe,null)))}}]),t}(l.Component),Ie=Object(y.b)(function(e){return{activeCompetitor:e.voting.activeCompetitor,ratings:e.voting.ratings}})(Ne);var Se=Object(y.b)(function(e){return{title:e.administration.title}})(function(e){return s.a.createElement("div",{className:"container-fluid pt-2"},s.a.createElement("h2",{className:"text-center text-warning"},"Applaus-O-Meter"),s.a.createElement("h1",{id:"mainHeading",className:"text-center text-white py-1"},e.title))});var Te=Object(y.b)(function(e){return{title:e.administration.title}})(function(e){return s.a.createElement("footer",{className:"container-fluid py-1 px-5 text-right"},"Applaus-O-Meter | ",e.title," | mail@yorickreum.de")}),Ae=a(245),Re=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){document.title="Applaus-O-Meter"}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row justify-content-center"},s.a.createElement("div",{className:"col-4"},s.a.createElement("div",{className:"card h-100 text-white text-center bg-warning"},s.a.createElement("div",{className:"card-body py-5"},s.a.createElement("h2",{className:"card-title text-primary pb-3"},"Administration"),s.a.createElement("div",{className:"card-text"},s.a.createElement("ul",{className:"text-left"},s.a.createElement("li",null,"Teilnehmner anlegen und verwalten"),s.a.createElement("li",null,"Abstimmungen starten")),s.a.createElement(d.b,{to:"/admin",className:"btn btn-primary"},"Hier entlang \u21e8"))))),s.a.createElement("div",{className:"col-4"},s.a.createElement("div",{className:"card h-100 text-white text-center bg-warning"},s.a.createElement("div",{className:"card-body py-5"},s.a.createElement("h2",{className:"card-title text-primary pb-3"},"Abstimmung"),s.a.createElement("div",{className:"card-text"},s.a.createElement("p",null,"Zum Beispiel in neuem Fenster \xf6ffnen und auf Beamer zeigen."),s.a.createElement(d.b,{to:"/view",className:"btn btn-primary"},"Hier entlang \u21e8"))))))))}}]),t}(l.Component);u.a.render(s.a.createElement(y.a,{store:L},s.a.createElement(p.a,{loading:null,persistor:M},s.a.createElement(Ae.Helmet,null,s.a.createElement("meta",{charSet:"utf-8"}),s.a.createElement("title",null,"Applaus-O-Meter")),s.a.createElement(Se,null),s.a.createElement(d.a,null,s.a.createElement(v.c,null,s.a.createElement(v.a,{exact:!0,path:"/",component:Re}),s.a.createElement(v.a,{path:"/admin",component:ue}),s.a.createElement(v.a,{path:"/view",component:Ie}))),s.a.createElement(Te,null))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-applaus-o-meter",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/react-applaus-o-meter","/service-worker.js");pe?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):de(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):de(e)})}}()},93:function(e,t){}},[[269,1,2]]]);
//# sourceMappingURL=main.f7f47629.chunk.js.map