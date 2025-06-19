import Image from "next/image";
import headerImg from "@/assets/images/header/imgHeader.png";

export default function MainHeader(){
    return (
      <header className="mainHeader">
        <div className="headerContainer flex-center grid lg:grid-cols-2 col-1 gap-20 mb-20 -mt-24">
          <section className="text-center">
            <h1 className="text-5xl/16 pb-7 font-[600]">
              Upravljajte Servisnim biznisom sa lakocom
            </h1>
            <p>
              Zakazujte termine, vodite evidenciju klijenata, i generisite
              ponude
            </p>
          </section>
          <section className="flex-center">
            <Image src={headerImg} alt="Dashboard image" />
          </section>
        </div>
      </header>
    );
}