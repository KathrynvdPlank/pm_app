export default function Card(props) {
    return <div className="valueCard">
        <h1>{props.header}</h1>
        <p>{props.text}</p>
    </div>;
  }