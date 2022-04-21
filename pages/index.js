import AuthPage from "../components/AuthPage";
import { useMoralis } from "react-moralis";
import UploadForm from "../components/UploadForm";

export default function Home() {
  const { isAuthenticated, authenticate, logout, user } = useMoralis();

  const metamaskAuth = async () => {
    try {
      await authenticate({
        signInMessage: "Auth to start lazy minting your Nfts",
      });
    } catch (error) {
      console.error(error);
    }
  };
  if (!isAuthenticated) {
    return (
      <div>
        <AuthPage metamaskAuth={metamaskAuth} />
      </div>
    );
  }
  return (
    <div>
      <UploadForm logout={logout} user={user} />
    </div>
  );
}
