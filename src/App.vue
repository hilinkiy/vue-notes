<template>
  <header class="header">
    <nav class="nav">
      <div class="container d-flex justify-content-between align-items-center">
        <label for="">
          Язык:
          <select name="" id="">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </label>
        <h1 class="nav__title">For notes</h1>
        <button><img src="./assets/images/search.svg" alt="" /></button>
      </div>
    </nav>
  </header>
  <main class="main">
    <div class="main__content container">
      <h2 class="main__title">Все заметки</h2>
      <div class="main__notes">
        <NoteItem v-for="note in notes" :key="note.id" :note="note" />
      </div>
    </div>
  </main>
  <button class="addNote" @click="closeModal">
    <img src="./assets/images/edit.svg" alt="" />
  </button>
  <div class="modals" v-show="modalStatus" @closeModal="closeModal">
    <div class="modal__block">
      <h2 class="modal__title">Добавить заметку</h2>
      <div class="modal__inputs">
        <label for="">
          <span>Заголовок</span>
          <input
              type="text"
              placeholder="Заголовок"
              v-model="titleController"
          />
        </label>
        <label for="">
          <span>Заметка</span>
          <textarea placeholder="Заметка" v-model="descrController"></textarea>
        </label>
      </div>
      <div class="modal__btns">
        <button class="modal__btn cancel" @click="closeModal">Отмена</button>
        <button class="modal__btn add" @click="addNote">Добавить</button>
      </div>
    </div>
    <div class="close"></div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import NoteItem from "./components/NoteItem.vue";
import {getObjectFromLocalStorage} from "./storage/getItems.js";
import {addObjectToLocalStorage} from "./storage/setItems.js";

const notes = ref([]);
const modalStatus = ref(false);
const titleController = ref("");
const descrController = ref("");

const closeModal = () => {
  modalStatus.value = !modalStatus.value;
};

const addNote = () => {
  let note = {
    id: Date.now(),
    title:
        titleController.value.length > 0
            ? titleController.value
            : "Нет заголовка",
    descr:
        descrController.value.length > 0 ? descrController.value : "Нет заметки",
    date: new Date().toLocaleDateString(),
  };
  notes.value.push(note);
  addObjectToLocalStorage('notes', notes.value);
  titleController.value = "";
  descrController.value = "";
  modalStatus.value = !modalStatus.value;
};

watch(notes, (newNotes) => {
  addObjectToLocalStorage('notes', newNotes);
}, { deep: true });

const getAllItems = () => {
  let localNotes = getObjectFromLocalStorage('notes');
  if (localNotes) {
    notes.value = localNotes;
  }
};

onMounted(() => {
  getAllItems();
});
</script>

<style lang="scss">
.nav {
  padding: 18px 0;
  background: #f3edf7;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3),
    0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  & button {
    background: none;
    border: none;
    outline: none;
  }

  & select {
    border: none;
    outline: none;
    background: none;
  }
}

.main {
  padding: 50px 0;

  &__title {
    margin-bottom: 50px;
  }

  &__notes {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 50px;
  }
}

.addNote {
  border: none;
  outline: none;
  border-radius: 16px;
  background: #f3edf7;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3),
    0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 20px;
  position: absolute;
  right: 30px;
  bottom: 30px;
}
</style>