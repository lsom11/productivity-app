const API_URL = "https://pvxc214tzi.execute-api.us-east-1.amazonaws.com/v1";

const login = async (username, password) => {
  const method = "POST";
  const body = {
    password,
    username,
  };
  const fetchOptions = {
    body: JSON.stringify(body),
    method,
  };

  const url = `${API_URL}/login`;
  const response = await fetch(url, fetchOptions);
  const json = await response.json();
  if (response.status > 299) {
    throw json;
  }
  return json;
};
const register = async (email, username, password) => {
  const method = "POST";
  // TODO - onboarding screen pt 2 with name region default language etc
  const body = {
    email,
    firstName: "Luc",
    lastName: "Somers",
    password,
    username,
  };
  const fetchOptions = {
    body: JSON.stringify(body),
    method,
  };

  const url = `${API_URL}/register`;
  const response = await fetch(url, fetchOptions);
  const json = await response.json();
  if (response.status > 299) {
    return response;
  }
  return json;
};

export { login, register };
