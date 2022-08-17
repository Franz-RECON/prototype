
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

modelViewer3.addEventListener("mouseup", ()=> target_orbitlog());

const target_orbitlog = () =>{
  console.log(modelViewer3.getCameraOrbit());
}

const colorbutton1 = document.getElementById("gray");
colorbutton1.onclick = function(){
  modelViewer3.style.background = "linear-gradient(to right, #414345, #232526)";
}

const colorbutton2 = document.getElementById("white");
colorbutton2.onclick = function(){
  modelViewer3.style.background = "linear-gradient(to bottom, #ffffff, #d4d4d4)";
}

const colorbutton3 = document.getElementById("pink");
colorbutton3.onclick = function(){
  modelViewer3.style.background = "#e6d9d9";
}

const colorbutton4 = document.getElementById("gif");
colorbutton4.onclick = function(){
  modelViewer3.style.backgroundImage = "url('gif2.gif')";
  modelViewer3.style.backgroundSize = "cover";
}

const colorbutton5 = document.getElementById("image1");
colorbutton5.onclick = function(){
  modelViewer3.style.backgroundImage = "url('image1.jpeg')";
  modelViewer3.style.backgroundSize = "cover";
}


const colorbutton6 = document.getElementById("image2");
colorbutton6.onclick = function(){
  modelViewer3.style.backgroundImage = "url('image2.png')";
  modelViewer3.style.backgroundSize = "cover";
  modelViewer3.style.backgroundPosition= "center";
}