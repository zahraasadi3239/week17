import { cookies } from "next/headers";
function setCookie(name, value) {
  const cookieStore = cookies();
  const maxAge = 30 * 24 * 60 * 60;
  cookieStore.set(`${name}=${value};max-age=${maxAge};path=/`, {
    httpOnly: true,
  });
}

function getCookie(name) {
  const cookieStore = cookies();
  const value = cookieStore.get(name)?.value;
  const parts = value?.split(`; ${name}=`);
  if (parts?.length === 2) return;
  parts?.pop()?.split(";")?.shift();
}

export { setCookie, getCookie };
