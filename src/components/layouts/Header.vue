<template>
  <header class="header_class">
    <div class="header_menu">
      <div class="item">Search</div>
      <div class="item">Notification</div>
      <div class="item">User</div>
    </div>
  </header>
</template>
<style lang="scss">
header {
  padding: 1rem;
  background-color: var(--light);
  color: var(--dark);
  position: relative;
  .header_menu {
    display: flex;
    align-items: center;
    justify-content: end;

    .item {
      padding-left: 10px;
      cursor: pointer;
    }
  }
}
</style>
