// Находим элемент iframe по его ID
var iframeAudio = document.getElementById("iframeAudio");

// Функция для воспроизведения аудио через iframe
function playIframeAudio() {
  // Запускаем воспроизведение
  iframeAudio.contentWindow.postMessage('play', '*');
}

// Функция для остановки аудио через iframe (если это необходимо)
function stopIframeAudio() {
  // Останавливаем воспроизведение (если iframe поддерживает)
  iframeAudio.contentWindow.postMessage('pause', '*');
}

// Вызываем функцию для воспроизведения аудио при загрузке страницы
window.onload = function() {
  playIframeAudio();
};
