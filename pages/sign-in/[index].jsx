import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  // Mount the SignIn component under "/sign-up". 
  // The routing is set to path-based.
  return <SignIn routing="path" path="/sign-in" />;
}