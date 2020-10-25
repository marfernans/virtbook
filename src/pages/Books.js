import getHash from '../utils/getHash';

import getData from '../utils/getData';

const Book = async () => {

    const id = location.hash.slice(1).split('/')[2] ;

    console.log(id)
    const response = await fetch('https://www.googleapis.com/books/v1/volumes/' + id);
    const book = await response.json()

    console.log(book);



    const view = ` 

    <section class="container">

    <div class="books__card">
        
        <img src="${book.volumeInfo.imageLinks.thumbnail}"alt="${book.name}"/>
        <h2>${book.volumeInfo.title}</h2>

    </dvi>

    <div class="detaills__book">
    
        <h3>Authors: ${book.volumeInfo.authors}</h3>
        <h3>Subtitle: ${book.volumeInfo.subtitle}</h3>
        <h3>Publisher: ${book.volumeInfo.publishedDate}</h3>
        <h3>Publisher: ${book.volumeInfo.publisher}</h3>
            
    </div>
    
    </section> 
    `;

    return view;   
};

    export default Book;