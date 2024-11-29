import useList from "../hooks/useList";
import useInput from '../hooks/useInput';

const List = () => {
  const {
    list,
    addElement,
    removeElement,
    empty,
    sort,
  } = useList(['hello', 'world']);

  const newElementInput = useInput('');

  const mappedList = list.map((element, index) => {
    return (
      <p key={index}>
        {element} 
        <button onClick={() => removeElement(element)}>❌</button>
      </p>
    );
  });

  return (
    <div>
      <h2>Build a List Below!</h2>

      <button onClick={empty}>Empty</button>
      <button onClick={sort}>Sort</button>

      <div>
        <label>New element:</label>
        <input {...newElementInput} />
        <button onClick={() => addElement(newElementInput.value)}>Add</button>
      </div>

      <h2>List contents:</h2>
      { mappedList }
    </div>
  );
};

export default List;
