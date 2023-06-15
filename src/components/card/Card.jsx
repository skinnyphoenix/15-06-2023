import "./indexCard.css";

const Card = ({ data }) => {
  const falseCard = (cardStatus) => {
    if (cardStatus) return "falseCard";
  };
  const emoji = "✅";
  const emojiFalse = "❌";

  return (
    <div key={data.id} className={`Card ${falseCard(data.completed)}`}>
      <h2 className="todo_Title">{data.title}</h2>
      <button className="checkTodo">Done</button>
      <p>{data.completed ? emoji : emojiFalse}</p>
    </div>
  );
};

export default Card;
