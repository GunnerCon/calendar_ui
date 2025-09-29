import MonthGrid from "./MonthGrid";

const monthLabel = (date) => 
    date.toLocaleString("en-US", { month: "long", year: "numeric" });

export default function Calendar({date, onChange, events = []}) {
    const go = (delta) => {
        const d = new Date(date);
        d.setMonth(d.getMonth() + delta);
        onChange(d);
    };

    const today = () => onChange(new Date());

    return (
        <div className="calendar">
          <div className="cal-header">
            <button className="btn" onClick={today}>Today</button>
            <div className="title">
              <button className="nav" onClick={() => go(-1)}>‹</button>
              <span>{monthLabel(date)}</span>
              <button className="nav" onClick={() => go(1)}>›</button>
            </div>
            <div>
              <button className="btn outline">Month ▾</button>
            </div>
          </div>
    
          <div className="weekdays">
            {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>
    
          <MonthGrid date={date} events={events} />
        </div>
      );
}
