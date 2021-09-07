import jwtDecode from "jwt-decode";

export function getCurrentUser() {
  try {
    const token = localStorage.getItem("token");
    return jwtDecode(token);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem("token");
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.clear();
}

export function guideNextPage(user) {
  if (!user) {
    return "/guestregister";
  }
  // if (Object.keys(currentUser.address).length === 0) {
  //   return "/address";
  // }
  return "/checkout";
}
