import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Calc from '../../components/calc/Calc';

const index: NextPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <Calc />;
};

export default index;
