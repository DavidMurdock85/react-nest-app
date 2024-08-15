export const fetchResponse = async (): Promise<string> => {
    try {
      const response = await fetch('http://localhost:3001');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.text();
    } catch (error) {
      console.error('Fetch error:', error);
      return 'Error fetching data';
    }
  };