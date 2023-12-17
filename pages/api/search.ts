import { search } from '../../lib/cloudinary';

export default async function handler(req: any, res: any): Promise<void> {
  const params = JSON.parse(req.body);
  console.log('params', params);
  // Run search request
  const results = await search({ prefix: params.folderName });
  console.log('Server response:', results);

  res.status(200).json({
    ...results,
  });
}
