import { GiTeacher, GiFlatfish } from 'react-icons/gi';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { TfiWrite } from 'react-icons/tfi';
import { RiComputerLine } from 'react-icons/ri';

const getDataExp = () => {
  return [
    {
      id: 1,
      icon: <RiComputerLine />,
      nama: 'Front End',
      perusahaan: 'PT. Len Industri',
      time: 'Feb 2023 - Present',
      lokasi: 'Bandung',
    },
    {
      id: 2,
      icon: <GiTeacher />,
      nama: 'Assistant',
      perusahaan: 'Lab Teknik Komputer',
      time: 'Sep 2022 - Present',
      lokasi: 'Universitas Lampung',
    },
    {
      id: 3,
      icon: <FaChalkboardTeacher />,
      nama: 'Mentor',
      perusahaan: 'Beasiswa Unggulan',
      time: 'May 2022 - Sep 2022',
      lokasi: 'Virtual',
    },
    {
      id: 4,
      icon: <TfiWrite />,
      nama: 'Writer',
      perusahaan: 'Lokpro Media',
      time: 'Jan 2022 - Apr 2022',
      lokasi: 'Virtual',
    },
    {
      id: 5,
      icon: <GiFlatfish />,
      nama: 'Founder',
      perusahaan: 'Betta.Geh',
      time: 'Sep 2020 - Jul 2021',
      lokasi: 'Bandar Lampung',
    },
  ];
};

export { getDataExp };
