const host = "https://temp.localhost:3000/api";

export const endpoints = async () => {
  try {
    const res = await fetch(`${host}/endpoint`,{});
    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    console.log(data.message);
  } catch (err) {
    console.error(err);
  }
};