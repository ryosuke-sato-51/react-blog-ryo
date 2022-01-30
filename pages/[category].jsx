import { client } from "../libs/client";
import Aside from "../components/aside";
import ArticleList from "../components/articleList";

export default function category({ blog, categories }) {
  return (
    <>
      <main>
        <h1>{blog[0].category.name}</h1>
        <ArticleList blog={blog}/>
      </main>
      <Aside categories={categories}/>
    </>
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
  const categoriesData = await client.get({ endpoint: "categories" });

  return {
    props: {
      blog: currentCategoryData,
      categories: categoriesData.contents,
    },
  };
};