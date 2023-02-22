import { useEffect } from "react";

export async function fetchAPI() {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    return data;
  } catch (err) {
    alert("something went wrong\n" + err);
  }
}
