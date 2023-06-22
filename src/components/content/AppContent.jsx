import React from "react";

import { Route, Routes } from "react-router-dom";
import routes from "../../routes";

const AppContent = () => {
  return (
    <div>
      <Routes >
        {routes.map((route) => {
          return (
            route.element && (
              <Route
                key={route.name}
                path={route.path}
                exact={route.exact}
                name={route.name}
                element={<route.element category={route.name} />}
              />
            )
          );
        })}
    
      </Routes>
    </div>
  );
};

export default AppContent;
