/**
 * enum
 */

  //默认从0开始
  enum Status {
    MASSAGE,
    SPA,
    DABAOJIAN=1
  };
  
  function getServe(status: any) {
    if (status === Status.MASSAGE) {
      return "massage";
    } else if (status === Status.SPA) {
      return "spa";
    } else if (status === Status.DABAOJIAN) {
      return "dabaojian";
    }
  }
  
  console.log(Status[1],'Status')
  const result = getServe(Status.SPA);
  
  console.log(`我要去${result}`);