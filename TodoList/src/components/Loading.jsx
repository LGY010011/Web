import {SyncLoader} from "react-spinners";

const Loading=()=>{
    return(
        <div>
          <h3>잠시만 기다려주세요.</h3>
          <SyncLoader color="#006400" size={15} />
        </div>
    )
}

export default Loading;