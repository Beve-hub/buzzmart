import { GoHomeFill } from "react-icons/go";
import { FaFire } from "react-icons/fa";
import { MdLibraryMusic } from "react-icons/md";
import { MdAddBox } from "react-icons/md";

export const link = [
    {
        name: 'Home',
        icon: <GoHomeFill />,
        path: '/'
    },
    {
        name: 'Discover',
        icon: <FaFire />,
        path: '/Discover'
    },
    {
        name: 'My libary',
        icon: <MdLibraryMusic />,
        path: '/Libary'
    },
    {
        name: 'Create Playlist',
        icon: <MdAddBox />,
        path: '/Playlist'
    },
]