import { ELEMENT_PARAGRAPH, withPlaceholders } from '@udecode/plate'

export const withStyledPlaceHolders = (components: any) =>
  withPlaceholders(components, [
    {
      key: ELEMENT_PARAGRAPH,
      placeholder: 'Type a paragraph...',
      hideOnBlur: true
    }
  ])