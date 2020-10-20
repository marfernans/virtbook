
import getData from '../utils/getData';

const Home = async () =>  {

    const books = await getData();

    const view = ` 

    <div class="detaill">
    <h1 class="title__detaill">Featured Books</h1>

    </div>
    
    <main class="main__container">

               

    ${books.entries.map(book => `

    <section class="container-card">

            <a href="#/${book.id}/">

            <img class="content__card" src="${book.picture.url}"alt="${book.name}">

            </a>
                
                <div class="text-title">
                <h1 class="title">${book.title}</h1>
                </div>

                  
        </section>

        `).join('')}

    </main>

 `;

    return view;

};
    export default Home;