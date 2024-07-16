export const fetchData = async () => {
    try {
      const response = await fetch("https://testing.api.addme.ge/api/card/getcard/Guro", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      return await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };
  