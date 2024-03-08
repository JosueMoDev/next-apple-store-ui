import { auth } from "@/auth.config";
import { redirect } from "next/navigation";

export default async function AccountPage() {
//   const session = await auth();

//   if (!session?.user) {
//     // redirect('/auth/login?returnTo=/perfil');
//     redirect("/");
//   }

  return (
    <div>
      <h3 className="text-3xl mb-10">Account</h3>
    </div>
  );
}
