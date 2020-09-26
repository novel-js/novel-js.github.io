function read (filename) {
  return new Promise((resolve, reject) => {
    try {
      resolve($.fs_read(filename))
    } catch (e) {
      reject(e)
    }
  })
}
export { read }
export default read
