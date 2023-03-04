export function PostCard(props) {
     let { date, id, slug, title, _embedded } = props;
     let dateFormat = new Date(date).toLocaleString(),
     urlImg = _embedded["wp:featuredmedia"] 
    ? _embedded["wp:featuredmedia"][0].source_url :"./public/favicon.png";

    document.addEventListener("click",(e) => {
        if(!e.target.matches(".post-card a")) return false;
        localStorage.setItem("postId",e.target.dataset.id);  
    });
    
    return`
    <article class="post-card">
    <img src="${urlImg}"alt="${title.rendered}"/>
    <h2>${title.rendered}</h2>
    <p>
        <time datetime="${date}">${dateFormat}</time>
        <a href="#/${slug}"data-id ="${id}">Leer más...</a>
    </p>
    </article>
    `;
}