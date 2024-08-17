import React from "react";
import SideBar from "./SideBar";
import { ReactFlowProvider } from "@xyflow/react";

const initialNodes = [];

const Layout = ({ children }) => {
  return (
    <ReactFlowProvider initialNodes={initialNodes} initialEdges={[]}>
      <main>{children}</main>
      <SideBar />
    </ReactFlowProvider>
  );
};

export default Layout;
