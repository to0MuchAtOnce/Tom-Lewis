import fs from 'fs';
import path from 'path';
import matter, { GrayMatterFile } from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface PostData {
    id: string,
    contentHtml: string;
    [key: string]: any; // Adjust the type according to your post metadata structure
}

export interface getAllPostIds {
    id: string,
    [key: string]: any;
}

export async function getSortedPostsData(): Promise<PostData[]> {
  const fileNames: string[] = fs.readdirSync(postsDirectory);
  const allPostsData: Promise<PostData>[] = fileNames.map(async (fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult: GrayMatterFile<string> = matter(fileContents);

    const processedContent = await remark()
      .use(remarkHtml)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      id,
      contentHtml,
      ...matterResult.data,
    };
  });

  const postsData = await Promise.all(allPostsData);
    return postsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}


export function getAllPostIds(): { params: {id: string}} [] {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult: GrayMatterFile<string> = matter(fileContents);

 // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(remarkHtml)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}