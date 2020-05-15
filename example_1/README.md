# The common session (example 1)

## The server backend

This time, the backend uses sessions. It uses user sessions to keep track of a counter variable. 
Everytime the program refreshes, the counter increases for the active session.

The server returns the counter value, and the number of seconds it took to complete the request.

The complete implementation is [here](ajax.php)

Again, before running the experiment, what would you say is the expected outcome? Think about this before reading on.
The answer, well, depends. It depends because this experiment is NOT idempotent.

The first time you try it, you have no session cookie. This means that each request will initiate its own new session.
Expected behavior is that all requests will finish at the same time, and all counter values will equal to 1. Let's try it out!

Let's analyse what is going on here
