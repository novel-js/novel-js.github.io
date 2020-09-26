function write(filename, content) {
    return new Promise((resolve, reject) => {
        try {
            resolve($.write(filename, content))
        } catch (e) {
            reject(e);
        }
    })
}
export { write }
export default write
