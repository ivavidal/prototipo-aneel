import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/img/logo.png";

export default function Header() {
  return (
    <>
      <header className="headerTollbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link href='/'>
              <a className="navbar-brand">
                <Image
                  src={Logo}
                  alt="logo"
                  width={400}
                  height={90}
                />
              </a>
            </Link>
          </div>
          <div className="container-fluid">
            <div className="justify-content-center" id="navbarNavAltMarkup">
              <div className="toolbarTitle">
                <span>COAUT - SERVIÇO DE OUTORGA</span>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
