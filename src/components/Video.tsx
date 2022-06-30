import '@vime/core/themes/default.css'
import { DefaultUi, Player, Youtube } from '@vime/react'
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
} from 'phosphor-react'
import { useGetLessonBySlugQuery } from '../graphql/generated'

interface VideoProps {
  lessonSlug: string
}

export function Video(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
    fetchPolicy: 'no-cache',
  })
  if (!data || !data.lesson) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center h-full w-full max-w-[1100px] max-h-[60vh] aspect-video bg-black col-span-12">
        <div
          className=" spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full  mb-6"
          role="status"
        ></div>
        <span className="">Carregando...</span>
      </div>
    )
  }

  return (
    <div className="flex-1 col-span-12 md:col-span-8 lg:col-span-9 z-40">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data?.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className="p-8 max-w-[1100px] mx-auto flex flex-col">
        <div className="grid grid-cols-12 gap-5">
          <div className="flex items-start gap-10 flex-col col-span-12 md:col-span-8">

            <div className="md:flex-1 ">
              <h1 className="text-2xl font-bold">{data?.lesson?.title}</h1>
              <p className="mt-4 text-gray-200 sm:leading-relaxed">
                {data?.lesson?.description}
              </p>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src={data?.lesson?.teacher?.avatarURL}
                alt=""
              />
              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">
                  {data?.lesson?.teacher?.name}
                </strong>
                <span className="text-gray-200 text-sm block">
                  {data?.lesson?.teacher?.bio}
                </span>
              </div>

            </div>

          </div>

          <div className="flex flex-row gap-4 md:flex-col md:flex-1 col-span-12 md:col-span-4">
            <a
              href=""
              className="p-2 sm:p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors w-full"
            >
              <DiscordLogo size={24} />
              comunidade do discord
            </a>
            <a
              href=""
              className="p-2 sm:p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors w-full"
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>

        </div>

        <div className="gap-8 mt-20 grid grid-cols-1 lg:grid-cols-2">
          <a
            href=""
            className="bg-gray-700 rounded overflow-hidden flex flex-col sm:flex-row items-center sm:items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-4 md:p-6 flex items-center w-full sm:w-[88px] justify-center">
              <FileArrowDown size={40} />
            </div>
            <div className=" mt-2 md:mt-0 md:py-6 leading-relaxed text-center sm:text-left px-0 md:px-2">
              <strong className="text-2xl">Material complementar</strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelerar o seu
                desenvolvimento.
              </p>
            </div>
            <div className="h-full mb-4 sm:mb-0 sm:p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>

          <a
            href=""
            className="bg-gray-700 rounded overflow-hidden flex flex-col sm:flex-row items-center sm:items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-4 md:p-6 flex items-center w-full sm:w-[88px] justify-center">
              <FileArrowDown size={40} />
            </div>
            <div className="mt-2 md:mt-0 md:py-6 leading-relaxed text-center sm:text-left px-0 md:px-2">
              <strong className="text-2xl">Wallpapers exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2">
              Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina.
              </p>
            </div>
            <div className="h-full mb-4 sm:mb-0 sm:p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>

        </div>
      </div>
    </div>
  )
}
