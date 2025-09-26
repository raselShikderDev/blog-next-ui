import { authOptions } from "@/helpers/auth";
import { getServerSession } from "next-auth";

const DashboardHomePage = async () => {
  const session = await getServerSession(authOptions);

  // console.log(session);

  return (
    <div className="flex justify-center text-center items-center w-full">
      <div className="space-y-2">
        <h1 className="text-4xl">Welcome</h1>
        <p>{`Name: ${session?.user?.name}`}</p>
        <p>{`Email: ${session?.user?.email}`}</p>
      </div>
    </div>
  );
};

export default DashboardHomePage;
