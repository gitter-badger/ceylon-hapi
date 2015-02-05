(function(define) { define(function(require, ex$, module) {

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('io/node/hapi/0.0.1/io.node.hapi-0.0.1-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$18j=require('ceylon/language/1.1.0/ceylon.language-1.1.0');
m$18j.$addmod$(m$18j,'ceylon.language/1.1.0');
m$18j.$addmod$(ex$,'io.node.hapi/0.0.1');

//MethodDef run at run.ceylon (1:0-22:0)
function run(){
    
    //AttributeDecl server at run.ceylon (3:1-3:36)
    var $18k=getHapi().createServer();
    $18k.connection(getServerOptions());
    $18k.start(m$18j.$JsCallable((function($18l){
        /*BEG dynblock*/
        (typeof console==='undefined'||console===null?m$18j.throwexc(m$18j.Exception("Undefined or null reference: console"),'9:3-9:9','run.ceylon'):console).log("Server running at:",$18k.info.uri);
        /*END dynblock*/
    }),[{nm:'error',mt:'prm',$t:{t:m$18j.$_Object}}],{Arguments$Callable:{t:'T',l:[{t:m$18j.$_Object}]},Return$Callable:{t:m$18j.Anything}}));
    ($18m="GET",$18n="/",$18o=(function($18p,$18q){
        /*BEG dynblock*/
        (typeof console==='undefined'||console===null?m$18j.throwexc(m$18j.Exception("Undefined or null reference: console"),'18:4-18:10','run.ceylon'):console).log("GET request for / recieved");
        /*END dynblock*/
    }),($18r=$18k,m$18j.JsCallable($18r,m$18j.nn$($18r)?$18r.route:null))($18m,$18n,$18o));
    var $18m,$18n,$18o,$18r;
}
ex$.run=run;
run.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$18j.Anything},ps:[],pa:1,an:function(){return[m$18j.doc$($CCMM$,'io.node.hapi:run')];},d:['io.node.hapi','run']};};
ex$.$pkg$ans$io$node$hapi=function(){return[m$18j.shared()];};
ex$.$mod$ans$=[];

//ObjectDef hapi at hapi.ceylon (1:0-8:0)
function $18s(){
    var hapi$=new $18s.$$;
    return hapi$;
};$18s.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$18j.Basic},pa:1,d:['io.node.hapi','hapi']};};
function $init$getHapi(){
    if($18s.$$===undefined){
        m$18j.initTypeProto($18s,'io.node.hapi::hapi',m$18j.Basic);
        (function(hapi$){
            
            //MethodDef createServer at hapi.ceylon (3:1-5:1)
            hapi$.createServer=function(){
                var hapi$=this;
                return Server();
            };hapi$.createServer.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Server},ps:[],$cont:$18s,pa:1,d:['io.node.hapi','hapi','$m','createServer']};};
        })($18s.$$.prototype);
    }
    return $18s;
}
ex$.$init$getHapi=$init$getHapi;
$init$getHapi();
var $18t;
function getHapi(){
    if($18t===m$18j.INIT$)m$18j.throwexc(m$18j.InitializationError("Cyclic initialization trying to read the value of \'hapi\' before it was set"),'1:0-8:0','hapi.ceylon');
    if($18t===undefined){$18t=m$18j.INIT$;$18t=$init$getHapi()();$18t.$crtmm$=getHapi.$crtmm$;}
    return $18t;
}
ex$.getHapi=getHapi;
getHapi.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$18s},pa:1,d:['io.node.hapi','hapi']};};
$prop$getHapi={get:getHapi,$crtmm$:getHapi.$crtmm$};
getHapi=getHapi;$prop$getHapi=getHapi;
ex$.$prop$getHapi=$prop$getHapi;

//ClassDef Server at Server.ceylon (1:0-42:0)
function Server(server$){
    $init$Server();
    if(server$===undefined)server$=new Server.$$;
    
    //AttributeDecl _server at Server.ceylon (3:1-3:30)
    server$.$prop$get$18u={$crtmm$:function(){return{mod:$CCMM$,$t:{t:hapiServer},$cont:Server,pa:1027,d:['io.node.hapi','Server','$at','_server$vgg11l']};}};
    server$.$prop$get$18u.get=function(){return $18u};
    /*BEG dynblock*/
    
    //AttributeDecl hapi at Server.ceylon (6:2-6:32)
    var $18v=(typeof require==='undefined'||require===null?m$18j.throwexc(m$18j.Exception("Undefined or null reference: require"),'6:17-6:23','Server.ceylon'):require)("hapi");
    $prop$get$18v={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$18j.Anything},$cont:Server,d:['io.node.hapi','Server','$at','hapi$xb8l1a']};}};
    $prop$get$18v.get=function(){return $18v};
    (typeof global==='undefined'||global===null?m$18j.throwexc(m$18j.Exception("Undefined or null reference: global"),'7:2-7:7','Server.ceylon'):global).HapiServer=$18v.Server;
    server$.$18u=m$18j.dre$$(($18w=(typeof HapiServer==='undefined'?m$18j.throwexc(m$18j.Exception("Undefined type HapiServer"),'8:12-8:21','Server.ceylon'):HapiServer),$18w.$$===undefined?new $18w():$18w()),{t:hapiServer},'Server.ceylon 8:12-8:23');/*END dynblock*/
    return server$;
}
Server.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$18j.Basic},ps:[],pa:1,d:['io.node.hapi','Server']};};
ex$.Server=Server;
function $init$Server(){
    if(Server.$$===undefined){
        m$18j.initTypeProto(Server,'io.node.hapi::Server',m$18j.Basic);
        (function(server$){
            
            //AttributeDecl _server at Server.ceylon (3:1-3:30)
            m$18j.atr$(server$,'$18u',function(){return this.$18u_;},function($18x){return this.$18u_=$18x;},function(){return{mod:$CCMM$,$t:{t:hapiServer},$cont:Server,pa:1027,d:['io.node.hapi','Server','$at','_server$vgg11l']};});
            
            //MethodDef connection at Server.ceylon (11:1-17:1)
            server$.connection=function($18y){
                var server$=this;
                /*BEG dynblock*/
                server$.$18u.connection({port:$18y.port});
                /*END dynblock*/
            };server$.connection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$18j.Anything},ps:[{nm:'options',mt:'prm',$t:{t:ServerOptions}}],$cont:Server,pa:1,d:['io.node.hapi','Server','$m','connection']};};
            
            //AttributeGetterDef info at Server.ceylon (19:1-21:2)
            m$18j.atr$(server$,'info',function(){
                var server$=this;
                /*BEG dynblock*/
                return server$.$18u.info;
                /*END dynblock*/
            },undefined,function(){return{mod:$CCMM$,$t:{t:ServerInfo},$cont:Server,pa:1,d:['io.node.hapi','Server','$at','info']};});
            //MethodDef start at Server.ceylon (23:1-27:1)
            server$.start=function($18z){
                var server$=this;
                server$.$18u.start(m$18j.$JsCallable((function($190){
                    $18z($190);
                }),[{nm:'error',mt:'prm',$t:{t:m$18j.$_Object}}],{Arguments$Callable:{t:'T',l:[{t:m$18j.$_Object}]},Return$Callable:{t:m$18j.Anything}}));
            };server$.start.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$18j.Anything},ps:[{nm:'callback',mt:'prm',$t:{t:m$18j.Callable,a:{Arguments$Callable:{t:'T',l:[{$t:{t:m$18j.$_Object}}]},Return$Callable:{t:m$18j.Anything}}}}],$cont:Server,pa:1,d:['io.node.hapi','Server','$m','start']};};
            
            //MethodDef route at Server.ceylon (29:1-40:1)
            server$.route=function($191,$192,$193){
                var server$=this;
                /*BEG dynblock*/
                server$.$18u.route({method:$191,path:$192,handler:$193});
                /*END dynblock*/
            };server$.route.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$18j.Anything},ps:[{nm:'method',mt:'prm',$t:{t:m$18j.$_String}},{nm:'path',mt:'prm',$t:{t:m$18j.$_String}},{nm:'handler',mt:'prm',$t:{t:m$18j.Callable,a:{Arguments$Callable:{t:'T',l:[{$t:{t:m$18j.$_Object}},{$t:{t:m$18j.$_Object}}]},Return$Callable:{t:m$18j.Anything}}}}],$cont:Server,pa:1,d:['io.node.hapi','Server','$m','route']};};
        })(Server.$$.prototype);
    }
    return Server;
}
ex$.$init$Server=$init$Server;
$init$Server();

//InterfaceDef hapiServer at Server.ceylon (44:0-54:0)
function hapiServer(hapiServer$){
}
hapiServer.dynmem$=['connection','start','route','info'];hapiServer.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['io.node.hapi','hapiServer']};};
ex$.hapiServer=hapiServer;
function $init$hapiServer(){
    if(hapiServer.$$===undefined){
        m$18j.initTypeProtoI(hapiServer,'io.node.hapi::hapiServer');
        (function(hapiServer$){
            hapiServer$.connection={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:hapiServer},ps:[{nm:'options',mt:'prm',$t:{t:m$18j.Anything}}],$cont:hapiServer,pa:5,d:['io.node.hapi','hapiServer','$m','connection']};}};hapiServer$.start={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$18j.Anything},ps:[{nm:'callback',mt:'prm',$t:{t:'u',l:[{t:m$18j.Null},{t:m$18j.Callable,a:{Arguments$Callable:{t:'T',l:[{$t:{t:m$18j.$_Object}}]},Return$Callable:{t:m$18j.Anything}}}]}}],$cont:hapiServer,pa:5,d:['io.node.hapi','hapiServer','$m','start']};}};hapiServer$.route={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$18j.Anything},ps:[{nm:'options',mt:'prm',$t:{t:m$18j.Anything}}],$cont:hapiServer,pa:5,d:['io.node.hapi','hapiServer','$m','route']};}};
            //AttributeDecl info at Server.ceylon (52:1-52:30)
            hapiServer$.$prop$getInfo={$crtmm$:function(){return{mod:$CCMM$,$t:{t:ServerInfo},$cont:hapiServer,pa:5,d:['io.node.hapi','hapiServer','$at','info']};}};
        })(hapiServer.$$.prototype);
    }
    return hapiServer;
}
ex$.$init$hapiServer=$init$hapiServer;
$init$hapiServer();

//InterfaceDef ServerInfo at Server.ceylon (56:0-58:0)
function ServerInfo(serverInfo$){
}
ServerInfo.dynmem$=['uri'];ServerInfo.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['io.node.hapi','ServerInfo']};};
ex$.ServerInfo=ServerInfo;
function $init$ServerInfo(){
    if(ServerInfo.$$===undefined){
        m$18j.initTypeProtoI(ServerInfo,'io.node.hapi::ServerInfo');
        (function(serverInfo$){
            
            //AttributeDecl uri at Server.ceylon (57:1-57:25)
            serverInfo$.$prop$getUri={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$18j.$_String},$cont:ServerInfo,pa:5,d:['io.node.hapi','ServerInfo','$at','uri']};}};
        })(ServerInfo.$$.prototype);
    }
    return ServerInfo;
}
ex$.$init$ServerInfo=$init$ServerInfo;
$init$ServerInfo();

//InterfaceDef ServerOptions at Server.ceylon (60:0-62:0)
function ServerOptions(serverOptions$){
}
ServerOptions.dynmem$=['port'];ServerOptions.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['io.node.hapi','ServerOptions']};};
ex$.ServerOptions=ServerOptions;
function $init$ServerOptions(){
    if(ServerOptions.$$===undefined){
        m$18j.initTypeProtoI(ServerOptions,'io.node.hapi::ServerOptions');
        (function(serverOptions$){
            
            //AttributeDecl port at Server.ceylon (61:1-61:27)
            serverOptions$.$prop$getPort={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$18j.Integer},$cont:ServerOptions,pa:5,d:['io.node.hapi','ServerOptions','$at','port']};}};
        })(ServerOptions.$$.prototype);
    }
    return ServerOptions;
}
ex$.$init$ServerOptions=$init$ServerOptions;
$init$ServerOptions();

//AttributeGetterDef serverOptions at Server.ceylon (64:0-69:0)
function getServerOptions(){
    
    //ObjectDef opts at Server.ceylon (65:1-67:1)
    function $194(){
        var $194$=new $194.$$;ServerOptions($194$);
        var port=(3000);
        m$18j.atr$($194$,'port',function(){return port;},undefined,function(){return{mod:$CCMM$,$t:{t:m$18j.Integer},$cont:$194,pa:3,d:['io.node.hapi','serverOptions','$o','opts$oc542j','$at','port']};});
        return $194$;
    };$194.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$18j.Basic},$cont:getServerOptions,sts:[{t:ServerOptions}],d:['io.node.hapi','serverOptions','$o','opts$oc542j']};};
    function $init$$194(){
        if($194.$$===undefined){
            m$18j.initTypeProto($194,'io.node.hapi::opts',m$18j.Basic,$init$ServerOptions());
            (function($194$){
                delete $194$.port;
            })($194.$$.prototype);
        }
        return $194;
    }
    $init$$194();
    var $195;
    function get$195(){
        if($195===m$18j.INIT$)m$18j.throwexc(m$18j.InitializationError("Cyclic initialization trying to read the value of \'opts\' before it was set"),'65:1-67:1','Server.ceylon');
        if($195===undefined){$195=m$18j.INIT$;$195=$init$$194()();$195.$crtmm$=get$195.$crtmm$;}
        return $195;
    }
    get$195.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$194},$cont:getServerOptions,d:['io.node.hapi','serverOptions','$o','opts$oc542k']};};
    $prop$get$195={get:get$195,$crtmm$:get$195.$crtmm$};
    get$194=get$195;$prop$get$194=get$195;
    return get$195();
}
getServerOptions.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ServerOptions},pa:1,d:['io.node.hapi','serverOptions']};}
ex$.getServerOptions=getServerOptions;
var $prop$getServerOptions={$crtmm$:function(){return{mod:$CCMM$,$t:{t:ServerOptions},pa:1,d:['io.node.hapi','serverOptions']};}};
ex$.$prop$getServerOptions=$prop$getServerOptions;
$prop$getServerOptions.get=getServerOptions;
getServerOptions.$crtmm$=$prop$getServerOptions.$crtmm$;
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
