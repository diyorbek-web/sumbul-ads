import React, { useState } from "react";
import axios from "axios";
import { FaCheck } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa";
import "./Sent.css";

const SentNumber = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(""); // Error state
  const [success, setSuccess] = useState(false); // Success state
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validatsiyasi
    if (!name || !phone) {
      setError("Iltimos, barcha maydonlarni to'ldiring.");
      console.log("Form invalid"); // Debugging
      return;
    }
    setLoading(true);
    const token = "7409721677:AAFWLTjkNfRkNJ1ypwsP5DqXDjq88-hrsek";
    const chatId = "-1002151307536"; // Foydalanuvchi yoki guruh chat ID sini o'zgartiring
    const message = `Name: ${name}\nPhone: ${phone}`;

    try {
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatId,
        text: message,
      });

      // Formani tozalash va muvaffaqiyat holatini o‘rnatish
      setName("");
      setPhone("");
      setError(""); // Errorni tozalash
      setSuccess(true);
      setLoading(false);

      // Success holatini vaqtinchalik ko‘rsatish
      setTimeout(() => setSuccess(false), 3000); // 3 sekunddan so‘ng muvaffaqiyatni tozalash
    } catch (error) {
      console.error("Error sending message:", error);
      setError("Xatolik yuz berdi, xabar yuborilmadi.");
    }
  };

  return (
    <div className="">
      <div className="">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Ismingiz"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded-lg w-full max-w-xs"
            required
          />
          <input
            type="tel"
            placeholder="Telefon raqamingiz"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded-lg w-full max-w-xs"
            required
          />
          <button
            type="submit"
            className="bg-[#4DAA8A] text-[20px] text-white  px-8 py-2 rounded-lg shadow-md hover:bg-[#2F6E6C] relative"
            disabled={loading}
          >
            {loading ? (
              <FaSpinner className="animate-spin mr-2" />
            ) : success ? (
              <FaCheck className="mr-2" />
            ) : (
              "Yuborish"
            )}
          </button>
          {success && (
            <p className="text-[#4DAA8A] text-center mt-2">
              Yuborildi! <br /> Tez orada mutahasislarimiz aloqaga chiqishadi
            </p>
          )}
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default SentNumber;
