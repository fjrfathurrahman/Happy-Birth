import { headline, pp, subHeadline } from "../data/Data";
import { ButtonCom } from "../components/button/ButtonCom";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import React from "react";
export default function IntroLayout() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const handleOpen = () => {
    onOpen();
  }

  return (
    <main className="container py-24 flex flex-col gap-9">
      <div className="text-center flex flex-col ">
        {headline}
        {subHeadline}
        <ButtonCom
          color="primary"
          variant="shadow"
          size="md"
          ClassName="font-semibold text-md mt-5"
          text="For Youuu"
          onPress={handleOpen}
        />
      </div>
      <div>
        <img src={pp} className="rounded-full w-52 h-52 mx-auto" />
      </div>
      <Modal 
        isOpen={isOpen} 
        placement={"top-center"}
        onOpenChange={onOpenChange} 
      >
        <ModalContent className="bg-[#16161a]">
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </main>
  );
}
