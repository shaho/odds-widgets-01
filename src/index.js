import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
import GlobalStyle from "./styles/global-styles";

import Header from "./components/molecules/header";
import OddsToplist from "./components/organisms/odds-toplist";
import Footer from "./components/molecules/footer";

import { Container } from "./styles";

const queryClient = new QueryClient();

export default function Odds() {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <GlobalStyle />
      <Container>
        <Header
          title="Borussia Mönchengladbach vs Borussia Dortmund"
          date="2021-05-04T08:14:52"
        />
        <OddsToplist />
        <Footer />
      </Container>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}
