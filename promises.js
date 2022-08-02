console.log("Start")

const user = (email, name, callback) => {
    setTimeout(() => {
        callback({ userEmail: email,userName:name })
    },
        5000)
}
const uservideos = (uName,callback) => {

    setTimeout(() => {
        callback({userName:uName,videos:["video1","video2","video3"]})
    }
        , 3000)
}

user("vinithdevadiga@gmail.com", "vinith", (user) => {
    console.log(user);
    uservideos(user.userName,(userandvideos)=>{
        console.log(userandvideos);
    })
})

console.log("End")