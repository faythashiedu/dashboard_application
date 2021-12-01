import "./users.css";
import { useState } from "react";
import { DataGrid } from '@material-ui/data-grid';
import { Delete, BorderColor } from "@material-ui/icons";
import { UserRows } from "../../Components/UserList";
import { routes } from "../../Utilities/route";
import { Link } from "react-router-dom";


const Users = () => {

    const [data, setData] =useState(UserRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'Username', headerName: 'User Name', width: 180 },
        { field: 'Email', headerName: 'Email', width: 180 },
        {
          field: 'status',
          headerName: 'Status',
          width: 130,
        },
        {
          field: 'transaction',
          headerName: 'Total Payments',
          width: 180,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 180,
          renderCell: (params) => {
                return (
                    // <button className="actionBtn">Edit</button>
                    <>
                    {/* <div className="actionEdit"> */}
                        <Link to={`${routes.users}/${params.row.id}`} className="actionEdit">
                            <BorderColor />
                        </Link>
                    {/* </div >                     */}
                    <div className="actionDel" onClick={() => handleDelete(params.row.id)} >
                        <Delete />
                    </div>
                    </>
                )
          }
        },
        
      ];
      
      
    return (
        <div className="userMain">
            <h3 className="title">Simply Users</h3>
            <div className="datagrid">
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={7}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                    checkboxSelection
                />
            </div>
        </div>
    )
}

export default Users;
