import { getAbove, isCollapsed, unwrapNodes } from '@udecode/plate-common';
import { getPlatePluginType, SPEditor } from '@udecode/plate-core';
import { ELEMENT_POWERLINK } from '../defaults';
import { WithLinkOptions } from '../types';
import { upsertLinkAtSelection } from './upsertLinkAtSelection';

export const getAndUpsertLink = async <T extends SPEditor>(
  editor: T,
  getLinkUrl?: WithLinkOptions['getLinkUrl']
) => {
  const type = getPlatePluginType(editor, ELEMENT_POWERLINK);
  let prevUrl = '';

  const linkNode = getAbove(editor, {
    match: { type },
  });
  if (linkNode) {
    prevUrl = linkNode[0].url as string;
  }

  let url;
  if (getLinkUrl) {
    url = await getLinkUrl(prevUrl);
  } else {
    url = window.prompt(`Enter the URL of the link:`, prevUrl);
  }

  if (!url) {
    linkNode &&
      editor.selection &&
      unwrapNodes(editor, {
        at: editor.selection,
        match: { type: getPlatePluginType(editor, ELEMENT_POWERLINK) },
      });

    return;
  }

  // If our cursor is in middle of a link, then we don't want to insert it inline
  const shouldWrap: boolean =
    linkNode !== undefined && isCollapsed(editor.selection);
  upsertLinkAtSelection(editor, { url, wrap: shouldWrap });
};
