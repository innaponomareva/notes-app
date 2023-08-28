import { IBlock } from "./IBlock";

export interface INote {
  id: string;
  timestamp: string;
  blocks: IBlock[];
}
