import { FieldValues } from "react-hook-form";

// actions for register user
export const register = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res?.ok) {
    console.error("User regisation faild", await res.text());
  }
  return res.json();
};

// actions for login
export const login = async (data: FieldValues) => {
  console.log(`Url: ${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res?.ok) {
    console.error("User login faild", await res.text());
  }
  return res.json();
};
