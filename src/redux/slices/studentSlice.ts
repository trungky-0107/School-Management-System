import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Student } from '../../types/student';

interface StudentState {
  list: Student[];
  selected?: Student | null;
}

const initialState: StudentState = {
  list: [],
  selected: null,
};

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    setStudents: (state, action: PayloadAction<Student[]>) => {
      state.list = action.payload;
    },
    addStudent: (state, action: PayloadAction<Student>) => {
      state.list.push(action.payload);
    },
    updateStudent: (state, action: PayloadAction<Student>) => {
      const index = state.list.findIndex(s => s.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    deleteStudent: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(s => s.id !== action.payload);
    },
    selectStudent: (state, action: PayloadAction<Student | null>) => {
      state.selected = action.payload;
    },
  },
});

export const {
  setStudents,
  addStudent,
  updateStudent,
  deleteStudent,
  selectStudent,
} = studentSlice.actions;

export default studentSlice.reducer;
