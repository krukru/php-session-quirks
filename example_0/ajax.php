<?php

$startTime = microtime(true);
// No session, no problem!
// This will probably process requests in parallel, depending on your MPM configuration

sleep(1); // doing the work

$stopTime = microtime(true);

echo round($stopTime - $startTime, 1) . "s";

