const API = "http://openlibrary.org/people/george08/lists/OL97L/seeds.json";

const getData = async (id) => {

     const apiURL = id ?`${API}${id}`:API;
    try {
      const response = await fetch(apiURL);

      const data = await response.json();
      return data;
    } catch (error) {
    console.log('Fetch Error', error);
    };
};

export default getData;