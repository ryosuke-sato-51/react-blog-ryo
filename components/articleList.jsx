import Link from "next/link";
export default function ArticleList({ blog }) {
  return (
    <ul>
      {blog.map((blog) => (
        <li key={blog.id}>
          <Link href={`/blog/${blog.id}`}>
            <a>
              <img src={blog.image.url} alt=""/>
              <span>{blog.title}</span>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}