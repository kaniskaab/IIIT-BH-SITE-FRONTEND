import React from 'react';
import CircularComponent from '../ResearchStats/Research';
const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};
const insideStyles = {
  background: 'white',
  padding: 20,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
};
const image1 =
  'https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D';
const image2 =
  'https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg';
const image3 =
  'https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001';
//   const image4 =
//     "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";
export const PlacementStats = () => {
  return (
    <div className=" mt-32">
      <CircularComponent />

      {/* <Parallax
        bgImage={image4}
        strength={100}
        renderLayer={(percentage) => (
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%,-50%)',
              width: percentage * 1300,
              height: percentage * 800,
            }}
            className=" p-6 rounded-xl pt-20"
          >
            <CardView />
          </div>
        )}
      >
        <div className="h-[700px]">
          <p className="h-screen flex flex-col items-center text-[20px] font-poppins">
            <text className="text-[50px] p-2 w-full flex justify-center font-bold">
              Student Stories
            </text>
          </p>
        </div>
      </Parallax> */}
    </div>
  );
};
