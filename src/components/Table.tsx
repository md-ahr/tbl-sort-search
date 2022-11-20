import { FaSort } from 'react-icons/fa';
import SearchInput from './SearchInput';

const Table = () => {
  return (
    <div className="p-6 w-[90%] lg:w-[80%] xl:w-[60%] mx-auto bg-white shadow">
      <SearchInput />

      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead className="text-xs font-semibold uppercase text-gray-500 bg-gray-100">
            <tr>
              <th className="p-2 whitespace-nowrap">ID</th>
              <th className="p-2 whitespace-nowrap cursor-pointer">
                Name <FaSort className="mb-1 inline" />
              </th>
              <th className="p-2 whitespace-nowrap cursor-pointer">
                <span>Username</span> <FaSort className="mb-1 inline" />
              </th>
              <th className="p-2 whitespace-nowrap cursor-pointer">
                Phone <FaSort className="mb-1 inline" />
              </th>
              <th className="p-2 whitespace-nowrap cursor-pointer">
                Website <FaSort className="mb-1 inline" />
              </th>
            </tr>
          </thead>
            <tbody className="text-sm text-center text-gray-900 divide-y divide-gray-100">
              <tr>
                <td className="p-2 whitespace-nowrap">
                  <div className="font-medium text-gray-800">1</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="">alexshatov@gmail.com</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="">$2,890.66</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="">78678645</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="">https://ahr.com</div>
                </td>
              </tr>
              <tr>
                <td className="p-2 whitespace-nowrap">
                  <div className="font-medium text-gray-800">2</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="">alexshatov@gmail.com</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="">$2,890.66</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="">78678645</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="">https://ahr.com</div>
                </td>
              </tr>
            </tbody>
        </table>
      </div>
    </div >
  );
};

export default Table;
