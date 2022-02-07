import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return ( 
        <div className="content">
            <Header></Header>
            { children }
            <Footer></Footer>
        </div>
     );
}
 
export default Layout;