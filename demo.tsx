import React from 'react';
import './index.css';
import { Image } from 'antd';
import html2canvas from 'html2canvas'
const App: React.FC = () => {
  const [imgBase,setImgBase]=React.useState('')
  React.useEffect(()=>{
    document.getElementById('download').addEventListener('click', function() {
      const element=document.getElementById('capture')
      html2canvas( element).then(function(canvas) {
          // Convert the canvas to a Base64-encoded image
          console.log(canvas)
          
          // Log the Base64 image data to the console
          console.log(canvas.toDataURL('image/png'));
          setImgBase(canvas.toDataURL('imgae/png'));
          // Optionally, you can create a link to download the image
          var link = document.createElement('a');
          link.href = canvas.toDataURL('image/png');
          link.download = 'captured-image.png';
          link.click();
      });
  });
  },[])
  return(
    <>
        <Image
        id="capture"
    width={200}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  />
          <Image
    width={200}
    src={imgBase}
  />
        <button id="download">Capture and Download as Image</button>
        </>

  )
};

export default App;