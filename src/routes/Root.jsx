import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Root() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main role="main" className="flex-grow p-5 max-w-7xl mx-auto w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Root;
