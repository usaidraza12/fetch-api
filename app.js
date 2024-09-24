let li=document.querySelector(".emails")
let divusers=document.querySelector(".usersname")
let container=document.querySelector(".container")
let divid=document.querySelector(".id")
let mypara=  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum quibusdam vitae ratione facere, fugiat blanditiis molestias temporibus deserunt nemo vel asperiores voluptas doloremque omnis architecto numquam adipisci ipsum, tempora eum."
async function fetchapi() {
   
    const api= await fetch("https://jsonplaceholder.typicode.com/users")
    const users=await api.json()
    const newapi= await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts=await newapi.json()
    return {users,posts}
}
fetchapi().then(({users,posts})=>{
    for(i=0;i<users.length;i++){
        if(users.id==posts.id){
            console.log(users[i],posts[i])
            let datamail=document.createElement("li")
            let userdata=document.createElement("li")
            userdata.innerHTML=users[i].name

            datamail.innerHTML=users[i].email
            li.appendChild(datamail)
            let dataid=document.createElement("li")

            dataid.innerHTML=posts[i].title
            divid.appendChild(dataid)
            let Para=document.createElement("p")
            let btn=document.createElement("button")
            let btn2=document.createElement("button")

            Para.innerText=mypara
            Para.style.display="none"
            btn.innerHTML="show"
            li.append(btn)
            li.append(btn2)
            btn2.innerHTML="hide"
            li.append(Para)
            btn.style. backgroundColor= "rgb(0, 191, 255)"; // Change background color
            btn.style.color = 'white'; // Change text color
            btn.style.padding = '5px'; // Add padding
            btn.style.borderRadius = '5px';
            //btn2
            btn2.style.backgroundColor = "rgb(0, 191, 255)"; // Change background color
            btn2.style.color = 'white'; // Change text color
            btn2.style.padding = '5px'; // Add padding
            btn2.style.borderRadius = '5px';
            btn.addEventListener("click",()=>{
                if(Para.style.display="none"){
                    Para.style.display="block"
                }
            })
            btn2.addEventListener("click",()=>{
                if(Para.style.display="block"){
                    Para.style.display="none"
                }
            })
    }

}  
})





