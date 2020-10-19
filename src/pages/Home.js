
import getData from '../utils/getData';

const Home = async () =>  {

    const books = await getData();

    const view = ` 

        <div class="books__covers">

            ${books.entries.map(book => `

            <article class="books__items">
            
            <a href="#/${book.id}/">

            <img src="${book.picture.url}"alt="${book.name}">

                <h2 class="title">${book.title}</h2>
                
                <span class="last__update">${book.last_update}</span>
            </a>
        
            </article>

            `).join('')}
            
            
        </div>

 `;

    return view;

};
    export default Home;