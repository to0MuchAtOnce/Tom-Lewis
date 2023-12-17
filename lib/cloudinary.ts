interface Options {
  next_cursor?: string;
  [key: string]: any;
}

interface Params {
  next_cursor?: string;
  [key: string]: any;
}

export async function search(options?: Options): Promise<Params> {
  const params: Params = {
    ...options,
  };

  if (options && options.nextCursor) {
    params.next_cursor = options.nextCursor;
    delete params.nextCursor;
  }

  const paramString = Object.keys(params)
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join('&');

  const results = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image?${paramString}`,
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

  return results || {};
}

export async function getFolders(options?: Options): Promise<Params> {
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

  return results || {};
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
