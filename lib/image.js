module.exports = async function handler(retries = 0) {
    let { maxRetries = 88 } = options;
  let image = null;
    try {
        await handler()
    } catch (e) {
        if (retries >= maxRetries) {
            throw e;
        }
                
        image = await handler(options, retries++);
    }
   

    return image;
}
