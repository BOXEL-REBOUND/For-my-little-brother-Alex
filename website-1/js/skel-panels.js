skel.registerPlugin("panels",function(){var e="cache",t="activePanel",n="_skel_panels_close",r="pageWrapper",i="_skel_panels_translateOrigin",s="position",o="_skel_panels_resume",u="scrollTop",f="_skel_panels_translate",l="fixedWrapper",c="width",h="css",p="_skel_panels_suspend",d="originalEvent",v="config",m="_skel_panels_promote",g="stopPropagation",y="_skel_panels_demote",b="setTimeout",w="preventDefault",E="_skel_panels_resetForms",S="skel-panels-panel-position",x="left",T="height",N="_skel_panels_open",C="window",k="children",L=null,A="deviceType",O="_skel_panels_init",M="top",_="50%",D="scroll.lock",P="right",H="-webkit-tap-highlight-color",B="overflow-y",j="skel-panels-overlay-position",F="padding-bottom",I="z-index",q="vars",R="-webkit-overflow-scrolling",U="skel_panels_defaultWrapper",z='<div id="skel-panels-tmp-',W="recalcW",X="touches",V="-ms-autohiding-scrollbar",$="-webkit-",J="skel_panels_fixedWrapper",K="length",Q="bottom",G="registerLocation",Y="100%",Z=!1,et="orientationchange.lock",tt="_skel_panels_initializeCell",nt="isTouch",rt="overflow-x",it="attr",st="defaultWrapper",ot="-ms-overflow-style",ut="skel-panels-panel-",at="speed",ft="addClass",lt="iterate",ct="_skel_panels_expandCell",ht="#skel-panels-tmp-",pt="recalcH",dt="_skel_panels_scrollPos",vt="string",mt="auto",gt="rgba(0,0,0,0)",yt="-moz-",bt="touchstart.lock",wt="positions",Et="overlay",St=!0,xt="push",Tt="transformBreakpoints",Nt="visible",Ct="click",kt="resetScroll",Lt="initialized",At="unbind",Ot="-ms-",Mt="hidden",_t="appendTo",Dt="top-left",Pt="resetForms",Ht="unlockView",Bt="baseZIndex",jt="_skel_panels_xcss",Ft="resize.lock",It="touchstart",qt="click.lock",Rt="pointer",Ut="touchmove",zt="cell-size",Wt="overflow-",Xt="_zIndex",Vt="body",$t="-o-",Jt="0px",Kt="bind",Qt="relative",Gt="DOMReady",Yt="lockView",Zt="overlays",en="android",tn="find",nn="#",rn={config:{baseZIndex:1e4,useTransform:St,transformBreakpoints:L,speed:250,panels:{},overlays:{}},cache:{panels:{},overlays:{},body:L,window:L,pageWrapper:L,defaultWrapper:L,fixedWrapper:L,activePanel:L},eventType:Ct,positions:{panels:{top:[M,x],right:[M,P],bottom:[Q,x],left:[M,x]},overlays:{"top-left":{top:0,left:0},"top-right":{top:0,right:0},top:{top:0,left:_},"top-center":{top:0,left:_},"bottom-left":{bottom:0,left:0},"bottom-right":{bottom:0,right:0},bottom:{bottom:0,left:_},"bottom-center":{bottom:0,left:_},left:{top:_,left:0},"middle-left":{top:_,left:0},right:{top:_,right:0},"middle-right":{top:_,right:0}}},presets:{standard:{panels:{navPanel:{breakpoints:"mobile",position:x,style:xt,size:"80%",html:'<div data-action="navList" data-args="nav"></div>'}},overlays:{titleBar:{breakpoints:"mobile",position:Dt,width:Y,height:44,html:'<span class="toggle" data-action="togglePanel" data-args="navPanel"></span><span class="title" data-action="copyHTML" data-args="logo"></span>'}}}},defaults:{config:{panel:{breakpoints:"",position:L,style:L,size:"80%",html:"",resetScroll:St,resetForms:St,swipeToClose:St},overlay:{breakpoints:"",position:L,width:0,height:0,html:""}}},recalcW:function(e){var t=parseInt(e);return typeof e==vt&&e.charAt(e[K]-1)=="%"&&(t=Math.floor(jQuery(window)[c]()*(t/100))),t},recalcH:function(e){var t=parseInt(e);return typeof e==vt&&e.charAt(e[K]-1)=="%"&&(t=Math.floor(jQuery(window)[T]()*(t/100))),t},getHalf:function(e){var t=parseInt(e);return typeof e==vt&&e.charAt(e[K]-1)=="%"?Math.floor(t/2)+"%":Math.floor(t/2)+"px"},parseSuspend:function(e){var t=e.get(0);t[p]&&t[p]()},parseResume:function(e){var t=e.get(0);t[o]&&t[o]()},parseInit:function(r){var i,s,u=r.get(0),a=r[it]("data-action"),f=r[it]("data-args"),l,d;a&&f&&(f=f.split(","));switch(a){case"togglePanel":case"panelToggle":r[h](H,gt)[h]("cursor",Rt),i=function(r){r[w](),r[g]();if(rn[e][t])return rn[e][t][n](),Z;var i=jQuery(this),s=rn[e].panels[f[0]];s.is(":visible")?s[n]():s[N]()},rn._[q][A]==en||rn._[q][A]=="wp"?r[Kt](Ct,i):r[Kt](rn.eventType,i);break;case"navList":l=jQuery(nn+f[0]),i=l[tn]("a"),s=[],i.each(function(){var e=jQuery(this),t;t=Math.max(0,e.parents("li")[K]-1),s[xt]('<a class="link depth-'+t+'" href="'+e[it]("href")+'"><span class="indent-'+t+'"></span>'+e.text()+"</a>")}),s[K]>0&&r.html("<nav>"+s.join("")+"</nav>"),r[tn](".link")[h]("cursor",Rt)[h]("display","block");break;case"copyText":l=jQuery(nn+f[0]),r.html(l.text());break;case"copyHTML":l=jQuery(nn+f[0]),r.html(l.html());break;case"moveElementContents":l=jQuery(nn+f[0]),u[o]=function(){l[k]().each(function(){r.append(jQuery(this))})},u[p]=function(){r[k]().each(function(){l.append(jQuery(this))})},u[o]();break;case"moveElement":l=jQuery(nn+f[0]),u[o]=function(){jQuery(z+l[it]("id")+'" />').insertBefore(l),r.append(l)},u[p]=function(){jQuery(ht+l[it]("id")).replaceWith(l)},u[o]();break;case"moveCell":l=jQuery(nn+f[0]),d=jQuery(nn+f[1]),u[o]=function(){jQuery(z+l[it]("id")+'" />').insertBefore(l),r.append(l),l[h](c,mt),d&&d[ct]()},u[p]=function(){jQuery(ht+l[it]("id")).replaceWith(l),l[h](c,""),d&&d[h](c,"")},u[o]();break;default:}},lockView:function(i){rn[e][C][dt]=rn[e][C][u](),rn._[q][nt]&&rn[e][Vt][h](Wt+i,Mt),rn[e][r][Kt](bt,function(r){r[w](),r[g](),rn[e][t]&&rn[e][t][n]()}),rn[e][r][Kt](qt,function(r){r[w](),r[g](),rn[e][t]&&rn[e][t][n]()}),rn[e][r][Kt](D,function(r){r[w](),r[g](),rn[e][t]&&rn[e][t][n]()}),rn[e][C][Kt](et,function(r){rn[e][t]&&rn[e][t][n]()}),rn._[q][nt]||(rn[e][C][Kt](Ft,function(r){rn[e][t]&&rn[e][t][n]()}),rn[e][C][Kt](D,function(r){rn[e][t]&&rn[e][t][n]()}))},unlockView:function(t){rn._[q][nt]&&rn[e][Vt][h](Wt+t,Nt),rn[e][r][At](bt),rn[e][r][At](qt),rn[e][r][At](D),rn[e][C][At](et),rn._[q][nt]||(rn[e][C][At](Ft),rn[e][C][At](D))},resumeElement:function(t){var n=rn[e][t.type+"s"][t.id];n[tn]("*").each(function(){rn.parseResume(jQuery(this))})},suspendElement:function(t){var n=rn[e][t.type+"s"][t.id];n[i](),n[tn]("*").each(function(){rn.parseSuspend(jQuery(this))})},initElement:function(o){var a=o[v],p=jQuery(o.object),D;rn[e][o.type+"s"][o.id]=p,p[O](),p[tn]("*").each(function(){rn.parseInit(jQuery(this))});switch(o.type){case"panel":p[ft]("skel-panels-panel")[h](I,rn[v][Bt])[h](s,"fixed").hide(),p[tn]("a")[h](H,gt)[Kt]("click.skel-panels",function(r){var i=jQuery(this);if(rn[e][t]&&!i.hasClass("skel-panels-ignore")){r[w](),r[g]();var s=i[it]("href"),o=i[it]("target");rn[e][t][n](),i.hasClass("skel-panels-ignoreHref")||window[b](function(){o=="_blank"&&rn._[q][A]!="wp"?window.open(s):window.location.href=s},rn[v][at]+10)}}),rn._[q][A]=="ios"&&p[tn]("input,select,textarea").focus(function(n){var r=jQuery(this);n[w](),n[g](),window[b](function(){var n=rn[e][C][dt],i=rn[e][C][u]()-n;rn[e][C][u](n),rn[e][t][u](rn[e][t][u]()+i),r.hide(),window[b](function(){r.show()},0)},100)});switch(a[s]){case M:case Q:var F=a[s]==Q?"-":"";p[ft](ut+a[s]).data(S,a[s])[h](T,rn[pt](a.size))[u](0),rn._[q][nt]?p[h](B,"scroll")[h](ot,V)[h](R,"touch")[Kt](It,function(e){p._posY=e[d][X][0].pageY,p._posX=e[d][X][0].pageX})[Kt](Ut,function(e){var t=p._posX-e[d][X][0].pageX,n=p._posY-e[d][X][0].pageY,r=p.outerHeight(),i=p.get(0).scrollHeight-p[u]();if(p[u]()==0&&n<0||i>r-2&&i<r+2&&n>0)return Z}):p[h](B,mt);switch(a.style){case"reveal":case xt:default:p[N]=function(){p[m]()[u](0)[h](x,Jt)[h](a[s],"-"+rn[pt](a.size)+"px")[h](T,rn[pt](a.size))[h](c,Y).show(),a[kt]&&p[u](0),a[Pt]&&p[E](),rn[Yt]("y"),window[b](function(){p.add(rn[e][l][k]()).add(rn[e][r])[f](0,F+rn[pt](a.size)),rn[e][t]=p},100)},p[n]=function(){p[tn]("*").blur(),p.add(rn[e][r]).add(rn[e][l][k]())[i](),window[b](function(){rn[Ht]("y"),p[y]().hide(),rn[e][t]=L},rn[v][at]+50)}}break;case x:case P:var F=a[s]==P?"-":"";p[ft](ut+a[s]).data(S,a[s])[h](c,rn[W](a.size))[u](0),rn._[q][nt]?p[h](B,"scroll")[h](ot,V)[h](R,"touch")[Kt](It,function(e){p._posY=e[d][X][0].pageY,p._posX=e[d][X][0].pageX})[Kt](Ut,function(e){var t=p._posX-e[d][X][0].pageX,r=p._posY-e[d][X][0].pageY,i=p.outerHeight(),o=p.get(0).scrollHeight-p[u]();if(a.swipeToClose&&r<20&&r>-20&&(a[s]==x&&t>50||a[s]==P&&t<-50))return p[n](),Z;if(p[u]()==0&&r<0||o>i-2&&o<i+2&&r>0)return Z}):p[h](B,mt);switch(a.style){case xt:default:p[N]=function(){p[m]()[u](0)[h](M,Jt)[h](a[s],"-"+rn[W](a.size)+"px")[h](c,rn[W](a.size))[h](T,Y).show(),a[kt]&&p[u](0),a[Pt]&&p[E](),rn[Yt]("x"),window[b](function(){p.add(rn[e][l][k]()).add(rn[e][r])[f](F+rn[W](a.size),0),rn[e][t]=p},100)},p[n]=function(){p[tn]("*").blur(),p.add(rn[e][l][k]()).add(rn[e][r])[i](),window[b](function(){rn[Ht]("x"),p[y]().hide(),rn[e][t]=L},rn[v][at]+50)};break;case"reveal":p[N]=function(){rn[e][l][m](2),rn[e][r][m](1),p[u](0)[h](M,Jt)[h](a[s],Jt)[h](c,rn[W](a.size))[h](T,Y).show(),a[kt]&&p[u](0),a[Pt]&&p[E](),rn[Yt]("x"),window[b](function(){rn[e][r].add(rn[e][l][k]())[f](F+rn[W](a.size),0),rn[e][t]=p},100)},p[n]=function(){p[tn]("*").blur(),rn[e][r].add(rn[e][l][k]())[i](),window[b](function(){rn[Ht]("x"),p.hide(),rn[e][r][y](),rn[e][r][y](),rn[e][t]=L},rn[v][at]+50)}}break;default:}break;case Et:p[h](I,rn[v][Bt])[h](s,"fixed")[ft]("skel-panels-overlay"),p[h](c,a[c])[h](T,a[T]),(D=rn[wt][Zt][a[s]])||(a[s]=Dt,D=rn[wt][Zt][a[s]]),p[ft]("skel-panels-overlay-"+a[s]).data(j,a[s]),rn._[lt](D,function(e){p[h](e,D[e]),D[e]==_&&(e==M?p[h]("margin-top","-"+rn.getHalf(a[T])):e==x&&p[h]("margin-left","-"+rn.getHalf(a[c])))});break;default:}},initElements:function(e){var t,n,r,i,s=[],o;rn._[lt](rn[v][e+"s"],function(n){t={},rn._.extend(t,rn.defaults[v][e]),rn._.extend(t,rn[v][e+"s"][n]),rn[v][e+"s"][n]=t,r=rn._.newDiv(t.html),r.id=n,r.className="skel-panels-"+e,t.html||(s[n]=r),t.breakpoints?i=t.breakpoints.split(","):i=rn._.breakpointList,rn._[lt](i,function(s){var o=rn._.cacheBreakpointElement(i[s],n,r,e==Et?J:U,2);o[v]=t,o[Lt]=Z,o.type=e,o.onAttach=function(){this[Lt]?rn.resumeElement(this):(rn.initElement(this),this[Lt]=St)},o.onDetach=function(){rn.suspendElement(this)}})}),rn._[Gt](function(){var e,t,n;rn._[lt](s,function(n){e=jQuery(nn+n),t=jQuery(s[n]),e[k]()[_t](t),e.remove()})})},initJQueryUtilityFuncs:function(){jQuery.fn[m]=function(e){return this[Xt]=this[h](I),this[h](I,rn[v][Bt]+(e?e:1)),this},jQuery.fn[y]=function(){return this[Xt]&&(this[h](I,this[Xt]),this[Xt]=L),this},jQuery.fn._skel_panels_xcssValue=function(e,t){return jQuery(this)[h](e,t)[h](e,yt+t)[h](e,$+t)[h](e,$t+t)[h](e,Ot+t)},jQuery.fn._skel_panels_xcssProperty=function(e,t){return jQuery(this)[h](e,t)[h](yt+e,t)[h]($+e,t)[h]($t+e,t)[h](Ot+e,t)},jQuery.fn[jt]=function(e,t){return jQuery(this)[h](e,t)[h](yt+e,yt+t)[h]($+e,$+t)[h]($t+e,$t+t)[h](Ot+e,Ot+t)},jQuery.fn[E]=function(){var e=jQuery(this);return jQuery(this)[tn]("form").each(function(){this.reset()}),e},jQuery.fn[tt]=function(){var e=jQuery(this);e[it]("class").match(/(\s+|^)([0-9]+)u(\s+|$)/)&&e.data(zt,parseInt(RegExp.$2))},jQuery.fn[ct]=function(){var e=jQuery(this),t=e.parent(),n=12;t[k]().each(function(){var e=jQuery(this),t=e[it]("class");t&&t.match(/(\s+|^)([0-9]+)u(\s+|$)/)&&(n-=parseInt(RegExp.$2))}),n>0&&(e[tt](),e[h](c,(e.data(zt)+n)/12*100+"%"))};if(rn[v].useTransform&&rn._[q].IEVersion>=10&&(!rn[v][Tt]||rn._.hasActive(rn[v][Tt].split(","))))jQuery.fn[i]=function(){return jQuery(this)[f](0,0)},jQuery.fn[f]=function(e,t){return jQuery(this)[h]("transform","translate("+e+"px, "+t+"px)")},jQuery.fn[O]=function(){return jQuery(this)[h]("backface-visibility",Mt)[h]("perspective","500")[jt]("transition","transform "+rn[v][at]/1e3+"s ease-in-out")};else{var t,n=[];rn[e][C].resize(function(){if(rn[v][at]!=0){var e=rn[v][at];rn[v][at]=0,window[b](function(){rn[v][at]=e,n=[]},e)}}),jQuery.fn[i]=function(){for(var t=0;t<this[K];t++){var i=this[t],s=jQuery(i);n[i.id]&&s.animate(n[i.id],rn[v][at],"swing",function(){rn._[lt](n[i.id],function(e){s[h](e,n[i.id][e])}),rn[e][Vt][h](rt,Nt),rn[e][r][h](c,mt)[h](F,0)})}return jQuery(this)},jQuery.fn[f]=function(t,i){var o,u,f,l;t=parseInt(t),i=parseInt(i),t!=0?(rn[e][Vt][h](rt,Mt),rn[e][r][h](c,rn[e][C][c]())):f=function(){rn[e][Vt][h](rt,Nt),rn[e][r][h](c,mt)},i<0?rn[e][r][h](F,Math.abs(i)):l=function(){rn[e][r][h](F,0)};for(o=0;o<this[K];o++){var p=this[o],d=jQuery(p),m;if(!n[p.id])if(m=rn[wt][Zt][d.data(j)])n[p.id]=m;else if(m=rn[wt].panels[d.data(S)]){n[p.id]={};for(u=0;m[u];u++)n[p.id][m[u]]=parseInt(d[h](m[u]))}else m=d[s](),n[p.id]={top:m[M],left:m[x]};a={},rn._[lt](n[p.id],function(e){var r;switch(e){case M:r=rn[pt](n[p.id][e])+i;break;case Q:r=rn[pt](n[p.id][e])-i;break;case x:r=rn[W](n[p.id][e])+t;break;case P:r=rn[W](n[p.id][e])-t}a[e]=r}),d.animate(a,rn[v][at],"swing",function(){f&&f(),l&&l()})}return jQuery(this)},jQuery.fn[O]=function(){return jQuery(this)[h](s,"absolute")}}},initObjects:function(){rn[e][C]=jQuery(window),rn[e][C].load(function(){rn[e][C][u]()==0&&window.scrollTo(0,1)}),rn._[Gt](function(){rn[e][Vt]=jQuery(Vt),rn[e][Vt].wrapInner('<div id="skel-panels-pageWrapper" />'),rn[e][r]=jQuery("#skel-panels-pageWrapper"),rn[e][r][h](s,Qt)[h](x,"0")[h](P,"0")[h](M,"0")[O](),rn[e][st]=jQuery('<div id="skel-panels-defaultWrapper" />')[_t](rn[e][Vt]),rn[e][st][h](T,Y),rn[e][l]=jQuery('<div id="skel-panels-fixedWrapper" />')[_t](rn[e][Vt]),rn[e][l][h](s,Qt),jQuery(".skel-panels-fixed")[_t](rn[e][l]),rn._[G](U,rn[e][st][0]),rn._[G](J,rn[e][l][0]),rn._[G]("skel_panels_pageWrapper",rn[e][r][0]),jQuery("[autofocus]").focus()})},initIncludes:function(){rn._[Gt](function(){jQuery(".skel-panels-include").each(function(){rn.parseInit(jQuery(this))})})},init:function(){rn.eventType=rn._[q][nt]?"touchend":Ct;if(rn._[q][A]==en&&rn._[q].deviceVersion<4||rn._[q][A]=="wp")rn[v].useTransform=Z;rn.initObjects(),rn.initJQueryUtilityFuncs(),rn.initElements(Et),rn.initElements("panel"),rn.initIncludes(),rn._.updateState()}};return rn}());
