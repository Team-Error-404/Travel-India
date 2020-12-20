// odisha
// bg
import odisha_bg from "../img/odisha/bg.jpg";

// places
import puri from "../img/odisha/puri1.jpg";
import gopalpur from "../img/odisha/gopalpur1.jpg";
import lingaraja from "../img/odisha/lingaraja1.jpg";
// foods
import pakhala from "../img/odisha/pakhala.jpg";
import badiChura from "../img/odisha/badi chura.jpg";
import dalma from "../img/odisha/dalma.jpg";

// rajasthan
// bg
import rajasthan_bg from "../img/rajasthan/bg.jpg";
// places
import amberPalace from "../img/rajasthan/amber-palace1.jpg";
import ranthamborePark from "../img/rajasthan/ranthambore-park1.jpg";
import hawaMahal from "../img/rajasthan/hawa-mahal1.jpg";
// foods
import dalBaatiChurma from "../img/rajasthan/dal-baati-churma.webp";
import kerSangri from "../img/rajasthan/ker-sangri.webp";
import onionKachori from "../img/rajasthan/onion-kachori.webp";

// delhi
// bg
import delhi_bg from "../img/delhi/bg.jpg";
// places
import redFort from "../img/delhi/red-fort2.jpg";
import qutubMinar from "../img/delhi/qutub-minar1.jpg";
import humayunsTomb from "../img/delhi/humayuns-tomb1.jpg";
// foods
import choleBhature from "../img/delhi/chole-bhature.jpg";
import kebabs from "../img/delhi/kebabs.jpg";
import butterChicken from "../img/delhi/butter-chicken.jpg";
let states = {
  Odisha: {
    bg: odisha_bg,
    tagLine: "India's best kept secret",
    topPlaces: [
      {
        src: puri,
        cardTitle: "Puri",
        cardText: "Sacred temple complex & pilgrimage site",
      },
      {
        src: gopalpur,
        cardTitle: "Gopalpur",
        cardText: "Tranquil beach with surfing & fishing",
      },
      {
        src: lingaraja,
        cardTitle: "Lingaraja Temple",
        cardText: "Sprawling, ancient Hindu temple compound",
      },
    ],
    topFoods: [
      {
        src: pakhala,
        cardTitle: "Pakhala Bhata",
        cardText: "Pakhaḷais an Odia term for an Indian food consisting of cooked rice washed or a little fermented in water. The liquid part is known as torani.t is a preparation that is had during summer, although many families and communities eat it throughout the year, especially for lunch.",
      },
      {
        src: dalma,
        cardTitle: "Dalma",
        cardText: "Dalma is a Chickpea Dal Cooked With Vegetables and Raw Papaya, a delicacy from the state of Orissa. It can be made using toor (arhar) dal, and an assortment of vegetables typically raw banana, eggplant, green papaya and pumpkins, simmered in a special spice blend.Serve the Oriya Special Dalma as a delicious one-pot dal along with steamed rice or jeera pulao.",
      },
      {
        src: badiChura,
        cardTitle: "Badi Chura",
        cardText: "The badi chura is an authentic recipe of Odisha state. Badi is sun-dried lentil dumpling and chura means a coarse mixture of badi, onion, garlic, green chilli along with mustard oil. Nowadays there are varieties of badi available. But traditionally, soaked black gram or urad dal is grinded to a paste along with some water. ",
      },
    ],
  },
  Rajasthan: {
    bg: rajasthan_bg,
    tagLine: "Jaane Kya Dikh Jaye",
    topPlaces: [
      {
        src: amberPalace,
        cardTitle: "Amber Palace",
        cardText: "16th-century hilltop fort & palace",
      },
      {
        src: hawaMahal,
        cardTitle: "Hawa Mahal",
        cardText: "Pink/red sandstone 'Palace of the Winds'",
      },
      {
        src: ranthamborePark,
        cardTitle: "Ranthambore National Park",
        cardText: "Ranthambore Fort & Padam Talao Lake",
      },
    ],
    topFoods: [
      {
        src: dalBaatiChurma,
        cardTitle: "Dal Baati Churma",
        cardText: "A traditional rajasthani delicacy recipe made from dal, bati or wheat rolls and churma which is powdered wheat ball. it is generally served for lunch or dinner by mixing the dal with crushed baati and ghee topped on it.",
      },
      {
        src: kerSangri,
        cardTitle: "Ker Sangri",
        cardText: "The Ker Sangri Recipe is a traditional Rajasthani dish that is made from with a combination of dried beans and berries that are grown locally in Rajasthan. It is often made into a spicy dry vegetable, but, I have added a little bit of sweetness to the spice and the taste was delectable. ",
      },
      {
        src: onionKachori,
        cardTitle: "Onion Kachori",
        cardText: "Pyaaz ki Kachori is a kind of Rajasthani snack, a fried pastry filled with a spicy onion filling. This glorious delicacy is not to be missed. It is one of the most famous spicy snacks from Jaipur and vicinity.",
      },
    ],
  },
  Delhi: {
    bg: delhi_bg,
    tagLine: "Dildaar Dilli",
    topPlaces: [
      {
        src: humayunsTomb,
        cardTitle: "Humayun's Tomb",
        cardText: "Palatial 16th-century tomb of Humayun",
      },
      {
        src: redFort,
        cardTitle: "Red Fort",
        cardText: "Iconic 1600s imperial residence & museum",
      },
      {
        src: qutubMinar,
        cardTitle: "Qutub Minar",
        cardText: "5-storey victory tower with balconies",
      },
    ],
    topFoods: [
      {
        src: butterChicken,
        cardTitle: "Butter Chicken",
        cardText: "Butter Chicken is one of the most popular curries at any Indian restaurant around the world. Aromatic golden chicken pieces in an incredible creamy curry sauce, this Butter Chicken recipe is one of the best you will try! ",
      },
      {
        src: choleBhature,
        cardTitle: "Chole Bhature",
        cardText: "Chole bhature is a food dish originating from northern India. However, in India, Delhi Chole Bhature is very popular.It is a combination of chana masala and bhatura/Puri, a fried bread made from maida. There is a distinct Punjabi variant of the dish. The dish is also very popular in Pakistan as a breakfast meal.",
      },
      {
        src: kebabs,
        cardTitle: "Kebabs",
        cardText: "Kebabs are various cooked meat dishes, with their origins in Middle Eastern cuisine. Numerous variants are popular around the world. In many parts of Asia, the Muslim world, and in Indian English and the languages of the Middle East, a kebab is any of a wide variety of grilled meat dishes. ",
      },
    ],
  },
};
export default states;
