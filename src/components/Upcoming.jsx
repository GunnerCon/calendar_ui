import { formatTime } from "../utils/date";

export default function Upcoming({ events = [], date }) {
    const todayKey = (d) => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    const key = todayKey(date || new Date());
    const todays = events.filter(e => todayKey(e.date) === key);

    const formatDate = (d) => {
        return d.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };

    return (
      <div className="upcoming">
        <div className="upcoming-header">
          <h3>Upcoming Events</h3>
          <button className="btn small">View All</button>
        </div>
        
        <div className="today-date">{formatDate(date || new Date())}</div>

        {todays.length === 0 && <div className="card"><div className="card-title">No events today</div></div>}

        {todays.map(ev => (
          <div key={ev.id} className={`card ${ev.type === 'event' ? 'card-orange' : 'card-blue'}`}>
            {ev.type === 'appointment' && (
              <div className="meet-badge" aria-hidden="true" title="Video meeting">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h7A2.5 2.5 0 0 1 15 7.5v9A2.5 2.5 0 0 1 12.5 19h-7A2.5 2.5 0 0 1 3 16.5v-9z"></path><path d="M16 9.5l4-2v9l-4-2v-5z"></path></svg>
              </div>
            )}
            <div className="card-title">{ev.title}</div>
            <div className="card-time">{formatTime(ev.start)} — {formatTime(ev.end)} GMT+8</div>
            {ev.type === 'appointment' && <a className="card-link" href="#">View Client Profile</a>}
          </div>
        ))}
      </div>
    );
  }