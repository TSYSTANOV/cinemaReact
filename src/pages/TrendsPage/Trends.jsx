import { ListOfContent } from "../../components/ListOfContent/ListOfContent";
import { withApi } from "../../hoc-helpers/withApi";
import { getTrends } from "../../server/api";
import { TopTrendContent } from "./TopTrendContent";

function Trends({ data, page, title }) {
  return (
    <main>
      {page === 1 && <TopTrendContent topTrend={data[0]} />}
      <ListOfContent data={data} title={title} />
    </main>
  );
}
export default withApi(Trends, getTrends);
