(function(define) { define(function(require, ex$, module) {

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('io/node/hapi/0.0.2/io.node.hapi-0.0.2-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$2iv=require('ceylon/language/1.1.0/ceylon.language-1.1.0');
m$2iv.$addmod$(m$2iv,'ceylon.language/1.1.0');
m$2iv.$addmod$(ex$,'io.node.hapi/0.0.2');

//MethodDef run at run.ceylon (1:0-26:0)
function run(){
    
    //AttributeDecl server at run.ceylon (3:1-3:36)
    var $2iw=getHapi().createServer();
    $2iw.connection(getServerOptions());
    $2iw.start(m$2iv.$JsCallable((function($2ix){
        /*BEG dynblock*/
        (typeof console==='undefined'||console===null?m$2iv.throwexc(m$2iv.Exception("Undefined or null reference: console"),'9:3-9:9','run.ceylon'):console).log("Server running at:",$2iw.info.uri);
        /*END dynblock*/
    }),[{nm:'error',mt:'prm',$t:{t:m$2iv.$_Object}}],{Arguments$Callable:{t:'T',l:[{t:m$2iv.$_Object}]},Return$Callable:{t:m$2iv.Anything}}));
    ($2iy="GET",$2iz="/",$2j0=(function($2j1,$2j2){
        
        //AttributeDecl res at run.ceylon (21:3-21:47)
        var $2j3=ceylonReply($2j2,"success");
        $2j3.type("text/plain");
        $2j3.header("X-Custom","some-value");
    }),($2j4=$2iw,m$2iv.JsCallable($2j4,m$2iv.nn$($2j4)?$2j4.route:null))($2iy,$2iz,$2j0));
    var $2iy,$2iz,$2j0,$2j4;
}
ex$.run=run;
run.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$2iv.Anything},ps:[],pa:1,an:function(){return[m$2iv.doc$($CCMM$,'io.node.hapi:run')];},d:['io.node.hapi','run']};};
ex$.$pkg$ans$io$node$hapi=function(){return[m$2iv.shared()];};
ex$.$mod$ans$=[];

//ObjectDef hapi at hapi.ceylon (1:0-8:0)
function $2j5(){
    var hapi$=new $2j5.$$;
    return hapi$;
};$2j5.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$2iv.Basic},pa:1,d:['io.node.hapi','hapi']};};
function $init$getHapi(){
    if($2j5.$$===undefined){
        m$2iv.initTypeProto($2j5,'io.node.hapi::hapi',m$2iv.Basic);
        (function(hapi$){
            
            //MethodDef createServer at hapi.ceylon (3:1-5:1)
            hapi$.createServer=function(){
                var hapi$=this;
                return Server();
            };hapi$.createServer.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Server},ps:[],$cont:$2j5,pa:1,d:['io.node.hapi','hapi','$m','createServer']};};
        })($2j5.$$.prototype);
    }
    return $2j5;
}
ex$.$init$getHapi=$init$getHapi;
$init$getHapi();
var $2j6;
function getHapi(){
    if($2j6===m$2iv.INIT$)m$2iv.throwexc(m$2iv.InitializationError("Cyclic initialization trying to read the value of \'hapi\' before it was set"),'1:0-8:0','hapi.ceylon');
    if($2j6===undefined){$2j6=m$2iv.INIT$;$2j6=$init$getHapi()();$2j6.$crtmm$=getHapi.$crtmm$;}
    return $2j6;
}
ex$.getHapi=getHapi;
getHapi.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$2j5},pa:1,d:['io.node.hapi','hapi']};};
$prop$getHapi={get:getHapi,$crtmm$:getHapi.$crtmm$};
getHapi=getHapi;$prop$getHapi=getHapi;
ex$.$prop$getHapi=$prop$getHapi;

//ClassDef Server at Server.ceylon (1:0-42:0)
function Server(server$){
    $init$Server();
    if(server$===undefined)server$=new Server.$$;
    
    //AttributeDecl _server at Server.ceylon (3:1-3:30)
    server$.$prop$get$2j7={$crtmm$:function(){return{mod:$CCMM$,$t:{t:hapiServer},$cont:Server,pa:1027,d:['io.node.hapi','Server','$at','_server$vgg11l']};}};
    server$.$prop$get$2j7.get=function(){return $2j7};
    /*BEG dynblock*/
    
    //AttributeDecl hapi at Server.ceylon (6:2-6:32)
    var $2j8=(typeof require==='undefined'||require===null?m$2iv.throwexc(m$2iv.Exception("Undefined or null reference: require"),'6:17-6:23','Server.ceylon'):require)("hapi");
    $prop$get$2j8={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2iv.Anything},$cont:Server,d:['io.node.hapi','Server','$at','hapi$xb8l1a']};}};
    $prop$get$2j8.get=function(){return $2j8};
    (typeof global==='undefined'||global===null?m$2iv.throwexc(m$2iv.Exception("Undefined or null reference: global"),'7:2-7:7','Server.ceylon'):global).HapiServer=$2j8.Server;
    server$.$2j7=m$2iv.dre$$(($2j9=(typeof HapiServer==='undefined'?m$2iv.throwexc(m$2iv.Exception("Undefined type HapiServer"),'8:12-8:21','Server.ceylon'):HapiServer),$2j9.$$===undefined?new $2j9():$2j9()),{t:hapiServer},'Server.ceylon 8:12-8:23');/*END dynblock*/
    return server$;
}
Server.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$2iv.Basic},ps:[],pa:1,d:['io.node.hapi','Server']};};
ex$.Server=Server;
function $init$Server(){
    if(Server.$$===undefined){
        m$2iv.initTypeProto(Server,'io.node.hapi::Server',m$2iv.Basic);
        (function(server$){
            
            //AttributeDecl _server at Server.ceylon (3:1-3:30)
            m$2iv.atr$(server$,'$2j7',function(){return this.$2j7_;},function($2ja){return this.$2j7_=$2ja;},function(){return{mod:$CCMM$,$t:{t:hapiServer},$cont:Server,pa:1027,d:['io.node.hapi','Server','$at','_server$vgg11l']};});
            
            //MethodDef connection at Server.ceylon (11:1-17:1)
            server$.connection=function($2jb){
                var server$=this;
                /*BEG dynblock*/
                server$.$2j7.connection({port:$2jb.port});
                /*END dynblock*/
            };server$.connection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$2iv.Anything},ps:[{nm:'options',mt:'prm',$t:{t:ServerOptions}}],$cont:Server,pa:1,d:['io.node.hapi','Server','$m','connection']};};
            
            //AttributeGetterDef info at Server.ceylon (19:1-21:2)
            m$2iv.atr$(server$,'info',function(){
                var server$=this;
                /*BEG dynblock*/
                return server$.$2j7.info;
                /*END dynblock*/
            },undefined,function(){return{mod:$CCMM$,$t:{t:ServerInfo},$cont:Server,pa:1,d:['io.node.hapi','Server','$at','info']};});
            //MethodDef start at Server.ceylon (23:1-27:1)
            server$.start=function($2jc){
                var server$=this;
                server$.$2j7.start(m$2iv.$JsCallable((function($2jd){
                    $2jc($2jd);
                }),[{nm:'error',mt:'prm',$t:{t:m$2iv.$_Object}}],{Arguments$Callable:{t:'T',l:[{t:m$2iv.$_Object}]},Return$Callable:{t:m$2iv.Anything}}));
            };server$.start.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$2iv.Anything},ps:[{nm:'callback',mt:'prm',$t:{t:m$2iv.Callable,a:{Arguments$Callable:{t:'T',l:[{$t:{t:m$2iv.$_Object}}]},Return$Callable:{t:m$2iv.Anything}}}}],$cont:Server,pa:1,d:['io.node.hapi','Server','$m','start']};};
            
            //MethodDef route at Server.ceylon (29:1-40:1)
            server$.route=function($2je,$2jf,$2jg){
                var server$=this;
                /*BEG dynblock*/
                server$.$2j7.route({method:$2je,path:$2jf,handler:$2jg});
                /*END dynblock*/
            };server$.route.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$2iv.Anything},ps:[{nm:'method',mt:'prm',$t:{t:m$2iv.$_String}},{nm:'path',mt:'prm',$t:{t:m$2iv.$_String}},{nm:'handler',mt:'prm',$t:{t:m$2iv.Callable,a:{Arguments$Callable:{t:'T',l:[{$t:{t:Request}},{$t:{t:Reply}}]},Return$Callable:{t:m$2iv.Anything}}}}],$cont:Server,pa:1,d:['io.node.hapi','Server','$m','route']};};
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
        m$2iv.initTypeProtoI(hapiServer,'io.node.hapi::hapiServer');
        (function(hapiServer$){
            hapiServer$.connection={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:hapiServer},ps:[{nm:'options',mt:'prm',$t:{t:m$2iv.Anything}}],$cont:hapiServer,pa:5,d:['io.node.hapi','hapiServer','$m','connection']};}};hapiServer$.start={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2iv.Anything},ps:[{nm:'callback',mt:'prm',$t:{t:'u',l:[{t:m$2iv.Null},{t:m$2iv.Callable,a:{Arguments$Callable:{t:'T',l:[{$t:{t:m$2iv.$_Object}}]},Return$Callable:{t:m$2iv.Anything}}}]}}],$cont:hapiServer,pa:5,d:['io.node.hapi','hapiServer','$m','start']};}};hapiServer$.route={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2iv.Anything},ps:[{nm:'options',mt:'prm',$t:{t:m$2iv.Anything}}],$cont:hapiServer,pa:5,d:['io.node.hapi','hapiServer','$m','route']};}};
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
        m$2iv.initTypeProtoI(ServerInfo,'io.node.hapi::ServerInfo');
        (function(serverInfo$){
            
            //AttributeDecl uri at Server.ceylon (57:1-57:25)
            serverInfo$.$prop$getUri={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2iv.$_String},$cont:ServerInfo,pa:5,d:['io.node.hapi','ServerInfo','$at','uri']};}};
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
        m$2iv.initTypeProtoI(ServerOptions,'io.node.hapi::ServerOptions');
        (function(serverOptions$){
            
            //AttributeDecl port at Server.ceylon (61:1-61:27)
            serverOptions$.$prop$getPort={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2iv.Integer},$cont:ServerOptions,pa:5,d:['io.node.hapi','ServerOptions','$at','port']};}};
        })(ServerOptions.$$.prototype);
    }
    return ServerOptions;
}
ex$.$init$ServerOptions=$init$ServerOptions;
$init$ServerOptions();

//AttributeGetterDef serverOptions at Server.ceylon (64:0-69:0)
function getServerOptions(){
    
    //ObjectDef opts at Server.ceylon (65:1-67:1)
    function $2jh(){
        var $2jh$=new $2jh.$$;ServerOptions($2jh$);
        var port=(3000);
        m$2iv.atr$($2jh$,'port',function(){return port;},undefined,function(){return{mod:$CCMM$,$t:{t:m$2iv.Integer},$cont:$2jh,pa:3,d:['io.node.hapi','serverOptions','$o','opts$oc542j','$at','port']};});
        return $2jh$;
    };$2jh.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$2iv.Basic},$cont:getServerOptions,sts:[{t:ServerOptions}],d:['io.node.hapi','serverOptions','$o','opts$oc542j']};};
    function $init$$2jh(){
        if($2jh.$$===undefined){
            m$2iv.initTypeProto($2jh,'io.node.hapi::opts',m$2iv.Basic,$init$ServerOptions());
            (function($2jh$){
                delete $2jh$.port;
            })($2jh.$$.prototype);
        }
        return $2jh;
    }
    $init$$2jh();
    var $2ji;
    function get$2ji(){
        if($2ji===m$2iv.INIT$)m$2iv.throwexc(m$2iv.InitializationError("Cyclic initialization trying to read the value of \'opts\' before it was set"),'65:1-67:1','Server.ceylon');
        if($2ji===undefined){$2ji=m$2iv.INIT$;$2ji=$init$$2jh()();$2ji.$crtmm$=get$2ji.$crtmm$;}
        return $2ji;
    }
    get$2ji.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$2jh},$cont:getServerOptions,d:['io.node.hapi','serverOptions','$o','opts$oc542k']};};
    $prop$get$2ji={get:get$2ji,$crtmm$:get$2ji.$crtmm$};
    get$2jh=get$2ji;$prop$get$2jh=get$2ji;
    return get$2ji();
}
getServerOptions.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ServerOptions},pa:1,d:['io.node.hapi','serverOptions']};}
ex$.getServerOptions=getServerOptions;
var $prop$getServerOptions={$crtmm$:function(){return{mod:$CCMM$,$t:{t:ServerOptions},pa:1,d:['io.node.hapi','serverOptions']};}};
ex$.$prop$getServerOptions=$prop$getServerOptions;
$prop$getServerOptions.get=getServerOptions;
getServerOptions.$crtmm$=$prop$getServerOptions.$crtmm$;

//InterfaceDef Request at reply.ceylon (4:0-4:24)
function Request(request$){
}
Request.dynmem$=[];Request.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['io.node.hapi','Request']};};
ex$.Request=Request;
function $init$Request(){
    if(Request.$$===undefined){
        m$2iv.initTypeProtoI(Request,'io.node.hapi::Request');
    }
    return Request;
}
ex$.$init$Request=$init$Request;
$init$Request();

//InterfaceDef Reply at reply.ceylon (5:0-5:22)
function Reply(reply$){
}
Reply.dynmem$=[];Reply.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['io.node.hapi','Reply']};};
ex$.Reply=Reply;
function $init$Reply(){
    if(Reply.$$===undefined){
        m$2iv.initTypeProtoI(Reply,'io.node.hapi::Reply');
    }
    return Reply;
}
ex$.$init$Reply=$init$Reply;
$init$Reply();

//MethodDef ceylonReply at reply.ceylon (7:0-19:0)
function ceylonReply($2jj,$2jk){
    var $2jl;
    if(m$2iv.nn$(($2jl=$2jj))){
        var $2jm;
        if(m$2iv.nn$(($2jm=$2jk))){
            /*BEG dynblock*/
            return (typeof reply==='undefined'||reply===null?m$2iv.throwexc(m$2iv.Exception("Undefined or null reference: reply"),'10:20-10:24','reply.ceylon'):reply)($2jl,$2jm);
            /*END dynblock*/
        }else {
            /*BEG dynblock*/
            return (typeof reply==='undefined'||reply===null?m$2iv.throwexc(m$2iv.Exception("Undefined or null reference: reply"),'12:20-12:24','reply.ceylon'):reply)($2jl);
            /*END dynblock*/
        }
    }else {
        var $2jn;
        if(m$2iv.nn$(($2jn=$2jk))){
            /*BEG dynblock*/
            return (typeof reply==='undefined'||reply===null?m$2iv.throwexc(m$2iv.Exception("Undefined or null reference: reply"),'15:19-15:23','reply.ceylon'):reply)($2jn);
            /*END dynblock*/
        }else {
            /*BEG dynblock*/
            return (typeof reply==='undefined'||reply===null?m$2iv.throwexc(m$2iv.Exception("Undefined or null reference: reply"),'17:19-17:23','reply.ceylon'):reply)();
            /*END dynblock*/
        }
    }
};ceylonReply.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Response},ps:[{nm:'error',mt:'prm',$t:{t:'u',l:[{t:m$2iv.Null},Err()]}},{nm:'result',mt:'prm',$t:{t:'u',l:[{t:m$2iv.Null},Res()]}}],d:['io.node.hapi','ceylonReply']};};

//InterfaceDef Response at reply.ceylon (21:0-30:0)
function Response(response$){
}
Response.dynmem$=['type','headers','header','source','variety','app','plugins','settings'];Response.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['io.node.hapi','Response']};};
ex$.Response=Response;
function $init$Response(){
    if(Response.$$===undefined){
        m$2iv.initTypeProtoI(Response,'io.node.hapi::Response');
        (function(response$){
            
            //AttributeDecl type at reply.ceylon (22:1-22:36)
            response$.$prop$getType={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2iv.Callable,a:{Arguments$Callable:{t:'T',l:[{$t:{t:m$2iv.$_String}}]},Return$Callable:{t:Response}}},$cont:Response,pa:5,d:['io.node.hapi','Response','$at','type']};}};
            
            //AttributeDecl headers at reply.ceylon (23:1-23:47)
            response$.$prop$getHeaders={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2iv.Iterable,a:{Element$Iterable:{t:m$2iv.Entry,a:{Item$Entry:{t:m$2iv.$_String},Key$Entry:{t:m$2iv.$_String}}},Absent$Iterable:{t:m$2iv.Null}}},$cont:Response,pa:5,d:['io.node.hapi','Response','$at','headers']};}};
            
            //AttributeDecl header at reply.ceylon (24:1-24:46)
            response$.$prop$getHeader={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2iv.Callable,a:{Arguments$Callable:{t:'T',l:[{$t:{t:m$2iv.$_String}},{$t:{t:m$2iv.$_String}}]},Return$Callable:{t:Response}}},$cont:Response,pa:5,d:['io.node.hapi','Response','$at','header']};}};
            
            //AttributeDecl source at reply.ceylon (25:1-25:29)
            response$.$prop$getSource={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2iv.Anything},$cont:Response,pa:5,d:['io.node.hapi','Response','$at','source']};}};
            
            //AttributeDecl variety at reply.ceylon (26:1-26:29)
            response$.$prop$getVariety={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2iv.$_String},$cont:Response,pa:5,d:['io.node.hapi','Response','$at','variety']};}};
            
            //AttributeDecl app at reply.ceylon (27:1-27:26)
            response$.$prop$getApp={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2iv.Anything},$cont:Response,pa:5,d:['io.node.hapi','Response','$at','app']};}};
            
            //AttributeDecl plugins at reply.ceylon (28:1-28:30)
            response$.$prop$getPlugins={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2iv.Anything},$cont:Response,pa:5,d:['io.node.hapi','Response','$at','plugins']};}};
            
            //AttributeDecl settings at reply.ceylon (29:1-29:40)
            response$.$prop$getSettings={$crtmm$:function(){return{mod:$CCMM$,$t:{t:ResponseSettings},$cont:Response,pa:5,d:['io.node.hapi','Response','$at','settings']};}};
        })(Response.$$.prototype);
    }
    return Response;
}
ex$.$init$Response=$init$Response;
$init$Response();

//InterfaceDef ResponseSettings at reply.ceylon (32:0-39:0)
function ResponseSettings(responseSettings$){
}
ResponseSettings.dynmem$=['charset','encoding','passThrough','stringify','ttl','varyEtag'];ResponseSettings.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['io.node.hapi','ResponseSettings']};};
ex$.ResponseSettings=ResponseSettings;
function $init$ResponseSettings(){
    if(ResponseSettings.$$===undefined){
        m$2iv.initTypeProtoI(ResponseSettings,'io.node.hapi::ResponseSettings');
        (function(responseSettings$){
            
            //AttributeDecl charset at reply.ceylon (33:1-33:29)
            responseSettings$.$prop$getCharset={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2iv.$_String},$cont:ResponseSettings,pa:5,d:['io.node.hapi','ResponseSettings','$at','charset']};}};
            
            //AttributeDecl encoding at reply.ceylon (34:1-34:30)
            responseSettings$.$prop$getEncoding={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2iv.$_String},$cont:ResponseSettings,pa:5,d:['io.node.hapi','ResponseSettings','$at','encoding']};}};
            
            //AttributeDecl passThrough at reply.ceylon (35:1-35:34)
            responseSettings$.$prop$getPassThrough={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2iv.$_Boolean},$cont:ResponseSettings,pa:5,d:['io.node.hapi','ResponseSettings','$at','passThrough']};}};
            
            //AttributeDecl stringify at reply.ceylon (36:1-36:32)
            responseSettings$.$prop$getStringify={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2iv.Anything},$cont:ResponseSettings,pa:5,d:['io.node.hapi','ResponseSettings','$at','stringify']};}};
            
            //AttributeDecl ttl at reply.ceylon (37:1-37:26)
            responseSettings$.$prop$getTtl={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2iv.Integer},$cont:ResponseSettings,pa:5,d:['io.node.hapi','ResponseSettings','$at','ttl']};}};
            
            //AttributeDecl varyEtag at reply.ceylon (38:1-38:31)
            responseSettings$.$prop$getVaryEtag={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2iv.$_Boolean},$cont:ResponseSettings,pa:5,d:['io.node.hapi','ResponseSettings','$at','varyEtag']};}};
        })(ResponseSettings.$$.prototype);
    }
    return ResponseSettings;
}
ex$.$init$ResponseSettings=$init$ResponseSettings;
$init$ResponseSettings();

//InterfaceDef Error at reply.ceylon (41:0-41:22)
function $_Error(error$){
}
$_Error.dynmem$=[];$_Error.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['io.node.hapi','Error']};};
ex$.$_Error=$_Error;
function $init$$_Error(){
    if($_Error.$$===undefined){
        m$2iv.initTypeProtoI($_Error,'io.node.hapi::Error');
    }
    return $_Error;
}
ex$.$init$$_Error=$init$$_Error;
$init$$_Error();

//InterfaceDef Buffer at reply.ceylon (42:0-42:23)
function Buffer(buffer$){
}
Buffer.dynmem$=[];Buffer.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['io.node.hapi','Buffer']};};
ex$.Buffer=Buffer;
function $init$Buffer(){
    if(Buffer.$$===undefined){
        m$2iv.initTypeProtoI(Buffer,'io.node.hapi::Buffer');
    }
    return Buffer;
}
ex$.$init$Buffer=$init$Buffer;
$init$Buffer();

//InterfaceDef Stream at reply.ceylon (43:0-43:23)
function Stream(stream$){
}
Stream.dynmem$=[];Stream.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['io.node.hapi','Stream']};};
ex$.Stream=Stream;
function $init$Stream(){
    if(Stream.$$===undefined){
        m$2iv.initTypeProtoI(Stream,'io.node.hapi::Stream');
    }
    return Stream;
}
ex$.$init$Stream=$init$Stream;
$init$Stream();

//InterfaceDef Promise at reply.ceylon (44:0-44:24)
function Promise(promise$){
}
Promise.dynmem$=[];Promise.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['io.node.hapi','Promise']};};
ex$.Promise=Promise;
function $init$Promise(){
    if(Promise.$$===undefined){
        m$2iv.initTypeProtoI(Promise,'io.node.hapi::Promise');
    }
    return Promise;
}
ex$.$init$Promise=$init$Promise;
$init$Promise();

//TypeAliasDecl Res at reply.ceylon (45:0-47:40)
function Res(){var $2jo={t:'u',l:[{t:m$2iv.$_String},{t:m$2iv.Integer},{t:m$2iv.$_Boolean},{t:Buffer},{t:$_Error},{t:Stream},{t:Promise},{t:m$2iv.$_Object},{t:m$2iv.Sequential,a:{Element$Sequential:{t:m$2iv.Anything}}}]};$2jo.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['io.node.hapi','Res']};};return $2jo;}
ex$.Res=Res;

//TypeAliasDecl Err at reply.ceylon (48:0-50:40)
function Err(){var $2jp={t:'u',l:[{t:m$2iv.$_String},{t:m$2iv.Integer},{t:m$2iv.$_Boolean},{t:Buffer},{t:$_Error},{t:Stream},{t:Promise},{t:m$2iv.$_Object},{t:m$2iv.Sequential,a:{Element$Sequential:{t:m$2iv.Anything}}}]};$2jp.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['io.node.hapi','Err']};};return $2jp;}
ex$.Err=Err;
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
