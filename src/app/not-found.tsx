import { headers } from "next/headers";

export default async function NotFound() {
  const headersList = headers();
  const domain = headersList.get("host");

  return (
    <div>
      <p>Could not find requested resourceeee</p>
      <p></p>
    </div>
  );
}
