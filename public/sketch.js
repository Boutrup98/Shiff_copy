function setup() {
  noCanvas();
  const video = createCanvas(windowWidth, windowHeight);
  video.background(255);
  // let lat, lon;

  const button = document.getElementById('submit');
  button.addEventListener('click', async event => {
    // const mood = document.getElementById('mood').value;
    video.loadPixels();
    const image64 = video.canvas.toDataURL();
    const data = { image64 };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    const response = await fetch('/api', options);
    const json = await response.json();
    console.log(json);
  });

//   if ('geolocation' in navigator) {
//     console.log('geolocation available');
//     navigator.geolocation.getCurrentPosition(position => {
//       lat = position.coords.latitude;
//       lon = position.coords.longitude;
//       console.log(lat, lon);
//       document.getElementById('latitude').textContent = lat;
//       document.getElementById('longitude').textContent = lon;
//     });
//   } else {
//     console.log('geolocation not available');
//   }
// }
}


  // draw function
  function mouseDragged() {
    line(mouseX,mouseY, pmouseX, pmouseY);
  }

  