const privateKey = 'e9449f1286be0a43c66d47695e9a5868fd19dce5'
const publicKey = '40e00867f6dbb29c5e7087a9ec0346c4'

function createHash(timeStamp) {
  const myHash = timeStamp + privateKey + publicKey
  const hashMessage = md5(myHash)
  return hashMessage
}
