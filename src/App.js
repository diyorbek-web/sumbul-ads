import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet"; // Helmetni import qilish
import SentNumber from "./components/SentNumber";
import Description from "./components/Description";
import "./index.css";
import shifo from "./assets/shifo.JPG";

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
    <div className="min-h-screen bg-gray-100 py-8 px-4 flex flex-col items-center">
      <Helmet>
        <title>Yurak og'rig'i sababi nima?</title>
        <meta
          name="description"
          content="Yurak og'rig'i (angina) sabablari va ORGANIC Sumbul Shifo kompleksi haqida ma'lumot."
        />
        <meta name="keywords" content="yurak, og'riq, shifo, ORGANIC" />
        <meta name="author" content="Sizning Ismingiz" />
      </Helmet>
      <div className="max-w-3xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-[40px] font-bold text-[#4DAA8A] text-center">
          Yurak og'rig'i sababi nima?
        </h1>
        <p className="text-center text-[20px] text-black mt-4">
          Yurak og'rig'i (angina) ko'pincha yurak tomirlaridagi muammolar
          tufayli yuzaga keladi. Ushbu og'riq ko'pincha yurak mushagining
          kislorod yetishmasligi natijasida sodir bo'ladi. Yurak og'rig'ining
          asosiy sabablariga quyidagilar kiradi:
          <p className="mt-5 text-[18px]">
            <span className="font-medium">
              1. Koronariya arteriyalarining torayishi:
            </span>
            Yurakni oziqlantiruvchi arteriyalarning torayishi (ateroskleroz)
            ko'pincha yurak og'rig'iga sabab bo'ladi. Ushbu holat yurak
            mushagining zarur kislorodni olmasligiga olib keladi.
          </p>
          <p className="mt-5 text-[18px]">
            <span className="font-medium">2. Yurak mushagi kasalliklari:</span>
            Yurak mushagining yallig'lanishi, zararlanishi yoki boshqa
            kasalliklar ham yurak og'rig'ini keltirib chiqarishi mumkin.
          </p>
          <p className="mt-5 text-[18px]">
            <span className="font-medium">3. Yurak ritmi buzilishlari:</span>
            Yurak urishi yoki ritmi buzilganda, bu yurak og'rig'ini keltirib
            chiqarishi mumkin.
          </p>
          <p className="mt-5 text-[18px]">
            <span className="font-medium">4. Yurak qopqog'i kasalliklari:</span>
            Yurak qopqog'ining yallig'lanishi yoki zararlanishi ham yurak
            og'rig'iga olib kelishi mumkin.
          </p>
          <p className="mt-5 text-[18px]">
            <span className="font-medium">5. Stress va depressiya:</span>
            Stress, xavotir va depressiya yurakning faoliyatini va qon
            aylanishini ta'sir qiladi, bu ham yurak og'rig'iga olib kelishi
            mumkin.
          </p>
          <p className="mt-5 text-[18px]">
            <span className="font-medium">6. Jismoniy faoliyat:</span>
            Kuchli jismoniy faoliyat yoki kuchli stress holatlari yurak
            og'rig'ini keltirib chiqarishi mumkin.
          </p>
        </p>
        <p className="text-[30px] text-center font-bold text-[#4DAA8A]">
          Biz sizga ORGANIC Sumbul Shifo kompleksni taklif etamiz!
        </p>
        <div className="mt-8 flex justify-center">
          <img
            src={shifo}
            alt="Sumbul Shifosi"
            className="rounded-lg shadow-md"
          />
        </div>

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
        <p className="text-[24px] p-10 text-center text-[#4DAA8A] font-bold">
          Malakali shifokorlarimizdan mutlaqo <br />
          <span className="text-red-700">BEPUL</span> konsultatsiya oling
        </p>
        <SentNumber />
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <a href="tel:+998781136201">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all">
              📞 Bizga Qo‘ng‘iroq Qiling
            </button>
          </a>
        </div>
        <Description />
      </div>
    </div>
  );
}

export default App;
