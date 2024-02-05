import Loader from "@/components/shared/Loader";
import UserCard from "@/components/shared/UserCard";
import { useToast } from "@/components/ui/use-toast";
import { useGetUsers } from "@/lib/react-query/queriesAndMutations";

const AllUsers = () => {
  const { toast } = useToast();
  const { data: creators, isLoading, isError: isErrorCreators } = useGetUsers();

  if (isErrorCreators) {
    toast({ title: "Something went wrong." });

    return;
  }

  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="user-container">
          <div className="max-w-5xl flex-start gap-3 justify-start w-full">
            <img src="/assets/icons/people.svg" alt="user" width={36} height={36} />
            <h2 className="h3-bold md:h2-bold text-left w-full">All Users</h2>
          </div>
          {isLoading && !creators ? (
            <Loader />
          ) : (
            <ul className="user-grid">
              {creators?.documents.map((creator) => (
                <li key={creator?.$id} className="flex-1 min-w-[200px] w-full">
                  <UserCard user={creator} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export default AllUsers;
