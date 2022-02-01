import Link from "next/link";
export default function Header() {
  return (
    <>
      <header className="l-header">
        <div className="l-header__logo">
          <Link href="/">
            <a>ヘッダーのロゴです</a>
          </Link>
        </div>
      </header>
      <style jsx>{`
        .l-header {
          max-width: 1340px;
          margin-left: auto;
          margin-right: auto;
          padding: 30px;
        }
        .l-header__logo{
          width: 300px;
        }
        .l-header__logo a{
          color: #333333;
          font-size: 20px;
          font-weight: bold;
          text-decoration: none;
        }
      `}</style>
    </>
  )
}