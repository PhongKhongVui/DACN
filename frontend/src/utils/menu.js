import icons from './icons';

const { MdOutlineLibraryMusic, TbChartArcs, HiOutlineChartPie} = icons;
export const sidebarMenu = [
    {
        path: 'library',
        text: 'Thư viện',
        icons: <MdOutlineLibraryMusic size={24}/>,
    },

    {
        path: '',
        text: 'Khám phá',
        end: true,
        icons: <TbChartArcs size={24}/>,
    },

    {
        path: 'zing-chart',
        text: 'Zing Chart',
        icons: <HiOutlineChartPie size={24}/>,
    },


]

