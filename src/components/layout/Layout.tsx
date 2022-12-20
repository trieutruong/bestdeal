import Footer from "../footer/Footer";
import Header from "../header/Header";

const Layout = ({ children } : any) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout_content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
