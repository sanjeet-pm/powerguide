import { getPlatePluginOptions, KeyboardHandler } from '@udecode/plate-core';
import isHotkey from 'is-hotkey';
import { ELEMENT_POWERLINK } from './defaults';
import { getAndUpsertLink } from './transforms';
import { WithLinkOptions } from './types';

export const getLinkOnKeyDown = (
  options?: WithLinkOptions
): KeyboardHandler => (editor) => (e) => {
  const { hotkey } = getPlatePluginOptions(editor, ELEMENT_POWERLINK);

  if (!hotkey) return;

  if (isHotkey(hotkey, e as any)) {
    e.preventDefault();
    e.stopPropagation();

    getAndUpsertLink(editor, options?.getLinkUrl);
  }
};
