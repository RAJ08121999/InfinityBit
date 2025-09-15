import { Box } from "@chakra-ui/react";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import DATA from "../data";
import {useState} from 'react';

const columns =[
    {
        accessorKey:'task',
        header:"Task",
        cell:(props)=><p>{props.getValue()}</p>
    },
    {
        accessorKey:'status',
        header:"Status",
        cell:(props)=><p>{props.getValue()}</p>
    },
    {
        accessorKey:'due',
        header:"Due",
        cell:(props)=><p>{props.getValue()}</p>
    },
    {
        accessorKey:'notes',
        header:"Notes",
        cell:(props)=><p>{props.getValue()}</p>
    },

]
const TaskTable = () => {
    const [data,setData]= useState(DATA);
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel:getCoreRowModel()
    });
    return (
        <Box>
            <Box className="table">
                {table.getHeaderGroups().map(headerGroup => <Box className="tr" key={headerGroup.id}>
                    {headerGroup.headers.map(
                        header=><Box className="th" key={header.id}>
                            {header.column.columnDef.header}
                        </Box>
                    )}
                </Box>)}
                {
                    table.getRowModel().rows.map(row => <Box className="tr" key={row.id}>
                        {row.getVisibleCells().map(cell =><Box className="td" key={cell.id}>
                            {
                                flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                )   
                            }
                        </Box>)}
                    </Box>)
                }
            </Box>
        </Box>
    )
};
export default TaskTable;