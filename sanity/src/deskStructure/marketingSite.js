import S from '@sanity/desk-tool/structure-builder'
import { GoGlobe } from 'react-icons/go';
import { SiMarketo } from 'react-icons/si';
import { MdOutlineCallToAction } from 'react-icons/md';
import { FaProjectDiagram } from 'react-icons/fa';
import { GiFootprint } from 'react-icons/gi';

export default S.listItem().title('Marketing Site').icon(GoGlobe)
.child(
  S.list().title('Marketing Site')
    .items([
      S.listItem().title('Landing Pages').icon(SiMarketo)
        .schemaType('landingPage')
        .child(S.documentTypeList('landingPage').title('Landing Pages')),
      S.listItem().title('Calls to Action (CTA)').icon(MdOutlineCallToAction)
        .schemaType('callToAction')
        .child(S.documentTypeList('callToAction').title('Calls to Action (CTA)')),
      S.listItem().title('Features and Services').icon(FaProjectDiagram)
        .schemaType('service')
        .child(S.documentTypeList('service').title('Features/Services')),
      S.listItem().title('Footers').icon(GiFootprint)
        .schemaType('footer')
        .child(S.documentTypeList('footer').title('Footers')),
      S.listItem().title('Content by Route')
        .child(
          S.documentTypeList('route').title('Routes')
            .child(
              
            )
        )
    ])
)