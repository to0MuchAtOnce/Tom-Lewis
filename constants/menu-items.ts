import React from 'react';

const MENU_OPTIONS: MenuOption[] = [
  {
    name: 'Blog',
    url: '/',
    subItems: [
      {
        name: 'Coding a theme switcher',
        url: 'Coding a theme switcher',
      },
      {
        name: 'Rock, Paper, Scissors',
        url: 'Rock, Paper, Scissors',
      },
    ],
  },
  {
    name: 'Photo',
    url: '/photo',
    subItems: [
      {
        name: 'Colour',
        url: '/colour',
      },
      {
        name: 'Mono',
        url: '/mono',
      },
    ],
  },
  {
    name: 'Projects',
    url: '/projects',
    subItems: [
      {
        name: 'Polka',
        url: '/retail',
      },
    ],
  },
  {
    name: 'About',
    url: '/about',
  },
];

export type MenuItem = {
  name: string;
  url: string;
  id: string;
  depth: number;
  subItems?: MenuItem[];
};

type MenuOption = {
  name: string;
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
        ? makeMenuLevel(option.subItems, depth + 0.5)
        : undefined,
  }));
}

export const MENU_ITEMS: MenuItem[] = makeMenuLevel(MENU_OPTIONS);
