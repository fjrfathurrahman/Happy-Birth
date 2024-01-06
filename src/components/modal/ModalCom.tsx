import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import { dataTextModal } from "../../data/Data";

export const ModalCom = (props : any) => {
  return (

    <div>
      <Modal isOpen={props.isOpen} onOpenChange={props.onOpenChange} placement="top-center" >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <h1 className="text-xl font-semibold">Happy Birthday</h1>
              </ModalHeader>
              <ModalBody>
                {dataTextModal.map((item) => (
                  <p className="py-3 text-justify border-t" key={item.id}>{item.text}</p>
                ))}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, laboriosam libero aspernatur assumenda inventore, dolores tempore reprehenderit odit atque, amet fuga unde ea voluptatibus aliquid. Doloribus repellendus, placeat eum beatae et consequatur sapiente, eaque totam error, alias ad dolorem sequi dolorum! Eius, temporibus. Iusto, maiores facilis harum dolorem quaerat quia rem, voluptas libero beatae eius accusantium explicabo ratione quas. Est, quisquam dolore, asperiores expedita fuga placeat sunt voluptatibus modi rerum eligendi, accusamus et minus. Impedit officiis aliquam quas porro debitis nam non quibusdam, quod quasi asperiores facere accusamus nihil nobis, delectus ducimus voluptates? Facere iure totam laudantium quis pariatur, repudiandae dignissimos odit adipisci, quod assumenda atque autem doloremque. Suscipit libero sunt qui vitae expedita aut, cumque molestias nisi dignissimos laudantium, a aliquam perspiciatis esse! Repellat fuga perferendis amet consequatur cum.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};