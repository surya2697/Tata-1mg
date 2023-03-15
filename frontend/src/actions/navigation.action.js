const USEROTP="USEROTP"
const USERNAME="USERNAME"

export const userotp = (payload) => {
    return {
      type: USEROTP,
      payload,
    };
  };
  
  export const username = (payload) => {
    return {
      type: USERNAME,
      payload,
    };
  };