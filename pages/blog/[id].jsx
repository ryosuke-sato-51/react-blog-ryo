import { client } from "../../libs/client";
import Aside from "../../components/aside";
import Main from "../../components/main";
import styles from "../../styles/blogContent.module.css";

export default function BlogId({ blog, categories }) {
  return (
    <>
      <Main>
        <h1 className="c-heading01">{blog.title}</h1>
        <div className="c-blog">
          <div className="c-blog__thumbnail"><img src={blog.image.url} alt=""/></div>
          <p className="c-blog__category">{blog.category && `${blog.category.name}`}</p>
          <div className="c-blog__body">
            <div className={styles.blogContent} dangerouslySetInnerHTML={{
              __html: `${blog.body}`,
            }}/>
          </div>
        </div>
      </Main> <Aside categories={categories}/>
      <style jsx>{`
        .c-blog {
          margin-top: 40px;
        }
        .c-blog__thumbnail img {
          display: block;
          width: 100%;
          height: auto;
        }
        .c-blog__category {
          font-size: 20px;
          font-weight: bold;
          margin-top: 20px;
        }
        .c-blog__body {
          margin-top: 20px;
        }
      `}</style>
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