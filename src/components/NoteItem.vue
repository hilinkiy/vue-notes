<template>
  <div class="main__note">
    <div class="note__head">
      <h3 class="note__title">{{ note.title }}</h3>
      <p class="note__date">{{ note.date }}</p>
    </div>
    <p class="note__descr">{{ note.descr }}</p>
    <div class="note__btns">
      <button>
        <img src="../assets/images/edit.svg" alt="" /><span class="edit"
          >Редактировать</span
        >
      </button>
      <button>
        <img src="../assets/images/delete.svg" alt="" /><span class="delete"
          >Удалить</span
        >
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  note: {
    typeof: Object
  }
})
</script>

<style lang="scss">
.main__note {
  padding: 16px;
  border-radius: 16px;
  background: linear-gradient(
      0deg,
      rgba(103, 80, 164, 0.05) 0%,
      rgba(103, 80, 164, 0.05) 100%
    ),
    #fffbfe;

  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15),
    0px 1px 2px 0px rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  cursor: pointer;
  width: 100%;

  & button {
    background: none;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.1px;
    transition: 0.3s;
    text-transform: uppercase;
  }
}

.note__btns {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}

.note__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.delete {
  color: #cf1b1b;
}

.edit {
  color: #6750a4;
}
</style>