import React from 'react';
import { useEventEditorId, useStoreEditorRef } from '@udecode/plate-core';
import { ToolbarButton, ToolbarButtonProps } from '@udecode/plate-toolbar';
import { insertImage } from '../../../image/src/transforms/insertImage';

export interface ToolbarImageProps extends ToolbarButtonProps {
  /**
   * Default onMouseDown is getting the image url by calling this promise before inserting the image.
   */
  getImageUrl?: () => Promise<string>;
}

export const ToolbarImage = ({ getImageUrl, ...props }: ToolbarImageProps) => {
  const editor = useStoreEditorRef(useEventEditorId('focus'));

  return (
    <ToolbarButton
      onMouseDown={async (event) => {
        if (!editor) return;

        event.preventDefault();

        let url;
        let link;
        if (getImageUrl) {
          url = await getImageUrl();
        } else {
          url = window.prompt('Enter the URL of the image:');
          link = window.prompt('Enter anchor url');
        }
        if (!url) return;

        insertImage(editor, url, link);
      }}
      {...props}
    />
  );
};
