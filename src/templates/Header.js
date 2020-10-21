
const Header = () => {

    const view = ` 

    <header class="header__container">
        
        <div class="header__logo">
            <h1 class="logo"> <a href="/"> VIRTBOOK </a></h1>
        </div>

        <div class="search">     
            <h2 class="shearch__title"></h2>

            <input class="input" type="text" placeholder="  🔍 Search...">
        </div>

    </header>

    <section class="container__hero">

        <img class="image-hero" src="../src/assets/image-hero.jpg" alt="hero">
        
        <div class="title__hero">      
            <h1 class="title-text">Get all the quality content, share or exchange a physical book</h1>
            <p class="subtitle-text" >Improve your knowledge in technology</p>

        </div>
                
    </section>


    `;

    return view;
};

export default Header;