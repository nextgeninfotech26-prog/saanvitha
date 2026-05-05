import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Table = ({
  columns = [],
  data = [],
  striped = true,
  bordered = true,
  hover = true,
  responsive = true,
  size = '', // sm, lg
  className = '',
  theadClass = 'table-primary',
  tbodyClass = '',
  noDataMessage = 'No data available',
  tableStyle = {}, // Extra inline styles for table
}) => {
  return (
    <div
      className={responsive ? 'table-responsive' : ''}
      style={{
        overflowX: 'auto', // horizontal scroll
        whiteSpace: 'nowrap', // prevent wrapping
      }}
    >
      <table
        className={`table ${striped ? 'table-striped' : ''} ${
          bordered ? 'table-bordered' : ''
        } ${hover ? 'table-hover' : ''} ${size ? `table-${size}` : ''} ${className}`}
        style={tableStyle}
      >
        {columns.length > 0 && (
          <thead className={theadClass}>
            <tr>
              {columns.map((col, index) => (
                <th key={index} className={col.thClass || ''}>
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody className={tbodyClass}>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className={col.tdClass || ''}>
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="text-center text-muted">
                {noDataMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
