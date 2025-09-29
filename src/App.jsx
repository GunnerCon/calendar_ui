import { useState } from "react";
import Calendar from "./components/Calendar";
import MiniCalendar from "./components/MiniCalendar";
import Upcoming from "./components/Upcoming";
import "./styles.css";

export default function App(){
  const [current, setCurrent] = useState( new Date());
  const t = new Date();
  const ty = t.getFullYear();
  const tm = t.getMonth();
  const td = t.getDate();
  // demo events
  const events = [
    // Today
    { id: 1, type: 'appointment', title: 'Intro Call with Client', date: new Date(ty, tm, td), start: new Date(ty, tm, td, 9, 0), end: new Date(ty, tm, td, 9, 30) },
    { id: 2, type: 'event', title: 'Team Standup', date: new Date(ty, tm, td), start: new Date(ty, tm, td, 10, 0), end: new Date(ty, tm, td, 10, 15) },
    // Tomorrow
    { id: 3, type: 'appointment', title: 'Therapy Session', date: new Date(ty, tm, td + 1), start: new Date(ty, tm, td + 1, 14, 0), end: new Date(ty, tm, td + 1, 14, 45) },
    // Later this week
    { id: 4, type: 'event', title: 'Webinar: Coping with Stress', date: new Date(ty, tm, td + 2), start: new Date(ty, tm, td + 2, 11, 0), end: new Date(ty, tm, td + 2, 12, 0) },
    { id: 5, type: 'appointment', title: 'Follow-up Session', date: new Date(ty, tm, td + 3), start: new Date(ty, tm, td + 3, 16, 0), end: new Date(ty, tm, td + 3, 16, 30) },
    // Existing sample dates
    { id: 6, type: 'appointment', title: 'First Session with Alex Stan', date: new Date(2025, 8, 29), start: new Date(2025,8,29,9,0), end: new Date(2025,8,29,9,30) },
    { id: 7, type: 'event', title: 'Webinar: How to cope...', date: new Date(2025, 8, 30), start: new Date(2025,8,30,11,0), end: new Date(2025,8,30,12,0) },
    { id: 8, type: 'appointment', title: 'Chemistry Session', date: new Date(2025, 9, 2), start: new Date(2025,9,2,14,0), end: new Date(2025,9,2,15,0) },
  ];

  return (
    <div className="page">
      <aside className="sidebar">
        <MiniCalendar date={current} onChange={setCurrent} />
        <Upcoming events={events} date={current} />
      </aside>

      <main className="content">
        <Calendar date={current} onChange={setCurrent} events={events} />
      </main>
    </div>
  );
}