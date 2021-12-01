import InfoCard from "../../Components/InfoCard/infoCard";
import "./staff.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../Utilities/route";
import { DataGrid } from '@material-ui/data-grid';
import { StaffList } from "../../Components/UserList";
import { BorderColor, Delete } from "@material-ui/icons";


const Staff = () => {

    const [staffData, setStaffData ] = useState(StaffList);

    const handleStaffDelete = (id) => {
        setStaffData(staffData.filter((item) => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'names', 
          headerName: 'Name',
          width: 200,
          renderCell: (params) => {
              return (
                  <>
                    <img src={params.row.src} className="staffImg" />
                    <div>{params.row.name}</div>
                  </>
              )
          }
        },
        { field: 'job_title', headerName: 'Title', width: 180 },
        {
          field: 'email',
          headerName: 'Email',
          width: 180,
        },
        {
          field: 'rank',
          headerName: 'Ranks',
          sortable: false,
          width: 160,
          renderCell: (params) => {
              return (
                  <>
                    <div className={`staff${params.row.rank}`}>{params.row.rank}</div>
                  </>
              )
          }
          
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 180,
            renderCell: (params) => {
                  return (
                      <>
                          <Link to={`${routes.staff}/${params.row.id}`} className="staffEdit">
                              <BorderColor />
                          </Link>
                      <div className="staffDel" onClick={() => handleStaffDelete(params.row.id)} >
                          <Delete />
                      </div>
                      </>
                  )
            }
          },
      ];

    return (
        <div className="staffMain">
            <div className="staffCard">
                <InfoCard title="Senior" fund="10 Members" extra="Board Members" bgColor="#A5D8DD" />
                <InfoCard title="Administrator" fund="20 Members" extra="Team Leads" bgColor="#EA6A47" />
                <InfoCard title="Junior" fund="139 Members" extra="Normal Staffs" bgColor="#0091D5" />
            </div>
            <div className="staffTable">
                <h2>Simply Staffs</h2>
                <DataGrid
                    rows={staffData}
                    columns={columns}
                    pageSize={7}
                    // rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                    checkboxSelection
                />
            </div>
        </div>
    )
}

export default Staff;
