interface Options {
  [key: string]: any;
}

interface Params {
  [key: string]: any;
}

export async function search(
  options?: Options & { folderName?: string }
): Promise<Params> {
  const params: Params = {
    type: 'upload',
    ...options,
  };

  if (options && options.folderName) {
    params.prefix = options.folderName;
  }

  const paramString = Object.keys(params)
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join('&');

  let url = `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`;
  if (options && options.folderName) {
    url += `/${options.folderName}`;
  }
  url += `?${paramString}`;

  const results = await fetch(url, {
    headers: {
      authorization: `Basic ${Buffer.from(
        process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET
      ).toString('base64')} `,
    },
  }).then((res) => res.json());

  return results || {};
}

let serverData: Params | null = null;

interface Folder {
  name: string;
  firstImage?: string;
}

export async function getFolders(): Promise<Params> {
  // If we already have the data from the server, use it
  if (serverData) {
    return serverData as Params;
  }

  try {
    const results = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/folders`,
      {
        headers: {
          authorization: `Basic ${Buffer.from(
            process.env.CLOUDINARY_API_KEY +
              ':' +
              process.env.CLOUDINARY_API_SECRET
          ).toString('base64')} `,
        },
      }
    ).then((res) => res.json());

    // If we already have the data from the server, use it
    serverData = results;

    const folderPromises = results.folders.map(async (folder: Folder) => {
      folder.firstImage = await getFirstImageFromFolder(folder.name);
    });

    await Promise.all(folderPromises);
    return serverData as Params;
  } catch (error) {
    // If the API call fails, return an empty Params object
    return {} as Params;
  }
}

export async function getFirstImageFromFolder(
  folderName: string
): Promise<string> {
  const results = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image/upload?prefix=${folderName}&max_results=1`,
    {
      headers: {
        authorization: `Basic ${Buffer.from(
          process.env.CLOUDINARY_API_KEY +
            ':' +
            process.env.CLOUDINARY_API_SECRET
        ).toString('base64')} `,
      },
    }
  ).then((res) => res.json());

  if (results.resources && results.resources.length > 0) {
    return results.resources[0].secure_url || {};
  } else {
    return '';
  }
}

interface Resource {
  asset_id: string;
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  folder: string;
}

interface ImageResource {
  id: string;
  title: string;
  image: string;
  width: number;
  height: number;
  folder: string;
}

export function mapImageResources(resources?: Resource[]): ImageResource[] {
  if (!resources) {
    return [];
  }

  return resources.map((resource: Resource) => {
    const { width, height, folder } = resource;
    return {
      id: resource.asset_id,
      title: resource.public_id,
      image: resource.secure_url,
      width,
      height,
      folder,
    };
  });
}
