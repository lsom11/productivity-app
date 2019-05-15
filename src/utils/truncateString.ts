function truncateString(str, l = 20, e) {
  let length = l;
  let ending = e;
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = '...';
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  }
  return str;
}

export default truncateString;
