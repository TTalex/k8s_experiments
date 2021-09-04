This repo is an experiment with kubernetes.

Three echo servers written in various languages with the same API are hosted and replicated in a k8 cluster.

A frontend is also hosted and replicated. When an user loads it, multiple queries are sent to the echo servers and the results are displayed.

Echo servers are configured to reply to queries in a random time (0 to 5 seconds). This is done in order to simulate processing time.

The whole repository premise is to build an overengineered "string cleaner", taking an user string as an input and "cleaning" it (removing all of its content) and doing so in an overcomplicated way.
