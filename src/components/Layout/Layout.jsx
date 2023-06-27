import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import css from './Layout.module.css';
import { Suspense } from 'react';
import Footer from 'components/Footer/Footer';
import AppBar from 'components/AppBar/AppBar';

const Layout = () => {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 1500,
          style: {
            background: '#360404',
            color: '#fff',
          },
        }}
      />
      <header className={css.header}>
        {/* <Navigation /> */}
        <AppBar />
      </header>

      <main className={css.main}>
       
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;