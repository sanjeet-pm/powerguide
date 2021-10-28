import './App.css';
import {
  createBlockquotePlugin,
  createDndPlugin,
  createHeadingPlugin,
  createHistoryPlugin,
  createLinkPlugin,
  createNodeIdPlugin,
  createParagraphPlugin,
  createPlateComponents,
  createReactPlugin,
  createTrailingBlockPlugin,
  ELEMENT_PARAGRAPH, Plate,
  PlatePlugin,
  SPEditor,
  ToolbarLink
} from '@udecode/plate';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from "react-dnd";
import { useMemo } from 'react';
import { withStyledPlaceHolders, } from './config/withStyledPlaceHolders';
import { withStyledDraggables } from './config/withStyledDraggables';
import { initialValueExitBreak } from './config/initialValues';
import { createPowerLinkPlugin, ELEMENT_POWERLINK } from './packages/powerlink';
import { PowerLinkElement } from './packages/powerlink-ui';


let components = createPlateComponents({
  [ELEMENT_POWERLINK]: PowerLinkElement as any
})

components = withStyledPlaceHolders(components);
components = withStyledDraggables(components);

function App() {
  const pluginsMemo: PlatePlugin<SPEditor>[] = useMemo(() => {
    const plugins = [
      createReactPlugin(),
      createHistoryPlugin(),
      createHeadingPlugin(),
      createLinkPlugin(),
      createPowerLinkPlugin(),
      createParagraphPlugin(),
      createBlockquotePlugin(),
      createNodeIdPlugin(),
      createDndPlugin(),
      createTrailingBlockPlugin({
        type: ELEMENT_PARAGRAPH,
      }),
    ]
    return plugins
  }, []);

  return (
    <div>
      <div style={{ width: '300px', margin: 'auto' }}>
        <ToolbarLink icon={'link'}></ToolbarLink>
      </div>
      <div style={{ width: '300px', margin: 'auto' }}>
        <DndProvider backend={HTML5Backend}>
          <Plate initialValue={initialValueExitBreak} components={components} plugins={pluginsMemo} />
        </DndProvider>
      </div>
    </div>
  )
}

export default App;
