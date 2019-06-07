import React, { ReactNode, Children, createContext } from "react";
import Tree from "./Tree";
interface Props {
	children?: ReactNode;
}

export const {Provider, Consumer} = createContext(false);

export default function Sortable({ children }: Props) {
	return (
    <Provider value={true}>
      <>{children}</>
    </Provider>
	);
}
