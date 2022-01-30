// pages/blog/[id].js
import { client } from "../../libs/client";
import Aside from "../../components/aside";

export default function BlogId({ blog, categories }) {
  return (
    <>
      <main>
        <h1>{blog.title}</h1>
        <div><img src={blog.image.url} alt=""/></div>
        <p>{blog.category && `${blog.category.name}`}</p>
        <div dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}/>
      </main>
      <Aside categories={categories}/>
    </>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });
  const categoriesData = await client.get({ endpoint: "categories" });

  return {
    props: {
      blog: data,
      categories: categoriesData.contents,
    },
  };
};