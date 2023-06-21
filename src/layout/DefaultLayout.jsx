import React from "react";
import AppContent from "../components/content/AppContent";
import AppHeader from "../components/header/AppHeader";
import AppSidebar from "../components/sidebar/AppSidebar";

const DefaultLayout = () => {
  return (
    <>
      <AppHeader />
      <AppSidebar />
      <AppContent />
    </>
  );
};

export default DefaultLayout;
