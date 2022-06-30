import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

interface SideBarProps{
  isMenu:boolean;
  visible?:boolean;
}

export function Sidebar(props:SideBarProps) {
  const { data } = useGetLessonsQuery();
  return (
    <aside className={`col-span-12 sm:col-span-4 lg:col-span-3 w-auto bg-gray-700 p-6 border-l border-gray-600 ${props.isMenu? "absolute float-right z-50 right-0 top-20": "static hidden md:block"} ${props.visible? "block" : "hidden"}`}  >
      <span className="font-bold text-2xl pb-4 mb-4 border-b border-gray-500 block">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-6">
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        ))}
      </div>
    </aside>
  );
}
