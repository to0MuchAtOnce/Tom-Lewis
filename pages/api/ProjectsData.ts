export interface Project {
  id: number;
  title: string;
  content: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Rock, Paper, Scissors",
    content: "My version of the popular game",
    link: "https://to0muchatonce.github.io/rock-paper-scissors/",
  },
  {
    id: 2,
    title: "Frontend Mentor Challenges",
    content: "A page of all my frontend mentor submissions",
    link: "https://vigorous-gates-fc2d75.netlify.app/",
  },
];
