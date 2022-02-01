export default function Footer() {
  return (
    <>
      <footer className="l-footer">
        <p className="l-footer__text">
          <small>Copyright © ryo-sato</small>
        </p>
      </footer>
      <style jsx>{`
        .l-footer {
          max-width: 1340px;
          margin-left: auto;
          margin-right: auto;
          padding: 10px 30px;
        }
        .l-footer__text{
          text-align: center;
        }
      `}</style>
    </>
  )
}