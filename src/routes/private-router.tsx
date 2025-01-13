import { ReactElement } from 'react';

import { Navigate } from 'react-router-dom';

import { LOGIN_PATH } from '@/data';

type Props = {
  children: ReactElement;
};

const PrivateRouter = ({ children }: Props) => {
  const token = localStorage.getItem('token');

  return token ? <>{children}</> : <Navigate to={LOGIN_PATH} replace />;
};

export default PrivateRouter;
