let maxData = 10;
let x = 0;

getData(maxData);

async function getData() {
  const response = await fetch('/api');
  const data = await response.json();

    for (item of data) {
      const root = document.createElement('p');
      const date = document.createElement('div');
      const image = document.createElement('img');
      const dateString = new Date(item.timestamp).toLocaleString();
      date.textContent = dateString;
      image.src = item.image64;
      image.alt = 'Dan Shiffman making silly faces.';

      root.append(image);
      document.body.append(root);

      if (data.length > 10) {
        data.splice(9, 1);
        console.log('fuck');
        console.log(data);
      }
    }
    console.log(data);
  }


setTimeout(function(){
  window.location.reload(1);
}, 5000);