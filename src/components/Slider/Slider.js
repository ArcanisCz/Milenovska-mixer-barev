import "./Slider.css";

const Slider = ({ color, setColor, value }) => {
  return (
    <div className="slider">
      <input
        id="slider"
        value={value}
        type="range"
        min="1"
        max="255"
        className={`slider slider-${color} `}
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
    </div>
  );
};

export default Slider;
