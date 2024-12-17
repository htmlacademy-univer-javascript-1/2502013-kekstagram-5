// Объявляем функцию для проверки длины строки
function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}
function isPalindrome(str) {
  // Нормализуем строку: убираем пробелы и приводим к нижнему регистру
  const normalizedStr = str.replace(/\s/g, '').toLowerCase();
  // Создаем пустую строку для хранения перевернутой версии
  let reversedStr = '';
  // Итерируемся по строке в обратном порядке и записываем символы в reversedStr
  for (let i = normalizedStr.length - 1; i >= 0; i--) {
    reversedStr += normalizedStr[i];
  }
  // Сравниваем нормализованную строку с перевернутой версией
  return normalizedStr === reversedStr;
}
checkStringLength('12121', 6);
isPalindrome('а роза упала на лапу азора');

