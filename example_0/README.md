# Baseline (example 0)

To establish a baseline, first let us construct an example without sessions. Our "backend" will be a simple program
which "does something" (sleeps) for 1 second and then returns an output. The output contains the number of seconds since
the program started until it finished. This is to help debug the experiment.

The requests are created in the same loop, asynchronously, without waiting for the server to respond.
As the server starts responding, the table cells in the browser start changing color to indicate they have received the 
response.

Before running the example, what would you expect is going to happen?

My initial expectation was that all the responses would be returned roughly at the same time, after the "work" 
has completed (1 second).

But this was not the case. 

I thought to myself: "This has probably something to do with MPM setting", and sure enough, I
cranked those workers to the max! "Start working minions!" I said. "This will fix my issue", I thought to myself.

And then another surprise! 

The responses were coming in only 6 at a time, and judging from the "Server time" response
and the browser inspector, it looked like the browser was stalling the requests. Another blast from the past!
I remembered that browsers limit the amount of concurrent downloads per domain. The limit is somewhere between 2 and 16,
and apperently the limit was put in place by the IETF crew and is mentioned in the 
[HTTP/1.1 specification](https://www.ietf.org/rfc/rfc2616.txt).
Chrome's limit is 6[<sup>1</sup>](https://stackoverflow.com/a/30064610), which matches the experiment perfectly!

Newer protocols like HTTP/2 would not have this limitation!

So here is a quick recap of the baseline.
With no domain sharding is in place, we can process at max 6 requests concurrently on Chrome.
With domain sharding enabled, we can process as much as our web server allows (up to total max limit for the browser).

There is one more Chrome quirk I still cannot explain. When Chrome Inspector is turned off, the first 20 requests are all
loaded one at a time, and only the last 5 get loaded in a batch. If you can explain this to me, please leave a comment!
I just considered this an interesting "observer effect" and moved forward :)

So in our next experiments, we will observe how these sessions behave in both single domain and shareded domain modes. 
We will also increase our columns count to 6, to match the concurrent TCP limit.
