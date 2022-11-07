
window.onload = function(){
    var searchBtn = document.querySelector("button")
    var httpRequest
    var link = "http://localhost/info2180-lab4/superheroes.php"

    var textField = document.querySelector("input") 
    var resultBox = document.querySelector("#result")

    searchBtn.addEventListener("click", function(e){
        e.preventDefault()

        httpRequest = new XMLHttpRequest()

        httpRequest.onreadystatechange = function(){
            if (httpRequest.readyState == 4){
                if (httpRequest.status === 200){
                    
                    var response = httpRequest.responseText
                    // alert(response)
                    resultBox.innerHTML = response
                } else{
                    //alert(":( Something went wrong...")
                    resultBox.innerHTML = "Something went wrong :("
                }
            }

            
        }
        httpRequest.open("GET", link + "?query=" + textField.value)
            httpRequest.send()


        //GET Request

        // httpRequest.onreadystatechange = loadHero
        // httpRequest.open("GET", link)
        // httpRequest.send()
    })

    // function loadHero(){
    //     if (httpRequest.readyState === XMLHttpRequest.DONE){
    //         if (httpRequest.status === 200){
                
    //             var response = httpRequest.responseText
    //             alert(response)
    //         } else{
    //             alert(":( Something went wrong...")
    //         }
    //     }
    // }

}
