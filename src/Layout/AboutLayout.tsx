import { dataTextAbout, photo1, photo2 } from "../data/Data";

export const AboutLayout = () => {
  return (
    <main className="py-10 flex flex-col gap-5 border-t">
      <GridImages />
      <div className="end flex flex-col gap-3">
        <h1 className="font-medium text-2xl">It's about youuu</h1>
        {dataTextAbout.map((item) => (
          <div className="text-justify" key={item.id}>
            {item.text}
          </div>          
        ))}
      </div>
    </main>
  );
};

const GridImages = () => {
  return (
    <div>
      <div className="mb-2 flex items-end justify-center gap-2">
        <div className="img w-[40%] h-max">
          <img
            src={photo1}
            className="w-full object-cover border-8 border-neutral-100 shadowGridImage hover:scale-105 "
          />
        </div>
        <div className="img w-[45%]">
          <img src={photo2} className="border-8 border-neutral-100 shadowGridImage hover:scale-105 " />
        </div>
      </div>
      <div className="flex items-start justify-center gap-2">
        <div className="img w-[45%]">
          <img src={photo2} className="border-8 border-neutral-100 shadowGridImage hover:scale-105 " />
        </div>
        <div className="img w-[40%] h-max">
          <img
            src={photo1}
            className="w-full object-cover border-8 border-neutral-100 shadowGridImage  hover:scale-105 "
          />
        </div>
      </div>
    </div>
  );
};
