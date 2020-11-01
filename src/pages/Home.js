
import getData from '../utils/getData';

const Home = async () =>  {
    
    const books = await getData();

    const view = ` 
        <main class="main__container">
            
        ${books.items.map(book => `

        <section class="container-card">
        
        <a href="#/book/${book.id}/">
            <img class="content__card" src="${book.volumeInfo.imageLinks.thumbnail}" alt="${book.title}">  
            </a>           
        </section>

 `).join('')}

    </main>`;

    return view;

};
    export default Home;