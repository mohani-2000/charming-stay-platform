import { useState } from "react";
import { CalendarDays, Users, MapPin } from "lucide-react";

const LOCATIONS = [
  "All Locations",
  "Arusha",
  "Tarangire",
  "Ngorongoro",
  "Serengeti",
  "Zanzibar",
];

const BookingBar = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [guests, setGuests] = useState("2");

  const handleBook = () => {
    const phone = "255123456789";
    const message = `Hello Amani Collection! I'd like to book:\n📍 ${location}\n📅 Check-in: ${checkIn || "TBD"}\n📅 Check-out: ${checkOut || "TBD"}\n👥 Guests: ${guests}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="relative z-20 -mt-20">
      <div className="container mx-auto px-6">
        <div className="bg-card border border-border p-6 md:p-8 flex flex-col md:flex-row gap-4 md:gap-6 items-end">
          <div className="flex-1 w-full">
            <label className="font-body text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2 block">
              Check-in
            </label>
            <div className="relative">
              <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-secondary text-foreground pl-10 pr-4 py-3 text-sm font-body border-none outline-none"
              />
            </div>
          </div>
          <div className="flex-1 w-full">
            <label className="font-body text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2 block">
              Check-out
            </label>
            <div className="relative">
              <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-secondary text-foreground pl-10 pr-4 py-3 text-sm font-body border-none outline-none"
              />
            </div>
          </div>
          <div className="flex-1 w-full">
            <label className="font-body text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2 block">
              Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-secondary text-foreground pl-10 pr-4 py-3 text-sm font-body border-none outline-none appearance-none cursor-pointer"
              >
                {LOCATIONS.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex-1 w-full">
            <label className="font-body text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2 block">
              Guests
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-secondary text-foreground pl-10 pr-4 py-3 text-sm font-body border-none outline-none appearance-none cursor-pointer"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                ))}
              </select>
            </div>
          </div>
          <button
            onClick={handleBook}
            className="w-full md:w-auto bg-primary text-primary-foreground font-body text-xs tracking-[0.25em] uppercase px-10 py-4 hover:opacity-90 transition-opacity"
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookingBar;
