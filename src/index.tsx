import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";

import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();
const rootElm = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(rootElm);
root.render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </QueryClientProvider>
);
