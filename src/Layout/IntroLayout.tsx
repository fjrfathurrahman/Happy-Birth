import { headline, pp, subHeadline } from "../data/Data";
import { ButtonCom } from "../components/button/ButtonCom";

export default function IntroLayout(props : any) {
  
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
            onPress={props.onPress}
          />
        </div>
        <div>
          <img
            src={pp}
            className="rounded-full w-52 h-52 mx-auto shadowCostum border-8 border-neutral-100"
          />
        </div>
      </main>
    </>
  );
}


