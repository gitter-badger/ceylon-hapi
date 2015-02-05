(function(define) { define(function(require, ex$, module) {

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('io/node/hapi/0.0.2/io.node.hapi-0.0.2-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$2jq=require('ceylon/language/1.1.0/ceylon.language-1.1.0');
m$2jq.$addmod$(m$2jq,'ceylon.language/1.1.0');
m$2jq.$addmod$(ex$,'io.node.hapi/0.0.2');

//MethodDef run at run.ceylon (1:0-26:0)
function run(){
    
    //AttributeDecl server at run.ceylon (3:1-3:36)
    var $2jr=getHapi().createServer();
    $2jr.connection(getServerOptions());
    $2jr.start(m$2jq.$JsCallable((function($2js){
        /*BEG dynblock*/
        (typeof console==='undefined'||console===null?m$2jq.throwexc(m$2jq.Exception("Undefined or null reference: console"),'9:3-9:9','run.ceylon'):console).log("Server running at:",$2jr.info.uri);
        /*END dynblock*/
    }),[{nm:'error',mt:'prm',$t:{t:m$2jq.$_Object}}],{Arguments$Callable:{t:'T',l:[{t:m$2jq.$_Object}]},Return$Callable:{t:m$2jq.Anything}}));
    ($2jt="GET",$2ju="/",$2jv=(function($2jw,$2jx){
        
        //AttributeDecl res at run.ceylon (21:3-21:47)
        var $2jy=ceylonReply($2jx,"success");
        $2jy.type("text/plain");
        $2jy.header("X-Custom","some-value");
    }),($2jz=$2jr,m$2jq.JsCallable($2jz,m$2jq.nn$($2jz)?$2jz.route:null))($2jt,$2ju,$2jv));
    var $2jt,$2ju,$2jv,$2jz;
}
ex$.run=run;
run.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$2jq.Anything},ps:[],pa:1,an:function(){return[m$2jq.doc$($CCMM$,'io.node.hapi:run')];},d:['io.node.hapi','run']};};

//InterfaceDef Request at reply.ceylon (4:0-4:24)
function Request(request$){
}
Request.dynmem$=[];Request.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['io.node.hapi','Request']};};
ex$.Request=Request;
function $init$Request(){
    if(Request.$$===undefined){
        m$2jq.initTypeProtoI(Request,'io.node.hapi::Request');
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
        m$2jq.initTypeProtoI(Reply,'io.node.hapi::Reply');
    }
    return Reply;
}
ex$.$init$Reply=$init$Reply;
$init$Reply();

//MethodDef ceylonReply at reply.ceylon (7:0-19:0)
function ceylonReply($2k0,$2k1){
    var $2k2;
    if(m$2jq.nn$(($2k2=$2k0))){
        var $2k3;
        if(m$2jq.nn$(($2k3=$2k1))){
            /*BEG dynblock*/
            return (typeof reply==='undefined'||reply===null?m$2jq.throwexc(m$2jq.Exception("Undefined or null reference: reply"),'10:20-10:24','reply.ceylon'):reply)($2k2,$2k3);
            /*END dynblock*/
        }else {
            /*BEG dynblock*/
            return (typeof reply==='undefined'||reply===null?m$2jq.throwexc(m$2jq.Exception("Undefined or null reference: reply"),'12:20-12:24','reply.ceylon'):reply)($2k2);
            /*END dynblock*/
        }
    }else {
        var $2k4;
        if(m$2jq.nn$(($2k4=$2k1))){
            /*BEG dynblock*/
            return (typeof reply==='undefined'||reply===null?m$2jq.throwexc(m$2jq.Exception("Undefined or null reference: reply"),'15:19-15:23','reply.ceylon'):reply)($2k4);
            /*END dynblock*/
        }else {
            /*BEG dynblock*/
            return (typeof reply==='undefined'||reply===null?m$2jq.throwexc(m$2jq.Exception("Undefined or null reference: reply"),'17:19-17:23','reply.ceylon'):reply)();
            /*END dynblock*/
        }
    }
};ceylonReply.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Response},ps:[{nm:'error',mt:'prm',$t:{t:'u',l:[{t:m$2jq.Null},Err()]}},{nm:'result',mt:'prm',$t:{t:'u',l:[{t:m$2jq.Null},Res()]}}],d:['io.node.hapi','ceylonReply']};};

//InterfaceDef Response at reply.ceylon (21:0-30:0)
function Response(response$){
}
Response.dynmem$=['type','headers','header','source','variety','app','plugins','settings'];Response.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['io.node.hapi','Response']};};
ex$.Response=Response;
function $init$Response(){
    if(Response.$$===undefined){
        m$2jq.initTypeProtoI(Response,'io.node.hapi::Response');
        (function(response$){
            
            //AttributeDecl type at reply.ceylon (22:1-22:36)
            response$.$prop$getType={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2jq.Callable,a:{Arguments$Callable:{t:'T',l:[{$t:{t:m$2jq.$_String}}]},Return$Callable:{t:Response}}},$cont:Response,pa:5,d:['io.node.hapi','Response','$at','type']};}};
            
            //AttributeDecl headers at reply.ceylon (23:1-23:47)
            response$.$prop$getHeaders={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2jq.Iterable,a:{Element$Iterable:{t:m$2jq.Entry,a:{Item$Entry:{t:m$2jq.$_String},Key$Entry:{t:m$2jq.$_String}}},Absent$Iterable:{t:m$2jq.Null}}},$cont:Response,pa:5,d:['io.node.hapi','Response','$at','headers']};}};
            
            //AttributeDecl header at reply.ceylon (24:1-24:46)
            response$.$prop$getHeader={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2jq.Callable,a:{Arguments$Callable:{t:'T',l:[{$t:{t:m$2jq.$_String}},{$t:{t:m$2jq.$_String}}]},Return$Callable:{t:Response}}},$cont:Response,pa:5,d:['io.node.hapi','Response','$at','header']};}};
            
            //AttributeDecl source at reply.ceylon (25:1-25:29)
            response$.$prop$getSource={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2jq.Anything},$cont:Response,pa:5,d:['io.node.hapi','Response','$at','source']};}};
            
            //AttributeDecl variety at reply.ceylon (26:1-26:29)
            response$.$prop$getVariety={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2jq.$_String},$cont:Response,pa:5,d:['io.node.hapi','Response','$at','variety']};}};
            
            //AttributeDecl app at reply.ceylon (27:1-27:26)
            response$.$prop$getApp={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2jq.Anything},$cont:Response,pa:5,d:['io.node.hapi','Response','$at','app']};}};
            
            //AttributeDecl plugins at reply.ceylon (28:1-28:30)
            response$.$prop$getPlugins={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2jq.Anything},$cont:Response,pa:5,d:['io.node.hapi','Response','$at','plugins']};}};
            
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
        m$2jq.initTypeProtoI(ResponseSettings,'io.node.hapi::ResponseSettings');
        (function(responseSettings$){
            
            //AttributeDecl charset at reply.ceylon (33:1-33:29)
            responseSettings$.$prop$getCharset={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2jq.$_String},$cont:ResponseSettings,pa:5,d:['io.node.hapi','ResponseSettings','$at','charset']};}};
            
            //AttributeDecl encoding at reply.ceylon (34:1-34:30)
            responseSettings$.$prop$getEncoding={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2jq.$_String},$cont:ResponseSettings,pa:5,d:['io.node.hapi','ResponseSettings','$at','encoding']};}};
            
            //AttributeDecl passThrough at reply.ceylon (35:1-35:34)
            responseSettings$.$prop$getPassThrough={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2jq.$_Boolean},$cont:ResponseSettings,pa:5,d:['io.node.hapi','ResponseSettings','$at','passThrough']};}};
            
            //AttributeDecl stringify at reply.ceylon (36:1-36:32)
            responseSettings$.$prop$getStringify={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2jq.Anything},$cont:ResponseSettings,pa:5,d:['io.node.hapi','ResponseSettings','$at','stringify']};}};
            
            //AttributeDecl ttl at reply.ceylon (37:1-37:26)
            responseSettings$.$prop$getTtl={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2jq.Integer},$cont:ResponseSettings,pa:5,d:['io.node.hapi','ResponseSettings','$at','ttl']};}};
            
            //AttributeDecl varyEtag at reply.ceylon (38:1-38:31)
            responseSettings$.$prop$getVaryEtag={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2jq.$_Boolean},$cont:ResponseSettings,pa:5,d:['io.node.hapi','ResponseSettings','$at','varyEtag']};}};
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
        m$2jq.initTypeProtoI($_Error,'io.node.hapi::Error');
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
        m$2jq.initTypeProtoI(Buffer,'io.node.hapi::Buffer');
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
        m$2jq.initTypeProtoI(Stream,'io.node.hapi::Stream');
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
        m$2jq.initTypeProtoI(Promise,'io.node.hapi::Promise');
    }
    return Promise;
}
ex$.$init$Promise=$init$Promise;
$init$Promise();

//TypeAliasDecl Res at reply.ceylon (45:0-47:40)
function Res(){var $2k5={t:'u',l:[{t:m$2jq.$_String},{t:m$2jq.Integer},{t:m$2jq.$_Boolean},{t:Buffer},{t:$_Error},{t:Stream},{t:Promise},{t:m$2jq.$_Object},{t:m$2jq.Sequential,a:{Element$Sequential:{t:m$2jq.Anything}}}]};$2k5.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['io.node.hapi','Res']};};return $2k5;}
ex$.Res=Res;

//TypeAliasDecl Err at reply.ceylon (48:0-50:40)
function Err(){var $2k6={t:'u',l:[{t:m$2jq.$_String},{t:m$2jq.Integer},{t:m$2jq.$_Boolean},{t:Buffer},{t:$_Error},{t:Stream},{t:Promise},{t:m$2jq.$_Object},{t:m$2jq.Sequential,a:{Element$Sequential:{t:m$2jq.Anything}}}]};$2k6.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['io.node.hapi','Err']};};return $2k6;}
ex$.Err=Err;
ex$.$pkg$ans$io$node$hapi=function(){return[m$2jq.shared()];};
ex$.$mod$ans$=[];

//ObjectDef hapi at hapi.ceylon (1:0-8:0)
function $2k7(){
    var hapi$=new $2k7.$$;
    return hapi$;
};$2k7.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$2jq.Basic},pa:1,d:['io.node.hapi','hapi']};};
function $init$getHapi(){
    if($2k7.$$===undefined){
        m$2jq.initTypeProto($2k7,'io.node.hapi::hapi',m$2jq.Basic);
        (function(hapi$){
            
            //MethodDef createServer at hapi.ceylon (3:1-5:1)
            hapi$.createServer=function(){
                var hapi$=this;
                return Server();
            };hapi$.createServer.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Server},ps:[],$cont:$2k7,pa:1,d:['io.node.hapi','hapi','$m','createServer']};};
        })($2k7.$$.prototype);
    }
    return $2k7;
}
ex$.$init$getHapi=$init$getHapi;
$init$getHapi();
var $2k8;
function getHapi(){
    if($2k8===m$2jq.INIT$)m$2jq.throwexc(m$2jq.InitializationError("Cyclic initialization trying to read the value of \'hapi\' before it was set"),'1:0-8:0','hapi.ceylon');
    if($2k8===undefined){$2k8=m$2jq.INIT$;$2k8=$init$getHapi()();$2k8.$crtmm$=getHapi.$crtmm$;}
    return $2k8;
}
ex$.getHapi=getHapi;
getHapi.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$2k7},pa:1,d:['io.node.hapi','hapi']};};
$prop$getHapi={get:getHapi,$crtmm$:getHapi.$crtmm$};
getHapi=getHapi;$prop$getHapi=getHapi;
ex$.$prop$getHapi=$prop$getHapi;

//ClassDef Server at Server.ceylon (1:0-42:0)
function Server(server$){
    $init$Server();
    if(server$===undefined)server$=new Server.$$;
    
    //AttributeDecl _server at Server.ceylon (3:1-3:30)
    server$.$prop$get$2k9={$crtmm$:function(){return{mod:$CCMM$,$t:{t:hapiServer},$cont:Server,pa:1027,d:['io.node.hapi','Server','$at','_server$vgg11l']};}};
    server$.$prop$get$2k9.get=function(){return $2k9};
    /*BEG dynblock*/
    
    //AttributeDecl hapi at Server.ceylon (6:2-6:32)
    var $2ka=(typeof require==='undefined'||require===null?m$2jq.throwexc(m$2jq.Exception("Undefined or null reference: require"),'6:17-6:23','Server.ceylon'):require)("hapi");
    $prop$get$2ka={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2jq.Anything},$cont:Server,d:['io.node.hapi','Server','$at','hapi$xb8l1a']};}};
    $prop$get$2ka.get=function(){return $2ka};
    (typeof global==='undefined'||global===null?m$2jq.throwexc(m$2jq.Exception("Undefined or null reference: global"),'7:2-7:7','Server.ceylon'):global).HapiServer=$2ka.Server;
    server$.$2k9=m$2jq.dre$$(($2kb=(typeof HapiServer==='undefined'?m$2jq.throwexc(m$2jq.Exception("Undefined type HapiServer"),'8:12-8:21','Server.ceylon'):HapiServer),$2kb.$$===undefined?new $2kb():$2kb()),{t:hapiServer},'Server.ceylon 8:12-8:23');/*END dynblock*/
    return server$;
}
Server.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$2jq.Basic},ps:[],pa:1,d:['io.node.hapi','Server']};};
ex$.Server=Server;
function $init$Server(){
    if(Server.$$===undefined){
        m$2jq.initTypeProto(Server,'io.node.hapi::Server',m$2jq.Basic);
        (function(server$){
            
            //AttributeDecl _server at Server.ceylon (3:1-3:30)
            m$2jq.atr$(server$,'$2k9',function(){return this.$2k9_;},function($2kc){return this.$2k9_=$2kc;},function(){return{mod:$CCMM$,$t:{t:hapiServer},$cont:Server,pa:1027,d:['io.node.hapi','Server','$at','_server$vgg11l']};});
            
            //MethodDef connection at Server.ceylon (11:1-17:1)
            server$.connection=function($2kd){
                var server$=this;
                /*BEG dynblock*/
                server$.$2k9.connection({port:$2kd.port});
                /*END dynblock*/
            };server$.connection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$2jq.Anything},ps:[{nm:'options',mt:'prm',$t:{t:ServerOptions}}],$cont:Server,pa:1,d:['io.node.hapi','Server','$m','connection']};};
            
            //AttributeGetterDef info at Server.ceylon (19:1-21:2)
            m$2jq.atr$(server$,'info',function(){
                var server$=this;
                /*BEG dynblock*/
                return server$.$2k9.info;
                /*END dynblock*/
            },undefined,function(){return{mod:$CCMM$,$t:{t:ServerInfo},$cont:Server,pa:1,d:['io.node.hapi','Server','$at','info']};});
            //MethodDef start at Server.ceylon (23:1-27:1)
            server$.start=function($2ke){
                var server$=this;
                server$.$2k9.start(m$2jq.$JsCallable((function($2kf){
                    $2ke($2kf);
                }),[{nm:'error',mt:'prm',$t:{t:m$2jq.$_Object}}],{Arguments$Callable:{t:'T',l:[{t:m$2jq.$_Object}]},Return$Callable:{t:m$2jq.Anything}}));
            };server$.start.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$2jq.Anything},ps:[{nm:'callback',mt:'prm',$t:{t:m$2jq.Callable,a:{Arguments$Callable:{t:'T',l:[{$t:{t:m$2jq.$_Object}}]},Return$Callable:{t:m$2jq.Anything}}}}],$cont:Server,pa:1,d:['io.node.hapi','Server','$m','start']};};
            
            //MethodDef route at Server.ceylon (29:1-40:1)
            server$.route=function($2kg,$2kh,$2ki){
                var server$=this;
                /*BEG dynblock*/
                server$.$2k9.route({method:$2kg,path:$2kh,handler:$2ki});
                /*END dynblock*/
            };server$.route.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$2jq.Anything},ps:[{nm:'method',mt:'prm',$t:{t:m$2jq.$_String}},{nm:'path',mt:'prm',$t:{t:m$2jq.$_String}},{nm:'handler',mt:'prm',$t:{t:m$2jq.Callable,a:{Arguments$Callable:{t:'T',l:[{$t:{t:Request}},{$t:{t:Reply}}]},Return$Callable:{t:m$2jq.Anything}}}}],$cont:Server,pa:1,d:['io.node.hapi','Server','$m','route']};};
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
        m$2jq.initTypeProtoI(hapiServer,'io.node.hapi::hapiServer');
        (function(hapiServer$){
            hapiServer$.connection={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:hapiServer},ps:[{nm:'options',mt:'prm',$t:{t:m$2jq.Anything}}],$cont:hapiServer,pa:5,d:['io.node.hapi','hapiServer','$m','connection']};}};hapiServer$.start={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2jq.Anything},ps:[{nm:'callback',mt:'prm',$t:{t:'u',l:[{t:m$2jq.Null},{t:m$2jq.Callable,a:{Arguments$Callable:{t:'T',l:[{$t:{t:m$2jq.$_Object}}]},Return$Callable:{t:m$2jq.Anything}}}]}}],$cont:hapiServer,pa:5,d:['io.node.hapi','hapiServer','$m','start']};}};hapiServer$.route={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2jq.Anything},ps:[{nm:'options',mt:'prm',$t:{t:m$2jq.Anything}}],$cont:hapiServer,pa:5,d:['io.node.hapi','hapiServer','$m','route']};}};
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
        m$2jq.initTypeProtoI(ServerInfo,'io.node.hapi::ServerInfo');
        (function(serverInfo$){
            
            //AttributeDecl uri at Server.ceylon (57:1-57:25)
            serverInfo$.$prop$getUri={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2jq.$_String},$cont:ServerInfo,pa:5,d:['io.node.hapi','ServerInfo','$at','uri']};}};
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
        m$2jq.initTypeProtoI(ServerOptions,'io.node.hapi::ServerOptions');
        (function(serverOptions$){
            
            //AttributeDecl port at Server.ceylon (61:1-61:27)
            serverOptions$.$prop$getPort={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2jq.Integer},$cont:ServerOptions,pa:5,d:['io.node.hapi','ServerOptions','$at','port']};}};
        })(ServerOptions.$$.prototype);
    }
    return ServerOptions;
}
ex$.$init$ServerOptions=$init$ServerOptions;
$init$ServerOptions();

//AttributeGetterDef serverOptions at Server.ceylon (64:0-69:0)
function getServerOptions(){
    
    //ObjectDef opts at Server.ceylon (65:1-67:1)
    function $2kj(){
        var $2kj$=new $2kj.$$;ServerOptions($2kj$);
        var port=(3000);
        m$2jq.atr$($2kj$,'port',function(){return port;},undefined,function(){return{mod:$CCMM$,$t:{t:m$2jq.Integer},$cont:$2kj,pa:3,d:['io.node.hapi','serverOptions','$o','opts$oc542j','$at','port']};});
        return $2kj$;
    };$2kj.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$2jq.Basic},$cont:getServerOptions,sts:[{t:ServerOptions}],d:['io.node.hapi','serverOptions','$o','opts$oc542j']};};
    function $init$$2kj(){
        if($2kj.$$===undefined){
            m$2jq.initTypeProto($2kj,'io.node.hapi::opts',m$2jq.Basic,$init$ServerOptions());
            (function($2kj$){
                delete $2kj$.port;
            })($2kj.$$.prototype);
        }
        return $2kj;
    }
    $init$$2kj();
    var $2kk;
    function get$2kk(){
        if($2kk===m$2jq.INIT$)m$2jq.throwexc(m$2jq.InitializationError("Cyclic initialization trying to read the value of \'opts\' before it was set"),'65:1-67:1','Server.ceylon');
        if($2kk===undefined){$2kk=m$2jq.INIT$;$2kk=$init$$2kj()();$2kk.$crtmm$=get$2kk.$crtmm$;}
        return $2kk;
    }
    get$2kk.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$2kj},$cont:getServerOptions,d:['io.node.hapi','serverOptions','$o','opts$oc542k']};};
    $prop$get$2kk={get:get$2kk,$crtmm$:get$2kk.$crtmm$};
    get$2kj=get$2kk;$prop$get$2kj=get$2kk;
    return get$2kk();
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
