import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';

import { Data } from './db';

function App() {
  return (
    <div>
      <Tree label={<div>{Data.agent_code}</div>}>
        {Data.agent_childs.map((child) => {
          return (
            <TreeNode label={<div>{child.agent_code}</div>}>
              {child.agent_childs.map((grandChild) => {
                return (
                  <TreeNode label={<div>{grandChild.agent_code}</div>}>
                    {grandChild.agent_childs.map((grandChild2) => {
                      return (
                        <TreeNode label={<div>{grandChild2.agent_code}</div>} />
                      );
                    })}
                  </TreeNode>
                );
              })}
            </TreeNode>
          );
        })}
      </Tree>
    </div>
  );
}

export default App;
