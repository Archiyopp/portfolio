import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
  },
  {
    id: 2,
    url: "/about",
    text: "About",
  },
  {
    id: 3,
    url: "/projects",
    text: "Projects",
  },
  {
    id: 4,
    url: "/contact",
    text: "Contact",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.facebook.com/cristianandres.fernandezbermudez",
    icon: <FaFacebook />,
    label: "Facebook link",
  },
  {
    id: 2,
    url: "https://twitter.com/Archiyopp",
    icon: <FaTwitter />,
    label: "Twitter link",
  },
  {
    id: 3,
    url: "https://www.linkedin.com/in/cristian-andres-fernandez-bermudez/",
    icon: <FaLinkedin />,
    label: "Linkedin link",
  },
  {
    id: 4,
    url: "https://github.com/Archiyopp",
    icon: <FaGithub />,
    label: "Github link",
  },
];
