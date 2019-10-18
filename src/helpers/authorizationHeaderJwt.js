module.exports = function(json = false) {
  let Jwt = "";
  const rData = { headers: {} };
  const cachedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
  if (cachedUserInfo) {
    Jwt = cachedUserInfo.jwt;
    rData.headers.Authorization = `Bearer ${Jwt}`;
  }
  if (json) rData.headers["Content-Type"] = "application/json";

  return rData;
};
