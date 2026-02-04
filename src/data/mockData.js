export const drivers = [
  { id: "driver-1", name: "Chong, Felix" },
  { id: "driver-2", name: "AbuMallouh, Raed M" },
  { id: "driver-3", name: "Acevedo, Johanna" },
  { id: "driver-4", name: "Al Rawi, Rashid A" },
  { id: "driver-5", name: "Allen, Mary C" },
  { id: "driver-6", name: "Andujar C Amelia" },
  { id: "driver-7", name: "Annabi, Mohamed B" },
];

export const stops = [
  {
    id: "stop-1",
    address: "123 Maple St",
    time: "07:15 AM",
    coords: [47.6097, -122.3376],
    type: "pickup",
    students: [
      { name: "Alice Smith", note: "Car seat required", tone: "warning" },
    ],
  },
  {
    id: "stop-2",
    address: "456 Oak Ave",
    time: "07:22 AM",
    coords: [47.6076, -122.3325],
    type: "pickup",
    students: [
      { name: "Bob Jones" },
      { name: "Charlie Brown", note: "No-drop zone", tone: "warning" },
    ],
  },
  {
    id: "stop-3",
    address: "789 Pine Ln",
    time: "07:30 AM",
    coords: [47.6061, -122.3272],
    type: "pickup",
    students: [{ name: "Diana Prince" }],
  },
  {
    id: "stop-4",
    address: "321 Elm St",
    time: "07:38 AM",
    coords: [47.6041, -122.3225],
    type: "pickup",
    students: [
      { name: "Evan Wright", note: "Wheelchair access", tone: "warning" },
    ],
  },
  {
    id: "stop-5",
    address: "Lincoln Elementary School",
    time: "07:50 AM",
    coords: [47.6021, -122.3191],
    type: "dropoff",
    students: [],
  },
  {
    id: "stop-6",
    address: "98 Cedar St",
    time: "02:45 PM",
    coords: [47.6124, -122.3424],
    type: "pickup",
    students: [{ name: "Hannah Lee" }],
  },
  {
    id: "stop-7",
    address: "Washington High School",
    time: "03:05 PM",
    coords: [47.6151, -122.3467],
    type: "dropoff",
    students: [],
  },
];

export const routes = [
  {
    id: "route-101",
    name: "Route 101 - Morning",
    school: "Lincoln Elementary",
    duration: "45 min",
    driver: "Chong, Felix",
    stopIds: ["stop-1", "stop-2", "stop-3", "stop-4", "stop-5"],
  },
  {
    id: "route-202",
    name: "Route 202 - Afternoon",
    school: "Washington High",
    duration: "30 min",
    driver: "Chong, Felix",
    stopIds: ["stop-6", "stop-7"],
  },
];
