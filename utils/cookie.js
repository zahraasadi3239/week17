import { cookies } from "next/headers";
// function setCookie(name, value) {
//   const cookieStore = cookies();
//   const maxAge = 30 * 24 * 60 * 60;
//   cookieStore.set(`${name}=${value};max-age=${maxAge};path=/`, {
//     httpOnly: true,
//   });
// }

// function getCookie(name) {
//   const cookieStore = cookies();
//   const value = cookieStore.get(name)?.value;
//   const parts = value?.split(`; ${name}=`);
//   if (parts?.length === 2) return;
//   parts?.pop()?.split(";")?.shift();
// }

export function getCookie(name) {
  if (typeof document === "undefined") {
    return null;
  }

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(";").shift() || null;
  }
  return null;
}

export function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

export function deleteCookie(name) {
  const date = new Date();

  const expires = `expires=${date.toUTCString()}`;

  document.cookie = name + `=; Path=/; Expires=${expires}`;
}
