
  const modelViewer = document.querySelector('#firstmodel');

 
  const play = () => {
    modelViewer.play({repetitions: 2});
  };
  modelViewer.addEventListener('load', play);



  const modelViewer2 =document.querySelector('#secondmodel');
  const play2 = () => {
    modelViewer2.play({});
  };
  const pause = () => {
    modelViewer2.pause();
  }
modelViewer2.addEventListener('mouseover',pause);
modelViewer2.addEventListener('mouseout',play2);
modelViewer2.addEventListener('touchstart',pause);
modelViewer2.addEventListener('touchend',play2);


const modelViewer3 = document.querySelector('#thirdmodel');

const annotationClicked = (annotation) => {
  let dataset = annotation.dataset;
  modelViewer3.cameraTarget = dataset.target;
  modelViewer3.cameraOrbit = dataset.orbit;
  modelViewer3.fieldOfView = '45deg';
}
hotspot=document.getElementsByClassName("view-button");
hotspot[0].addEventListener('click', () => annotationClicked(hotspot[0]));