import CatMusic from "../assets/photos/cat-music.jpg";
import CatArt from "../assets/photos/cat-art.jpg";
import CatEntr from "../assets/photos/cat-entertainment.jpg";
import CatGaming from "../assets/photos/cat-gaming.jpg";
import CatGoods from "../assets/photos/cat-goods.jpg";
import CatLiterature from "../assets/photos/cat-literature.jpg";

const categories = [
  {
    id: 0,
    name: "music",
    image: `${CatMusic}`,
  },
  {
    id: 1,
    name: "art",
    image: `${CatArt}`,
  },
  {
    id: 2,
    name: "entertainment",
    image: `${CatEntr}`,
  },
  {
    id: 3,
    name: "gaming",
    image: `${CatGaming}`,
  },
  {
    id: 4,
    name: "literature",
    image: `${CatLiterature}`,
  },
  {
    id: 5,
    name: "goods",
    image: `${CatGoods}`,
  },
];

export default categories;
