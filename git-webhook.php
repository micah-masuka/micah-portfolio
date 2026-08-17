<?php
header('Content-Type: text/plain; charset=utf-8');
header('X-Robots-Tag: noindex, nofollow');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
  http_response_code(405);
  echo 'Method not allowed';
  exit;
}

$secret = 'fc08afd56a929567831995209da4f065ae77a19e600fa9f9';
$payload = file_get_contents('php://input') ?: '';
$signature = $_SERVER['HTTP_X_HUB_SIGNATURE_256'] ?? '';
$expected = 'sha256=' . hash_hmac('sha256', $payload, $secret);

if ($signature === '' || !hash_equals($expected, $signature)) {
  http_response_code(403);
  echo 'Forbidden';
  exit;
}

$event = $_SERVER['HTTP_X_GITHUB_EVENT'] ?? '';
if ($event === 'ping') {
  echo 'pong';
  exit;
}

if ($event !== 'push') {
  echo 'ignored';
  exit;
}

putenv('HOME=/home/digivwht');
putenv('GIT_TERMINAL_PROMPT=0');
$root = __DIR__;
chdir($root);

$git = is_executable('/usr/bin/git') ? '/usr/bin/git' : 'git';
$cmd = escapeshellcmd($git) . ' pull --ff-only origin main 2>&1';
$output = [];
$code = 1;
exec($cmd, $output, $code);

if ($code !== 0) {
  http_response_code(500);
}

echo implode("\n", $output);
echo $code === 0 ? "\nOK" : "\nFAILED";
