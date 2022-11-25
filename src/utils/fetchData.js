export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1d4c9111e4msh32df268e981cb27p153c3ajsn905f4d5d8560",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
