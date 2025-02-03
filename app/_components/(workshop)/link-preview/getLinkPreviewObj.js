'use server'

import { getLinkPreview } from 'link-preview-js';

export async function getLinkPreviewObj(url) {
  try {
    const previewData = await getLinkPreview(url);
    return previewData
  } catch (error) {
    return { error: 'Failed to fetch link preview' };
  }
}