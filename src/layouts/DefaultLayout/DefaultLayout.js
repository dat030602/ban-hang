import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
// import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
export default DefaultLayout;
