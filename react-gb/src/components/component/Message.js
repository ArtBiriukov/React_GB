import './Message.css';

function Message(props) {
  return(
    <p className="Mes__text">{props.text}</p>
  )
}

export default Message;
