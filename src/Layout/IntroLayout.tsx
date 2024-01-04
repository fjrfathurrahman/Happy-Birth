import { Button } from "@nextui-org/react";
import { headline, pp, subHeadline } from "../data/Data";
export default function IntroLayout() {
  return (
    <main className="container py-24 flex flex-col gap-9">
      <div className="text-center flex flex-col gap-3">
        {headline}
        {subHeadline}
        <Button
          color="primary"
          variant="shadow"
          size="md"
          className="font-semibold text-md mt-2"
        >
          For Youuu
        </Button>
      </div>
      <div className="img">
        <img src={pp} className="rounded-full w-52 h-52 mx-auto" />
      </div>
    </main>
  );
}
