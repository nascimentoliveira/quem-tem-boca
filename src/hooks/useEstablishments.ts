import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import api from '@/utils/api';
import Establishment from '@/types/Establishment';

const useEstablishment = (accessToken: string | null) => {
  const [establishments, setEstablishments] = useState<Establishment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const fetchEstablishmentsData = async () => {
      try {
        const response = await api.get('/establishments', config);
        setEstablishments(response.data);
        setLoading(false);
      } catch (error: any) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response?.data.message,
          footer: `<p>Por que tenho esse problema? <br />
          Não foi possivel buscar os dados dos estabelecimentos.</p>`,
        });
        console.error('Error when searching for establishment data:', error);
        setLoading(false);
      }
    };

    fetchEstablishmentsData();
  }, [accessToken]);

  return { establishments, loading };
};

export default useEstablishment;
