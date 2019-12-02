import Utils from './Utils';

let images = {
  initArray: [],
  arrayToPlay: []
};

for (let i = 1; i <= 1000; i++) {
  images.initArray.push({
    id: i,
    url: `https://picsum.photos/id/${i}/310/250`
  });
}

images.initArray = Utils.shuffle(images.initArray);
images.arrayToPlay = Utils.shorten(images.initArray, 5);

export default images;
