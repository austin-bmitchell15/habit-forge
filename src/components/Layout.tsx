import { ReactNode } from 'react';
import { AuthUser } from '@aws-amplify/auth';
import { AuthEventData } from '@aws-amplify/ui';
import CustomNavbar from './CustomNavbar';

interface Props {
  children?: ReactNode;
  user: AuthUser | undefined;
  signOut: ((data?: AuthEventData | undefined) => void) | undefined;
}

export default function Layout({ children, user, signOut }: Props) {
  return (
    <div className="flex flex-row">
      <CustomNavbar user={user} signOut={signOut} />
      <main className="flex w-full">{children}</main>
    </div>
  );
}
