import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {routeConfig} from "shared/config/routerConfig/routerConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({element, path}) => (
          <Route path={path} element={element} key={path}/>
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;