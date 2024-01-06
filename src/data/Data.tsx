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

const dataTextModal =[
  {
    id:1,
    text: 'Yesss sayangggnya Aku, Fani Febriani anak ke 4, si bungsuuu. Selamat Ulang Tahun yaaa myLuvvv. Aku harap diumur kamu 17 Tahun ini, kamu punya pemikiran yang lebih dewasa dan menjadi kepribadian yang lebih baik lagi dari sebelum-sebelumnya, Okeyyy ??. Kurang-kurangin sikap children karna kamu bukan lagi anak-anak, nanti kamu punya SIM yeayyy, nanti juga kamu bakal banyak pikiran tapi kamu jangan takut, kamu kan kuattt. kalo kamu lagi sedih inget ada aku yang ada dibelakang kamuuu, ceritain aja semua keluh kesah kamu, aku mau ko dengerin semuanya malahan pengen banget. dan apapun keinginan kamu semoga tahun ini bisa terwujud, Aamiin.' 
  }
]

export { headline, subHeadline, pp, photo1, photo2, dataMemoPhotos, dataTextModal };