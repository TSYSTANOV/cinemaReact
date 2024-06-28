import { ListOfContent } from "../../components/ListOfContent/ListOfContent";
import { withApi } from "../../hoc-helpers/withApi";
import { getContent } from "../../server/api";

function ContentPage({ data, typeOfContent, type, title }) {
  return (
    <>
      <ListOfContent
        data={data}
        type={typeOfContent}
        typeOfContent={type}
        title={title}
      />
    </>
  );
}
export default withApi(ContentPage, getContent);
