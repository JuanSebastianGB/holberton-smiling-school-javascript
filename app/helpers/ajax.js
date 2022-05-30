export const ajax = async (props) => {
  let { url, cbSuccess } = props;
  await fetch(url)
    .then((response) =>
      response.ok ? response.json() : Promise.reject(response)
    )
    .then((json) => cbSuccess(json))
    .catch((err) => {
      let message = err.statusText || 'Error accessing to required API';
      console.log(message);
    });
};
