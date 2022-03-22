import S from '@sanity/desk-tool/structure-builder';

import EditIcon from 'part:@sanity/base/edit-icon';
import EyeIcon from 'part:@sanity/base/eye-icon';

// Web preview
import SeoPreview from '../../components/previews/seo/SeoPreviews.js';

// Web preview config
const remoteURL = 'https://gatsby-portfolio-preview-poc-4165823465.gtsb.io';
const localURL = 'http://localhost:8000';
const previewURL = window.location.hostname === 'localhost' ? localURL : remoteURL;

export default [
  S.view.form().icon(EditIcon),
  S.view
  .component(SeoPreview)
  .options({previewURL})
  .icon(EyeIcon)
  .title('SEO Preview'),
]