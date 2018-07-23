import React from "react";
import Header from "./Header";
import StickerList from "./StickerList";

function App(){
  return (
    <div>
      <Header />
      <SearchCoords />
      <Map />
      <StickerList />
      <hr/>
    </div>
  );
}

export default App;
