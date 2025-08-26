import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState = {
  text: "",
  textExample: `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a  
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.`,
  isShowingHelp: false,
};
const counterSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    setText(state, action) {
      state.text = action.payload;
    },
    setTextExample(state, action) {
      state.textExample = action.payload;
    },
    setIsShowingHelp(state) {
      state.isShowingHelp = !state.isShowingHelp;
    },
  },
});
export const { setText, setTextExample, setIsShowingHelp } =
  counterSlice.actions;

export const store = configureStore({
  reducer: counterSlice.reducer,
});
