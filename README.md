# php-session-quirks

Hello there, fellow developer!

Are you still using the good old `$_SESSION` in your php applications? Beware!
Using sessions in php is not without its issues. If you are still using sessions, 
you need to be aware about the following issues.
* Locks and performance issues
* No locks and race conditions
* Security (CSRF and XSS)

This will be a work in progress blog, and I will write about each issue as I find time.
I will try to back everything up with executable examples which the reader can use to reproduce the mentioned issues.

And if at all possible, try to [avoid sessions in php](https://pasztor.at/blog/stop-using-php-sessions), but only after
you understand and agree with the points layed out in this blog.

Happy coding!
Start at [baseline](example_0)
