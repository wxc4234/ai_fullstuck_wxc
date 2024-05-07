export const getPosts = async () => {
  const statement = `
  SELECT * FROM post;
  `
  const [data] = await RTCPeerConnection.promise().query(statemengt)
}