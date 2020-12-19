// odisha
// bg
import odisha_bg from "../img/odisha/bg.jpg";

// places
import puri from "../img/odisha/puri.jpg";
import gopalpur from "../img/odisha/gopalpur.jpg";
import lingaraj from "../img/odisha/lingaraj.jpg";
// foods
import pakhala from "../img/odisha/pakhala.jpg";
import badiChura from "../img/odisha/badi chura.jpg";
import dalma from "../img/odisha/dalma.jpg";

// rajasthan
// bg
import rajasthan_bg from "../img/rajasthan/bg.jpg";
// places
import amberPalace from "../img/rajasthan/amber-palace.jpg";
import rathamborePark from "../img/rajasthan/rathambore-park.jpg";
import hawaMahal from "../img/rajasthan/hawa-mahal.jpg";
// foods
import dalBaatiChurma from "../img/rajasthan/dal-baati-churma.webp";
import kerSangri from "../img/rajasthan/ker-sangri.webp";
import onionKachori from "../img/rajasthan/onion-kachori.webp";

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
        src: lingaraj,
        cardTitle: "Lingaraj Temple",
        cardText: "Sprawling, ancient Hindu temple compound",
      },
    ],
    topFoods: [
      {
        src: pakhala,
        cardTitle: "Pakhala Bhata",
      },
      {
        src: dalma,
        cardTitle: "Dalma",
      },
      {
        src: badiChura,
        cardTitle: "Badi Chura",
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
        src: rathamborePark,
        cardTitle: "Ranthambore National Park",
        cardText: "Ranthambore Fort & Padam Talao Lake",
      },
    ],
    topFoods: [
      {
        src: dalBaatiChurma,
        cardTitle: "Dal Baati Churma",
      },
      {
        src: kerSangri,
        cardTitle: "Ker Sangri",
      },
      {
        src: onionKachori,
        cardTitle: "Onion Kachori",
      },
    ],
  },
};
export default states;
