import { React } from "react";
import "../assets/css/style.css";
import { Space, Table,Button} from 'antd';
const SimpleTable = ({ dataSource,onDelete ,onEdit}) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title:"Action",
      key:"action",
      render:(_, record) => (
        <Space size="middle">
            <Button type="primary" danger onClick={()=> onDelete(record.id)}>Delete</Button>
        </Space>
      ),
    },
    {
      title:"Action",
      key:"action",
      render:(_, record) => (
        <Space size="middle">
            <Button type="primary" onClick={()=>{
              const newname= prompt("enter new name",record.name);
              const newemail=prompt("enter new name",record.email);
              if(newname && newemail){
                onEdit(record.id,{name:newname,email:newemail})
              }
            }}>Edit</Button>
        </Space>
      ),
    },

  ];
  return (
    <div>
      {dataSource.length ? (
        <>
          
      <Table dataSource={dataSource} columns={columns} rowKey="id"/>
  
        </>
      ) : (
        "No user data"
      )}
    </div>
  );
};

export default SimpleTable;
