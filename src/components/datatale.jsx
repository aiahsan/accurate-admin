import React from "react";
 import DataTable from "react-data-table-component";
export default function DatatableCom({ columns, data, title }) {
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =  React.useState(false);
  const filteredItems = data.filter(
    (item) =>
      item.email && item.email.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <input
        className="asdifsf"
        placeholder="Filter by email"
        onChange={(e) => setFilterText(e.target.value)}
      />
    );
  }, [filterText, resetPaginationToggle]);
  //   const actionsMemo = <CSVLink data={ExpData}>Download CSV</CSVLink>;
  return (
    <DataTable
      title={title}
      columns={columns}
      data={filteredItems}
      pagination
      paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      //   selectableRows
      persistTableHead
      //   actions={actionsMemo}
    />
  );
}
