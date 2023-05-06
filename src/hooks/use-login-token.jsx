import { useState, useEffect } from 'react';

export function useLoginToken() {
  const [token, setToken] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const storageToken = localStorage.getItem('token');
      if (storageToken === 'true') {
        if (token !== true) {
          setToken(true);
        }
      } else {
        if (token === true) {
          setToken(false);
        }
      }
    });

    return () => {
      clearInterval(interval);
    };
  }, [token]);

  return token
}
