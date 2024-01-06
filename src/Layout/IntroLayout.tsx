import { headline, pp, subHeadline } from "../data/Data";
import { ButtonCom } from "../components/button/ButtonCom";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";

export default function IntroLayout() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <>
      <main className="py-24">
        <div className="text-center flex flex-col mb-10">
          {headline}
          {subHeadline}
          <ButtonCom
            color="primary"
            variant="shadow"
            size="md"
            ClassName="font-semibold text-md mt-5"
            text="For Youuu"
            onPress={onOpen}
          />
        </div>
        <div>
          <img
            src={pp}
            className="rounded-full w-52 h-52 mx-auto shadowCostum border-8 border-neutral-100"
          />
        </div>
      </main>
      <ModalCom isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}

const ModalCom = (props : any) => {
  return (

    <>
      <Modal isOpen={props.isOpen} onOpenChange={props.onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h1 className="text-xl font-semibold">Happy Birthday</h1>
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
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
    </>
  );
};
