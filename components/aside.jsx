import Link from "next/link";
export default function Aside({ categories }) {
  return (
    <>
      <aside className="l-aside">
        <h2 className="l-aside__title">カテゴリ一覧</h2>
        <ul className="l-aside__list">
          {categories.map((category) => (
            <li key={category.id} className="l-aside__item">
              <Link href={`/${category.slug}`}>
                <a className="l-aside__link">{category.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <style jsx>{`
        .l-aside {
          width: calc(200 / 1280 * 100%);
          padding-top: 20px;
        }
        .l-aside__list{
          margin-top: 10px;
        }
        .l-aside__item{
          list-style-type:none;
        }
        .l-aside__item + .l-aside__item {
          margin-top: 5px;
        }
        .l-aside__link{
          text-decoration: none;
          color: #333;
        }
        .l-aside__link:hover{
          opacity: 0.7;
        }
      `}</style>
    </>
  )
}