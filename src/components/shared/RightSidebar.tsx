import { useGetUsers } from "@/lib/react-query/queriesAndMutations";
import { useToast } from "../ui/use-toast";
import Loader from "./Loader";
import UserCard from "./UserCard";

const RightSidebar = () => {
  const { toast } = useToast();
  const { data: creators, isLoading, isError: isErrorCreators } = useGetUsers();

  if (isErrorCreators) {
    toast({ title: "Something went wrong." });

    return;
  }
  return (
    <div className="rightsidebar">
      <div className="flex flex-col gap-11">
        <h2 className="h3-bold md:h2-bold text-left w-full">Top Creators</h2>
        {isLoading && !creators ? (
          <Loader />
        ) : (
          <ul className="creator-grid">
            {creators?.documents.map((creator) => (
              <li key={creator?.$id} className="flex-1 min-w-[200px] w-full">
                <UserCard user={creator} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default RightSidebar;
