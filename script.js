function validateEmail(email) {
    if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
        return false
    }else return true
}

function buttonClick(){
    
    const input = document.getElementById("email")
    const message = document.getElementById("message")

    if(input.value === "" || !validateEmail(input.value)){
        message.style.visibility = "visible"

        input.style.backgroundImage = "url(./images/icon-error.svg)"
        input.style.backgroundRepeat = "no-repeat"
        input.style.backgroundPosition = "20rem"
        input.style.border= "2px solid hsl(0, 93%, 68%)"

        setTimeout(()=>{
            message.style.visibility = "hidden"

            input.style.backgroundImage = "none"
            input.style.border= "1px solid hsla(0, 36%, 70%, 0.5)"
        }, 1000 * 2)
    }else{
        message.style.visibility = "visible"
        message.style.color = "hsl(120, 45%, 49%)"
        message.innerText = "Email saved!"
        
        setTimeout(()=>{
            message.style.visibility = "hidden"
            message.innerText = "Please provide a valid email"
            message.style.color = "hsl(0, 93%, 68%)"
        }, 1000 * 2)
    }  
}
