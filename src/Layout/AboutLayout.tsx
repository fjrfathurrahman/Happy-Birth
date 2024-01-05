import { photo1, photo2 } from "../data/Data";

export const AboutLayout = () => {
  return (
    <main className="py-10 flex flex-col gap-5 border-t">
      <GridImages />
      <div className="end flex flex-col gap-3">
        <h1 className="font-bold text-xl">It's about you</h1>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit illum
          maiores possimus corporis corrupti quae natus laudantium, ea
          architecto placeat nobis ullam et veniam aut, dolores aspernatur quo
          quis molestias unde sapiente facilis perferendis sed dignissimos in?
          Minus non repellat deleniti eos voluptate, doloribus voluptates
          asperiores ea aliquam illum eveniet provident molestiae magnam
          excepturi iure! Delectus vitae, dolorum aut harum ipsa deleniti
          debitis iste aliquam ducimus fuga repellat maxime quos.
        </p>
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
