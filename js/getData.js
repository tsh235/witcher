const getData = async (url) => {
  const response = await fetch(url);

  if (response.ok) {
    return response.json();
  } else {
    throw `Ошибка, товарищ, ${response.status}`;
  }
};

export default getData;