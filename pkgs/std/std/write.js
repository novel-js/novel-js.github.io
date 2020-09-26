function write(filename, content) {
    return new Promise((resolve, reject) => {
        try {
            resolve($.fs_write(filename, content))
        } catch (e) {
            reject(e);
        }
    })
}
export { write }
export default write
