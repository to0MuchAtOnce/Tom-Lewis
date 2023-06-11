import React from "react";
import {
  Feed,
  Camera,
  Article,
  Person,
} from "@styled-icons/material";

const MENU_OPTIONS: MenuOption[] = [
  {
    name: "Blog",
    icon: Feed,
    url: "/",
    subItems: [
      {
        name: "Post 1",
        icon: Article,
        url: "/post-1",
      },
      {
        name: "Post 2",
        icon: Article,
        url: "/post-2",
      },
    ],
  },
  {
    name: "Photo",
    icon: Camera,
    url: "/photo",
    subItems: [
      {
        name: "Colour",
        icon: Person,
        url: "/colour",
      },
      {
        name: "Mono",
        icon: Person,
        url: "/mono",
      },
    ],
  },
  {
    name: "Projects",
    icon: Person,
    url: "/projects",
   subItems: [
          {
            name: "Polka",
            icon: Person,
            url: "/retail",
          },
        ],
  },
  {
    name: "About",
    icon: Person,
    url: "/about",
  },
];

export type MenuItem = {
  name: string;
  icon: React.ComponentType;
  url: string;
  id: string;
  depth: number;
  subItems?: MenuItem[];
};

type MenuOption = {
  name: string;
  icon: React.ComponentType;
  url: string;
  subItems?: MenuOption[];
};

function makeMenuLevel(options: MenuOption[], depth = 0): MenuItem[] {
  return options.map((option, idx) => ({
    ...option,
    id: depth === 0 ? idx.toString() : `${depth}.${idx}`,
    depth,
    subItems:
      option.subItems && option.subItems.length > 0
        ? makeMenuLevel(option.subItems, depth + 1)
        : undefined,
  }));
}

export const MENU_ITEMS: MenuItem[] = makeMenuLevel(MENU_OPTIONS);

