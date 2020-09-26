function append(filename, content) {
  return new Promise((resolve, reject) => {
    try {
      resolve($.fs_append(filename, content))
    } catch (e) {
      reject(e)
    }
  })
}
export { append }
export default append
