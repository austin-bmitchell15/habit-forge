import Layout from '../components/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Amplify } from 'aws-amplify';
import {
  withAuthenticator,
  WithAuthenticatorProps,
} from '@aws-amplify/ui-react';
import awsConfig from '../aws-exports';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsConfig);

interface MyAppProps extends AppProps, WithAuthenticatorProps {}

function App({ Component, pageProps, signOut, user }: MyAppProps) {
  return (
    <Layout user={user} signOut={signOut}>
      <Component {...pageProps} className="flex flex-grow" />
    </Layout>
  );
}

export default withAuthenticator(App);
