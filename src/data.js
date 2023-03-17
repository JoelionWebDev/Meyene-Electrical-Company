import React from "react";
import {
  FaEnvelope,
  FaTelegram,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "./about",
    text: "about",
  },
  {
    id: 3,
    url: "./projects",
    text: "projects",
  },
  {
    id: 5,
    url: "./profile",
    text: "profile",
  },
  {
    id: 5,
    url: "./log.html",
    text: "logs",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.facebook.com/profile.php?id=100090802523783",
    icon: <FaFacebook />,
    name: "Facebook",
  },
  {
    id: 2,
    url: "https://twitter.com/MondayMeye33787",
    icon: <FaTwitter />,
    name: "Twitter",
  },
  {
    id: 3,
    url: "https://youtube.com/@meyeneelectricalcompany5439",
    icon: <FaYoutube />,
    name: "Youtube",
  },
  {
    id: 4,
    url: "https://t.me/Meyeneelectricalcompany",
    icon: <FaTelegram />,
    name: "Telegram",
  },
  {
    id: 5,
    url: "https://accounts.google.com/SignOutOptions?hl=en-GB&continue=https://mail.google.com&service=mail",
    icon: <FaEnvelope />,
    name: "Email",
  },
  {
    id: 6,
    url: "https://www.instagram.com/meyenemondayelectricalcompany/",
    icon: <FaInstagram />,
    name: "Instagram",
  },
];
