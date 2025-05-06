import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen text-black flex flex-col">
      <Header />
      {/* Add padding-top to avoid content being hidden behind fixed navbar */}
      <main className="flex-grow pt-[64px] px-4 sm:px-6 md:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
