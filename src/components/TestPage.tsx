import * as React from 'react';
import NavbarNew from './test/NavbarNew';
import NavigationDrawer from './headerbar/NavigationDrawer';

const TestPage = () => {
  return (
    <div className="border border-black border-r-4">
      <NavbarNew />
      <NavigationDrawer />
    </div>
  );
};

export default TestPage;
