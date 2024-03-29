export function Post(props) {

    let {date, content, title} = props;
    let dateFormat = new Date(date).toLocaleString()
    return`
    <section class="post-p">
    <aside>
    <h2>${title.rendered}</h2>
    <time datetime="${date}">${dateFormat}</time>
    </aside>
    <hr>
    <article>${content.rendered}</article>
    </section>
    `;
}