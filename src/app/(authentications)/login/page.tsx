import { LoginCard } from "@/components/modules/authenticatons/loginCard";

const LoginPage = () => {
  return (
    <>
      <div className="w-full min-h-dvh flex justify-center items-center my-3">
        <div>
          <h2 className="text-4xl my-10 text-center">
            Login with Email & Password
          </h2>
          <div className="bg-blue-100/15 rounded-b-sm px-2 py-1.5">
            <LoginCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
