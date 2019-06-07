import React from "react";
import { Consumer } from "./Sortable";
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
	const ascending = (a: TreeData, b: TreeData) => {
		return a.text < b.text ? -1 : b.text > a.text ? 1 : 0;
	};

	const sortTree = (treeNodes: TreeData[]) => [...treeNodes].sort(ascending);

	return (
		<Consumer>
			{sort => {
				const sortedData = sort ? sortTree(data) : data ;
				return (
					<ul>
						{sortedData.map((node, index) => (
							<TreeItem key={index} node={node} />
						))}
					</ul>
				);
			}}
		</Consumer>
	);
}
