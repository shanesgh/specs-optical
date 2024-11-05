import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('product').title('Products'),
      S.documentTypeListItem('services').title('Services'),
      S.documentTypeListItem('company').title('Company'),
      S.documentTypeListItem('faq').title('FAQ'),
      S.documentTypeListItem('category').title('Category'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['category','product', 'faq', 'services', 'company'].includes(item.getId()!),
      ),
    ])
