import "./styles.css";

export function getImageUrl(imageId, size = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}

function Profile({
  name,
  imageId,
  width = 70,
  height = 70,
  profesion,
  awards = [],
  discovered,
}) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={width}
        height={height}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profesion}
        </li>
        <li>
          <b>Awards: {awards.length} </b>
          {awards.map((award) => award)}
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imageId="szV5sdG"
        width={100}
        height={100}
        profesion="physicist and chemist"
        discovered="polonium (chemical element)"
        awards={[
          "Nobel Prize in Physics",
          "Nobel Prize in Chemistry",
          "Davy Medal",
          "Matteucci Medal",
        ]}
      />
      <Profile
        name="Katsuko Saruhashi"
        imageId="YfeOqp2"
        profesion="geochemist"
        discovered="a method for measuring carbon dioxide in seawater"
        awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
      />
    </div>
  );
}
