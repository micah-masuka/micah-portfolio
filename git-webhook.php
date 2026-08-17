<?php
header('Content-Type: text/plain; charset=utf-8');
header('X-Robots-Tag: noindex, nofollow');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
  http_response_code(405);
  echo 'Method not allowed';
  exit;
}

$secretFile = __DIR__ . '/.webhook-secret';
$secret = is_readable($secretFile) ? trim((string) file_get_contents($secretFile)) : '';
if ($secret === '') {
  http_response_code(500);
  echo 'Webhook is not configured';
  exit;
}

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

putenv('HOME=' . __DIR__);
putenv('GIT_TERMINAL_PROMPT=0');
chdir(__DIR__);

$git = is_executable('/usr/bin/git') ? '/usr/bin/git' : 'git';
$git = escapeshellcmd($git);
$cmd = $git . ' fetch origin main 2>&1 && ' . $git . ' reset --hard origin/main 2>&1';
$output = [];
$code = 1;
exec($cmd, $output, $code);

if ($code !== 0) {
  http_response_code(500);
  echo 'FAILED';
  exit;
}

echo 'OK';
