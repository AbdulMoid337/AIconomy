 // import { Button } from "./ui/button";
// import { PenBox, LayoutDashboard } from "lucide-react";
// import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";  
// import { checkUser } from "@/lib/checkUser";
// import Image from "next/image";

const Header = () => {

  return (
    <div className="">
     <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
    </div>
  );
};

export default Header;