import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { codeNumber } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!codeNumber) {
      router.push("/");
    }
  }, [router, codeNumber]);

  return <>{children}</>;
};

export default ProtectedRoute;
