import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchHeader from "./components/SearchHeader";
import "./App.css";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";

//서버상태를 관리(가져온데이터)하는 라이브러리
const queryClient = new QueryClient();
//QueryClient 클라스로 인스턴스를 만들어 줌

function App() {
  return (
    <>
      <SearchHeader />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}

export default App;
