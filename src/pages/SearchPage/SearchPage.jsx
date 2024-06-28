import { ListOfContent } from "../../components/ListOfContent/ListOfContent";
import { Loader } from "../../components/Loader/Loader";
import { NoFound } from "../../components/NoFound/NoFound";
import { useSearchValue } from "../../hooks/useSearchValue";

function SearchPage() {
  const { data, search, loading } = useSearchValue();

  return (
    <>
      {loading ? (
        <Loader />
      ) : data && data?.length > 0 ? (
        <ListOfContent data={data} />
      ) : (
        <NoFound search={search} />
      )}
    </>
  );
}
export { SearchPage };
