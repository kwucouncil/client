export default {
  dateFormatYMD(date) {
    date = new Date(date);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = `0${month}`;
    }

    if (day < 10) {
      day = `0${day}`;
    }

    return `${year}.${month}.${day}`;
  },

  dateFormatTMR(date) {
    date = new Date(date);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate() + 1;

    if (month < 10) {
      month = `0${month}`;
    }

    if (day < 10) {
      day = `0${day}`;
    }

    return `${year}.${month}.${day}`;
  },

  dateFormatYDA(date) {
    date = new Date(date);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate() - 1;

    if (month < 10) {
      month = `0${month}`;
    }

    if (day < 10) {
      day = `0${day}`;
    }

    return `${year}.${month}.${day}`;
  },

  dateFormatYMDT(date) {
    if (this.nullCheck(date)) {
      return "";
    }

    date = new Date(date);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();

    if (month < 10) {
      month = `0${month}`;
    }

    if (day < 10) {
      day = `0${day}`;
    }

    if (hour < 10) {
      hour = `0${hour}`;
    }

    if (minute < 10) {
      minute = `0${minute}`;
    }

    return `${year}.${month}.${day} ${hour}:${minute}`;
  },

  dateFormatYM(date) {
    date = new Date(date);
    let year = String(date.getFullYear()).substring(2);
    let month = date.getMonth() + 1;

    if (month < 10) {
      month = `0${month}`;
    }

    return `${year}년 ${month}월`;
  },

  dateFormatM(date) {
    date = new Date(date);
    let month = date.getMonth() + 1;

    if (month < 10) {
      month = `0${month}`;
    }

    return `${month}월`;
  },

  dateFormatD(date) {
    date = new Date(date);
    let day = date.getDate();

    if (day < 10) {
      day = `0${day}`;
    }
    
    return `${day}`;
  },

  dateFormatT(date) {
    date = new Date(date);
    let hour = date.getHours();
    let minute = date.getMinutes();

    if (hour < 10) {
      hour = `0${hour}`;
    }

    if (minute < 10) {
      minute = `0${minute}`;
    }

    return `${hour}시 ${minute}분`;
  },

  dateFormatT2(date) {
    date = new Date(date);
    let hour = date.getHours();
    let minute = date.getMinutes();

    if (hour < 10) {
      hour = `0${hour}`;
    }

    if (minute < 10) {
      minute = `0${minute}`;
    }

    return `${hour}:${minute}`;
  },

  dateFormatFULL(date) {
    if (this.nullCheck(date)) {
      return "";
    }

    date = new Date(date);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();

    if (month < 10) {
      month = `0${month}`;
    }

    if (day < 10) {
      day = `0${day}`;
    }

    if (hour < 10) {
      hour = `0${hour}`;
    }

    if (minute < 10) {
      minute = `0${minute}`;
    }

    const week = ["일", "월", "화", "수", "목", "금", "토"];

    const dayOfWeek = week[date.getDay()];

    return `${year}년 ${month}월 ${day}일 (${dayOfWeek} ${hour}:${minute})`;
  },

  dateConferenceDate(date1, date2) {
    if (this.nullCheck(date1) || this.nullCheck(date2)) {
      return "";
    }

    date1 = new Date(date1);
    date2 = new Date(date2);
    const year = date1.getFullYear();
    let month1 = date1.getMonth() + 1;
    let day1 = date1.getDate();
    let month2 = date2.getMonth() + 1;
    let day2 = date2.getDate();
    
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    
    const dayOfWeek1 = week[date1.getDay()];
    const dayOfWeek2 = week[date2.getDay()];

    const monthDay = month1 === month2 ? `${month1}월 ${day1}일(${dayOfWeek1}) ~ ${day2}일(${dayOfWeek2})` : `${month1}월 ${day1}일(${dayOfWeek1}) ~ ${month2}월 ${day2}일(${dayOfWeek2})`;

    return `${year}년 ${monthDay}`;
  },

  getYearOptions() {
    let option = [];
    for (let i = new Date().getFullYear(); i > 1900; i--) {
      option.push({ value: i, label: i });
    }

    return option;
  },

  getMonthOptions() {
    let option = [];
    for (let i = 1; i <= 12; i++) {
      if (i < 10) {
        option.push({ value: `0${i}`, label: `0${i}` });
      } else {
        option.push({ value: i, label: i });
      }
    }

    return option;
  },

  getDayOptions() {
    let option = [];
    for (let i = 1; i <= 31; i++) {
      if (i < 10) {
        option.push({ value: `0${i}`, label: `0${i}` });
      } else {
        option.push({ value: i, label: i });
      }
    }

    return option;
  },

  getNumber(value) {
    return Number(value).toLocaleString();
  },

  nullCheck(value) {
    return (
      value == "" || value == null || value == undefined || value == "undefined"
    );
  },

  getDateArr(arr) {
    if (arr === null) return null;
    const year = arr[0];
    const month = arr[1] < 10 ? `0${arr[1]}` : arr[1];
    const day = arr[2] < 10 ? `0${arr[2]}` : arr[2];
    const hour = arr[3] < 10 ? `0${arr[3]}` : arr[3];
    const minute = arr[4] < 10 ? `0${arr[4]}` : arr[4];
    return `${year}-${month}-${day} ${hour}:${minute}`;
  },

  getDateArr2(arr) {
    if (arr === null) return null;
    const year = arr[0];
    const month = arr[1] < 10 ? `0${arr[1]}` : arr[1];
    const day = arr[2] < 10 ? `0${arr[2]}` : arr[2];
    return `${year}-${month}-${day}`;
  },

  shortText(value, num) {
    if (value.length > num) {
      return value.slice(0, num) + "...";
    }
    return value;
  },

  getEditorContent(content) {
    const pattern = /<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi;
    const result = content.replace(pattern, "");

    const parser = new DOMParser();
    const doc = parser.parseFromString(result, "text/html");
    const imgElements = doc.querySelectorAll("img");
    imgElements.forEach((imgElement) => {
      imgElement.style.maxWidth = "100%";
      imgElement.style.height = "auto";
    });

    return doc.body.innerHTML;
  },

  imgFormat(content) {
    return content?.replaceAll('src="', `src="${import.meta.env.VITE_API_BASE_URL}`).replace(/<p><\/p>/g, '<br/>')
  }
};
