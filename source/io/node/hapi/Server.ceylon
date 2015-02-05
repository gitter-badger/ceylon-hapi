shared class Server() {
	
	variable \IhapiServer _server; 
	
	dynamic {
		dynamic hapi = require("hapi");
		global.\iHapiServer = hapi.\iServer;
		_server = HapiServer();
	}
	
	shared void connection(ServerOptions options) {
		dynamic {
			_server.connection(
				dynamic [ port = options.port; ]
			);
		}
	}
	
	shared ServerInfo info { dynamic { 
		return _server.info; 
	}}
	
	shared void start(Anything(Object) callback) {
		_server.start(void (Object error) {
			callback(error);
		});
	}
	
	shared void route(String method, String path, 
		Anything(Request, Reply) handler) {
			dynamic {
				_server.route(
					dynamic [ 
						method = method;
						path = path;
						handler = handler;
					]
				);
			}
	}
	
}

shared dynamic \IhapiServer {

	shared formal \IhapiServer connection(dynamic options);
	
	shared formal void start(Anything(Object)? callback);
	
	shared formal void route(dynamic options);
	
	shared formal ServerInfo info;

}

shared dynamic ServerInfo {
	shared formal String uri;
}

shared dynamic ServerOptions {
	shared formal Integer port;
}

shared ServerOptions serverOptions { 
	object opts satisfies ServerOptions {
		port = 3000;
	}
	return opts;
}