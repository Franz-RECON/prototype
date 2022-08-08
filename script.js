
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

