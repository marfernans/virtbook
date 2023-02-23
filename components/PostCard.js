export function PostCard(props) {
    let {date, slug, title, featured_media_src_url} = props;

    let dateFormat = new Date(date).toLocaleString(),
     urlImg = featured_media_src_url
     ? featured_media_src_url
     :"./public/favicon.png";
     
    return`
    <article class="post-card">
    <img src="${urlImg}" alt="${title.rendered}"/>
    <h2>${title.rendered}</h2>
    <p>
        <time datetime="${date}">${dateFormat}</time>
        <a href="#/${slug}">Leer más...</a>
    </p>
    </article>
    `;
}