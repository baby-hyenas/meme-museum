import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { SmallLogo } from '@/components';
import { useNavigate } from 'react-router-dom';
import ScrollToTop from '@/ScrollToTop';
import "./style.css";

const PageLayout = () => {
  const navigate = useNavigate();
  const gotoHome = () => {
    if(window.location.pathname == '/')
      window.location.reload();
      
    navigate('/');
  };

  return (
    <Suspense>
      <ScrollToTop />
      <div className="page-layout">
        <div className='pavicon'>
          <SmallLogo onClick={gotoHome} />
        </div>
        <Outlet />
      </div>
      </Suspense>
  );
};

export default PageLayout;