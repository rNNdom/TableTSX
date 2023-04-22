import { HeaderNames, translatedColumns } from "../utils/Headers";
import { mappedStyles } from "../utils/TableStyles";

export interface TableProps {
  entries: never[];
  columns: { name: HeaderNames; style: string }[];
  sorting: {
    column: string;
    order: string;
  };
  setSorting: (newSorting: any) => void;
}
interface ContentProps extends Pick<TableProps, "entries" | "columns"> {}
interface HeaderProps extends Pick<TableProps, "columns" | "sorting" | "setSorting"> {}

const HeaderCell = ({ column, sorting, setSorting }: any) => {
  const sortingDirection = sorting.column === column ? sorting.order : null;
  const handleClick = () => {
    const order = sortingDirection === "asc" ? "desc" : "asc";
    setSorting({ column, order });
  };

  return (
    <th key={column} id={column} className="bg-slate-400 pl-4" onClick={handleClick}>
      {translatedColumns(column as HeaderNames)}
      {sortingDirection === "asc" && <span className="px-2">&#8593;</span>}
      {sortingDirection === "desc" && <span className="px-2">&#8595;</span>}
      {!sortingDirection && <span className="px-2"> &#8597;</span>}
    </th>
  );
};
const Header = ({ columns, sorting, setSorting }: HeaderProps) => {
  return (
    <thead>
      <tr>
        {columns.map((column: any) => (
          <HeaderCell column={column.name} sorting={sorting} key={column.name} setSorting={setSorting} />
        ))}
      </tr>
    </thead>
  );
};
// We put the data in the table body making the row for every entry in the data
// and we then map through columns so we make a cell for every entry[column]
const Content = ({ entries, columns }: ContentProps) => {
  return (
    <tbody className="p-6">
      {entries.map((entry: any) => (
        <tr key={entry.id} id={entry.id} className="hover:bg-slate-300 even:bg-slate-200 bg-slate-100">
          {columns.map((column: any) => (
            <td id={translatedColumns(column.name as HeaderNames)} key={column.name} className={mappedStyles(column.name)}>
              {typeof entry[column.name] === "object" ? Object.values(entry[column.name])[0] : entry[column.name]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
export const Table = ({ entries, columns, sorting, setSorting }: TableProps) => {
  return (
    <div className="relative justify-center w-full overflow-x-auto ">
      <table className="text-sm min-w-full text-left table-fixed text-blue-700-color ">
        <Header columns={columns} sorting={sorting} setSorting={setSorting} />
        <Content entries={entries} columns={columns} />
      </table>
    </div>
  );
};
