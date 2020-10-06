console.log("connected: book-a-field app.js");

// Park API Simulation

let parks = [
  {
    name: "Wakefield Park",
    city: "Annandale",
    state: "Virginia",
    county: "Fairfax",

    fields: {
      soccer: {
        purpose: "soccer",
        haslight: true,
        reserved: false,
        availableNow: true,
        reservation: {
          acceptReservation: true,
          fee: {
            hourly: 50,
            daily: 300
          }
        }

      },
      basketball: {
        purpose: "basketball",
        haslight: true,
        reserved: false,
        availableNow: true
      },
      tennis: {
        purpose: "tennis",
        haslight: true,
        reserved: false,
        availableNow: false
      }
    }
  },
  {
    name: "South Run Park",
    city: "Springfield  ",
    state: "Virginia",
    county: "Fairfax",

    fields: {
      soccer:
      {
        purpose: "soccer",
        haslight: true,
        reserved: false,
        availableNow: true,
        reservation: {
          acceptReservation: true,
          fee: {
            hourly: 50,
            daily: 300
          }
        }

      },
      basketball:
      {
        purpose: "basketball",
        haslight: true,
        reserved: false,
        availableNow: true
      },
      tennis:
      {
        purpose: "tennis",
        haslight: true,
        reserved: false,
        availableNow: false
      },
      pool:
      {
        purpose: "swimming pool",
        haslight: true,
        reserved: false,
        availableNow: true
      }
    }
  }
];