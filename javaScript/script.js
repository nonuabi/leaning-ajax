function fetchRandomDogImage() {
  //   var xhrRequest = new XMLHttpRequest();

  //   xhrRequest.onload = function () {
  //     console.log(xhrRequest.response);
  //     var responseJson = JSON.parse(xhrRequest.response);

  //     var imageurl = responseJson.message;

  //     $("#dog-img").attr("src", imageurl);
  //   };

  //   xhrRequest.open("get", "https://dog.ceo/api/breeds/image/random", true);
  //   xhrRequest.send();

  $.ajax({
    url: "https://dog.ceo/api/breeds/image/random",
    method: "GET",
    success: function (data) {
      var imageURL = data.message;
      $("#dog-img").attr("src", imageURL);
    },
  });
}

$("#fetch-btn").click(fetchRandomDogImage);
