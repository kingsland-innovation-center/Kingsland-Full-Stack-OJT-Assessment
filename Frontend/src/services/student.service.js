import { instance } from "./axios";

class StudentService {
  async getAllStudents() {
    const response = await instance.get(`student`);
    return response.data;
  }

  async getStudent(id) {
    const response = await instance.get(`student/${id}`);
    return response.data;
  }

  async addStudent(firstName, lastName, program, email) {
    const response = await instance.post(`student`, {
      firstName,
      lastName,
      program,
      email,
    });
    return response.data;
  }

  async deleteStudent(id) {
    const response = await instance.delete(`student/${id}`);
    return response.data;
  }

  async editStudent(id, firstName, lastName, program, email) {
    const response = await instance.patch(`student/${id}`, {
      firstName,
      lastName,
      program,
      email,
    });
    return response.data;
  }
}

export default new StudentService();
