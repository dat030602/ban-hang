import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header"
function DefaultLayout({ children }) {
	return <div>
        <Header />
        <Body />
        <Footer/>
    </div>;
}

export default DefaultLayout;
