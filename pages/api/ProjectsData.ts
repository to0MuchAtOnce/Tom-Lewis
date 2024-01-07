export interface Project {
  id: number;
  title: string;
  content: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 0,
    title: 'Calculator',
    content: 'A simple calucator built with HTML, CSS and Javascript',
    link: 'https://to0muchatonce.github.io/odin-calculator/',
  },
  {
    id: 1,
    title: 'Etch-a-Sketch',
    content: "A web based version of the popular children's game",
    link: 'https://to0muchatonce.github.io/etch-a-sketch/',
  },
  {
    id: 2,
    title: 'Rock, Paper, Scissors',
    content: 'My version of the popular game',
    link: 'https://to0muchatonce.github.io/rock-paper-scissors/',
  },
  {
    id: 3,
    title: 'Frontend Mentor Challenges',
    content: 'A page of all my frontend mentor submissions',
    link: 'https://vigorous-gates-fc2d75.netlify.app/',
  },
];
