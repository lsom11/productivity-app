const API_URL = "https://pvxc214tzi.execute-api.us-east-1.amazonaws.com/v1";

const userInfo = async token => {
  const headers = {
    Authorization: token,
  };
  const method = "GET";

  const fetchOptions = {
    headers,
    method,
  };

  const url = `${API_URL}/user`;
  const response = await fetch(url, fetchOptions);
  const json = await response.json();
  if (response.status > 299) {
    throw json;
  }
  return json;
};

export { userInfo }; // eslint-disable-line
