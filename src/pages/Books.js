import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Book =  async ()  => {

    const id = getHash();

    const  book = await getData(id);

    const view = ` 

       <div class="books__inner">

            <article class="books__card">
            
                <img src="${book.picture}" alt="${book.name}">
                <h2>${book.title}</h2>

            </article>

            <article class="books__card">

                <h3>Title:</h3>
                <h3>Subtitle:</h3>
                <h3>Authors:</h3>
                <h3>Publisher:</h3>
                <h3>publishedDate:</h3>
                
            </article>
       
       </div> 

    `;

    return view;   
};

    export default Book;