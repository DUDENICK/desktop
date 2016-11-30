import { DiffSelection } from '../../../models/diff'
import { DiffLineGutter } from '../diff-line-gutter'

export interface ISelectionStrategy {
  /**
   * update the selection strategy with the row the user's cursor is over
   */
  update: (index: number) => void,
  /**
   * repaint the current diff gutter to visualize the current state
   */
  paint: (elements: Map<number, DiffLineGutter>) => void
  /**
   * apply the selection strategy result to the current diff
   */
  apply: (onIncludeChanged: (diffSelection: DiffSelection) => void) => void
}
