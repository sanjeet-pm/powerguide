import React, { useState } from 'react';
import { LinkNodeData } from '@udecode/plate-link';
import { StyledElementProps } from '@udecode/plate-styled-components';
import { getLinkElementStyles } from './LinkElement.styles';
import { FontIcon } from '@fluentui/react/lib/Icon';
import { Panel } from '@fluentui/react/lib/Panel';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { useBoolean } from '@fluentui/react-hooks';

export const PowerLinkElement = (props: StyledElementProps<LinkNodeData>) => {
  const [visible, setVisible] = useState(false);
  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);
  const {
    attributes,
    children,
    nodeProps,
    styles: _styles,
    element,
    classNames,
    prefixClassNames,
    ...rootProps
  } = props;


  const { root } = getLinkElementStyles(props);
  const onRenderFooterContent = React.useCallback(
    () => {
      const buttonStyles = { root: { marginRight: 8 } };
      return (
        <div>
          <PrimaryButton onClick={dismissPanel} styles={buttonStyles}>
            Save
          </PrimaryButton>
          <DefaultButton onClick={dismissPanel}>Cancel</DefaultButton>
        </div>
      )
    },
    [dismissPanel],
  );

  return (
    <div style={{
      position: 'relative',
      display: 'inline-block'
    }}
    >
      {
        visible ?
          <div style={{
            position: 'absolute',
            display: 'flex',
            background: 'white',
            top: '-20px',
            left: '0',
            width: '50px',
            height: '20px',
            border: '1px solid',
            alignItems: 'center',
            justifyContent: 'space-evenly'
          }}>
            <FontIcon onClick={openPanel} aria-label="edit" iconName="edit" />
            <FontIcon onClick={openPanel} aria-label="delete" iconName="delete" />
          </div>
          : null
      }
      <a
        onClick={() => setVisible((state) => !state)}
        style={{
          color: 'blue'
        }}
        {...attributes}
        // href={element.url}
        // css={root.css as any}
        className={root.className}
        {...rootProps}
        {...nodeProps}
      >
        {children}
      </a>
      <Panel
        isOpen={isOpen}
        onDismiss={dismissPanel}
        headerText="Panel with footer at bottom"
        closeButtonAriaLabel="Close"
        onRenderFooterContent={onRenderFooterContent}
        // Stretch panel content to fill the available height so the footer is positioned
        // at the bottom of the page
        isFooterAtBottom={true}
      >
        <p>Content goes here.</p>
      </Panel>
    </div>

  );
};
