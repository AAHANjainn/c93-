function send()
{
    var name = document.getElementById("username").value;
    window.location="Kwitter_room.html";
    localStorage.setItem("username" ,name );
}
