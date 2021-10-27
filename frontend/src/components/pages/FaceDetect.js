import React from "react";
import "../CSS/FaceDetect.css";

const FaceDetect = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
             <p className='f3 ma1 fw8 light-gray dib dim'>
{'Your URL should end with a valid image extension. Once detect is clicked the app will detect faces in your pictures. Give it a try!'}
</p>
      <div className="absolute mt2">
        <img id="inputimage" alt="" src={imageUrl} width="500px" height="auto" />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
 

      </div>
    </div>
  );
};

export default FaceDetect;


