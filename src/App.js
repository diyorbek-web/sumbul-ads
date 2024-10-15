import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet"; // Helmetni import qilish
import SentNumber from "./components/SentNumber";
import "./index.css";
import qon from "./assets/qonbosimi.jpg";
import sumbul from "./assets/sumbul.jpg";

function App() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const countDownDate = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 soat
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft("Muddati tugadi");
      } else {
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft(`${hours} soat ${minutes} daqiqa ${seconds} soniya`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-4 px-4 flex flex-col items-center">
      <Helmet>
        <html lang="uz" />
        <title>Insult, Infarkt</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Yurak og'rig'i (angina) sabablari va ORGANIC Sumbul Shifo kompleksi haqida ma'lumot."
        />
        <meta name="keywords" content="yurak, og'riq, shifo, ORGANIC" />
        <meta name="author" content="Sizning Ismingiz" />
      </Helmet>

      <div className="max-w-3xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-[30px] font-bold  text-center">
          Hayotning So'nggi Chegarasidan Qaytish
        </h1>
        <p className="text-center mt-5 font-normal">
          Ahmad aka uzoq yillar davomida o‘zini charchoq va og‘riqlardan azob
          chekib kelayotganini hech kimga aytmas edi. Har tong u uchun yangi bir
          kurash edi. Bir kuni, Ahmad aka o‘zini ertalab qo‘zg‘atishga kuch topa
          olmay qoldi. Oilasi unga qarab, uning har kuni tobora charchab
          borayotganini sezsada, u buni tan olmasdi.
        </p>
        <p className="font-normal  text-center mt-5">
          Og‘ir nafas olgancha uyqudan uyg‘onish, yurakni ezib kelayotgan
          og‘riqlar, tinmay charchayotgan vujudi uni asta-sekin kuchsizlantirib
          borardi. Shifokorlarga borib, ko‘plab dorilar qabul qilishiga qaramay,
          u o‘zini tetik his qilmasdi. Har bir dori ichganida, u o‘zini biroz
          yaxshi his qilardi, ammo bu vaqtinchalik edi.
        </p>
        <p className="font-normal text-center mt-5">
          Bir kuni u og‘ir holatga tushdi. Qon bosimi keskin ko‘tarildi va qonga
          zararli moddalarning yig‘ilib qolishi sababli yuragi to‘xtab qolish
          xavfi paydo bo‘ldi. Shu paytda uning oilasi o‘ziga boshqa yordam
          topishga kirishdi. Qizi unga bir necha oylardan beri eshitib kelgan
          Sumbul Shifo haqida gapirib berdi. Avvaliga u bunga ishonmadi, "oddiy
          o‘t-o‘lan qanday qilib meni sog‘lom qila oladi?" deb o‘ylardi. Ammo
          boshqa hech qanday imkon qolmagach, u bunga sinab ko‘rishga qaror
          qildi.
        </p>

        <div className="mt-8 flex justify-center">
          <img
            src={qon}
            alt="Sumbul Shifosi"
            className="rounded-lg shadow-md"
          />
        </div>
        <p className="font-normal text-center mt-5">
          Bir necha hafta o‘tgach, Ahmad aka o‘zini yana boshqacha his eta
          boshladi. Yuragidagi og‘riqlar kamaydi, tanasidagi og‘riqlar
          sekin-asta yo‘qoldi, va u ko‘p yillik charchoqlardan qutuldi. Endi u
          o‘z oilasi bilan ertalabdan tetik holda uyg‘onib, shijoat bilan yangi
          kunni boshlashga tayyor edi. O‘sha paytdagi xastaligi va og‘riqlari
          xuddi yomon tush kabi ortda qoldi.
        </p>
        <p className="text-center font-normal mt-5">
          Ahmad aka Sumbul Shifo tufayli o‘z hayotini qayta tikladi va o‘z
          do‘stlariga ham shu mahsulotni tavsiya qila boshladi.
        </p>
        <p className="font-bold text-center text-[30px] mt-5">
          Dunyo bo'yicha qo'rqinchli statistikalar
        </p>
        <ul className="mt-5">
          <li className="text-center">
            <span className="font-bold">Yurak kasalliklari:</span> Har yili 17.9
            million odam yurak kasalliklaridan vafot etadi, bu barcha
            o‘limlarning 31% ni tashkil etadi.
          </li>
          <li className="text-center">
            <span className="font-bold">Diabed:</span> Dunyo bo‘yicha 463
            million odam diabetdan azob chekadi va bu raqam 2045 yilga kelib 700
            millionga yetishi mumkin.
          </li>
          <li className="text-center">
            <span className="font-bold">Onkologiya:</span>Har yili 10 milliondan
            ortiq odam onkologik kasalliklardan vafot etadi. Bu raqam har yili
            oshib bormoqda.
          </li>
          <li className="text-center">
            <span className="font-bold">Depressiya:</span> Har yili 280 million
            odam depressiya bilan kurashadi, va bu ruhiy salomatlik bo‘yicha eng
            keng tarqalgan muammolardan biridir.
          </li>
        </ul>
        <p className="text-[24px] p-10 text-center text-[#4DAA8A] font-bold">
          Malakali shifokorlarimizdan mutlaqo <br />
          <span className="text-red-700">BEPUL</span> konsultatsiya oling
        </p>
        <SentNumber />
        <p className="text-center text-[30px] font-bold mt-5">
          Sumbul Shifo Haqida Ma'lumot
        </p>

        <p className="text-center font-normal">
          Sumbul Shifo - bu kuchli terapevtik xususiyatlarga ega bo‘lgan tabiiy
          o‘simlikdir. U bir qancha salomatlik foydalari bilan mashhur:
        </p>
        <div className="mt-8 flex justify-center">
          <img
            src={sumbul}
            alt="Sumbul Shifosi"
            className="rounded-lg shadow-md"
          />
        </div>

        <ul>
          <li className="text-center mt-3">
            <span className="font-bold">Quvvatni oshiradi: </span>Tanani
            energiya bilan to‘ldiradi va charchoqni kamaytiradi.
          </li>
          <li className="text-center mt-3">
            <span className="font-bold">Antioxidant:</span>Erkin radikallarga
            qarshi kurashadi va yoshlanish jarayonini sekinlashtiradi.
          </li>
          <li className="text-center mt-3">
            <span className="font-bold">Sedativ:</span>Tinchlantiruvchi va
            stressni kamaytiruvchi ta’sirga ega.
          </li>
          <li className="text-center mt-3">
            <span className="font-bold">Yallig‘lanishga qarshi:</span>
            Yallig‘lanishlarni kamaytiradi va tahlil qilish jarayonlarini
            yaxshilaydi.
          </li>
          <li className="text-center mt-3">
            <span className="font-bold">Spazmolitik:</span>Og‘riqlarni
            kamaytiradi va mushaklarni yumshatadi.
          </li>
          <li className="text-center mt-3">
            <span className="font-bold">Bakteriyalarga qarshi: </span>
            Bakteriyalarga qarshi kurashadi va infeksiyalarni oldini oladi.
          </li>
          <li className="text-center mt-3">
            <span className="font-bold">Immun tizimni mustahkamlaydi:</span>
            Immun tizimni kuchaytiradi va kasalliklardan himoya qiladi.
          </li>
          <li className="text-center mt-3">
            <span className="font-bold">
              Hujayra tiklanishini tezlashtiradi:
            </span>
            Yara va hujayralarning tiklanishini yaxshilaydi.
          </li>
          <li className="text-center mt-3">
            <span className="font-bold">Metabolizmni me’yorga soladi:</span>
            Metabolizmni optimallashtiradi va ortiqcha yog'larni kamaytiradi.
          </li>
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold">Foydali Xususiyatlar</h3>
            <p className="text-gray-600">
              Sumbul shifosi yurak sog'ligini qo'llab-quvvatlaydi, qon
              aylanishini yaxshilaydi va stressni kamaytirishga yordam beradi.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold">ORGANIC Ingredientlar</h3>
            <p className="text-gray-600">
              ORGANIC ingredientlardan tayyorlangan, kimyoviy qo'shimchalarsiz.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold">Sertifikatlangan Mahsulot</h3>
            <p className="text-gray-600">
              Mutaxassislar tomonidan tasdiqlangan va tavsiya etilgan.
            </p>
          </div>
        </div>
        <div className="bg-red-100 text-red-600 p-4 rounded-lg text-center mt-6">
          ⏳ Chegirmani qo‘lga kiriting! Taklif tugashiga {timeLeft} qoldi.
        </div>
        <p className="text-[24px] p-10 text-[#4DAA8A] text-center font-bold">
          Sizga mahsulotimiz sizga qiziq bo'lsa raqamingizni qoldiring <br />
        </p>
        <SentNumber />
        <p className="text-[24px] mt-5 text-center font-bold">
          O'zbekiston bo'ylab <span className="text-red-700">1 kun</span> ichida
          mutlaqo <span className="text-red-700">BEPUL</span> yetkazib beramiz
        </p>
      </div>
    </div>
  );
}

export default App;
