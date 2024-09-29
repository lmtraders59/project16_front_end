export const modifyHtmlString = (html) => {
  return html.replace(/<a /g, '<a target="_blank" rel="noopener noreferrer" ');
};
