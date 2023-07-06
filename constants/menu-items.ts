import React from 'react';

const MENU_OPTIONS: MenuOption[] = [
  {
    name: 'Blog',
    url: '/',
    subItems: [
      {
        name: 'When to Use Static Generation v.s. Server-side Rendering',
        url: '/posts/ssg-ssr',
      },
      {
        name: 'Two Forms of Pre-rendering',
        url: '/posts/pre-rendering',
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
    subItems: option.subItems && option.subItems.length > 0 ? makeMenuLevel(option.subItems, depth + 1) : undefined,
  }));
}

export const MENU_ITEMS: MenuItem[] = makeMenuLevel(MENU_OPTIONS);
