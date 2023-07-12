import { type NextPage } from "next";
import NewTweetForm from "~/components/NewTweetForm";
import InfiniteTweetList from "~/components/InfiniteTweetList";

const Home: NextPage = () => {
  return (
    <>
      <header className="sticky top-0 z-10 border-b bg-white pt-2">
        <h1 className="mb-2 px-4 text-lg font-bold">Home</h1>
      </header>
      <NewTweetForm />
      <RecentTweets />
    </>
  );
};

const RecentTweets = () => {
  const tweets = [];
  return <InfiniteTweetList tweets={tweets} />
}

export default Home;
