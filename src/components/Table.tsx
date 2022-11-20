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

  const [searchParam] = useState<string[]>(['name', 'username', 'phone', 'website']);

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

  return (
    <div className="p-6 w-[90%] lg:w-[80%] xl:w-[60%] mx-auto bg-white shadow">
      <div className="mb-4 ml-auto mr-0 w-[200px] text-right relative">
      <input
        type="text"
        className="py-[6px] px-3 text-sm border border-slate-300 rounded"
        placeholder="search..."
        value={searchKey}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchKey(e.target.value)}
      />
      <MdSearch className="text-slate-600 absolute top-[50%] right-[10px] -translate-y-2/4" />
    </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead className="text-xs text-left font-semibold uppercase text-gray-500 bg-gray-100">
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
    </div >
  );
};

export default Table;
