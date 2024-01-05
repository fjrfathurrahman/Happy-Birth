import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";

export const ModalCom = (props : any) => {
  return (
    <>
      <div>
        <Modal
          isOpen={props.isOpen}
          placement={"center"}
          onOpenChange={props.onOpenChange}
        >
          <ModalContent className="bg-[#fffffe]">
            {() => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  <h1 className="font-bold">Happy Birthday my love</h1>
                </ModalHeader>
                <ModalBody>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Cumque similique natus soluta, iste nulla tenetur vitae
                    laboriosam nihil maxime ullam ad, voluptate expedita dolores
                    tempore aliquam. Corrupti distinctio quas consectetur quam
                    sapiente, veniam consequuntur nisi? Nulla ducimus modi
                    quibusdam illo?
                  </p>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};
