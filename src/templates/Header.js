
const Header = () => {

    const view = ` 


    <header class="header__container">
        
    <div class="header__logo">
        <h1 class="logo"> <a href="/"> VIRTBOOK  </a></h1>
    </div>

    <div class="search">
        
        <h2 class="shearch__title"></h2>
        
        <input class="input" type="text" placeholder="  🔍  Search...">
    </div>
    
    </header>

    <section class="container__hero">

        <div class="content__hero">

            
                
                <img class="image-hero" src="https://images.unsplash.com/photo-1580053839707-e5a51acee863?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="">
         
                </div>

             <div class="title__hero">
                 <h1 class="title-text">Get all the quality content, share or exchange a physical book</h1>
                 <p class="subtitle-text" >Improve your knowledge in technology</p>
             </div>
          
        

    </section>

    `;

    return view;
};

export default Header;