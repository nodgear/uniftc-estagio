import { Menu } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from "next/router";
import { AiOutlineCloudUpload } from 'react-icons/ai'

type Props = {
  children: React.ReactNode;
  protect?: boolean;
};

function DefaultLayout({ children, protect }: Props) {
  const session = useSession()
  const router = useRouter()
  

  if (protect && session.status === 'unauthenticated') {
    router.push('/')
    return <> </>
  }


  return (
    <div>
      <nav className="relative flex items-center w-full px-2 py-2 text-sm text-white bg-blue-600">
        <div className="relative flex items-center justify-center">
          <Image
            src="/ftc_logo_c.png"
            alt="Logo FTC"
            className="w-8 h-8"
            width={24}
            height={24}
          />
        </div>
        <ul className="absolute flex font-semibold text-white -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <Link href={"/"}>
            <li className="mx-4 transition-opacity duration-300 cursor-pointer opacity-70 hover:opacity-100">
              Início
            </li>
          </Link>
          <Link href={"/courses"}>
            <li className="mx-4 transition-opacity duration-300 cursor-pointer opacity-70 hover:opacity-100">
              Cursos disponíveis
            </li>
          </Link>
        </ul>
        <div className="ml-auto">
          {session.status === 'authenticated' ? (
            <Menu as="div" className="relative inline-block text-left ">
              <Menu.Button>
                <div className="flex items-center h-full px-4 py-2 duration-300 rounded-md cursor-pointer hover:bg-opacity-10 hover:bg-white">
                  {/* <Link href={'/admin-page'}> */}
                    <span className="mr-3 font-semibold">{session.data.user?.name}</span>
                  {/* </Link> */}
                  <Image
                    src="/user_placeholder.png"
                    alt="Foto usuário"
                    className="w-8 h-8"
                    width={32}
                    height={32}
                  />
                </div>
              </Menu.Button>
              <Menu.Items className="absolute right-0 z-10 mt-2 text-black origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg w-72 focus:outline-none">
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/mycourses"
                        className={`${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-900"
                        }  flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm`}
                      >
                        <div className="p-2 bg-[#1294F2] text-white rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                            <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                            <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs font-semibold">Meus Cursos</p>
                          <p className="text-[10px] leading-3">
                            Acessar lista de cursos matriculados
                          </p>
                        </div>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/upload"
                        className={`${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-900"
                        }  flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm`}
                      >
                        <div className="p-2 text-white bg-green-600 rounded-full">
                          <AiOutlineCloudUpload size={24}/>
                        </div>
                        <div>
                          <p className="text-xs font-semibold">Upload</p>
                          <p className="text-[10px] leading-3">
                            Adicione um novo curso a plataforma
                          </p>
                        </div>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-900"
                        }  flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm`}
                      >
                        <div className="p-2 bg-[#FF5F5F] text-white rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="cursor-pointer" onClick={()=>{
                            signOut()
                          }}>
                          <p className="text-xs font-semibold" >Desconectar</p>
                          <p className="text-[10px] leading-3">
                            Faça logout do seu usuário
                          </p>
                        </div>
                      </div>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
          ) : (
            <Link href="/login">
              <button className="flex items-center h-full px-4 py-2 duration-300 rounded-md cursor-pointer hover:bg-opacity-10 hover:bg-white">Conecte-se</button>
            </Link>
          ) }
        </div>
      </nav>
      <main className="bg-blue-50">{children}</main>
    </div>
  );
}

export default DefaultLayout;
