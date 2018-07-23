import React from "react";
import PropTypes from "prop-types";
import CreateSticker from "./CreateSticker";

function Sticker(){
  return (
    <div>
      <h2>{props.date}</h2>
      <h2>{props.coords}</h2>
      <form>
      <h2>{props.sticker}
        <input type="radio" id="celeb">Celeb</input>
        <input type="radio" id="celeb">Pet</input>
        <input type="radio" id="celeb">Party</input>
        <input type="radio" id="celeb">Foodtruck</input>
        <input type="radio" id="celeb">Romance</input>
        <input type="radio" id="celeb">Construction</input>
        <input type="radio" id="celeb">Warning</input>
        <input type="radio" id="celeb">Danger</input>
      </h2>
      <button class="btn btn-success btn-lg">StickIt</button>
      </form>
    </div>
  )
}

Sticker.propTypes = {
  dates: PropTypes.string.isRequired,
  coords: PropTypes.string.isRequired,
  sticker: PropTypes.symbol.isRequired
}


export default Sticker;
