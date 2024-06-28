const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWFiYzc5NzEyMDQzNDI2ZjU3YTYxMzVjNTBlMDE3NiIsIm5iZiI6MTcxOTQzMDA2My4xODk1MTYsInN1YiI6IjY1YmU2MWM1OTMxZWExMDBjOTk5YzhjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PDJtUYSLzQQwkBmJ4Z2sS-VN-Zss4fbJsjONWPo9zvM",
  },
};

export const getTrends = (page) => {
  return fetch(
    `https://api.themoviedb.org/3/trending/all/week?language=ru-RU&page=${page}`,
    options
  )
    .then((response) => response.json())
    .catch((err) => {
      console.error(err);
      return false;
    });
};
export const getVideoPrevies = (type, id) => {
  return fetch(
    `https://api.themoviedb.org/3/${type}/${id}/videos?language=ru-RU`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return false;
    });
};
export const getContent = (type, typeOfContent, page) => {
  return fetch(
    `https://api.themoviedb.org/3/${typeOfContent}/${type}?language=ru-RU&page=${page}`,
    options
  )
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => false);
};
export const getSearch = (searchString) => {
  return fetch(
    `https://api.themoviedb.org/3/search/multi?query=${searchString}&include_adult=false&language=ru-RU&page=1`,
    options
  )
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => false);
};
