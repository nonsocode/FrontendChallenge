export interface TreeProps {
  data: TreeData[]
}

export interface TreeData {
  text: string,
  children ?: TreeData[]
}

export default function Tree({}:TreeProps){

}