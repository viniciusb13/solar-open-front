'use client'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/modal";
import CloseMark from '../CloseMarks/CloseMark';

interface ModalComponentPropTypes {
  title: string;
  modalTrigger: React.ReactNode;
  modalContent: React.ReactNode;
}

export default function ModalComponent({ title, modalTrigger, modalContent }: ModalComponentPropTypes) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <div className="cursor-pointer" onClick={onOpen}>{modalTrigger}</div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        hideCloseButton={true}
        portalContainer={document.body}
        classNames={{
          body: "py-6",
          wrapper: `z-[999999] mx-auto max-h-screen`,
          // backdrop: "z-[99999] bg-[#000] bg-opacity-50 backdrop-blur",
          backdrop: "z-[99999] bg-[#000] bg-opacity-75 backdrop-opacity-90",
          base: `no-scroll my-4 max-h-[90%] h-fit overflow-auto border-[#292f46] bg-[#37313c] text-[#a8b0d3] rounded-2xl min-w-1/2 max-w-screen-md`,
          header: "border-b-[1px] border-[#292f46]",
        }}

        >
        <ModalContent>
          {(onClose) => (
            <>
              <button onClick={onClose} className="absolute p-4 right-0">
                <CloseMark />
              </button>
              <ModalHeader className="flex flex-col gap-1 items-center">
                <h2 className="text-center text-2xl font-medium text-white">{title}</h2>
              </ModalHeader>
              <ModalBody>
                {modalContent}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}