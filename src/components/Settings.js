export default Settings = ({ data, setData }) => {
  const { theme } = data;

  const handleDataChange = (e) => {
    setData((prevState) => ({ ...prevState, theme: e.target.name }));
  };
  return (
    <div>
      <div>
        <input
          type="radio"
          name="dark"
          checked={theme === "dark"}
          onChange={handleDataChange}
        />
        Dark
      </div>
      <div>
        <input
          type="radio"
          name="Light"
          checked={theme === "Light"}
          onChange={handleDataChange}
        />
        Light
      </div>
    </div>
  );
};
