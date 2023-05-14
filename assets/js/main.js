var totalRevenue = 0;

function calculate() {
  // Dein Code hier ↓
  // ↑
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].year);

    for (let j = 0; j < data[i].revenue.length; j++) {
      totalRevenue += data[i].revenue[j].revenue;
      console.log(totalRevenue);
    }
  }
  console.log(`Der Gesamtbetrag der Quartale beträgt ${totalRevenue}`);
}

// Sample Data
var data = [
  {
    year: 2010,
    revenue: [
      {
        month: "Q1",
        revenue: 21500,
      },
      {
        month: "Q2",
        revenue: 27300,
      },
      {
        month: "Q3",
        revenue: 24800,
      },
      {
        month: "Q4",
        revenue: 28900,
      },
    ],
  },
  {
    year: 2011,
    revenue: [
      {
        month: "Q1",
        revenue: 26400,
      },
      {
        month: "Q2",
        revenue: 30300,
      },
      {
        month: "Q3",
        revenue: 26200,
      },
      {
        month: "Q4",
        revenue: 29100,
      },
    ],
  },
  {
    year: 2012,
    revenue: [
      {
        month: "Q1",
        revenue: 31200,
      },
      {
        month: "Q2",
        revenue: 29400,
      },
      {
        month: "Q3",
        revenue: 34600,
      },
      {
        month: "Q4",
        revenue: 37200,
      },
    ],
  },
];
