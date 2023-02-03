import { useRouter } from "next/router";
import Head from "next/head";

const Error = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>404 - Not found</title>
      </Head>
      <div className="p-4 flex justify-center items-center flex-col">
        <h4 className="text-3xl mb-4">
          <span className="text-red-500">Oops!</span> -{" "}
          <span className="text-blue-500">We can't find that page</span>
        </h4>
        <button
          className="bg-green-900 text-white roundex py-4 px-4"
          onClick={() => router.push("/")}
        >
          Return Home.
        </button>
      </div>
    </>
  );
};

Error.layoutProps = { title: "404", description: "Not found page" };

export default Error;
