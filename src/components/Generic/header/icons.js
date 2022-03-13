import lightLogo from "../../../assets/icons/logo.svg";
import darkLogo from "../../../assets/icons/darkLogo.svg";
import driverApp from "../../../assets/icons/Path 1321.svg";
import call from "../../../assets/icons/Path 1322.svg";
import quote from "../../../assets/icons/Path 1323.svg";
import about from "../../../assets/icons/Group 618.svg";
import hamburger from "../../../assets/icons/Group 620.svg";
import light_telegram from "../../../assets/icons/Group 558.svg";
import light_facebook from "../../../assets/icons/Group 564.svg";
import light_instagram from "../../../assets/icons/Group 563.svg";
import light_linkedIn from "../../../assets/icons/Group 559.svg";
import dark_telegram from "../../../assets/icons/Group 542.svg";
import dark_facebook from "../../../assets/icons/Group 548.svg";
import dark_instagram from "../../../assets/icons/Group 547.svg";
import dark_linkedIn from "../../../assets/icons/Group 543.svg";

export const icons = (icon) => {
  let svg = null;
  switch (icon) {
    case "lihgtLogo":
      svg = lightLogo;
      break;
    case "darkLogo":
      svg = darkLogo;
      break;
    case "driverApp":
      svg = driverApp;
      break;
    case "call":
      svg = call;
      break;
    case "quote":
      svg = quote;
      break;
    case "about":
      svg = about;
      break;
    case "hamburger":
      svg = hamburger;
      break;
    case "light_telegram":
      svg = light_telegram;
      break;
    case "light_facebook":
      svg = light_facebook;
      break;
    case "light_instagram":
      svg = light_instagram;
      break;
    case "light_linkedIn":
      svg = light_linkedIn;
      break;
    case "dark_telegram":
      svg = dark_telegram;
      break;
    case "dark_facebook":
      svg = dark_facebook;
      break;
    case "dark_instagram":
      svg = dark_instagram;
      break;
    case "dark_linkedIn":
      svg = dark_linkedIn;
      break;
    default:
      new Error("haven't this icon");
  }
  return svg;
};
