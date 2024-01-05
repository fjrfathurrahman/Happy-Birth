import { headline, pp, subHeadline } from "../data/Data";
import { ButtonCom } from "../components/button/ButtonCom";
import { useDisclosure } from "@nextui-org/react";
import { ModalCom } from "../components/modal/ModalCom";

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
        <img src={pp} className="rounded-full w-52 h-52 mx-auto shadowCostum border-8 border-neutral-100" />
      </div>
      <ModalCom isOpen={isOpen} onOpenChange={onOpenChange}/>
    </main>
  );
}