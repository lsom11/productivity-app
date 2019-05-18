const API_URL: string =
  "https://pvxc214tzi.execute-api.us-east-1.amazonaws.com/v1";

const getConfiguration = async locale => {
  const method = "GET";
  const fetchOptions = {
    method,
  };

  const url = `${API_URL}/config/text?locale=${locale}`;
  const response = await fetch(url, fetchOptions);
  const json = await response.json();
  if (response.status > 299) {
    throw json;
  }
  return json;
};

export { getConfiguration };
