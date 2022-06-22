camera = document.getElementById("camera");
Webcam.set({
  width:360,
  height:250,
  image_format: 'png',
  png_quality:90
});
Webcam.attach(camera);
take_snapshot
function take_snapshot()
{
  Webcam.snap(function(data_url) {
    document.getElementById("result").innerHTML = '<img id="selfieImage" src="'+data_url+'"/>'
  });
}