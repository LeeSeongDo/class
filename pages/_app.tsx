import "../styles/globals.css";
import HeaderArea from "../src/components/commons/Layout/header";
import Footer from "../src/components/commons/Layout/footer";
import Navigation from "../src/components/commons/Layout/navigation";
import { useRouter } from "next/router";
import ApolloSetting from "../src/components/commons/Apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";
import { useState } from "react";
import { createUploadLink } from "apollo-upload-client";

const HIDDEN_HEADER = [
  "/section11/11-01-eventbubbling",
  "/section03/03-02-graphql",
];

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const isHidden = HIDDEN_HEADER.includes(router.asPath);

  return (
    <div>
      {!isHidden && <HeaderArea />}
      <Navigation />
      <RecoilRoot>
        <ApolloSetting>
          <Component {...pageProps} />
        </ApolloSetting>
      </RecoilRoot>
      <Footer />
    </div>
  );
}
