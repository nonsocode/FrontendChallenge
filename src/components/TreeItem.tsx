import React, { useState } from "react";
import Tree, { TreeData } from "./Tree";

interface TreeItemProps {
	node: TreeData;
	collapsible: boolean;
}

export default function TreeItem({
	node: { text, children },
	collapsible
}: TreeItemProps) {
	const hasChildren = (children) => children && children.length;
	const canCollapse = () => collapsible && hasChildren(children);
	const [collapsed, setCollapse] = useState(false);

	const toggle = event => {
		event.preventDefault(), setCollapse(!collapsed);
	};

	const renderChildren = (children) => {
		if (canCollapse()) {
			return hasChildren(children) ? (
				<div style={{display: collapsed ? 'none' : 'block'}}>
					<Tree data={children} />
				</div>
			) : null;
    }
    return hasChildren(children) ? 	<Tree data={children} /> : null
  };
  
  const renderText = text => {
   return  canCollapse() 
   ? <a href="#" onClick={toggle}>{text}</a>
   : <span>{text}</span>
  }

	return (
		<li>
			<div>
				{renderText(text)}
				{renderChildren(children)}
			</div>
		</li>
	);
}
