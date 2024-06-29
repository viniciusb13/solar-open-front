"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import ClickOutside from "@/components/ClickOutside";
import useLocalStorage from "@/hooks/useLocalStorage";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    name: "MENU",
    menuItems: [
      {
        icon: (
          // <svg
          //   className="text- fill-current"
          //   width="24"
          //   height="24"
          //   viewBox="0 0 24 24"
          //   fill="none"
          //   xmlns="http://www.w3.org/2000/svg"
          // >
          //   <path
          //     d="M9.00009 17.2498C8.58588 17.2498 8.25009 17.5856 8.25009 17.9998C8.25009 18.414 8.58588 18.7498 9.00009 18.7498H15.0001C15.4143 18.7498 15.7501 18.414 15.7501 17.9998C15.7501 17.5856 15.4143 17.2498 15.0001 17.2498H9.00009Z"
          //     fill=""
          //   />
          //   <path
          //     fillRule="evenodd"
          //     clipRule="evenodd"
          //     d="M12 1.25C11.2749 1.25 10.6134 1.44911 9.88928 1.7871C9.18832 2.11428 8.37772 2.59716 7.36183 3.20233L5.90622 4.06943C4.78711 4.73606 3.89535 5.26727 3.22015 5.77524C2.52314 6.29963 1.99999 6.8396 1.65907 7.55072C1.31799 8.26219 1.22554 9.0068 1.25519 9.87584C1.2839 10.717 1.43105 11.7397 1.61556 13.0219L1.90792 15.0537C2.14531 16.7036 2.33368 18.0128 2.61512 19.0322C2.90523 20.0829 3.31686 20.9169 4.05965 21.5565C4.80184 22.1956 5.68984 22.4814 6.77634 22.6177C7.83154 22.75 9.16281 22.75 10.8423 22.75H13.1577C14.8372 22.75 16.1685 22.75 17.2237 22.6177C18.3102 22.4814 19.1982 22.1956 19.9404 21.5565C20.6831 20.9169 21.0948 20.0829 21.3849 19.0322C21.6663 18.0129 21.8547 16.7036 22.0921 15.0537L22.3844 13.0219C22.569 11.7396 22.7161 10.717 22.7448 9.87584C22.7745 9.0068 22.682 8.26219 22.3409 7.55072C22 6.8396 21.4769 6.29963 20.7799 5.77524C20.1047 5.26727 19.2129 4.73606 18.0938 4.06943L16.6382 3.20233C15.6223 2.59716 14.8117 2.11428 14.1107 1.7871C13.3866 1.44911 12.7251 1.25 12 1.25ZM8.09558 4.51121C9.15309 3.88126 9.89923 3.43781 10.5237 3.14633C11.1328 2.86203 11.5708 2.75 12 2.75C12.4293 2.75 12.8672 2.86203 13.4763 3.14633C14.1008 3.43781 14.8469 3.88126 15.9044 4.51121L17.2893 5.33615C18.4536 6.02973 19.2752 6.52034 19.8781 6.9739C20.4665 7.41662 20.7888 7.78294 20.9883 8.19917C21.1877 8.61505 21.2706 9.09337 21.2457 9.82469C21.2201 10.5745 21.0856 11.5163 20.8936 12.8511L20.6148 14.7884C20.3683 16.5016 20.1921 17.7162 19.939 18.633C19.6916 19.5289 19.3939 20.0476 18.9616 20.4198C18.5287 20.7926 17.9676 21.0127 17.037 21.1294C16.086 21.2486 14.8488 21.25 13.1061 21.25H10.8939C9.15124 21.25 7.91405 21.2486 6.963 21.1294C6.03246 21.0127 5.47129 20.7926 5.03841 20.4198C4.60614 20.0476 4.30838 19.5289 4.06102 18.633C3.80791 17.7162 3.6317 16.5016 3.3852 14.7884L3.10643 12.851C2.91437 11.5163 2.77991 10.5745 2.75432 9.82469C2.72937 9.09337 2.81229 8.61505 3.01167 8.19917C3.21121 7.78294 3.53347 7.41662 4.12194 6.9739C4.72482 6.52034 5.54643 6.02973 6.71074 5.33615L8.09558 4.51121Z"
          //     fill=""
          //   />
          // </svg>

          <svg xmlns="http://www.w3.org/2000/svg" className="text- fill-current" height="" width="" fill="none" viewBox="0 0 576 512">
            <path
                d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
        </svg>
        ),
        label: "Visão Geral",
        route: "/",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text- fill-current"
            width=""
            height=""
            fill="none"
            viewBox="0 0 256 256"
          >
              <path
                  d="M32,104a8,8,0,0,1,8-8H56a8,8,0,0,1,0,16H40A8,8,0,0,1,32,104ZM71.43,58.75A8,8,0,0,0,82.75,47.43L71.43,36.12A8,8,0,0,0,60.12,47.43ZM128,40a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V32A8,8,0,0,0,128,40Zm50.91,21.09a8,8,0,0,0,5.66-2.34l11.31-11.32a8,8,0,0,0-11.31-11.31L173.25,47.43a8,8,0,0,0,5.66,13.66ZM192,104a8,8,0,0,0,8,8h16a8,8,0,0,0,0-16H200A8,8,0,0,0,192,104ZM88,112a8,8,0,0,0,8-8,32,32,0,0,1,64,0,8,8,0,0,0,16,0,48,48,0,0,0-96,0A8,8,0,0,0,88,112ZM238.91,220a8,8,0,0,1-6.91,4H24a8,8,0,0,1-7-11.94l40.69-72a8,8,0,0,1,7-4.06H191.3a8,8,0,0,1,7,4.06l40.69,72A8,8,0,0,1,238.91,220Zm-52.27-68H162.27l3.48,16h29.93Zm-37.26,16-3.48-16H110.1l-3.48,16Zm-46.24,16-5.21,24h60.14l-5.21-24ZM60.32,168H90.25l3.48-16H69.36ZM37.71,208H81.55l5.22-24H51.28Zm180.58,0-13.57-24H169.23l5.22,24Z">

              </path>
          </svg>

          // <svg
          //   width="28"
          //   height=""
          //   viewBox="0 0 28 23"
          //   fill="none"
          //   xmlns="http://www.w3.org/2000/svg">
          //     <g clip-path="url(#clip0_80_9613)">
          //       <path d="M5.34593 0C4.01156 0 2.86531 0.940625 2.60281 2.24875L0.36281 13.4487C0.0171851 15.1812 1.33843 16.8 3.10594 16.8H12.5997V19.6H9.79968C9.02531 19.6 8.39968 20.2256 8.39968 21C8.39968 21.7744 9.02531 22.4 9.79968 22.4H18.1997C18.9741 22.4 19.5997 21.7744 19.5997 21C19.5997 20.2256 18.9741 19.6 18.1997 19.6H15.3997V16.8H24.8934C26.6609 16.8 27.9866 15.1856 27.6409 13.4487L25.4009 2.24875C25.1341 0.940625 23.9878 0 22.6534 0H5.34593ZM11.4141 2.8H16.5853L17.0403 7.35H10.9591L11.4141 2.8ZM8.85031 7.35H4.43594L5.34593 2.8H9.30093L8.85031 7.35ZM4.01593 9.45H8.64031L8.18531 14H3.10594L4.01593 9.45ZM10.7491 9.45H17.2503L17.7053 14H10.2941L10.7491 9.45ZM19.3591 9.45H23.9834L24.8934 14H19.8184L19.3591 9.45ZM23.5591 7.35H19.1491L18.6941 2.8H22.6491L24.0228 2.52437L22.6534 2.8L23.5634 7.35H23.5591Z" fill="white" />
          //     </g>
          //     <defs>
          //     <clipPath id="clip0_80_9613">
          //       <rect width="28" height=".4" fill="white"/>
          //     </clipPath>
          //     </defs>
          // </svg>
        ),
        label: "Painéis",
        route: "/panels",
      },
      {
        icon: (
          <svg
            className="fill-current stroke-current"
            width=""
            height=""
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="0.8"
            stroke="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.9999 1.25C9.37654 1.25 7.24989 3.37665 7.24989 6C7.24989 8.62335 9.37654 10.75 11.9999 10.75C14.6232 10.75 16.7499 8.62335 16.7499 6C16.7499 3.37665 14.6232 1.25 11.9999 1.25ZM8.74989 6C8.74989 4.20507 10.205 2.75 11.9999 2.75C13.7948 2.75 15.2499 4.20507 15.2499 6C15.2499 7.79493 13.7948 9.25 11.9999 9.25C10.205 9.25 8.74989 7.79493 8.74989 6Z"
              fill=""
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.9999 12.25C9.68634 12.25 7.55481 12.7759 5.97534 13.6643C4.41937 14.5396 3.24989 15.8661 3.24989 17.5L3.24982 17.602C3.24869 18.7638 3.24728 20.222 4.5263 21.2635C5.15577 21.7761 6.03637 22.1406 7.2261 22.3815C8.41915 22.6229 9.97412 22.75 11.9999 22.75C14.0257 22.75 15.5806 22.6229 16.7737 22.3815C17.9634 22.1406 18.844 21.7761 19.4735 21.2635C20.7525 20.222 20.7511 18.7638 20.75 17.602L20.7499 17.5C20.7499 15.8661 19.5804 14.5396 18.0244 13.6643C16.445 12.7759 14.3134 12.25 11.9999 12.25ZM4.74989 17.5C4.74989 16.6487 5.37127 15.7251 6.71073 14.9717C8.02669 14.2315 9.89516 13.75 11.9999 13.75C14.1046 13.75 15.9731 14.2315 17.289 14.9717C18.6285 15.7251 19.2499 16.6487 19.2499 17.5C19.2499 18.8078 19.2096 19.544 18.5263 20.1004C18.1558 20.4022 17.5364 20.6967 16.4761 20.9113C15.4192 21.1252 13.9741 21.25 11.9999 21.25C10.0257 21.25 8.58063 21.1252 7.52368 20.9113C6.46341 20.6967 5.84401 20.4022 5.47348 20.1004C4.79021 19.544 4.74989 18.8078 4.74989 17.5Z"
              fill=""
            />
          </svg>
        ),
        label: "Perfil",
        route: "/profile",
      },
      {
        icon: (
          // <svg
          //   className="fill-current"
          //   width="24"
          //   height=""
          //   viewBox="0 0 24 24"
          //   fill="none"
          //   xmlns="http://www.w3.org/2000/svg"
          // >
          //   <path
          //     fillRule="evenodd"
          //     clipRule="evenodd"
          //     d="M11.9999 1.25C9.37654 1.25 7.24989 3.37665 7.24989 6C7.24989 8.62335 9.37654 10.75 11.9999 10.75C14.6232 10.75 16.7499 8.62335 16.7499 6C16.7499 3.37665 14.6232 1.25 11.9999 1.25ZM8.74989 6C8.74989 4.20507 10.205 2.75 11.9999 2.75C13.7948 2.75 15.2499 4.20507 15.2499 6C15.2499 7.79493 13.7948 9.25 11.9999 9.25C10.205 9.25 8.74989 7.79493 8.74989 6Z"
          //     fill=""
          //   />
          //   <path
          //     fillRule="evenodd"
          //     clipRule="evenodd"
          //     d="M11.9999 12.25C9.68634 12.25 7.55481 12.7759 5.97534 13.6643C4.41937 14.5396 3.24989 15.8661 3.24989 17.5L3.24982 17.602C3.24869 18.7638 3.24728 20.222 4.5263 21.2635C5.15577 21.7761 6.03637 22.1406 7.2261 22.3815C8.41915 22.6229 9.97412 22.75 11.9999 22.75C14.0257 22.75 15.5806 22.6229 16.7737 22.3815C17.9634 22.1406 18.844 21.7761 19.4735 21.2635C20.7525 20.222 20.7511 18.7638 20.75 17.602L20.7499 17.5C20.7499 15.8661 19.5804 14.5396 18.0244 13.6643C16.445 12.7759 14.3134 12.25 11.9999 12.25ZM4.74989 17.5C4.74989 16.6487 5.37127 15.7251 6.71073 14.9717C8.02669 14.2315 9.89516 13.75 11.9999 13.75C14.1046 13.75 15.9731 14.2315 17.289 14.9717C18.6285 15.7251 19.2499 16.6487 19.2499 17.5C19.2499 18.8078 19.2096 19.544 18.5263 20.1004C18.1558 20.4022 17.5364 20.6967 16.4761 20.9113C15.4192 21.1252 13.9741 21.25 11.9999 21.25C10.0257 21.25 8.58063 21.1252 7.52368 20.9113C6.46341 20.6967 5.84401 20.4022 5.47348 20.1004C4.79021 19.544 4.74989 18.8078 4.74989 17.5Z"
          //     fill=""
          //   />
          // </svg>
          // <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="" width="24" viewBox="0 0 24 24" stroke="black" className="text- fill-current">
          //   <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
          // </svg>
          <svg data-slot="icon" aria-hidden="true" className="stroke-current" height="" width="" fill="none" stroke-width="2" stroke="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        ),
        label: "Alertas",
        route: "/alerts",
      },
      {
        icon: (
          <svg
            className="fill-current"
            width=""
            height=""
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z" />
          </svg>
        ),
        label: "Mensagens",
        route: "/messages",
      },
      // {
      //   icon: (
      //     <svg
      //       className="fill-current"
      //       width="24"
      //       height=""
      //       viewBox="0 0 24 24"
      //       fill="none"
      //       xmlns="http://www.w3.org/2000/svg"
      //     >
      //       <path
      //         fillRule="evenodd"
      //         clipRule="evenodd"
      //         d="M2.25 7C2.25 6.58579 2.58579 6.25 3 6.25H13C13.4142 6.25 13.75 6.58579 13.75 7C13.75 7.41421 13.4142 7.75 13 7.75H3C2.58579 7.75 2.25 7.41421 2.25 7ZM16.5 6.25C16.7951 6.25 17.0628 6.42309 17.1839 6.69223L21.6839 16.6922C21.8539 17.07 21.6855 17.514 21.3078 17.6839C20.93 17.8539 20.486 17.6855 20.3161 17.3078L18.8787 14.1136H14.1213L12.6839 17.3078C12.514 17.6855 12.07 17.8539 11.6922 17.6839C11.3145 17.514 11.1461 17.07 11.3161 16.6922L15.8161 6.69223C15.9372 6.42309 16.2049 6.25 16.5 6.25ZM14.7963 12.6136H18.2037L16.5 8.82764L14.7963 12.6136ZM2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H10C10.4142 11.25 10.75 11.5858 10.75 12C10.75 12.4142 10.4142 12.75 10 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12ZM2.25 17C2.25 16.5858 2.58579 16.25 3 16.25H8C8.41421 16.25 8.75 16.5858 8.75 17C8.75 17.4142 8.41421 17.75 8 17.75H3C2.58579 17.75 2.25 17.4142 2.25 17Z"
      //         fill=""
      //       />
      //     </svg>
      //   ),
      //   label: "Pages",
      //   route: "#",
      //   children: [
      //     { label: "Settings", route: "/pages/settings" },
      //   ],
      // },
    ],
  },
  {
    name: "OUTROS",
    menuItems: [
      //{
      //   icon: (
      //     <svg
      //       className="fill-current"
      //       width=""
      //       height=""
      //       viewBox="0 0 24 24"
      //       fill="none"
      //       xmlns="http://www.w3.org/2000/svg"
      //     >
      //       <path
      //         fillRule="evenodd"
      //         clipRule="evenodd"
      //         d="M2.25 7C2.25 6.58579 2.58579 6.25 3 6.25H13C13.4142 6.25 13.75 6.58579 13.75 7C13.75 7.41421 13.4142 7.75 13 7.75H3C2.58579 7.75 2.25 7.41421 2.25 7ZM16.5 6.25C16.7951 6.25 17.0628 6.42309 17.1839 6.69223L21.6839 16.6922C21.8539 17.07 21.6855 17.514 21.3078 17.6839C20.93 17.8539 20.486 17.6855 20.3161 17.3078L18.8787 14.1136H14.1213L12.6839 17.3078C12.514 17.6855 12.07 17.8539 11.6922 17.6839C11.3145 17.514 11.1461 17.07 11.3161 16.6922L15.8161 6.69223C15.9372 6.42309 16.2049 6.25 16.5 6.25ZM14.7963 12.6136H18.2037L16.5 8.82764L14.7963 12.6136ZM2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H10C10.4142 11.25 10.75 11.5858 10.75 12C10.75 12.4142 10.4142 12.75 10 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12ZM2.25 17C2.25 16.5858 2.58579 16.25 3 16.25H8C8.41421 16.25 8.75 16.5858 8.75 17C8.75 17.4142 8.41421 17.75 8 17.75H3C2.58579 17.75 2.25 17.4142 2.25 17Z"
      //         fill=""
      //       />
      //     </svg>
      //   ),
      //   label: "Forms",
      //   route: "#",
      //   children: [
      //     { label: "Form Elements", route: "/forms/form-elements" },
      //     { label: "Form Layout", route: "/forms/form-layout" },
      //   ],
      // },
      // {
      //   icon: (
      //     <svg
      //       className="fill-current"
      //       width=""
      //       height=""
      //       viewBox="0 0 24 24"
      //       fill="none"
      //       xmlns="http://www.w3.org/2000/svg"
      //     >
      //       <path
      //         fillRule="evenodd"
      //         clipRule="evenodd"
      //         d="M18.2892 4.88976C17.2615 4.75159 15.9068 4.75 14 4.75L10 4.75C8.09318 4.75 6.73851 4.75159 5.71085 4.88976C4.70476 5.02503 4.12511 5.27869 3.7019 5.7019C3.27869 6.12511 3.02502 6.70476 2.88976 7.71085C2.75159 8.73851 2.75 10.0932 2.75 12C2.75 13.9068 2.75159 15.2615 2.88976 16.2892C3.02502 17.2952 3.27869 17.8749 3.7019 18.2981C4.12511 18.7213 4.70476 18.975 5.71085 19.1102C6.73851 19.2484 8.09318 19.25 10 19.25H14C15.9068 19.25 17.2615 19.2484 18.2892 19.1102C19.2952 18.975 19.8749 18.7213 20.2981 18.2981C20.7213 17.8749 20.975 17.2952 21.1102 16.2892C21.2484 15.2615 21.25 13.9068 21.25 12C21.25 10.0932 21.2484 8.73851 21.1102 7.71085C20.975 6.70476 20.7213 6.12511 20.2981 5.7019C19.8749 5.27869 19.2952 5.02502 18.2892 4.88976ZM18.489 3.40314C19.6614 3.56076 20.6104 3.89288 21.3588 4.64124C22.1071 5.38961 22.4392 6.33856 22.5969 7.51098C22.75 8.65019 22.75 10.1058 22.75 11.9436V12.0564C22.75 13.8942 22.75 15.3498 22.5969 16.489C22.4392 17.6614 22.1071 18.6104 21.3588 19.3588C20.6104 20.1071 19.6614 20.4392 18.489 20.5969C17.3498 20.75 15.8942 20.75 14.0564 20.75H9.94359C8.10583 20.75 6.65019 20.75 5.51098 20.5969C4.33856 20.4392 3.38961 20.1071 2.64124 19.3588C1.89288 18.6104 1.56076 17.6614 1.40314 16.489C1.24997 15.3498 1.24998 13.8942 1.25 12.0564V11.9436C1.24998 10.1058 1.24997 8.65019 1.40314 7.51098C1.56076 6.33856 1.89288 5.38961 2.64124 4.64124C3.38961 3.89288 4.33856 3.56076 5.51098 3.40314C6.65019 3.24997 8.10583 3.24998 9.94359 3.25L14.0564 3.25C15.8942 3.24998 17.3498 3.24997 18.489 3.40314ZM8.25 17C8.25 16.5858 8.58579 16.25 9 16.25H15C15.4142 16.25 15.75 16.5858 15.75 17C15.75 17.4142 15.4142 17.75 15 17.75H9C8.58579 17.75 8.25 17.4142 8.25 17Z"
      //         fill=""
      //       />
      //     </svg>
      //   ),
      //   label: "Tables",
      //   route: "#",
      //   children: [
      //     { label: "Tables", route: "/tables" },
      //   ],
      // },
      // {
      //   icon: (
      //     <svg
      //       className="fill-current"
      //       width=""
      //       height=""
      //       viewBox="0 0 24 24"
      //       fill="none"
      //       xmlns="http://www.w3.org/2000/svg"
      //     >
      //       <path
      //         fillRule="evenodd"
      //         clipRule="evenodd"
      //         d="M14.2544 1.36453C13.1584 1.05859 12.132 1.38932 11.4026 2.05955C10.6845 2.71939 10.25 3.70552 10.25 4.76063V11.4551C10.25 12.7226 11.2775 13.75 12.5449 13.75H19.2394C20.2945 13.75 21.2806 13.3156 21.9405 12.5974C22.6107 11.868 22.9414 10.8416 22.6355 9.74563C21.5034 5.69003 18.31 2.49663 14.2544 1.36453ZM11.75 4.76063C11.75 4.10931 12.0201 3.52918 12.4175 3.16407C12.8035 2.80935 13.3035 2.65643 13.8511 2.8093C17.4013 3.80031 20.1997 6.59875 21.1907 10.1489C21.3436 10.6965 21.1907 11.1965 20.8359 11.5825C20.4708 11.9799 19.8907 12.25 19.2394 12.25H12.5449C12.1059 12.25 11.75 11.8941 11.75 11.4551V4.76063Z"
      //         fill=""
      //       />
      //       <path
      //         d="M8.67232 4.71555C9.0675 4.59143 9.28724 4.17045 9.16312 3.77527C9.039 3.38009 8.61803 3.16036 8.22285 3.28447C4.18231 4.55353 1.25 8.32793 1.25 12.7892C1.25 18.2904 5.70962 22.75 11.2108 22.75C15.6721 22.75 19.4465 19.8177 20.7155 15.7772C20.8397 15.382 20.6199 14.961 20.2247 14.8369C19.8296 14.7128 19.4086 14.9325 19.2845 15.3277C18.2061 18.761 14.9982 21.25 11.2108 21.25C6.53805 21.25 2.75 17.462 2.75 12.7892C2.75 9.00185 5.23899 5.79389 8.67232 4.71555Z"
      //         fill=""
      //       />
      //     </svg>
      //   ),
      //   label: "Charts",
      //   route: "#",
      //   children: [
      //     { label: "Basic Chart", route: "/charts/basic-chart" },
      //   ],
      // },
      // {
      //   icon: (
      //     <svg
      //       className="fill-current"
      //       width=""
      //       height=""
      //       viewBox="0 0 24 24"
      //       fill="none"
      //       xmlns="http://www.w3.org/2000/svg"
      //     >
      //       <path
      //         fillRule="evenodd"
      //         clipRule="evenodd"
      //         d="M6.5 1.75C3.87665 1.75 1.75 3.87665 1.75 6.5C1.75 9.12335 3.87665 11.25 6.5 11.25C9.12335 11.25 11.25 9.12335 11.25 6.5C11.25 3.87665 9.12335 1.75 6.5 1.75ZM3.25 6.5C3.25 4.70507 4.70507 3.25 6.5 3.25C8.29493 3.25 9.75 4.70507 9.75 6.5C9.75 8.29493 8.29493 9.75 6.5 9.75C4.70507 9.75 3.25 8.29493 3.25 6.5Z"
      //         fill=""
      //       />
      //       <path
      //         fillRule="evenodd"
      //         clipRule="evenodd"
      //         d="M17.5 12.75C14.8766 12.75 12.75 14.8766 12.75 17.5C12.75 20.1234 14.8766 22.25 17.5 22.25C20.1234 22.25 22.25 20.1234 22.25 17.5C22.25 14.8766 20.1234 12.75 17.5 12.75ZM14.25 17.5C14.25 15.7051 15.7051 14.25 17.5 14.25C19.2949 14.25 20.75 15.7051 20.75 17.5C20.75 19.2949 19.2949 20.75 17.5 20.75C15.7051 20.75 14.25 19.2949 14.25 17.5Z"
      //         fill=""
      //       />
      //       <path
      //         fillRule="evenodd"
      //         clipRule="evenodd"
      //         d="M12.75 6.5C12.75 3.87665 14.8766 1.75 17.5 1.75C20.1234 1.75 22.25 3.87665 22.25 6.5C22.25 9.12335 20.1234 11.25 17.5 11.25C14.8766 11.25 12.75 9.12335 12.75 6.5ZM17.5 3.25C15.7051 3.25 14.25 4.70507 14.25 6.5C14.25 8.29493 15.7051 9.75 17.5 9.75C19.2949 9.75 20.75 8.29493 20.75 6.5C20.75 4.70507 19.2949 3.25 17.5 3.25Z"
      //         fill=""
      //       />
      //       <path
      //         fillRule="evenodd"
      //         clipRule="evenodd"
      //         d="M6.5 12.75C3.87665 12.75 1.75 14.8766 1.75 17.5C1.75 20.1234 3.87665 22.25 6.5 22.25C9.12335 22.25 11.25 20.1234 11.25 17.5C11.25 14.8766 9.12335 12.75 6.5 12.75ZM3.25 17.5C3.25 15.7051 4.70507 14.25 6.5 14.25C8.29493 14.25 9.75 15.7051 9.75 17.5C9.75 19.2949 8.29493 20.75 6.5 20.75C4.70507 20.75 3.25 19.2949 3.25 17.5Z"
      //         fill=""
      //       />
      //     </svg>
      //   ),
      //   label: "UI Elements",
      //   route: "#",
      //   children: [
      //     { label: "Alerts", route: "/ui-elements/alerts" },
      //     { label: "Buttons", route: "/ui-elements/buttons" },
      //   ],
      // },
      {
        icon: (
          <svg
            className="fill-current"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 6.1875C7.4467 6.1875 6.1875 7.4467 6.1875 9C6.1875 10.5533 7.4467 11.8125 9 11.8125C10.5533 11.8125 11.8125 10.5533 11.8125 9C11.8125 7.4467 10.5533 6.1875 9 6.1875ZM7.3125 9C7.3125 8.06802 8.06802 7.3125 9 7.3125C9.93198 7.3125 10.6875 8.06802 10.6875 9C10.6875 9.93198 9.93198 10.6875 9 10.6875C8.06802 10.6875 7.3125 9.93198 7.3125 9Z"
              fill=""
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.98106 0.9375C8.64771 0.937495 8.36943 0.93749 8.14097 0.953078C7.90315 0.969304 7.6785 1.00429 7.46071 1.0945C6.95534 1.30383 6.55382 1.70535 6.34449 2.21072C6.23551 2.47381 6.206 2.75109 6.19473 3.05247C6.18567 3.29474 6.0634 3.49688 5.88296 3.60106C5.70253 3.70523 5.46634 3.71005 5.252 3.59676C4.98535 3.45583 4.73046 3.34275 4.44812 3.30557C3.9058 3.23418 3.35732 3.38114 2.92334 3.71414C2.73632 3.85765 2.5937 4.0347 2.46074 4.23255C2.33301 4.42261 2.19387 4.66361 2.02721 4.9523L2.00826 4.98511C1.84159 5.27379 1.70245 5.51478 1.60172 5.72042C1.49686 5.9345 1.41483 6.14654 1.38406 6.38026C1.31266 6.92259 1.45963 7.47107 1.79262 7.90504C1.96596 8.13094 2.1913 8.29512 2.44663 8.45555C2.65196 8.58457 2.76591 8.79158 2.7659 8.99999C2.76589 9.20837 2.65194 9.41535 2.44663 9.54435C2.19127 9.7048 1.9659 9.86899 1.79255 10.0949C1.45955 10.5289 1.31259 11.0774 1.38399 11.6197C1.41476 11.8534 1.49678 12.0654 1.60164 12.2795C1.70237 12.4852 1.84151 12.7262 2.00818 13.0148L2.02713 13.0476C2.1938 13.3363 2.33294 13.5773 2.46067 13.7674C2.59363 13.9652 2.73625 14.1423 2.92327 14.2858C3.35724 14.6188 3.90572 14.7658 4.44805 14.6944C4.73038 14.6572 4.98525 14.5441 5.25188 14.4032C5.46625 14.2899 5.70247 14.2947 5.88293 14.3989C6.06339 14.5031 6.18567 14.7053 6.19473 14.9476C6.206 15.2489 6.23552 15.5262 6.34449 15.7893C6.55382 16.2947 6.95534 16.6962 7.46071 16.9055C7.6785 16.9957 7.90315 17.0307 8.14097 17.0469C8.36943 17.0625 8.64771 17.0625 8.98105 17.0625H9.01894C9.35228 17.0625 9.63056 17.0625 9.85902 17.0469C10.0968 17.0307 10.3215 16.9957 10.5393 16.9055C11.0446 16.6962 11.4462 16.2947 11.6555 15.7893C11.7645 15.5262 11.794 15.2489 11.8053 14.9475C11.8143 14.7052 11.9366 14.5031 12.117 14.3989C12.2975 14.2947 12.5337 14.2899 12.7481 14.4032C13.0147 14.5441 13.2695 14.6572 13.5519 14.6943C14.0942 14.7657 14.6427 14.6188 15.0766 14.2858C15.2637 14.1423 15.4063 13.9652 15.5392 13.7673C15.667 13.5773 15.8061 13.3363 15.9728 13.0476L15.9917 13.0148C16.1584 12.7262 16.2975 12.4851 16.3983 12.2795C16.5031 12.0654 16.5852 11.8534 16.6159 11.6196C16.6873 11.0773 16.5404 10.5288 16.2074 10.0949C16.034 9.86895 15.8087 9.70476 15.5533 9.54431C15.348 9.41532 15.2341 9.20834 15.2341 8.99996C15.2341 8.79161 15.348 8.58466 15.5533 8.45568C15.8087 8.29522 16.0341 8.13102 16.2074 7.90509C16.5404 7.47112 16.6874 6.92264 16.616 6.38031C16.5852 6.14659 16.5032 5.93455 16.3983 5.72048C16.2976 5.51484 16.1585 5.27387 15.9918 4.98522L15.9729 4.95238C15.8062 4.66369 15.6671 4.42266 15.5393 4.2326C15.4064 4.03475 15.2637 3.8577 15.0767 3.71419C14.6427 3.38119 14.0943 3.23423 13.5519 3.30563C13.2696 3.3428 13.0147 3.45586 12.7481 3.59679C12.5337 3.71009 12.2975 3.70527 12.1171 3.60108C11.9366 3.49689 11.8143 3.29473 11.8053 3.05243C11.794 2.75106 11.7645 2.4738 11.6555 2.21072C11.4462 1.70535 11.0446 1.30383 10.5393 1.0945C10.3215 1.00429 10.0968 0.969304 9.85902 0.953078C9.63056 0.93749 9.35228 0.937495 9.01893 0.9375H8.98106ZM7.89123 2.13386C7.94909 2.10989 8.037 2.08779 8.21755 2.07547C8.40315 2.06281 8.64284 2.0625 8.99999 2.0625C9.35715 2.0625 9.59684 2.06281 9.78244 2.07547C9.96298 2.08779 10.0509 2.10989 10.1088 2.13386C10.3385 2.22901 10.521 2.41152 10.6161 2.64123C10.6461 2.71369 10.671 2.82665 10.681 3.09448C10.7033 3.68876 11.01 4.26097 11.5546 4.57536C12.0991 4.88976 12.748 4.8693 13.2738 4.59141C13.5108 4.46617 13.621 4.43124 13.6988 4.421C13.9453 4.38855 14.1946 4.45535 14.3919 4.60671C14.4415 4.64484 14.5047 4.70992 14.6056 4.86012C14.7094 5.01452 14.8295 5.22195 15.008 5.53125C15.1866 5.84055 15.3062 6.04829 15.388 6.21535C15.4676 6.37787 15.4925 6.46505 15.5006 6.52715C15.5331 6.77366 15.4663 7.02297 15.3149 7.22023C15.2672 7.28246 15.1818 7.3605 14.9548 7.5031C14.4513 7.81947 14.1091 8.37116 14.1091 8.9999C14.1091 9.62871 14.4512 10.1805 14.9548 10.4969C15.1817 10.6395 15.2671 10.7175 15.3148 10.7797C15.4662 10.977 15.533 11.2263 15.5006 11.4728C15.4924 11.5349 15.4676 11.6221 15.388 11.7846C15.3061 11.9517 15.1865 12.1594 15.008 12.4687C14.8294 12.778 14.7093 12.9854 14.6055 13.1398C14.5046 13.29 14.4415 13.3551 14.3918 13.3932C14.1945 13.5446 13.9452 13.6114 13.6987 13.5789C13.6209 13.5687 13.5107 13.5338 13.2738 13.4086C12.748 13.1307 12.099 13.1102 11.5545 13.4247C11.01 13.7391 10.7033 14.3112 10.681 14.9055C10.671 15.1733 10.6461 15.2863 10.6161 15.3588C10.521 15.5885 10.3385 15.771 10.1088 15.8661C10.0509 15.8901 9.96298 15.9122 9.78244 15.9245C9.59684 15.9372 9.35715 15.9375 8.99999 15.9375C8.64284 15.9375 8.40315 15.9372 8.21755 15.9245C8.037 15.9122 7.94909 15.8901 7.89123 15.8661C7.66151 15.771 7.47901 15.5885 7.38386 15.3588C7.35384 15.2863 7.32896 15.1733 7.31895 14.9055C7.29672 14.3112 6.98998 13.739 6.44543 13.4246C5.90088 13.1102 5.25196 13.1307 4.72619 13.4086C4.48924 13.5338 4.37897 13.5688 4.30121 13.579C4.0547 13.6115 3.80539 13.5447 3.60813 13.3933C3.55844 13.3552 3.49534 13.2901 3.39439 13.1399C3.29063 12.9855 3.17052 12.7781 2.99194 12.4688C2.81337 12.1594 2.69378 11.9517 2.61195 11.7847C2.53235 11.6221 2.50754 11.5349 2.49936 11.4728C2.46691 11.2263 2.53371 10.977 2.68507 10.7798C2.73282 10.7175 2.81821 10.6395 3.04515 10.4969C3.54869 10.1805 3.89086 9.62882 3.8909 9.00005C3.89093 8.3712 3.54874 7.8194 3.04516 7.50299C2.81826 7.36042 2.73289 7.2824 2.68515 7.22018C2.53378 7.02292 2.46698 6.77361 2.49943 6.5271C2.50761 6.465 2.53242 6.37782 2.61202 6.2153C2.69386 6.04824 2.81344 5.8405 2.99202 5.5312C3.17059 5.2219 3.2907 5.01447 3.39447 4.86007C3.49541 4.70987 3.55851 4.64479 3.6082 4.60666C3.80546 4.4553 4.05477 4.3885 4.30128 4.42095C4.37905 4.43119 4.48932 4.46613 4.7263 4.59138C5.25205 4.86926 5.90093 4.88972 6.44546 4.57534C6.98999 4.26096 7.29672 3.68878 7.31894 3.09451C7.32896 2.82666 7.35384 2.7137 7.38386 2.64124C7.47901 2.41152 7.66151 2.22901 7.89123 2.13386Z"
              fill=""
            />
          </svg>
        ),
        label: "Configurações",
        route: "/settings",
      },
      {
        icon: (
          <svg
            className="fill-current"
            width=""
            height=""
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            
            <path
              d="M14.9453 1.25C13.5778 1.24998 12.4754 1.24996 11.6085 1.36652C10.7084 1.48754 9.95048 1.74643 9.34857 2.34835C8.82363 2.87328 8.55839 3.51836 8.41916 4.27635C8.28387 5.01291 8.25799 5.9143 8.25196 6.99583C8.24966 7.41003 8.58357 7.74768 8.99778 7.74999C9.41199 7.7523 9.74964 7.41838 9.75194 7.00418C9.75803 5.91068 9.78643 5.1356 9.89448 4.54735C9.99859 3.98054 10.1658 3.65246 10.4092 3.40901C10.686 3.13225 11.0746 2.9518 11.8083 2.85315C12.5637 2.75159 13.5648 2.75 15.0002 2.75H16.0002C17.4356 2.75 18.4367 2.75159 19.1921 2.85315C19.9259 2.9518 20.3144 3.13225 20.5912 3.40901C20.868 3.68577 21.0484 4.07435 21.1471 4.80812C21.2486 5.56347 21.2502 6.56459 21.2502 8V16C21.2502 17.4354 21.2486 18.4365 21.1471 19.1919C21.0484 19.9257 20.868 20.3142 20.5912 20.591C20.3144 20.8678 19.9259 21.0482 19.1921 21.1469C18.4367 21.2484 17.4356 21.25 16.0002 21.25H15.0002C13.5648 21.25 12.5637 21.2484 11.8083 21.1469C11.0746 21.0482 10.686 20.8678 10.4092 20.591C10.1658 20.3475 9.99859 20.0195 9.89448 19.4527C9.78643 18.8644 9.75803 18.0893 9.75194 16.9958C9.74964 16.5816 9.41199 16.2477 8.99778 16.25C8.58357 16.2523 8.24966 16.59 8.25196 17.0042C8.25799 18.0857 8.28387 18.9871 8.41916 19.7236C8.55839 20.4816 8.82363 21.1267 9.34857 21.6517C9.95048 22.2536 10.7084 22.5125 11.6085 22.6335C12.4754 22.75 13.5778 22.75 14.9453 22.75H16.0551C17.4227 22.75 18.525 22.75 19.392 22.6335C20.2921 22.5125 21.0499 22.2536 21.6519 21.6517C22.2538 21.0497 22.5127 20.2919 22.6337 19.3918C22.7503 18.5248 22.7502 17.4225 22.7502 16.0549V7.94513C22.7502 6.57754 22.7503 5.47522 22.6337 4.60825C22.5127 3.70814 22.2538 2.95027 21.6519 2.34835C21.0499 1.74643 20.2921 1.48754 19.392 1.36652C18.525 1.24996 17.4227 1.24998 16.0551 1.25H14.9453Z"
              fill=""
            />
            <path
              d="M2.00098 11.249C1.58676 11.249 1.25098 11.5848 1.25098 11.999C1.25098 12.4132 1.58676 12.749 2.00098 12.749L13.9735 12.749L12.0129 14.4296C11.6984 14.6991 11.662 15.1726 11.9315 15.4871C12.2011 15.8016 12.6746 15.838 12.9891 15.5685L16.4891 12.5685C16.6553 12.426 16.751 12.218 16.751 11.999C16.751 11.7801 16.6553 11.5721 16.4891 11.4296L12.9891 8.42958C12.6746 8.16002 12.2011 8.19644 11.9315 8.51093C11.662 8.82543 11.6984 9.2989 12.0129 9.56847L13.9735 11.249L2.00098 11.249Z"
              fill=""
            />
          </svg>
        ),
        label: "Sair",
        route: "#",
        // children: [
        //   { label: "Sign In", route: "/auth/signin" },
        // ],
      },
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    // <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        // style={{ width: sidebarOpen ? '33%' : ''}}
        className={`w-auto transition-width duration-700 ease-out flex h-screen flex-col overflow-y-hidden border-r border-stroke bg-white dark:border-stroke-dark dark:bg-gray-dark lg:static ${sidebarOpen && 'w-72.5'} `}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5 xl:py-10">
          <Link href="/">
            <Image
              width={176}
              height={32}
              src={"/images/logo/logo-dark.svg"}
              alt="Logo"
              priority
              className={`dark:hidden ${sidebarOpen ? "block" : "hidden"}`}
              style={{ width: "auto", height: "auto" }}
            />
            <Image
              width={176}
              height={32}
              src={"/images/logo/logo.svg"}
              alt="Logo"
              priority
              className={`hidden dark:${sidebarOpen ? "block" : "hidden"}`}
              style={{ width: "auto", height: "auto" }}
            />
            <Image
              width={176}
              height={32}
              src={"/images/logo/logo-icon.svg"}
              alt="Logo"
              priority
              className={`${sidebarOpen && "hidden"}`}
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-1 px-4 lg:px-6">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="mb-5 text-sm font-medium text-dark-4 dark:text-dark-6">
                  {group.name}
                </h3>

                <ul className="mb-6 flex flex-col gap-2">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                      sidebarOpen={sidebarOpen}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </aside>
    // </ClickOutside>
  );
};

export default Sidebar;
