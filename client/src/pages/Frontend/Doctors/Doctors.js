import React, { useEffect, useState } from "react";
import HeaderComponent from "../../../components/HeaderComponent";
import doctor1 from "../../../assets/images/doctor1.jpg"
import doctor2 from "../../../assets/images/doctor2.jpg"
import doctor3 from "../../../assets/images/doctor3.jpg"

import axios from "axios"
import {
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  message,
} from "antd";
import { MdMarkEmailRead, MdPhone } from "react-icons/md";

const initialstate = { title: '', email: '', medical: '', date: '' };
const Doctors = () => {
  const pics = [doctor1, doctor2, doctor3]
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [state, setState] = useState(initialstate);
  const [selected, setSelected] = useState('Monday');
  const [id, setId] = useState(null);
  const [data, setData] = useState([]);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    let { title, date, email, medical } = state

    const pateint = {
      pateintName: title, pateintEmail: email, medical, selected, appointmentDate: date
    }
    console.log(pateint)
    try {
      const response = await axios.post(`http://localhost:7000/pateint/addpateint`, pateint);
      const token = response.data
      localStorage.setItem("auth-token", token)
      message.success("Please check Appointment page for check availability.")
      // navigate(`/appointment`);
      console.log(response.data.message)
    } catch (error) {
      message.error("Something went while adding pateint")
    }

  };

  const handleChange = (e) => {
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));
  };
  const handleDate = (_, date) => setState((s) => ({ ...s, date }));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:7000/doctor/showdoctor"
        );
        const doctorValue = response.data.message
        setData(doctorValue);
        console.log(doctorValue)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="min-h-screen">
      <HeaderComponent header="Doctor Details" />
      <div className="container mx-auto py-10 flex flex-wrap w-full gap-5">
        {data.map((doctor, i) => {
          return (
            <div className="border rounded flex w-[45%  ] gap-10" key={i}>
              <img src={pics[i]} className="w-full" alt="" />
              <div className="flex flex-col w-full gap-2 my-5 me-10">
                <h1 className="text-lg font-bold">{doctor.name}</h1>
                <span className="text-[#005963] mb-4">
                  {doctor.specailzation}
                </span>
                <div className="flex gap-2 items-center">
                  <div className="text-[#32929c]">
                    <MdPhone size={24} />
                  </div>
                  <a href="Mailto:" className="text-[#005963]">
                    {doctor.phone}
                  </a>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="text-[#32929c]">
                    <MdMarkEmailRead size={24} />
                  </div>
                  <a href="Mailto:" className="text-[#005963]">
                    {doctor.email}
                  </a>
                </div>
                <div className="flex justify-center mt-3">
                  <button
                    className="bg-[#32929c] rounded-md text-white px-4 py-2 w-fit"
                    onClick={() => {
                      setId(doctor._id);
                      showModal();
                    }}
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <>
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} centered footer={false}>
          <Form layout='vertical' className='my-5' onFinish={handleSubmit}>
            <h1 className='text-center text-xl text-[#005659] font-bold my-3' style={{ fontFamily: 'Poppins' }}>
              Patient Details
            </h1>
            <Form.Item>
              <Input type='text' placeholder='Input your Full Name' className='text-clr' name='title' onChange={handleChange} />
            </Form.Item>
            <Form.Item>
              <Input type='email' placeholder='Input your Email' className='text-clr' name='email' onChange={handleChange} />
            </Form.Item>
            <Form.Item>
              <Input type='text' placeholder='Your Medical History' className='text-clr' name='medical' onChange={handleChange} />
            </Form.Item>
            <Form.Item>
              <Select
                defaultValue='Monday'
                value={selected}
                onChange={(value) => { setSelected(value) }}
                options={[
                  {
                    value: 'Monday',
                    label: 'Monday',
                  },
                  {
                    value: 'Tuesday',
                    label: 'Tuesday',
                  },
                  {
                    value: 'Wednesday',
                    label: 'Wednesday',
                  },
                  {
                    value: 'Thrusday',
                    label: 'Thrusday',
                  },
                ]}
              />
            </Form.Item>
            <Form.Item>
              <DatePicker name='date' placeholder='select date' className='w-full text-clr' onChange={handleDate} />
            </Form.Item>
            <Form.Item>
              <div className='flex justify-center w-full'>

                <button htmlType='submit' type='submit' className='w-fit bg-[#005659] text-white rounded-lg px-4 py-2' onClick={handleSubmit}>
                  Book Appointment
                </button>

              </div>
            </Form.Item>
          </Form>
        </Modal>
      </>
    </main>
  );
};

export default Doctors;
