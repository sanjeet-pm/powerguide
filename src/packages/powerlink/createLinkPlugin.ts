import {
  getPlatePluginTypes,
  getRenderElement,
  PlatePlugin,
} from '@udecode/plate-core';
import { ELEMENT_POWERLINK } from './defaults';
import { getLinkDeserialize } from './getLinkDeserialize';
import { getLinkOnKeyDown } from './getLinkOnKeyDown';
import { WithLinkOptions } from './types';
import { withLink } from './withLink';

/**
 * Enables support for hyperlinks.
 */
export const createPowerLinkPlugin = (options?: WithLinkOptions): PlatePlugin => ({
  pluginKeys: ELEMENT_POWERLINK,
  renderElement: getRenderElement(ELEMENT_POWERLINK),
  deserialize: getLinkDeserialize(),
  inlineTypes: getPlatePluginTypes(ELEMENT_POWERLINK),
  onKeyDown: getLinkOnKeyDown(options),
  withOverrides: withLink(options),
});
