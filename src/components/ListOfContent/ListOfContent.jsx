import { ListItem } from "./ListItem";

function ListOfContent({ data, type, typeOfContent, title }) {
  return (
    <>
      <section className="other-films">
        <div className="container">
          <h2 className="other-films__title" data-active-films="" data-type="">
            {type} {typeOfContent} {title}
            <span className="other-films__title-add">на TS Cinema</span>
          </h2>

          <ul className="other-films__list">
            {data.map((item) => {
              return <ListItem key={item.id} item={item} type={type} />;
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
export { ListOfContent };
