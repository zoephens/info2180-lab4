
window.onload = function(){
    var searchBtn = document.querySelector("button")
    var httpRequest
    var link = "http://localhost/info2180-lab4/superheroes.php"

    searchBtn.addEventListener("click", function(e){
        e.preventDefault()

        
        httpRequest = new XMLHttpRequest()

        //GET Request

        httpRequest.onreadystatechange = loadHero
        httpRequest.open("GET", link)
        httpRequest.send()
    })

    function loadHero(){
        if (httpRequest.readyState === XMLHttpRequest.DONE){
            if (httpRequest.status === 200){
                
                var response = httpRequest.responseText
                alert(response)
            } else{
                alert(":( Something went wrong...")
            }
        }
    }

}
