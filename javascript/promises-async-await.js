async function getData(uId) {
    let mail=new Promise((resolve, reject)=>{
    setTimeout(() => {
    console.log("Fetched the data!");
    resolve("skc@gmail.com");
    }, 4000);
    })
    
    console.log("start");
    let abc=await mail;
    console.log("Email id of the user id is: " +abc);
    console.log("end");
}
getData("skc");