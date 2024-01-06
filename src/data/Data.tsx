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

const name = <span className="font-bold text-primary">Fani Febriani</span>
const sayangggnya = <span className="font-bold text-indigo-500">sayangggnya</span>
const sayanggg = <span className="font-bold text-indigo-500">sayanggg</span>
const myLuvvv = <span className="font-bold text-pink-400">myLuvvv</span>

const dataTextModal =[
  {
    id:1,
    textModal: <p>Yesss {sayangggnya} Aku {name} anak ke 4, si bungsuuu. Selamat Ulang Tahun yaaa {myLuvvv}. Aku harap diumur kamu 17 Tahun ini, kamu punya pemikiran yang lebih dewasa dan menjadi kepribadian yang lebih baik lagi dari sebelum-sebelumnya, Okeyyy ??. Kurang-kurangin sikap children karna kamu bukan lagi anak-anak, nanti kamu punya SIM yeayyy, nanti juga kamu bakal banyak pikiran tapi kamu jangan takut, kamu kan kuattt. kalo kamu lagi sedih inget ada aku yang ada dibelakang kamuuu, ceritain aja semua keluh kesah kamu, aku mau ko dengerin semuanya malahan pengen banget. apapun keinginan kamu semoga tahun ini bisa terwujud, dan semoga bisa glory AWKWKW Aamiin.</p>,
  },
  {
    id:2,
    textModal: <p>Semoga kamu diberi kesehatan, diberi umur yang panjang agar kita bisa menua bersama heehe. sehat selalu yahhh, HARUSSS. Jangan nunda-nunda makan dan minum aplagi kewajiban {sayanggg}, nanti kalo masi nunda-nunda aku tonjokkk 😤. Jangan males-malesan, sekolah yang rajin kayak aku tu rajin banget gilakkk. Jangan ngeluh-ngeluh, Semangat Terus Yaaa {myLuvvv}</p>,
  },
  {
    id: 3,
    textModal: <p>I love you now, tomorrow, every day and forever. And my love for you will never diminish. I love you so much, I hope we can continue to be together, Sekali lagi happy birthday dear, may this year be the best year ever, Maaf engga bisa ngasih apa-apaaa, cuman bisa ngasih ucapan yang engga seberapa. I always love you. ilysm</p>
  }
]

export { headline, subHeadline, pp, photo1, photo2, dataMemoPhotos, dataTextModal };