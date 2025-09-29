import { startOfMonth, isSameDay, dateKey } from "../utils/date";
 
export default function MonthGrid({ date, events = [] }) {
    const first = startOfMonth(date);
    const cells = [];
    const today = new Date();
  
    for (let i = 0; i < 42; i++) {
      const d = new Date(first);
      d.setDate(first.getDate() + i);
      const inMonth = d.getMonth() === date.getMonth();
      const weekend = d.getDay() === 0 || d.getDay() === 6;
      const isToday = isSameDay(d, today);
  
      const goToDummy = () => {
        window.location.href = "/dummy";
      };

      const items = events.filter(ev => dateKey(ev.date) === dateKey(d));
      const visible = items.slice(0, 2);
      const remaining = items.length - visible.length;

      cells.push(
        <div
          key={d.toISOString()}
          className={[
            "cell",
            inMonth ? "" : "muted",
            weekend ? "weekend" : "",
            isToday ? "today" : "",
          ].join(" ").trim()}
          role="button"
          tabIndex={0}
          onClick={goToDummy}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && goToDummy()}
        >
          <div className="date-dot">
            <span className="num">{d.getDate()}</span>
          </div>
  
          {/* compact pills như screenshot */}
          {inMonth && visible.map((ev, idx) => (
            <div key={ev.id} className={"pill " + (ev.type === 'event' ? 'pill-orange' : 'pill-blue')} style={{top: `${26 + idx * 30}px`}}>
              {ev.title}
              {ev.type === 'appointment' && (
                <span className="icon" aria-label="video meeting" title="Video meeting">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h7A2.5 2.5 0 0 1 15 7.5v9A2.5 2.5 0 0 1 12.5 19h-7A2.5 2.5 0 0 1 3 16.5v-9z"></path>
                    <path d="M16 9.5l4-2v9l-4-2v-5z"></path>
                  </svg>
                </span>
              )}
            </div>
          ))}
          {inMonth && remaining > 0 && (
            <div className="pill more" style={{top: `${26 + visible.length * 30}px`}}>+{remaining} more</div>
          )}
        </div>
      );
    }
  
    return <div className="grid">{cells}</div>;
  }