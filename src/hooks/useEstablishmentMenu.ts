import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import api from '@/utils/api';
import useUser from './useUser';
import Establishment from '@/types/Establishment';

const useEstablishmentMenu = (id: number) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [establishmentMenu, setEstablishmentMenu] = useState<Establishment>();
  const { accessToken } = useUser();

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const fetchEstablishmentsMenuData = async () => {
      try {
        const response = await api.get(`/establishments/${id}/menu`, config);
        setEstablishmentMenu(response.data);
        setLoading(false);
      } catch (error: any) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response?.data.message,
          footer: `<p>Por que tenho esse problema? <br />
          Não foi possivel buscar o cardápio desse estabelecimentos.</p>`,
        });
        console.error('Error when searching for establishment data:', error);
        setLoading(false);
      }
    };

    fetchEstablishmentsMenuData();
  }, [accessToken, id]);

  return { establishmentMenu, loading };
};

export default useEstablishmentMenu;
