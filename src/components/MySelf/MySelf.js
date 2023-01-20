import Special from "../Special/Special";

const MySelf = ({ house }) => {
  return (
    <div>
      <h2>MySelf</h2>
      <p>
        <small>House : {house}</small>
        <section>
          <Special></Special>
        </section>
      </p>
    </div>
  );
};

export default MySelf;
