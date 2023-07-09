import React from "react";
import { PersistentDrawerLeft } from "./PersistentDrawer";
import { ResponsiveDrawer } from "./ResponsiveDrawer";
import { Footer } from "./LayoutComponents";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* <PersistentDrawerLeft>{children}</PersistentDrawerLeft> */}
      {children}
    </div>
  );
};
