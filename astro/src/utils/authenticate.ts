export const AuthenticateRestApi = async () => {
  const authResponse = await fetch(
    `http://localhost/wayward-wind-band/wp-json/jwt-auth/v1/token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "USERNAME",
        password: "PASSWORD",
      }),
    }
  );

  try {
    const { token } = await authResponse.json();
    return token;
  } catch (error) {
    console.error(error);
    return null;
  }
};
