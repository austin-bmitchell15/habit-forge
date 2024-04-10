import Layout from "../components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { withAuthenticator, WithAuthenticatorProps } from "@aws-amplify/ui-react"
import awsConfig from '../aws-exports';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify'

Amplify.configure(awsConfig)

interface MyAppProps extends AppProps, WithAuthenticatorProps {};

function App({ Component, pageProps, signOut, user }: MyAppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default withAuthenticator(App);