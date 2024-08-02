import { Header } from "@widgets/Header";
import { Footer } from "@widgets/Footer";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const Home = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-[100vh] bg-gray box-border">
        <Header />
        <div className="flex flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default Home;
