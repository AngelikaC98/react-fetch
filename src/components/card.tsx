import "./card.css";

type Props = {
  Name: string;
  Family: string;
  Picture: string;
};

const Card = ({ Name, Family, Picture }: Props) => {
  return (
    <>
      <p className="name">{Name}</p>
      <p className="textHause">{Family}</p>
      <img className="picture" src={Picture}></img>
    </>
  );
};

export default Card;
