import { MdSearch } from 'react-icons/md';

const SearchInput = () => {
  return (
    <div className="mb-4 ml-auto mr-0 w-[200px] text-right relative">
      <input
        type="text"
        className="py-[6px] px-3 text-sm border border-slate-300 rounded"
        placeholder="search..."
      />
      <MdSearch className="text-slate-600 absolute top-[50%] right-[10px] -translate-y-2/4" />
    </div>
  );
};

export default SearchInput;
