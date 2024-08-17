const onDragStart = (event) => {
  event.dataTransfer.effectAllowed = "move";
};

const Sidebar = () => {
  return (
    <aside className="fixed top-0 right-0 h-full shadow-xl p-4 flex flex-col gap-3 bg-secondary">
      <h1 className="font-bold text-xl">Drag and Drop to create a card</h1>
      <div
        className="border p-2 rounded-md cursor-grab border-primary"
        onDragStart={onDragStart}
        draggable
      >
        Card
      </div>
    </aside>
  );
};

export default Sidebar;
