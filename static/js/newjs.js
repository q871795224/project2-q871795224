function addChannel(){
    let newcLi=document.createElement("li");
        newcLi.classList.add("list-group-item");
        let newcName=document.getElementById("newChannelName").value;
    document.getElementById("newChannelName").value="";
    newcLi.innerText=newcName;
        newcLi.addEventListener("click",function(){
                document.getElementById("channel-Name").innerText = newcName;
        })

    document.getElementById("channelList").appendChild(newcLi);
}
function postMessage() {
    let text=document.getElementById("chat-msg").value;
    document.getElementById("chat-msg").value="";
    let newText=document.createElement("div");
    newText.classList.add("user-2");
    newText.innerText=text;
    document.getElementById("msg-element").appendChild(newText);
}