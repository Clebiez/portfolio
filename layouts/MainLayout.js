import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = ({ children }) => (
    <>
        <Navbar />
        <div className="w-full pt-20 md:pt-10">{children}</div>
        <Footer />
    </>
)

export default MainLayout
