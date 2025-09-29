import { buildMatrix, monthLabel } from "../utils/date";

  export default function MiniCalendar({ date, onChange }) {
    const days = buildMatrix(date);
    const today = new Date();
  
    const go = (delta) => {
      const d = new Date(date);
      d.setMonth(d.getMonth() + delta);
      onChange(d);
    };
  
    const isSame = (a, b) =>
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate();
  
    return (
      <div className="mini">
        <div className="mini-header">
          <button className="nav small" onClick={() => go(-1)}>‹</button>
          <span>{monthLabel(date)}</span>
          <button className="nav small" onClick={() => go(1)}>›</button>
        </div>
        <div className="mini-weekdays">
          {["SUN","MON","TUE","WED","THU","FRI","SAT"].map((d) => <div key={d}>{d}</div>)}
        </div>
        <div className="mini-grid">
          {days.map((d) => {
            const inMonth = d.getMonth() === date.getMonth();
            const isToday = isSame(d, today);
            return (
              <button
                key={d.toISOString()}
                className={[
                  "mini-cell",
                  inMonth ? "" : "muted",
                  isToday ? "today" : "",
                ].join(" ").trim()}
                onClick={() => onChange(new Date(d))}
              >
                {d.getDate()}
              </button>
            );
          })}
        </div>
      </div>
    );
  }