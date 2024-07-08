import React, { useEffect, useState } from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import { HiPlus } from 'react-icons/hi';
import { Table, Button, Space, Modal, Input, Form } from 'antd';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useSensor, useSensors, PointerSensor, KeyboardSensor } from '@dnd-kit/core';
import SortableItem from '../../components/sortable';
import MainLayout from '../../layout/MainLayout';
import Swal from 'sweetalert2'

export default function LessonEdit() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [form] = Form.useForm();
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const columns = [
    {
      title: '',
      dataIndex: '',
      fixed: 'true',
      width: 56,
      key: 'drager',
      align: 'center',
      render: () => <IoMenuOutline />,
    },
    {
      title: 'ชื่อบทเรียน',
      dataIndex: 'lesName',
      key: 'lesName',
    },
    {
      title: 'Action',
      key: 'action',
      fixed: 'true',
      width: 200,
      align: 'center',
      render: () => (
        <Space size="middle">
          <Button className='bg-warning'>Edit</Button>
          <Button type="primary" danger>Delete</Button>
        </Space>
      ),
    },
  ];

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setData((items) => {
        const oldIndex = items.findIndex((item) => item.lesID === active.id);
        const newIndex = items.findIndex((item) => item.lesID === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleOk = () => {
    form.submit();
  };

  const handleFormSubmit = async (values) => {

    const formData = new FormData();
    formData.append('lesName', values.lesName);
    await fetch('http://localhost:8080/backendelearning/service/lesson', {
      method: 'POST',
      body: formData,
    }).then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
      .then((data) => {

        console.log(data);
        setIsModalOpen(false)
        Swal.fire({
          title: 'success',
          text: 'success.',
          icon: 'success',
          confirmButtonText: 'Ok',
        }).then(() => {
          fetchData()
        })
      }
      ).catch((error) => {
        console.error('Error:', error);
        Swal.fire({
          title: 'Error!',
          text: 'An error occurred. Please try again later.',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      })
  }

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.error('Failed:', errorInfo);
  };
  const fetchData = async () => {
    await fetch("http://localhost:8080/backendelearning/service/lesson")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 1) {
          setData(data.lesson || []);
        } else {
          console.error("Error fetching lessons:", data.message);
        }
      })
      .catch((error) => console.error("Error:", error));
  }
  useEffect(() => {
    fetchData()
  }, []);

  useEffect(() => { console.log(data); }, [data]);

  return (
    <MainLayout>
      <div className="w-100 h-100">
        <div className="w-100 d-flex flex-row justify-content-end my-2">
          <Button onClick={() => setIsModalOpen(true)} type='default' className='bg-success text-white py-3 d-flex flex-row align-items-center justify-content-center gap-1 px-2'>
            <HiPlus />Create
          </Button>
          <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Form
              form={form}
              onFinish={handleFormSubmit}
              onFinishFailed={onFinishFailed}
              layout="vertical"
              requiredMark={false}
              name="lessonForm"
            >
              <Form.Item
                layout="vertical"
                style={{ marginBottom: '0px' }}
                colon={false}
                label="ชื่อบทเรียน"
                name="lesName"
                rules={[{ required: true, message: '' }]}
                className="w-full"
              >
                <Input />
              </Form.Item>
            </Form>
          </Modal>
        </div>
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          {data.length > 0 && (
            <SortableContext items={data.map(item => item.lesID)} strategy={verticalListSortingStrategy}>
              <Table
                columns={columns}
                dataSource={data}
                components={{
                  body: {
                    row: SortableItem,
                  },
                }}
                rowKey="lesID"
              />
            </SortableContext>
          )}
        </DndContext>
      </div>
    </MainLayout>
  );
}
