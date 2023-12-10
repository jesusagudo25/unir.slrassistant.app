import * as React from 'react';
import ProductCategories from '../sections/ProductCategories';
import ProductSmokingHero from '../sections/ProductSmokingHero';
import AppFooter from '../sections/AppFooter';
import ProductHero from '../sections/ProductHero';
import ProductValues from '../sections/ProductValues';
import ProductHowItWorks from '../sections/ProductHowItWorks';
import ProductCTA from '../sections/ProductCTA';
import AppAppBar from '../sections/AppAppBar';
import withRoot from '../withRoot';

function Home() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Home);

