import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CreateCard } from "../form/CreateCard";
import { DialogDescription } from "@radix-ui/react-dialog";

const CreateCardModal = ({ open, setOpen, onClose, onNodeCreate }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Card</DialogTitle>
          <DialogDescription>Add Card Details</DialogDescription>
          <CreateCard onClose={onClose} onNodeCreate={onNodeCreate} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCardModal;
