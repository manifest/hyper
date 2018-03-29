(function() {var implementors = {};
implementors["hyper"] = ["impl&lt;T, B&gt; <a class=\"trait\" href=\"https://docs.rs/futures-core/0.2.0-beta/futures_core/future/trait.Future.html\" title=\"trait futures_core::future::Future\">Future</a> for <a class=\"struct\" href=\"hyper/client/conn/struct.Connection.html\" title=\"struct hyper::client::conn::Connection\">Connection</a>&lt;T, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: AsyncRead + AsyncWrite,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"hyper/body/trait.Entity.html\" title=\"trait hyper::body::Entity\">Entity</a>&lt;Error = <a class=\"enum\" href=\"hyper/error/enum.Error.html\" title=\"enum hyper::error::Error\">Error</a>&gt; + 'static,&nbsp;</span>","impl&lt;T, B&gt; <a class=\"trait\" href=\"https://docs.rs/futures-core/0.2.0-beta/futures_core/future/trait.Future.html\" title=\"trait futures_core::future::Future\">Future</a> for <a class=\"struct\" href=\"hyper/client/conn/struct.Handshake.html\" title=\"struct hyper::client::conn::Handshake\">Handshake</a>&lt;T, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: AsyncRead + AsyncWrite,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"hyper/body/trait.Entity.html\" title=\"trait hyper::body::Entity\">Entity</a>&lt;Error = <a class=\"enum\" href=\"hyper/error/enum.Error.html\" title=\"enum hyper::error::Error\">Error</a>&gt; + 'static,&nbsp;</span>","impl <a class=\"trait\" href=\"https://docs.rs/futures-core/0.2.0-beta/futures_core/future/trait.Future.html\" title=\"trait futures_core::future::Future\">Future</a> for <a class=\"struct\" href=\"hyper/client/conn/struct.ResponseFuture.html\" title=\"struct hyper::client::conn::ResponseFuture\">ResponseFuture</a>","impl <a class=\"trait\" href=\"https://docs.rs/futures-core/0.2.0-beta/futures_core/future/trait.Future.html\" title=\"trait futures_core::future::Future\">Future</a> for <a class=\"struct\" href=\"hyper/client/connect/struct.HttpConnecting.html\" title=\"struct hyper::client::connect::HttpConnecting\">HttpConnecting</a>","impl <a class=\"trait\" href=\"https://docs.rs/futures-core/0.2.0-beta/futures_core/future/trait.Future.html\" title=\"trait futures_core::future::Future\">Future</a> for <a class=\"struct\" href=\"hyper/client/struct.FutureResponse.html\" title=\"struct hyper::client::FutureResponse\">FutureResponse</a>","impl&lt;I, B, S&gt; <a class=\"trait\" href=\"https://docs.rs/futures-core/0.2.0-beta/futures_core/future/trait.Future.html\" title=\"trait futures_core::future::Future\">Future</a> for <a class=\"struct\" href=\"hyper/server/conn/struct.Connection.html\" title=\"struct hyper::server::conn::Connection\">Connection</a>&lt;I, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"hyper/client/trait.Service.html\" title=\"trait hyper::client::Service\">Service</a>&lt;Request = <a class=\"struct\" href=\"hyper/struct.Request.html\" title=\"struct hyper::Request\">Request</a>&lt;<a class=\"struct\" href=\"hyper/struct.Body.html\" title=\"struct hyper::Body\">Body</a>&gt;, Response = <a class=\"struct\" href=\"hyper/struct.Response.html\" title=\"struct hyper::Response\">Response</a>&lt;B&gt;, Error = <a class=\"enum\" href=\"hyper/error/enum.Error.html\" title=\"enum hyper::error::Error\">Error</a>&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: AsyncRead + AsyncWrite + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"hyper/body/trait.Entity.html\" title=\"trait hyper::body::Entity\">Entity</a>&lt;Error = <a class=\"enum\" href=\"hyper/error/enum.Error.html\" title=\"enum hyper::error::Error\">Error</a>&gt; + 'static,&nbsp;</span>","impl <a class=\"trait\" href=\"https://docs.rs/futures-core/0.2.0-beta/futures_core/future/trait.Future.html\" title=\"trait futures_core::future::Future\">Future</a> for <a class=\"struct\" href=\"hyper/server/struct.Run.html\" title=\"struct hyper::server::Run\">Run</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
