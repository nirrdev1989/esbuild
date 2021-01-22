import { createStore, combineReducers, applyMiddleware } from "redux";
import { codeCellReducer } from "./code-cells/reducers";
import { logger } from "redux-logger";
import { ActionsTypesNamesCodeCell } from "./code-cells/actions.types";
import { bundleReducer } from "./bundle/reducers";
import thunk from "redux-thunk";
import { modalRducer } from "./modal/reducers";

const rootReducer = combineReducers({
    codeCell: codeCellReducer,
    bundle: bundleReducer,
    modal: modalRducer
})



const middeleWeres = [thunk]

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(
    rootReducer,
    {},
    applyMiddleware(...middeleWeres)
)

store.dispatch({
    type: ActionsTypesNamesCodeCell.ADD_CODE_CELL,
    payload: {
        id: null,
        title: '',
        description: ''
    }
})




















const x = `   const rootElement = document.querySelector('#root');
const inputTitle = document.createElement('input');
inputTitle.type = 'text';
rootElement.appendChild(inputTitle);

const notes = [];

function styleRootElement() {
  rootElement.style.width = '100%';
  rootElement.style.height = '300px';
  rootElement.style.display = 'flex';
  rootElement.style.flexDirection = 'column';
}

function button() {
  const buttonEle = document.createElement('button');
  buttonEle.textContent = 'Add note';
  buttonEle.addEventListener('click', addNote);
  rootElement.appendChild(buttonEle);
}

styleRootElement();
button();

function addNote() {
  const val = inputTitle.value;
  if (val === '') return;

  const note = new Note(val, new Date().toDateString());
  notes.push(note);

  const card = createNote(note.title, note.date);

  rootElement.appendChild(card);
}

function Note(title) {
  this.title = title;
}

function createNote(title, date) {
  const card = document.createElement('div');
  card.style.width = '50px';
  card.style.height = '50px';

  const pTitle = document.createElement('p');

  pTitle.textContent = title;

  card.appendChild(pTitle);

  return card;
}`




