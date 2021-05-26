import React from 'react';

import {
  Javascript,
  Csharp,
  Cplusplus,
  Html5,
  CssThree,
  ReactJs,
  Visualstudio,
  Visualstudiocode,
  Git,
  Github,
  Microsoftazure,
  Microsoftsqlserver,
  Mongodb,
  Bootstrap,
  Jquery,
  NodeDotJs,
  Npm,
} from "@icons-pack/react-simple-icons";

const Components = {
  js: Javascript,
  cs: Csharp,
  cpp: Cplusplus,
  html: Html5,
  css: CssThree,
  rjs: ReactJs,
  vss: Visualstudio,
  vsc: Visualstudiocode,
  g: Git,
  gh: Github,
  msa: Microsoftazure,
  mssql: Microsoftsqlserver,
  mdb: Mongodb,
  bs: Bootstrap,
  jq: Jquery,
  ndjs: NodeDotJs,
  n: Npm
}

const SkillIcon = ({icon, ...props}) => {
  // import {} from '@icons-pack/react-simple-icons';
  let Icon = Components[icon];
  return <Icon className="p-icon" color={props.color} size={props.size}/>
}

export default SkillIcon;