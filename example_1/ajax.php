<?php

$startTime = microtime(true);

// Blocking session

$sessionKey = 'session_key_foo';

session_start();

if (isset($_SESSION[$sessionKey]) === false) {
  $_SESSION[$sessionKey] = 0;
}

$_SESSION[$sessionKey] += 1;

sleep(1); // simulate some work being done

$stopTime = microtime(true);

echo round($stopTime - $startTime, 1) . "s | " . $_SESSION[$sessionKey];
