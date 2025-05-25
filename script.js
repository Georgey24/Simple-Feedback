document.getElementById("feedbackForm").addEventListener("submit",function(event){
    event.preventDefault();

    const form=event.target
    const formData=new FormData(form);

    fetch("submit.php", {
        method: "POST",
        body: formData,
      })
      .then(response => response.text())
      .then(data => {
        document.getElementById("responseMessage").innerText = data;

        
        form.reset();
      })
      .catch(error => {
        console.error("Error:", error);
        document.getElementById("responseMessage").innerText = "Something went wrong.";
      });

    const name=document.getElementById("name").value.trim();
    const email=document.getElementById("email").value.trim();
    const message=document.getElementById("message").value.trim();

    if (name===""||email===""||message===""){
        alert("Please fill in the field!");
        event.preventDefault();
    }
});
