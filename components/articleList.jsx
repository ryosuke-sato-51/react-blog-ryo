import Link from "next/link";
export default function ArticleList({ blog }) {
  return (
    <>
      <ul className="c-articleList">
        {blog.map((blog) => (
          <li className="c-articleList__item" key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a className="c-articleList__link">
                <img src={blog.image.url} alt=""/>
                <span>{blog.title}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .c-articleList {
          width: 100%;
          margin-top: 40px;
        }
        .c-articleList__item{
          list-style-type:none;
        }
        .c-articleList__item + .c-articleList__item {
          margin-top: 20px;
        }
        .c-articleList__link{
          display: flex;
          justify-content: space-between;
          text-decoration: none;
        }
        .c-articleList__link img{
          width: calc(300 / 800 * 100%);
          height: auto;
        }
        .c-articleList__link span{
          width: calc(450 / 800 * 100%);
          color: #333;
          font-size: 26px;
        }
      `}</style>
    </>
  )
}