(function() {var implementors = {};
implementors["lambda_http"] = [{"text":"impl Freeze for Body","synthetic":true,"types":[]},{"text":"impl Freeze for PayloadError","synthetic":true,"types":[]},{"text":"impl Freeze for ApiGatewayV2RequestContext","synthetic":true,"types":[]},{"text":"impl Freeze for ApiGatewayRequestContext","synthetic":true,"types":[]},{"text":"impl Freeze for AlbRequestContext","synthetic":true,"types":[]},{"text":"impl Freeze for RequestContext","synthetic":true,"types":[]},{"text":"impl Freeze for Elb","synthetic":true,"types":[]},{"text":"impl Freeze for Http","synthetic":true,"types":[]},{"text":"impl Freeze for Identity","synthetic":true,"types":[]},{"text":"impl Freeze for StrMap","synthetic":true,"types":[]},{"text":"impl&lt;H&gt; Freeze for Adapter&lt;H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;H: Freeze,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["lambda_runtime"] = [{"text":"impl Freeze for Context","synthetic":true,"types":[]},{"text":"impl Freeze for Config","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Freeze for HandlerFn&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()