// pages/[category].js
import { client } from "../libs/client";
import Link from "next/link";

export default function category({ blog }) {
  return (
    <div>
      <h1>{blog[0].category.name}</h1>
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
    </div>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/${content.category.slug}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const categoryName = context.params.category;
  const blogData = await client.get({endpoint: "blog"});
  const currentCategoryData = blogData.contents.filter((content) => {
    return content.category.slug === categoryName;
  })

  return {
    props: {
      blog: currentCategoryData,
    },
  };
};