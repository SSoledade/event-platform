import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <div className=" min-h-screen grid grid-cols-12">
      <Header/>
      <main className="grid grid-cols-12 col-span-12">
        {slug ? <Video lessonSlug={slug}/> : <Video lessonSlug='refatorando-codigo-react-usando-clean-code'/> }
        <Sidebar isMenu={false}/>
      </main>
    </div>
  );
}
