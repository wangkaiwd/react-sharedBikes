export const formateDate = (time) => {
  const handleZero = (num) => {
    if (num < 10) {
      return '0' + num;
    }
    return num
  }
  if (!time) return '';
  const temp = new Date(time)
  const year = temp.getFullYear();
  const month = handleZero(temp.getMonth() + 1);
  const day = handleZero(temp.getDate());
  const hour = handleZero(temp.getHours());
  const minute = handleZero(temp.getMinutes());
  const second = handleZero(temp.getSeconds());
  const result = `${year}-${month}-${day} ${hour}:${minute}:${second}`
  return result
}
