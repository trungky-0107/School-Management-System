import { Modal, Form, Input, InputNumber } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  addStudent,
  updateStudent,
  selectStudent,
} from '../../redux/slices/studentSlice';
import type { RootState, AppDispatch } from '../../redux/store';
import { useEffect, useState } from 'react';
import type { Student } from '../../types/student';
import { v4 as uuidv4 } from 'uuid';

export default function StudentFormModal() {
  const [form] = Form.useForm();
  const dispatch = useDispatch<AppDispatch>();
  const student = useSelector((state: RootState) => state.student.selected);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (student) {
      form.setFieldsValue(student);
      setOpen(true);
    } else {
      form.resetFields();
    }
  }, [student]);

  const handleSubmit = (values: Student) => {
    if (student?.id) {
      dispatch(updateStudent({ ...values, id: student.id }));
    } else {
      dispatch(addStudent({ ...values, id: uuidv4() }));
    }
    dispatch(selectStudent(null));
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        title={student ? 'Cập nhật học sinh' : 'Thêm học sinh'}
        onCancel={() => {
          dispatch(selectStudent(null));
          setOpen(false);
        }}
        onOk={() => form.submit()}
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Tên" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Tuổi" name="age" rules={[{ required: true }]}>
            <InputNumber min={6} max={100} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item label="Lớp" name="class" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
