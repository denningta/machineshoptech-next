import S from '@sanity/desk-tool/structure-builder';

import postViews from './postViews';

import { FaBloggerB } from 'react-icons/fa';
import { GrArticle } from 'react-icons/gr';
import { FaUserAstronaut } from 'react-icons/fa';
import { BiCategoryAlt } from 'react-icons/bi';
import { RiDraftLine } from 'react-icons/ri'
import { MdFormatListNumbered } from 'react-icons/md';

export default S.listItem().title('Blog').icon(FaBloggerB)
.child(
  S.list().title('Blog')
    .items([
      S.listItem().title('All Posts').icon(GrArticle)
        .schemaType('post')
        .child(
          S.documentTypeList('post').title('Posts')
            .child(documentId => 
              S.document().documentId(documentId).schemaType('post')
                .views(postViews)
            )
        ),
      S.listItem().title('Draft Posts or Unpublished Edits').icon(RiDraftLine)
        .schemaType('post')
        .child(
          S.documentTypeList('post').title('Draft Posts')
            .filter('_type == "post" && _id in path("drafts.**")')
            .child(documentId => 
              S.document().documentId(documentId).schemaType('post')
                .views(postViews)
            )
        ),
      S.listItem().title('Post Series').icon(MdFormatListNumbered)
        .child(
          S.documentTypeList('series').title('Post Series')
        ),
      S.listItem().title('Posts By Author').icon(FaUserAstronaut)
        .child(
          S.documentTypeList('author').title('Posts by Author')
            .child(authorId =>
              S.documentList().title('Posts')
                .filter('_type == "post" && $authorId == author._ref')
                .params({ authorId })
                .child(documentId => 
                  S.document().documentId(documentId).schemaType('post')
                    .views(postViews))
            )
        ),
      S.listItem().title('Posts By Category').icon(BiCategoryAlt)
        .child(
          S.documentTypeList('category').title('Posts by Category')
            .child(categoryId =>
              S.documentList().title('Posts')
                .filter('_type == "post" && $categoryId in categories[]._ref')
                .params({ categoryId })
                .child(documentId => 
                  S.document().documentId(documentId).schemaType('post')
                    .views(postViews))
            )
        ),
      S.divider(),
      S.listItem().title('Authors').icon(FaUserAstronaut)
        .schemaType('author')
        .child(S.documentTypeList('author')),
      S.listItem().title('Categories').icon(BiCategoryAlt)
        .schemaType('category')
        .child(S.documentTypeList('category'))
    ]),
)