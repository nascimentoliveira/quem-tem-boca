import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import api from '@/utils/api';
import Establishment from '@/types/Establishment';
import useUser from './useUser';

const useEstablishment = (query?: string | null) => {
  const [establishments, setEstablishments] = useState<Establishment[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { accessToken } = useUser();

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const fetchEstablishmentsData = async () => {
      try {
        setLoading(true);
        const response = await api.get(
          query ? `/establishments/search?query=${query}` : '/establishments',
          config,
        );
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
  }, [accessToken, query]);

  return { establishments, loading };
};

export default useEstablishment;
