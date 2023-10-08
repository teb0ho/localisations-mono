import Button from "../components/Button";

const Home = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-96">
          <h1 className="text-3xl text-center font-bold">
            Welcome to Localisation UI, your perfect app for managing your
            strings
          </h1>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-3/4 flex justify-center">
          <p className="mt-4 text-md text-gray-500">
            Click manage strings to start viewing, editing, updating and
            deleting you localisation strings 👌
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div className="w-3/4 flex justify-center ">
          <Button primary href="/manage-strings">
            Manage Strings
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
