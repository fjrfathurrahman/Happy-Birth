import pp from "../assets/photo.jpg";
import photo1 from "../assets/Image grid/photo1.jpg";
import photo2 from "../assets/Image grid/photo2.jpg";
import Memo1  from "../assets/Image memories/memo1.jpg";
import Memo2  from "../assets/Image memories/memo2.jpg";
import Memo3  from "../assets/Image memories/memo3.jpg";
import Memo4  from "../assets/Image memories/memo4.jpg";
import Memo5  from "../assets/Image memories/memo5.jpg";
import Memo6  from "../assets/Image memories/memo6.jpg";
import Memo7  from "../assets/Image memories/memo7.jpg";
import Memo8  from "../assets/Image memories/memo8.jpg";
import Memo9  from "../assets/Image memories/memo9.jpg";
import Memo10  from "../assets/Image memories/memo10.jpg";
import Memo11  from "../assets/Image memories/memo11.jpg";
import Memo12  from "../assets/Image memories/memo12.jpg";
import Memo13  from "../assets/Image memories/memo100.jpg";
import Memo14  from "../assets/Image memories/Memo101.png";

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
    id:3,
    image: Memo3
  },
  {
    id:4,
    image: Memo4
  },
  {
    id:5,
    image: Memo5
  },
  {
    id:6,
    image: Memo6
  },
  {
    id:7,
    image: Memo7
  },
  {
    id:8,
    image: Memo8
  },
  {
    id:9,
    image: Memo9
  },
  {
    id:10,
    image: Memo10
  },
  {
    id:11,
    image: Memo11
  },
  {
    id:12,
    image: Memo12
  },
  {
    id:13,
    image: Memo13
  },
  {
    id:14,
    image: Memo14
  },
]

const name = <span className="font-bold text-primary">Fani Febriani</span>
const sayanggg = <span className="font-bold text-indigo-500">sayanggg</span>

const dataTextModal =[
  {
    id:1,
    textModal: <p>Happiest birthday, darling ! the most gorgeous person, the person who hight cuteness, my lover, my soul, {name}. </p>
  },
  {
    id:2,
    textModal: <p>Aku harap di ulang tahun kamu kali ini diberi bisa jadi orang yang lebih baik lagi, lebih bijak dalam segala hal, lebih hati-hati dengan apapun. lebih bisa mengerti dengan keadaan diri kamu sendiri, lebih terbuka dengan diri kamu, lebih jujur dalam perasaan yang kamu rasain, lebih bertanggung jawab, tidak nunda-nunda kegiatan apapun, lebih rajin lagi, tidak males makan dan minum and bisa ngerasain glory WKWKWK. Happy always, for now, tomorrow, the next year and the years after that. Best wishes for you. Kadang mikir keajaiban dunia tu kayak gimana. But I knew that you existed and lived, there I realized that the magic of the world really does exist. So, thank you for existing ! life would be boring without you.</p>,
  },
  {
    id: 3,
    textModal: <p>I love you for now, tomorrow, every day and forever. And my love for you will never diminish. I love you so much, I hope we can continue to be together, Once again happy birthday dear, may this year be the best year ever. I always love you. ilysm !</p>
  }
]

const dataTextAbout = [
  {
    id: 1,
    text: <p>Helooo, ini {name} anak ke 4 dari 4 bersaudara, Lahir di Bandung, 31 januari 2007, huuhu masi adek kecil. She's very beautiful udah kayak Jisoo. She has beautiful eyes dan bibir yang sangat ARGHHHH, That's why I like it so much. Dia baik banget tapi jangan macem-macem dia itu psikopat, cerewet but I like it. Suka ngeGhosting orang-orang random anjenggg apalagi sama orang yang dia ga suka, omonganya dijaga yaaa {sayanggg}, jangan sampe nyakitiin hati orang. Okeyyy ??</p>
  },
  {
    id:2,
    text : <p>Dia juga suka tantrum atau ngereog gitu gara-gara salting, saltingnya lucu tapi sekarang uda biasa aja kayaknya, suka lupa udah kek nenek tapi kayaknya banyak pikiran, jangan mikirin yang engga penting yaaa {sayanggg}.dan dia juga punya gengsi yang tinggi apalagi egonya AWKWKWK, sama heehe.</p>
  },
  {
    id:3,
    text : <p>ANDDD dia sangat amat suka kucing kecuali kucing yang jelek, suka keju, suka cilung, suka risol, apalagi yaahhh. Jago maen emel gelooo tapi belom pernah ke glory WKWKW. She was my encouragement to go to school dan membuat masa-masa sekolah aku menjadi meyenangkan. I always love youuu.</p>
  },
]

export { headline, subHeadline, pp, photo1, photo2, dataMemoPhotos, dataTextModal, dataTextAbout };