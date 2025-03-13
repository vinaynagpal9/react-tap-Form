export default Intrests = ({ data, setData }) => {
  const { intrests } = data;
  const handleIntrests = (e, item) => {
    let updatedIntrests = [...intrests];

    if (e.target.checked) {
      updatedIntrests.push(item);
    } else {
      updatedIntrests = updatedIntrests.filter((i) => i !== item);
    }

    setData((prevState) => ({
      ...prevState,
      intrests: updatedIntrests,
    }));
  };
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={intrests.includes("coding")}
            onClick={(e) => handleIntrests(e, "coding")}
          />
          Coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="music"
            checked={intrests.includes("music")}
            onClick={(e) => handleIntrests(e, "music")}
          />
          music
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="dance"
            checked={intrests.includes("dance")}
            onChange={(e) => handleIntrests(e, "dance")}
          />
          dance
        </label>
      </div>
    </div>
  );
};
