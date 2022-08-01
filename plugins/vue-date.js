import Vue from 'vue';
import dayjs from "dayjs";

Vue.filter('dateFormat', function (value, formatType = "DD/MM/YYYY") {
  const formatted = dayjs(value).format(formatType);

  return formatted;
})
