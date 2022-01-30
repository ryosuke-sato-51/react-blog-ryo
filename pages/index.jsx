import { client } from "../libs/client";
import Aside from '../components/aside';
import ArticleList from '../components/articleList';

export default function Home({ blog, categories }) {
  return (
    <>
      <main>
        <h1>記事一覧</h1>
        <ArticleList blog={blog}/>
      </main>
      <Aside categories={categories}/>
    </>
  );
}

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