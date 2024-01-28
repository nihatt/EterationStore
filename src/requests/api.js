
export const fetchProducts = async () => {
 

    try {
      const response = await fetch(`https://5fc9346b2af77700165ae514.mockapi.io/products`);
      if (response.ok) {
        const data = await response.json();
        return data;

      } else {
        throw new Error('Kullanıcı verileri alınamadı.');
      }
    } catch (error) {
      throw new Error('API isteği hatası: ' + error.message);
    }
  };

