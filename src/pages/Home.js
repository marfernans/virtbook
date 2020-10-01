
import getData from '../utils/getData';

const Home = async () =>  {

    const books = await getData();
    console.log(books);
    // const view = ` 

    //     <div class="books__covers">
    //         ${books.results.map(books => `

    //         <article class="books__items">
            
    //         <a href="#/${book.id}/"> 
    //         <img src="${book.image}"alt="${book.name}">

    //             <h2 class="title">${book.name}/h2>

    //             </a>
        
    //         </article>

    //         `).join('')}
            
            
    //     </div>

    // `;

    // return view;

};


    export default Home;