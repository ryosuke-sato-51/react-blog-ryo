export default function Main({ children }) {
  return (
    <>
      <main className="l-main">
        {children}
      </main>
      <style jsx>{`
        .l-main {
          width: calc(800 / 1280 * 100%);
        }
      `}</style>
    </>
  )
}