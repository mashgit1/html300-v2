export const imageBorderMixin = {
    data() {
      return {
        isBorderVisible: false
      };
    },
    methods: {
      toggleBorder() {
        this.isBorderVisible = !this.isBorderVisible;
      }
    }
  };