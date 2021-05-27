// import React from 'react'

// export const ExampleComponent = ({ text }) => {
//   return <div>Example Component: {text}</div>
// }

import GlobalStyle from "./styles/global-styles";

import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";

import Header from "./components/molecules/header";
import OddsToplist from "./components/organisms/odds-toplist";
import Footer from "./components/molecules/footer";

import { Container } from "./styles";

const queryClient = new QueryClient();

export default function OddsWidget() {
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
