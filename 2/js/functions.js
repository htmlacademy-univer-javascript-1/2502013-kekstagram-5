// eslint-disable-next-line no-unused-vars
function checkStringLen (line, number) {
  return line.lenght <= number;
}
// eslint-disable-next-line no-console, no-unused-vars
function palindrome(line) {
  let check = '';
  for (let i = line.length; i > 0; --i) {
    check += line[i];
  }
  // eslint-disable-next-line eqeqeq
  if (line == check) {
    return true;
  } else {
    return false;
  }
}

