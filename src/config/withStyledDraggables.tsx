import { ELEMENT_CODE_BLOCK } from "@udecode/plate-code-block";
import { ELEMENT_BLOCKQUOTE } from "@udecode/plate-block-quote";
import {
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  ELEMENT_MEDIA_EMBED,
  ELEMENT_OL,
  ELEMENT_PARAGRAPH,
  ELEMENT_TABLE,
  ELEMENT_TODO_LI,
  ELEMENT_UL,
  withDraggables,
} from '@udecode/plate';
import { ELEMENT_IMAGE } from "../packages/image/src/defaults";

export const withStyledDraggables = (components: any) => {
  return withDraggables(components, [
    {
      keys: [ELEMENT_PARAGRAPH, ELEMENT_UL, ELEMENT_OL],
      level: 0,
    },
    {
      keys: [
        ELEMENT_PARAGRAPH,
        ELEMENT_BLOCKQUOTE,
        ELEMENT_TODO_LI,
        ELEMENT_H1,
        ELEMENT_H2,
        ELEMENT_H3,
        ELEMENT_H4,
        ELEMENT_H5,
        ELEMENT_H6,
        ELEMENT_IMAGE,
        ELEMENT_OL,
        ELEMENT_UL,
        ELEMENT_TABLE,
        ELEMENT_MEDIA_EMBED,
        ELEMENT_CODE_BLOCK,
      ],
      onRenderDragHandle: ({ element, styles }) => {
        return (
          <div>::</div>
        )
      },
    },
    {
      key: ELEMENT_H1,
      styles: {
        gutterLeft: {
          padding: '0 0 4px',
          fontSize: '1.875em',
          marginTop: '13px'
        },
        blockToolbarWrapper: {
          height: '1.3em',
        },
      },
    },
    {
      key: ELEMENT_H2,
      styles: {
        gutterLeft: {
          padding: '0 0 1px',
          fontSize: '1.5em',
          marginTop: '10px'
        },
        blockToolbarWrapper: {
          height: '1.3em',
        },
      },
    },
    {
      key: ELEMENT_H3,
      styles: {
        gutterLeft: {
          padding: '0 0 1px',
          fontSize: '1.25em',
          marginTop: '7px'
        },
        blockToolbarWrapper: {
          height: '1.3em',
        },
      },
    },
    {
      keys: [ELEMENT_H4, ELEMENT_H5, ELEMENT_H6],
      styles: {
        gutterLeft: {
          fontSize: '1.1em',
          marginTop: '5px'
        },
        blockToolbarWrapper: {
          height: '1.3em',
        },
      },
    },
    {
      keys: [ELEMENT_UL, ELEMENT_OL, ELEMENT_TODO_LI],
      styles: {
        gutterLeft: {
        },
      },
    },
    {
      keys: [ELEMENT_PARAGRAPH],
      styles: {
        gutterLeft: {
          marginTop: '4px'
        },
      },
    },
    {
      key: ELEMENT_BLOCKQUOTE,
      styles: {
        gutterLeft: {
          marginTop: '18px'
        },
      },
    },
    {
      key: ELEMENT_CODE_BLOCK,
      styles: {
        gutterLeft: {
          marginTop: '28px'
        },
      },
    },
    {
      key: ELEMENT_UL,
      styles: {
        gutterLeft: {
          marginTop: '4px'
        },
      },
    },
    {
      key: ELEMENT_OL,
      styles: {
        gutterLeft: {
          marginTop: '4px'
        },
      },
    },
    {
      key: ELEMENT_TODO_LI,
      styles: {
        gutterLeft: {
          marginTop: '3px'
        },
      },
    },
    {
      key: ELEMENT_IMAGE,
      styles: {
        gutterLeft: {
          marginTop: '12px'
        },
      },
    },
  ])
}
