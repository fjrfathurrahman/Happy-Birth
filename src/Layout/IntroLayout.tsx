import { headline, pp, subHeadline } from "../data/Data";
import { ButtonCom } from "../components/button/ButtonCom";
import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";
export default function IntroLayout() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const handleOpen = () => {
    onOpen();
  }

  return (
    <main className="py-24 flex flex-col gap-9">
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
      <ModalCom isOpen={isOpen} onOpenChange={onOpenChange}/>
    </main>
  );
}

const ModalCom = (props : any) => {
  return (
    <>
    <div>
      <Modal 
        isOpen={props.isOpen}
        placement={"top-center"}
        onOpenChange={props.onOpenChange}
      >
        <ModalContent className="bg-[#16161a]">
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">Happy Birthday my love</ModalHeader>
              <ModalBody>
                <p> 
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque similique natus soluta, iste nulla tenetur vitae laboriosam nihil maxime ullam ad, voluptate expedita dolores tempore aliquam. Corrupti distinctio quas consectetur quam sapiente, veniam consequuntur nisi? Nulla ducimus modi quibusdam illo?
                </p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      </div>
    </>
  )
}