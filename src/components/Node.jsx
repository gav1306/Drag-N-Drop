import { Handle, Position, NodeResizer } from "@xyflow/react";

import { Button } from "@/components/ui/button";
import ViewCardDetailsModal from "./modal/ViewCardDetailsModal";

function Node({ data, selected }) {
  const { name, description } = data;

  return (
    <>
      <NodeResizer handleStyle={{ width: "15px", height: "15px", borderRadius: "50%" }} minWidth={250} minHeight={100} isVisible={!!selected} />
      <Handle style={{ width: "15px", height: "15px" }} type="target" position={Position.Top} />
      <div className="border-2 flex p-4 rounded-md shadow-md flex-col gap-2 h-full items-center min-w-[250px] min-h-[100px] bg-secondary">
        <h2 className="font-semibold ">{name}</h2>
        <p>
          {`${description.substring(0, 10)}${
            description.length > 10 ? "..." : ""
          }`}
        </p>
        {description.length > 10 && (
          <ViewCardDetailsModal name={name} description={description}>
            <Button className="p-0 h-auto" variant="link">
              show more
            </Button>
          </ViewCardDetailsModal>
        )}
      </div>
      <Handle style={{ width: "15px", height: "15px" }} type="source" position={Position.Bottom} id="a" />
    </>
  );
}

export default Node;
