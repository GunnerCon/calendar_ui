export const monthLabel = (d) =>
    d.toLocaleString("en-US", { month: "long", year: "numeric" });

// Format a Date as YYYY-MM-DD for easy equality checks
export function dateKey(d){
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
}

// Format time like 9:00 AM based on locale
export function formatTime(d){
    return d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
}


  
export function buildMatrix(date) {
    const first = new Date(date.getFullYear(), date.getMonth(), 1);
    const start = new Date(first);
    start.setDate(first.getDate() - first.getDay());
    const days = [];
    for (let i = 0; i < 42; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      days.push(d);
    }
    return days;
}

export function startOfMonth(d) {
    const v = new Date(d.getFullYear(), d.getMonth(), 1);
    const day = v.getDay();
    v.setDate(v.getDate() - day); // back to Sunday
    return v;
  }
  
export function isSameDay(a, b) {
    return a.getFullYear() === b.getFullYear() &&
           a.getMonth() === b.getMonth() &&
           a.getDate() === b.getDate();
  }