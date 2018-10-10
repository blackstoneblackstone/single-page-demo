const routerRecord = ['/']

const pushPath = (path) => {
  if (routerRecord.length === 0) {
    this.records.push('/')
  }
  const lastRecord = routerRecord[routerRecord.length - 1]
  if (routerRecord.length > 1 && path === routerRecord[routerRecord.length - 2]) {
    routerRecord.pop()
    return
  }
  if (path !== lastRecord) {
    routerRecord.push(path)
  }
  findLoop(routerRecord)
}

function findLoop(arr) {
  const len = arr.length
  if (len === 1)return
  const halfLen = Math.ceil(len / 2)
  let num = 1
  while (num < halfLen) {
    if (simpleSame(arr, num, len)) {
      while (num > 0) {
        arr.pop()
        num--
      }
      break
    }
    num++
  }
}

function simpleSame(arr, num, len) {
  for (let i = 1; i < num + 1; i++) {
    if (arr[len - i] !== arr[len - i - num]) {
      return false
    }
  }
  return true
}

export {
  routerRecord,
  pushPath
}
