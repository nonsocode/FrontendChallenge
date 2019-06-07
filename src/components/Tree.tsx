import React from 'react'
export interface TreeProps {
	data: TreeData[];
}

export interface TreeData {
	text: string;
	children?: TreeData[];
}

interface TreeItemProps {
	node: TreeData;
}

function TreeItem({ node: { text, children } }: TreeItemProps) {
	return (
		<li>
			<div>
				<span>{text}</span>
			</div>
			{children && <Tree data={children} />}
		</li>
	);
}

export default function Tree({ data }: TreeProps) {
	return (
		<ul>
			{data.map((node, index) => (
				<TreeItem key={index} node={node} />
			))}
		</ul>
	);
}
