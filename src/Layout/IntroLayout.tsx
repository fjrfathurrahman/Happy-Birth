import { headline, pp } from "../data/Data";
export default function IntroLayout() {
  return (
    <main className="py-24 flex flex-col gap-9">
      <div className="text-center flex flex-col gap-3">
        {headline}
        <p>
          ARGHHHHHH my love, my darling, my happiness, <br /> my spirit, my life
          companion,
        </p>
        <button>For Youuu</button>
      </div>
      <div className="img">
        <img src={pp} className="rounded-full w-52 h-52 mx-auto" />
      </div>
    </main>
  );
}
