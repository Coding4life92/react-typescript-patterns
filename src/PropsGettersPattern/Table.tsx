import React, { useMemo, useState } from 'react';

export interface Column {
    id: string;
    label: string;
    sortable: boolean;
}

interface TableProps {
    columns: Column[];
    data: any[];
}

interface TableHeaderProps {
    column: Column;
    onSort: (columnId: string) => void;
    isActive: boolean;
    direction: 'asc' | 'desc';
}

const TableHeader: React.FC<TableHeaderProps> = ({ column, onSort, isActive, direction }) => {
    const handleSort = () => {
        if (column.sortable) {
            onSort(column.id);
        };
    };

    return (
        <th onClick={handleSort} style={{ cursor: column.sortable ? 'pointer' : 'default' }}>
            {column.label}
            {isActive && (direction === 'asc' ? ' 🔼' : ' 🔽')}

        </th>
    );
};

type SortDirection = 'asc' | 'desc';

const Table: React.FC<TableProps> = ({ columns, data }) => {
    const [sortColumn, setSortColumn] = useState<string | null>(null);
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

    const handleSort = (columnId: string) => {
        if (sortColumn === columnId) {
            setSortDirection(prev => (prev === 'asc' ? 'desc' : 'asc'));
        } else {
            setSortColumn(columnId);
            setSortDirection('asc');
        }
    };

    const sortedData = useMemo(() => {
        if (!sortColumn) return data;

        return [...data].sort((a, b) => {
            const aValue = a[sortColumn];
            const bValue = b[sortColumn];

            if (aValue == null) return 1;
            if (bValue == null) return -1;

            if (typeof aValue === 'number' && typeof bValue === 'number') {
                return sortDirection === 'asc'
                    ? aValue - bValue
                    : bValue - aValue;
            }

            return sortDirection === 'asc'
                ? String(aValue).localeCompare(String(bValue))
                : String(bValue).localeCompare(String(aValue));
        });
    }, [data, sortColumn, sortDirection]);

    return (
        <table>
            <thead>
                <tr>
                    {columns.map(column => (
                        <TableHeader
                            key={column.id}
                            column={column}
                            onSort={handleSort}
                            isActive={sortColumn === column.id}
                            direction={sortDirection}
                        />
                    ))}
                </tr>
            </thead>
            <tbody>
                {sortedData.map((row, index) => (
                    <tr key={index}>
                        {columns.map(column => (
                            <td key={column.id}>{row[column.id]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;