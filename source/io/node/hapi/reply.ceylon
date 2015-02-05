//Response reply(Err err, Res result) { dynamic {
//	return reply(err, result);
//}}
shared dynamic Request {}
shared dynamic Reply {}

Response ceylonReply(Err? error, Res? result) {
	if (exists e = error) {
		if (exists r = result) { 
			dynamic { return reply(e, r); }
		} else { 
			dynamic { return reply(e); } 
		}
	} else if (exists r = result) { 
		dynamic { return reply(r); }
	} else { 
		dynamic { return reply(); }
	}
}

shared dynamic Response {
	shared formal Response(String) type;
	shared formal {Entry<String, String>*} headers;
	shared formal Response(String, String) header;
	shared formal dynamic source;
	shared formal String variety;
	shared formal dynamic app;
	shared formal dynamic plugins;
	shared formal ResponseSettings settings;
}

shared dynamic ResponseSettings {
	shared formal String charset;
	shared formal String encoding;
	shared formal Boolean passThrough;
	shared formal dynamic stringify;
	shared formal Integer ttl;
	shared formal Boolean varyEtag;
}

shared dynamic Error {}
shared dynamic Buffer {}
shared dynamic Stream {}
shared dynamic Promise {}
shared alias Res => 
		String|Integer|Boolean|Buffer|
		Error|Stream|Promise|Object|Anything[];
shared alias Err =>
		String|Integer|Boolean|Buffer|
		Error|Stream|Promise|Object|Anything[];