import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ blog, categories }) {
  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/${category.slug}`}>
              <a>{category.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const blogData = await client.get({ endpoint: "blog" });
  const categoriesData = await client.get({ endpoint: "categories" });

  return {
    props: {
      blog: blogData.contents,
      categories: categoriesData.contents,
    },
  };
};