import { search } from '../../lib/cloudinary';

export default async function handler(req: any, res: any): Promise<void> {
  const params = JSON.parse(req.body);
  // Run search request
  const results = await search(params);

  res.status(200).json({
    ...results,
  });
}
