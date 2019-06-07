import React from "react";
import { Consumer as SortableConsumer } from "./Sortable";
import { Consumer } from "./Collapsible";
import TreeItem from './TreeItem'
export interface TreeProps {
	data: TreeData[];
}

export interface TreeData {
	text: string;
	children?: TreeData[];
}



export default function Tree({ data }: TreeProps) {
	const ascending = (a: TreeData, b: TreeData) => {
		return a.text < b.text ? -1 : b.text > a.text ? 1 : 0;
	};

	const sortTree = (treeNodes: TreeData[]) => [...treeNodes].sort(ascending);

	return (
		<Consumer>
			{collapsible => {
				return (
					<SortableConsumer>
						{sort => {
							const sortedData = sort ? sortTree(data) : data;
							return (
								<ul>
									{sortedData.map((node, index) => (
										<TreeItem
											key={index}
											node={node}
											collapsible={collapsible}
										/>
									))}
								</ul>
							);
						}}
					</SortableConsumer>
				);
			}}
		</Consumer>
	);
}
