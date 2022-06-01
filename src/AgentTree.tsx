import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';

type Data = {
  agent_code: string;
  first_name: string;
  last_name: string;
  agent_id: string;
  agent_childs: [];
};

const Agent = (props: Pick<Data, "agent_code">) => {
  const { agent_code } = props;
  return <div>{agent_code}</div>;
};

const AgentTree = (props: { Data: any }) => {
  const { Data } = props;

  return (
    <div>
      <Tree label={<Agent agent_code={Data.agent_code} />}>
        {Data.agent_childs &&
          Data.agent_childs.map((child: any, key: any) => (
            <TreeNode key={key} label={<AgentTree Data={child} />} />
          ))}
      </Tree>
    </div>
  );
};

export default AgentTree;
