function ShowGif({ gif }) {
  if (gif === null) {
    return <p>slam the button</p>
  }
  return (
    <div className="gif-container">
      {/* <div>{gif.data.id}</div> */}
      <img src={gif.data.images.downsized.url} alt="random gif" />
    </div>
  )
}

export default ShowGif
