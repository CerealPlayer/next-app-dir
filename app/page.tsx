export default async function Page() {
  await new Promise((res) => setTimeout(res, 5000));
  return <h1 className="text-center text-4xl">Welcome page</h1>;
}
