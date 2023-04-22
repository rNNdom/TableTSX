 const tableStyles = (width: string, px: string = "4") => `px-${px} py-4 text-sm break-words max-w-[${width}]`;
export const mappedStyles = (column: string) =>
  ({
    id: tableStyles("50px"),
    name: tableStyles("200px"),
    username: tableStyles("200px"),
    email: tableStyles("200px"),
    address: tableStyles("200px"),
    phone: tableStyles("200px"),
    website: tableStyles("200px"),
    company: tableStyles("200px"),
  }[column]);