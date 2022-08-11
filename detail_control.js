
const modelViewer3 = document.querySelector('#thirdmodel');

const annotationClicked = (annotation) => {
  let dataset = annotation.dataset;
  modelViewer3.cameraTarget = dataset.target;
  modelViewer3.cameraOrbit = dataset.orbit;
  modelViewer3.fieldOfView = '45deg';
}
hotspot=document.getElementsByClassName("view-button");
/*for(i =0; i< hotspot.length ; i++){
  console.log("hello hotspot",i, hotspot[i]);
  hotspot[i].addEventListener('click', () => annotationClicked(hotspot[i]));
}*/
hotspot[0].addEventListener('click', () => annotationClicked(hotspot[0]));
hotspot[1].addEventListener('click', () => annotationClicked(hotspot[1]));
hotspot[2].addEventListener('click', () => annotationClicked(hotspot[2]));