# Ceylon-Hapi

This is ceylonified hapi.js.  Provides hapi.js documentation, typing (where possible), and several changed methods that allow you to utilize ceylon's features and still run a stable node HTTP server.

## Features

* hapi.js server instantiation
* hapi.js API underneath a Ceylon API that gives you:
    *    Ceylon's strong typing
    * Ceylon's refined java-like syntax
    * Ceylon's useful declarative syntax that makes routing, HTML, JSON, and tests a breeze
    * Ceylon's comprehensible modularity
    * and quite a bit more!
* utility functions and wrappers that abstract out much of the `dynamic` calls
* and anything else you or I can think of!

## Vision

I originally wanted to use express as that is more ubiquitous but hapi's instantiation currently works better with Ceylon's js compiler.  So far, hapi.js has been the least challenging part of getting this module working! However, part of that is due to my inexperience with Ceylon and also with some intricacies with the js compiler.

## Build

This is nowhere near complete and could just end up being implemented up to what I need it for.  No guarantees! Though I would like to get it in the [herd](https://modules.ceylon-lang.org/) someday.

### IDE

1. File > Import...
2. "Projects from git" > "Clone URI"
3. Provide https clone URL
4. Open the project dir in command prompt
5. `npm install hapi --save` 

### CLI

TODO

## License

Copyright (c) [2015], [Jacob Russo] <[madcap.russo@gmail.com]>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

