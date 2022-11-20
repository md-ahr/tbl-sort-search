import axios, { AxiosResponse } from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
import { FaSort } from 'react-icons/fa';
import { MdSearch } from 'react-icons/md';
import { UserType } from '../types/UserType';

const Table = () => {
  let [userData, setUserData] = useState<UserType[]>([{
    id: 0,
    name: '',
    username: '',
    phone: '',
    website: ''
  }]);

  const [searchKey, setSearchKey] = useState<string>('');

  const [sortedField, setSortedField] = useState<string>('');

  const [searchParam] = useState<string[]>(['name', 'username', 'phone', 'website']);

  const [sortConfig, setSortConfig] = useState<any>(null);

  const getUsers = async () => {
    const response: AxiosResponse<any, any> = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users: UserType[] = response.data;
    setUserData(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const searchFilter = () => userData.filter((data: any) => {
    return searchParam.some((param) => {
      return data[param].toLowerCase().includes(searchKey.toLowerCase());
    });
  });

  if (sortConfig !== '') {
    userData.sort((a: any, b: any) => {
      if (a[sortConfig?.key] < b[sortConfig?.key]) {
        return sortConfig?.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig?.key] > b[sortConfig?.key]) {
        return sortConfig?.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }

  const requestSort = (key: any) => {
    let direction = 'ascending';
    if (sortConfig?.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  }

  const getClassNamesFor = (name: any) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig?.direction : undefined;
  };

  return (
    <div className="p-6 w-[90%] lg:w-[80%] xl:w-[60%] mx-auto bg-white shadow">
      <div className="mb-4 flex items-end">
        <p className="text-sm text-slate-700">Showing {searchFilter().length} of 10</p>
        <div className="w-[200px] text-right ml-auto relative">
          <input
            type="text"
            className="py-[6px] px-3 text-sm border border-slate-300 rounded"
            placeholder="search..."
            value={searchKey}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchKey(e.target.value)}
          />
          <MdSearch className="text-slate-600 absolute top-[50%] right-[10px] -translate-y-2/4" />
        </div>
      </div>

      <div className={`overflow-x-auto ${searchFilter().length < 1 ? 'hidden' : 'visible'}`}>
        <table className="table-auto w-full">
          <thead className="text-xs text-left font-semibold uppercase text-gray-500 bg-gray-100">
            <tr>
              <th className="p-2 whitespace-nowrap">ID</th>
              <th onClick={() => requestSort('name')} className="p-2 whitespace-nowrap cursor-pointer">
                Name <FaSort className="mb-1 inline" />
              </th>
              <th onClick={() => requestSort('username')} className={`p-2 whitespace-nowrap cursor-pointer ${getClassNamesFor('name')}`}>
                <span>Username</span> <FaSort className="mb-1 inline" />
              </th>
              <th onClick={() => requestSort('phone')} className="p-2 whitespace-nowrap cursor-pointer">
                Phone <FaSort className="mb-1 inline" />
              </th>
              <th className="p-2 whitespace-nowrap cursor-pointer">
                Website <FaSort className="mb-1 inline" />
              </th>
            </tr>
          </thead>
            <tbody className="text-sm text-left text-gray-900 divide-y divide-gray-100">
              {userData.length > 0 && searchFilter().map((user: UserType) => (
                <tr key={user.id}>
                  <td className="p-2 whitespace-nowrap">
                    <div className="font-medium">{user.id}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div>{user.name}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div>{user.username}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div>{user.phone}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap hover:text-blue-600">
                    <a href={`https://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a>
                  </td>
                </tr>
              ))}
            </tbody>
        </table>
      </div>

      <div className={`overflow-x-auto border-t ${searchFilter().length < 1 ? 'visible' : 'hidden'}`}>
        <p className="pt-4 text-slate-500 text-center">No users found with text <strong>{searchKey}</strong></p>
      </div>
    </div >
  );
};

export default Table;
