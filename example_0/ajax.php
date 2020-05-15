<?php

$startTime = microtime(true);
// No session, no problem!
// This will probably process requests in parallel, depending on your MPM configuration
// Remember, if using HTTP/1 your browser will also limit your connections (Chrome limit is 6)

sleep(1); // doing the work

$stopTime = microtime(true);

echo round($stopTime - $startTime, 1) . "s";

