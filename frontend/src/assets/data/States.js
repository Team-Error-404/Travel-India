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
        cardText: "",
      },
      {
        src: dalma,
        cardTitle: "Dalma",
        cardText: "",
      },
      {
        src: badiChura,
        cardTitle: "Badi Chura",
        cardText: "balana",
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
        cardText: "",
      },
      {
        src: kerSangri,
        cardTitle: "Ker Sangri",
        cardText: "",
      },
      {
        src: onionKachori,
        cardTitle: "Onion Kachori",
        cardText: "",
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
        cardText: "",
      },
      {
        src: choleBhature,
        cardTitle: "Chole Bhature",
        cardText: "",
      },
      {
        src: kebabs,
        cardTitle: "Kebabs",
        cardText: "",
      },
    ],
  },
};
export default states;
