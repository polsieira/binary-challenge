
export const getData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('There was an error')
  }
  const data = await response.json();
  return data;
}