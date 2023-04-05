import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '@layouts/Default';
import { Home } from '@pages/Home';
import { Checkout } from '@pages/Checkout';
import { Success } from '@pages/Success';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success/:form" element={<Success />} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Route>
    </Routes>
  );
};
