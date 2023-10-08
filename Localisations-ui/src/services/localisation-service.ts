import { Localisation } from "../models/localisation-model";

export const getLocalisations = async () => {
  const url = import.meta.env.VITE_API_URL;

  try {
    const response = await fetch(url);
    const result = (await response.json()) as Localisation[];

    return result;
  } catch (err) {
    throw err;
  }
};

export const createLocalisation = async (stringContent: string) => {
  const url = import.meta.env.VITE_API_URL;

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        content: stringContent,
      }),
    });

    const result = (await response.json()) as number;

    return result;
  } catch (err) {
    throw err;
  }
};

export const searchLocalisation = async (query: string) => {
  const url = `${import.meta.env.VITE_API_URL}/v1?search=`;

  try {
    const response = await fetch(`${url}${query}`);
    const result = (await response.json()) as Localisation[];

    return result;
  } catch (err) {
    throw err;
  }
};

export const updateLocalisation = async (id: number, content: string) => {
  const url = `${import.meta.env.VITE_API_URL}`;
  try {
    const response = await fetch(`${url}/${id}`, {
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: JSON.stringify({ content }),
    });

    return response;
  } catch (err) {
    throw err;
  }
};

export const deleteLocalisation = async (id: number) => {
  const url = `${import.meta.env.VITE_API_URL}`;
  try {
    const response = await fetch(`${url}/${id}`, {
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
    });

    return response;
  } catch (err) {
    throw err;
  }
};
