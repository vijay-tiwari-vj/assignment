const BASE_URL = 'https://panorbit.in/api/users.json';

export const fetchUsers = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}