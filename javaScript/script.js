function fetchRandomDogImage() {
  var xhrRequest = new XMLHttpRequest();

  xhrRequest.onload = function () {
    console.log(xhrRequest.response);
    var responseJson = JSON.parse(xhrRequest.response);

    var imageurl = responseJson.message;

    $("#dog-img").attr("src", imageurl);
  };

  xhrRequest.open("get", "https://dog.ceo/api/breeds/image/random", true);
  xhrRequest.send();
}
$("#fetch-btn").click(fetchRandomDogImage);
