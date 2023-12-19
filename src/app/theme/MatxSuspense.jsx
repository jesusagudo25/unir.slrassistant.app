import { Suspense } from 'react';
import { MatxLoading } from 'app/theme';

const MatxSuspense = ({ children }) => {
  return <Suspense fallback={<MatxLoading />}>{children}</Suspense>;
};

export default MatxSuspense;
