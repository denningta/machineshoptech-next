import S from '@sanity/desk-tool/structure-builder'
import { MdSettings } from 'react-icons/md'
import { MdAltRoute } from 'react-icons/md'
import { FaLink } from 'react-icons/fa';
import { IoShareSocial } from 'react-icons/io5';

export default S.listItem().title('Site Settings').icon(MdSettings)
.child(
  S.list().title('Site Settings')
    .items([
      S.listItem().title('Settings').icon(MdSettings)
      .child(S.editor().schemaType('siteSettings').documentId('siteSettings')),
      S.listItem().title('Routes').icon(MdAltRoute)
        .schemaType('route')
        .child(S.documentTypeList('route').title('Routes')),
      S.listItem().title('Navigation Items').icon(FaLink)
        .schemaType('navItem')
        .child(S.documentTypeList('navItem').title('Navigation Items')),
      S.listItem().title('Social Connections').icon(IoShareSocial)
        .schemaType('socialConnection')
        .child(S.documentTypeList('socialConnection').title('Social Connections'))
    ])
)