import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <>
      <Header/>
      <div className="l-container">
        {children}
      </div>
      <Footer/>
      <style jsx>{`
        .l-container {
          display: flex;
          justify-content: space-between;
          max-width: 1340px;
          margin-left: auto;
          margin-right: auto;
          padding: 60px 30px;
        }
      `}</style>
    </>
  )
}