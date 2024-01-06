import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import { dataTextModal } from "../../data/Data";

export const ModalCom = (props : any) => {
  return (

    <div>
      <Modal isOpen={props.isOpen} onOpenChange={props.onOpenChange} placement="top-center" >
        <ModalContent>
          {() => (
            <>
              <ModalHeader>
                <h1 className="text-xl font-semibold">Happy Birthday</h1>
              </ModalHeader>
              <ModalBody className="pb-12">
                {dataTextModal.map((item) => (
                 <div key={item.id} className="py-3 text-justify border-t">
                  {item.textModal}
                 </div>
                ))}
              </ModalBody>
              <ModalFooter>
                
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};