$(document).ready(function(){
    $("#getDirections").click(function(){
        var address = prompt("Enter Starting Address")
        var hairGypsyLoc = {lat: 33.856500, lng: -84.344134}
        var apiKey = "AIzaSyCegr0g-FBKeJBGSLGm2ozYmPPw4UVk65o"
        $("#map").html(`<iframe id="directions" width="100%" height="400px" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/directions?origin=${address}&destination=salon%20lofts%20brrokhaven&key=${apiKey}" allowfullscreen></iframe>`)
    })
})
