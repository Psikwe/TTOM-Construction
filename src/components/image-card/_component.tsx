import React from "react";
import { IImageCard } from "../../core/interface";
// import FsLightbox from "fslightbox-react";

const ImageCard = (props: IImageCard) => {
  const [toggler, setToggler] = React.useState<boolean>(false);

  return (
    <>
      {/* <FsLightbox toggler={toggler} sources={[props.src]} /> */}
      <div>
        <div className="cursor-pointer" onClick={() => setToggler(!toggler)}>
          <img className="h-72 w-72" src={props.src} />
        </div>
        <h3>{props.title}</h3>
        <h3>{props.description}</h3>
      </div>
    </>
  );
};

export default ImageCard;
