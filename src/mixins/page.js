const pageMixin = {
  data() {
    return {
      page: {
        total: 0,
        items_per_page: 10,
        page: 1
      }
    }
  }
}

export default pageMixin
