<?php
error_reporting(0);
ini_set('display_errors', 0);
header('Content-Type: application/json; charset=utf-8');

$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    echo json_encode(['success' => false]);
    exit;
}

if (isset($input['bot_attempt']) && $input['bot_attempt'] === true) {
    $MAIL_TO_BOT = 'chestnyseptik@yandex.ru, svyatma@gmail.com';
    $formType = isset($input['form_type']) ? $input['form_type'] : 'unknown';
    $typeLabels = [
        'callback' => 'Модальное окно',
        'calculator' => 'Калькулятор',
        'engineer' => 'Выезд инженера',
    ];
    $formTypeLabel = isset($typeLabels[$formType]) ? $typeLabels[$formType] : $formType;

    $subject = "Попытка спама: {$formTypeLabel}";
    $message = "Обнаружена попытка отправки формы ботом.\r\n";
    $message .= "Тип формы: {$formTypeLabel}\r\n";
    $message .= "IP: " . $_SERVER['REMOTE_ADDR'] . "\r\n";
    $message .= "Время: " . date('d.m.Y H:i:s') . "\r\n";
    $headers = "From: no-reply@{$_SERVER['HTTP_HOST']}\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    mail($MAIL_TO_BOT, $subject, $message, $headers);
    echo json_encode(['success' => false]);
    exit;
}

$honeypot = isset($input['email']) ? trim($input['email']) : '';
if (!empty($honeypot)) {
    echo json_encode(['success' => false]);
    exit;
}

// Проверка времени (опционально)
if (isset($input['form_timestamp']) && is_numeric($input['form_timestamp'])) {
    if (time() - (int)$input['form_timestamp'] < 2) {
        echo json_encode(['success' => false, 'message' => 'Too fast']);
        exit;
    }
}

$MAIL_TO = 'chestnyseptik@yandex.ru, svyatma@gmail.com';
$MAIL_FROM = 'no-reply@' . $_SERVER['HTTP_HOST'];

function esc($str) {
    return htmlspecialchars((string)$str, ENT_QUOTES, 'UTF-8');
}

$formType = isset($input['form_type']) ? $input['form_type'] : 'callback';
$name = isset($input['name']) ? trim($input['name']) : '';
$phone = isset($input['phone']) ? trim($input['phone']) : '';
$agreement = isset($input['agreement']) ? (bool)$input['agreement'] : false;
$formContext = isset($input['form_context']) ? trim($input['form_context']) : '';

$typeLabels = [
    'callback' => 'Модальное окно',
    'calculator' => 'Калькулятор',
    'engineer' => 'Выезд инженера',
];

$formType = isset($input['form_type']) ? $input['form_type'] : 'callback';
$formTypeLabel = isset($typeLabels[$formType]) ? $typeLabels[$formType] : $formType;

// Собираем текст письма
$lines = [];
$lines[] = "Тип формы: " . esc($formTypeLabel);
if (!empty($formContext)) {
    $lines[] = "Контекст: " . esc($formContext);
}
$lines[] = "Имя: " . esc($name);
$lines[] = "Телефон: " . esc($phone);
$lines[] = "Согласие: " . ($agreement ? 'да' : 'нет');

if ($formType === 'calculator') {
    $fields = [
        'residency' => 'Проживание',
        'people' => 'Количество проживающих',
        'water' => 'Вода',
        'bath' => 'Ванна',
        'bathCount' => 'Количество ванн',
        'timing' => 'Когда установка',
        'soil' => 'Грунт',
        'distance' => 'Удаленность от КАД',
    ];
    foreach ($fields as $key => $label) {
        $value = isset($input[$key]) && !empty($input[$key]) ? $input[$key] : '—';
        $lines[] = $label . ': ' . esc($value);
    }
}

$subject = "Новая заявка";
$message = implode("\r\n", $lines);
$headers = "From: {$MAIL_FROM}\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";

mail($MAIL_TO, $subject, $message, $headers);

echo json_encode(['success' => true]);