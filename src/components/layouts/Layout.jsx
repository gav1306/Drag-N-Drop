import { ReactFlowProvider } from "@xyflow/react";
import Sidebar from "./Sidebar";

const initialNodes = [];

const Layout = ({ children }) => {
  return (
    <ReactFlowProvider initialNodes={initialNodes} initialEdges={[]}>
      <main>{children}</main>
      <Sidebar />
    </ReactFlowProvider>
  );
};

export default Layout;
