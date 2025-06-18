import { Table, Button, Space, Popconfirm } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../redux/store';
import type { AppDispatch} from '../../redux/store'
import {
  deleteStudent,
  selectStudent,
} from '../../redux/slices/studentSlice';
import StudentFormModal from './StudentFormModal';

export default function StudentTable() {
  const students = useSelector((state: RootState) => state.student.list);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <StudentFormModal />

      <Table
        dataSource={students}
        rowKey="id"
        columns={[
          { title: 'Tên học sinh', dataIndex: 'name' },
          { title: 'Tuổi', dataIndex: 'age' },
          { title: 'Lớp', dataIndex: 'class' },
          {
            title: 'Hành động',
            render: (_, record) => (
              <Space>
                <Button onClick={() => dispatch(selectStudent(record))}>Sửa</Button>
                <Popconfirm
                  title="Bạn chắc chắn xóa?"
                  onConfirm={() => dispatch(deleteStudent(record.id))}
                >
                  <Button danger>Xóa</Button>
                </Popconfirm>
              </Space>
            ),
          },
        ]}
      />
    </div>
  );
}
