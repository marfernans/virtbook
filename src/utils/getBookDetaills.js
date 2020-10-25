const API = "https://www.googleapis.com/books/v1/volumes?q=${book}";                                 

const getData = async () => {
  try {
    const response = await fetch(API);
    
    const data = await response.json();

    console.log(data);
    
    return data;

  } catch (error) {
    console.log('Fetch Error', error);
  };
};

export default getData;