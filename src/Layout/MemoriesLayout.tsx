import photo1 from "../assets/Image grid/photo1.jpg";
import photo2 from "../assets/Image grid/photo2.jpg";
export const MemoriesLayout = () => {
  return (
    <main>
      <div className="start mb-3">
        <h1 className="text-3xl font-semibold">It's Youuu !!</h1>
      </div>
      <div className="mb-2 flex items-end justify-center gap-2">
        <div className="img w-[40%] h-max">
          <img src={photo1} className="w-full object-cover border-2  hover:scale-105 " />
        </div>
        <div className="img w-[45%]">
          <img src={photo2} className="border-2 hover:scale-105 " />
        </div>
      </div>
      <div className="flex items-start justify-center gap-2">
        <div className="img w-[45%]">
          <img src={photo2} className="border-2 hover:scale-105 " />
        </div>
        <div className="img w-[40%] h-max">
          <img src={photo1} className="w-full object-cover border-2  hover:scale-105 " />
        </div>
      </div>
      <div className="end">
        <p>Description about you</p>
      </div>
    </main>
  );
};
