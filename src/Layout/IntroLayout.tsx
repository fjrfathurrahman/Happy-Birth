import { headline, pp, subHeadline } from "../data/Data";
import { ButtonCom } from "../components/button/ButtonCom";
import {
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";

export default function IntroLayout() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };

  return (
    <main className="py-12">
      <div className="text-center flex flex-col mb-10">
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
        <img
          src={pp}
          className="rounded-full w-52 h-52 mx-auto shadowCostum border-8 border-neutral-100"
        />
      </div>
      <ModalCom isOpen={isOpen} onOpenChange={onOpenChange} />
    </main>
  );
}

const ModalCom = (props: any) => {
  return (
    <Modal
      isOpen={props.isOpen}
      placement={"center"}
      onOpenChange={props.onOpenChange}
      className="h-20"
    >
      <ModalContent className="bg-[#fffffe]">
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Happy Birthday my love
            </ModalHeader>
            <ModalBody>
              <p className="text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
                similique natus soluta, iste nulla tenetur vitae laboriosam
                nihil maxime ullam ad, voluptate expedita dolores tempore
                aliquam. Corrupti distinctio quas consectetur quam sapiente,
                veniam consequuntur nisi? Nulla ducimus modi quibusdam illo?
              </p>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
