import { dataMemoPhotos } from "../data/Data";

export default function MemoriesLayout() {
  return (
    <main className="py-10 flex flex-col gap-5 border-t">
      <div className="start">
        <h1 className="font-bold text-4xl">Memories <span className="text-primary">Me</span><br />with <span className="text-primary">Youuu</span></h1>
      </div>
      <div className="center grid grid-cols-2 gap-2">
        {dataMemoPhotos.map((item) => (
          <div key={item.id} >
            <img src={item.image} className="object-cover rounded-md shadow-xl " />
          </div>
        ))}
      </div>
    </main>
  )
}
