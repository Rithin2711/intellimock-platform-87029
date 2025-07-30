export function getSession() {
  const str = window.localStorage.getItem("intellimock-session");
  if (!str) return null;
  try {
    return JSON.parse(str);
  } catch (e) {
    return null;
  }
}

export function setSession(u) {
  window.localStorage.setItem("intellimock-session", JSON.stringify(u));
}

export function removeSession() {
  window.localStorage.removeItem("intellimock-session");
}
