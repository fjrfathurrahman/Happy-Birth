import { dataMemoPhotos } from "../data/Data";

export default function MemoriesLayout() {
  return (
    <main className="py-10 flex flex-col gap-5 border-t">
      <div className="start">
        <h1 className="font-extrabold text-3xl mb-2">Very <span className="text-pink-500">precious</span> <br /> <span className="text-primary">memories</span> with you</h1>
        <p>Doing little things together with you is so much fun, yesss for real !!</p>
      </div>
      <div className="center pt-5 border-t grid grid-cols-2 gap-2">
        {dataMemoPhotos.map((item) => (
          <div key={item.id} >
            <img src={item.image} className="object-cover rounded-md shadow-xl " />
          </div>
        ))}
      </div>
    </main>
  )
}
