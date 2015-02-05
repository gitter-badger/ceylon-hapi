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
		handler = void (Request request, Reply reply) {
			//dynamic {
			//	console.log("GET request for / recieved");
			//}
			
			Response res = ceylonReply(reply, "success");
			res.type("text/plain");
			res.header("X-Custom", "some-value");
		};
	};
}