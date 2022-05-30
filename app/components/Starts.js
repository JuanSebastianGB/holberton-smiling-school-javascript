export const Starts = (props) => {
  let { star } = props;
  let html = '';
  for (let i = 0; i < star; i++)
    html += `
  <img
    src="images/star_on.png"
    width="15" height="15"
    alt="Star on"
    loading="lazy"
  >
  `;
  for (let i = 0; i < 5 - star; i++)
    html += `
  <img
    src="images/star_off.png"
    width="15" height="15"
    alt="Star off"
    loading="lazy"
  >
  `;
  return html;
};
