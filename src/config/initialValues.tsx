
import { ELEMENT_CODE_BLOCK } from "@udecode/plate-code-block";
import { ELEMENT_BLOCKQUOTE } from "@udecode/plate-block-quote";
import {
  ELEMENT_H1,
  ELEMENT_PARAGRAPH,
} from '@udecode/plate'
import { getNodesWithRandomId } from './utils'


export const initialValueExitBreak: any = [
  {
    type: ELEMENT_H1,
    children: [{ text: '⏎ Exit Break ⏎' }],
  },
  {
    type: ELEMENT_PARAGRAPH,
    children: [
      {
        text: 'You can define a set of rules with:',
      },
    ],
  },
  {
    type: ELEMENT_BLOCKQUOTE,
    children: [{ text: 'Try here ⌘⏎' }],
  },
  {
    type: ELEMENT_CODE_BLOCK,
    children: [{ text: 'And in the middle ⌘⏎ of the block.' }],
  },
  {
    type: ELEMENT_PARAGRAPH,
    children: [{ text: 'It also works for nested blocks:' }],
  }
]

export const initialValuePlayground: any = getNodesWithRandomId([
  ...initialValueExitBreak
])
