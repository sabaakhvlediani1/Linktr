export const fetchData = async () => {
  try {
    const response = await fetch(
      "https://testing.api.addme.ge/api/card/getcard/Guro",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchQRs = async () => {
  try {
    const response = await fetch(
      "https://testing.api.addme.ge/api/Card/GetCardQR?typeId=2&userName=Guro",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const dashboardData = {
  success: true,
  data: {
    totalViewCount: 545,
    countryViews: [
      {
        countryName: "Georgia",
        viewCount: 543,
        countryCode: "GE",
        coordinates: [42.3154, 43.3569]
      },
      {
        countryName: "Vietnam",
        viewCount: 2,
        countryCode: "VN",
        coordinates: [14.0583, 108.2772]
      },
      {
        countryName: "United States",
        viewCount: 320,
        countryCode: "US",
        coordinates: [37.0902, -95.7129]
      },
      {
        countryName: "Germany",
        viewCount: 210,
        countryCode: "DE",
        coordinates: [51.1657, 10.4515]
      },
      {
        countryName: "Japan",
        viewCount: 180,
        countryCode: "JP",
        coordinates: [36.2048, 138.2529]
      },
      
    ],
    cityViews: [
      {
        cityName: "Tbilisi, Georgia",
        viewCount: 543,
      },
      {
        cityName: "Ho Chi Minh City, Vietnam",
        viewCount: 2,
      },
    ],
  },
  errorCode: 0,
  errors: null,
};

