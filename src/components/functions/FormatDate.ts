export function FormatDate(str: string) {
  const date = new Date(str);

  const formattedDate = `${date.getFullYear()}年${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}月${date.getDate().toString().padStart(2, "0")}日${date
    .getHours()
    .toString()
    .padStart(2, "0")}時${date.getMinutes().toString().padStart(2, "0")}分${date
    .getSeconds()
    .toString()
    .padStart(2, "0")}秒`;

  return formattedDate;
}
