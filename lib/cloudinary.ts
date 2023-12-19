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

export async function getFolders(): Promise<Params> {
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

  for (let folder of results.folders) {
    folder.firstImage = await getFirstImageFromFolder(folder.name);
  }
  return results;
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
}

interface ImageResource {
  id: string;
  title: string;
  image: string;
  width: number;
  height: number;
}

export function mapImageResources(resources?: Resource[]): ImageResource[] {
  if (!resources) {
    return [];
  }

  return resources.map((resource: Resource) => {
    const { width, height } = resource;
    return {
      id: resource.asset_id,
      title: resource.public_id,
      image: resource.secure_url,
      width,
      height,
    };
  });
}
