import axios from "axios";


export const commonApi = async (httpMethod, url, reqbody, reqheader) => {
  // create an instance for axios
  let reqconfig = {
    method: httpMethod,
    url,
    data: reqbody,
    headers: reqheader ? reqheader : { "Content-Type": "application/json" },
  };
  return await axios(reqconfig)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
};



