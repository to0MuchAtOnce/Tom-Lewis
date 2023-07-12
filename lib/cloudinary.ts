export async function search() {
  const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`, {
    headers: {
      authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')} `,
    },
  }).then((res) => res.json());

  return results;
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

export function mapImageResources(resources: Resource[]): ImageResource[] {
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
