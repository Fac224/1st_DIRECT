import { Link } from "react-router-dom";

const routeStops = [
  {
    title: "1) Pearls Hawthorne School",
    subtitle: "350 Hawthorne Ave, Yonkers, NY 10705",
    students: [],
  },
  {
    title: "2) McLean Ave & Lee Ave (W)",
    subtitle: "",
    students: [
      { name: "Juniper Borba", phone: "(646) 770-6859" },
      { name: "Oliver Borba", phone: "(203) 536-8515" },
      { name: "Muhammad Mirza", phone: "(917) 703-5351" },
      { name: "Gabriella Pacanowski", phone: "(914) 378-0101" },
      { name: "Andraa Zatriqi", phone: "(973) 462-7524" },
    ],
  },
  {
    title: "3) McLean Ave & Agawam N (W)",
    subtitle: "",
    students: [
      { name: "Rayan Alshararbeh", phone: "(347) 912-5358" },
      { name: "Lucia Brennan", phone: "(914) 886-5290" },
      { name: "Molly Burke", phone: "(914) 656-0957" },
      { name: "Michelangelo Lufaj", phone: "(914) 484-8754" },
      { name: "Emarie Mena", phone: "(917) 250-4308" },
      { name: "Aoife Mulligan", phone: "(914) 623-7471" },
      { name: "Hiba Ranginwala", phone: "(914) 207-6843" },
      { name: "Rovelyn Villa", phone: "(646) 785-7012" },
    ],
  },
  {
    title: "4) McLean Ave & Aqueduct Ave (NW)",
    subtitle: "",
    students: [
      { name: "Grace Leathem", phone: "(914) 473-0920" },
      { name: "Mia Somera", phone: "(956) 984-8705" },
    ],
  },
  {
    title: "5) McLean Ave & Kimball Ave (W)",
    subtitle: "",
    students: [
      { name: "Max Borisov", phone: "(917) 660-8360" },
      { name: "Sofia Borisov", phone: "(917) 660-8360" },
      { name: "Laragh McIntyre", phone: "(732) 991-7368" },
      { name: "Lilleigh McIntyre", phone: "(732) 991-7368" },
    ],
  },
  {
    title: "6) Scott Ave & Bronx River Rd (NW)",
    subtitle: "",
    students: [
      { name: "Marah Abdallah", phone: "(718) 483-0612" },
      { name: "Riteal Darwish", phone: "(914) 314-5908" },
      { name: "Matt Gojani", phone: "(917) 684-6327" },
      { name: "Julian Jaramillo", phone: "(917) 403-2663" },
      { name: "Luke Jaramillo", phone: "(917) 403-2663" },
      { name: "Finn Murray", phone: "(646) 320-4135" },
      { name: "Jeremiah Ramirez", phone: "(718) 753-2560" },
      { name: "Francis Rubbo", phone: "(914) 774-9413" },
      { name: "Rea Rugova", phone: "(646) 891-6121" },
      { name: "Emma Sarker", phone: "(347) 397-5903" },
      { name: "Emory Sloan", phone: "(917) 533-3736" },
    ],
  },
  {
    title: "7) Bronx River Rd & Glen Rd (S)",
    subtitle: "",
    students: [
      { name: "Laurelai Allman", phone: "(347) 259-5517" },
      { name: "Xander Hurts", phone: "(917) 449-6746" },
      { name: "Kali Marriot", phone: "(914) 261-0495" },
      { name: "Cameron Murphy", phone: "(917) 582-4340" },
      { name: "Logan Murphy", phone: "(917) 582-4340" },
    ],
  },
  {
    title: "8) Bronx River Rd & Raybrook Rd (S)",
    subtitle: "",
    students: [
      { name: "Culan Chambers", phone: "(914) 433-9704" },
      { name: "Sanari Gilles", phone: "(917) 575-8373" },
      { name: "Advaith Gurralamitta Ganesh", phone: "(718) 594-3629" },
      { name: "Anvith Gurralamitta Ganesh", phone: "(718) 594-3629" },
      { name: "Mateo Olavarria", phone: "(978) 943-8461" },
      { name: "Noa Olavarria", phone: "(978) 943-8461" },
      { name: "Brielle Robinson", phone: "(914) 434-8045" },
      { name: "Lowell Robinson Jr.", phone: "(914) 434-8045" },
    ],
  },
];

function DirectAfternoon() {
  return (
    <div className="direct-trip">
      <header className="direct-trip-header">
        <div className="direct-trip-left">
          <Link className="direct-trip-back" to="/direct">
            ←
          </Link>
          <div className="direct-trip-bus">
            <span>Route</span>
            <strong>6070</strong>
          </div>
          <div>
            <div className="direct-trip-time">2:10 PM</div>
            <div className="direct-trip-date">
              <span className="pill">Mon</span>
              <span>16 Feb 2026</span>
            </div>
          </div>
        </div>
        <div className="direct-trip-right">
          <div className="direct-trip-search">🔍</div>
          <div className="direct-trip-count">0/3</div>
        </div>
      </header>

      <div className="direct-trip-actions">
        <button className="direct-trip-mark" type="button">
          Mark All
        </button>
      </div>

      <div className="direct-trip-list">
        {routeStops.map((stop) => (
          <div className="direct-trip-card" key={stop.title}>
            <div className="direct-trip-card-header">
              {stop.title}
              {stop.subtitle ? (
                <span className="direct-trip-sub">{stop.subtitle}</span>
              ) : null}
            </div>
            <div className="direct-trip-card-body">
              {stop.students.length ? (
                stop.students.map((student) => (
                  <div className="direct-trip-student" key={student.name}>
                    <div>
                      <div className="direct-trip-name">{student.name}</div>
                      <div className="direct-trip-phone">
                        {student.phone} 📞
                      </div>
                    </div>
                    <div className="direct-trip-box" />
                  </div>
                ))
              ) : (
                <div className="direct-trip-empty">No students listed</div>
              )}
            </div>
          </div>
        ))}
      </div>

      <Link className="direct-trip-start" to="/direct-driver">
        Start Trip
      </Link>
    </div>
  );
}

export default DirectAfternoon;
