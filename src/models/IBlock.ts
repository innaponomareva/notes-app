import { IInlineStyleRange } from "./IInlineStyleRange";

export interface IBlock {
  key: string;
  text: string;
  type: string;
  depth: number;
  inlineStyleRanges: IInlineStyleRange[];
}
