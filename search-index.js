var searchIndex = {};
searchIndex["tower"] = {"doc":"Definition of the core `Service` trait to Tower","items":[[3,"Ready","tower","Future yielding a `Service` once the service is ready to process a request",null,null],[8,"Service","","An asynchronous function from `Request` to a `Response`.",null,null],[16,"Request","","Requests handled by the service.",0,null],[16,"Response","","Responses given by the service.",0,null],[16,"Error","","Errors produced by the service.",0,null],[16,"Future","","The future response value.",0,null],[11,"ready","","A future yielding the service when it is ready to accept a request.",0,{"inputs":[{"name":"self"}],"output":{"name":"ready"}}],[10,"poll_ready","","Returns `Ready` when the service is able to process requests.",0,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[10,"call","","Process the request and return the response asynchronously.",0,null],[8,"ReadyService","","An asynchronous function from `Request` to a `Response` that is always ready to process a request.",null,null],[16,"Request","","Requests handled by the service.",1,null],[16,"Response","","Responses returned by the service.",1,null],[16,"Error","","Errors produced by the service.",1,null],[16,"Future","","The future response value.",1,null],[10,"call","","Process the request and return the response asynchronously.",1,null],[8,"NewService","","Creates new `Service` values.",null,null],[16,"Request","","Requests handled by the service",2,null],[16,"Response","","Responses given by the service",2,null],[16,"Error","","Errors produced by the service",2,null],[16,"Service","","The `Service` value created by this factory",2,null],[16,"InitError","","Errors produced while building a service.",2,null],[16,"Future","","The future of the `Service` instance.",2,null],[10,"new_service","","Create and return a new service value asynchronously.",2,null],[11,"poll","","",3,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}]],"paths":[[8,"Service"],[8,"ReadyService"],[8,"NewService"],[3,"Ready"]]};
searchIndex["tower_balance"] = {"doc":"","items":[[3,"Balance","tower_balance","Balances requests across a set of inner services.",null,null],[3,"ResponseFuture","","",null,null],[4,"Error","","Error produced by `Balance`",null,null],[13,"Inner","","",0,null],[13,"Balance","","",0,null],[13,"NotReady","","",0,null],[5,"power_of_two_choices","","Chooses services using the [Power of Two Choices][p2c].",null,{"inputs":[{"name":"d"},{"name":"r"}],"output":{"generics":["poweroftwochoices"],"name":"balance"}}],[5,"round_robin","","Attempts to choose services sequentially.",null,{"inputs":[{"name":"d"}],"output":{"generics":["roundrobin"],"name":"balance"}}],[0,"choose","","",null,null],[3,"PowerOfTwoChoices","tower_balance::choose","Chooses nodes using the [Power of Two Choices][p2c].",null,null],[3,"RoundRobin","","Chooses nodes sequentially.",null,null],[3,"TooFew","","Indicates that there were not at least two services.",null,null],[3,"Replicas","","Holds two or more services.",null,null],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",1,{"inputs":[{"name":"r"}],"output":{"name":"self"}}],[11,"choose","","Chooses two distinct nodes at random and compares their load.",1,{"inputs":[{"name":"self"},{"name":"replicas"}],"output":{"name":"usize"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",2,{"inputs":[],"output":{"name":"roundrobin"}}],[11,"choose","","",2,{"inputs":[{"name":"self"},{"name":"replicas"}],"output":{"name":"usize"}}],[8,"Choose","","A strategy for choosing nodes.",null,null],[10,"choose","","Returns the index of a replica to be used next.",3,{"inputs":[{"name":"self"},{"name":"replicas"}],"output":{"name":"usize"}}],[11,"clone","","",4,{"inputs":[{"name":"self"}],"output":{"name":"toofew"}}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"len","","",5,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"index","","",5,null],[0,"load","tower_balance","",null,null],[3,"Constant","tower_balance::load","Wraps a type so that `Load::load` returns a constant value.",null,null],[3,"PendingRequests","","Expresses load based on the number of currently-pending requests.",null,null],[3,"WithPendingRequests","","Wraps `inner`'s services with `PendingRequests`.",null,null],[11,"new","","",6,{"inputs":[{"name":"t"},{"name":"m"}],"output":{"name":"self"}}],[11,"load","","",6,{"inputs":[{"name":"self"}],"output":{"name":"m"}}],[11,"poll_ready","","",6,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"call","","",6,null],[11,"poll","","Yields the next discovery change set.",6,{"inputs":[{"name":"self"}],"output":{"generics":["change"],"name":"poll"}}],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",7,{"inputs":[{"name":"self"}],"output":{"name":"pendingrequests"}}],[11,"new","","",7,{"inputs":[{"name":"t"}],"output":{"name":"self"}}],[11,"load","","",7,{"inputs":[{"name":"self"}],"output":{"name":"count"}}],[11,"poll_ready","","",7,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"call","","",7,null],[11,"new","","",8,{"inputs":[{"name":"d"}],"output":{"name":"self"}}],[11,"poll","","Yields the next discovery change set.",8,{"inputs":[{"name":"self"}],"output":{"generics":["change"],"name":"poll"}}],[8,"Load","","Exposes a load metric.",null,null],[16,"Metric","","",9,null],[10,"load","","",9,null],[11,"fmt","tower_balance","",10,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Creates a new balancer.",10,{"inputs":[{"name":"d"},{"name":"c"}],"output":{"name":"self"}}],[11,"is_not_ready","","Returns true iff there are no ready services.",10,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"num_ready","","Counts the number of services considered to be ready.",10,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"num_not_ready","","Counts the number of services not considered to be ready.",10,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"poll_ready","","Prepares the balancer to process a request.",10,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"call","","",10,null],[11,"poll","","",11,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"cause","","",0,{"inputs":[{"name":"self"}],"output":{"generics":["error"],"name":"option"}}],[11,"description","","",0,{"inputs":[{"name":"self"}],"output":{"name":"str"}}]],"paths":[[4,"Error"],[3,"PowerOfTwoChoices"],[3,"RoundRobin"],[8,"Choose"],[3,"TooFew"],[3,"Replicas"],[3,"Constant"],[3,"PendingRequests"],[3,"WithPendingRequests"],[8,"Load"],[3,"Balance"],[3,"ResponseFuture"]]};
searchIndex["tower_buffer"] = {"doc":"Buffer requests when the inner service is out of capacity.","items":[[3,"Buffer","tower_buffer","Adds a buffer in front of an inner service.",null,null],[3,"ResponseFuture","","Future eventually completed with the response to the original request.",null,null],[3,"Worker","","Task that handles processing the buffer. This type should not be used directly, instead `Buffer` requires an `Executor` that can accept this task.",null,null],[3,"SpawnError","","Error produced when spawning the worker fails",null,null],[4,"Error","","Errors produced by `Buffer`.",null,null],[13,"Inner","","",0,null],[13,"Closed","","",0,null],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"buffer"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Creates a new `Buffer` wrapping `service`.",1,{"inputs":[{"name":"t"},{"name":"e"}],"output":{"generics":["spawnerror"],"name":"result"}}],[11,"poll_ready","","",1,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"call","","",1,null],[11,"poll","","",3,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"poll","","",4,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"cause","","",0,{"inputs":[{"name":"self"}],"output":{"generics":["error"],"name":"option"}}],[11,"description","","",0,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"cause","","",2,{"inputs":[{"name":"self"}],"output":{"generics":["error"],"name":"option"}}],[11,"description","","",2,{"inputs":[{"name":"self"}],"output":{"name":"str"}}]],"paths":[[4,"Error"],[3,"Buffer"],[3,"SpawnError"],[3,"ResponseFuture"],[3,"Worker"]]};
searchIndex["tower_discover"] = {"doc":"Tower service discovery","items":[[3,"List","tower_discover","Static service discovery based on a predetermined list of services.",null,null],[4,"Change","","A change in the service set",null,null],[13,"Insert","","",0,null],[13,"Remove","","",0,null],[8,"Discover","","Provide a uniform set of services able to satisfy a request.",null,null],[16,"Key","","NewService key",1,null],[16,"Request","","Requests handled by the discovered services",1,null],[16,"Response","","Responses given by the discovered services",1,null],[16,"Error","","Errors produced by the discovered services",1,null],[16,"Service","","The discovered `Service` instance.",1,null],[16,"DiscoverError","","Error produced during discovery",1,null],[10,"poll","","Yields the next discovery change set.",1,{"inputs":[{"name":"self"}],"output":{"generics":["change"],"name":"poll"}}],[11,"new","","",2,{"inputs":[{"name":"i"}],"output":{"name":"list"}}],[11,"poll","","",2,{"inputs":[{"name":"self"}],"output":{"generics":["change"],"name":"poll"}}]],"paths":[[4,"Change"],[8,"Discover"],[3,"List"]]};
searchIndex["tower_filter"] = {"doc":"Conditionally dispatch requests to the inner service based on the result of a predicate.","items":[[3,"Filter","tower_filter","",null,null],[3,"ResponseFuture","","",null,null],[4,"Error","","Errors produced by `Filter`",null,null],[13,"Rejected","","The predicate rejected the request.",0,null],[13,"Inner","","The inner service produced an error.",0,null],[13,"NoCapacity","","The service is out of capacity.",0,null],[8,"Predicate","","Checks a request",null,null],[16,"Error","","",1,null],[16,"Future","","",1,null],[10,"check","","",1,null],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",2,{"inputs":[{"name":"t"},{"name":"u"},{"name":"usize"}],"output":{"name":"self"}}],[11,"poll_ready","","",2,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"call","","",2,null],[11,"poll","","",3,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}]],"paths":[[4,"Error"],[8,"Predicate"],[3,"Filter"],[3,"ResponseFuture"]]};
searchIndex["tower_in_flight_limit"] = {"doc":"Tower middleware that limits the maximum number of in-flight requests for a service.","items":[[3,"InFlightLimit","tower_in_flight_limit","",null,null],[3,"ResponseFuture","","",null,null],[4,"Error","","Error returned when the service has reached its limit.",null,null],[13,"NoCapacity","","",0,null],[13,"Upstream","","",0,null],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"inflightlimit"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Create a new rate limiter",1,{"inputs":[{"name":"t"},{"name":"usize"}],"output":{"name":"self"}}],[11,"get_ref","","Get a reference to the inner service",1,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"get_mut","","Get a mutable reference to the inner service",1,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"into_inner","","Consume `self`, returning the inner service",1,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"poll_ready","","",1,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"call","","",1,null],[11,"call","","",1,null],[11,"poll","","",2,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"drop","","",2,{"inputs":[{"name":"self"}],"output":null}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"cause","","",0,{"inputs":[{"name":"self"}],"output":{"generics":["error"],"name":"option"}}],[11,"description","","",0,{"inputs":[{"name":"self"}],"output":{"name":"str"}}]],"paths":[[4,"Error"],[3,"InFlightLimit"],[3,"ResponseFuture"]]};
searchIndex["tower_mock"] = {"doc":"Mock `Service` that can be used in tests.","items":[[3,"Mock","tower_mock","A mock service",null,null],[3,"Handle","","Handle to the `Mock`.",null,null],[3,"Request","","",null,null],[3,"Respond","","Respond to a request received by `Mock`.",null,null],[3,"ResponseFuture","","Future of the `Mock` response.",null,null],[4,"Error","","Enumeration of errors that can be returned by `Mock`.",null,null],[13,"Closed","","",0,null],[13,"NoCapacity","","",0,null],[13,"Other","","",0,null],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Create a new `Mock` and `Handle` pair.",1,null],[11,"poll_ready","","",1,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"call","","",1,null],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"drop","","",1,{"inputs":[{"name":"self"}],"output":null}],[11,"poll_request","","Asynchronously gets the next request",2,{"inputs":[{"name":"self"}],"output":{"generics":["option"],"name":"poll"}}],[11,"next_request","","Synchronously gets the next request.",2,{"inputs":[{"name":"self"}],"output":{"generics":["request"],"name":"option"}}],[11,"allow","","Allow a certain number of requests",2,{"inputs":[{"name":"self"},{"name":"u64"}],"output":null}],[11,"drop","","",2,{"inputs":[{"name":"self"}],"output":null}],[11,"into_parts","","Split the request and respond handle",3,null],[11,"respond","","",3,{"inputs":[{"name":"self"},{"name":"u"}],"output":null}],[11,"error","","",3,{"inputs":[{"name":"self"},{"name":"e"}],"output":null}],[11,"deref","","",3,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"respond","","",4,{"inputs":[{"name":"self"},{"name":"t"}],"output":null}],[11,"error","","",4,{"inputs":[{"name":"self"},{"name":"e"}],"output":null}],[11,"poll","","",5,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}]],"paths":[[4,"Error"],[3,"Mock"],[3,"Handle"],[3,"Request"],[3,"Respond"],[3,"ResponseFuture"]]};
searchIndex["tower_rate_limit"] = {"doc":"Tower middleware that applies a timeout to requests.","items":[[3,"RateLimit","tower_rate_limit","",null,null],[3,"Rate","","",null,null],[3,"ResponseFuture","","",null,null],[4,"Error","","The request has been rate limited",null,null],[13,"RateLimit","","",0,null],[13,"Upstream","","",0,null],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"self"}],"output":{"name":"rate"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Create a new rate limiter",1,{"inputs":[{"name":"t"},{"name":"rate"},{"name":"timer"}],"output":{"name":"self"}}],[11,"get_ref","","Get a reference to the inner service",1,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"get_mut","","Get a mutable reference to the inner service",1,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"into_inner","","Consume `self`, returning the inner service",1,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"new","","Create a new rate",2,{"inputs":[{"name":"u64"},{"name":"duration"}],"output":{"name":"self"}}],[11,"poll_ready","","",1,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"call","","",1,null],[11,"poll","","",3,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"cause","","",0,{"inputs":[{"name":"self"}],"output":{"generics":["error"],"name":"option"}}],[11,"description","","",0,{"inputs":[{"name":"self"}],"output":{"name":"str"}}]],"paths":[[4,"Error"],[3,"RateLimit"],[3,"Rate"],[3,"ResponseFuture"]]};
searchIndex["tower_ready_service"] = {"doc":"","items":[[8,"ReadyService","tower_ready_service","An asynchronous function from `Request` to a `Response` that is always ready to process a request.",null,null],[16,"Request","","Requests handled by the service.",0,null],[16,"Response","","Responses returned by the service.",0,null],[16,"Error","","Errors produced by the service.",0,null],[16,"Future","","The future response value.",0,null],[10,"call","","Process the request and return the response asynchronously.",0,null]],"paths":[[8,"ReadyService"]]};
searchIndex["tower_reconnect"] = {"doc":"","items":[[3,"Reconnect","tower_reconnect","",null,null],[3,"ResponseFuture","","",null,null],[4,"Error","","",null,null],[13,"Inner","","",0,null],[13,"Connect","","",0,null],[13,"NotReady","","",0,null],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",1,{"inputs":[{"name":"t"}],"output":{"name":"self"}}],[11,"poll_ready","","",1,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"call","","",1,null],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"poll","","",2,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"cause","","",0,{"inputs":[{"name":"self"}],"output":{"generics":["error"],"name":"option"}}],[11,"description","","",0,{"inputs":[{"name":"self"}],"output":{"name":"str"}}]],"paths":[[4,"Error"],[3,"Reconnect"],[3,"ResponseFuture"]]};
searchIndex["tower_router"] = {"doc":"Routes requests to one of many inner inner services based on the request.","items":[[3,"Router","tower_router","Routes requests to an inner service based on the request.",null,null],[3,"ResponseFuture","","",null,null],[4,"Error","","Error produced by the `Router` service",null,null],[13,"Inner","","Error produced by inner service.",0,null],[13,"Route","","Error produced during route recognition.",0,null],[13,"NotReady","","Request sent when not ready.",0,null],[8,"Recognize","","Matches the request with a route",null,null],[16,"Request","","Request being matched",1,null],[16,"Response","","Inner service's response",1,null],[16,"Error","","Error produced by a failed inner service request",1,null],[16,"RouteError","","Error produced by failed route recognition",1,null],[16,"Service","","The destination service",1,null],[10,"recognize","","Recognize a route",1,null],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Create a new router",2,{"inputs":[{"name":"t"}],"output":{"name":"self"}}],[11,"poll_ready","","",2,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"call","","",2,null],[11,"poll","","",3,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}]],"paths":[[4,"Error"],[8,"Recognize"],[3,"Router"],[3,"ResponseFuture"]]};
searchIndex["tower_timeout"] = {"doc":"Tower middleware that applies a timeout to requests.","items":[[3,"Timeout","tower_timeout","Applies a timeout to requests.",null,null],[3,"ResponseFuture","","`Timeout` response future",null,null],[4,"Error","","Errors produced by `Timeout`.",null,null],[13,"Inner","","The inner service produced an error",0,null],[13,"Timeout","","The request did not complete within the specified timeout.",0,null],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",1,{"inputs":[{"name":"t"},{"name":"timer"},{"name":"duration"}],"output":{"name":"self"}}],[11,"poll_ready","","",1,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"call","","",1,null],[11,"poll","","",2,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"cause","","",0,{"inputs":[{"name":"self"}],"output":{"generics":["error"],"name":"option"}}],[11,"description","","",0,{"inputs":[{"name":"self"}],"output":{"name":"str"}}]],"paths":[[4,"Error"],[3,"Timeout"],[3,"ResponseFuture"]]};
searchIndex["tower_util"] = {"doc":"Various utility types and functions that are generally with Tower.","items":[[3,"ServiceFn","tower_util","A `Service` implemented by a closure.",null,null],[3,"NewServiceFn","","A `NewService` implemented by a closure.",null,null],[0,"either","","Contains `EitherService` and related types and functions.",null,null],[4,"EitherService","tower_util::either","Combine two different service types into a single type.",null,null],[13,"A","","",0,null],[13,"B","","",0,null],[11,"poll_ready","","",0,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"call","","",0,null],[0,"option","tower_util","Contains `OptionService` and related types and functions.",null,null],[3,"OptionService","tower_util::option","Optionally forwards requests to an inner service.",null,null],[3,"ResponseFuture","","Response future returned by `OptionService`.",null,null],[4,"Error","","Error produced by `OptionService` responding to a request.",null,null],[13,"Inner","","",1,null],[13,"None","","",1,null],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"some","","Returns an `OptionService` that forwards requests to `inner`.",2,{"inputs":[{"name":"t"}],"output":{"name":"self"}}],[11,"none","","Returns an `OptionService` that responds to all requests with `Error::None`.",2,{"inputs":[],"output":{"name":"self"}}],[11,"poll_ready","","",2,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"call","","",2,null],[11,"poll","","",3,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[0,"boxed","tower_util","Trait object `Service` instances",null,null],[3,"BoxService","tower_util::boxed","A boxed `Service + Send` trait object.",null,null],[3,"UnsyncBoxService","","A boxed `Service` trait object.",null,null],[6,"BoxFuture","","A boxed `Future + Send` trait object.",null,null],[6,"UnsyncBoxFuture","","A boxed `Future` trait object.",null,null],[11,"new","","",4,{"inputs":[{"name":"s"}],"output":{"name":"self"}}],[11,"poll_ready","","",4,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"call","","",4,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"name":"boxfuture"}}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",5,{"inputs":[{"name":"s"}],"output":{"name":"self"}}],[11,"poll_ready","","",5,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"call","","",5,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"name":"unsyncboxfuture"}}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","tower_util","",6,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",6,{"inputs":[{"name":"self"}],"output":{"name":"servicefn"}}],[11,"new","","Create a new `ServiceFn` backed by the given closure",6,{"inputs":[{"name":"t"}],"output":{"name":"self"}}],[11,"call","","",6,null],[11,"new","","Returns a new `NewServiceFn` with the given closure.",7,{"inputs":[{"name":"t"}],"output":{"name":"self"}}],[11,"new_service","","",7,null]],"paths":[[4,"EitherService"],[4,"Error"],[3,"OptionService"],[3,"ResponseFuture"],[3,"BoxService"],[3,"UnsyncBoxService"],[3,"ServiceFn"],[3,"NewServiceFn"]]};
initSearch(searchIndex);
