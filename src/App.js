import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Main from "./pages/Home/Main";
import Menu from "./pages/Menu/Menu";
import BookingPage from "./pages/Reservations/BookingPage";
import ConfirmedBooking from "./pages/Reservations/ConfirmedBooking";
import Footer from "./components/Footer";

// AppContentコンポーネントを作成
function AppContent() {
  const navigate = useNavigate();
  const [availableTimes] = React.useState([
    "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
  ]);

  const updateTimes = (date) => {
    console.log("Selected date:", date);
  };

  const submitForm = (formData) => {
    // フォームデータを送信するロジックをここに実装
    console.log("Form submitted:", formData);
    // 予約完了画面へ遷移
    navigate('/confirmed-booking');
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              updateTimes={updateTimes}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

// メインのAppコンポーネント
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;