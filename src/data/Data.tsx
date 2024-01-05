import pp from "../assets/photo.jpg";
import photo1 from "../assets/Image grid/photo1.jpg";
import photo2 from "../assets/Image grid/photo2.jpg";
import Memo1  from "../assets/Image memories/memo1.jpg";
import Memo2  from "../assets/Image memories/memo2.jpg";
import Memo3  from "../assets/Image memories/memo3.jpg";
import Memo4  from "../assets/Image memories/memo6.jpg";

const headline = (
  <h1 className="text-[46px] font-bold leading-[62px] cursor-pointer">
    Who's{" "}
    <span className="text-primary">
      Happy <br /> Birthday
    </span>{" "}
    today ?!
  </h1>
);
const subHeadline = (
  <p>
    ARGHHHHHH my love, my darling, <br /> my happiness, my spirit, my life
    companion,
  </p>
);

const dataMemoPhotos = [
  {
    id:1,
    image: Memo1
  },
  {
    id:2,
    image: Memo2
  },
  {
    id:2,
    image: Memo3
  },
  {
    id:2,
    image: Memo4
  },
]

export { headline, subHeadline, pp, photo1, photo2, dataMemoPhotos };