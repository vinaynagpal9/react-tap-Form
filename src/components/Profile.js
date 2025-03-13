export default Profile = ({ data, setData }) => {
  const { name, age, email } = data;
  const handleOnchage = (e, item) => {
    // console.log(e.target.value, item);
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };
  return (
    <div>
      <div>
        <label>Name : </label>
        <input
          onChange={(e) => handleOnchage(e, "name")}
          type="text"
          value={name}
        />
      </div>
      <div>
        <label>age : </label>
        <input
          onChange={(e) => handleOnchage(e, "age")}
          type="number"
          value={age}
        />
      </div>
      <div>
        <label>Email : </label>
        <input
          onChange={(e) => handleOnchage(e, "email")}
          type="email"
          value={email}
        />
      </div>
    </div>
  );
};
