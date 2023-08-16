import fs from 'fs';
import path from 'path';
import matter, { GrayMatterFile } from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import prism from 'remark-prism';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface PostData {
  [key: string]: any;
}

export interface GetAllPostIds {
  [key: string]: any;
}

export async function getSortedPostsData(): Promise<PostData[]> {
  const fileNames: string[] = fs.readdirSync(postsDirectory);
  const allPostsData: Promise<PostData>[] = fileNames.map(async fileName => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult: GrayMatterFile<string> = matter(fileContents);

    // Nice to have try catch here. Good to have error logging as you go to be able to check what happened
    const processedContent = await remark()
      .use(remarkHtml, { sanitize: false })
      .use(prism)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      id,
      contentHtml,
      ...matterResult.data,
    };
  });

  // Needs pagination, no need to load all posts at once
  const postsData = await Promise.all(allPostsData);
  return postsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Called in getStaticPaths function
export function getAllPostIds(): { params: { id: string } }[] {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map(fileName => {
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
  // Repeated code, should be moved into a helper function and called here.
  const processedContent = await remark()
    .use(remarkHtml, { sanitize: false })
    .use(prism)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // console.log(matterResult.data, 'hello');

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
