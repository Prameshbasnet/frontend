import { Button } from "@mui/material";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center">This is a Profile Page</h1>
      <>Sign Up for amazing gifts </>
      <Link href="/pages/security/signup">
        <Button>You do not have account please login</Button>
      </Link>
    </div>
  );
}
