export interface Project {
  id: number;
  title: string;
  content: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Project 1',
    content:
      'Description of this project is very very very very long in this particular case',
    link: '#',
  },
  {
    id: 2,
    title: 'Project 2',
    content: 'Description of this project 2',
    link: '#',
  },
  {
    id: 3,
    title: 'Project 3',
    content: 'Description of this project 3',
    link: '#',
  },
];
