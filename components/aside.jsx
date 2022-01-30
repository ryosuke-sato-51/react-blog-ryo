import Link from "next/link";
export default function Aside({ categories }) {
  return (
    <>
      <aside className="l-aside">
        <h2>カテゴリ一覧</h2>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              <Link href={`/${category.slug}`}>
                <a>{category.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <style jsx>{`
        .l-aside {
          width: calc(200 / 1280 * 100%);
        }
      `}</style>
    </>
  )
}