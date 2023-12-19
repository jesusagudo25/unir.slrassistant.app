import { MatxSuspense } from 'app/theme';
import { MatxLayouts } from './index';

const MatxLayout = (props) => {
  const Layout = MatxLayouts['layout2'];

  return (
    <MatxSuspense>
      <Layout {...props} />
    </MatxSuspense>
  );
};

export default MatxLayout;
