import errorGif from "../assets/error.gif"

const Error=()=>{
    return(
        <div>
          <h3>데이터를 불러오는 데 실패했습니다. 다시 시도해주세요.</h3>
          <img src={errorGif} alt="Error loading data" style={errorGifStyle}></img>
        </div>
    )
}

export default Error;

const errorGifStyle = {
    width: "200px",  // GIF의 크기 조정
    height: "200px",
    marginTop: "20px",
};