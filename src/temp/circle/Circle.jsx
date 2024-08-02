import "./circle.css";
function Circle(probs) {
  return (
    <>
      <div className="circle" onClick={probs.onClick}>
        {probs.name}
      </div>
    </>
  );
}

export default Circle;
