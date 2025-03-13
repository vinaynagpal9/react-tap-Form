import Profile from "./Profile.js";
import Intrests from "./Intrests.js";
import Settings from "./Settings.js";
import { useState } from "react";

export default tapForm = () => {
  const [data, setData] = useState({
    name: "vinay",
    age: 20,
    email: "vinaynagpal96@hmail.com",
    intrests: ["music", "test"],
    theme: "dark",
  });
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { name: "Profile", component: Profile },
    { name: "Intrests", component: Intrests },
    { name: "Settings", component: Settings },
  ];
  const handlePrevious = () => {
    setActiveTab(activeTab - 1);
  };
  const handleNext = () => {
    setActiveTab(activeTab + 1);
  };
  const handleSubmit = () => {
    setActiveTab(activeTab + 1);
  };
  const ActiveTabComponent = tabs[activeTab].component;
  return (
    <div>
      <div className="heading-container">
        {tabs.map((t, i) => (
          <div key={i} className="heading" onClick={() => setActiveTab(i)}>
            {t.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} />
      </div>
      <div>
        {activeTab > 0 && <button onClick={handlePrevious}>Prev</button>}
      </div>
      <div>
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNext}>Next</button>
        )}
      </div>
      <div>{activeTab === tabs.length - 1 && <button>Submit</button>}</div>
    </div>
  );
};
