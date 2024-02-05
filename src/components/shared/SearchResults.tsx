import { Models } from "appwrite";
import Loader from "./Loader";
import { Grid } from "lucide-react";
import GridPostList from "./GridPostList";

type SearchResultsProps = {
  isSearchFeching: boolean;
  searchedPosts: Models.Document[];
};

const SearchResults = ({ isSearchFeching, searchedPosts }: SearchResultsProps) => {
  if (isSearchFeching) return <Loader />;
  if (searchedPosts && searchedPosts.documents.length > 0) {
    return <GridPostList posts={searchedPosts.documents} />;
  }

  return <p className="text-light-4 mt-10 text-center w-full">No results found</p>;
};
export default SearchResults;
