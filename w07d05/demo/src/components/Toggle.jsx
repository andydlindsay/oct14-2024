import useToggle from "../hooks/useToggle";

const Toggle = () => {
  const { isOn, toggle } = useToggle(true);

  return (
    <div>
      <h2>Toggle component</h2>
      <button onClick={toggle}>click me!</button>

      { isOn && <h2>🌞</h2> }
      { !isOn && <h2>🌚</h2> }
    </div>
  );
};

export default Toggle;
