
import getData from '../utils/getData';

const Home = async () =>  {

    const books = await getData();

    const view = ` 


    <div class="content__card">
    

    <div class="content__card--texts">
        <h1 class="title">Title Book</h1>
        <p class="author">Name author</p>
    </div>
</div>

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