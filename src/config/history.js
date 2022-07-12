/**
 * 记录历史操作
 * Author wwt
 */
export default class History {
  constructor(maxSnapshots = 1000) {
    this.maxSnapshots = maxSnapshots;
    this.snapshots = [];
    this.cursor = -1
  }

  get canUndo() {
    return this.cursor > 0
  }

  get canClear() {
    return this.snapshots.length
  }

  get canRedo() {
    return this.snapshots.length > this.cursor + 1
  }

  // 记录数据
  record(snapshot) {
    // 记录新的历史记录时，将当前指针以后的记录删除
    while (this.cursor < this.snapshots.length - 1) {
      this.snapshots.pop()
    }
    this.snapshots.push(snapshot);
    // 确保历史记录条数限制
    if (this.snapshots.length > this.maxSnapshots) {
      this.snapshots.shift()
    }
    // 指针指向最后一条数据
    this.cursor = this.snapshots.length - 1
  }

  undo() {
    if (this.canUndo) {
      this.cursor -= 1;
      return this.snapshots[this.cursor]
    }
    return null
  }

  redo() {
    if (this.canRedo) {
      this.cursor += 1;
      return this.snapshots[this.cursor]
    }
    return null
  }

  move(cursor) {
    if (this.snapshots.length > cursor) {
      this.cursor = cursor;
      return this.snapshots[this.cursor]
    }
  }

  clear() {
    this.cursor = -1;
    this.snapshots = []
  }
}

