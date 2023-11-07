import { Outlet } from 'react-router-dom';
import { SmallLogo } from '../../components';
import { useNavigate } from 'react-router-dom';
import "./style.css";

const PageLayout = () => {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate('/');
  };

  return (
    <div className="page-layout">
      <div className='pavicon'>
        <SmallLogo onClick={gotoHome} />
      </div>
      <Outlet />
    </div>
  );
};

export default PageLayout;