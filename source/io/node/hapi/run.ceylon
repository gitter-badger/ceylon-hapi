"Run the module `io.node.hapi`."
shared void run() {
	Server server = hapi.createServer();
	
	server.connection(serverOptions);
	
	server.start(void (Object error) {
		dynamic {
			console.log("Server running at:", server.info.uri);
		}
	});
	
	server.route {
		method = "GET";
		path = "/";
		handler = void (request, reply) {
			dynamic {
				console.log("GET request for / recieved");
			}
		};
	};
}