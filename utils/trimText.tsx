export default function trimText(text: string, length = 30): string {
  if (!text || text.length <= length) {
    return text;
  }

  return `${text.substr(0, length)}...`;
}
