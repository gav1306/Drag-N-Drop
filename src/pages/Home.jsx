import { useState, DragEvent, useCallback } from "react";
import {
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  MiniMap,
} from "@xyflow/react";
import CreateCardModal from "../components/modal/CreateCardModal";
import Node from "../components/Node";

const onDragOver = (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
};

let id = 0;
const getId = () => `dndnode_${id++}`;

const nodeOrigin = [0.5, 0.5];

const nodeTypes = { card: Node };

const Home = () => {
  const [reactFlowInstance, setReactFlowInstance] = useState();
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [open, setOpen] = useState(false);
  const [dropPosition, setDropPosition] = useState({ x: 0, y: 0 });
  const onConnect = useCallback(
    (connection) => {
      const edge = {
        ...connection,
        markerEnd: {
          type: "arrow",
        },
      };
      setEdges((eds) => addEdge(edge, eds));
    },
    [setEdges]
  );
  const onInit = (rfi) => setReactFlowInstance(rfi);

  const onDrop = (event) => {
    event.preventDefault();
    setDropPosition({ x: event.clientX, y: event.clientY });
    setOpen(true);
  };

  const createNodeHandler = (data) => {
    if (reactFlowInstance) {
      const position = reactFlowInstance.screenToFlowPosition(dropPosition);
      const newNode = {
        id: getId(),
        position,
        data,
        type: "card",
      };

      setNodes((nds) => nds.concat(newNode));
    }
  };

  const closeHandler = () => {
    setOpen(false);
  };

  return (
    <div className="flex flex-col h-[100dvh] w-[100dvw]">
      <CreateCardModal
        open={open}
        setOpen={setOpen}
        onClose={closeHandler}
        onNodeCreate={createNodeHandler}
      />
      <div className="h-full w-full">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onEdgesChange={onEdgesChange}
          onNodesChange={onNodesChange}
          onConnect={onConnect}
          onInit={onInit}
          onDrop={onDrop}
          onDragOver={onDragOver}
          nodeOrigin={nodeOrigin}
          nodeTypes={nodeTypes}
        >
          <Background variant="dots" gap={20} bgColor="#0f172a" />
          <MiniMap position="top-left" />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};

export default Home;
