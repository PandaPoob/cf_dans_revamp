import HomePage from "@/views/home";
import Nav from "@/components/Nav";

export const metadata = {
  title: "CF Dans",
  description: "Dans dig glad på Amager med CF Dans og befri kroppen",
  keywords:
    "Dans, Udendørs dans, Amager dans, Dans på Amager, Dans for voksne, Voksen dans",
};

export default function Home() {
  return (
    <>
      <Nav />
      <HomePage />
    </>
  );
}
