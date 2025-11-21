import RegisterForm from "@/app/_component/RegisterForm";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="max-w-md max-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Register</h2>
      <RegisterForm />
      <p className="mt-4 text-center">
        Already have an account?{" "}
        <Link href={"/login"} className="font-bold text-blue-500 hover:underline hover:text-red-500">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
